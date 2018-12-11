import {getId} from '@/utils/tools.js';

const MAX_AJAX_TIME = 2000;
const SUCCESS_PERCENT = 50;

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
  // 用户注册信息
  signUpUserInfo({commit, state}, data) {
    let now = new Date();
    data.createDate = now;
    data.id = getId();

    return new Promise((resolve, rejected) => {
      let delay = Math.random() * MAX_AJAX_TIME;
      
      setTimeout(() => {
        if(Math.random() * 100 < SUCCESS_PERCENT) {
          resolve({data, msg: '注册成功'});
          commit("userInfo", data);
        } else {
          rejected({data: null, msg: '网络超时'});
        }
      }, delay)
    })
  }
}

const mutations = {
  // changeStatus
  changeStatus(state, status) {
    state.status = status;
  },

  // userInfo
  userInfo(state, data) {
    state.userList.push(data);
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
