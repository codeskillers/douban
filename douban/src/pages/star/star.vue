<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>
<script>
const Length = 5
const On = 'on'
const Off = 'off'     
const Half = 'half'
export default {
  name: "star",
  props: {
    score: {
      type: String
    },
    size: {
      type: Number
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size
    },
   itemClasses () {
      let result = [];
      // 取整后的星星数量
      let len = this.score >> 1;
      let score = Math.round(this.score)  
      let halfControl = score-len * 2 < 1 ? false : true
      for(let i = 0; i<len; i++){
        result.push(On)
      }
      if(halfControl) {
        result.push(Half)
      }
      while(result.length<Length){
        result.push(Off)
      }
      return result
    }

  }
}
</script>

<style lang="stylus">
@import '../../stylus/mixin'
  .star
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width: 20px
        height: 20px
        margin-right: 22px
        background-size: 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star-36
      .star-item
        width: 15px
        height: 15px
        margin-right: 6px
        background-size: 15px 15px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star-24
      .star-item
        width: 10px
        height: 10px
        margin-right: 3px
        background-size: 10px 10px
        &:last-child
          margin-right: 0
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
