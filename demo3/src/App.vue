<template>
  <div>
    <!-- 普通形式 -->
    <div style="background-color: red; width: 50px ;height: 50px"></div>
    <!-- 对象形式 -->
    <div :style="{backgroundColor:color, width: width+'px', height: height+'px'}" @click="gaibian"></div>
    <div :style="{'background-color':'blue','width':'50px','height':'50px'}" ></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        height:50,
        color:'green',
        width:50,
      }
    },
    methods: {
      gaibian(){
        this.width =100;
        this.height =100;
      }
    }
  }
</script>
<style >
  div{
    margin:10px;
  }
</style>
