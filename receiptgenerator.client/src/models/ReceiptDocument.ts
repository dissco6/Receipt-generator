import type { ItemListBlock } from "./blocks/ItemListBlock";
import type { HeaderBlock } from "./blocks/HeaderBlock";
import type { CustomMessageBlock } from "./blocks/CustomMessageBlock";
import type { DateTimeBlock } from "./blocks/DateTimeBlock"


export interface ReceiptDocument {
    id: string;
    name: string;

    currencySymbol: string;

    format: 0 | 1;

    fontStyle: 0 | 1 | 2;

    textColor: string;

    paperStyle: 0 | 1 | 2 | 3 | 4;

    blocks: ReceiptBlock[];
}

export type ReceiptBlock = HeaderBlock | CustomMessageBlock | ItemListBlock | DateTimeBlock;