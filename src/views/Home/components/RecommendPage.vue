<!-- 推荐tab页 -->
<template>
  <div>
    <RecommendHot/>
    <DynamicComponent/>
    <DynamicComponent/>
    <DynamicComponent/>
    <DynamicComponent/>
    <DynamicComponent/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import DynamicComponent from "@/components/DynamicComponent/DynamicComponent.vue";
import RecommendHot from "./RecommendHot.vue";

@Component({
  components: {
    DynamicComponent,
    RecommendHot
  },
})

export default class RecommendPage extends Vue {
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
