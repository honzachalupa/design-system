"use client";

import {
    IIconProps,
    usePreferredColorScheme,
} from "@honzachalupa/design-system";
import cx from "classnames";
import mapboxgl, {
    FitBoundsOptions,
    FlyToOptions,
    LngLatBoundsLike,
} from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
    ReactNode,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import MapGL, {
    MapLayerMouseEvent,
    MapRef,
    Marker,
    ViewStateChangeEvent,
} from "react-map-gl";
import { useGeoLocation } from "../../hooks";
import { ICoordinates, IMarker } from "../../types/map";

interface IProps {
    markers: IMarker[];
    selectedMarkerId?: IMarker["id"];
    initialViewCoordinates?: {
        longitude?: ICoordinates["longitude"];
        latitude?: ICoordinates["latitude"];
    };
    initialViewZoom?: number;
    initialFocusCurrentLocation?: boolean;
    initialFocusMarkers?: boolean;
    mapboxAccessToken: string;
    className?: string;
    isReadonly?: boolean;
    isSatelliteViewEnabled?: boolean;
    renderMarkerComponent: (data: {
        data: IMarker;
        currentZoom: number;
        isSelected: boolean;
        isFaded: boolean;
    }) => ReactNode;
    onClick?: (coordinates: ICoordinates) => void;
}

export interface IMapRefProps {
    focusCurrentLocation: (animate?: boolean) => void;
    focusMarkers: () => void;
    rotateToNorth: () => void;
}

export const PointIcon: React.FC<IIconProps> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="16" cy="16" r="16" />
    </svg>
);

