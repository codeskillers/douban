<template>
    <div class="indexContainer">
       <Header></Header>
      <div class="wrapper" scroll-y="true" ref="wrapper">
          <div class="ulWrapper" ref="ulWrapper">
          <Hotshow></Hotshow>
          <Hotdouban></Hotdouban>
          <Hotrecent></Hotrecent>
          </div>
      </div>
     <Nav tabName='0'></Nav>
      <router-view/>
    </div>
</template>
<script>
import Nav from '../nav';
import Header from './components/Header';
import Hotshow from './components/Hotshow';
import Hotdouban from './components/Hotdouban';
import Hotrecent from './components/Hotrecent';
import BScroll from 'better-scroll';
export default {
    name: "Index",
    data () {
        return {
            message: 'hello world'
        }   
    },
    components: {
        Header,
        Hotshow,
        Hotdouban,
        Hotrecent,
        Nav
    },
    mounted() {
         this.$nextTick(() => {
         this.personScroll();
      });
    },
    methods: {
    personScroll() {
      // 默认有3个li子元素，每个子元素的宽度为120px
      let height = 3 * 14.2;
      this.$refs.ulWrapper.style.height = height + "rem";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startY: 0,
            click: true,
            scrollX: false,
            scrollY: true,
            // eventPassthrough: "vertical"
          });
        } else {
          // 如果子元素或者父元素 DOM 结构发生改变的时候，必须重新调用 scroll.refresh() 方法重新计算来确保滚动效果的正常
          this.scroll.refresh();
        }
      });
    }
  }
}
</script>

<style>
 .indexContainer {
     width: 100%;
     height: 100%;
     position: relative;
     overflow: hidden;
 }
 .wrapper {
    overflow: hidden;
    height: 32rem;
 }
</style>
