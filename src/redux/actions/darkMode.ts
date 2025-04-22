import { toggleDarkMode } from "../reducers/darkMode";
import store from "../store";


const { dispatch } = store

export function ToggleDarkMode() {
    dispatch(toggleDarkMode())
}