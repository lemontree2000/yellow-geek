<!-- 热门活动轮播图 -->
<template>
  <div class="discovery-carousel">
    discovery-carousel
    <section>
      <swiper>
        <swiperSlide>
          <section class="carousel-item">
            <img src="" alt="">
          </section>
        </swiperSlide>
         <swiperSlide>
          <section class="carousel-item">
            <img src="" alt="">
          </section>
        </swiperSlide>
         <swiperSlide>
          <section class="carousel-item">
            <img src="" alt="">
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
  components: {swiper, swiperSlide},
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
