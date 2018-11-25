<!-- 首页tab -->
<template>
  <div class="yg-tab-pane">
    <div class="tabs">
      <ul>
        <li class="active">关注</li>
        <li>推荐</li>
        <li>附近</li>
      </ul>
      <div class="home-recommend">
        <div class="home-recommend-detail">
          <img src="../../../assets/home-recommend.png" alt="">
          <div>
            <h4>即民晚报：在即刻拍猫的人🐈</h4>
            <p>他拍了一年的猫，现在想记录时代</p>
            <span>X</span>
          </div>
        </div>
        <div class="home-recommend-action">去取报</div>
      </div>
    </div>
  </div>
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
  .yg-tab-pane {
    .tabs {
      background-color: #fff;
      ul {
        padding: 0 15px;
        font-size: 0;
        li {
          color: #bfbfbf;
          font-size: 16px;
          display: inline-block;
          padding: 12px 0;
          margin-right: 30px;
          box-sizing: border-box;
          &.active {
            color: #404040;
            border-bottom: 4px solid #ffe411;
          }
        }
      }
    }
    .home-recommend {
      .home-recommend-detail {
        padding: 15px;
      }
    }
  }
</style>
