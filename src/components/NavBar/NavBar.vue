<!-- 导航组件 -->
<template>
  <nav class="yg-nav-bar">
    <router-link class="nav-bar-item" tag="section" to="/home">
      <div>
        <img src="./image/ic_tabbar_home_unselected@3x.png" alt="">
        <img src="./image/ic_tabbar_home_selected@3x.png" alt="">
        </div>
      <span>首页</span>
    </router-link>
    <router-link class="nav-bar-item" tag="section" to="/dynamic">
      <div>
        <img src="./image/ic_tabbar_activity_unselected@3x.png" alt="">
        <img src="./image/ic_tabbar_activity_selected@3x.png" alt="">
      </div>
      <span>动态</span>
    </router-link>
    <router-link class="nav-bar-item" tag="section" to="/createDynamic">
      <div style="font-size: 45px;">
        <div class="add-topioc-button">
        <img src="./image/ic_common_subscribe_follow_small@3x.png" alt="">
        </div>
      </div>
      <!-- <span>首页</span> -->
    </router-link>
    <router-link class="nav-bar-item" tag="section" to="/discovery">
      <div>
        <img src="./image/ic_tabbar_discovery_unselected@3x.png" alt="">
        <img src="./image/ic_tabbar_discovery_selected@3x.png" alt="">
      </div>
      <span>发现</span>
    </router-link>
    <router-link class="nav-bar-item" tag="section" to="/mine">
      <div>
        <img src="./image/ic_tabbar_personal_unselected@3x.png" alt="">
        <img src="./image/ic_tabbar_personal_selected@3x.png" alt="">
      </div>
      <span>我的</span>
    </router-link>
  </nav>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "nav-bar",
  components: {},
})
export default class Home extends Vue {
  // @Prop({ default: 'default value' }) propB!: string

  // 数据
  // public a: number = 0;
  // public b: string = "";
  // 生命周期
  // public created(){}
  // public mounted() {
  // }

  // methods
  // public handleClick() {}

  // computed
  // get computedName(){},

  // watch
  // @Watch("child")
  // onChildChanged(val: string, oldVal: string) { }
}

</script>
<style lang='less'  scoped>
@import "~@/styles/mixin.less";

.yg-nav-bar {
  background: #fff;
  position: fixed;
  max-width: 640px;
  z-index: 99;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  border-top: 1px solid #eee;
  .nav-bar-item {
    flex: 1;
    text-align: center;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #acacac;
    img {
      width: 25px;
      vertical-align: middle;
      &:nth-child(2) {
        display: none;
      }
    }
    &:nth-child(3) {
      img {
        width: 16px;
      }
      .add-topioc-button {
        margin: 0 auto;
        width: 46px;
        height: 32px;
        line-height: 24px;
        background: @brand-primary;
        border-radius: 8px;
        text-align: center;
        color: #404040;
        font-weight: bold;
      }
    }
  }
}
.router-link-active {
  span {
    color: #03b2f5;
  }
  img {
    &:first-child {
      display: none !important;
    }
    &:last-child {
      display: inline-block !important;
    }
  }
}
</style>
