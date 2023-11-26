import UserStatesInterface from "./StatesInterface";

export default interface UserActionsInterface {
    actSetUser(payload: UserStatesInterface['user']): void;
}