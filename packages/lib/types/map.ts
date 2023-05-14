export interface ICoordinates {
    longitude: number;
    latitude: number;
}

export interface IMarker {
    id: string | number;
    name: string;
    coordinates: ICoordinates;
    data: {
        [key: string]: any;
    };
}
