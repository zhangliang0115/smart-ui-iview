const routers = [
    {
    path: '/',
        redirect:'/welcome',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},
    {
        path: '/welcome',
        meta: {
            title: '欢迎页'
        },
        component: (resolve) => require(['./views/welcome.vue'], resolve)
    }
    ,
    {
        path: '/info',
        meta: {
            title: '系统管理'
        },
        component: (resolve) => require(['./views/info.vue'], resolve)
    }
    ,
    {
        path: '/message',
        meta: {
            title: '区域管理'
        },
        component: (resolve) => require(['./views/message.vue'], resolve)
    }
];
export default routers;