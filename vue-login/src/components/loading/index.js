class Dialog {
  constructor () {
    this.prefix = 'dialog';
    this.type;
    this.message;
    this.callback;
    this.isShow = true;
    this.btns = {value: 'default', label: '确认'};
    this.Dialog = document.createElement('div');
  }

  init (options) {
    this.type = options.type || 'default';
    this.message = options.message || '这是一条提示信息';
    this.callback = options.callback || null;

    this.createDOM();
  }

  createDOM() {
    let oBox = document.createElement('div');
    let head = this.createHeader();
    let body = this.createBody();
    let foot = this.createFooter();

    this.Dialog.className = `pull-${this.prefix}`;
    oBox.className = `${this.prefix}-content`;

    oBox.append(head, body, foot);
    this.Dialog.append(oBox)
    this.Dialog.style.display = this.isShow ? 'block' : 'none';

    document.body.append(this.Dialog);
  }

  // 创建头部
  createHeader() {
    let head = document.createElement('div');
    let span = document.createElement('span');

    head.className = `${this.prefix}-header`;
    span.innerText = '提示';
    head.append(span);

    return head;
  }

  // 创建主体
  createBody() {
    let body = document.createElement('div');
    let i = document.createElement('i');
    let p = document.createElement('p');
    body.className = `${this.prefix}-body`;
    i.className = `icon-${this.type}`;
    p.innerText = this.message;

    body.append(i, p);
    return body;
  }

  // 创建底部
  createFooter() {
    let footer = document.createElement('div');
    footer.className = `${this.prefix}-footer`;

    let button = document.createElement('button');
    button.className = `btn-${this.btns.value}`;
    button.innerText = this.btns.label;

    footer.append(button);

    this.handleClick(button);

    return footer
  }

  // button绑定事件
  handleClick(button) {
    let self = this;
    button.addEventListener('click', function() {
      if(self.callback) {
        self.callback();
      } 
      
      self.btnClick()
    }, false);
  }

  // 弹窗消失
  btnClick() {
    let Box = document.querySelector('.pull-dialog');
    this.type = '';
    this.message = '';

    Box.remove();
  }
}

export default new Dialog();