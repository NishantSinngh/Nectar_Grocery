import { toggleFav } from "../reducers/favs"
import store from "../store"



const { dispatch } = store

export function ToggleFav(id: number) {
    dispatch(toggleFav(id))
}