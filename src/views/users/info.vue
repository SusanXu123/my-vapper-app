<template>
  <div>
    <h3>用户详情</h3>
    <div>
      <div>姓名: {{user.name}}</div>
      <div>性别: {{user.gender}}</div>
      <div>年龄: {{user.age}}</div>
    </div>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
  needSerialize: true,
  computed: {
    ...mapState({
      user: state => state.User.user
    })
  },
  methods: {
    ...mapActions('User', ['fetchUser'])
  }, 
  async created() {
    await this.fetchUser(this.$route.params.userId)
  },
}
</script>