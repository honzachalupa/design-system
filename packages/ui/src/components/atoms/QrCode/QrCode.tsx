import { getTestId } from "@honzachalupa/utils";
import ReactQRCode from "react-qr-code";
import { IComponentProps } from "../../../interfaces/component";

export interface IProps extends IComponentProps {
    value: string;
}

export const QrCode: React.FC<IProps> = ({ value, testId }) => (
    <ReactQRCode value={value} {...getTestId(QrCode.name, testId)} />
);
