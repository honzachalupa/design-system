import {
    AutoSizer,
    CellMeasurer,
    CellMeasurerCache,
    List,
    ListRowProps,
} from "react-virtualized";

interface VirtualizedListProps<T> {
    items: T[];
    renderer: (item: T) => React.ReactNode;
}

export const VirtualizedList = <T,>({
    items,
    renderer,
}: VirtualizedListProps<T>) => {
    const cache = new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100,
    });

    const renderRow = ({ index, key, style, parent }: ListRowProps) => (
        <CellMeasurer key={key} cache={cache} parent={parent} rowIndex={index}>
            {({ registerChild }) => (
                <div key={key} style={style} ref={registerChild as any}>
                    {renderer(items[index])}
                </div>
            )}
        </CellMeasurer>
    );

    return (
        <AutoSizer>
            {({ width, height }) => (
                <List
                    width={width}
                    height={height}
                    deferredMeasurementCache={cache}
                    rowHeight={cache.rowHeight}
                    rowRenderer={renderRow}
                    rowCount={items.length}
                    overscanRowCount={3}
                />
            )}
        </AutoSizer>
    );
};
