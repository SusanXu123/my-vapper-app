const routes = [{
  name: 'foo',
  path: '/foo',
  component: () => import('../views/foo.vue'),
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