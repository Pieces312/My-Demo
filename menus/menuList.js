class MenusList {
    constructor() {
        this.lists = [
            {
              name: '热菜',
              type: 'meat',
              childrens: [
                {name: '泡椒牛肉丝', type: 'meat', price: '38'},
                {name: '泡椒鸡杂', type: 'meat', price: '26'},
                {name: '回锅牛肉', type: 'meat', price: '38'},
                {name: '水煮肉片', type: 'meat', price: '25'},
                {name: '尖椒猪肝', type: 'meat', price: '22'},
                {name: '火爆肥肠', type: 'meat', price: '32'},
                {name: '苕皮回锅肉', type: 'meat', price: '20'},
                {name: '香辣兔', type: 'meat', price: '32'},
                {name: '双椒排骨', type: 'meat', price: '38'},
                {name: '尖椒兔', type: 'meat', price: '32'},
                {name: '尖椒鸡', type: 'meat', price: '32'},
                {name: '渣海椒炒肉', type: 'meat', price: '20'},
                {name: '辣子鸡', type: 'meat', price: '32'},
                {name: '宫保鸡丁', type: 'meat', price: '20'},
                {name: '白油肚条', type: 'meat', price: '32'},
                {name: '黄豆烧肉', type: 'meat', price: '20'},
                {name: '孜然鸡排', type: 'meat', price: '32'},
                {name: '蒜苔肉丝', type: 'meat', price: '20'},
                {name: '小炒肉', type: 'meat', price: '20'},
                {name: '泡椒腰花', type: 'meat', price: '32'},
                {name: '木耳肉片', type: 'meat', price: '20'},
                {name: '香飘鸡排', type: 'meat', price: '32'},
                {name: '豆干肉丝', type: 'meat', price: '20'},
                {name: '泡椒肉丝', type: 'meat', price: '32'},
                {name: '火爆肚条', type: 'meat', price: '32'},
                {name: '黄瓜肉片', type: 'meat', price: '20'},
                {name: '肝腰合炒', type: 'meat', price: '30'},
                {name: '鱼香肉丝', type: 'meat', price: '20'},
                {name: '花菜炒腊肉', type: 'meat', price: '28'},
                {name: '红烧牛肉', type: 'meat', price: '25'},
                {name: '青菜牛肉', type: 'meat', price: '38'},
                {name: '红烧肥肠', type: 'meat', price: '25'},
                {name: '毛血旺', type: 'meat', price: '28'},
                {name: '胡萝卜炒肉', type: 'meat', price: '20'},
                {name: '酸菜鱼', type: 'meat', price: '30'},
                {name: '水煮鱼', type: 'meat', price: '30'},
                {name: '火爆黄喉', type: 'meat', price: '32'},
                {name: '青椒肉丝', type: 'meat', price: '18'},
                {name: '回锅肉', type: 'meat', price: '18'},
                {name: '盐煎肉', type: 'meat', price: '18'},
                {name: '粉蒸肉', type: 'meat', price: '18'}
              ]
            }, {
              name: '素菜',
              type: 'vegetable',
              childrens: [
                {name: '麻辣藕丁', type: 'vegetable', price: '16'},
                {name: '油渣莲白', type: 'vegetable', price: '14'},
                {name: '菜豆花', type: 'vegetable', price: '12'},
                {name: '青椒玉米', type: 'vegetable', price: '15'},
                {name: '渣海椒炒土豆丝', type: 'vegetable', price: '15'},
                {name: '苦瓜炒蛋', type: 'vegetable', price: '15'},
                {name: '虎皮青椒', type: 'vegetable', price: '15'},
                {name: '韭菜炒豆干', type: 'vegetable', price: '15'},
                {name: '芹菜炒豆干', type: 'vegetable', price: '15'},
                {name: '干煸四季豆', type: 'vegetable', price: '15'},
                {name: '椒盐洋芋', type: 'vegetable', price: '15'},
                {name: '鱼香茄子', type: 'vegetable', price: '14'},
                {name: '韭菜炒蛋', type: 'vegetable', price: '15'},
                {name: '炒胡萝卜', type: 'vegetable', price: '14'},
                {name: '素炒三样', type: 'vegetable', price: '16'},
                {name: '番茄炒蛋', type: 'vegetable', price: '14'},
                {name: '粉丝莲白', type: 'vegetable', price: '14'},
                {name: '炒时蔬', type: 'vegetable', price: '15'},
                {name: '红烧茄子', type: 'vegetable', price: '14'},
                {name: '青椒土豆丝', type: 'vegetable', price: '12'},
                {name: '麻婆豆腐', type: 'vegetable', price: '14'}
              ]
            }, {
              name: '干锅系列',
              type: 'dry-pot',
              childrens: [
                {name: '干锅野猪肉', type: 'dry-pot', price: '78'},
                {name: '干锅耗儿鱼', type: 'dry-pot', price: '48'},
                {name: '干锅牛肉', type: 'dry-pot', price: '68'},
                {name: '干锅肥肠', type: 'dry-pot', price: '68'},
                {name: '干锅排骨', type: 'dry-pot', price: '68'},
                {name: '干锅兔', type: 'dry-pot', price: '58'},
                {name: '干锅鸡杂', type: 'dry-pot', price: '58'},
                {name: '干锅鸡', type: 'dry-pot', price: '58'}
              ]
            }, {
              name: '汤菜',
              type: 'soup',
              childrens: [
                {name: '酥肉菜汤', type: 'soup', price: '20'},
                {name: '番茄排骨汤', type: 'soup', price: '20'},
                {name: '米豆酸菜汤', type: 'soup', price: '15'},
                {name: '番茄鸡蛋汤', type: 'soup', price: '14'},
                {name: '黄瓜皮蛋汤', type: 'soup', price: '14'},
                {name: '小菜豆腐汤', type: 'soup', price: '12'},
                {name: '大骨海带汤', type: 'soup', price: '12'},
                {name: '大骨萝卜汤', type: 'soup', price: '12'},
                {name: '酸菜粉丝汤', type: 'soup', price: '12'}
              ]
            }
          ];
    }

    _init() {
        this.initData()
    }

    initData() {
        this.lists.forEach(_l => {
            if(Array.isArray(_l.childrens)) {
                _l.childrens.map(child => {
                    if(!child._selected) {
                        child._selected = false;
                    }
                })
            }

            _l.childrens.sort((l, n) => n.price - l.price);
        })
    }
}