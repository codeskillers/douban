<template>
    <div class="loginContainer">
      <div class="login">
          <img class="login-avatar" :src="avatar[len]" alt="">
      </div>
    </div>
</template>

<script>
export default {
     data() {
         return {
             avatar:["https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562648564&di=8a087f5244810b01b625b8c9a644e989&src=http://b-ssl.duitang.com/uploads/item/201810/20/20181020234714_dmdqx.thumb.700_0.jpg",
               "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562658653254&di=b3ae3231504a0ce193d19e45ec57dbb4&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F06%2F20141006213125_PtNn8.thumb.700_0.jpeg",
               "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562658653252&di=a0268d6fe566cf7648ddcee41a3764c5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201809%2F24%2F20180924092018_zjgut.jpg"
             ],
             len:''
         }
     },
     mounted() {
         this.len = Math.floor( Math.random()*4)
     },
}
</script>

<style scoped>
.loginContainer{
    width: 100%;
    height: 12rem;
    background: linear-gradient(to right ,#4DBC5E, #5DC76D);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
/* .btn{
    background-color: #FFFFFF;
    border: none;
    width: 9rem;
    height: 2.5rem;
    border-radius: 1.2rem;
    letter-spacing: .2rem;
    color: #516B55;
    font-size: 1rem;
    outline:none;
} */
.login-avatar, .login{
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
}
</style>
