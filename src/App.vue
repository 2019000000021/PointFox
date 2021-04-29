<template>
  <div id="app">
    <el-container>
      <el-header id="headerBook">
        <Header />
      </el-header>
    </el-container>
    <el-main id="mainBook">
      <!-- <Login /> -->
    <router-view></router-view>
     </el-main>

    <el-footer id="footerBook"> <Footer/></el-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import register from "./components/register";

export default {
  name: "App",
  components: {
    Header,
    Login,
    Footer,
    register,
  },
};
</script>
  
<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
#headerBook {
  background-color: #244152;
}
#mainBook {
 /* background-color: royalblue;*/
  height: 500px;
}
#footerBook {
  /*background-color: green;*/
  height: 150px !important;
}
</style>
