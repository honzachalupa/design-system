"use client";

import {
    IIconProps,
    usePreferredColorScheme,
} from "@honzachalupa/design-system";
import cx from "classnames";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
    Fragment,
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
import { ICoordinates } from "../../types/map";

export interface IMarker {
    id: string | number;
    name: string;
    coordinates: ICoordinates;
    data: {
        [key: string]: any;
    };
}

interface IProps {
    markers: IMarker[];
    selectedMarkerId?: IMarker["id"];
    initialViewCoordinates?: {
        longitude?: ICoordinates["longitude"];
        latitude?: ICoordinates["latitude"];
    };
    initialViewZoom?: number;
    initialFitBounds?: boolean;
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
    zoomToAllMarkers: () => void;
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
            initialFitBounds,
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

        const [prevSelectedMarkerId, setPrevSelectedMarkerId] = useState<
            IMarker["id"] | null
        >();
        const [zoom, setZoom] = useState<number>(
            initialViewZoom || defaultZoom
        );

        const mapboxRef = useRef<MapRef>(null);

        const handleMapClick = ({ lngLat }: MapLayerMouseEvent) =>
            onClick?.({
                longitude: lngLat.lng,
                latitude: lngLat.lat,
            });

        const focusCurrentLocation = (animate = true) => {
            mapboxRef.current?.flyTo({
                center: [
                    currentLocation.longitude || 0,
                    currentLocation.latitude || 0,
                ],
                zoom: 7,
                animate,
            });
        };

        const rotateToNorth = () => {
            mapboxRef.current?.rotateTo(0);
        };

        const handleZoom = ({ viewState }: ViewStateChangeEvent) => {
            setZoom(viewState.zoom);
        };

        const zoomToAllMarkers = () => {
            if (markers.length > 0) {
                const bounds = new mapboxgl.LngLatBounds();

                markers.forEach(({ coordinates }) => {
                    bounds.extend([
                        coordinates.longitude,
                        coordinates.latitude,
                    ]);
                });

                mapboxRef.current?.fitBounds(bounds, {
                    padding: 30,
                    animate: false,
                });
            }
        };

        useEffect(() => {
            if (selectedMarkerId) {
                const selectedPlace = markers.find(
                    ({ id }) => id === selectedMarkerId
                )!;

                mapboxRef.current?.flyTo({
                    center: [
                        selectedPlace.coordinates.longitude,
                        selectedPlace.coordinates.latitude,
                    ],
                    offset: [0, -140],
                });

                setPrevSelectedMarkerId(selectedMarkerId);
            } else {
                const prevSelectedPlace = markers.find(
                    ({ id }) => id === prevSelectedMarkerId
                );

                if (prevSelectedPlace) {
                    mapboxRef.current?.flyTo({
                        center: [
                            prevSelectedPlace.coordinates.longitude,
                            prevSelectedPlace.coordinates.latitude,
                        ],
                    });
                }

                setPrevSelectedMarkerId(null);
            }
        }, [selectedMarkerId]);

        useEffect(() => {
            if (initialFitBounds) {
                if (markers.length > 0) {
                    focusCurrentLocation(false);
                } else {
                    zoomToAllMarkers();
                }
            }
        }, [initialFitBounds]);

        useImperativeHandle(
            ref,
            (): IMapRefProps => ({
                focusCurrentLocation,
                zoomToAllMarkers,
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
                        <Marker
                            longitude={currentLocation.longitude || 0}
                            latitude={currentLocation.latitude || 0}
                        >
                            <div className="w-5 aspect-square relative">
                                <PointIcon className="w-full h-full fill-blue-600 absolute" />
                                <PointIcon className="w-full h-full fill-blue-600 animate-ping absolute" />
                            </div>
                        </Marker>

                        {markers.map((marker) => (
                            <Fragment key={marker.id}>
                                {renderMarkerComponent({
                                    data: marker,
                                    currentZoom: zoom,
                                    isSelected: selectedMarkerId === marker.id,
                                    isFaded:
                                        !!selectedMarkerId &&
                                        selectedMarkerId !== marker.id,
                                })}
                            </Fragment>
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
