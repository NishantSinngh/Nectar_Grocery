interface Auth {
    displayName: string | null;
    email: string | null;
    uid: string | null;
}
interface Location {
    coords: { latitude: number, longitude: number } | null,
    address: string
}
interface InitialState {
    userData: Auth | null,
    isIntroFinished: boolean,
    location: Location | null
}
