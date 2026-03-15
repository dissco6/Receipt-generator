import { useState } from 'react'
import { ReceiptPreview } from "./components/ReceiptPreview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { testReceipt } from "./testReceipt";
import ReceiptEditor from "./components/ReceiptEditor"
import PrimaryButton from "./components/Button"
import './App.css'
import Accordion from './components/Accordion';
import ReceiptSettings from "./assets/receipt-settings.svg"
import FieldLabel from './components/editor/FieldLabel';


function App() {
    const [receipt, setReceipt] = useState(testReceipt);

    function updateBlockProps(blockId: string, newProps: any) {
        const updatedBlocks = receipt.blocks.map(
            (block) => {
                if (block.id === blockId) {
                    return {
                        ...block,
                        props: {
                            ...block.props,
                            ...newProps,
                        },
                    };
                }

                return block;
            });

        const newReceipt = {
            ...receipt,
            blocks: updatedBlocks
        };

        console.log(newReceipt);

        setReceipt(newReceipt);
    }

    function updateReceiptSettings(newSettings: any) {
        setReceipt((prev) => ({
            ...prev,
            ...newSettings,
        }));
    }

    function deleteBlock(blockId: string) {
        const updatedBlocks = receipt.blocks.filter(
            (block) => block.id !== blockId
        );

        setReceipt({
            ...receipt,
            blocks: updatedBlocks,
        });
    }

    return (
        <div style={{ color: 'black' }} className="bg-gray-50">
            <Navbar />
            <div className="min-width">
                <div className="grid grid-cols-[496px_auto] gap-[52px] py-16">
                    <div>
                        <div className="grid gap-4">
                            <Accordion
                                title="Settings"
                                icon={ReceiptSettings}
                            >
                                <div className="grid gap-6">
                                    <div>
                                        <FieldLabel htmlFor="currencySymbol">Currency symbol</FieldLabel>
                                        <input
                                            id="currencySymbol"
                                            name="currencySymbol"
                                            value={receipt.currencySymbol}
                                            onChange={(e) => {
                                                const match = e.target.value.match(/\p{Sc}/u);

                                                updateReceiptSettings({
                                                    currencySymbol: match ? match[0] : ""
                                                });
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-inline gap-6">
                                        <div>
                                            <FieldLabel htmlFor="receipt_format">Format</FieldLabel>
                                            <div className="rounded-xl bg-white border border-gray-300 overflow-hidden text-sm leading-5 font-semibold text-gray-700 flex inline-flex divide-x divide-gray-300">
                                                <div className={`cursor-pointer py-2.5 px-4 ${receipt.format === 0 ? "bg-gray-50 text-gray-800" : ""}`}
                                                    onClick={() => updateReceiptSettings({
                                                        format: 0
                                                    })}>
                                                    2.99
                                                </div>
                                                <div className={`cursor-pointer py-2.5 px-4 ${receipt.format === 1 ? "bg-gray-50 text-gray-800" : ""}`}
                                                    onClick={() => updateReceiptSettings({
                                                        format: 1
                                                    })}>
                                                    2,99
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <FieldLabel htmlFor="font_style">Font style</FieldLabel>
                                            <div className="rounded-xl bg-white border border-gray-300 overflow-hidden text-sm leading-5 font-semibold text-gray-700 flex inline-flex divide-x divide-gray-300">
                                                <div className={`cursor-pointer py-2.5 px-4 ${receipt.fontStyle === 0 ? "bg-gray-50 text-gray-800" : ""}`}
                                                    onClick={() => updateReceiptSettings({
                                                        fontStyle: 0
                                                    }) }>
                                                    Font 1
                                                </div>
                                                <div className={`cursor-pointer py-2.5 px-4 ${receipt.fontStyle === 1 ? "bg-gray-50 text-gray-800" : ""}`}
                                                    onClick={() => updateReceiptSettings({
                                                        fontStyle: 1
                                                    })}>
                                                    Font 2
                                                </div>
                                                <div className={`cursor-pointer py-2.5 px-4 ${receipt.fontStyle === 2 ? "bg-gray-50 text-gray-800" : ""}`}
                                                    onClick={() => updateReceiptSettings({
                                                        fontStyle: 2
                                                    })}>
                                                    Font 3
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <FieldLabel htmlFor="receipt_text_color">Text color</FieldLabel>
                                        <div className="p-1 bg-gray-50 rounded-lg border border-gray-200 inline-flex">
                                            <input
                                                id="receipt_text_color"
                                                type="color"
                                                value={receipt.textColor}
                                                className="h-[26px] w-[95px] rounded-lg p-0 border-0 cursor-pointer"
                                                onChange={(e) =>
                                                    updateReceiptSettings({
                                                        textColor: e.target.value
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <FieldLabel htmlFor="receipt_bg">Receipt background</FieldLabel>
                                        <div className="rounded-xl bg-white border border-gray-300 overflow-hidden text-sm leading-5 font-semibold text-gray-700 flex inline-flex divide-x divide-gray-300">
                                            <div className={`cursor-pointer py-2.5 px-4 ${receipt.paperStyle === 0 ? "bg-gray-50 text-gray-800" : ""}`}
                                                onClick={() => updateReceiptSettings({
                                                    paperStyle: 0
                                                }) }>
                                                None
                                            </div>
                                            <div className={`cursor-pointer py-2.5 px-4 ${receipt.paperStyle === 1 ? "bg-gray-50 text-gray-800" : ""}`}
                                                onClick={() => updateReceiptSettings({
                                                    paperStyle: 1
                                                })}>
                                                #1
                                            </div>
                                            <div className={`cursor-pointer py-2.5 px-4 ${receipt.paperStyle === 2 ? "bg-gray-50 text-gray-800" : ""}`}
                                                onClick={() => updateReceiptSettings({
                                                    paperStyle: 2
                                                })}>
                                                #2
                                            </div>
                                            <div className={`cursor-pointer py-2.5 px-4 ${receipt.paperStyle === 3 ? "bg-gray-50 text-gray-800" : ""}`}
                                                onClick={() => updateReceiptSettings({
                                                    paperStyle: 3
                                                })}>
                                                #3
                                            </div>
                                            <div className={`cursor-pointer py-2.5 px-4 ${receipt.paperStyle === 4 ? "bg-gray-50 text-gray-800" : ""}`}
                                                onClick={() => updateReceiptSettings({
                                                    paperStyle: 4
                                                })}>
                                                #4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Accordion>
                            {receipt.blocks.map((block) => 
                                <ReceiptEditor key={block.id} block={block} updateBlockProps={updateBlockProps} deleteBlock={deleteBlock}></ReceiptEditor>
                            )}
                            <div className="bg-white border border-gray-300 rounded-lg p-3 text-base text-dark-txt-grey leading-6 text-center font-semibold shadow-[0_3px_2px_0_rgba(10,13,18,0.05)] cursor-pointer">Add section +</div>
                        </div>
                    </div>
                    <div className="sticky top-4 self-start">
                        <div className="flex pb-[18px]">
                            <h1 className="!text-2xl !leading-8 !font-semibold flex-grow">Receipt generator</h1>
                            <div>
                                <PrimaryButton size="md">Download receipt</PrimaryButton>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-[13px] bg-[#D8E8FF] py-16 grid justify-center overflow-hidden relative">
                                <div className="w-[380px] absolute right-0 h-full bg-[linear-gradient(90deg,rgb(194,216,249)_23%,rgb(208,227,255)_100%)] [clip-path:polygon(60px_0,100%_0,100%_100%,0_100%)] z-1" ></div>
                                <ReceiptPreview receipt={receipt} className="w-[278px] rounded-sm z-2 select-none" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
