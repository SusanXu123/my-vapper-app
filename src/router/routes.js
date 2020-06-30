const routes = [{
  name: 'foo',
  path: '/foo',
  component: () => import('../views/foo.vue'),
  meta: {
    ssr: true
  }
},{
  name: 'userList',
  path: '/user',
  component: () => import('../views/users/list.vue'),
  meta: {
    ssr: true
  }
},{
  name: 'userInfo',
  hideMenu: true,
  path: '/user/:userId',
  component: () => import('../views/users/info.vue'),
  meta: {
    ssr: true
  }
},{
  name: 'hello',
  hideMenu: true,
  path: '/',
  component: () => import('../components/HelloWorld.vue'),
  meta: {
    ssr: true
  }
}]

export default routes