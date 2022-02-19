// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [{
            "pagePath": "/pages/index/index",
            "iconPath": "icon/icon_home.png",
            "selectedIconPath": "icon/icon_home_HL.png",
            "text": "首页"
          },
          {
            "pagePath": "/pages/classify/classify",
            "iconPath": "icon/icon_home.png",
            "selectedIconPath": "icon/icon_home_HL.png",
            "text": "分类"
          },
          {
            "pagePath": "/pages/middle/middle",
            "iconPath": "icon/add.png",
            "isSpecial": true,
            "text": "发布"
          },
          {
            "pagePath": "/pages/car/car",
            "iconPath": "icon/icon_mine.png",
            "selectedIconPath": "icon/icon_mine_HL.png",
            "text": "购物车"
          },
          {
            "pagePath": "/pages/mine/mine",
            "iconPath": "icon/icon_mine.png",
            "selectedIconPath": "icon/icon_mine_HL.png",
            "text": "我的"
          }
        ]
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false,
    isChecked: 0,
    tag: false,
    tagshow: false,
    newtaglist: [],
    taglist: [{
        id: 1,
        name: '学习',
        check: 0
      },
      {
        id: 2,
        name: '交友',
        check: 0
      },
      {
        id: 3,
        name: '分享',
        check: 0
      }
    ],
    // tagindex：默认显示的时下标为0的tag
    tagindex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    make: function (e) {
      this.rotate();
      this.up();
      this.setData({
        isChecked: (1 + this.data.isChecked) % 2
      });
      // console.log("是否显示：" + this.data.isChecked)
    },

    // 发帖上升效果
    up: function () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-out',
        delay: 0,
        transformOrigin: '50% 0% 0'
      });
      var animationtwo = wx.createAnimation({
        duration: 600,
        timingFunction: 'ease-in',
        delay: 50,
        transformOrigin: '50% 0% 0'
      });
      animation.bottom(35).step();
      animationtwo.bottom(-1600).step();
      if (this.data.isChecked) {
        this.setData({
          anitwo: animationtwo.export()
        })
      } else {
        this.setData({
          anitwo: animation.export()
        })
      }
    },

    // 中间按钮的旋转
    rotate: function () {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
        delay: 50,
        transformOrigin: '50% 50% 0'
      });
      var animationtwo = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
        delay: 50,
        transformOrigin: '50% 50% 0'
      });
      animation.rotate(90).step();
      animationtwo.rotate(-45).step();
      if (this.data.isChecked) {
        this.setData({
          ani: animation.export()
        })
      } else {
        this.setData({
          ani: animationtwo.export()
        })
      }
    },

    checkit: function (e) {
      this.setData({
        tag: true,
      })
    },

    // 点击方法
    bindClick: function (e) {
      let id = e.currentTarget.dataset.id;
      var taglist = this.data.taglist.map(item => {
        if (item.id == id) {
          item.check = (item.check + 1) % 2
          // 选中以后需要执行的方法
        }
        return item
      })

      this.setData({
        taglist: taglist
      })
      // console.log(this.data.taglist)
    },

    sure: function (e) {
      let newtaglist = []
      let list = this.data.taglist
      for (var x in this.data.taglist) {
        if (list[x].check) {
          newtaglist = newtaglist.concat(list[x])
        }
      }
      this.setData({
        tag: false,
        tagshow: true,
        newtaglist: newtaglist
      })
    },

    delete: function (e) {
      let taglist = this.data.taglist
      for (var x in this.data.taglist) {
        taglist[x].check = 0
      }
      for (var y in this.data.newtaglist) {
        taglist[y].check = 1
      }

      this.setData({
        tag: false,
        taglist:taglist
      })
    }
  }
})