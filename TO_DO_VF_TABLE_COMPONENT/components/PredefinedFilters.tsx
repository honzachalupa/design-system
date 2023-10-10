import { Grid, GridItem, RadioButton } from "@backoffice/ui";
import { useEffect, useState } from "react";

export interface ITablePredefinedFilter<IRequestData> {
    id: string;
    label: string;
    data?: Partial<{
        [key in keyof IRequestData]: any;
    }>;
}

export type ITablePredefinedFiltersDef<IRequestData> = Array<
    ITablePredefinedFilter<IRequestData>
>;

interface IProps<IRequestData> {
    def: ITablePredefinedFiltersDef<IRequestData>;
    initialValue: string | undefined;
    onChange: (payload: ITablePredefinedFilter<IRequestData>) => void;
}

export const PredefinedFilters = <IRequestData,>({
    def,
    initialValue,
    onChange,
}: IProps<IRequestData>) => {
    const [selectedFilterId, setSelectedFilterId] = useState<string>(
        initialValue || def[def.length - 1].id,
    );

    useEffect(() => {
        onChange(def.find(({ id }) => id === selectedFilterId)!);
    }, [selectedFilterId]);

    return (
        <Grid>
            {def.map(({ id, label }) => (
                <GridItem key={id}>
                    <RadioButton
                        id="tablePredefinedFilterId"
                        label={label}
                        value={selectedFilterId === id}
                        isTransparent
                        onChange={() => setSelectedFilterId(id)}
                    />
                </GridItem>
            ))}
        </Grid>
    );
};
