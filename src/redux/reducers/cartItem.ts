import { createSlice } from "@reduxjs/toolkit"

interface ICartItem {
    item: {
        id: number;
        name: string;
        path: any;
        cost: number;
        quantity: string
    };
    count: number
}

const cartItem: ICartItem[] = []


const cartSlice = createSlice({
    name: 'CartSlice',
    initialState: cartItem,
    reducers: {
        addItem: (state, action) => {

            const existingItem = state.find(cart => cart.item.id === action.payload.item.id)

            if (existingItem) {
                existingItem.count += action.payload.count
            } else {
                state.push({ item: action.payload.item, count: action.payload.count });
            }
        }
    }
})


export default cartSlice.reducer;
export const { addItem } = cartSlice.actions