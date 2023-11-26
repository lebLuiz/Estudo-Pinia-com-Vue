import { acceptHMRUpdate, defineStore } from "pinia";
import state from "./state";
// import getters from "./getters";
import actions from "./actions";
import defineNameStore from "../defineNameStore";
import UserNameStoreEnum from "../../models/enums/store/user/StoreEnums";

const useUserStore = defineStore(defineNameStore(UserNameStoreEnum.NAME), {
    state,
    // getters,
    getters: {
        getLastName(state): string {
            console.log(state);
            return "nada"
        }
    },
    actions,
});

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));

export default useUserStore;