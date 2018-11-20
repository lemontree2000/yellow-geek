<!-- 导航组件 -->
<template>
  <nav class="nav-bar">
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
      <div style="font-size: 40px">
        <img src="./image/ic_custom_topic_create_new_topic@3x.png" alt="">
        +
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
.nav-bar {
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
    div {
      img {
        width: 25px;
        vertical-align: middle;
        &:nth-child(2) {
          display: none;
        }
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
