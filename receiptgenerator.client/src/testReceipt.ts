import type { ReceiptDocument } from "./models/ReceiptDocument";

export const testReceipt: ReceiptDocument = {
    id: "r1",
    name: "Test receipt",
    currencySymbol: "$",
    format: 0,
    fontStyle: 2,
    textColor: "#000",
    paperStyle: 0,
    blocks: [
        {
            id: "header1",
            type: "Header",
            props: {
                alignment: 0,
                imageSize: 70,
                bussName: "UAB \"Maxima\"",
                bussAddress: "123 Main Street\nCity, State 12345",
                bussPhone: "+370 6 (838) 38182",
                dividerAtBottom: true,
                dividerType: "dots",
                imageUrl: '',
            }
        },
        {
            id: "customMessage1",
            type: "CustomMessage",
            props: {
                alignment: 0,
                message: "Thank you for shopping with usa!",
                dividerAtBottom: true,
                dividerType: "dots",
            }
        },
        {
            id: "customMessage2",
            type: "CustomMessage",
            props: {
                alignment: 0,
                message: "Secondary custom message",
                dividerAtBottom: true,
                dividerType: "dots",
            }
        },
        {
            id: "Listas01",
            type: "ItemList",
            props: {
                rowDividerAtBottom: false,
                rowDividerType: "dots",
                rows: [
                    { id: "row1", quantity: "20", item: "test Itemas", price: "22.30" },
                    { id: "row2", quantity: "25", item: "test Itemas", price: "2.30" },
                    { id: "row3", quantity: "2", item: "test Itemas", price: "19.99" }
                ],
                totalLines: [
                    { id: "t1", title: "SUBTOTAL", value: "39.59" },
                    { id: "t2", title: "TAX", value: "0.00" }
                ],
                total: {
                    label: "Grand total",
                    increaseNumberSize: true,
                    incrementSize: 50,
                    value: "39.59",
                },
                sectionDividerAtBottom: true,
                sectionDividerType: "dots",
            }
        },
    ],
};