<template>
  <div id="app">
    <!--3、使用子组件-->
    <el-container>
      <el-header id="headerhello">
        <Header/>
      </el-header>
      <el-main id="mainhello">
        <!-- <Login/> -->
        <router-view></router-view>
      </el-main>
      <el-footer id="footerhello">
        <Footer/>
      </el-footer>
    </el-container>
    
  </div>
    
</template>

<script>
//1、导入Header 子组件
import Header from "./components/Header.vue"
import Login from "./components/Login.vue"
import Footer from "./components/Footer.vue"

//2、注册  子组件
export default {
  name: 'App',
  components: {
  Header,
  Login,
  Footer
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#headerhello{
  background-color: #244152;
}
#mainhello{
  /* background-color: blue; */
  height: 500px;
}
#footerhello{
  /* background-color: green; */
  height: 150px !important;
}
</style>
