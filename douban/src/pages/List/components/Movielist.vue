<template>
    <div class="movieList">
        <div class="movieList-yearly list">
            <img src="../../../assets/yearly.jpg" class="movieImg">
        </div>
        <div class="movieList-weeklyPraise list">
            <img src="../../../assets/weeklypraise.png" class="movieImg">
        </div>
        <div class="movieList-weeklyHot list">
            <img src="../../../assets/weeklyhot.png" class="movieImg">
        </div>
    </div>
</template>

<script>
export default {
     data() {
         return {
             
         }
     },
}
</script>

<style scoped>
.movieList{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

}
.list{
      width: 92%;
      height: 7.5rem;
      border-radius: 0.8rem;
      margin-bottom: 0.6rem;
      z-index: 9999;
}
.movieImg{
      width: 100%;
      height: 7.5rem;
      border-radius: 0.3rem;
}
</style>
