<!-- 首页 -->
<template>
  <div class="yg-home">
    <SearchBar></SearchBar>
    <TopicBar></TopicBar>
    <TabPane></TabPane>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import TopicBar from "./components/TopicBar.vue";
import TabPane from "./components/TabPane.vue";

@Component({
  name: "home",
  components: {
    SearchBar,
    TopicBar,
    TabPane
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
