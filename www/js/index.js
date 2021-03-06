'use strict';

//首页内容

var Banner = React.createClass({ displayName: "Banner",
  componentDidMount: function componentDidMount() {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 5000,
      speed: 1000,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      pagination: '.swiper-pagination',
      paginationClickable: true
    });
  },
  render: function render() {
    return React.createElement("div", { className: "container", id: "banner" }, React.createElement("div", { className: "banner-swiper swiper-container swiper-container-horizontal" }, React.createElement("div", { className: "swiper-wrapper" }, React.createElement("div", { className: "swiper-slide" }, React.createElement("img", { src: "images/banner.jpg", alt: "" })), React.createElement("div", { className: "swiper-slide" }, React.createElement("img", { src: "images/banner_2.jpg", alt: "" })), React.createElement("div", { className: "swiper-slide" }, React.createElement("img", { src: "images/banner_3.jpg", alt: "" }))), React.createElement("div", { className: "swiper-button-prev" }), React.createElement("div", { className: "swiper-button-next" }), React.createElement("div", { className: "swiper-pagination swiper-pagination-clickable" })));
  }
});

var Intro = React.createClass({ displayName: "Intro",
  render: function render() {
    var styles = {
      date: {
        "border-top": "#0d873a solid 5px"
      },
      cost: {
        "border-top": "#4aa7f6 solid 5px"
      },
      phyd: {
        "border-top": "#f2c510 solid 5px"
      }
    };

    return React.createElement("div", { className: "container", id: "intro" }, React.createElement("div", { className: "row" }, React.createElement("div", { className: "col l4" }, React.createElement("div", { className: "center-align intro-module", style: styles.date }, React.createElement("img", { src: "images/index_logo_date.png", alt: "" }), React.createElement("h6", null, "大数据风控"), React.createElement("span", null, "恒河沙数,挖掘价值。"))), React.createElement("div", { className: "col l4" }, React.createElement("div", { className: "center-align intro-module", style: styles.cost }, React.createElement("img", { src: "images/index_logo_cost.png", alt: "" }), React.createElement("h6", null, "失信数据库"), React.createElement("span", null, "联防联控, ", React.createElement("br", null), "云端数据专家。"))), React.createElement("div", { className: "col l4" }, React.createElement("div", { className: "center-align intro-module", style: styles.phyd }, React.createElement("img", { src: "images/index_logo_phyd.png", alt: "" }), React.createElement("h6", null, "个人资信报告"), React.createElement("span", null, "行业定制,百条数据维度", React.createElement("br", null), "构建丰富精准资信报告。")))));
  }
});

var FooterComponent = React.createClass({ displayName: "FooterComponent",
  render: function render() {
    return React.createElement("footer", { className: "page-footer" }, React.createElement("div", { className: "container center-align" }, "©2014 - 2020 All Rights Reserved. 版权所有 仁穗互联网金融服务（深圳）有限公司 粤ICP备15095292号"));
  }
});

