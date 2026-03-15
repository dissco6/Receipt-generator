interface DividerControlProps {
    enabled: boolean;
    type: string;
    onToggle: (value: boolean) => void;
    onTypeChange: (type: string) => void;
}

export default function DividerControl({
    enabled,
    type,
    onToggle,
    onTypeChange
}: DividerControlProps) {
    return (
        <div className="border border-gray-200 bg-gray-50 rounded-xl overflow-hidden p-4">

            {/* Toggle */}
            <div className="flex gap-3">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={enabled}
                        onChange={(e) => onToggle(e.target.checked)}
                        className="sr-only peer"
                    />

                    <div className="w-9 h-5 bg-gray-200 rounded-full relative transition peer-checked:bg-primary">
                        <div
                            className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform duration-200 shadow-[0_1px_2px_-1px_rgba(10,13,18,0.1),0_1px_3px_0_rgba(10,13,18,0.1)] ${enabled ? "translate-x-4" : ""
                                }`}
                        />
                    </div>
                </label>

                <div className="font-medium text-sm leading-5 text-gray-700">
                    Divider at the bottom
                </div>
            </div>

            {/* Divider type */}
            {enabled && (
                <div className="mt-5 flex divide-x divide-gray-300 border border-gray-300 rounded-lg overflow-hidden">

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${type === "dots"
                                ? "bg-gray-50 text-gray-500"
                                : "text-gray-400 bg-white"
                            }`}
                        onClick={() => onTypeChange("dots")}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99998 10.8346C10.4602 10.8346 10.8333 10.4615 10.8333 10.0013C10.8333 9.54106 10.4602 9.16797 9.99998 9.16797C9.53974 9.16797 9.16665 9.54106 9.16665 10.0013C9.16665 10.4615 9.53974 10.8346 9.99998 10.8346Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8333 10.8346C16.2935 10.8346 16.6666 10.4615 16.6666 10.0013C16.6666 9.54106 16.2935 9.16797 15.8333 9.16797C15.3731 9.16797 15 9.54106 15 10.0013C15 10.4615 15.3731 10.8346 15.8333 10.8346Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.16665 10.8346C4.62688 10.8346 4.99998 10.4615 4.99998 10.0013C4.99998 9.54106 4.62688 9.16797 4.16665 9.16797C3.70641 9.16797 3.33331 9.54106 3.33331 10.0013C3.33331 10.4615 3.70641 10.8346 4.16665 10.8346Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${type === "grid"
                                ? "bg-gray-50 text-gray-500"
                                : "text-gray-400 bg-white"
                            }`}
                        onClick={() => onTypeChange("grid")}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.99998 7.4987C10.4602 7.4987 10.8333 7.1256 10.8333 6.66536C10.8333 6.20513 10.4602 5.83203 9.99998 5.83203C9.53974 5.83203 9.16665 6.20513 9.16665 6.66536C9.16665 7.1256 9.53974 7.4987 9.99998 7.4987Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8333 7.4987C16.2935 7.4987 16.6666 7.1256 16.6666 6.66536C16.6666 6.20513 16.2935 5.83203 15.8333 5.83203C15.3731 5.83203 15 6.20513 15 6.66536C15 7.1256 15.3731 7.4987 15.8333 7.4987Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.16665 7.4987C4.62688 7.4987 4.99998 7.1256 4.99998 6.66536C4.99998 6.20513 4.62688 5.83203 4.16665 5.83203C3.70641 5.83203 3.33331 6.20513 3.33331 6.66536C3.33331 7.1256 3.70641 7.4987 4.16665 7.4987Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.99998 14.1654C10.4602 14.1654 10.8333 13.7923 10.8333 13.332C10.8333 12.8718 10.4602 12.4987 9.99998 12.4987C9.53974 12.4987 9.16665 12.8718 9.16665 13.332C9.16665 13.7923 9.53974 14.1654 9.99998 14.1654Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.8333 14.1654C16.2935 14.1654 16.6666 13.7923 16.6666 13.332C16.6666 12.8718 16.2935 12.4987 15.8333 12.4987C15.3731 12.4987 15 12.8718 15 13.332C15 13.7923 15.3731 14.1654 15.8333 14.1654Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.16665 14.1654C4.62688 14.1654 4.99998 13.7923 4.99998 13.332C4.99998 12.8718 4.62688 12.4987 4.16665 12.4987C3.70641 12.4987 3.33331 12.8718 3.33331 13.332C3.33331 13.7923 3.70641 14.1654 4.16665 14.1654Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${type === "dashes"
                                ? "bg-gray-50 text-gray-500"
                                : "text-gray-400 bg-white"
                            }`}
                        onClick={() => onTypeChange("dashes")}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10H5.5M7 10H12.5M14.5 10H20" stroke="currentColor" stroke-width="1.66667" />
                        </svg>
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${type === "lines"
                                ? "bg-gray-50 text-gray-500"
                                : "text-gray-400 bg-white"
                            }`}
                        onClick={() => onTypeChange("lines")}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6.5H6M7 6.5H13M14 6.5H20M0 13.5H6M7 13.5H13M14 13.5H20" stroke="currentColor" stroke-width="1.66667" />
                        </svg>
                    </button>

                    <button
                        className={`p-2.5 flex-1 flex justify-center cursor-pointer ${type === "stars"
                                ? "bg-gray-50 text-gray-500"
                                : "text-gray-400 bg-white"
                            }`}
                        onClick={() => onTypeChange("stars")}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.10526 7.59375V12.4058M5.21053 8.49601L3.10526 9.99976L1 11.5035M1 8.49601L5.21053 11.5035M10 7.59375V12.4058M12.1053 8.49601L7.89474 11.5035M7.89474 8.49601L12.1053 11.5035M16.8947 7.59375V12.4058M19 8.49601L16.8947 9.99976L14.7895 11.5035M14.7895 8.49601L19 11.5035" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}