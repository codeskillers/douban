<template>
    <div class="mvtypesContainer" @click='turn'>
     <div class="mvImg imgBox">
           <img :src="choose.img" alt="" class="listImg">
     </div>
     <div class="rightText">
         <p class="movie-text">{{choose.text1}}<span class="score">{{choose.score[0]}}</span></p>
         <p class="movie-text">{{choose.text2}}<span class="score">{{choose.score[1]}}</span></p>
         <p class="movie-text">{{choose.text3}}<span class="score">{{choose.score[2]}}</span></p>
     </div>
    </div>
</template>

<script>
export default {
    props: ['choose'],
    data() {
        return {
           activeTypes: {}
        }
    },
    mounted() {
             this.activeTypes = this.choose;
             console.log(this.activeTypes);
    },
    methods: {
        turn: function(){
            this.$emit('turn')
        }
    },
}
</script>

<style scoped>
.mvtypesContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0.2rem;
}
.Img{
    width: 5.7rem;
    height: 5.7rem;
}
.listImg{
    width: 5.7rem;
    height: 5.7rem;
    border-radius: 0.3rem; 
}
.rightText{
    border: 0.09rem solid #EAEAEA;
    border-left: none;
    border-radius: 0.08rem;
    width: 15.9rem;
    padding-top: 0.3rem;
    padding-bottom: 0.2rem;
}
.mvImg{
    position: relative;
    left: 0.3rem;
    margin-left: .7rem;
}
.movie-text{
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    margin-left: 2rem;
}
.score {
    margin-left: 0.25rem;
    color: #FFAC2D;
    font-size: 0.9rem;
}
</style>
