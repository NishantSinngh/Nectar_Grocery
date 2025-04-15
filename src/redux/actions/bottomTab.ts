import { toggleVisibility } from "../reducers/bottomTab";
import store from "../store";



const { dispatch } = store

export function ToggleBottomTab(show:boolean) {
    dispatch(toggleVisibility(show))
}