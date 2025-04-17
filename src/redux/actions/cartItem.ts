import { addItem, decreaseCount, increaseCount, removeItem } from "../reducers/cartItem";
import store from "../store";


const { dispatch } = store

export function addToCart(item: {}) {
    dispatch(addItem({ item }))
}
export function removeFromCart(id: number) {
    dispatch(removeItem({ id }))
}
export function DecreaseCount(id: number) {
    dispatch(decreaseCount({ id }))
}
export function IncreaseCount(id: number) {
    dispatch(increaseCount({ id }))
}