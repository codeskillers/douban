<template>
    <div class="sthContainer">
        <div class="title">
            <span class="my">我的书影音</span>
            <span class="login">登录查看</span>
            <div class="imgbox">
                <img src="../../../assets/arrow1.png" class="arrow">
            </div>
        </div>
    </div>
</template>

<script>
export default {
      name: 'Watch',
      data() {
          return {
          }
      },
}
</script>

<style scoped>

.title{
    height: 2rem;
    background-color: #ffffff;
    position: relative;
    margin-top: 0.6rem;
}
.my{
    color: #252525;
    font-weight: 700;
    position: absolute;
    left: 1rem;
}
.login{
    position: absolute;
    right: 1.8rem;
    font-size: 0.8rem;
}
.imgbox{
    position: absolute;
    right: 0.6rem;
    width: 1.33rem;
    height: 1.33rem;
}
.arrow{
    width: 1.33rem;
    height: 1.33rem;
}
</style>
