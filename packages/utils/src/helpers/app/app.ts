import { RefObject } from "react";

export const initServiceWorker = (
    path = "/service-worker.js",
    scope = "/",
): void => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register(path, { scope }).then(
            (registration) => {
                console.log(
                    "Service worker successfully registered on scope:",
                    registration.scope,
                );
            },
            (error) => {
                console.log("Service worker failed to register:", error);
            },
        );
    }
};

export const removeCachedData = (): void => {
    try {
        caches
            .keys()
            .then((cacheKeys) => {
                cacheKeys.forEach((cacheName) => {
                    caches.delete(cacheName);

                    console.log("Cache removed.");
                });
            })
            .then(() => {
                navigator.serviceWorker
                    .getRegistrations()
                    .then((registrations) => {
                        registrations.forEach((registration) => {
                            registration.unregister();

                            console.log("Service worker unregistered.");
                        });
                    });

                window.location.reload();
            });
    } catch (error) {
        console.log("Service worker - Unable to clear the cache.", error);
    }
};

export const scrollToTop = (): void => window.scrollTo({ top: 0 });

export const scrollToRef = (ref: RefObject<HTMLElement>): void =>
    ref.current?.scrollIntoView();
