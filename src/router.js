import  VueRouter     from  'vue-router'
import  App           from  './components/app.vue'
import  Entertainment from  './components/entertainment/index.vue'
import  Hotspot       from  './components/hotspot/index.vue'
import  Recommend     from  './components/recommend/index.vue'
import  Sociology     from  './components/sociology/index.vue'
import  Video         from  './components/video/index.vue'
import  Index         from  './components/index/index.vue'
import  Headline      from  './components/headline/index.vue'
import  Watermelon    from  './components/watermelon/index.vue'
import  Login         from  './components/login/index.vue'


const routes = [
  { path: '/app',           component: App },
  { path: '/entertainment', component: Entertainment },
  { path: '/hotspot',       component: Hotspot },
  { path: '/recommend',     component: Recommend },
  { path: '/sociology',     component: Sociology },
  { path: '/_video',        component: Video },
  { path: '/index',         component: Index },
  { path: '/headline',      component: Headline },
  { path: '/watermelon',    component: Watermelon },
  { path: '/login',         component: Login },
  { path: '/',              redirect: '/app' }
];
  
export default function Router(Vue){
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  return {
    router
  }
}
