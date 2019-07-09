<template>
    <div class="headerContainer">
        <div class="header-title">
            <p>首页</p>
        </div>
        <div class="header-search">
            <input type="text" placeholder="搜索">
            <div class="search-icon"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'indexHeader',
   data() {
       return {
           
       }
   },
}
</script>

<style scoped>
.headerContainer{
    background-color: #42BD55;
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header-title{
     height: 1.5rem;
     color: #F7FFF6;
     margin-top: 0.3rem;
     margin-bottom: 0.8rem;
     letter-spacing: 0.1rem
}
.header-search{
     width: 100%;  
     text-align: center;
     margin-bottom: -.8rem;
}
.header-search input{
     width: 94%;
     height: 1.3rem;
     border: 1px solid #fff;
     border-radius: 0.2rem;
     outline:none;
}
input::-webkit-input-placeholder{
     color: #BABABA;
     text-align: center;
  }
.search-icon{
    width: 1rem;
    height: 1rem;
    background: url('../../../assets/search.png');
    background-size: cover;
    display: block;
    position: relative;
    left: 9.8rem;
    bottom: 1.24rem;
}
</style>
