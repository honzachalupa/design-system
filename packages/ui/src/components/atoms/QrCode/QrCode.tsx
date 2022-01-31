import ReactQRCode from "react-qr-code";

export interface IProps {
    value: string;
}

export const QrCode: React.FC<IProps> = ({ value }) => (
    <ReactQRCode value={value} />
);
