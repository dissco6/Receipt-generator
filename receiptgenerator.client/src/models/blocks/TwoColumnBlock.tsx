export interface TwoColumnBlock {
    id: string;
    type: "TwoColumn";
    props: {
        column1: TwoColumnLine[];
        column2: TwoColumnLine[];

        dividerAtBottom: boolean;
        dividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
    };
}

export interface TwoColumnLine {
    id: string;
    label: string;
    value: string;
}