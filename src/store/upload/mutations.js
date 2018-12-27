import types from './mutation-types';

export default {
    [types.OPEN_DIALOG](state){
        state.dialogUploadVisible = true; // 打开弹窗
    },
    [types.CLOSE_DIALOG](state){
        state.dialogUploadVisible = false; // 关闭弹窗
    }
}