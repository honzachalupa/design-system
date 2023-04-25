import cx from "classnames";
import { useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useToggle } from "../../hooks";

interface Item {
    label: string;
    href?: string;
    onClick?: () => void;
}

interface Props {
    brand?: {
        name?: string;
        logoUrl?: string;
    };
    primaryItems: Item[];
    secondaryItems?: Item[];
    hasPadding?: boolean;
}

const Brand: React.FC<{ brand: Props["brand"] }> = ({ brand }) =>
    brand ? (
        <div>
            {brand?.logoUrl && (
                <img
                    src={brand.logoUrl}
                    alt={brand.name ? `${brand.name} logo` : "Company logo"}
                />
            )}

            {brand?.name && (
                <h1 className="text-xl accent-foreground">
                    <a href="/" className="no-underline">
                        {brand.name}
                    </a>
                </h1>
            )}
        </div>
    ) : null;

const Item: React.FC<{
    item: any;
    className?: string;
}> = ({ item: { label, href, onClick }, className }) => {
    const isActive = useCallback((href: string) => {
        try {
            return window.location.pathname === href;
        } catch (error) {
            return false;
        }
    }, []);

    const classNameShared = cx(
        className,
        "inline text-lg font-light no-underline cursor-pointer",
        {
            "accent-foreground !font-bold": href && isActive(href),
        }
    );

    return onClick ? (
        <p className={classNameShared} onClick={onClick}>
            {label}
        </p>
    ) : (
        <a className={classNameShared} href={href}>
            {label}
        </a>
    );
};

export const Navigation: React.FC<Props> = ({
    brand,
    primaryItems,
    secondaryItems,
    hasPadding,
}) => {
    const { bool: isOpened, toggle: toggleIsOpened } = useToggle();

    return (
        <>
            {/* Desktop view */}
            <div
                className={cx(
                    "items-center justify-between py-[3vh] hidden lg:flex",
                    {
                        "px-[5vw]": hasPadding,
                    }
                )}
            >
                <Brand brand={brand} />

                <div>
                    {primaryItems.map((item) => (
                        <Item
                            key={item.label}
                            item={item}
                            className="mr-10 last:mr-0"
                        />
                    ))}
                </div>

                {secondaryItems && (
                    <div>
                        {secondaryItems.map((item) => (
                            <Item
                                key={item.label}
                                item={item}
                                className="mr-10 last:mr-0"
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Mobile view */}
            <div className="flex items-center justify-between px-[5vw] py-[3vh] lg:hidden">
                <Brand brand={brand} />

                <RxHamburgerMenu
                    className="text-4xl xl:text-5xl cursor-pointer p-2 relative z-50 -right-3"
                    onClick={toggleIsOpened}
                />

                {isOpened && (
                    <>
                        <div
                            className="w-screen h-screen theme-background bg-opacity-50 backdrop-blur-sm absolute top-0 right-0 z-40"
                            onClick={toggleIsOpened}
                        />

                        <div className="w-1/2 max-w-[500px] h-screen theme-background flex flex-col pt-[80px] pr-[15px] absolute top-0 right-0 z-40">
                            <div className="flex flex-col">
                                {primaryItems.map((item) => (
                                    <Item
                                        key={item.label}
                                        item={item}
                                        className="w-full mr-10 last:mr-0 p-3 text-right font-light"
                                    />
                                ))}
                            </div>

                            {secondaryItems && (
                                <div className="flex flex-col mt-10">
                                    {secondaryItems.map((item) => (
                                        <Item
                                            key={item.label}
                                            item={item}
                                            className="w-full mr-10 last:mr-0 p-3 text-right font-light"
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
};
