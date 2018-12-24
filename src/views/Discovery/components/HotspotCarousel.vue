<!-- 热门活动轮播图 -->
<template>
  <div class="discovery-carousel">discovery-carousel
    <section>
      <swiper>
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
