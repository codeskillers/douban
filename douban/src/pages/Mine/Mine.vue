<template>
    <div class="mineContainer">
          <Header :title="message"></Header>
          <div class="wrapper" scroll-y="true" ref="wrapper">
              <div class="ulWrapper" ref="ulWrapper">
              <Login></Login>
              <Mysth></Mysth>
              <Watch v-for="(item,index) in text" :key="index" :content="item"></Watch>
              </div>
          </div>
          <Nav tabName='2'></Nav>
    </div>
</template>
<script>
import Header from '../header'
import Nav from '../nav';
import Login from './components/Login';
import Mysth from './components/Mysth';
import Watch from './components/Watch';
import BScroll from 'better-scroll';
export default {
    name: "Mine",
    data () {
        return {
            message: '书影音档案',
             text: [
                  {img1:require("../../assets/video.png"),img2:require("../../assets/arrow1.png"),text1:"观影分析",text2:"0 看过",text3:"标记这部电影",text4:"开启观影分析",text5:"立即开启"},
                  {img1:require("../../assets/book.png"),img2:require("../../assets/arrow1.png"),text1:"读书分析",text2:"0 看过",text3:"标记10本书",text4:"开启读书分析",text5:"立即开启"},
                  {img1:require("../../assets/music.png"),img2:require("../../assets/arrow1.png"),text1:"音乐分析",text2:"0 看过",text3:"标记10张唱片",text4:"开启音乐分析",text5:"立即开启"}
              ]
        }
    },
     mounted() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      let height = 38;
      this.$refs.ulWrapper.style.height = height + "rem";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startY: 0,
            click: true,
            scrollX: false,
            scrollY: true
            // eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
    components: {
        Header,
        Login,
        Mysth,
        Watch,
        Nav
    }
}
</script>

<style>
 .mineContainer {
     width: 100%;
     height: 100%;
 }
 .router-link-active {
    text-decoration: none;
    color: #000;
  }
  .wrapper{
      overflow: hidden;
      height: 33rem;
  }
  .ulWrapper{
      height: 38rem;
  }
</style>
