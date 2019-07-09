<template>
  <div class="listContainer">
    <Header :title="message"></Header>
    <div class="wrapper" scroll-y="true" ref="wrapper">
      <div class="ulWrapper" ref="ulWrapper">
        <Movielist></Movielist>
        <div class="movie-type" >
          <Movietypes tag="li" v-for="(item,index) in types" :key="index" :choose="item" @turn="toLiDetail(index)"></Movietypes>
        </div>
      </div>
    </div>
    <Nav tabName="1"></Nav>
  </div>
</template>
<script>
import Nav from "../nav";
// import Header from "./components/Header";
import Header from '../header';
import Movielist from "./components/Movielist";
import Movietypes from "./components/Movietypes";
import BScroll from 'better-scroll';
export default {
  name: "Video",
  data() {
    return {
      message: "榜单",
      types: [
        {
          text1: "1.肖申克的救赎",
          text2: "2.霸王别姬",
          text3: "3.这个杀手不太冷",
          img: require("../../assets/top50.png"),
          score: [9.6, 9.6, 9.4]
        },
        {
          text1: "1.头号玩家",
          text2: "2.三块广告牌",
          text3: "3.小偷家族",
          img: require("../../assets/foremovie.png"),
          score: [8.7, 8.7, 8.7]
        },
        {
          text1: "1.我不是药神",
          text2: "2.大佛普拉斯",
          text3: "3.红海行动",
          img: require("../../assets/cnamovie.png"),
          score: [9, 8.7, 8.3]
        },
        {
          text1: "1.巴斯特",
          text2: "2.冒牌上尉",
          text3: "3.阿德尔曼夫妇",
          img: require("../../assets/coldgood.png"),
          score: [8.5, 8.5, 8.3]
        },
        {
          text1: "1.盗梦空间",
          text2: "2.机器人总动员",
          text3: "3.星际穿越",
          img: require("../../assets/science.png"),
          score: [9.3, 9.3, 9.2]
        }
      ]
    };
  },
  components: {
    Header,
    Movielist,
    Movietypes,
    Nav
  },
  mounted() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      let height = 54;
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
    },
    toLiDetail(index){
      console.log(index);
      this.$router.push({path: '/listDetail',query:{index,}})
    }
  }
};
</script>
<style>
.listContainer {
  width: 100%;
  height: 100%;
}
.wrapper{
    overflow: hidden;
    height: 32rem;
}
</style>
