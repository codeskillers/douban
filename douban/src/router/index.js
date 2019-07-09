import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import Mine from '@/pages/Mine/Mine';
import List from '@/pages/List/List';
import Detail1 from '@/pages/Index/Child/Detail1';
import Detail2 from '@/pages/Index/Child/Detail2';
import Detail3 from '@/pages/Index/Child/Detail3';
import mvDetail from '../pages/movieDetail';
import mvDetail1 from '../pages/movieDetail1';
import mvDetail3 from '../pages/movieDetail3';
import listDetail from '@/pages/listDetail';
Vue.use(Router)

export default new Router({
  // linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {   
        path: '/detail1',
        name: 'Detail1',
        component: Detail1,   
    },
    {   
      path: '/detail2',
      name: 'Detail2',
      component: Detail2,   
    },
    {   
      path: '/detail3',
      name: 'Detail3',
      component: Detail3,   
    },
    {
      path: '/mvDetail',
      name: 'mvDetail',
      component: mvDetail
    },
    {
      path: '/mvDetail1',
      name: 'mvDetail1',
      component: mvDetail1
    },
    {
      path: '/mvDetail3',
      name: 'mvDetail3',
      component: mvDetail3
    },
    {
      path: '/listDetail',
      name: 'listDetail',
      component: listDetail
    }
  ],
  mounted:function(){
    var path = this.$route.path.match(/^\/[^\/]*/)[0]
    this.$router.push(path);
}
})
