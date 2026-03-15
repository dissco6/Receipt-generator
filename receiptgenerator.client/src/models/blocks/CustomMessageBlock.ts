export interface CustomMessageBlock {
    id: string;
    type: "CustomMessage"
    props: {
        alignment: 0 | 1 | 2;
        message: string;
        dividerAtBottom: boolean;
        dividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
    }
}