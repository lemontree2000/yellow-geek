<!-- 主题列表页面 -->
<template>
  <section class="topic-page-list">
    <section class="tab-header">
      <swiper>
        <swiperSlide>推荐</swiperSlide>
        <swiperSlide>资讯</swiperSlide>
        <swiperSlide>游戏</swiperSlide>
        <swiperSlide>趣味</swiperSlide>
        <swiperSlide>科技</swiperSlide>
        <swiperSlide>体育</swiperSlide>
        <swiperSlide>动漫</swiperSlide>
      </swiper>
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
import { swiper, swiperSlide } from "vue-awesome-swiper";

@Component({
  components: {
    swiper,
    swiperSlide
  },
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
.topic-page-list {
  background: @fill-base;
}
</style>
