<!-- 首页主题栏 -->
<template>
  <div class="yg-topic-bar">
    <section class="topic-bar-top">
      <h4>主题社区</h4>
      <span>管理</span>
    </section>
    <section class="topic-bar-list-wrapper">
      <ul>
        <li class="topic-list-item">
          <section>
            <img src="https://cdn.ruguoapp.com/FmlY3zlI5mv6Kto3tN_ZbjMAvRM8.png" alt="">
          </section>
          <p>《绝地求生》玩家俱乐部</p>
        </li>
        <li class="topic-list-item light" data-before="来追光">
          <section>
            <img src="https://cdn.ruguoapp.com/FjABdQowvYa8E8x3UNxOiqP8lNWt.jpg" alt="">
          </section>
          <p>追光瞬间</p>
        </li>
        <li class="topic-list-item">
          <section>
            <img src="https://cdn.ruguoapp.com/FmlY3zlI5mv6Kto3tN_ZbjMAvRM8.png" alt="">
          </section>
          <p>绝地求生</p>
        </li>
        <li class="topic-list-item">
          <section>
            <img src="https://cdn.ruguoapp.com/FmlY3zlI5mv6Kto3tN_ZbjMAvRM8.png" alt="">
          </section>
          <p>绝地求生</p>
        </li>
        <li class="topic-list-item">
          <section>
            <img src="https://cdn.ruguoapp.com/FmlY3zlI5mv6Kto3tN_ZbjMAvRM8.png" alt="">
          </section>
          <p>绝地求生</p>
        </li>
      </ul>
    </section>
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
@import "~@/styles/mixin.less";
.yg-topic-bar {
  .topic-bar-top {
    display: flex;
    justify-content: space-between;
    padding: 20px 15px;
    h4 {
      font-size: 16px;
    }
    span {
      color: #07aaf4;
      font-size: 14px;
    }
  }
  .topic-bar-list-wrapper {
    padding-left: 15px;
    overflow:scroll;
    -webkit-overflow-scrolling: touch;
    ul {
      white-space: nowrap;
    }
    .topic-list-item {
      display: inline-block;
      height: 72px;
      width: 72px;
      border-radius: 9px;
      box-sizing: border-box;
      border: 2px solid #dbdbdb;
      margin-right: 15px;
      &.light {
        position: relative;
        border-color: #ffe411;
        margin-right: 30px;
        &::before {
          content: attr(data-before);
          position: absolute;
          left: 0;
          top: 0;
          width: 47px;
          height: 15px;
          background-color: #ffe411;
          font-size: 10px;
          // padding-left: 6px;
          text-align: center;
          line-height: 15px;
          border-bottom-right-radius: 9px;
        }
        &::after {
          content: '';
          position: absolute;
          height: 50px;
          width: 1px;
          right: -18px;
          bottom: 0;
          background: #dbdbdb;
        }
      }
      section {
        padding: 4px;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
      p {
        font-size: 12px;
        text-align: center;
        .ellipsis-one;
      }
    }
  }
}
</style>

