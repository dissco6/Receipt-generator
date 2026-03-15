export interface HeaderBlock {
    id: string;
    type: "Header";
    props: {
        alignment: 0 | 1 | 2;
        imageUrl?: string;
        imageSize: number;
        bussName: string;
        bussAddress: string,
        bussPhone: string,
        dividerAtBottom: boolean;
        dividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
    }
}