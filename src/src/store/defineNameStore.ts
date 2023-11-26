import {
    PosDefineStoreEnum,
    PreDefineStoreEnum,
    TypesIdentifierEnum
} from "../models/enums/store/StoreEnum";

const definePosNamePropStore = (define_store: TypesIdentifierEnum): PosDefineStoreEnum[] => ({
    [TypesIdentifierEnum.STATES]: [PosDefineStoreEnum.POS_DEFINICAO_STATE],
    [TypesIdentifierEnum.GETTERS]: [PosDefineStoreEnum.POS_DEFINICAO_GETTERS],
    [TypesIdentifierEnum.ACTIONS]: [PosDefineStoreEnum.POS_DEFINICAO_ACTIONS],
})[define_store];

export default (store_name: string, define_store?: TypesIdentifierEnum): string => {
    if (define_store)
        return `${PreDefineStoreEnum.PRE_DEFINICAO}.${store_name}.${definePosNamePropStore(define_store)}`;
    return `${PreDefineStoreEnum.PRE_DEFINICAO}.${store_name}`;
};
