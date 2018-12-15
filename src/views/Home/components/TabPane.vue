<!-- 首页tab -->
<template>
  <div class="yg-tab-pane">
    <div class="tabs">
      <div class="wrapper">
        <ul>
          <li
            class="tab-item"
            v-for="(item, index) in tabData"
            :class="{'active': tabIndex === index }"
            @click="switchTab(index)"
            :key="item"
            v-text="item"
          ></li>
          <!-- <li class="tab-item" :class="{'active': tabIndex === 1 }">推荐</li>
          <li class="tab-item" :class="{'active': tabIndex === 2 }">附近</li>-->
          <li class="active-bar" :style="{transform: `translateX(${tabWidth*tabIndex}px)`}"></li>
        </ul>
      </div>
      <swiper class="yg-tab-container" :options="swiperOption">
        <!-- 关注 -->
        <swiperSlide>
          <FollowPage/>
        </swiperSlide>
        <!-- 推荐 -->
        <swiperSlide>
          <RecommendPage/>
        </swiperSlide>
        <!-- 附近 -->
        <swiperSlide>
          <NearbyPage/>
        </swiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import FollowPage from "./FollowPage.vue";
import RecommendPage from "./RecommendPage.vue";
import NearbyPage from "./NearbyPage.vue";

@Component({
  components: {
    swiper,
    swiperSlide,
    FollowPage,
    RecommendPage,
    NearbyPage
  },
})

export default class Home extends Vue {
  // @Prop({ default: 'default value' }) propB!: string
  // 数据
  public tabIndex: number = 0;
  public tabData: string[] = ["关注", "推荐", "附近"];
  public tabWidth: number = 62;
  public swiperOption: object = {
    on: {
      touchMove() {
        console.log("touchmove", this);
      }
    }
  };
  // public b: string = "";
  // 生命周期
  // public created(){}
  // public mounted(){}

  // methods
  public switchTab(tabIndex: number): void {
    console.log(tabIndex);
    this.tabIndex = tabIndex;
  }

  // computed
  // get computedName(){},

  // watch
  // @Watch("child")
  // onChildChanged(val: string, oldVal: string) { }
}
</script>
<style lang='less'  scoped>
@import "~@/styles/mixin.less";

.yg-tab-pane {
  .tabs {
    background-color: #fff;
    .wrapper {
      padding: 0 15px;
      ul {
        position: relative;
        font-size: 0;
        li.tab-item {
          color: @color-text-disabled;
          font-size: 16px;
          display: inline-block;
          padding: 12px 0;
          margin-right: 30px;
          box-sizing: border-box;
          &.active-bar {
            color: @color-text-base;
          }
        }
        li.active-bar {
          height: 4px;
          background-color: @brand-primary;
          width: 32px;
          position: absolute;
          bottom: 0;
          transition-duration: 300ms;
          transform: translateX(62px);
        }
      }
    }
    .yg-tab-container {
      background: @fill-body;
    }
  }
}
</style>
