<!-- 主题列表页面 -->
<template>
  <section class="topic-page-list">
    <section class="tab-header">
      <ul>
        <li>推荐</li>
        <li>资讯</li>
        <li>游戏</li>
        <li>趣味</li>
        <li>科技</li>
        <li>体育</li>
        <li>动漫</li>
      </ul>
    </section>
    <section class="topic-pages">
      <section>1</section>
      <section>2</section>
      <section>3</section>
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

</style>
