<!-- 动态组件 -->
<template>
  <div class="dynamic-component">
    <header>
      <div class="topic-tag">
        <i class="icon">
          <i class="icon-del"></i>
        </i>
        今日份的摄影
      </div>
      <div class="right">
        <span class="time">23:11</span>
        <span class="more-btn">
          <i class="icon"></i>
        </span>
      </div>
    </header>
    <section class="dynamic-content">
      <div class="dynamic-content-text">
      【《绝地求生》手游将联动《生化2》】PUBG Mobile官方推特今天发布预告，宣布《绝地求生》手游将与《生化危机2》展开联动，官方目前还未公布联动的具体形式，不过官推表示更多信息将在近期内公布。
      </div>
      <!-- <div class="dynamic-content-img">
        <img src="" alt="">
      </div> -->
    </section>
    <!-- <section class="hot-comment">
      <footer>
        <span class="icon"></span>
        <span class="favour-count">177赞</span>
      </footer>
      <div class="hot-comment-content">
        <p>

          <span class="user-name">乌漆漆：</span>
          <span class="comment-text">
            这个主题不错，good！！！
          </span>
        </p>
        <div class="comment-img">
          <img src="" alt="">
        </div>
      </div>
    </section> -->
    <section class="dynamic-footer">
      <div class="favour">
        <i class="icon">
          <img src="./image/ic_messages_like@3x.png" alt="">
        </i>
        <span>22</span>
      </div>
      <div class="comment">
        <i class="icon">
          <img src="./image/ic_messages_comment@3x.png" alt="">
        </i>
        <span>12</span>
      </div>
      <div class="share">
        <i class="icon">
          <img src="./image/ic_messages_repost@3x.png" alt="">
        </i>
        <span>42</span>

      </div>
       <div class="share-out">
        <i class="icon">
          <img src="./image/ic_messages_share@3x.png" alt="">
        </i>
      </div>
    </section>
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
@import "~@/styles/mixin.less";
.dynamic-component {
  padding: 15px;
  background: @fill-base;
  header {
    // padding: 1
    display: flex;
    justify-content: space-between;
    font-size: 0;
    .topic-tag {
      padding: 8px 11px;
      background-color: @fill-body;
      font-size: @font-size-caption-sm;
      color: @color-text-highlight;
      border-radius: 18px;
      overflow: hidden;
      display: flex;
      align-items: center;
      .icon {
        position: relative;
        width: 17px;
        height: 16px;
        display: inline-block;
        overflow: hidden;
        margin-right: 4px;
        .icon-del {
          position: relative;
          left: -19px;
          border-right: 20px solid transparent;
          background-size: cover;
          background-image: url("./image/ic_personaltab_activity_add_topic@3x.png");
          background-repeat: no-repeat;
          filter: drop-shadow(20px 0 0 #03a9f4);
        }
      }
    }
    .right {
      line-height: 33px;
      .time {
        font-size: @font-size-icontext;
        color: @color-text-placeholder;
      }
      .more-btn {
        margin-left: 10px;
        .icon {
          display: inline-block;
          width: 12px;
          height: 16px;
          background-image: url("~@/assets/ic_common_arrow_down@3x.png");
          background-size: cover;
          vertical-align: middle;
        }
      }
    }
  }
  .dynamic-content {
    .dynamic-content-text {
      padding: 10px 0;
      line-height: 24px;
      color: @color-text-base;
    }
  }
  .dynamic-footer {
    display: flex;
    border-top: 1px solid @border-color-base;
    padding-top: 11px;
    div:not(.share-out) {
      flex: 1;
      display: flex;
    }
    div {
      font-size: 10px;
      line-height: 20px;
      color: @color-text-caption;
      span {
        margin-left: 7px;
      }
      .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        vertical-align: middle;
        align-content: center;
        img {
          width: 100%;
        }
      }
    }
  }
  margin-bottom: 10px;
}
</style>
