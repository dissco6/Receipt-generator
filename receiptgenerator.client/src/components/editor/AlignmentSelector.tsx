import FieldLabel from "./FieldLabel";

interface AlignmentSelectorProps {
    id?: string;
    value: number;
    onChange: (value: number) => void;
    label?: string;
}

export default function AlignmentSelector({
    id,
    value,
    onChange,
    label = "Alignment"
}: AlignmentSelectorProps) {
    return (
        <div>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>

            <div className="flex">
                <div className="border border-gray-300 divide-x divide-gray-300 rounded-md flex overflow-hidden">

                    {/* LEFT */}
                    <button
                        className={`p-2.5 cursor-pointer ${value === 0 ? "bg-gray-50 text-gray-500 active-aligment" : "text-gray-400"}`}
                        onClick={() => onChange(0)}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 8.33333H5M17.5 5H2.5M17.5 11.6667H2.5M15 15H5"
                                stroke="currentColor"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* CENTER */}
                    <button
                        className={`p-2.5 cursor-pointer ${value === 1 ? "bg-gray-50 text-gray-500 active-aligment" : "text-gray-400"}`}
                        onClick={() => onChange(1)}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15 8.33333H5M17.5 5H2.5M17.5 11.6667H2.5M15 15H5"
                                stroke="currentColor"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* RIGHT */}
                    <button
                        className={`p-2.5 cursor-pointer ${value === 2 ? "bg-gray-50 text-gray-500 active-aligment" : "text-gray-400"}`}
                        onClick={() => onChange(2)}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.5 8.33333H6.66671M17.5 5H3.33337M17.5 11.6667H3.33337M17.5 15H6.66671"
                                stroke="currentColor"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    );
}