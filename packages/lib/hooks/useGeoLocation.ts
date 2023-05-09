"use client";

import { useEffect } from "react";
import { useLocalStorage } from ".";

export interface GeolocationCoordinates {
    longitude: number | undefined;
    latitude: number | undefined;
}

export const useGeoLocation = () => {
    const [coordinates, setCoordinates] =
        useLocalStorage<GeolocationCoordinates>("currentLocation", {
            longitude: undefined,
            latitude: undefined,
        });

    const onCurrentPositionChanged = ({ coords }: GeolocationPosition) => {
        setCoordinates({
            longitude: coords.longitude,
            latitude: coords.latitude,
        });
    };

    const onError = () => {
        // alert("Geolocation service is not allowed.");

        setCoordinates({
            longitude: 14.41854,
            latitude: 50.073658,
        });
    };

    useEffect(() => {
        let watch: number;

        if (navigator.geolocation) {
            watch = navigator.geolocation.watchPosition(
                onCurrentPositionChanged,
                onError
            );
        } else {
            alert("Geolocation service is not supported.");
        }

        return () => {
            if (watch) {
                navigator.geolocation.clearWatch(watch);
            }
        };
    }, []);

    return coordinates;
};
