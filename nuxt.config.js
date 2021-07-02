/**
 * Nuxt.js 配置文件
 */

module.exports = {
  router: {
    // 路由高亮
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 清除 Nuxt.js 基于 pages 目录默认生成的路由表规则
      routes.splice(0);

      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout/'),
            children: [
              {
                path: '', // 默认子路由
                name: 'home',
                component: resolve(__dirname, 'pages/home/'),
              },
              {
                path: '/login', // 登录页面
                name: 'login',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/register', // 注册页面
                name: 'register',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/profile/:username', // 用户个人信息
                name: 'profile',
                component: resolve(__dirname, 'pages/profile/'),
              },
              {
                path: '/settings', // 设置
                name: 'settings',
                component: resolve(__dirname, 'pages/settings/'),
              },
              {
                path: '/editor', // 创建发布文章
                name: 'editor',
                component: resolve(__dirname, 'pages/editor/'),
              },
              {
                path: '/article', // 文章详情
                name: 'article',
                component: resolve(__dirname, 'pages/article/'),
              },
            ],
          },
        ]
      );
    }
  },
  server: {
    // 一般本地设置为localhost
    // 如果生产环境对外访问建议: 0.0.0.0
    // 这样会监听所有网卡地址
    // 外网访问都能，本地的话局域网内都可以
    host: '0.0.0.0', 
    port: 3000
  },
  // 注册插件
  plugins: ['~/plugins/request.js','~/plugins/dayjs.js'],
};
