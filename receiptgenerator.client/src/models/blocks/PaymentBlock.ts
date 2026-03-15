export interface PaymentBlock {
    id: string;
    type: "Payment";
    props: {
        paymentType: "cash" | "card";
        paymentLines: PaymentLines[];
    }
    dividerAtBottom: boolean;
    dividerType: "dots" | "grid" | "dashes" | "lines" | "stars";
}

interface PaymentLines {
    id: string;
    title: string;
    value: string;
}