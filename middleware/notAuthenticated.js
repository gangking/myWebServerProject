// 用于未认证的页面
export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  // 如果已登录，则跳转到主页
  if (store.state.user) {
    return redirect('/')
  }
}
