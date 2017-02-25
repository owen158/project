<template>
  <div id="app">
      <n_av :seller='seller'></n_av>
      <div class="tab">
          <div class="tab-item border-1px">
            <router-link to='/'>商品</router-link>
          </div>
          <div class="tab-item">
            <router-link to='/header'>评论</router-link>
          </div>
          <div class="tab-item">
            <router-link to='/footer'>商家</router-link>
          </div>
      </div>
    <router-view :seller="seller"></router-view>
      <h_eader></h_eader>
      <f_ooter></f_ooter>
  </div>
</template>

<script>
import header from './components/header/header'
import footer from './components/footer/footer'
import nav from './components/nav/nav'
const ERR_OK = 0
export default {
  data() {
   return {
    seller: {}
   }
  },
  created() {
    this.$http.get('/api/seller').then((response) => {
        response = response.body
        if(response.errno === ERR_OK) {
            this.seller = response.data
        }
    })
  },
  components: {
    h_eader:header,
    f_ooter:footer,
    n_av: nav
  }
}
</script>

<style lang='stylus' rel=stylesheet/stylus>
 @import "./components/stylus/mixin.styl"
 .tab
  display: flex;
  width: 100%;
  height: 40px;line-height: 40px;
  border-1px(rgba(7,17,27,0.1))
  .tab-item
    flex: 1
    text-align: center
    &>a
      display: block
      font-size:14px
      color: rgb(77,85,93) 
      &.router-link-active
       color: rgb(240,20,20)

</style>
