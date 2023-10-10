import { formatDate, formatTime } from "@backoffice/utils";

interface IProps {
    value: string;
}

export const TableCell_DateTime: React.FC<IProps> = ({ value }) => (
    <>
        <p style={{ fontWeight: 800, marginBottom: 5 }}>{formatDate(value)}</p>
        <p>{formatTime(value)}</p>
    </>
);
