<!-- 热门活动轮播图 -->
<template>
  <div class="discovery-carousel">
    <section class="swiper-wrap">
      <swiper :options="swiperOptions">
        <swiperSlide>
          <section class="carousel-item">
            <img
              src="https://hdcdn.ruguoapp.com/FgV31-yrxbsAh4dQUKfFRTmtsvJN.png?imageView2/0/w/720/h/360"
              alt
            >
          </section>
        </swiperSlide>
        <swiperSlide>
          <section class="carousel-item">
            <img
              src="https://hdcdn.ruguoapp.com/Fovyo1w3lU8lNxQsANjNK-UbaM6g.png?imageView2/0/w/720/h/360"
              alt
            >
          </section>
        </swiperSlide>
        <swiperSlide>
          <section class="carousel-item">
            <img
              src="https://hdcdn.ruguoapp.com/FvlumgsJiOejUCBmU--BCQyvJvJ2.jpg?imageView2/0/w/720/h/360"
              alt
            >
          </section>
        </swiperSlide>
        <swiperSlide>
          <section class="carousel-item">
            <img
              src="https://hdcdn.ruguoapp.com/Fj5pUR9Qun5EB6EU9aPU_4YJ1Azj.png?imageView2/0/w/720/h/360"
              alt
            >
          </section>
        </swiperSlide>
      </swiper>
    </section>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";

@Component({
  components: { swiper, swiperSlide },
})
export default class Home extends Vue {
  // @Prop({ default: 'default value' }) propB!: string

  // 数据
  public swiperOptions: object = {
    centeredSlides: !0,
    loop: true,
    slidesPerView: "auto"
  };
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
.discovery-carousel {
  .swiper-wrap {
    padding: 15px 0 15px 0;
    background: @fill-base;
    .swiper-slide {
      width: 80%;
      transform-style: preserve-3d;
      .carousel-item {
        width: 100%;
        padding-bottom: 10px;
        font-size: 0;
        overflow: hidden;
        img {
          margin: 0 auto;
          display: block;
          border-radius: @radius-lg;
          width: 95%;
          box-shadow: 0.4px 3px 4px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>
