export interface ItemListBlock {
    id: string;
    type: "ItemList";
    props: {
        rows: ItemRow[];
        rowDividerAtBottom: boolean;
        rowDividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
        totalLines?: TotalLine[];
        total: {
            label: string;
            value: string;
            increaseNumberSize: boolean;
            incrementSize: 10 | 30 | 50 | 80 | 100;
        }
        sectionDividerAtBottom: boolean;
        sectionDividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
    }
}

export interface ItemRow {
    id: string;
    quantity: string;
    item: string;
    price: string;
}

export interface TotalLine {
    id: string;
    title: string;
    value: string;
}