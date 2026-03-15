import Accordion from "./Accordion"
import FieldLabel from "./editor/FieldLabel"
import AlignmentSelector from "./editor/AlignmentSelector";
import DividerControl from "./editor/DividerControl"
import SizeControll from "./editor/SizeControll"
import SliderControl from "./editor/SliderControl"

import customMessageIcon from "../assets/custMsg.svg"
import headerIcon from "../assets/header.svg"
import itemListIcon from "../assets/itemList.svg"
interface receiptEditorProps {
    block: any;
    updateBlockProps: (blockId: string, newProps: any) => void;
    deleteBlock: (blockId: string) => void;
}

export default function ReceiptEditor({ block, updateBlockProps, deleteBlock }: receiptEditorProps) {
    switch (block.type) {
        case "CustomMessage":
            const alignment = block.props.alignment ?? 0;
            const dividerType = block.props.dividerType ?? "dots";
            return (
                <Accordion
                    title="Custom message"
                    description={block.props.message ?? ""}
                    icon={customMessageIcon}
                    onDelete={() => deleteBlock(block.id)}
                >
                    <div className="grid gap-6">
                        <AlignmentSelector
                            id={block.id}
                            value={alignment}
                            onChange={(value) =>
                                updateBlockProps(block.id, {
                                    alignment: value
                                })
                            }
                        />
                        <div>
                            <FieldLabel htmlFor={block.id}>Message</FieldLabel>
                            <textarea
                                name={block.id}
                                id={block.id}
                                className="border w-full"
                                value={block.props.message ?? ""}
                                onChange={(e) =>
                                    updateBlockProps(block.id, {
                                        message: e.target.value,
                                    })
                                }
                                />
                        </div>

                        <DividerControl
                            enabled={block.props.dividerAtBottom}
                            type={dividerType}
                            onToggle={(value) =>
                                updateBlockProps(block.id, {
                                    dividerAtBottom: value
                                })
                            }
                            onTypeChange={(type) =>
                                updateBlockProps(block.id, {
                                    dividerType: type
                                })
                            }
                        />

                    </div>
                </Accordion>
            );
        case "Header":
            const HeaderAlignment = block.props.alignment ?? 0;
            return (
                <Accordion
                    title="Header"
                    description={block.props.bussName ?? ""}
                    icon={headerIcon}
                    onDelete={() => deleteBlock(block.id)}
                >
                    <div className="grid gap-6">
                        <AlignmentSelector
                            id={block.id}
                            value={HeaderAlignment}
                            onChange={(e) =>
                                updateBlockProps(block.id,
                                {
                                    alignment: e
                                })
                            }
                        >
                        </AlignmentSelector>

                        <div className="flex flex-col gap-2">
                            <FieldLabel htmlFor={`logo-${block.id}`}>Logo</FieldLabel>

                            <input
                                id={`logo-${block.id}`}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];

                                    if (!file) return;

                                    updateBlockProps(block.id, {
                                        imageFile: file,
                                        imageUrl: URL.createObjectURL(file),
                                    });
                                }}
                            />

                            <label
                                htmlFor={`logo-${block.id}`}
                                className="border border-gray-300 rounded-xl px-4 py-3 bg-white hover:bg-gray-50 transition cursor-pointer"
                            >
                                <div className="text-sm font-medium text-gray-700">
                                    {block.props.imageFile ? "Change logo" : "Upload logo"}
                                </div>

                                <div className="text-xs text-gray-500 mt-1">
                                    {block.props.imageFile?.name ?? "PNG, JPG, SVG"}
                                </div>
                            </label>
                        </div>

                        <SliderControl
                            id="logoSize"
                            label="Logo size"
                            value={block.props.imageSize}
                            min={0}
                            max={100}
                            step={5}
                            className="w-[204px]"
                            onChange={(value) =>
                                updateBlockProps(block.id, {
                                    imageSize: value
                                })
                            }
                        />

                        <div>
                            <FieldLabel htmlFor={block.id + "_busName"}>Business name</FieldLabel>
                            <input type="text" name={block.id + "_busName"} id={block.id + "_busName"} value={block.props.bussName} onChange={(e) =>
                                updateBlockProps(block.id,
                                    {
                                        bussName: e.target.value
                                    })
                            }/>
                        </div>

                        <div>
                            <FieldLabel htmlFor={block.id + "_busAddress"}>Business address</FieldLabel>
                            <textarea name={block.id + "_busAddress"} id={block.id + "_busAddress"} value={block.props.bussAddress} onChange={(e) =>
                                updateBlockProps(block.id,
                                    {
                                        bussAddress: e.target.value
                                    })
                            }></textarea>
                        </div>

                        <div>
                            <FieldLabel htmlFor={block.id + "_busPhone"}>Phone number</FieldLabel>
                            <input type="tel" autoComplete="tel" name={block.id + "_busPhone"} id={block.id + "_busPhone"} value={block.props.bussPhone} onChange={(e) => {
                                    const value = e.target.value.replace(/[^\d+()-\s]/g, "");
                                    updateBlockProps(block.id,
                                        {
                                            bussPhone: value
                                        })
                                }
                            }/>
                        </div>

                        <DividerControl
                            enabled={block.props.dividerAtBottom}
                            type={block.props.dividerType}
                            onToggle={(e) => updateBlockProps(block.id,
                                {
                                    dividerAtBottom: e
                                }
                            )}
                            onTypeChange={(e) => updateBlockProps(block.id,
                                {
                                    dividerType: e
                                })
                            } />
                    </div>
                </Accordion>
            );

        case "ItemList":
            function updateItemRow(rowId: string, newProps: Partial<ItemRow>) {
                const updatedRows = block.props.rows.map((row) =>
                    row.id === rowId ? { ...row, ...newProps } : row
                );

                updateBlockProps(block.id, {
                    rows: updatedRows,
                });
            }

            function addItemRow() {
                const newRow: ItemRow = {
                    id: crypto.randomUUID(),
                    quantity: "1",
                    item: "",
                    price: "",
                };

                updateBlockProps(block.id, {
                    rows: [...block.props.rows, newRow],
                });
            }

            function deleteItemRow(rowId: string) {
                const updatedRows = block.props.rows.filter((row) => row.id !== rowId);

                updateBlockProps(block.id, {
                    rows: updatedRows,
                });
            }

            function updateTotalLine(lineId: string, newProps: Partial<TotalLine>) {
                const updatedLines = (block.props.totalLines ?? []).map((line) =>
                    line.id === lineId ? { ...line, ...newProps } : line
                );

                updateBlockProps(block.id, {
                    totalLines: updatedLines,
                });
            }

            function addTotalLine() {
                const newLine: TotalLine = {
                    id: crypto.randomUUID(),
                    title: "",
                    value: "",
                };

                updateBlockProps(block.id, {
                    totalLines: [...(block.props.totalLines ?? []), newLine],
                });
            }

            function deleteTotalLine(lineId: string) {
                const updatedLines = (block.props.totalLines ?? []).filter(
                    (line) => line.id !== lineId
                );

                updateBlockProps(block.id, {
                    totalLines: updatedLines,
                });
            }

            function updateTotal(
                newProps: Partial<ItemListBlock["props"]["total"]>
            ) {
                updateBlockProps(block.id, {
                    total: {
                        ...block.props.total,
                        ...newProps,
                    },
                });
            }

            return (
                <Accordion
                    title="Item list"
                    description={`${block.props.rows?.length ?? 0} items`}
                    icon={itemListIcon}
                    onDelete={() => deleteBlock(block.id)}
                >
                    <div className="grid gap-6">

                        {block.props.rows.map((row, index) => (
                            <div
                                key={row.id}
                                className=""
                            >
                                <div className="grid grid-cols-[65px_auto_108px] gap-2">
                                    <div>
                                        <FieldLabel htmlFor={`${row.id}_quantity`}>
                                            Qty
                                        </FieldLabel>
                                        <input
                                            id={`${row.id}_quantity`}
                                            type="number"
                                            value={row.quantity}
                                            onChange={(e) =>
                                                updateItemRow(row.id, { quantity: e.target.value })
                                            }
                                            className="shadow-[0_1px_2px_0_rgba(10,13,18,0.05)]"
                                        />
                                    </div>  

                                    <div>
                                        <FieldLabel htmlFor={`${row.id}_item`}>
                                            Item
                                        </FieldLabel>
                                        <input
                                            id={`${row.id}_item`}
                                            type="text"
                                            value={row.item}
                                            onChange={(e) =>
                                                updateItemRow(row.id, { item: e.target.value })
                                            }
                                            className="shadow-[0_1px_2px_0_rgba(10,13,18,0.05)]"
                                        />
                                    </div>

                                    <div>
                                        <FieldLabel htmlFor={`${row.id}_price`}>
                                            Total price
                                        </FieldLabel>
                                        <input
                                            id={`${row.id}_price`}
                                            type="number"
                                            value={row.price}
                                            onChange={(e) =>
                                                updateItemRow(row.id, { price: e.target.value })
                                            }
                                            className="shadow-[0_1px_2px_0_rgba(10,13,18,0.05)]"
                                        />
                                    </div>

                                </div>
                                <div className="mt-3">
                                    <div className="flex items-center justify-between">
                                        <button
                                            type="button"
                                            onClick={() => deleteItemRow(row.id)}
                                            className="text-base leading-6 text-error-700 flex gap-[6px] items-center cursor-pointer"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addItemRow}
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-xs font-semibold leading-[18px] shadow-[0_3px_2px_0_rgba(10,13,18,0.05)] cursor-pointer"
                        >
                            Add item +
                        </button>

                        <DividerControl
                            enabled={block.props.rowDividerAtBottom}
                            type={block.props.rowDividerType}
                            onToggle={(e) => updateBlockProps(block.id, {
                                rowDividerAtBottom: e
                            })}
                            onTypeChange={(e) => updateBlockProps(block.id, {
                                rowDividerType: e
                            })}
                        />

                        <div className="flex items-center gap-[15px]">
                            <div className="h-px flex-1 bg-gray-300"></div>
                            <span className="text-sm leading-5 font-medium text-gray-500">Total lines</span>
                            <div className="h-px flex-1 bg-gray-300"></div>
                        </div>


                        {(block.props.totalLines ?? []).map((line, index) => (
                            <div
                                key={line.id}
                                className=""
                            >
                                <div class="grid grid-cols-[auto_108px] gap-2">
                                    <div>
                                        <FieldLabel htmlFor={`${line.id}_title`}>
                                            Title
                                        </FieldLabel>
                                        <input
                                            id={`${line.id}_title`}
                                            type="text"
                                            value={line.title}
                                            onChange={(e) =>
                                                updateTotalLine(line.id, { title: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <FieldLabel htmlFor={`${line.id}_value`}>
                                            Value
                                        </FieldLabel>
                                        <input
                                            id={`${line.id}_value`}
                                            type="text"
                                            value={line.value}
                                            onChange={(e) =>
                                                updateTotalLine(line.id, { value: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <div className="flex items-center justify-between">
                                        <button
                                            type="button"
                                            onClick={() => deleteTotalLine(line.id)}
                                            className="text-base leading-6 text-error-700 flex gap-[6px] items-center cursor-pointer"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addTotalLine}
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-xs font-semibold leading-[18px] shadow-[0_3px_2px_0_rgba(10,13,18,0.05)] cursor-pointer"
                        >
                            Add item +
                        </button>

                        <div className="flex items-center gap-[15px]">
                            <div className="h-px flex-1 bg-gray-300"></div>
                            <span className="text-sm leading-5 font-medium text-gray-500">Grand total</span>
                            <div className="h-px flex-1 bg-gray-300"></div>
                        </div>

                        <div className="grid grid-cols-[auto_108px] gap-2">
                            <div>
                                <FieldLabel htmlFor={`${block.id}_total_label`}>
                                    Total label
                                </FieldLabel>
                                <input
                                    id={`${block.id}_total_label`}
                                    type="text"
                                    value={block.props.total.label}
                                    onChange={(e) =>
                                        updateTotal({ label: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <FieldLabel htmlFor={`${block.id}_total_value`}>
                                    Total value
                                </FieldLabel>
                                <input
                                    id={`${block.id}_total_value`}
                                    type="text"
                                    value={block.props.total.value}
                                    onChange={(e) =>
                                        updateTotal({ value: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <SizeControll
                            isIncreased={block.props.total.increaseNumberSize}
                            size={block.props.total.incrementSize}
                            onToggle={(e) => updateBlockProps(block.id, {
                                total: {
                                    ...block.props.total,
                                    increaseNumberSize: e,
                                },
                            })}
                            onSizeChange={(e) => updateBlockProps(block.id, {
                                total: {
                                    ...block.props.total,
                                    incrementSize: e,
                                },
                            })}
                        />

                        <DividerControl
                            enabled={block.props.sectionDividerAtBottom}
                            type={block.props.sectionDividerType}
                            onToggle={(e) => updateBlockProps(block.id, {
                                sectionDividerAtBottom: e
                            })}
                            onTypeChange={(e) => updateBlockProps(block.id, {
                                sectionDividerType: e
                            })}
                        />
                    </div>
                </Accordion>
            );


        default:
            return null;
    }
}