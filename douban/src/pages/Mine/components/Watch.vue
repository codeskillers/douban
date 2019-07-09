<template>
     <div class="watchContainer">
         <div class="iconImg">
           <img :src="content.img1" alt="">
         </div>
         <div class="detail">
             <p>{{content.text1}}</p>
             <p>{{content.text2}}</p>
         </div>
         <div class="text">
            <p>{{content.text3}}</p>
            <p>{{content.text4}}</p>
         </div>
         <div class="button">
           {{content.text5}}
         </div>
         <div class="imgBox">
             <img :src="content.img2" alt="" class="img">
         </div>
     </div>
</template>

<script>
export default {
    props: ['content'],
    data() {
        return {
            
        }
    },
      created() {
        console.log(this.content);
    },
}
</script>

<style scoped>
.watchContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
     justify-content: space-around;
    overflow: hidden;
    margin-top: 1rem;
    border-bottom: 0.001rem solid #F3F3F3;
    padding-bottom: 0.8rem;
}
.button{
    background-color: #F5F5F5;
    font-size: .9rem;
    padding: 0.2rem;
    position: relative;
    left: 1.5rem;
}
.imgBox,.img{
    width: 1.33rem;
    height: 1.33rem;
}
p{
    font-size: 0.88rem;
    margin-top: 0.1rem;
}
</style>
