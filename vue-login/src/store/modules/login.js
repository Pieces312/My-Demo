import {getId} from '@/utils/tools.js';

const MAX_AJAX_TIME = 2000;
const SUCCESS_PERCENT = 70;

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
          resolve({data, msg: '注册成功，请直接登录'});
          commit("userInfo", data);
        } else {
          rejected({data: null, msg: '网络超时'});
        }
      }, delay)
    })
  },

  // 登录
  login({commit, state}, data) {
    let now = new Date();
    let filter = state.userList.filter(item => item.account === data.account);
    let psd = state.userList.filter(item => item.account === data.account && item.password === data.password);
    filter.createDate = now;
    filter.isLogin = true;

    return new Promise((resolve, rejected) => {
      if(filter.length) {
        if(psd.length) {
          resolve({data: filter, msg: '登录成功'});
          commit('upDataInfo', filter)
        } else {
          rejected({data: null, msg: '密码错误'});
        }
      } else {
        rejected({data: null, msg: '未注册，请先注册'})
      }
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
  },

  // 更新登录时间
  upDataInfo(state, data) {
    state.userList.forEach(item => {
      if(item.id === data.id) {
        item.createDate = data.createDate;
      }
    })
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
