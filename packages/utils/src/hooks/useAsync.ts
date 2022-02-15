// Reexported from react-use library.

import {
    DependencyList,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";

export type PromiseType<P extends Promise<any>> = P extends Promise<infer T>
    ? T
    : never;

export type FunctionReturningPromise = (...args: any[]) => Promise<any>;

export type AsyncState<T> =
    | {
          isLoaded: boolean;
          error?: undefined;
          data?: undefined;
      }
    | {
          isLoaded: false;
          error?: Error | undefined;
          data?: T;
      }
    | {
          isLoaded: true;
          error: Error;
          data?: undefined;
      }
    | {
          isLoaded: true;
          error?: undefined;
          data: T;
      };

type StateFromFunctionReturningPromise<T extends FunctionReturningPromise> =
    AsyncState<PromiseType<ReturnType<T>>>;

export type AsyncFnReturn<
    T extends FunctionReturningPromise = FunctionReturningPromise,
> = [StateFromFunctionReturningPromise<T>, T];

function useMountedState(): () => boolean {
    const mountedRef = useRef<boolean>(false);
    const get = useCallback(() => mountedRef.current, []);

    useEffect(() => {
        mountedRef.current = true;

        return () => {
            mountedRef.current = false;
        };
    }, []);

    return get;
}

function useAsyncFn<T extends FunctionReturningPromise>(
    fn: T,
    deps: DependencyList = [],
    initialState: StateFromFunctionReturningPromise<T> = { isLoaded: true },
): AsyncFnReturn<T> {
    const lastCallId = useRef(0);
    const isMounted = useMountedState();
    const [state, set] =
        useState<StateFromFunctionReturningPromise<T>>(initialState);

    const callback = useCallback((...args: Parameters<T>): ReturnType<T> => {
        const callId = ++lastCallId.current;

        if (state.isLoaded) {
            set((prevState) => ({ ...prevState, isLoaded: false }));
        }

        return fn(...args).then(
            (data) => {
                isMounted() &&
                    callId === lastCallId.current &&
                    set({ data, isLoaded: true });

                return data;
            },
            (error) => {
                isMounted() &&
                    callId === lastCallId.current &&
                    set({ error, isLoaded: true });

                return error;
            },
        ) as ReturnType<T>;
    }, deps);

    return [state, callback as unknown as T];
}

export default function useAsync<T extends FunctionReturningPromise>(
    fn: T,
    deps: DependencyList = [],
) {
    const [state, callback] = useAsyncFn(fn, deps, {
        isLoaded: false,
    });

    useEffect(() => {
        callback();
    }, [callback]);

    return state;
}
