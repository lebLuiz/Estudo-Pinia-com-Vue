import { PiniaCustomStateProperties, defineStore } from "pinia";

// import state from "./state";
import defineNameStore from "../defineNameStore";
import UserNameStoreEnum from "../../models/enums/store/user/StoreEnums";

import { TypesIdentifierEnum } from "../../models/enums/store/StoreEnum";
// import UserGettersInterface from "../../models/interfaces/store/user/GettersInterface";

export default defineStore(defineNameStore(UserNameStoreEnum.NAME, TypesIdentifierEnum.GETTERS), {
    getters: {
        getLastName(_state: PiniaCustomStateProperties): string {
            console.log(_state);
            return "teste";
            // return `${state().user.name} ${state().user.lastName}`;
        },
    },
})