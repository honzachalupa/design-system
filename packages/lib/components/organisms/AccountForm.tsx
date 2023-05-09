import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks";
import { User } from "../../types";
import { Button } from "../atoms/Button";
import { ButtonsGroup } from "../atoms/ButtonsGroup";
import { Input } from "../atoms/Input";

interface Props {
    user: User;
    updateUser: (
        id: User["id"],
        payload: {
            firstName: string;
            lastName: string;
        }
    ) => Promise<any>;
    onSuccess: () => void;
}

interface FormData {
    firstName: string | undefined;
    lastName: string | undefined;
}

export const AccountForm: React.FC<Props> = ({
    user,
    updateUser,
    onSuccess,
}) => {
    const t = useTranslation();

    const [formData, setFormData] = useState<FormData>({
        firstName: undefined,
        lastName: undefined,
    });

    const setFormDataValue = <T,>(key: keyof typeof formData, value: T) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value as any,
        }));
    };

    const handleSubmit = () => {
        if (user.id && formData.firstName && formData.lastName) {
            updateUser(user.id, {
                firstName: formData.firstName,
                lastName: formData.lastName,
            }).then(onSuccess);
        }
    };

    useEffect(() => {
        setFormData({
            firstName: user?.firstName,
            lastName: user?.lastName,
        });
    }, [user]);

    return (
        <>
            <Input
                label={t("accountForm", "inputLabel_firstName")}
                value={formData.firstName}
                onChange={(value) => {
                    setFormDataValue("firstName", value);
                }}
            />

            <Input
                label={t("accountForm", "inputLabel_lastName")}
                value={formData.lastName}
                onChange={(value) => {
                    setFormDataValue("lastName", value);
                }}
            />

            <Input
                label={t("accountForm", "inputLabel_emailAddress")}
                value={user?.emailAddress}
                isDisabled
            />

            <ButtonsGroup alignment="right">
                <Button
                    label={t("accountForm", "buttonLabel_submit")}
                    isDisabled={!formData.firstName || !formData.lastName}
                    onClick={handleSubmit}
                />
            </ButtonsGroup>
        </>
    );
};
