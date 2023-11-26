import { defineStore } from "pinia";

import UserStatesInterface from "../../models/interfaces/store/user/StatesInterface";
import defineNameStore from "../defineNameStore";

import UserNameStoreEnum from "../../models/enums/store/user/StoreEnums";
import { TypesIdentifierEnum } from "../../models/enums/store/StoreEnum";

export default defineStore(defineNameStore(UserNameStoreEnum.NAME, TypesIdentifierEnum.STATES), {
    state: (): UserStatesInterface => ({
        user: {
            id: "fjdsfgso9fjs0jgfd0jgd0",
            name: "Luiz Eduardo",
            lastName: "Barbosa",
        },
    }),
})