var Introduce = React.createClass({ displayName: "Introduce",
  getInitialState: function getInitialState() {
    return {
      index: '',
      historyList: [],
      introContent: [],
      styles: ['active', '', '']
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var dataObj = nextProps.data,
        historyList = [],
        styles = this.state.styles;

    var index = dataObj.content[0].title;

    // 初始化左侧栏
    for (var d in dataObj.title) {
      historyList.push(React.createElement("li", { className: "intro-name " + styles[d],
        onClick: this.handleClick.bind(this, d) }, dataObj.title[d]));
    }

    // 初始化右侧内容主体
    var introContent = [];
    introContent.push(React.createElement("h5", { className: "center-align" }, dataObj.content[0].title));
    var contentBody = dataObj.content[0].body;
    for (var c in contentBody) {
      if (contentBody[c]["p"]) {
        introContent.push(React.createElement("p", null, React.createElement("span", { className: "left-2em" }), contentBody[c]["p"]));
      } else if (contentBody[c]["image"]) {
        introContent.push(React.createElement("img", { src: contentBody[c]['image'], alt: "" }));
      } else if (contentBody[c]["h6"]) {
        introContent.push(React.createElement("h6", null, contentBody[c]["h6"]));
      } else if (contentBody[c]['text']) {
        introContent.push(React.createElement("p", null, contentBody[c]['text']));
      }
    }

    this.setState({
      index: index,
      historyList: historyList,
      introContent: introContent
    });
  },
  handleClick: function handleClick(index) {

    var historyList = [],
        styles = this.state.styles,
        dataObj = this.props.data;

    // 修改左侧栏选中样式
    for (var s in styles) {
      styles[s] = index == s ? 'active' : '';
    }

    // 渲染左侧栏
    for (var d in dataObj.title) {
      historyList.push(React.createElement("li", { className: "intro-name " + styles[d],
        onClick: this.handleClick.bind(this, d) }, dataObj.title[d]));
    }

    // 渲染右侧内容
    var introContent = [];

    introContent.push(React.createElement("h5", { className: "center-align" }, dataObj.content[index].title));

    var contentBody = dataObj.content[index].body;
    for (var c in contentBody) {
      if (contentBody[c]["p"]) {
        introContent.push(React.createElement("p", null, React.createElement("span", { className: "left-2em" }), contentBody[c]["p"]));
      } else if (contentBody[c]["image"]) {
        introContent.push(React.createElement("img", { src: contentBody[c]['image'], alt: "" }));
      } else if (contentBody[c]["h6"]) {
        introContent.push(React.createElement("h6", null, contentBody[c]["h6"]));
      } else if (contentBody[c]["text"]) {
        introContent.push(React.createElement("p", null, contentBody[c]["text"]));
      }
    }

    this.setState({
      styles: styles,
      index: this.props.data.title[index],
      historyList: historyList,
      introContent: introContent
    });
  },
  render: function render() {
    var historyList = this.state.historyList,
        introContent = this.state.introContent;
    return React.createElement("div", { style: { "background-color": "#f8f8f8" } }, React.createElement("img", { className: "banner2", src: "images/banner2.jpg", alt: "" }), React.createElement("div", { className: "container" }, React.createElement("div", { className: "history" }, React.createElement("p", null, " ", this.props.title, " ", ' > ' + this.state.index, " ")), React.createElement("div", { className: "row" }, React.createElement("ul", { className: "col l3 product-type" }, historyList), React.createElement("ul", { className: "col l9 product-intro-title" }, React.createElement("li", { className: "product-intro" }, introContent)))), React.createElement(FooterComponent, null));
  }
});

// 首页
var IndexPage = React.createClass({ displayName: "IndexPage",
  render: function render() {
    return React.createElement("div", null, React.createElement(Banner, null), React.createElement(Intro, null), React.createElement(FooterComponent, null));
  }
});

// 产品介绍
var ProductPage = React.createClass({ displayName: "ProductPage",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  componentWillMount: function componentWillMount() {
    $.get('data/intro.json', function (data) {
      this.setState({
        data: data
      });
    }.bind(this));
  },
  render: function render() {
    return React.createElement("div", null, React.createElement(Introduce, { title: "产品介绍", data: this.state.data }));
  }
});

// 关于我们
var AboutPage = React.createClass({ displayName: "AboutPage",
  getInitialState: function getInitialState() {
    return {
      data: null
    };
  },
  componentWillMount: function componentWillMount() {
    $.get('data/about.json', function (data) {
      this.setState({
        data: data
      });
    }.bind(this));
  },
  render: function render() {
    return React.createElement("div", null, React.createElement(Introduce, { title: "关于我们", data: this.state.data }));
  }
});

// 免费试用
var TryPage = React.createClass({ displayName: "TryPage",
  render: function render() {
    return React.createElement("div", { style: { "background-color": "#f8f8f8" } }, React.createElement("img", { className: "banner2", src: "images/banner2.jpg", alt: "" }), React.createElement("div", { className: "container" }, React.createElement("div", { className: "history" }, React.createElement("p", null, '免费试用 > 申请鹰眼账户', " ")), React.createElement("div", { className: "container" }, React.createElement("div", { className: "container try-form" }, React.createElement("div", { className: "input-field" }, React.createElement("input", { id: "company_name", type: "text", className: "validate" }), React.createElement("label", { htmlFor: "company_name" }, "公司名称")), React.createElement("div", { className: "input-field" }, React.createElement("input", { id: "user_name", type: "text", className: "validate" }), React.createElement("label", { htmlFor: "user_name" }, "姓名")), React.createElement("div", { className: "input-field" }, React.createElement("input", { id: "email", type: "text", className: "validate" }), React.createElement("label", { htmlFor: "email" }, "企业邮箱")), React.createElement("div", { className: "input-field" }, React.createElement("input", { id: "phone", type: "text", className: "validate" }), React.createElement("label", { htmlFor: "phone" }, "手机")), React.createElement("p", null, React.createElement("input", { type: "checkbox", id: "agreement" }), React.createElement("label", { htmlFor: "agreement" }, React.createElement("a", { href: "view/agree.html", target: "_blank" }, "同意《用户注册协议》"))), React.createElement("div", { className: "input-fieldgoogle center-align" }, React.createElement("button", { className: "btn waves-effect", id: "submit-try", type: "submit", name: "action" }, "提交"))))), React.createElement(FooterComponent, null));
  }
});

//-----------------------------------------------------------------------

// 导航栏&导航器
var NavComponent = React.createClass({ displayName: "NavComponent",
  getInitialState: function getInitialState() {
    return {
      Components: React.createElement(IndexPage, null),
      styles: {
        index: {
          'color': '#2b98f3'
        },
        product: {
          'color': '#333333'
        },
        about: {
          'color': '#333333'
        },
        try: {
          'color': '#333333'
        }
      }
    };
  },

  // 配置路由
  router: function router(index) {
    var Components = [];

    for (var a in this.state.styles) {
      this.state.styles[a] = index == a ? { 'color': '#2b98f3' } : { 'color': '#333333' };
    }

    switch (index) {
      case 'index':
        Components = React.createElement(IndexPage, null);
        break;
      case 'product':
        Components = React.createElement(ProductPage, null);
        break;
      case 'about':
        Components = React.createElement(AboutPage, null);
        break;
      case 'try':
        Components = React.createElement(TryPage, null);
        break;
      default:
        Components = React.createElement(IndexPage, null);
        break;
    }

    this.setState({
      Components: Components
    });
  },
  render: function render() {
    var styles = this.state.styles;
    return React.createElement("div", null, React.createElement("nav", null, React.createElement("div", { className: "nav-wrapper container" }, React.createElement("a", { href: "#", id: "logo", className: "brand-logo" }, React.createElement("img", { src: "images/logo.png" })), React.createElement("ul", { id: "nav-mobile", className: "right hide-on-med-and-down" }, React.createElement("li", null, React.createElement("a", { onClick: this.router.bind(this, 'index'), style: styles.index }, "首页")), React.createElement("li", null, React.createElement("a", { onClick: this.router.bind(this, 'product'), style: styles.product }, "产品介绍")), React.createElement("li", null, React.createElement("a", { onClick: this.router.bind(this, 'about'), style: styles.about }, "关于我们")), React.createElement("li", null, React.createElement("a", { href: "https://portal.eagleeyetech.cn", target: "_blank", id: "login" }, "企业登陆")), React.createElement("li", null, React.createElement("a", { onClick: this.router.bind(this, 'try'), style: styles.try }, "免费试用"))))), this.state.Components);
  }
});

ReactDOM.render(React.createElement(NavComponent, null), document.getElementById('root'));