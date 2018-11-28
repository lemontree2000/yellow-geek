<!-- 动态组件 -->
<template>
  <div class="dynamic-component">
    <head>
      <div class="topic">今日份的摄影</div>
      <div>
        <span class="time">23:11</span>
        <span class="more-btn">⬇️</span>
      </div>
    </head>
    <section class="dynamic-content">
      <div class="dynamic-content-text"></div>
      <div class="dynamic-content-img">
        <img src="" alt="">
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

</style>
