const users = [{
  id: 1,
  name: 'lucy',
  age: 12,
  gender: 'female'
},{
  id: 2,
  name: 'lily',
  age: 14,
  gender: 'female'
}, {
  id: 3,
  name: 'tom',
  age: 16,
  gender: 'male'
}]

export default {
  fetchList: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(users)
      }, 300)
    })
  },
  fetchUserInfo: async (userId) => {
    const idx = users.findIndex(u => u.id === Number(userId))
    const user = idx >= 0 ? users[idx] : {}
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(user)
      }, 300)
    })
  }
}