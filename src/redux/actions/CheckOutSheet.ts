import { toggleVisibility } from "../reducers/checkOutSheet";
import store from "../store";



const { dispatch } = store

export function ToggleCheckoutSheet(show:boolean) {
    dispatch(toggleVisibility(show))
}