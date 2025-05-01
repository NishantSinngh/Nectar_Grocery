import STRINGS from "../constants/STRINGS";

export let regx = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    name: /^(?! )[a-zA-Z]+(?: [a-zA-Z]+)* ?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[^\s]+$/,
    phoneNumber: /^[0-9]{8,15}$/,
};

export default function (data?: any) {
    const {
        name,
        email,
        password,
    } = data;
    if (name !== undefined && name.length == 0) {
        return STRINGS.NAME_EMPTY;
    }
    if (name !== undefined && (name.length < 3 || name.length > 30)) {
        return STRINGS.NAME_LENGTH;
    }
    if (name !== undefined && !regx.name.test(name)) {
        return STRINGS.NAME_INVALID;
    }
    
    if (email !== undefined && email.length == 0) {
        return STRINGS.EMAIL_EMPTY;
    }

    if (email !== undefined && !regx.email.test(email)) {
        return STRINGS.EMAIL_INVALID;
    }

    if (password !== undefined && password.length == 0) {
        return STRINGS.PASSWORD_INVALID;
    }
    if (password !== undefined && !regx.password.test(password)) {
        return STRINGS.PASSWORD_INVALID;
    }
    if (password !== undefined && (password.length < 8 || password.length > 15)) {
        return STRINGS.PASSWORD_INVALID;
    }
}
