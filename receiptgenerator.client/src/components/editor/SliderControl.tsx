import FieldLabel from "./FieldLabel";

interface SliderControlProps {
    id?: string;
    label: string;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    className?: string;
    onChange: (value: number) => void;
}

export default function SliderControl({
    id,
    label,
    value,
    min = 0,
    max = 100,
    step = 1,
    className,
    onChange,
}: SliderControlProps) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className={`flex flex-col gap-2 ${className ?? ""}`}>
            <FieldLabel htmlFor={id}>{label}</FieldLabel>

            <input
                id={id}
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(e) => onChange(Number(e.target.value))}
                className="custom-slider w-full"
                style={{
                    background: `linear-gradient(to right, #1570EF 0%, #1570EF ${percentage}%, #E5E7EB ${percentage}%, #E5E7EB 100%)`,
                }}
            />
        </div>
    );
}