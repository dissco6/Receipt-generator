interface DividerControlProps {
    isIncreased: boolean;
    size: number;
    onToggle: (value: boolean) => void;
    onSizeChange: (size: number) => void;
}

export default function DividerControl({
    isIncreased,
    size,
    onToggle,
    onSizeChange
}: DividerControlProps) {
    return (
        <div className="border border-gray-200 bg-gray-50 rounded-xl overflow-hidden p-4">

            {/* Toggle */}
            <div className="flex gap-3">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isIncreased}
                        onChange={(e) => onToggle(e.target.checked)}
                        className="sr-only peer"
                    />

                    <div className="w-9 h-5 bg-gray-200 rounded-full relative transition peer-checked:bg-primary">
                        <div
                            className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-200 shadow-[0_1px_2px_-1px_rgba(10,13,18,0.1),0_1px_3px_0_rgba(10,13,18,0.1)] ${isIncreased ? "translate-x-4" : ""
                                }`}
                        />
                    </div>
                </label>

                <div className="font-medium text-sm leading-5 text-gray-700">
                    Increase total number size
                </div>
            </div>

            {/* Divider type */}
            {isIncreased && (
                <div className="mt-5 flex divide-x divide-gray-300 border border-gray-300 rounded-lg overflow-hidden text-sm font-semibold">

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${size === 10
                            ? "bg-gray-50 text-gray-800"
                            : "text-gray-700 bg-white"
                            }`}
                        onClick={() => onSizeChange(10)}
                    >
                        10%
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${size === 30
                            ? "bg-gray-50 text-gray-800"
                            : "text-gray-700 bg-white"
                            }`}
                        onClick={() => onSizeChange(30)}
                    >
                        30%
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${size === 50
                            ? "bg-gray-50 text-gray-800"
                            : "text-gray-700 bg-white"
                            }`}
                        onClick={() => onSizeChange(50)}
                    >
                        50%
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${size === 80
                            ? "bg-gray-50 text-gray-800"
                            : "text-gray-700 bg-white"
                            }`}
                        onClick={() => onSizeChange(80)}
                    >
                        80%
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${size === 100
                            ? "bg-gray-50 text-gray-800"
                            : "text-gray-700 bg-white"
                            }`}
                        onClick={() => onSizeChange(100)}
                    >
                        100%
                    </button>
                </div>
            )}
        </div>
    );
}