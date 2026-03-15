export interface DateTimeBlock {
    id: string;
    type: "DateTime";
    props: {
        alignment: 0 | 1 | 2;
        dateTime: string;
        dividerAtBottom: boolean;
        dividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
    }
}