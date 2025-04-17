interface CartItem {
        id: number;
        name: string;
        path:ReturnType<typeof require>,
        cost: number;
        quantity: string;
    }