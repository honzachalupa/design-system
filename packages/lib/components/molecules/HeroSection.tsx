import { ReactNode } from "react";

interface Props {
    headline: ReactNode | string;
    subheadline?: ReactNode | string;
    actions?: ReactNode;
}

export const HeroSection: React.FC<Props> = ({
    headline,
    subheadline,
    actions,
}) => (
    <div className="min-h-[40vh] flex flex-col items-center">
        <div className="lg:w-2/3 py-[10vh] flex flex-col items-center text-center">
            <h1 className="text-4xl lg:text-6xl px-5">{headline}</h1>

            {subheadline && (
                <h2 className="text-lg lg:text-xl mt-10 px-5">{subheadline}</h2>
            )}

            {actions && <div className="mt-10">{actions}</div>}
        </div>
    </div>
);
