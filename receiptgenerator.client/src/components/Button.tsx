import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children?: ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    color?: "primary" | "secondary" | "tertiary";
    iconLeading?: ReactNode;
    iconTrailing?: ReactNode;
    isLoading?: boolean;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
    children,
    size = "sm",
    color = "primary",
    iconLeading,
    iconTrailing,
    isLoading = false,
    className = "",
    disabled,
    ...props
}: ButtonProps) {
    const sizeClasses = {
        sm: "gap-1 rounded-lg px-3 py-2 text-sm font-semibold",
        md: "gap-1 rounded-lg px-[14px] py-2.5 text-sm font-semibold",
        lg: "gap-1.5 rounded-lg px-4 py-2.5 text-base font-semibold",
        xl: "gap-1.5 rounded-lg px-4.5 py-3 text-base font-semibold",
    };

    const colorClasses = {
        primary: "bg-primary text-white hover:bg-primary-700 disabled:bg-gray-300 disabled:text-gray-500",
        secondary: "bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50 disabled:text-gray-400",
        tertiary: "text-gray-700 hover:bg-gray-50 disabled:text-gray-400",
    };

    return (
        <button
            {...props}
            disabled={disabled || isLoading}
            className={[
                "inline-flex items-center justify-center whitespace-nowrap transition duration-150",
                sizeClasses[size],
                colorClasses[color],
                className,
            ].join(" ")}
        >
            {isLoading ? (
                <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
                <>
                    {iconLeading && <span className="shrink-0">{iconLeading}</span>}
                    {children && <span>{children}</span>}
                    {iconTrailing && <span className="shrink-0">{iconTrailing}</span>}
                </>
            )}
        </button>
    );
}