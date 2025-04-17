import { addItem } from "../reducers/cartItem";
import store from "../store";


const { dispatch } = store

export function addToCart(item: {}, count: number) {
    dispatch(addItem({ item, count }))
}