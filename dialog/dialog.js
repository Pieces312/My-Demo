class Dialog {
  constructor() {
    this.config = {
      type: null,
      message: null,
      buttons: null,
    };

    this.dialogType = {
      "default": '默认',
      "success": '成功',
      "warning": '警告',
      "error": '错误'
    }
    
    this.body = document.body;
  }
  // 初始化
  init(config) {
    if(config === undefined || this.isPlainObject(config)) {
      this.config.message = '';
      this.Config = true; // 未传入config对象时设定默认弹窗
    } else {
      this.Config = false;
    }
    
    // 合并参数
    this.config = Object.assign({}, this.config, config);

    // 基本的DOM节点
    this.mask = document.createElement('div'); // 遮罩层
    this.win = document.createElement('div'); // 弹窗层
    this.winHead = document.createElement('div'); // 弹窗头部
    this.winBody = document.createElement('div'); // 弹窗主体
    this.winFoot = document.createElement('div'); // 弹窗底部
    // 添加class
    this.mask.classList.add('mask');
    this.win.classList.add('dialog-content');
    this.winHead.classList.add('dialog-header');
    this.winBody.classList.add('dialog-body');
    this.winFoot.classList.add('dialog-footer');

    // 开始创建弹窗
    this._create();
  }
  
  _create() {
    let {type, message, buttons, delay} = this.config;

    // 默认样式
    if(this.Config) {
      this.winBody.innerText = message || '加载中...';

      this.win.appendChild(this.winBody);
      this.mask.appendChild(this.win);
      this.body.appendChild(this.mask);

      // 2s后自动消失
      setTimeout(() => {
        this.mask.remove();
      }, 2000)
    } else {
      // 判断type 
      if(type) {
        // 创建弹窗头部
        this.createHeader(this.winHead, type);
        this.win.appendChild(this.winHead);
      }

      // 创建弹窗内容
      this.createContent(this.winBody, type, message);
      this.win.appendChild(this.winBody);

      // 判断button
      if(buttons) {
        this.createButton(this.winFoot, buttons);
        this.win.appendChild(this.winFoot);
      }

      this.mask.appendChild(this.win);
      this.body.appendChild(this.mask);
    }

  }

  createHeader(headDOM, type) {
    let dialogType = this.dialogType;

    let i = document.createElement('i');
    i.classList.add('icon-close');
    
    headDOM.innerText = dialogType[type];

    // 点击关闭
    i.onclick = () => {this.close()};

    headDOM.appendChild(i);
  }

  // 创建弹窗内容
  createContent(bodyDOM, type, msg) {

    let i = document.createElement('i');
    let span = document.createElement('span');
    i.classList.add('icon', type);
    span.innerText = msg || '这是一条提示信息';
    bodyDOM.append(i, span);
    this.win.appendChild(this.winBody);
  }

  // 创建底部按钮
  createButton(foot, btnGroup) {
    // 开始创建按钮
    btnGroup.forEach((btn, index) => {
      let button = document.createElement('button');
      let type = btn.type || '';
      let callback = btn.callback || null;

      button.type = 'button';
      button.classList.add('btn', type);
      button.innerText = btn.value;

      // 判断是否有回调函数
      if(callback) {
        button.onclick = () => {
          let isClose = callback();
          
          if(isClose != false) {
            this.close()
          }
        }
      } else {
        button.onclick = () => {
          this.close()
        }
      }

      foot.appendChild(button);
    })
  }

  // 关闭弹窗
  close() {
    this.mask.remove();
  }

  // 判断是否是对象
  isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object, Object]' &&
    (Object.getPrototypeOf(obj) === Object.getPrototypeOf({}) || Object.getPrototypeOf(obj) === null)
  }
}

window.Dialog = Dialog