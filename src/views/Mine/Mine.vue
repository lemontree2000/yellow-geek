<!-- 我的 -->
<template>
  <section class="yg-mine">
    <section class="bg-block"></section>
    <header>
      <span class="setting"></span>
    </header>
    <section class="yg-mine-container">
      <section class="yg-mine-card">
        <section class="mine-card-wrapper">
          <div class="avatar">
            <img src="./image/131544113561_.pic.jpg" alt>
          </div>
          <div class="name-width-seecount">
            <h1>即刻鸡客</h1>
            <p>
              <span>11</span>人来看过你
            </p>
          </div>
        </section>
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
  // padding-top: 44px;
  position: relative;
  header {
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
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
  .bg-block {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50vh;
    z-index: -1;;
    background-color: @brand-primary;
  }
  .yg-mine-container {
    margin-top: 44px;
    .yg-mine-card {
      height: 100px;
      background-image: url("./image/illustration_personal_tab_background@3x.png");
      background-size: cover;
      background-repeat: no-repeat;
      padding: 0 15px;
      margin-bottom: 12px;
      .mine-card-wrapper {
        height: 100px;
        background-color: @fill-base;
        border-radius: @radius-lg;
        padding: 20px 15px;
        box-sizing: border-box;
        display: flex;
        .avatar {
          width: 60px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
        .name-width-seecount {
          margin-left: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h1 {
            font-size: @font-size-heading;
            color: @color-text-base;
          }
          p {
            font-size: @font-size-caption-sm;
            color: @color-text-base;
            span {
              color: #000;
            }
          }
        }
      }
    }
    .yg-mine-list {
      background-color: @fill-base;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 100px;
      }
      li {
        height: 50px;
        line-height: 50px;
        padding: 0 17px 0 20px;
        font-size: @font-size-base;
        color: @color-text-base;
        .border-1px(border-bottom, @border-color-base);
      }
    }

  }
}

</style>
