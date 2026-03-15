import type { ReactNode } from "react";

interface FieldLabelProps {
    htmlFor?: string,
    children: ReactNode,
}

export default function FieldLabel({ htmlFor, children }: FieldLabelProps) {
    return (
        <label htmlFor={htmlFor} className="block text-gray-700 text-sm leading-6 font-medium mb-[6px]">
            { children }
        </label>
    )
}