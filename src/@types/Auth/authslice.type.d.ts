interface Auth {
    displayName: string | null;
    email: string | null;
    uid: string | null;
}
interface InitialState {
    userData: Auth | null,
    isIntroFinished: boolean,
}
