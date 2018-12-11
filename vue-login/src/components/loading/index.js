class Dialog {
  constructor () {
    this.prefix = 'dialog';
    this.type;
    this.message;
    this.btns = {value: 'default', label: '确认'};
    this.Dialog = document.createElement('div');
  }

  init (options) {
    this.type = options.type || 'default';
    this.message = options.message || '这是一条提示信息';

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

    // this.btns.forEach(btn => {
    let button = document.createElement('button');
    button.className = `btn-${this.btns.value}`;
    button.innerText = this.btns.label;

    footer.append(button)
    // })
    button.addEventListener('click', this.btnClick, false);

    return footer
  }

  // 按钮点击事件
  btnClick() {
    let Box = document.querySelector('.pull-dialog');

    Box.remove()
  }
}

export default new Dialog();