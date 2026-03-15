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
                dividerType: "lines",
                imageUrl: '',
            }
        },
        {
            id: "customMessage1",
            type: "CustomMessage",
            props: {
                alignment: 0,
                message: "Thank you for shopping with usa!",
                dividerAtBottom: false,
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
                dividerType: "lines",
            }
        },
        {
            id: "DateTime1",
            type: "DateTime",
            props: {
                alignment: 0,
                dateTime: "6/9/2026, 3:07:09 pm",
                dividerAtBottom: true,
                dividerType: "lines",
            }
        },
        {
            id: "Listas01",
            type: "ItemList",
            props: {
                rowDividerAtBottom: true,
                rowDividerType: "lines",
                rows: [
                    { id: "row1", quantity: "10", item: "Vistienos krutinele su cesnaku", price: "45.50" },
                    { id: "row2", quantity: "1", item: "Snickers batonėlis", price: "1.79" },
                    { id: "row3", quantity: "2", item: "Degtukai", price: "0.30" }
                ],
                totalLines: [
                    { id: "t1", title: "Suma", value: "35.50" },
                    { id: "t2", title: "PVM 21%", value: "6.80" }
                ],
                total: {
                    label: "Bendra suma",
                    increaseNumberSize: true,
                    incrementSize: 80,
                    value: "49.30",
                },
                sectionDividerAtBottom: true,
                sectionDividerType: "lines",
            }
        },
    ],
};