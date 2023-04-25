import { useEffect } from "react";
import { useLocalStorage } from ".";

export const useGeoLocation = () => {
    const [coordinates, setCoordinates] = useLocalStorage<{
        longitude: number;
        latitude: number;
    }>("currentLocation", {
        longitude: 14.41854,
        latitude: 50.073658,
    });

    const onCurrentPositionChanged = ({ coords }: GeolocationPosition) => {
        if (
            JSON.stringify(coordinates) !==
            JSON.stringify({
                longitude: coords.longitude,
                latitude: coords.latitude,
            })
        ) {
            setCoordinates({
                longitude: coords.longitude,
                latitude: coords.latitude,
            });
        }
    };

    useEffect(() => {
        let watch: number;

        if (navigator.geolocation) {
            watch = navigator.geolocation.watchPosition(
                onCurrentPositionChanged
            );
        } else {
            // TODO
        }

        return () => {
            if (watch) {
                navigator.geolocation.clearWatch(watch);
            }
        };
    }, []);

    return coordinates;
};
