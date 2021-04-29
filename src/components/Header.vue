<template>
  <div id="headerWrapper">
    <div id="headerTitle">
      <span>{{ message }}</span>
    </div>
    <div id="headerFunction">
        <router-link to="/register">
        <el-button>用户注册</el-button>
      </router-link>
      <router-link to="/login">
        <el-button>系统登录</el-button>
      </router-link>
      <router-link to="/work">
        <el-button>工作中心</el-button>
      </router-link>
      <router-link to="/reader">
        <el-button>读者信息</el-button>
      </router-link>

      <router-link to="/book">
        <el-button>图书信息</el-button>
      </router-link>
      
      <router-link to="/connode">
        <el-button>node论坛</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBook",
  data() {
    return {
      message: "江西软件职业大学—新型图书管理系统",
    };
  },
};
</script>

<style>
#headerTitle {
  display: inline-block;
  line-height: 60px;
  color: white;
  font-size: 20px;
  font-weight: bolder;
}
#headerFunction {
  display: inline-block;
  float: right;
  margin-top: 10px;
}
#headerFunction>a > .el-button {
  background-color: #0a9588;
  color: white;
  border-color: #0a9588;
  margin-left: 5px;
}
</style>