<template>
  <div class="mvDetail" ref="container">
    <div class="wrapper" ref="ulWrapper">
      <div v-for="(item, index) in filtered" :key="index">
        <div class="header">
          <p>{{item.movieName}}</p>
        </div>
        <div class="introduce">
          <div class="coverImg">
            <img :src="item.imgUrl" alt class="imgUrl" />
          </div>
          <p class="movieName">{{item.movieName}}</p>
          <span class="movieScore"><Star :size="24" :score="item.score" class="movie-star"></Star>{{item.score}}</span>
          <div class="Watch">
            <p class="watch-want">想看</p>
            <p class="watch-wanted">看过</p>
          </div>
        </div>
        <div class="simple">
          <h4 class="simple-title">简介</h4>
          <p class="simple-text">{{item.introduce}}</p>
        </div>
        <div class="person" width="100%"> 
           <h4>影人</h4>   
         <div class="ulwrapper" ref="personContainer">
            <div class="director-actor" ref="directoractor">
              <div class="person-director">
                <img :src="item.directorImg" class="director-img" />
              </div>
              <div class="person-actor">
                <div class="actor-img" v-for="(itemImg, index) in item.actorImgs" :key="index">
                  <img :src="itemImg" alt class="itemimg" />
                </div>
              </div>
          </div>
         </div>
        </div>
        <div class="stagePhotos">
          <h4 class="photos-stage">剧照</h4>
          <div class="photos-box" v-for="(itemPhotos, index) in item.stagephotos" :key="index">
            <img :src="itemPhotos" alt class="photos-img" />
          </div>
        </div>
        <div class="comment">
          <p class="comment-detail"></p>
        </div>
      </div>
    </div>
    <!--  </div> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Star from './star/star'
export default {
  data() {
    return {
      Index: "",
      mvDetails: [],
      actors: [],
      filterArray: []
    };
  },
  created() {
    this.Index = this.$route.query.index;
    console.log("11111", this.Index);
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5d023f7ba93a2a618f6ac0db/vue/movieDetail1"
      )
      .then(res => {
        console.log("mvdetail", res);
        this.mvDetails = res.data.data;
      })
      .catch(err => {
        console.log("出错了", err);
      });
  },
  // 两种方式 v-for v-if 循环判断  数组筛选
  computed: {
    filtered: function() {
      return this.mvDetails.filter((item, index) => index == this.Index);
    }
  },
   mounted() {
    this.$nextTick(() => {
      this.personScroll();
    });
  },
  methods: {
    personScroll() {
      // 默认有3个li子元素，每个子元素的宽度为120px

      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        this.$refs.ulWrapper.style.height = 45 + "rem";
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.container, {
            startY: 0,
            click: true,
            scrollX: false,
            scrollY: true
            // eventPassthrough: "vertical"
          });
        } else {
          // 如果子元素或者父元素 DOM 结构发生改变的时候，必须重新调用 scroll.refresh() 方法重新计算来确保滚动效果的正常
          this.scroll.refresh();
        }
      });
    },
  },
  components: {
    Star
  }
};
</script>

<style scoped>
.mvDetail {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 540;
  font-size: 1.2rem;
  background-color: #fafafa;
  height: 3rem;
}
.director-actor {
  width: 30rem;
  height: 8rem;
}
.imgUrl,
.coverImg {
  width: 8rem;
  height: 9.3rem;
}
.imgUrl {
  border-radius: 0.2rem;
}
.movieName {
  font-weight: 550;
  font-size: 1.3rem;
  position: absolute;
  left: 9rem;
  top: 0;
}
.introduce {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: 0.7rem;
  margin-top: 0.7rem;
}
.movieScore {
  color: #fdac2b;
  font-size: 1.1rem;
  position: absolute;
  left: 13.2rem;
  top: 1.8rem;
}
.movie-star{
   position: relative;
   right: 4.2rem;
   top: 1.05rem;
}
.watch-want,
.watch-wanted {
  background-color: #fafafa;
  position: relative;
  top: 1.3rem;
  left: 0.5rem;
  margin-left: 1rem;
  padding-top: 0.35rem;
  padding-bottom: 0.35rem;
  padding-left: 2rem;
  padding-right: 1.5rem;
  font-size: 0.9rem;
  display: inline-block;
  text-align: center;
}
.watch-want::before {
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  background: url("../assets/want.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 0.4rem;
  left: 0.6rem;
}
.watch-wanted::before {
  content: "";
  width: 1rem;
  height: 1rem;
  display: block;
  background: url("../assets/watched.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 0.4rem;
  left: 0.6rem;
}
.simple,
.person {
  margin: 0.9rem;
}
.simple-text {
  margin-top: 0.9rem;
  font-size: 0.92rem;
  letter-spacing: 0.1rem;
}
.person {
  /* overflow: hidden; */
  width: 100%;
  height: 8rem;
}
.person-director,
.director-img,
.actor-img,
.itemimg,
.photos-box,
.photos-img {
  width: 5rem;
  height: 6.3rem;
}
.person-director {
  margin-top: 0.9rem;
  width: 28rem;
}
.ulwrapper{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.actor-img {
  display: inline-block;
  margin-left: 0.6rem;
}
.person-actor {
  position: relative;
  left: 5rem;
  bottom: 6.3rem;
  margin-left: 0.05rem;
}
.photos-box {
  display: inline-block;
  margin-left: 0.55rem;
}
.photos-stage {
  margin-left: 0.3rem;
  margin-bottom: 0.8rem;
}
.stagePhotos {
  position: relative;
  top: 1rem;
  margin-left: 0.6rem;
}
</style>

