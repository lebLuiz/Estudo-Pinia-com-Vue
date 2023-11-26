import { defineStore } from "pinia";
import defineNameStore from "../defineNameStore";
import UserNameStoreEnum from "../../models/enums/store/user/StoreEnums";
import { TypesIdentifierEnum } from "../../models/enums/store/StoreEnum";
import UserStatesInterface from "../../models/interfaces/store/user/StatesInterface";
import useUserStore from './index';
import UserActionsInterface from "../../models/interfaces/store/user/ActionsInterface";

export default defineStore(defineNameStore(UserNameStoreEnum.NAME, TypesIdentifierEnum.ACTIONS), {
    actions: {
        actSetUser(payload: UserStatesInterface['user']): void {
            const user = useUserStore();
            user.user = payload;
        },
    } as UserActionsInterface,
})