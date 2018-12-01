<!-- 动态组件 -->
<template>
  <div class="dynamic-component">
    <header>
      <div class="topic-tag">今日份的摄影</div>
      <div>
        <span class="time">23:11</span>
        <span class="more-btn">⬇️</span>
      </div>
    </header>
    <section class="dynamic-content">
      <div class="dynamic-content-text"></div>
      <div class="dynamic-content-img">
        <img src="" alt="">
      </div>
    </section>
    <section class="hot-comment">
      <head>
        <span class="icon"></span>
        <span class="favour-count">177赞</span>
      </head>
      <div class="hot-comment-content">
        <p>
          <span class="user-name">乌漆漆：</span>
          <span class="comment-text">
            这个主题不错，good！！！
          </span>
        </p>
        <div class="comment-img">
          <img src="" alt="">
        </div>
      </div>
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
  .dynamic-component {
    padding: 15px;
    background: #fff;
    header {
      // padding: 1
      .topic-tag {
        padding: 8px 11px;
        // background-color:
      }
    }
  }
</style>
