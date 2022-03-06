(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{572:function(_,e,o){"use strict";o.r(e);var v=o(13),t=Object(v.a)({},(function(){var _=this,e=_.$createElement,o=_._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[o("h1",{attrs:{id:"前言"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),o("p",[_._v("要说浏览器存储的方式，我们听到最多的莫过于就是 cookie，localStorage 和 sessionStorage 了。那这三者之前有什么区别，cookie 与 session、sessionId 又有什么关系呢？接下来我们一起来了解一下吧！")]),_._v(" "),o("h1",{attrs:{id:"一、浏览器存储的方式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、浏览器存储的方式"}},[_._v("#")]),_._v(" 一、浏览器存储的方式")]),_._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"center"}},[_._v("特性")]),_._v(" "),o("th",{staticStyle:{"text-align":"center"}},[_._v("cookie")]),_._v(" "),o("th",{staticStyle:{"text-align":"center"}},[_._v("localStorage")]),_._v(" "),o("th",{staticStyle:{"text-align":"center"}},[_._v("sessionStorage")]),_._v(" "),o("th",{staticStyle:{"text-align":"center"}},[_._v("indexedDB")])])]),_._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"center"}},[_._v("数据生命周期")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("一般由服务器生成，可以设置过期时间")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("除非被清理，否则一直存在")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("页面关闭就清理")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("除非被清理，否则一直存在")])]),_._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[_._v("数据存储大小")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("4K")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("5M")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("5M")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("无限")])]),_._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[_._v("与服务端通信")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("每次都会携带在 header 中，对于请求性能有一定影响")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("不参与")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("不参与")]),_._v(" "),o("td",{staticStyle:{"text-align":"center"}},[_._v("不参与")])])])]),_._v(" "),o("p",[o("strong",[_._v("补充")]),_._v("："),o("code",[_._v("cookie")]),_._v(" 原本并不是用来储存的，而是用来与服务端通信的，需要存取请自行封装 "),o("code",[_._v("api")]),_._v("。")]),_._v(" "),o("p",[_._v("而 "),o("strong",[_._v("localStorage")]),_._v(" 则自带 "),o("code",[_._v("getItem")]),_._v(" 和 "),o("code",[_._v("setItem")]),_._v(" 方法，使用很方便。")]),_._v(" "),o("p",[o("strong",[_._v("localStorage 注意点：")])]),_._v(" "),o("ul",[o("li",[o("p",[o("code",[_._v("localStorage")]),_._v(" 只能存字符串，存取 "),o("code",[_._v("JSON")]),_._v(" 数据需配合 "),o("code",[_._v("JSON.stringify()")]),_._v(" 和 "),o("code",[_._v("JSON.parse()")]),_._v(" ；")])]),_._v(" "),o("li",[o("p",[_._v("遇上禁用 "),o("code",[_._v("setItem")]),_._v(" 的浏览器，需要使用 "),o("code",[_._v("try...catch")]),_._v(" 捕获异常。")])])]),_._v(" "),o("h1",{attrs:{id:"二、cookie、localstorage-和-sessionstorage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、cookie、localstorage-和-sessionstorage"}},[_._v("#")]),_._v(" 二、cookie、localStorage 和 sessionStorage")]),_._v(" "),o("h2",{attrs:{id:"_1、cookie、localstorage-和-sessionstorage-是什么"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1、cookie、localstorage-和-sessionstorage-是什么"}},[_._v("#")]),_._v(" 1、cookie、localStorage 和 sessionStorage 是什么？")]),_._v(" "),o("h3",{attrs:{id:"_1-cookie"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-cookie"}},[_._v("#")]),_._v(" （1）cookie")]),_._v(" "),o("ul",[o("li",[o("p",[o("code",[_._v("cookie")]),_._v(" 是一个非常具体的东西，指的就是浏览器里面能"),o("strong",[_._v("永久存储")]),_._v("的一种数据，仅仅是"),o("strong",[_._v("浏览器")]),_._v("实现的一种数据存储功能。")])]),_._v(" "),o("li",[o("p",[o("code",[_._v("cookie")]),_._v(" 由服务器生成，发送给浏览器，浏览器把 "),o("code",[_._v("cookie")]),_._v(" 以"),o("strong",[_._v("kv 的形式")]),_._v("保存到某个目录下的文本文件内，下一次请求同一网站时会把该 "),o("code",[_._v("cookie")]),_._v(" 发送给服务器。")])]),_._v(" "),o("li",[o("p",[o("code",[_._v("cookie")]),_._v(" 的过期时间由客户端设置。"),o("strong",[_._v("若不设置过期时间")]),_._v("，则表示这个 "),o("code",[_._v("cookie")]),_._v(" 的生命期为浏览器会话期间，关闭浏览器窗口， "),o("code",[_._v("cookie")]),_._v(" 就会消失。这种生命期为浏览器会话期的 "),o("code",[_._v("cookie")]),_._v(" 被称为"),o("strong",[_._v("会话 cookie")]),_._v("。"),o("strong",[_._v("如果设置了过期时间")]),_._v("，则在设置的 "),o("code",[_._v("cookie")]),_._v(" 过期时间之前一直有效，即使窗口或浏览器关闭也会一直有效。")])]),_._v(" "),o("li",[o("p",[_._v("会话 cookie 一般不存储在硬盘而是保存在"),o("strong",[_._v("内存")]),_._v("里，当然这个行为并不是规范规定的。若设置了过期时间，浏览器就会把 cookie 保存到"),o("strong",[_._v("硬盘")]),_._v("上，关闭后再打开浏览器后这些 "),o("code",[_._v("cookie")]),_._v(" 仍然有效直到超过设定的过期时间。对于保存在内存里的 "),o("code",[_._v("cookie")]),_._v(" ，不同的浏览器有不同的处理方式。")])]),_._v(" "),o("li",[o("p",[_._v("可用 "),o("code",[_._v('document.cookie = ""')]),_._v(" 来设置 "),o("code",[_._v("cookie")]),_._v(" 的值。cookie 的值是键值对的形式存在，当设置的键一样时，会覆盖掉原先的值。当键不一样时，对进行叠加操作。"),o("a",{attrs:{href:"https://blog.csdn.net/l_ppp/article/details/106363568",target:"_blank",rel:"noopener noreferrer"}},[_._v("这里附上一篇我看过觉得比较好理解的关于如何设置 cookie 的文章，大家可以根据自身需求进行查看~"),o("OutboundLink")],1)])])]),_._v(" "),o("h3",{attrs:{id:"_2-localstorage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-localstorage"}},[_._v("#")]),_._v(" （2）localStorage")]),_._v(" "),o("ul",[o("li",[_._v("始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；")]),_._v(" "),o("li",[_._v("同源窗口都会共享，并且不会失效，不管窗口或者浏览器关闭与否都会始终生效。")])]),_._v(" "),o("h3",{attrs:{id:"_3-sessionstorage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-sessionstorage"}},[_._v("#")]),_._v(" （3）sessionStorage")]),_._v(" "),o("ul",[o("li",[o("p",[_._v("浏览器存储的一种形式。")])]),_._v(" "),o("li",[o("p",[_._v("仅在当前浏览器窗口关闭前有效，不可能持久保持。")])]),_._v(" "),o("li",[o("p",[_._v("在相同浏览器里，如果是在当前页面里面跳转进入一个新的页面，可以共享；而如果是直接打开一个新的页面，不能共享。")])])]),_._v(" "),o("h2",{attrs:{id:"_2、cookie、localstorage-和-sessionstorage-的异同点"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2、cookie、localstorage-和-sessionstorage-的异同点"}},[_._v("#")]),_._v(" 2、cookie、localStorage 和 sessionStorage 的异同点")]),_._v(" "),o("h3",{attrs:{id:"_1-三者的相同点在于"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-三者的相同点在于"}},[_._v("#")]),_._v(" （1）三者的相同点在于：")]),_._v(" "),o("ul",[o("li",[_._v("都是保存在浏览器端、且同源的。")])]),_._v(" "),o("h3",{attrs:{id:"_2-三者的区别在于"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-三者的区别在于"}},[_._v("#")]),_._v(" （2）三者的区别在于：")]),_._v(" "),o("ul",[o("li",[o("p",[o("strong",[_._v("与服务器通信不同：")])]),_._v(" "),o("p",[o("code",[_._v("cookie")]),_._v(" 数据始终在同源的 "),o("code",[_._v("http")]),_._v(" 请求中携带（即使不需要），即 "),o("code",[_._v("cookie")]),_._v(" 在浏览器和服务器间来回传递，而"),o("strong",[_._v("sessionStorage 和 localStorage 不会自动把数据发送给服务器")]),_._v("，仅在本地保存；")]),_._v(" "),o("p",[o("code",[_._v("cookie")]),_._v(" "),o("strong",[_._v("会")]),_._v("随着 "),o("code",[_._v("http")]),_._v(" 请求被发送出去，而 "),o("code",[_._v("loacalStorage")]),_._v(" 和 "),o("code",[_._v("sessionStorage")]),_._v(" "),o("strong",[_._v("不会")]),_._v("随着 "),o("code",[_._v("http")]),_._v(" 请求被发送出去。")]),_._v(" "),o("p",[o("code",[_._v("cookie")]),_._v(" 数据还有路径（path）的概念，可以限制 "),o("code",[_._v("cookie")]),_._v(" 只属于某个路径下。")])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("存储大小限制也不同：")])]),_._v(" "),o("p",[o("code",[_._v("cookie")]),_._v(" 数据不能超过 4K，同时因为每次 "),o("code",[_._v("http")]),_._v(" 请求都会携带 "),o("code",[_._v("cookie")]),_._v("、所以 "),o("code",[_._v("cookie")]),_._v(" 只适合保存"),o("strong",[_._v("很小的数据")]),_._v("，如"),o("strong",[_._v("会话标识")]),_._v("；")]),_._v(" "),o("p",[o("code",[_._v("sessionStorage")]),_._v(" 和 "),o("code",[_._v("localStorage")]),_._v(" 虽然也有存储大小的限制，但比 "),o("code",[_._v("cookie")]),_._v(" 大得多，可以达到 "),o("code",[_._v("5M")]),_._v(" 或更大。")])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("数据有效期不同：")])]),_._v(" "),o("p",[o("code",[_._v("sessionStorage")]),_._v(" ：仅在当前浏览器窗口关闭之前有效；")]),_._v(" "),o("p",[o("code",[_._v("localStorage")]),_._v(" ：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；")]),_._v(" "),o("p",[o("code",[_._v("cookie")]),_._v(" ：只在设置的 "),o("code",[_._v("cookie")]),_._v(" 过期时间之前有效，即使窗口关闭或浏览器关闭。")])]),_._v(" "),o("li",[o("p",[o("strong",[_._v("作用域不同：")])]),_._v(" "),o("p",[o("code",[_._v("sessionStorage")]),_._v(" "),o("strong",[_._v("不在不同的浏览器窗口中共享")]),_._v("，即使是同一个页面；")]),_._v(" "),o("p",[o("code",[_._v("localstorage")]),_._v(" 和 "),o("code",[_._v("cookie")]),_._v(" 在"),o("strong",[_._v("所有同源窗口中都是共享的")]),_._v("；")])])]),_._v(" "),o("h2",{attrs:{id:"_3、cookie-的用途"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3、cookie-的用途"}},[_._v("#")]),_._v(" 3、cookie 的用途")]),_._v(" "),o("h3",{attrs:{id:"_1-保存用户登录状态"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-保存用户登录状态"}},[_._v("#")]),_._v(" （1）保存用户登录状态")]),_._v(" "),o("p",[_._v("例如将用户 "),o("code",[_._v("id")]),_._v(" 存储于一个 "),o("code",[_._v("cookie")]),_._v(" 内，这样当用户下次访问该页面 时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。")]),_._v(" "),o("p",[o("code",[_._v("cookie")]),_._v(" 还可以设置过期时间，当超过时间期限后，"),o("code",[_._v("cookie")]),_._v(" 就会自动消失。因此，系统往往可以提示用户保持登录状态的时间："),o("strong",[_._v("常见选项有一个月、三个 月、一年等")]),_._v("。")]),_._v(" "),o("h3",{attrs:{id:"_2-跟踪用户行为"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-跟踪用户行为"}},[_._v("#")]),_._v(" （2）跟踪用户行为")]),_._v(" "),o("p",[_._v("例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。 如果每次都需要选择所在地是繁琐的，当利用了 "),o("code",[_._v("cookie")]),_._v(" 后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区 的天气情况。")]),_._v(" "),o("p",[_._v("因为一切都是在后台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用 cookie 来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。")]),_._v(" "),o("h1",{attrs:{id:"三、session-和-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、session-和-token"}},[_._v("#")]),_._v(" 三、session 和 token")]),_._v(" "),o("h3",{attrs:{id:"_1-session"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-session"}},[_._v("#")]),_._v(" （1）Session")]),_._v(" "),o("p",[o("strong",[_._v("举个例子：")])]),_._v(" "),o("ul",[o("li",[o("code",[_._v("session")]),_._v(" 从字面上讲，就是"),o("strong",[_._v("会话")]),_._v("。这个就类似于你和一个人交谈，你怎么知道当前和你交谈的是张三而不是李四呢？对方肯定有某种特征（长相、身高等等）表明他就是张三。")]),_._v(" "),o("li",[o("code",[_._v("session")]),_._v(" 也是类似的道理，服务器要知道当前发请求给自己的是谁。")]),_._v(" "),o("li",[_._v("为了做这种区分，服务器就要给每个客户端分配不同的“"),o("strong",[_._v("身份标识")]),_._v("”，这个身份表示也就是我们平常所说的 "),o("code",[_._v("sessionId")]),_._v(" 。然后客户端每次向服务器发请求的时候，都带上这个“"),o("strong",[_._v("身份标识")]),_._v("”，服务器就知道这个请求来自于谁了。")]),_._v(" "),o("li",[_._v("至于客户端怎么保存这个“"),o("strong",[_._v("身份标识")]),_._v("”，可以有很多种方式，对于浏览器客户端，大部分情况下都默认采用 "),o("code",[_._v("cookie")]),_._v(" 的方式，当然也可以使用 "),o("code",[_._v("localStorage")]),_._v(" 和 "),o("code",[_._v("sessionStorage")]),_._v(" 存储这个"),o("strong",[_._v("身份标识")]),_._v("，大家可以依据自身需求进行使用。")]),_._v(" "),o("li",[_._v("需要注意的是， "),o("code",[_._v("session")]),_._v(" 为一个会话，当页面不同即使是同一页面打开两次，也被视为同一次会话。")]),_._v(" "),o("li",[_._v("服务器使用 "),o("code",[_._v("session")]),_._v(" 把用户的信息"),o("strong",[_._v("临时")]),_._v("保存在了服务器上，用户离开网站后 "),o("code",[_._v("session")]),_._v(" 会被销毁。")]),_._v(" "),o("li",[_._v("这种用户信息存储方式相对 "),o("code",[_._v("cookie")]),_._v(" 来说更安全，但是 "),o("code",[_._v("session")]),_._v(" 有一个"),o("strong",[_._v("缺陷")]),_._v("：如果 web 服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候 "),o("code",[_._v("session")]),_._v(" 会丢失。")])]),_._v(" "),o("p",[o("strong",[_._v("综上所述，对 session 做个总结：")])]),_._v(" "),o("ul",[o("li",[_._v("当程序需要为某个客户端的请求创建一个 "),o("code",[_._v("session")]),_._v(" 时，服务器首先检查这个客户端的请求里是否已包含了一个 "),o("code",[_._v("session")]),_._v(" 标识（ 称为 "),o("code",[_._v("sessionId")]),_._v(" ），如果已包含则说明以前已经为此客户端创建过 "),o("code",[_._v("session")]),_._v(" ，服务器就按照此 "),o("code",[_._v("sessionId")]),_._v(" 把其对应的 "),o("code",[_._v("session")]),_._v(" 检索出来使用（检索不到，会新建一个）；反之，如果客户端请求不包含 "),o("code",[_._v("sessionId")]),_._v(" ，则为客户端创建一个 "),o("code",[_._v("session")]),_._v(" 并且生成一个与此 "),o("code",[_._v("session")]),_._v(" 相关联的 "),o("code",[_._v("sessionId")]),_._v(" ， "),o("code",[_._v("sessionId")]),_._v(" 的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个 "),o("code",[_._v("sessionId")]),_._v(" 将被在本次响应中返回给客户端保存。保存这个 "),o("code",[_._v("sessionId")]),_._v(" 的方式可以采用 "),o("code",[_._v("cookie")]),_._v(" ，也可以是 "),o("code",[_._v("locaStorage")]),_._v(" 和 "),o("code",[_._v("sessionStorage")]),_._v(" ，这样在交互过程中浏览器可以自动的按照规则把这个标识发送给服务器。")])]),_._v(" "),o("h3",{attrs:{id:"_2-token"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-token"}},[_._v("#")]),_._v(" （2）Token")]),_._v(" "),o("ul",[o("li",[o("p",[_._v("在 Web 领域基于 "),o("code",[_._v("Token")]),_._v(" 的身份验证随处可见。在大多数使用 Web API 的互联网公司中， "),o("code",[_._v("token")]),_._v(" 是"),o("strong",[_._v("多用户下处理认证的最佳方式")]),_._v("。")])]),_._v(" "),o("li",[o("p",[_._v("以下"),o("strong",[_._v("几点特性")]),_._v("会让你在程序中使用基于 "),o("code",[_._v("Token")]),_._v(" 的身份验证：")]),_._v(" "),o("ul",[o("li",[_._v("无状态、可扩展；")]),_._v(" "),o("li",[_._v("支持移动设备；")]),_._v(" "),o("li",[_._v("跨程序调用；")]),_._v(" "),o("li",[_._v("安全。")])])]),_._v(" "),o("li",[o("p",[_._v("大部分你见到过的 "),o("code",[_._v("API")]),_._v(" 和 "),o("code",[_._v("Web")]),_._v(" 应用都使用 "),o("code",[_._v("token")]),_._v(" 。例如 "),o("code",[_._v("Facebook")]),_._v(" , "),o("code",[_._v("Twitter")]),_._v(" , "),o("code",[_._v("Google")]),_._v(" , "),o("code",[_._v("GitHub")]),_._v(" 等。")])])]),_._v(" "),o("h1",{attrs:{id:"四、结束语"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、结束语"}},[_._v("#")]),_._v(" 四、结束语")]),_._v(" "),o("p",[_._v("cookie、loacalStorage 和 sessionStorage 是面试中老生常谈的问题了。在学习的过程中，要理解好 cookie、localStorage 和 sessionStorage 的关系，以及 session、sessionId 和 cookie 的关系，只有把它们这几个之间的关系弄明白了，自己才不会一直深陷在一个关系杂圈中。")]),_._v(" "),o("p",[_._v("关于浏览器存储的内容就讲到这里啦！如有疑问或文章有讲的不好的地方欢迎评论区评论或私信我交流~")]),_._v(" "),o("blockquote",[o("ul",[o("li",[o("p",[_._v("关注公众号 "),o("strong",[_._v("星期一研究室")]),_._v(" ，不定期分享学习干货")])]),_._v(" "),o("li",[o("p",[_._v("如果这篇文章对你有用，记得"),o("strong",[_._v("点个赞加个关注")]),_._v("再走哦~")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);