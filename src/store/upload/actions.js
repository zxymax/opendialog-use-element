import types from './mutation-types';

export default {
    openDialog({commit}, payload){
        commit(types.OPEN_DIALOG, payload)
    },
    closeDialog({commit}){
        commit(types.CLOSE_DIALOG)
    }
}