import { useEffect } from "react";
import { useLocalStorage } from ".";

export const useGeoLocation = () => {
    const [coordinates, setCoordinates] = useLocalStorage<{
        longitude: number;
        latitude: number;
    }>("currentLocation", {
        longitude: 0,
        latitude: 0,
    });
    const onCurrentPositionChanged = ({ coords }: GeolocationPosition) => {
        setCoordinates({
            longitude: coords.longitude,
            latitude: coords.latitude,
        });
    };

    useEffect(() => {
        let watch: number;

        if (navigator.geolocation) {
            watch = navigator.geolocation.watchPosition(
                onCurrentPositionChanged
            );
        } else {
            alert("Geolocation service is not supported by your device.");
        }

        return () => {
            if (watch) {
                navigator.geolocation.clearWatch(watch);
            }
        };
    }, []);

    return coordinates;
};
