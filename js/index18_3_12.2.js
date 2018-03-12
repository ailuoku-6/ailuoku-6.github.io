
var allsite = new Vue({
  el:"#allsite",
  data:{
    comsitelist:[
      {site_name:"百度",url:"https://www.baidu.com/",icon:"img/baidu.png"},
      {site_name:"淘宝",url:"https://www.taobao.com",icon:"img/taobao.png"},
      {site_name:"京东",url:"https://www.jd.com",icon:"img/jd.png"},
      {site_name:"知乎",url:"https://www.zhihu.com",icon:"img/zhihu.png"},
      {site_name:"谷歌翻译",url:"https://translate.google.cn/",icon:"img/googlefanyi.png"},
      {site_name:"Github",url:"https://www.github.com",icon:"img/github.png"},
      {site_name:"QQ邮箱",url:"https://mail.qq.com",icon:"img/qqmail.png"},
      {site_name:"新浪微博",url:"https://weibo.com",icon:"img/weibo.png"},
      {site_name:"网易云音乐",url:"https://music.163.com",icon:"img/wangyiyun.png"},
    ],
    categorylist:[
      {
        categoryname:"酷站",
        sitelist:[
          {site_name:"创造狮",url:"http://www.chuangzaoshi.com/"},
          {site_name:"果壳网",url:"http://www.guokr.com"},
          {site_name:"36氪",url:"http://36kr.com"},
          {site_name:"网易公开课",url:"http://open.163.com"},
          {site_name:"中国科学引文数据库",url:"http://sdb.csdl.ac.cn"},
          {site_name:"CALIS学位论文库",url:"http://www.calis.edu.cn"},
          {site_name:"Justin Guitar",url:"http://www.justinguitar.com"},
          {site_name:"中国知网",url:"http://www.cnki.net"},
          {site_name:"中国大学MOOC",url:"http://www.icourse163.org/"}
        ],
      },
      {
        categoryname:"办公与邮箱",
        sitelist:[
          {site_name:"演界网",url:"http://www.yanj.cn"},
          {site_name:"officeplus",url:"http://office.mmais.com.cn/Template/Home.shtml"},
          {site_name:"欧酷PPT",url:"http://www.pptxok.com"},
          {site_name:"稻壳网",url:"http://www.docer.com"},
          {site_name:"Material Design文档",url:"https://www.mdui.org/design/material-design/introduction.html#"},
          {site_name:"网易163邮箱",url:"http://mail.163.com/"},
          {site_name:"QQ邮箱",url:"https://mail.qq.com"},
          {site_name:"阿里邮箱",url:"https://mail.aliyun.com/"},
        ],
      },
      {
        categoryname:"音乐与视频",
        sitelist:[
          {site_name:"QQ音乐",url:"https://y.qq.com/"},
          {site_name:"网易云音乐",url:"http://music.163.com/"},
          {site_name:"酷狗音乐",url:"http://www.kugou.com/"},
          {site_name:"百度音乐",url:"http://music.baidu.com/"},
          {site_name:"腾讯视频",url:"https://v.qq.com/"},
          {site_name:"优酷视频",url:"http://www.youku.com/"},
          {site_name:"爱奇艺视频",url:"http://www.iqiyi.com/"},
          {site_name:"哔哩哔哩",url:"https://www.bilibili.com/"},
          {site_name:"乐视视频",url:"http://www.le.com/"}
        ],
      },
      {
        categoryname:"少壮不努力，长大学设计",
        sitelist:[
          {site_name:"创意人",url:"http://www.ccihr.com"},
          {site_name:"全景网",url:"http://www.quanjing.com/"},
          {site_name:"花瓣网",url:"http://www.huaban.com"},
          {site_name:"UI中国",url:"http://www.ui.cn/"},
          {site_name:"千图网",url:"http://www.58pic.com/"},
          {site_name:"Dribbble",url:"https://dribbble.com/"},
          {site_name:"阿里图标平台",url:"http://www.iconfont.cn/plus"},
          {site_name:"Easyicon",url:"http://www.easyicon.net/"},
          {site_name:"Sketch站点资源",url:"http://sketch.im/"},
        ],
      },
      {
        categoryname:"购物与剁手",
        sitelist:[
          {site_name:"淘宝网",url:"https://www.taobao.com/"},
          {site_name:"天猫商城",url:"https://www.tmall.com"},
          {site_name:"京东商城",url:"http://www.jd.com"},
          {site_name:"当当网",url:"http://www.dangdang.com"},
          {site_name:"亚马逊",url:"https://www.amazon.cn/"},
          {site_name:"苏宁易购",url:"https://www.suning.com"},
          {site_name:"闲鱼二手",url:"https://2.taobao.com/"},
          {site_name:"支付宝",url:"https://www.alipay.com/"},
          {site_name:"小米商城",url:"https://www.mi.com/"},
          {site_name:"快递100",url:"http://www.kuaidi100.com/"}
        ],
      },
      {
        categoryname:"实用在线小工具",
        sitelist:[
          {site_name:"图片在线压缩",url:"http://optimizilla.com/zh/"},
          {site_name:"图片无损放大",url:"http://waifu2x.udp.jp/"},
          {site_name:"草料二维码",url:"https://cli.im/"},
          {site_name:"PS网页版",url:"http://www.uupoop.com/"},
          {site_name:"在线进制转换",url:"http://tool.lu/hexconvert/"},
          {site_name:"邮编区号查询",url:"http://tool.lu/zipcode/"},
          {site_name:"百度网盘搜索",url:"http://www.pansoso.com/"},
          {site_name:"更多在线工具",url:"http://tool.lu/"}
        ],
      },
    ],
    button_value:"百度一下",
    searApi:"",
    searApi_weizui:"",
    searchEngine:"",
    scrolled:false,
    myData:[],
    keyword:'',
    keysug:'',
    sel_index:0,
    isShow :false,
    isShowSelect:false,
    flag :"pc",
    sugflag: false,
    apiUrl:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd',
    pattern:/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?/g,
  },
  methods: {
    handleScroll:function() {
      if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) == 0) {
        this.scrolled = false;
      }else {
        this.scrolled = true;
      }
    },
    hidesug:function(item){
      if (item == "all") {
        this.isShow = false;
        this.isShowSelect = false;
      }else if (item == "sug") {
        this.isShow = false;
      }else {
        this.isShowSelect = false;
        this.sugflag = ~ this.sugflag;
        if (this.sugflag) {
          this.isShow = true;
        }else {
          this.isShow = false;
        }
      }
    },
    changeMarchine:function() {
      this.isShowSelect = ~ this.isShowSelect;
      this.isShow = false;
    },
    selectMarchine:function(Marchine){
      if (Marchine == "baidu") {
        this.button_value = "百度一下";
        this.searApi = "https://www.baidu.com/s?wd=";
        this.searApi_weizui = "";
      }else if (Marchine == "google") {
        this.button_value = "谷歌一下";
        this.searApi = "https://www.google.com/#q=";
        this.searApi_weizui = "";
      }else if (Marchine == "360") {
        this.button_value = "360搜";
        this.searApi = "https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=";
        this.searApi_weizui = "";
      }else if (Marchine == "bing") {
        this.button_value = "必应搜索";
        this.searApi = "https://www.bing.com/search?q=";
        this.searApi_weizui = "";
      }else if (Marchine == "360photo") {
        this.button_value = "图片搜索";
        this.searApi = "http://image.so.com/i?q=";
        this.searApi_weizui = "&src=srp";
      }else if (Marchine == "baidutieba") {
        this.button_value = "贴吧搜索";
        this.searApi = "https://tieba.baidu.com/f?kw=";
        this.searApi_weizui = "";
      }else if (Marchine == "baiduzhidao") {
        this.button_value = "百度知道";
        this.searApi = "https://zhidao.baidu.com/search?word=";
        this.searApi_weizui = "";
      }else if (Marchine == "pandd") {
        this.button_value = "搜网盘";
        this.searApi = "http://www.panduoduo.net/s/name/";
        this.searApi_weizui = "";
      }else if (Marchine == "zhihu") {
        this.button_value = "知乎搜索";
        this.searApi = "https://www.zhihu.com/search?type=content&q=";
        this.searApi_weizui = "";
      }else if (Marchine == "wenku") {
        this.button_value = "搜文库";
        this.searApi = "https://wenku.baidu.com/search?word=";
        this.searApi_weizui = "";
      }else if (Marchine == "csdn") {
        this.button_value = "搜csdn";
        this.searApi = "http://so.csdn.net/so/search/s.do?q=";
        this.searApi_weizui = "";
      }
      this.searchEngine = Marchine;
      localStorage.searApi = this.searApi;
      localStorage.searchEngine = this.searchEngine;
    },
    baiduyixia:function (){
      this.isShowSelect = false;
      if (this.pattern.test(this.keyword)) {//判断是否是网址
        if (this.flag == "phone") {
          window.location.href=this.keyword;
        }else {
          window.open(this.keyword);
        }
      }else {
        if (this.flag == "phone") {
          window.location.href=this.searApi+this.keyword+this.searApi_weizui;
        }else {
          window.open(this.searApi+this.keyword+this.searApi_weizui);
        }
      }
    },
    get:function (event) {
      if(event.keyCode==37||event.keyCode==38||event.keyCode==39||event.keyCode==40)return;
      if(event.keyCode==13)this.baiduyixia();
      this.requestData();
    },
    selectDown:function () {
        this.sel_index++;
        this.sel_index = this.sel_index%this.myData.length;
        this.keyword=this.myData[this.sel_index];
    },
    selectUp:function () {
        this.sel_index--;
        this.sel_index = (this.myData.length+this.sel_index)%this.myData.length;
        this.keyword=this.myData[this.sel_index];
    },
    requestData:function(){
      this.$http.jsonp(this.apiUrl,{
           wd:this.keyword
      },{
           jsonp:'cb'
      }).then(function (res) {
           this.myData=res.data.s;
      },function () {

      });
      this.sel_index =-1;
      if (this.keyword.replace(/(^s*)|(s*$)/g, "")!="") {
        this.isShow = true;
      }else {
        this.isShow = false;
      }
    },
    info:function (){
      const content = "<p>2018.3.11</p><p>1.增加切换搜索引擎功能，你选择的搜索引擎记录在本地，如不能记录，请升级浏览器！</p><p>2.搜索框输入网址可直接跳转，而不是搜索.(测试阶段)</p><p>2018.3.12</p><p>添加一些过渡动画,加入知乎搜索,百度文库搜索,csdn搜索</p>"
      this.$Modal.info({
        title: "更新日志",
        content: content,
      });
    },
    judge:function(){
      var sUserAgent=navigator.userAgent;
      var mobileAgents=['Android','iPhone','Symbian','WindowsPhone','iPod','BlackBerry','Windows CE'];
      for( var i=0;i<mobileAgents.length;i++){
        if(sUserAgent.indexOf(mobileAgents[i]) > -1){
            this.flag = "phone";
            break;
        }
      }
    },
    page_init:function(){
      this.$refs.sug.style.width = this.$refs.input_area.clientWidth + 25 + 'px';
      if (localStorage.searApi) {//初始化searapi
        this.searApi = localStorage.searApi;
      }
      else {
        this.searApi = "https://www.baidu.com/s?wd=";
        localStorage.searApi = this.searApi;
      }
      if (localStorage.searchEngine) {//初始化searchEngine
        this.searchEngine = localStorage.searchEngine;
      }
      else {
        this.searchEngine = "baidu";
        localStorage.searchEngine = this.searchEngine;
      }
      this.selectMarchine(this.searchEngine);
    }
  },
  mounted:function () {
    window.addEventListener('scroll', this.handleScroll);
    this.judge();
    this.page_init();
  },
  destroyed:function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
});
