<template>
    <div class="detail2Container">
        <Header :title="message"></Header>
         <div class="hotmoviesWrapper" ref="wrapper" >
          <ul class="hotMovies" ref="ulWrapper">
                <li v-for="(item,index) in hotMovies" :key="index" class="movies-item">
                    <img :src="item.imgUrl" class="movies-img">
                    <p class="movies-name">{{item.movieName}}</p>
                    <div>
                     <Star :size="24" :score="item.score" class="movie-star"></Star>
                     <span class="movie-score">{{item.score}}</span>
                    </div>
                </li>
          </ul>
        </div>
    </div>
</template>

<script>
import Header from '../../header'
import Star from '../../star/star';
import BScroll from 'better-scroll';
export default {
     data() {
         return {
            message: "影院热映",
            hotMovies: []
         }
     },
     created() {
         this.$http.get('https://www.easy-mock.com/mock/5d023f7ba93a2a618f6ac0db/vue/hotDouban')
          .then(res=>{
           console.log('hostmovies',res);
           this.hotMovies = res.data.data;
       })
     },
      mounted() {
         this.$nextTick(() => {
         this.personScroll();
      });
    },
    methods: {
    personScroll() {
      // 默认有3个li子元素，每个子元素的宽度为120px
      let height = 3 * 20;
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
  },
     components: {
         Header,
         Star
     }
}
</script>

<style scoped>
.detail2Container{
    width: 100%;
    height: 100%;
}
.hotmoviesWrapper{
     white-space: wrap;
     margin-top: -0.1rem;
     margin-left: 1rem;
}
.movies-img{
    width: 6rem;
    height: 6.7rem;
}
.movies-item{
    display: inline-block;
    margin-left: 0.9rem;
    text-align: center;
}
 .movies-name{
    color: #171717;
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
} 
.movie-score{
    color: #818181;
    position: relative;
    top: -1rem;
    font-size: 0.76rem;
    right: -2.55rem;
} 
.hotmoviesWrapper{
    overflow: hidden;
    height: 50rem;
}
</style>
