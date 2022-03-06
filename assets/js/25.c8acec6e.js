(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{574:function(_,t,v){"use strict";v.r(t);var e=v(13),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),v("p",[v("code",[_._v("http")]),_._v(" 对于一个前端工程师来说，是非常需要了解的一个知识点，贯穿于整个前端开发的过程。如果说一个前端工程师不知道 "),v("code",[_._v("http")]),_._v(" ，或者说是了解甚少，那他肯定不是一个合格的工程师。那么，"),v("code",[_._v("http")]),_._v(" 对于去前端来说，有什么用呢？")]),_._v(" "),v("ul",[v("li",[_._v("前端工程师在开发界面时，需要用到 "),v("code",[_._v("http")]),_._v(" 协议；")]),_._v(" "),v("li",[_._v("前端在调用后端的接口时，提交(post)或者获取(get)数据时，需要用到 "),v("code",[_._v("http")]),_._v(" 协议；")]),_._v(" "),v("li",[_._v("……")])]),_._v(" "),v("p",[_._v("下面将从多个方面讲解 "),v("code",[_._v("http")]),_._v(" 协议。")]),_._v(" "),v("h1",{attrs:{id:"一、http-状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、http-状态码"}},[_._v("#")]),_._v(" 一、http 状态码")]),_._v(" "),v("h2",{attrs:{id:"_1、引例阐述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、引例阐述"}},[_._v("#")]),_._v(" 1、引例阐述")]),_._v(" "),v("p",[_._v("在讲状态吗之前，我们先来了解什么是状态码。比如百度网站：")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210523112045274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"百度状态码"}})]),_._v(" "),v("p",[_._v("大家可以看到，上图中圈红圈的部分就是 "),v("code",[_._v("http")]),_._v(" 的状态码，常见的状态码有 200,400,404 等等。接下来对状态码的一些基础知识进行介绍。")]),_._v(" "),v("h2",{attrs:{id:"_2、状态码分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、状态码分类"}},[_._v("#")]),_._v(" 2、状态码分类")]),_._v(" "),v("p",[_._v("下表给出状态码分类。")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("状态码")]),_._v(" "),v("th",[_._v("含义")]),_._v(" "),v("th",[_._v("解释说明")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("1xx")]),_._v(" "),v("td",[_._v("服务器收到请求")]),_._v(" "),v("td",[_._v("收到 1xx 开头的请求表示服务端已经收到请求，但是还没有返回信息给客户端")])]),_._v(" "),v("tr",[v("td",[_._v("2xx")]),_._v(" "),v("td",[_._v("请求成功，如 200")]),_._v(" "),v("td",[_._v("表示客户端已经成功请求数据")])]),_._v(" "),v("tr",[v("td",[_._v("3xx")]),_._v(" "),v("td",[_._v("重定向，如 302")]),_._v(" "),v("td",[_._v("客户端收到 3xx 开头的状态码时，表示此时服务端已经不再管客户端所请求地址，让客户端去请求另外的地址")])]),_._v(" "),v("tr",[v("td",[_._v("4xx")]),_._v(" "),v("td",[_._v("客户端错误，404")]),_._v(" "),v("td",[_._v("表示当客户端请求了一个服务端完全不认识的地址时，就会报出 4xx 的错误")])]),_._v(" "),v("tr",[v("td",[_._v("5xx")]),_._v(" "),v("td",[_._v("服务端错误，如 500")]),_._v(" "),v("td",[_._v("表示此错误来源于服务端，比如服务端写的接口出现了 bug 等问题")])])])]),_._v(" "),v("h2",{attrs:{id:"_3、常见状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、常见状态码"}},[_._v("#")]),_._v(" 3、常见状态码")]),_._v(" "),v("p",[_._v("常见的有 200（正常） 、404（无法找到该网页资源） 、304（跳转页面） 、500（服务器错误）等，"),v("strong",[_._v("具体如下：")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("状态码")]),_._v(" "),v("th",[_._v("含义")]),_._v(" "),v("th",[_._v("用途")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("200")]),_._v(" "),v("td",[_._v("OK 成功")]),_._v(" "),v("td",[_._v("一般用于 GET 和 POST 请求")])]),_._v(" "),v("tr",[v("td",[_._v("301")]),_._v(" "),v("td",[_._v("Redirect Permanently 永久重定向")]),_._v(" "),v("td",[_._v("配合 location，浏览器自动处理")])]),_._v(" "),v("tr",[v("td",[_._v("302")]),_._v(" "),v("td",[_._v("Found 临时重定向")]),_._v(" "),v("td",[_._v("配合 location，浏览器自动处理")])]),_._v(" "),v("tr",[v("td",[_._v("304")]),_._v(" "),v("td",[_._v("Not Modified 资源未被修改")]),_._v(" "),v("td",[_._v("所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源")])]),_._v(" "),v("tr",[v("td",[_._v("404")]),_._v(" "),v("td",[_._v("Not Found 资源未找到")]),_._v(" "),v("td",[_._v('服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站 设计人员可设置"您所请求的资源无法找到"的个性页面')])]),_._v(" "),v("tr",[v("td",[_._v("403")]),_._v(" "),v("td",[_._v("Forbidden 没有权限")]),_._v(" "),v("td",[_._v("服务器理解请求客户端的请求，但是拒绝执行此请求")])]),_._v(" "),v("tr",[v("td",[_._v("500")]),_._v(" "),v("td",[_._v("Internal server Error 服务器错误")]),_._v(" "),v("td",[_._v("服务器内部错误")])]),_._v(" "),v("tr",[v("td",[_._v("504")]),_._v(" "),v("td",[_._v("Gateway Time-out 网关超时")]),_._v(" "),v("td",[_._v("充当网关或代理的服务器，未及时从远端服务器获取请求")])])])]),_._v(" "),v("p",[_._v("下面详细阐述 "),v("code",[_._v("301")]),_._v(" 和 "),v("code",[_._v("302")]),_._v(" 。")]),_._v(" "),v("p",[v("strong",[_._v("301 永久重定向：")])]),_._v(" "),v("p",[_._v("常见场景有，比如说你的一个网站，域名到期了，或者域名你不想用了，那么老的域名就可以返回一个 301 状态码并配合 location 让 location 的值等于新的域名，最终进行跳转，之后浏览器会记住新的域名，不会再访问老的域名。")]),_._v(" "),v("p",[v("strong",[_._v("302 临时重定向：")])]),_._v(" "),v("p",[_._v("常见场景有百度，知乎、简书等等。比如说我们要在百度进入菜鸟教程，搜索出来后有一系列的列表，我们可以选择一个去进行一个点击。点击的那个不会直接进入菜鸟教程，而是先跳转到百度设置的一个临时地址，之后再跳转到菜鸟教程真实的地址。")]),_._v(" "),v("h2",{attrs:{id:"_4、关于协议和规范"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、关于协议和规范"}},[_._v("#")]),_._v(" 4、关于协议和规范")]),_._v(" "),v("ul",[v("li",[_._v("http 协议就是一个约定，一个规范，要求大家都跟着执行；")]),_._v(" "),v("li",[_._v("因此不要做违规范的事情，例如 "),v("code",[_._v("IE")]),_._v(" 浏览器，违反规范终将会落下被历史淘汰的局面。")])]),_._v(" "),v("h1",{attrs:{id:"二、http-方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、http-方法"}},[_._v("#")]),_._v(" 二、http 方法")]),_._v(" "),v("h2",{attrs:{id:"_1、传统的-methods"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、传统的-methods"}},[_._v("#")]),_._v(" 1、传统的 methods")]),_._v(" "),v("ul",[v("li",[_._v("get 获取服务器的数据；")]),_._v(" "),v("li",[_._v("post 向服务器提交数据；")]),_._v(" "),v("li",[_._v("head 用户获取报头。")])]),_._v(" "),v("h2",{attrs:{id:"_2、现在的-methods"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、现在的-methods"}},[_._v("#")]),_._v(" 2、现在的 methods")]),_._v(" "),v("ul",[v("li",[_._v("get 获取数据；")]),_._v(" "),v("li",[_._v("post 新建数据；")]),_._v(" "),v("li",[_._v("patch/put 更新数据；")]),_._v(" "),v("li",[_._v("delete 删除数据；")]),_._v(" "),v("li",[_._v("head，类似于 get 请求，只不过返回的响应中没有具体的内容，用户获取报头；")]),_._v(" "),v("li",[_._v("options，允许客户端查看服务器的性能，比如说服务器支持的请求方式等等；")]),_._v(" "),v("li",[_._v("trace，追踪路径；")]),_._v(" "),v("li",[_._v("connect，要求用隧道协议连接代理。")])]),_._v(" "),v("h2",{attrs:{id:"_3、restful-api"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、restful-api"}},[_._v("#")]),_._v(" 3、Restful API")]),_._v(" "),v("h3",{attrs:{id:"_1-restful-api-是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-restful-api-是什么"}},[_._v("#")]),_._v(" （1）Restful API 是什么？")]),_._v(" "),v("ul",[v("li",[v("p",[v("code",[_._v("Restful API")]),_._v(" 是一种新的 "),v("code",[_._v("API")]),_._v(" 设计方法（早已推广使用）。")])]),_._v(" "),v("li",[v("p",[_._v("传统 "),v("code",[_._v("API")]),_._v(" 设计：把每个 "),v("code",[_._v("url")]),_._v(" 当做一个功能。")])]),_._v(" "),v("li",[v("p",[v("code",[_._v("Restful API")]),_._v(" 设计：把每个 "),v("code",[_._v("url")]),_._v(" 当做一个唯一的资源。")])])]),_._v(" "),v("h3",{attrs:{id:"_2-如何设计成一个资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何设计成一个资源"}},[_._v("#")]),_._v(" （2）如何设计成一个资源？")]),_._v(" "),v("p",[v("strong",[_._v("1）尽量不用 url 参数")])]),_._v(" "),v("ul",[v("li",[_._v("传统 "),v("code",[_._v("API")]),_._v(" 设计："),v("code",[_._v("/api/list?pageIndex=2")])]),_._v(" "),v("li",[v("code",[_._v("Restful API")]),_._v(" 设计："),v("code",[_._v("/api/list/2")])])]),_._v(" "),v("p",[v("strong",[_._v("2）用 method 表示操作类型")])]),_._v(" "),v("p",[_._v("传统 "),v("code",[_._v("API")]),_._v(" 设计：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("post 请求：/api/create-article")])]),_._v(" "),v("li",[v("p",[_._v("post 请求：/api/update-article?id=100")])]),_._v(" "),v("li",[v("p",[_._v("get 请求：/api/get-article?id=100")])])]),_._v(" "),v("p",[v("code",[_._v("Restful API")]),_._v(" 设计：")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("post 请求：/api/article")])]),_._v(" "),v("li",[v("p",[_._v("post 请求：/api/article/100")])]),_._v(" "),v("li",[v("p",[_._v("get 请求：/api/article/100")])])]),_._v(" "),v("h1",{attrs:{id:"三、http-头部-http-headers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、http-头部-http-headers"}},[_._v("#")]),_._v(" 三、http 头部（http headers）")]),_._v(" "),v("h2",{attrs:{id:"_1、常见的-request-headers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、常见的-request-headers"}},[_._v("#")]),_._v(" 1、常见的 Request headers")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("请求头")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Accept")]),_._v(" "),v("td",[_._v("浏览器可接收的数据格式")])]),_._v(" "),v("tr",[v("td",[_._v("Accept-Encoding")]),_._v(" "),v("td",[_._v("浏览器可以接收的算法，如 gzip")])]),_._v(" "),v("tr",[v("td",[_._v("Accept-Language")]),_._v(" "),v("td",[_._v("浏览器可接收的语言，如 zh-CN")])]),_._v(" "),v("tr",[v("td",[_._v("Connection")]),_._v(" "),v("td",[_._v("keep-alive 一次 TCP 连接重复使用")])]),_._v(" "),v("tr",[v("td",[_._v("cookie")]),_._v(" "),v("td",[_._v("客户端接收到的 Cookie 信息")])]),_._v(" "),v("tr",[v("td",[_._v("Host")]),_._v(" "),v("td",[_._v("指定原始的 URL 中的主机和端口")])]),_._v(" "),v("tr",[v("td",[_._v("User-Agent（简称 UA）")]),_._v(" "),v("td",[_._v("浏览器内核信息")])]),_._v(" "),v("tr",[v("td",[_._v("Content-type")]),_._v(" "),v("td",[_._v("发送数据的格式，如 application/json")])])])]),_._v(" "),v("h2",{attrs:{id:"_2、常见的-response-headers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、常见的-response-headers"}},[_._v("#")]),_._v(" 2、常见的 Response headers")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("响应头")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("Content-type")]),_._v(" "),v("td",[_._v("返回数据的格式，如 application/json")])]),_._v(" "),v("tr",[v("td",[_._v("Content-length")]),_._v(" "),v("td",[_._v("返回数据的大小，多少字节")])]),_._v(" "),v("tr",[v("td",[_._v("Content-Encoding")]),_._v(" "),v("td",[_._v("返回数据的压缩算法，如 gzip")])]),_._v(" "),v("tr",[v("td",[_._v("Set-Cookie")]),_._v(" "),v("td",[_._v("服务端向客户端设置 cookie")])])])]),_._v(" "),v("h1",{attrs:{id:"四、http-缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、http-缓存"}},[_._v("#")]),_._v(" 四、http 缓存")]),_._v(" "),v("h2",{attrs:{id:"_1、关于缓存的介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、关于缓存的介绍"}},[_._v("#")]),_._v(" 1、关于缓存的介绍")]),_._v(" "),v("h3",{attrs:{id:"_1-什么是缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是缓存"}},[_._v("#")]),_._v(" （1）什么是缓存")]),_._v(" "),v("p",[_._v("缓存是一种保存"),v("strong",[_._v("资源副本")]),_._v("并在下次请求时直接使用该副本的技术。")]),_._v(" "),v("h3",{attrs:{id:"_2-为什么需要缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么需要缓存"}},[_._v("#")]),_._v(" （2）为什么需要缓存？")]),_._v(" "),v("p",[_._v("如果没有缓存的话，每一次网络请求都要加载大量的图片和资源，这会使页面的加载变慢许多。那缓存的目的其实就是为了尽量减少网络请求的体积和数量，让页面加载的更快。")]),_._v(" "),v("h3",{attrs:{id:"_3-哪些资源可以被缓存-静态资源-js、css、img"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-哪些资源可以被缓存-静态资源-js、css、img"}},[_._v("#")]),_._v(" （3）哪些资源可以被缓存？——静态资源（js、css、img）")]),_._v(" "),v("ul",[v("li",[_._v("网站的 "),v("code",[_._v("html")]),_._v(" 是不能被缓存的。因为网站在使用过程中 "),v("code",[_._v("html")]),_._v(" 随时有可能被更新，随时有可能被替换模板。")]),_._v(" "),v("li",[_._v("网页的业务数据也是不能被缓存的。比如留言板和评论区，用户随时都可以在底下评论，那数据库的内容就会被频繁被更新。")])]),_._v(" "),v("h2",{attrs:{id:"_2、http-缓存策略-强制缓存-协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、http-缓存策略-强制缓存-协商缓存"}},[_._v("#")]),_._v(" 2、http 缓存策略（强制缓存 + 协商缓存）")]),_._v(" "),v("h3",{attrs:{id:"_1-强制缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-强制缓存"}},[_._v("#")]),_._v(" （1）强制缓存")]),_._v(" "),v("h4",{attrs:{id:"_1-强制缓存是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-强制缓存是什么"}},[_._v("#")]),_._v(" 1）强制缓存是什么？")]),_._v(" "),v("p",[_._v("强制缓存就是文件直接从本地缓存中获取，不需要发送请求。")]),_._v(" "),v("h4",{attrs:{id:"_2-图例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-图例"}},[_._v("#")]),_._v(" 2）图例")]),_._v(" "),v("p",[_._v("先看第一个图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214017800.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"强制缓存 图1"}})]),_._v(" "),v("p",[_._v("从上图可以看到，当初次请求时，浏览器会向服务器发起请求，服务器接收到浏览器的请求后，返回资源并返回一个 "),v("code",[_._v("Cache-Control")]),_._v(" 给客户端，该 "),v("code",[_._v("Cache-Control")]),_._v(" 一般设置缓存的最大过期时间。")]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("接下来看第二个图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214026954.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"强制缓存 图2"}})]),_._v(" "),v("p",[_._v("从上图中可以看到，此时浏览器已经接收到 cache-control 的值，那么这个时候浏览器再次发送请求时，它会先检查它的 cache-control 是否过期，如果没有过期则直接从本地缓存中拉取资源，返回到客户端，而无需再经过服务器。")]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("接下来看第三个图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214036428.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"强制缓存 图3"}})]),_._v(" "),v("p",[_._v("强制缓存有"),v("strong",[_._v("过期时间")]),_._v("，那么就意味着总有一天缓存会失效。那么假设某一天，客户端的 "),v("code",[_._v("cache-control")]),_._v(" 失效了，那么它就没办法从本地缓存中拉取资源。于是它会像第一张图一样，重新向服务器发起请求，之后服务器会再次返回资源和 "),v("code",[_._v("cache-control")]),_._v(" 的值。")]),_._v(" "),v("p",[_._v("以上就是强制缓存的全过程。")]),_._v(" "),v("h4",{attrs:{id:"_3-cache-control"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-cache-control"}},[_._v("#")]),_._v(" 3）Cache-Control")]),_._v(" "),v("p",[v("strong",[_._v("Cache-Control 是什么？")])]),_._v(" "),v("ul",[v("li",[_._v("存在于响应头 Response Headers 中；")]),_._v(" "),v("li",[_._v("控制强制缓存的逻辑；")]),_._v(" "),v("li",[_._v("例如："),v("code",[_._v("Cache-Control: max-age = 31536000")]),_._v("（单位是秒）。")])]),_._v(" "),v("p",[v("strong",[_._v("Cache-Control 的值")])]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("Cache-Control 值")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("max-age")]),_._v(" "),v("td",[_._v("设置缓存的最大过期时间")])]),_._v(" "),v("tr",[v("td",[_._v("no-cache")]),_._v(" "),v("td",[_._v("不用本地缓存，正常的向服务端请求，服务端怎么处理我们不用管")])]),_._v(" "),v("tr",[v("td",[_._v("no-store")]),_._v(" "),v("td",[_._v("简单粗暴，直接从服务端拉取缓存")])]),_._v(" "),v("tr",[v("td",[_._v("private")]),_._v(" "),v("td",[_._v("只能允许最终用户做缓存，最终用户即电脑、手机等等")])]),_._v(" "),v("tr",[v("td",[_._v("public")]),_._v(" "),v("td",[_._v("允许中间路由或中间代理做缓存")])])])]),_._v(" "),v("h4",{attrs:{id:"_4-关于-expires"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-关于-expires"}},[_._v("#")]),_._v(" 4）关于 Expires")]),_._v(" "),v("ul",[v("li",[_._v("同在 "),v("code",[_._v("Response Headers")]),_._v(" 中")]),_._v(" "),v("li",[_._v("同为控制缓存的过期时间（早期使用）")]),_._v(" "),v("li",[_._v("如果 "),v("code",[_._v("cache-control 与 expires")]),_._v(" 同时存在的话， "),v("code",[_._v("cache-control")]),_._v(" 的优先级高于 "),v("code",[_._v("expires")])])]),_._v(" "),v("h3",{attrs:{id:"_2-协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-协商缓存"}},[_._v("#")]),_._v(" （2）协商缓存")]),_._v(" "),v("p",[v("strong",[_._v("1）协商缓存是什么？")])]),_._v(" "),v("ul",[v("li",[_._v("协商缓存，也叫对比缓存。")]),_._v(" "),v("li",[_._v("它是一种"),v("strong",[_._v("服务端的缓存策略")]),_._v("，即通过服务端来判断某件事情是不是可以被缓存。")]),_._v(" "),v("li",[_._v("服务端判断客户端的资源，是否和服务端资源一样，如果一致则返回 "),v("code",[_._v("304")]),_._v(" ，反之返回 "),v("code",[_._v("200")]),_._v(" 和最新的资源。")])]),_._v(" "),v("p",[v("strong",[_._v("2）图例")])]),_._v(" "),v("p",[_._v("同样地，用几张图来演示协商缓存。")]),_._v(" "),v("p",[_._v("先来看第一张图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214052652.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"协商缓存 图1"}})]),_._v(" "),v("p",[_._v("在上图中，表明了协商缓存的全过程。首先，如果客户端是第一次向服务器发出请求，则服务器返回资源和相对应的资源标识给浏览器。该资源标识就是对当前所返回资源的一种唯一标识，可以是 Etag 或者是 Last-Modified，这两个字段将在图例结束后展开讲解。")]),_._v(" "),v("p",[_._v("之后如果浏览器再次发送请求时，浏览器就会带上这个资源标识。此时，服务端就会通过这个资源标识，可以判断出浏览器的资源跟服务端此时的资源是否一致，如果一致，则返回 304，即表示 Not Found 资源未修改。如果判断结果为不一致，则返回 200，并返回资源以及新的资源标识。至此就结束了协商缓存的过程。")]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("接下来看第二张图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214101889.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"协商缓存 图2"}})]),_._v(" "),v("p",[_._v("假设此时我们的协商缓存用 "),v("code",[_._v("Last-Modified")]),_._v(" 来判断。当浏览器第一次发送请求时，服务器返回资源并返回一个 "),v("code",[_._v("Last-Modified")]),_._v(" 的值给浏览器。这个 "),v("code",[_._v("Last-Modified")]),_._v(" 的值给到浏览器之后，浏览器会通过 "),v("code",[_._v("If-Modified-Since")]),_._v(" 的字段来保存 "),v("code",[_._v("Last-Modified")]),_._v(" 的值，且 "),v("code",[_._v("If-Modified-Since")]),_._v(" 保存在请求头当中。")]),_._v(" "),v("p",[_._v("之后当浏览器再次发送请求时，请求头会带着 "),v("code",[_._v("If-Modified-Since")]),_._v(" 的值去找服务器，服务器此刻就会匹配浏览器发过来的 "),v("code",[_._v("If-Modified-Since")]),_._v(" 是否和自己最后一次修改的 "),v("code",[_._v("Last-Modified")]),_._v(" 的值相等。如果相等，则返回 "),v("code",[_._v("304")]),_._v(" ，表示资源未被修改；如果不相等，则返回 200，并返回资源和新的 "),v("code",[_._v("Last-Modified")]),_._v(" 的值。")]),_._v(" "),v("hr"),_._v(" "),v("p",[_._v("接下来看第三张图。")]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214118105.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"协商缓存 图3"}})]),_._v(" "),v("p",[_._v("假设此时我们的协商缓存用 "),v("code",[_._v("Etag")]),_._v(" 来判断。当浏览器第一次发送请求时，服务器返回资源并返回一个 "),v("code",[_._v("Etag")]),_._v(" 的值给浏览器。这个 "),v("code",[_._v("Etag")]),_._v(" 的值给到浏览器之后，浏览器会通过 "),v("code",[_._v("If-None-Match")]),_._v(" 的字段来保存 "),v("code",[_._v("Etag")]),_._v(" 的值，且 "),v("code",[_._v("If-None-Match")]),_._v(" 保存在请求头当中。")]),_._v(" "),v("p",[_._v("之后当浏览器再次发送请求时，请求头会带着 "),v("code",[_._v("If-Modified-Since")]),_._v(" 的值去找服务器，服务器此刻就会匹配浏览器发过来的 "),v("code",[_._v("If-None-Match")]),_._v(" 是否和自己最后一次修改的 "),v("code",[_._v("Etag")]),_._v(" 的值相等。如果相等，则返回 "),v("code",[_._v("304")]),_._v(" ，表示资源未被修改；如果不相等，则返回 "),v("code",[_._v("200")]),_._v(" ，并返回资源和新的 "),v("code",[_._v("Etag")]),_._v(" 的值。")]),_._v(" "),v("p",[_._v("通过图例，相信大家对协商缓存有了一个新的认识。接下来讲解刚刚图例中所包含的一些字段。")]),_._v(" "),v("p",[v("strong",[_._v("3）资源标识")])]),_._v(" "),v("p",[_._v("在响应头部 "),v("code",[_._v("Response Headers")]),_._v(" 中，"),v("strong",[_._v("有两种资源标识：")])]),_._v(" "),v("ul",[v("li",[v("code",[_._v("Last-Modified")]),_._v(" 资源的最后修改时间，对应请求头为 "),v("code",[_._v("If-Modified-Since")]),_._v(" ；")]),_._v(" "),v("li",[v("code",[_._v("Etag")]),_._v(" 资源的唯一标识，所谓唯一，可以想象成时人类的指纹，具有唯一性；但 "),v("code",[_._v("Etag")]),_._v(" 的本质是一个字符串；对应请求头为 "),v("code",[_._v("If-None-Match")]),_._v(" 。")])]),_._v(" "),v("p",[v("strong",[_._v("4）Last-Modified 和 Etag")])]),_._v(" "),v("ul",[v("li",[_._v("当响应头部 "),v("code",[_._v("Response Headers")]),_._v(" 同时存在 "),v("code",[_._v("Last-Modified")]),_._v(" 和 "),v("code",[_._v("Etag")]),_._v(" 的值时，会优先使用 "),v("code",[_._v("Etag")]),_._v(" ；")]),_._v(" "),v("li",[v("code",[_._v("Last-Modified")]),_._v(" 只能精确到秒级；")]),_._v(" "),v("li",[_._v("如果资源被重复生成，而内容不变，则 "),v("code",[_._v("Etag")]),_._v(" 更精确。")])]),_._v(" "),v("p",[v("strong",[_._v("5)Headers 示例")])]),_._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210530214133365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"Headers 实例"}})]),_._v(" "),v("p",[_._v("由上图可以看到，响应头中的 "),v("code",[_._v("Last-Modified")]),_._v(" 对应请求头中的 "),v("code",[_._v("If-Modified-Since")]),_._v(" ， "),v("code",[_._v("Etag")]),_._v(" 对应请求头中的 "),v("code",[_._v("If-None-Match")]),_._v(" 。")]),_._v(" "),v("p",[v("strong",[_._v("6）流程图")])]),_._v(" "),v("p",[_._v("说到这里，协商缓存的内容也快结束啦！最后的最后，我们用一张流程图来展示协商缓存的全过程。\n"),v("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210523112312437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center",alt:"协商缓存流程图"}})]),_._v(" "),v("h2",{attrs:{id:"_3、刷新操作方式-对缓存的影响"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、刷新操作方式-对缓存的影响"}},[_._v("#")]),_._v(" 3、刷新操作方式，对缓存的影响")]),_._v(" "),v("p",[_._v("讲完缓存，我们再来讲个有点重要但是有点题外话的内容：刷新操作。我们平常在上网时，总有某个时刻突然网卡了，这个时候人的本性总是非常不耐烦的，毫不犹豫的就来个刷新。但殊不知，刷新对缓存也存在一定的影响。下面我们一起来看下各种刷新姿势以及其对缓存的影响。")]),_._v(" "),v("h3",{attrs:{id:"_1-正常操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-正常操作"}},[_._v("#")]),_._v(" （1）正常操作")]),_._v(" "),v("p",[v("strong",[_._v("定义：")]),_._v(" 地址栏输入 "),v("code",[_._v("url")]),_._v(" ，跳转链接，前进后退等。")]),_._v(" "),v("p",[v("strong",[_._v("对缓存的影响：")]),_._v(" 强制缓存有效，协商缓存有效。")]),_._v(" "),v("h3",{attrs:{id:"_2-手动刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-手动刷新"}},[_._v("#")]),_._v(" （2）手动刷新")]),_._v(" "),v("p",[v("strong",[_._v("定义：")]),_._v(" "),v("code",[_._v("F5")]),_._v(" ，点击刷新按钮，右击菜单刷新。")]),_._v(" "),v("p",[v("strong",[_._v("对缓存的影响：")]),_._v(" 强制缓存失效，协商缓存有效。")]),_._v(" "),v("h3",{attrs:{id:"_3-强制刷新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-强制刷新"}},[_._v("#")]),_._v(" （3）强制刷新")]),_._v(" "),v("p",[v("strong",[_._v("定义：")]),_._v(" "),v("code",[_._v("ctrl")]),_._v(" + "),v("code",[_._v("F5")]),_._v(" 。")]),_._v(" "),v("p",[v("strong",[_._v("对缓存的影响：")]),_._v(" 强制缓存失效，协商缓存失效。")]),_._v(" "),v("p",[_._v("这一块内容仅当娱乐补充，大家可以根据自身需求学习~")]),_._v(" "),v("h1",{attrs:{id:"五、写在最后"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、写在最后"}},[_._v("#")]),_._v(" 五、写在最后")]),_._v(" "),v("p",[_._v("http 协议对于开发来说时很重要很重要的一块内容，不管时前端还是后端，对于常见的状态码，请求方法请求头和响应头，还有强缓存和协商缓存都是必须要了解的知识点。")]),_._v(" "),v("p",[_._v("关于 http 协议的知识就讲到这里啦！如有疑问或文章有讲的不好的地方欢迎评论区评论或私信我交流~")]),_._v(" "),v("blockquote",[v("ul",[v("li",[v("p",[_._v("关注公众号 "),v("strong",[_._v("星期一研究室")]),_._v(" ，不定期分享学习干货")])]),_._v(" "),v("li",[v("p",[_._v("如果这篇文章对你有用，记得"),v("strong",[_._v("点个赞加个关注")]),_._v("再走哦~")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);