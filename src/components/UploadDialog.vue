<template>
  <el-dialog title="文件上传" :visible="dialogUploadVisible" @close="closeDialog" width="50%">
      <el-row>
        <el-tabs type="border-card" :value="activeName" @tab-click="handleClick">
        </el-tabs>
      </el-row>
  </el-dialog>
</template>
<script>
import {mapState} from 'vuex'
export default {
  computed: {
      ...mapState({
          dialogUploadVisible: state => state.upload.dialogUploadVisible
      })
      
  },
  data: () => ({
    activeName: ''
  }),
  methods: {
    closeDlg() {},
    handleClick() {},
    openDialog(){
        this.$store.dispatch("openDialog")
    },
    closeDialog() {
      //关闭上传窗口
      this.$store.dispatch("closeDialog");
    },
  },
  mounted(){

      
  }
};
</script>
<style scoped>
.has-gutter th {
  background-color: #2884ff;
}
.el-dialog {
  padding: 10px 0;
}
div > .el-card.is-always-shadow {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  min-height: 100%;
}
div.el-card {
  border: 0;
}
.save-box {
  text-align: center;
  padding-bottom: 60px;
}
.save {
  margin-right: 20px;
  height: 30px;
  line-height: 6px;
}
.page {
  margin-right: 20px;
}
.model {
  padding-top: 0 20px;
}
.list {
  display: flex;
  margin-bottom: 15px;
}
.model label {
  width: 140px;
  height: 40px;
  line-height: 40px;
  display: block;
  font-size: 14px;
  text-align: right;
  padding-right: 10px;
}
.submit {
  text-align: center;
}
.el-icon-edit {
  font-size: 18px;
  margin-right: 20px;
  color: #2884ff;
  cursor: pointer;
}
.el-icon-delete {
  font-size: 18px;
  color: #fd3f45;
  cursor: pointer;
}
.el-icon-download {
  font-size: 18px;
  cursor: pointer;
}
.el-form-item {
  width: 100%;
}
.el-form-item .el-row {
  display: flex;
}
.f-ipt {
  flex: 1;
}
.el-form-item__content {
  height: 45px;
}
.list .el-row {
  margin-bottom: 0;
}
</style>


