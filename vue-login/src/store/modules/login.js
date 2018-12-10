const state = {
  status: false, // 判断是否是登录页面
  userList: [] // 用户登录列表
}

const getters = {};

const actions = {
  // 切换状态
  changeLogin({commit, state}, bool) {
    commit("changeStatus", bool)
  },
}

const mutations = {
  // changeStatus
  changeStatus(state, status) {
    state.status = status;
  },
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
