import Accordion from "./Accordion";
import FieldLabel from "./editor/FieldLabel";
import AlignmentSelector from "./editor/AlignmentSelector";
import DividerControl from "./editor/DividerControl";
import SizeControll from "./editor/SizeControll";
import SliderControl from "./editor/SliderControl";

import type { ItemListBlock, ItemRow, TotalLine } from "../models/blocks/ItemListBlock";

import customMessageIcon from "../assets/custMsg.svg";
import headerIcon from "../assets/header.svg";
import itemListIcon from "../assets/itemList.svg";
import clockIcon from "../assets/clock.svg";

interface ReceiptEditorProps {
    block: any;
    updateBlockProps: (blockId: string, newProps: any) => void;
    deleteBlock: (blockId: string) => void;
}

export default function ReceiptEditor({
    block,
    updateBlockProps,
    deleteBlock,
}: ReceiptEditorProps) {
    switch (block.type) {
        case "CustomMessage": {
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
                                    alignment: value,
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
                                    dividerAtBottom: value,
                                })
                            }
                            onTypeChange={(type) =>
                                updateBlockProps(block.id, {
                                    dividerType: type,
                                })
                            }
                        />
                    </div>
                </Accordion>
            );
        }

        case "Header": {
            const headerAlignment = block.props.alignment ?? 0;

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
                            value={headerAlignment}
                            onChange={(value) =>
                                updateBlockProps(block.id, {
                                    alignment: value,
                                })
                            }
                        />

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
                                    imageSize: value,
                                })
                            }
                        />

                        <div>
                            <FieldLabel htmlFor={block.id + "_busName"}>
                                Business name
                            </FieldLabel>
                            <input
                                type="text"
                                name={block.id + "_busName"}
                                id={block.id + "_busName"}
                                value={block.props.bussName}
                                onChange={(e) =>
                                    updateBlockProps(block.id, {
                                        bussName: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <FieldLabel htmlFor={block.id + "_busAddress"}>
                                Business address
                            </FieldLabel>
                            <textarea
                                name={block.id + "_busAddress"}
                                id={block.id + "_busAddress"}
                                value={block.props.bussAddress}
                                onChange={(e) =>
                                    updateBlockProps(block.id, {
                                        bussAddress: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <FieldLabel htmlFor={block.id + "_busPhone"}>
                                Phone number
                            </FieldLabel>
                            <input
                                type="tel"
                                autoComplete="tel"
                                name={block.id + "_busPhone"}
                                id={block.id + "_busPhone"}
                                value={block.props.bussPhone}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^\d+()\-\s]/g, "");
                                    updateBlockProps(block.id, {
                                        bussPhone: value,
                                    });
                                }}
                            />
                        </div>

                        <DividerControl
                            enabled={block.props.dividerAtBottom}
                            type={block.props.dividerType}
                            onToggle={(value) =>
                                updateBlockProps(block.id, {
                                    dividerAtBottom: value,
                                })
                            }
                            onTypeChange={(value) =>
                                updateBlockProps(block.id, {
                                    dividerType: value,
                                })
                            }
                        />
                    </div>
                </Accordion>
            );
        }

        case "DateTime": {
            function fillCurrentDate(blockId: string) {
                const today = new Date();

                const formatted = today.toLocaleString({
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                });

                updateBlockProps(blockId,
                    {
                        dateTime: formatted
                    }
                )
            }
            return (
                <Accordion
                    title="Date & Time"
                    description={block.props.dateTime}
                    icon={clockIcon}
                    onDelete={() => deleteBlock(block.id)}
                >
                    <div className="grid gap-6">
                        <AlignmentSelector
                            id="dateTime_alignment"
                            value={block.props.alignment}
                            onChange={(e) => updateBlockProps(block.id,
                                {
                                    alignment: e
                                })
                            }
                            label="Aligment"
                        />

                        <div>
                            <FieldLabel htmlFor={block.id}>Date & time</FieldLabel>
                            <input
                                value={block.props.dateTime}
                                onChange={(e) => updateBlockProps(block.id,
                                    {
                                        dateTime: e.target.value
                                    })
                                }
                            />
                            <button className="mt-4 rounded-lg border border-gray-300 px-[14px] py-2 text-xs font-semibold leading-[18px] shadow-[0_3px_2px_0_rgba(10,13,18,0.05)] cursor-pointer"
                                onClick={() => fillCurrentDate(block.id) }>
                                Auto-fill Current Time
                            </button>
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
                                }
                            )}
                        />
                    </div>
                </Accordion>
            );
        }

        case "ItemList": {
            const itemListBlock = block as ItemListBlock;

            function updateItemRow(rowId: string, newProps: Partial<ItemRow>) {
                const updatedRows = itemListBlock.props.rows.map((row: ItemRow) =>
                    row.id === rowId ? { ...row, ...newProps } : row
                );

                updateBlockProps(itemListBlock.id, {
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

                updateBlockProps(itemListBlock.id, {
                    rows: [...itemListBlock.props.rows, newRow],
                });
            }

            function deleteItemRow(rowId: string) {
                const updatedRows = itemListBlock.props.rows.filter(
                    (row: ItemRow) => row.id !== rowId
                );

                updateBlockProps(itemListBlock.id, {
                    rows: updatedRows,
                });
            }

            function updateTotalLine(lineId: string, newProps: Partial<TotalLine>) {
                const updatedLines = (itemListBlock.props.totalLines ?? []).map(
                    (line: TotalLine) =>
                        line.id === lineId ? { ...line, ...newProps } : line
                );

                updateBlockProps(itemListBlock.id, {
                    totalLines: updatedLines,
                });
            }

            function addTotalLine() {
                const newLine: TotalLine = {
                    id: crypto.randomUUID(),
                    title: "",
                    value: "",
                };

                updateBlockProps(itemListBlock.id, {
                    totalLines: [...(itemListBlock.props.totalLines ?? []), newLine],
                });
            }

            function deleteTotalLine(lineId: string) {
                const updatedLines = (itemListBlock.props.totalLines ?? []).filter(
                    (line: TotalLine) => line.id !== lineId
                );

                updateBlockProps(itemListBlock.id, {
                    totalLines: updatedLines,
                });
            }

            function updateTotal(newProps: Partial<ItemListBlock["props"]["total"]>) {
                updateBlockProps(itemListBlock.id, {
                    total: {
                        ...itemListBlock.props.total,
                        ...newProps,
                    },
                });
            }

            return (
                <Accordion
                    title="Item list"
                    description={`${itemListBlock.props.rows?.length ?? 0} items`}
                    icon={itemListIcon}
                    onDelete={() => deleteBlock(itemListBlock.id)}
                >
                    <div className="grid gap-6">
                        {itemListBlock.props.rows.map((row: ItemRow) => (
                            <div key={row.id}>
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
                                                updateItemRow(row.id, {
                                                    quantity: e.target.value,
                                                })
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
                                                updateItemRow(row.id, {
                                                    item: e.target.value,
                                                })
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
                                                updateItemRow(row.id, {
                                                    price: e.target.value,
                                                })
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
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17 7L7 17M7 7L17 17"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
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
                            enabled={itemListBlock.props.rowDividerAtBottom}
                            type={itemListBlock.props.rowDividerType}
                            onToggle={(value) =>
                                updateBlockProps(itemListBlock.id, {
                                    rowDividerAtBottom: value,
                                })
                            }
                            onTypeChange={(value) =>
                                updateBlockProps(itemListBlock.id, {
                                    rowDividerType: value,
                                })
                            }
                        />

                        <div className="flex items-center gap-[15px]">
                            <div className="h-px flex-1 bg-gray-300"></div>
                            <span className="text-sm leading-5 font-medium text-gray-500">
                                Total lines
                            </span>
                            <div className="h-px flex-1 bg-gray-300"></div>
                        </div>

                        {(itemListBlock.props.totalLines ?? []).map((line: TotalLine) => (
                            <div key={line.id}>
                                <div className="grid grid-cols-[auto_108px] gap-2">
                                    <div>
                                        <FieldLabel htmlFor={`${line.id}_title`}>
                                            Title
                                        </FieldLabel>
                                        <input
                                            id={`${line.id}_title`}
                                            type="text"
                                            value={line.title}
                                            onChange={(e) =>
                                                updateTotalLine(line.id, {
                                                    title: e.target.value,
                                                })
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
                                                updateTotalLine(line.id, {
                                                    value: e.target.value,
                                                })
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
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17 7L7 17M7 7L17 17"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
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
                            <span className="text-sm leading-5 font-medium text-gray-500">
                                Grand total
                            </span>
                            <div className="h-px flex-1 bg-gray-300"></div>
                        </div>

                        <div className="grid grid-cols-[auto_108px] gap-2">
                            <div>
                                <FieldLabel htmlFor={`${itemListBlock.id}_total_label`}>
                                    Total label
                                </FieldLabel>
                                <input
                                    id={`${itemListBlock.id}_total_label`}
                                    type="text"
                                    value={itemListBlock.props.total.label}
                                    onChange={(e) =>
                                        updateTotal({ label: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <FieldLabel htmlFor={`${itemListBlock.id}_total_value`}>
                                    Total value
                                </FieldLabel>
                                <input
                                    id={`${itemListBlock.id}_total_value`}
                                    type="text"
                                    value={itemListBlock.props.total.value}
                                    onChange={(e) =>
                                        updateTotal({ value: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <SizeControll
                            isIncreased={itemListBlock.props.total.increaseNumberSize}
                            size={itemListBlock.props.total.incrementSize}
                            onToggle={(value) =>
                                updateBlockProps(itemListBlock.id, {
                                    total: {
                                        ...itemListBlock.props.total,
                                        increaseNumberSize: value,
                                    },
                                })
                            }
                            onSizeChange={(value) =>
                                updateBlockProps(itemListBlock.id, {
                                    total: {
                                        ...itemListBlock.props.total,
                                        incrementSize: value,
                                    },
                                })
                            }
                        />

                        <DividerControl
                            enabled={itemListBlock.props.sectionDividerAtBottom}
                            type={itemListBlock.props.sectionDividerType}
                            onToggle={(value) =>
                                updateBlockProps(itemListBlock.id, {
                                    sectionDividerAtBottom: value,
                                })
                            }
                            onTypeChange={(value) =>
                                updateBlockProps(itemListBlock.id, {
                                    sectionDividerType: value,
                                })
                            }
                        />
                    </div>
                </Accordion>
            );
        }

        default:
            return null;
    }
}