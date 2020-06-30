<template>
  <div id="container">
    <h3>用户列表</h3>
    <div id="content-wraper">
      <div>
        <div class="head-wraper">
          <div class="item">用户名称</div>
          <div class="item">性别</div>
          <div class="item">年龄</div>
          <div class="item">操作</div>
        </div>
        <div class="users-wraper" v-for="user in users" :key="user.id">
          <div class="item">{{user.name}}</div>
          <div class="item">{{user.gender}}</div>
          <div class="item">{{user.age}}</div>
          <div class="item"><button @click="goUserInfo(user.id)">查看</button></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#content-wraper {
  width: auto;
  display: flex;
  justify-content: center;
}
.users-wraper, .head-wraper {
  display: flex;
  justify-content: flex-start;
}
.item {
  width: 200px;
  line-height: 40px;
}
.head-wraper {
  background-color:darkgray;
}
</style>
<script>
export default {
  needSerialize: true,
  data () {
    return {
      users: []
    }
  },
  methods: {
    async getUsers () {
      this.users = await this.$Api.User.fetchList()
    },
    goUserInfo (userId) {
      this.$router.push({name: 'userInfo', params: {userId}})
    }
  },
  async created () {
    await this.getUsers()
  }
}
</script>