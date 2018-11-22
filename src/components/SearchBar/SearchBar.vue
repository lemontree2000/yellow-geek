<!-- 搜索栏 -->
<template>
  <div class="yg-search-bar">
    <input class="search-bar-input" placeholder="中国音乐公告牌"/>
    <span class="search-bar-scan"></span>
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
.yg-search-bar {
  height: 44px;
  background-color: #ffe411;
  padding: 0 15px;
  display: flex;
  align-items: center;
  .search-bar-input {
    flex: 1;
    height: 30px;
    // line-height: 18px;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    padding-left: 31px;
    background-image: url('./image/ic_navbar_search@3x.png');
    background-repeat: no-repeat;
    background-position: 6px 50%;
    background-size: 19px;
    font-size: 13px;
    color:#777;
    vertical-align: middle;
  }
}
</style>
