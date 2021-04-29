<template>
  <div id="registerWrapper">
    <div id="registerContent">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>用户注册</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >忘记密码</el-button
          >
        </div>
        <div id="registerContentBody">
          <el-input id="username" v-model="newuser.newusername" clearable></el-input>
          <el-input id="password" v-model="newuser.newpassword" show-password clearable></el-input>
        </div>
        <div id="registerSubmit">
          <el-button id="systemSubmit"
          @click="register">注册</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            newuser:{
                newusername:"",
                newpassword:""
            }
        }
    },
    methods:{
      registerSystem(){
        Axios.get('http://localhost:3000/login').then(function(response){
          alert(response.data)
        })
      }
    }
};
</script>

<style scoped>
#registerWrapper {
 /* background-color: blueviolet;*/
  height: 100%;
}
#registerContent {
  width: 400px;
  margin: 0 auto;
  padding-top:100px ;
}
#systemSubmit{
    display: block;
     margin: 0 auto;
     background-color: #0a9588;
     color: white;
     border-color:#0a9588 ;
}
</style>