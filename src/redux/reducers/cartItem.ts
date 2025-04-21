import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ICartItem {
    item: CartItem
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
                state.push({ item: action.payload.item, count: 1 });
            }
        },
        removeItem: (state, action) => {
            return state.filter((item) => item.item.id !== action.payload.id);
        },
        increaseCount: (state, action) => {
            const item = state.find(cart => cart.item.id === action.payload.id)
            if (item) {
                item.count += 1;
            }
        },
        decreaseCount: (state, action) => {
            const item = state.find(cart => cart.item.id === action.payload.id)
            if (item) {
                if (item.count > 1) {
                    item.count -= 1;
                } else {
                    return state.filter((item) => item.item.id !== action.payload.id);
                }
            }
        },
        addAllToCart: (state, action: PayloadAction<CartItem[]>) => {
            const itemsToAdd = action.payload.map(item => ({ item, count: 1 }));
        
            const newItems = itemsToAdd.filter(newItem => { // true to add --- false to drop
                const alreadyExists = state.some(cartItem => cartItem.item.id === newItem.item.id); // if returns false then its added --- if true drops it
                return !alreadyExists;
            });
        
            state.push(...newItems);
        }
    }
})


export default cartSlice.reducer;
export const { addItem, removeItem, increaseCount, decreaseCount, addAllToCart } = cartSlice.actions