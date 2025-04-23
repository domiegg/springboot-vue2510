import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import bankuai from '@/views/modules/bankuai/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jingdian from '@/views/modules/jingdian/list'
    import jingdianLiuyan from '@/views/modules/jingdianLiuyan/list'
    import jiudian from '@/views/modules/jiudian/list'
    import jiudianLiuyan from '@/views/modules/jiudianLiuyan/list'
    import jiudianOrder from '@/views/modules/jiudianOrder/list'
    import liuyan from '@/views/modules/liuyan/list'
    import lvyouluxian from '@/views/modules/lvyouluxian/list'
    import lvyouluxianLiuyan from '@/views/modules/lvyouluxianLiuyan/list'
    import news from '@/views/modules/news/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryBankuai from '@/views/modules/dictionaryBankuai/list'
    import dictionaryJingdian from '@/views/modules/dictionaryJingdian/list'
    import dictionaryJiudian from '@/views/modules/dictionaryJiudian/list'
    import dictionaryLvyouluxian from '@/views/modules/dictionaryLvyouluxian/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryBankuai',
        name: '板块类型',
        component: dictionaryBankuai
    }
    ,{
        path: '/dictionaryJingdian',
        name: '景点类型',
        component: dictionaryJingdian
    }
    ,{
        path: '/dictionaryJiudian',
        name: '房间类型',
        component: dictionaryJiudian
    }
    ,{
        path: '/dictionaryLvyouluxian',
        name: '路线类型',
        component: dictionaryLvyouluxian
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/bankuai',
        name: '板块信息',
        component: bankuai
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/jingdian',
        name: '旅游景点',
        component: jingdian
      }
    ,{
        path: '/jingdianLiuyan',
        name: '旅游景点留言',
        component: jingdianLiuyan
      }
    ,{
        path: '/jiudian',
        name: '酒店信息',
        component: jiudian
      }
    ,{
        path: '/jiudianLiuyan',
        name: '酒店留言',
        component: jiudianLiuyan
      }
    ,{
        path: '/jiudianOrder',
        name: '酒店预定 show3',
        component: jiudianOrder
      }
    ,{
        path: '/liuyan',
        name: '留言版',
        component: liuyan
      }
    ,{
        path: '/lvyouluxian',
        name: '旅游路线',
        component: lvyouluxian
      }
    ,{
        path: '/lvyouluxianLiuyan',
        name: '旅游路线留言',
        component: lvyouluxianLiuyan
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
