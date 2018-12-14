<!-- 搜索栏 -->
<template>
  <div class="yg-search-bar" :class="{'white': isWhite}">
    <input class="search-bar-input" placeholder="中国音乐公告牌">
    <span v-show="hasScan" class="search-bar-scan"></span>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class SearchBar extends Vue {
  @Prop({ default: false }) public isWhite!: boolean;
  @Prop({ default: false }) public hasScan!: boolean;

  // 数据
  // public a: number = 0;
  // public b: string = "";
  // 生命周期
  public created() {
    console.log(this.hasScan);
  }
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

.yg-search-bar {
  height: 44px;
  background-color: @brand-primary;
  padding: 0 15px;
  display: flex;
  align-items: center;
  &.white {
    background-color: @fill-base;
    .search-bar-input {
      background-color: @fill-body;
    }
  }
  .search-bar-input {
    flex: 1;
    height: 30px;
    // line-height: 18px;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding-left: 31px;
    background-image: url("./image/ic_navbar_search@3x.png");
    background-repeat: no-repeat;
    background-position: 8px 50%;
    background-size: 15px;
    font-size: 13px;
    color: #777;
    vertical-align: middle;
  }
  .search-bar-scan {
    width: 24px;
    height: 24px;
    margin-left: 18px;
    background: url("./image/ic_navbar_scan@3x.png") no-repeat center;
    background-size: cover;
  }
}
</style>
