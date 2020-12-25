import React, { lazy } from 'react'
import {
  HomeOutlined,
  PictureOutlined,
  MenuOutlined,
  PicLeftOutlined,
  SwapLeftOutlined,
  BorderTopOutlined,
  ClockCircleOutlined,
  UserOutlined,
  AppstoreOutlined
} from '@ant-design/icons'
import PageBunisess from '../pages/page_business/index.jsx'
import PageTask from '../pages/page_task/index.jsx'
const routes = [
  // {
  //   show: false,
  //   path: '/',
  //   to:'/businessMonitor',
  //   redirect: '/businessMonitor',
  //   meta: { // 该路由不出现在左侧菜单栏
  //     hidden: true
  //   },
  // },
  {
    show: true,
    path: '/businessMonitor',
    component:PageBunisess,
    // component: lazy(() => import('../pages/page_business/index.jsx')),
    title: '业务监控',
    to:'/businessMonitor/taskMonitor',
    // icon: <PictureOutlined />,
    // redirect: '/businessMonitor/taskMonitor',
    // routes: [
    //   {
    //     path: '/businessMonitor/taskMonitor',
    //     title: '任务监控',
    //     icon: <MenuOutlined />,
    //     component: <PageTask/>
    //   },
    //   {
    //     path: '/businessMonitor/taskMonitor',
    //     title: '任务监控1',
    //     icon: <MenuOutlined />,
    //     component: <PageTask/>,
    //     meta: {
    //       hidden: true
    //     }
    //   }
    // ]
  },
  {
    show: true,
    path: '/statusMonitor',
    component:PageBunisess,
    // component:lazy(() => import('../pages/page_business/index.jsx')),
    title: '状态监控',
    icon: <PictureOutlined />,
    to:'/statusMonitor/taskMonitor',
    // redirect: '/statusMonitor/taskMonitor',
    // routes: [
    //   {
    //     path: '/statusMonitor/taskMonitor',
    //     title: 'zt监控',
    //     icon: <MenuOutlined />,
    //     component: <PageTask/>
    //   },
    //   {
    //     path: '/statusMonitor/taskMonitor',
    //     title: 'zt监控1',
    //     icon: <MenuOutlined />,
    //     component: <PageTask/>,
    //     meta: {
    //       hidden: true
    //     }
    //   }
    // ]
  },
  // {
  //   path: '/businessMonitor',
  //   title: '业务监控',
  //   icon: <PicLeftOutlined />,
  //   redirect: '/businessMonitor/businessMonitor',
  //   children: [
  //     {
  //       path: '/navigatormanager/list',
  //       title: '导航列表',
  //       icon: <MenuOutlined />,
  //       component: lazy(() => import('./../views/navigator/List'))
  //     },
  //     {
  //       path: '/navigatormanager/category',
  //       title: '导航分类',
  //       icon: <SwapLeftOutlined />,
  //       component: lazy(() => import('./../views/navigator/Category'))
  //     },
  //     {
  //       path: '/navigatormanager/hlist',
  //       title: '首页导航',
  //       icon: <BorderTopOutlined />,
  //       component: lazy(() => import('./../views/navigator/HomeList'))
  //     }
  //   ]
  // },
  //   {
  //     path: '/hmanager',
  //     title: '首页数据管理',
  //     icon: <ClockCircleOutlined />,
  //     redirect: '/hmanager/seckilllist',
  //     children: [
  //       {
  //         path: '/hmanager/seckilllist',
  //         title: '首页秒杀列表',
  //         icon: <MenuOutlined />,
  //         component: lazy(() => import('../views/homedata/SeckillList'))
  //       },
  //       {
  //         path: '/hmanager/recommentlist',
  //         title: '首页推荐列表',
  //         icon: <MenuOutlined />,
  //         component: lazy(() => import('../views/homedata/RecommentList'))
  //       }
  //     ]
  //   },
  //   {
  //     path: '/usermanager',
  //     title: '用户管理',
  //     icon: <UserOutlined />,
  //     redirect: '/usermanager/list',
  //     children: [
  //       {
  //         path: '/usermanager/list',
  //         title: '用户列表',
  //         icon: <MenuOutlined />,
  //         component: lazy(() => import('./../views/user/List'))
  //       },
  //       {
  //         path: '/usermanager/register',
  //         title: '注册用户',
  //         icon: <MenuOutlined />,
  //         component: lazy(() => import('./../views/user/RegisterUser'))
  //       },
  //     ]
  //   },
  //   {
  //     path: '/productmanager',
  //     title: '商品管理',
  //     icon: <AppstoreOutlined />,
  //     redirect: '/productmanager/list',
  //     children: [
  //       {
  //         path: '/productmanager/list',
  //         title: '商品列表',
  //         icon: <MenuOutlined />,
  //         component: lazy(() => import('./../views/product/List'))
  //       },
  //       {
  //         path: '/productmanager/sortlist',
  //         title: '筛选商品',
  //         icon: <MenuOutlined />,
  //         component: lazy(() => import('../views/product/SortList'))
  //       },
  //     ]
  //   },
  //   {
  //     path: '/setting',
  //     title: '设置',
  //     icon: <MenuOutlined />,
  //     component: lazy(() => import('../views/setting/Index')),
  //     meta: { // 该路由不出现在左侧菜单栏
  //       hidden: true
  //     }
  //   }
]

export default routes