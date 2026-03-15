import type { ReceiptDocument, ReceiptBlock } from "../models/ReceiptDocument";

interface Props {
    receipt: ReceiptDocument;
    className?: string;
}

export function ReceiptPreview({ receipt, className }: Props) {
    return (
        <div
            className={className + `
                ${receipt.paperStyle === 0 ? "bg-white" :
                    receipt.paperStyle === 1 ? "bg-green-500" :
                        receipt.paperStyle === 2 ? "bg-blue-500" :
                            receipt.paperStyle === 3 ? "bg-red-500" :
                                "bg-purple-500"}`}
            style={{padding: 12 }}
        >
            <div className={
                 receipt.fontStyle === 0
                 ? "font-receipt-1 text-[20px] leading-6"
                 : receipt.fontStyle === 1
                    ? "font-receipt-2 text-[10px] leading-6"
                    : "font-receipt-3 leading-6"
                 }
                style={{ color: receipt.textColor }}
            >
                {receipt.blocks.map((block: ReceiptBlock) => (
                    <BlockRenderer key={block.id} block={block} />
                ))}
            </div>
        </div>
    );
}

interface BlockRendererProps {
    block: ReceiptBlock;
}

function BlockRenderer({ block }: BlockRendererProps) {
    const dividerMap = {
        dots: "\u00B7".repeat(60),
        grid: ":".repeat(60),
        dashes: "-".repeat(60),
        lines: "=".repeat(60),
        stars: "*".repeat(60),
    };
    switch (block.type) {
        case "Header":
            const headerAlignment = block.props.alignment ?? 0;
            const headerDiv = block.props.dividerType ?? "dots";
            return (
                <div>
                    {block.props.imageUrl && (
                        <div className="mb-2 text-center">
                            <img
                                src={block.props.imageUrl}
                                alt="Logo"
                                style={{ width: `${block.props.imageSize}%` }}
                                className={`inline-block grayscale ${headerAlignment === 0
                                        ? ""
                                        : headerAlignment === 1
                                            ? ""
                                            : ""
                                    }`}
                            />
                        </div>
                    )}
                    
                    <div className={`
                        ${headerAlignment === 0 ?
                                "text-left" :
                                headerAlignment === 1 ?
                                    "text-center" :
                                    "text-right"
                            }`
                        }>
                        <div>{block.props.bussName}</div>
                        <div>{block.props.bussAddress}</div>
                        <div>{block.props.bussPhone}</div>
                    </div>

                    {block.props.dividerAtBottom && (
                        <div className="w-full text-center overflow-hidden whitespace-nowrap">
                            {dividerMap[headerDiv]}
                        </div>
                    )}
                </div>
            );

        case "CustomMessage":
            const alignment = block.props.alignment ?? 0;
            const dividerType = block.props.dividerType ?? "dots";
            return (
                <div>
                    <div className={`${alignment === 0 ? "text-left" : alignment === 1 ? "text-center" : "text-right"}`}>{block.props.message}</div>
                    {block.props.dividerAtBottom && (
                        <div className="w-full text-center overflow-hidden whitespace-nowrap">
                            {dividerMap[dividerType]}
                        </div>
                    )}
                </div>
            );

        case "ItemList": {
            const totalSizeMap = {
                10: "text-[1.1em]",
                30: "text-[1.3em]",
                50: "text-[1.5em]",
                80: "text-[1.8em]",
                100: "text-[2em]",
            } as const;

            const renderDivider = (
                type: "dots" | "grid" | "dashes" | "lines" | "stars"
            ) => (
                <div className="w-full overflow-hidden whitespace-nowrap leading-none">
                    {dividerMap[type]}
                </div>
            );

            return (
                <div className="space-y-1">
                    {/* Rows */}
                    <div className="space-y-1">
                        {block.props.rows.map((row) => (
                            <div key={row.id} className="space-y-1">
                                <div className="grid grid-cols-[auto_50px]">
                                    <div className="grid grid-cols-[30px_auto]">
                                        <span className="mr-1">{row.quantity}</span>
                                        <span className="break-words">{row.item}</span>
                                    </div>

                                    <div className="text-right whitespace-nowrap">
                                        {row.price}
                                    </div>
                                </div>

                                
                            </div>
                        ))}

                        {block.props.rowDividerAtBottom &&
                            renderDivider(block.props.rowDividerType)}
                    </div>

                    {/* Extra totals */}
                    {!!block.props.totalLines?.length && (
                        <div className="pt-1 space-y-1">
                            {block.props.totalLines.map((t) => (
                                <div
                                    key={t.id}
                                    className="flex items-start justify-between gap-3"
                                >
                                    <div className="flex-1 min-w-0 break-words">
                                        {t.title}
                                    </div>
                                    <div className="shrink-0 text-right whitespace-nowrap">
                                        {t.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Final total */}
                    <div className="pt-1">
                        <div className="flex items-end justify-between gap-3 font-bold">
                            <div className="flex-1">{block.props.total.label}</div>
                            <div
                                className={
                                    block.props.total.increaseNumberSize
                                        ? totalSizeMap[block.props.total.incrementSize]
                                        : ""
                                }
                            >
                                {block.props.total.value}
                            </div>
                        </div>
                    </div>

                    {/* Bottom section divider */}
                    {block.props.sectionDividerAtBottom &&
                        renderDivider(block.props.sectionDividerType)}
                </div>
            );
        }

        default:
            return null;
    }
}
