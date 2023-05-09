import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { SwitchButton } from "../atoms/SwitchButton";

interface IProps {
    mode: "sign-in" | "sign-up";
    signUp: (payload: {
        firstName: string;
        lastName: string;
        emailAddress: string;
        password: string;
    }) => Promise<any>;
    signIn: (payload: {
        emailAddress: string;
        password: string;
    }) => Promise<any>;
    onSuccess: () => void;
}

export const AuthForm: React.FC<IProps> = ({
    signUp,
    signIn,
    onSuccess,
    ...rest
}) => {
    const [mode, setMode] = useState<IProps["mode"]>(rest.mode);
    const [formData, setFormData] = useState<{
        firstName: string | undefined;
        lastName: string | undefined;
        emailAddress: string | undefined;
        password: string | undefined;
    }>({} as any);

    const setFormDataValue = <T,>(key: keyof typeof formData, value: T) => {
        setFormData((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSignUp = async () => {
        if (
            formData.firstName &&
            formData.lastName &&
            formData.emailAddress &&
            formData.password
        ) {
            await signUp({
                firstName: formData.firstName!,
                lastName: formData.lastName!,
                emailAddress: formData.emailAddress!,
                password: formData.password!,
            })
                .then(() => {
                    onSuccess();
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            alert("Vyplňte všechna pole");
        }
    };

    const handleSignIn = async () => {
        if (formData.emailAddress && formData.password) {
            await signIn({
                emailAddress: formData.emailAddress!,
                password: formData.password!,
            })
                .then(() => {
                    onSuccess();
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            alert("Vyplňte všechna pole");
        }
    };

    return (
        <>
            <SwitchButton
                value={mode}
                options={[
                    {
                        value: "sign-in",
                        label: "Přihlášení",
                    },
                    {
                        value: "sign-up",
                        label: "Registrace",
                    },
                ]}
                className="mb-5"
                onChange={setMode}
            />

            {mode === "sign-in" ? (
                <>
                    <Input
                        label="E-mailová adresa"
                        onChange={(value) =>
                            setFormDataValue("emailAddress", value)
                        }
                    />

                    <Input
                        label="Heslo"
                        type="password"
                        onChange={(value) =>
                            setFormDataValue("password", value)
                        }
                    />

                    <Button
                        label="Přihlásit se"
                        isDisabled={
                            !formData.emailAddress || !formData.password
                        }
                        onClick={handleSignIn}
                    />
                </>
            ) : (
                <>
                    <Input
                        label="Jméno"
                        onChange={(value) =>
                            setFormDataValue("firstName", value)
                        }
                    />

                    <Input
                        label="Příjmení"
                        onChange={(value) =>
                            setFormDataValue("lastName", value)
                        }
                    />

                    <Input
                        label="E-mailová adresa"
                        onChange={(value) =>
                            setFormDataValue("emailAddress", value)
                        }
                    />

                    <Input
                        label="Heslo"
                        type="password"
                        onChange={(value) =>
                            setFormDataValue("password", value)
                        }
                    />

                    <Input
                        label="Heslo (ověření)"
                        type="password"
                        onChange={(value) =>
                            setFormDataValue("password", value)
                        }
                    />

                    <Button
                        label="Registrovat se"
                        isDisabled={
                            !formData.firstName ||
                            !formData.lastName ||
                            !formData.emailAddress ||
                            !formData.password
                        }
                        onClick={handleSignUp}
                    />
                </>
            )}
        </>
    );
};
