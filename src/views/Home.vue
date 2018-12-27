<template>
  <div>
    <h1>Home</h1>
    <el-button
      type="text"
      size="small"
      @click="submitUpload()"
    >点击弹窗</el-button>
    <upload-dialog ref="uploadialog"></upload-dialog>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["upload"])
  },
  data() {
    return {
      a: "b"
    };
  },
  methods: {
      submitUpload(){
          this.$refs.uploadialog.openDialog();
      }
  },
  mounted() {
    //   console.log(this.$store)
    console.log(this.upload);
  }
};
</script>

