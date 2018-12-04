<!-- 我的 -->
<template>
  <section class="yg-mine">
    <header>
      <span class="setting"></span>
    </header>
    <section class="yg-mine-container">
      <section class="yg-mine-card">
        <div class="avatar">
          <img src alt>
        </div>
        <div class="name-width-seecount">
          <h1>
            即刻鸡客
          </h1>
          <p>
            11人来看过你
          </p>
        </div>
      </section>
      <ul class="yg-mine-list">

      </ul>
      <ul class="yg-mine-list">

      </ul>
    </section>
  </section>
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
</style>
