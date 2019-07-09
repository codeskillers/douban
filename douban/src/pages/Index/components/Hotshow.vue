<template>
    <div class="hotshowContainer">
       <div class="cinemaHot">
           <p class="hotshowTitle hot">影院热映</p>
           <router-link to="/detail1">
             <div class="hotshowSearch hot">
               查看更多
            <div class="hotshowSearch-icon">
            </div>
           </div>
           </router-link>
       </div>
       <div class="hotmoviesWrapper" ref="wrapper" scroll-x="true">
          <ul class="hotMovies" ref="ulWrapper">
                <router-link tag="li" :to="{path:'/mvDetail1',query: { index }}" v-for="(item,index) in hotShow" :key="index" class="movies-item">
                    <img :src="item.imgUrl" class="movies-img">
                    <p class="movies-name">{{item.movieName}}</p>
                    <div>
                     <Star :size="24" :score="item.score" class="movie-star"></Star>
                     <span class="movie-score">{{item.score}}</span>
                    </div>
                </router-link>
          </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Star from '../../star/star';
export default {
   data() {
       return {
            hotShow:[]
       }    
   },
   components: {
        Star
   },
   created() {
       this.$http.get('https://www.easy-mock.com/mock/5d023f7ba93a2a618f6ac0db/vue/douban')
       .then(res=>{
           console.log(res);
           this.hotShow = res.data.data;
       })
        this.$nextTick(() => {
      this.personScroll();
    });
   },
   methods: {
    personScroll() {
      // 默认有8个li子元素，每个子元素的宽度为120px
      let width = 8 * 7;
      this.$refs.ulWrapper.style.width = width + "rem";
      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
}
</script>

<style scoped>
.hotshowContainer{
   width: 100%;
   height: 14.2rem;
   /* overflow-x: scroll; */
}
.cinemaHot{
    width: 100%;
    margin-top: .8rem;
    position: relative;
    padding-top: .3rem;
}
.hot{
   position: relative;
   display: inline-block;
}
.hotshowTitle{
    color: #565656;
    left: 0.8rem;
}
.hotshowSearch{
    color: #42BD55;
    left: 13.2rem;
}
.hotmoviesWrapper{
    white-space: nowrap;
    height: 11.2rem;
}
.hotshowSearch-icon{
    background: url('../../../assets/rightarrow.png');
    width: 1rem;
    height: 1rem;
    background-size: cover;
    display: block;
    position: relative;
    left: 4.3rem;
    top: -1.1rem;
}
.movies-item{
    display: inline-block;
    width: 7rem;
    height: 9rem;
    margin-left: 0.4rem;
}
.hotMovies{
    width: 100%;
    height: 7rem;
    margin-top: 0.3rem;
    font-size: 0.1rem;
    margin-left: 0.5rem;
}
.movies-name{
    color: #171717;
    position: relative;
    right: 1rem;
    letter-spacing: 0.1rem;
}
.movies-img{
    width: 7rem;
    height: 9rem;
}
.movie-score{
    color: #818181;
    position: relative;
    left: 1.7rem;
    top: -.8rem;
}
.movie-star{
    position: relative;
    right: 1rem;
}
</style>
