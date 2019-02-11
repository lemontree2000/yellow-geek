<!-- 发现 -->
<template>
  <div class="yg-discovery">
    <SearchBar :isWhite="true" :hasScan="true"/>
    <HostpotCarousel/>
    <TopicPageList/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import HostpotCarousel from "./components/HotspotCarousel.vue";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import TopicPageList from "./components/TopicPageList.vue";

@Component({
  name: "discovery",
  components: {
    HostpotCarousel,
    SearchBar,
    TopicPageList
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

</style>