export const Map: React.FC<IProps> = forwardRef(
    (
        {
            markers,
            selectedMarkerId,
            initialViewCoordinates,
            initialViewZoom,
            initialFocusCurrentLocation,
            initialFocusMarkers,
            mapboxAccessToken,
            className,
            isReadonly,
            isSatelliteViewEnabled,
            renderMarkerComponent,
            onClick,
        },
        ref
    ) => {
        const colorScheme = usePreferredColorScheme();
        const currentLocation = useGeoLocation();

        const defaultZoom = 15;

        const [prevSelectedMarkerId, setPrevSelectedMarkerId] =
            useState<IMarker["id"] | null>();
        const [zoom, setZoom] = useState<number>(
            initialViewZoom || defaultZoom
        );
        const [isInitialFocused, setIsInitialFocused] = useState<boolean>();

        const mapboxRef = useRef<MapRef>(null);

        const handleMapClick = ({ lngLat }: MapLayerMouseEvent) =>
            onClick?.({
                longitude: lngLat.lng,
                latitude: lngLat.lat,
            });

        const flyTo = (coordinates: ICoordinates, options?: FlyToOptions) => {
            setTimeout(() => {
                mapboxRef.current?.flyTo({
                    center: [coordinates.longitude, coordinates.latitude],
                    duration: 1000,
                    ...options,
                });
            }, 100);
        };

        const fitBounds = (
            bounds: LngLatBoundsLike,
            options: FitBoundsOptions
        ) => {
            setTimeout(() => {
                mapboxRef.current?.fitBounds(bounds, options);
            }, 100);
        };

        const focusCurrentLocation = (animate = true) => {
            if (currentLocation.longitude && currentLocation.latitude) {
                setTimeout(() => {
                    flyTo(currentLocation as ICoordinates, {
                        animate,
                    });
                }, 100);
            }
        };

        const focusMarkers = (animate = true) => {
            if (markers.length === 1) {
                const marker = markers[0];

                flyTo(marker.coordinates, {
                    animate,
                });
            } else if (markers.length > 1) {
                const bounds = new mapboxgl.LngLatBounds();

                markers.forEach(({ coordinates }) => {
                    bounds.extend([
                        coordinates.longitude,
                        coordinates.latitude,
                    ]);
                });

                fitBounds(bounds, {
                    padding: 30,
                    animate,
                });
            }
        };

        const rotateToNorth = () => mapboxRef.current?.rotateTo(0);

        const handleZoom = ({ viewState }: ViewStateChangeEvent) =>
            setZoom(viewState.zoom);

        const onInitialFocusCurrentLocation = () => {
            if (
                currentLocation.longitude &&
                currentLocation.latitude &&
                !isInitialFocused
            ) {
                focusCurrentLocation(false);
                setIsInitialFocused(true);
            }
        };

        const onInitialFocusMarkers = () => {
            if (!isInitialFocused) {
                focusMarkers(false);
                setIsInitialFocused(true);
            }
        };

        const onInitialViewCoordinates = () => {
            if (!isInitialFocused) {
                flyTo(
                    {
                        longitude: initialViewCoordinates?.longitude || 0,
                        latitude: initialViewCoordinates?.latitude || 0,
                    },
                    {
                        animate: false,
                    }
                );

                setIsInitialFocused(true);
            }
        };

        const onMarkerSelected = (id: IMarker["id"]) => {
            const selectedPlace = markers.find((place) => place.id === id)!;

            flyTo(selectedPlace.coordinates, {
                zoom: 12,
                offset: [0, -140],
            });

            setPrevSelectedMarkerId(id);
        };

        const onMarkerUnselected = () => {
            const prevSelectedPlace = markers.find(
                (place) => place.id === prevSelectedMarkerId
            );

            if (prevSelectedPlace) {
                flyTo(prevSelectedPlace.coordinates);
            }

            setPrevSelectedMarkerId(null);
        };

        const onMarkerSelectionChanged = (id: IMarker["id"] | undefined) => {
            if (id) {
                onMarkerSelected(id);
            } else {
                onMarkerUnselected();
            }
        };

        useEffect(() => {
            onMarkerSelectionChanged(selectedMarkerId);
        }, [selectedMarkerId]);

        useEffect(() => {
            if (initialFocusCurrentLocation) {
                onInitialFocusCurrentLocation();
            } else if (initialFocusMarkers) {
                onInitialFocusMarkers();
            } else if (initialViewCoordinates) {
                onInitialViewCoordinates();
            }
        }, [
            initialFocusCurrentLocation,
            initialFocusMarkers,
            initialViewCoordinates,
            currentLocation,
            isInitialFocused,
        ]);

        useImperativeHandle(
            ref,
            (): IMapRefProps => ({
                focusCurrentLocation,
                focusMarkers,
                rotateToNorth,
            })
        );

        const mapStyle = isSatelliteViewEnabled
            ? "mapbox://styles/mapbox/satellite-streets-v12"
            : colorScheme === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/light-v11";

        return (
            <div
                className={cx(
                    "overflow-hidden relative",
                    {
                        "pointer-events-none": isReadonly,
                    },
                    className
                )}
            >
                {currentLocation ? (
                    <MapGL
                        ref={mapboxRef}
                        mapboxAccessToken={mapboxAccessToken}
                        initialViewState={{
                            longitude:
                                initialViewCoordinates?.longitude ||
                                currentLocation?.longitude ||
                                0,
                            latitude:
                                initialViewCoordinates?.latitude ||
                                currentLocation?.latitude ||
                                0,
                            zoom: initialViewZoom || defaultZoom,
                        }}
                        mapStyle={mapStyle}
                        onZoom={handleZoom}
                        onClick={handleMapClick}
                    >
                        {currentLocation.longitude && currentLocation.latitude && (
                            <Marker
                                longitude={currentLocation.longitude}
                                latitude={currentLocation.latitude}
                            >
                                <div className="w-5 aspect-square relative">
                                    <PointIcon className="w-full h-full fill-blue-600 absolute" />
                                    <PointIcon className="w-full h-full fill-blue-600 animate-ping absolute" />
                                </div>
                            </Marker>
                        )}

                        {markers.map((marker) => (
                            <Marker
                                key={marker.id}
                                longitude={marker.coordinates.longitude}
                                latitude={marker.coordinates.latitude}
                            >
                                {renderMarkerComponent({
                                    data: marker,
                                    currentZoom: zoom,
                                    isSelected: selectedMarkerId === marker.id,
                                    isFaded:
                                        !!selectedMarkerId &&
                                        selectedMarkerId !== marker.id,
                                })}
                            </Marker>
                        ))}
                    </MapGL>
                ) : (
                    <p>Loading map...</p>
                )}
            </div>
        );
    }
);

Map.displayName = "Map";
