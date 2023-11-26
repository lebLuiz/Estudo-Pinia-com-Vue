import { PiniaCustomStateProperties } from "pinia";

export default interface UserGettersInterface {
    getLastName(state: PiniaCustomStateProperties): string,
}