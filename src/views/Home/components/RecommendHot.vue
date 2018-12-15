<!-- 热点推荐组件 -->
<template>
  <div class="">
    <div class="home-recommend">
      <div class="home-recommend-detail">
        <img src="../../../assets/home-recommend.png" alt>
        <div>
          <h4>即民晚报：在即刻拍猫的人🐈</h4>
          <p>他拍了一年的猫，现在想记录时代</p>
          <span></span>
        </div>
      </div>
      <div class="home-recommend-action">去取报📰</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class RecommendHot extends Vue {
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
@import "~@/styles/mixin.less";

.home-recommend {
  margin-bottom: 8px;
  background: #fff;
  .home-recommend-detail {
    padding: 15px;
    display: flex;
    img {
      width: 70px;
      height: 70px;
      margin-right: 10px;
    }
    div {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      justify-content: space-around;
      h4 {
        font-size: 16px;
        color: @color-text-base;
      }
      p {
        font-size: 14px;
        color: #868686;
      }
      span {
        position: absolute;
        width: 16px;
        height: 16px;
        padding: 3px;
        background: url("~@/assets/ic_common_close_gray@3x.png") no-repeat
          center;
        background-size: 16px 16px;
        right: 0;
        top: 0;
      }
    }
  }
  .home-recommend-action {
    height: 44px;
    line-height: 44px;
    color: @color-text-highlight;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
    border-top: 1px solid #dbdbdb;
  }
}
</style>
