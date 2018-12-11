export const Ajax = function () {
  const MAX_AJAX_TIME = 2000;
  const SUCCESS_PERCENT = 50;

  return new Promise((resolve, reject) => {
    let delay = Math.random() * MAX_AJAX_TIME;

    setTimeout(() => {
      if(Math.random() * 100 < SUCCESS_PERCENT) {
        let data = {
          code: 200,
          data: null,
          message: '登录成功'
        }

        resolve(data)
      } else {
        reject({
          code: 500,
          data: null,
          message: '登录超时'
        })
      }
    }, delay)
  })
}