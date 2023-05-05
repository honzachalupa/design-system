import { useEffect } from "react";

export const useServiceWorker = (path = "/sw.js") => {
    useEffect(() => {
        window.addEventListener("load", () => {
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register(path).then(
                    (registration) => {
                        console.info(
                            "Service Worker registration successful with scope: ",
                            registration.scope
                        );
                    },
                    (err) => {
                        console.info(
                            "Service Worker registration failed: ",
                            err
                        );
                    }
                );
            }
        });
    }, []);

    return null;
};

/* import { useEffect, useState } from "react";

export const useServiceWorker = () => {
    const [status, setStatus] =
        useState<"registering" | "registered" | "failed">("registering");

    const onSuccess = ({ scope }: ServiceWorkerRegistration) => {
        setStatus("registered");

        console.info(
            "Service Worker registration successful with scope: ",
            scope
        );
    };

    const onError = (error: ServiceWorkerRegistration) => {
        setStatus("failed");

        console.info("Service Worker registration failed: ", error);
    };

    const onLoad = () => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").then(onSuccess, onError);
        }
    };

    useEffect(() => {
        addEventListener("load", onLoad);

        return () => {
            removeEventListener("load", onLoad);
        };
    }, []);

    return status;
};
 */
