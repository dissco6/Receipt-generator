import { useState } from "react";
import type React from "react";

interface EditorBoxProps {
    title: string;
    description?: string;
    icon?: string;
    children?: React.ReactNode;
    onDelete?: () => void;
}

export default function Accordion({ title, description, icon, children, onDelete }: EditorBoxProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isArrowHovered, setIsArrowHovered] = useState(false);

    return (
        <div className={`accordion group bg-white border border-gray-300 rounded-lg relative overflow-hidden transition duration-300 ease-in-out ${isOpen ? "border-[2px] border-primary" : isArrowHovered ? "border-gray-400" : "border-gray-300"}`}>
            <div className={`header flex py-4 px-3 items-center gap-2 ${isOpen? "bg-gray-50" : ""}`}>
                <div className="flex">
                    <div className={`text-gray-neutral-400 p-2.5 flex items-center cursor-pointer transition select-none duration-300 ease-in-out ${isOpen ? "rotate-180" : "hover:border-gray-700 transition duration-300 ease-in-out hover:text-gray-700"}`}
                        onClick={() => setIsOpen(!isOpen)}
                        onMouseEnter={() => setIsArrowHovered(true)}
                        onMouseLeave={() => setIsArrowHovered(false)}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    {icon && (
                        <div className="p-2.5 flex items-center">
                            <img src={icon} alt="Accordion image"></img>
                        </div>
                    )}
                </div>
                <div className="flex-grow">
                    <div className="text-base text-dark-txt-grey font-semibold leading-6">{ title }</div>
                    <div className="text-gray-500 font-medium leading-[18px] text-xs">{ description }</div>
                </div>
                <div className="p-2.5 flex items-center cursor-grab text-gray-neutral-400 rounded-full transition duration-200 ease-in-out hover:bg-gray-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4999 4.9987C12.9602 4.9987 13.3333 4.6256 13.3333 4.16536C13.3333 3.70513 12.9602 3.33203 12.4999 3.33203C12.0397 3.33203 11.6666 3.70513 11.6666 4.16536C11.6666 4.6256 12.0397 4.9987 12.4999 4.9987Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.4999 10.832C12.9602 10.832 13.3333 10.4589 13.3333 9.9987C13.3333 9.53846 12.9602 9.16536 12.4999 9.16536C12.0397 9.16536 11.6666 9.53846 11.6666 9.9987C11.6666 10.4589 12.0397 10.832 12.4999 10.832Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.4999 16.6654C12.9602 16.6654 13.3333 16.2923 13.3333 15.832C13.3333 15.3718 12.9602 14.9987 12.4999 14.9987C12.0397 14.9987 11.6666 15.3718 11.6666 15.832C11.6666 16.2923 12.0397 16.6654 12.4999 16.6654Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.66659 4.9987C7.12682 4.9987 7.49992 4.6256 7.49992 4.16536C7.49992 3.70513 7.12682 3.33203 6.66659 3.33203C6.20635 3.33203 5.83325 3.70513 5.83325 4.16536C5.83325 4.6256 6.20635 4.9987 6.66659 4.9987Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.66659 10.832C7.12682 10.832 7.49992 10.4589 7.49992 9.9987C7.49992 9.53846 7.12682 9.16536 6.66659 9.16536C6.20635 9.16536 5.83325 9.53846 5.83325 9.9987C5.83325 10.4589 6.20635 10.832 6.66659 10.832Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.66659 16.6654C7.12682 16.6654 7.49992 16.2923 7.49992 15.832C7.49992 15.3718 7.12682 14.9987 6.66659 14.9987C6.20635 14.9987 5.83325 15.3718 5.83325 15.832C5.83325 16.2923 6.20635 16.6654 6.66659 16.6654Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
                {onDelete &&
                    <div className="p-2.5 flex items-center cursor-pointer hover:bg-error-50 hover:text-error-700  text-gray-neutral-400 rounded-full transition duration-200 ease-in-out" onClick={onDelete}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1666 5.83203L5.83325 14.1654M5.83325 5.83203L14.1666 14.1654" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                }
            </div>
            <div className={`body p-6 ${isOpen ? "" : "hidden"}`}>
                { children }
            </div>
            
        </div>
    );
}