<!-- 我的 -->
<template>
  <section class="yg-mine">
    <header>
      <span class="setting"></span>
    </header>
    <section class="yg-mine-container">
      <section class="yg-mine-card">
        <div class="avatar">
          <img src alt>
        </div>
        <div class="name-width-seecount">
          <h1>即刻鸡客</h1>
          <p>11人来看过你</p>
        </div>
      </section>
      <ul class="yg-mine-list">
        <li>
          <img src alt>
          <span>我关注的主题</span>
        </li>
        <li>
          <img src alt>
          <span>我的收藏</span>
        </li>
        <li>
          <img src alt>
          <span>我的通知</span>
        </li>
        <li>
          <img src alt>
          <span>帮助与反馈</span>
        </li>
      </ul>
      <ul class="yg-mine-list">
        <li>
          <img src alt>
          <span>我创建的主题</span>
        </li>
        <li>
          <img src alt>
          <span>免流量</span>
        </li>
      </ul>
    </section>
  </section>
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
  // public mounted(){}

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
@import url("~@/styles/mixin.less");
.yg-mine {
  header {
    height: 44px;
    background-color: @brand-primary;
    padding: 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    span {
      width: 24px;
      height: 24px;
      background-image: url("./image/ic_navbar_setting@3x.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
