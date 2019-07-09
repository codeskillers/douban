<template>
    <div class="navContainer">
        <ul class="nav">
            <router-link tag="li" :to="item.url" v-for="(item,index) in tabs" :key="index" @click="addClassName(index)" exact> 
                <img v-if="thatnum!=index" :src="item.img" class="first weui-tabbar__icon" />
                <img v-if="thatnum==index" :src="item.active" class="last first weui-tabbar__icon" />
                <p class="weui-tabbar__label">{{item.text}}</p>
            </router-link>
        </ul>     
    </div>
</template>
<script>
 import axios from "axios";
    export default {
        name: "nav",
        props: ['tabName'],
        data() {
            return {
                thatnum: 0,
                tabs: [
                    { text: "首页", url: '/', img: require("../assets/index.png"), active: require('../assets/index-hover.png') },
                    { text: "榜单", url: '/list', img: require("../assets/list.png"), active: require('../assets/list-hover.png') },
                    { text: "我的", url: '/mine', img: require("../assets/mine.png"), active: require('../assets/mine-hover.png') },
                ],
            };
        },
        mounted() {
            this.thatnum = this.tabName
        },
        // methods: {
        //     addClassName: function (index) {
        //         this.thatnum = index;
        //     },
        // },
        components: {
 
        }
    }
</script>

<style>
    .navContainer {
        width: 100%;
        position: absolute;
        bottom: 0;
        font-size: 0.5rem;
    }
    .nav {
        display: flex;
        justify-content: space-around;
        background-color: #FFFFFF;
        height: 3.5rem;
        align-items: center;
        opacity: 0.85;
    }
    li{
        display: inline-block;
        text-align: center;
        color: #D9D9D9;
    }
    li.router-link-active {
        color: #42BD55;
    }
</style>