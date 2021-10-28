import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home //처음진입할때 리소스 모두로드
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') //컴포넌트사용할떄 메모리에올리고 클라이언트로올림(lazy load) -> 처음에 로딩빠름
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" , webpackPrefetch:true */ '../views/Contact.vue') //메모리에 로드해놓고 사용할떄 클라이언트로올림 ->처음에오래걸림 
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Basic.vue') 
  },
  {
    path: '/databinding',
    name: 'Databinding',
    component: () => import(/* webpackChunkName: "basic" */ '../views/DataBinding.vue') 
  },
  {
    path: '/databindinghtml',
    name: 'DatabindingHtml',
    component: () => import(/* webpackChunkName: "basic" */ '../views/DataBindingHtml.vue') 
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example.vue') 
  },
  {
    path: '/example2',
    name: 'Example2',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example2.vue') 
  },
  {
    path: '/example3',
    name: 'Example3',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example3.vue') 
  },
  {
    path: '/example4',
    name: 'Example4',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example4.vue') 
  },
  {
    path: '/example5',
    name: 'Example5',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example5.vue') 
  },
  {
    path: '/example6',
    name: 'Example6',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example6.vue') 
  },
  {
    path: '/example7',
    name: 'Example7',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example7.vue') 
  }
  ,
  {
    path: '/serverdata',
    name: 'serverdata',
    component: () => import(/* webpackChunkName: "basic" */ '../views/ServerData.vue') 
  },
  {
    path: '/example8',
    name: 'Example8',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example8.vue') 
  },
  {
    path: '/example9',
    name: 'Example9',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Example9.vue') 
  },
  {
    path: '/slot',
    name: 'Slot',
    component: () => import(/* webpackChunkName: "basic" */ '../views/SlotUseModalLayout.vue') 
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "basic" */ '../views/ProvideInject.vue') 
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: () => import(/* webpackChunkName: "basic" */ '../views/MixinTest.vue') 
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Calculator.vue') 
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import(/* webpackChunkName: "basic" */ '../views/CompositionAPI.vue') 
  },
  {
    path: '/composition2',
    name: 'Composition2',
    component: () => import(/* webpackChunkName: "basic" */ '../views/CompositionAPI2.vue') 
  },
  {
    path: '/composition3',
    name: 'Composition3',
    component: () => import(/* webpackChunkName: "basic" */ '../views/CompositionAPI3.vue') 
  },
  {
    path: '/composition4',
    name: 'Composition4',
    component: () => import(/* webpackChunkName: "basic" */ '../views/CompositionAPI4.vue') 
  },
  {
    path: '/compositionprovide',
    name: 'CompositionProvide',
    component: () => import(/* webpackChunkName: "basic" */ '../components/CompositeAPIProvide.vue') 
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "basic" */ '../views/CustomDirective.vue') 
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "basic" */ '../views/Plugins.vue') 
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "basic" */ '../views/StoreAccess.vue') 
  },
  {
    path: '/kakaologin',
    name: 'Kakaologin',
    component: () => import(/* webpackChunkName: "basic" */ '../views/KakaoLogin.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
