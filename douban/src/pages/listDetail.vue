<template>
  <div class="lideContainer" ref="outContaienr">
    <div class="secContainer" ref="inContainer">
     <div class="wrapper" v-for="(item, index) in filtered" :key="index">
      <div class="list-coverImg">
        <img :src="item[0]['coverImg']" class="coverImg" />
      </div>
      <div class="list-Movie" v-for="(itemD,index) in item[1]" :key="index">
        <div class="left">
          <div class="list-movie">
            <span class="list-movie_number">{{itemD.list}}</span>
            <div class="list-movie_img">
              <img :src="itemD.imgUrl" alt class="itemImg" />
            </div>
            <div class="list-movie_name">{{itemD.mvName}}</div>
            <div class="list-movie_score">
             <Star :size="24" :score="itemD.score" class="star-score"></Star>
             {{itemD.score}}
            </div>
            <div class="list-movie_story">
               {{itemD.story}}
            </div>
          </div>
        </div>
        <div class="right">
          <img src="../assets/watched.png" alt="" class="right-img">
          <span class="right-watched">看过</span>
        </div>
        <div class="list-movie_desc">
          {{itemD.desc}}
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
     
<script>
import Star from './star/star';
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      listDetail: [],
      Index: ""
    };
  },
  created() {
    this.Index = this.$route.query.index;
    this.$http
      .get("https://www.easy-mock.com/mock/5d023f7ba93a2a618f6ac0db/vue/list")
      .then(res => {
        console.log("listDetail", res);
        this.listDetail = res.data.data;
        console.log(this.listDetail);
      })
      .catch(err => {
        console.log("出错了", err);
      });
  },
  computed: {
    /* 过滤器 */
    filtered: function() {
      return this.listDetail.filter((item, index) => index == this.Index);
    }
  },
   mounted() {
         this.$nextTick(() => {
         this.personScroll();
      });
    },
  methods: {
     personScroll() {
      let height = 55;
      this.$refs.inContainer.style.height = height + "rem";
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.outContaienr, {
            startY: 0,
            click: true,
            scrollX: false,
            scrollY: true,
            // eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  },
  components:{
    Star
  }
};
</script>
 
<style scoped>
.lideContainer{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.list-coverImg,
.coverImg {
  width: 100%;
  height: 10.5rem;
}
.itemImg {
  width: 5.6rem;
  height: 6.6rem;
  border-radius: 0.25rem;
}
.list-Movie {
  margin-top: 1rem;
}
.list-movie {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 0.35rem;
  height: 10rem;
}
.list-movie_number{
  background-color: #FECD82;
  font-size: 0.9rem;
  color: #6F330E;
  bottom: 0.35rem;
  position: relative;
}
.list-movie_name{
  position: relative;
  left: 6.5rem;
  bottom: 6.7rem;
  color: #4C4C4C;
  letter-spacing: 0.1rem;
  font-size: 1.1rem;
}
.list-movie_score{
  display: flex;
  flex-direction: row;
  position: relative;
  left: 6.5rem;
  bottom: 6.5rem;
  font-size: 0.9rem;
}
.list-movie_story{
  position: relative;
  left: 6.5rem;
  bottom: 5.6rem;
  font-size: 0.9rem;
  color: gray;
}
.star-score{
  position: relative;
  top: .25rem;
  margin-right: 0.3rem;
}
.list-movie_desc{
  position: relative;
  bottom: 1rem;
  color: gray;
  background-color: #F8F8F8;
  height: 2.5rem;
  line-height: 2.5rem;
  width: 90%;
  left: .8rem;
  padding-left: 0.6rem;
  border-radius: .3rem;
  font-size: 0.9rem;
}
.right{
  position: relative;
  left: 19rem;
  bottom: 5.6rem;
  color: #E7B46F;
  width: auto;
}
.right::before{
  width: 4rem;
  height: 6.2rem;
  display: block;
  content: "";
  position: absolute;
  border-right: 1px dashed #E8E8E8;
  left: -5rem;
  top: -3rem;
}
.right-img{
  position: relative;
  bottom: 1.3rem;
  left: 1.6rem;
}
</style>
