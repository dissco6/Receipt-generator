export interface CodeBlock {
    id: string;
    type: "code";
    props: {
        codeType: "barcode" | "qrcode";
        width: number;
        height: number;
        value: string;

        dividerAtBottom: boolean;
        dividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
    };
}