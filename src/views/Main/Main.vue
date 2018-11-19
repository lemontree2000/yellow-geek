<!-- 首页 -->
<template>
  <div class="main">
     <keep-alive>
      <router-view/>
    </keep-alive>
    <nav-bar/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar/NavBar.vue";

@Component({
  name: "v-main",
  components: {NavBar}
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
