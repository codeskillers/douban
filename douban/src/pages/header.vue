<template>
     <div class="headerContainer">
        <div class="header-title">
            <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
      props:{
          title: String
      },
     data() {
         return {
             
         }
     },
}
</script>

<style scoped>
.headerContainer{
    background-color:#FFFFFF;
    width: 100%;
    height: 3.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.header-title{
     height: 1.5rem;
     color:  #333333;
     margin-top: 0.3rem;
     margin-bottom: 0.8rem;
     letter-spacing: 0.1rem

}
</style>
