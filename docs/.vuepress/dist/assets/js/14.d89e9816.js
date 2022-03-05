(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{567:function(t,s,a){"use strict";a.r(s);var n=a(13),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在我们日常的生活中，经常会碰到贪心算法和回溯算法的应用场景。比如，贪心算法常应用于最少硬币找零问题，分数背包等问题。而回溯算法常用于迷宫求解、N 皇后等问题。这两种各有各的优点，也各有各的不足。")]),t._v(" "),a("p",[t._v("在下面的这篇文章中，将讲解贪心算法和回溯算法的常见应用场景，以及分析高频 "),a("code",[t._v("leetcode")]),t._v(" 算法题。")]),t._v(" "),a("p",[t._v("一起来学习 ⑧📖")]),t._v(" "),a("h1",{attrs:{id:"一、贪心算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、贪心算法"}},[t._v("#")]),t._v(" 一、贪心算法")]),t._v(" "),a("h2",{attrs:{id:"_1、贪心算法是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、贪心算法是什么"}},[t._v("#")]),t._v(" 1、贪心算法是什么？")]),t._v(" "),a("ul",[a("li",[t._v("贪心算法是"),a("strong",[t._v("算法设计")]),t._v("中的一种方法。")]),t._v(" "),a("li",[t._v("期盼通过每个阶段的"),a("strong",[t._v("局部最优")]),t._v("选择，从而达到全局的最优。")]),t._v(" "),a("li",[t._v("结果"),a("strong",[t._v("不一定最优")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_2、应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、应用场景"}},[t._v("#")]),t._v(" 2、应用场景")]),t._v(" "),a("ul",[a("li",[t._v("最少硬币找零问题")]),t._v(" "),a("li",[t._v("分数背包问题")]),t._v(" "),a("li",[t._v("……")])]),t._v(" "),a("h2",{attrs:{id:"_3、场景剖析-零钱兑换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、场景剖析-零钱兑换"}},[t._v("#")]),t._v(" 3、场景剖析：零钱兑换")]),t._v(" "),a("p",[t._v("先用一张图来描述输入输出结果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/cc24093ed5b62b488b39c45dd78e8768.png",alt:"贪心算法场景：零钱兑换"}})]),t._v(" "),a("p",[t._v("从上图中可以看到，如果用贪心算法解决零钱兑换问题的话，它会先从最大面额的硬币开始，拿尽可能多的这种硬币找零。当无法再拿更多这种价值的硬币时，开始拿第二大价值的硬币，依次继续。")]),t._v(" "),a("p",[t._v("大家可以发现，如果是第一种情况，确实可以达到理论最优。但是如果是第二种情况的话，还有一种更优的解法，那就是 6 = 3 + 3。所以说，贪心算法并不总是能得到最优答案。")]),t._v(" "),a("p",[a("strong",[t._v("但是呢，虽说不能总是能得到最优答案，那我们为什么还有用它呢？")])]),t._v(" "),a("p",[t._v("比起动态规则算法而言，贪心算法"),a("strong",[t._v("更简单")]),t._v("、"),a("strong",[t._v("更快")]),t._v("。虽然它并不总是能得到最优的答案，但是综合来看，它"),a("strong",[t._v("相对执行时间")]),t._v("来说，输出了一个可以接受的解。")]),t._v(" "),a("h1",{attrs:{id:"二、回溯算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、回溯算法"}},[t._v("#")]),t._v(" 二、回溯算法")]),t._v(" "),a("h2",{attrs:{id:"_1、回溯算法是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、回溯算法是什么"}},[t._v("#")]),t._v(" 1、回溯算法是什么？")]),t._v(" "),a("ul",[a("li",[t._v("回溯算法是"),a("strong",[t._v("算法设计")]),t._v("中的一种方法。")]),t._v(" "),a("li",[t._v("回溯算法是一种"),a("strong",[t._v("渐进式")]),t._v("寻找并构建问题解决方式的策略。")]),t._v(" "),a("li",[t._v("回溯算法会先从一个可能的动作开始解决问题，如果不行，就回溯选择另一个动作，直到将问题解决。")])]),t._v(" "),a("h2",{attrs:{id:"_2、什么问题适合选用回溯算法解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么问题适合选用回溯算法解决"}},[t._v("#")]),t._v(" 2、什么问题适合选用回溯算法解决？")]),t._v(" "),a("ul",[a("li",[t._v("有"),a("strong",[t._v("很多路")]),t._v("。")]),t._v(" "),a("li",[t._v("这些路里面，有"),a("strong",[t._v("死路")]),t._v("，有"),a("strong",[t._v("活路")]),t._v("。")]),t._v(" "),a("li",[t._v("通常需要递归来模拟所有的路。")])]),t._v(" "),a("h2",{attrs:{id:"_2、应用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、应用场景-2"}},[t._v("#")]),t._v(" 2、应用场景")]),t._v(" "),a("ul",[a("li",[t._v("迷宫老鼠问题")]),t._v(" "),a("li",[t._v("数独解题器")]),t._v(" "),a("li",[t._v("骑士巡逻问题")]),t._v(" "),a("li",[t._v("N 皇后问题")]),t._v(" "),a("li",[t._v("……")])]),t._v(" "),a("h2",{attrs:{id:"_3、场景剖析-全排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、场景剖析-全排列"}},[t._v("#")]),t._v(" 3、场景剖析：全排列")]),t._v(" "),a("p",[t._v("先用一张图来战术输入输出的过程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6983d50187af857f2243886f366d4ad1.png",alt:"回溯算法场景：全排列"}})]),t._v(" "),a("p",[t._v("从上图中可以看到，全排列 [1, 2, 3] 三个元素，在递归的过程中会有很多种结果，比如说[1, 1, 2]，[1, 2, 1], [1, 2, 2]之类的结果。那么，当出现重复元素的时候，就会出现死路，这个时候就应该回退回去并去寻找下一条路活路走出去。这就是回溯算法要解决的问题。")]),t._v(" "),a("h1",{attrs:{id:"三、贪心算法常见应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、贪心算法常见应用"}},[t._v("#")]),t._v(" 三、贪心算法常见应用")]),t._v(" "),a("p",[t._v("引用 leetcode 的几道经典题目来强化"),a("strong",[t._v("贪心算法")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1、leetcode-455-分发饼干"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、leetcode-455-分发饼干"}},[t._v("#")]),t._v(" 1、leetcode 455：分发饼干")]),t._v(" "),a("p",[a("strong",[t._v("（1）题意")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/assign-cookies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里附上原题链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。")]),t._v(" "),a("p",[t._v("对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。")]),t._v(" "),a("p",[a("strong",[t._v("输入输出示例：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("输入")]),t._v(": g = [1,2,3], s = [1,1]")]),t._v(" "),a("li",[a("strong",[t._v("输出")]),t._v(": 1")]),t._v(" "),a("li",[a("strong",[t._v("解释")]),t._v(":\n"),a("ul",[a("li",[t._v("你有三个孩子和两块小饼干，3 个孩子的胃口值分别是：1,2,3。")]),t._v(" "),a("li",[t._v("虽然你有两块小饼干，由于他们的尺寸都是 1，你只能让胃口值是 1 的孩子满足。")]),t._v(" "),a("li",[t._v("所以你应该输出 1。")])])])]),t._v(" "),a("p",[a("strong",[t._v("（2）解题思路")])]),t._v(" "),a("ul",[a("li",[t._v("既能满足孩子，还消耗最少。")]),t._v(" "),a("li",[t._v("先将“较小的饼干”分给“胃口较小”的孩子。")])]),t._v(" "),a("p",[a("strong",[t._v("（3）解题步骤")])]),t._v(" "),a("ul",[a("li",[t._v("对饼干数组和胃口数组升序降序。")]),t._v(" "),a("li",[t._v("遍历饼干数组，找到能满足第一个孩子的饼干。")]),t._v(" "),a("li",[t._v("然后继续遍历饼干数组，找到能满足第二、三、四、……、n 个孩子的饼干。")])]),t._v(" "),a("p",[a("strong",[t._v("（4）代码实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} g 孩子胃口\n * @param {number[]} s 饼干尺寸\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("findContentChildren")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现升序排序")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sortFunc")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对g进行升序排序，即从小到大排序")]),t._v("\n  g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sortFunc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对s进行升序排序，即从小到大排序")]),t._v("\n  s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sortFunc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义初始值，记录饼干能满足多少个孩子")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//对排序后的饼干进行一一遍历，并逐一与孩子的胃口比对，如果能满足，则对i进行+1操作")]),t._v("\n  s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("findContentChildren")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2、leetcode-122-买卖股票的最佳时机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、leetcode-122-买卖股票的最佳时机"}},[t._v("#")]),t._v(" 2、leetcode 122：买卖股票的最佳时机")]),t._v(" "),a("p",[a("strong",[t._v("（1）题意")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里附上原题链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。")]),t._v(" "),a("p",[t._v("设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。")]),t._v(" "),a("p",[t._v("注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。")]),t._v(" "),a("p",[a("strong",[t._v("输入输出示例：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("输入")]),t._v(": prices = [7,1,5,3,6,4]")]),t._v(" "),a("li",[a("strong",[t._v("输出")]),t._v(": 7")]),t._v(" "),a("li",[a("strong",[t._v("解释")]),t._v(":\n"),a("ul",[a("li",[t._v("在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。")]),t._v(" "),a("li",[t._v("随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。")])])])]),t._v(" "),a("p",[a("strong",[t._v("（2）解题思路")])]),t._v(" "),a("ul",[a("li",[t._v("前提：上帝视角，知道未来的价格。")]),t._v(" "),a("li",[t._v("局部最优：建好就收，见差就不动，不做长远打算。")])]),t._v(" "),a("p",[a("strong",[t._v("（3）解题步骤")])]),t._v(" "),a("ul",[a("li",[t._v("新建一个变量，用来统计总利润。")]),t._v(" "),a("li",[t._v("遍历价格数组，如果当前价格比昨天高，就是昨天买，今天卖，否则就不交易。")]),t._v(" "),a("li",[t._v("遍历结束后，返回所有利润之和。")])]),t._v(" "),a("p",[a("strong",[t._v("（4）代码实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} prices\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("maxProfit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//新建一个变量，用来统计总利润")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" profit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历价格数组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果当前价格prices[i]比昨天prices[i - 1]高，就是昨天买，今天卖；")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//否则说明当前天数没买，不进行交易")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历过程中，不断对利润进行相加")]),t._v("\n      profit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" prices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历结束后，返回所有利润之和")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" profit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("maxProfit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h1",{attrs:{id:"四、回溯算法常见应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、回溯算法常见应用"}},[t._v("#")]),t._v(" 四、回溯算法常见应用")]),t._v(" "),a("p",[t._v("引用 leetcode 的几道经典题目来强化"),a("strong",[t._v("回溯算法")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"_1、leetcode-46-全排列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、leetcode-46-全排列"}},[t._v("#")]),t._v(" 1、leetcode 46：全排列")]),t._v(" "),a("p",[a("strong",[t._v("（1）题意")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/permutations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里附上原题链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("给定一个不含重复数字的数组 "),a("code",[t._v("nums")]),t._v(" ，返回其 "),a("strong",[t._v("所有可能的全排列")]),t._v(" 。你可以 "),a("strong",[t._v("按任意顺序")]),t._v(" 返回答案。")]),t._v(" "),a("p",[a("strong",[t._v("输入输出示例：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("输入")]),t._v(": nums = [1,2,3]")]),t._v(" "),a("li",[a("strong",[t._v("输出")]),t._v(": [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]")])]),t._v(" "),a("p",[a("strong",[t._v("（2）解题思路")])]),t._v(" "),a("ul",[a("li",[t._v("要求："),a("strong",[t._v("①")]),t._v("所有排列情况；"),a("strong",[t._v("②")]),t._v("没有重复元素。")]),t._v(" "),a("li",[t._v("有出路、有死路。")]),t._v(" "),a("li",[t._v("考虑回溯算法。")])]),t._v(" "),a("p",[a("strong",[t._v("（3）解题步骤")])]),t._v(" "),a("ul",[a("li",[t._v("用递归模拟出所有情况。")]),t._v(" "),a("li",[t._v("遇到包含重复元素的情况，就回溯。")]),t._v(" "),a("li",[t._v("收集所有到达递归终点的情况，并返回。")])]),t._v(" "),a("p",[a("strong",[t._v("（4）代码实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number[][]}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("permute")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.定义一个变量，收集所有结果的情况")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("backtrack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.递归的重点收集所有满足题目要求的数组")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3.在把元素放进去时该数组已有此元素，那么此路为死路")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.递归时传入一个数组")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("permute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2、leetcode-78-子集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、leetcode-78-子集"}},[t._v("#")]),t._v(" 2、leetcode 78：子集")]),t._v(" "),a("p",[a("strong",[t._v("（1）题意")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/subsets/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里附上原题链接"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("给你一个整数数组 "),a("code",[t._v("nums")]),t._v(" ，数组中的元素 "),a("strong",[t._v("互不相同")]),t._v(" 。返回该数组所有可能的子集（幂集）。")]),t._v(" "),a("p",[t._v("解集 "),a("strong",[t._v("不能")]),t._v(" 包含重复的子集。你可以按 "),a("strong",[t._v("任意顺序")]),t._v(" 返回解集。")]),t._v(" "),a("p",[a("strong",[t._v("输入输出示例：")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("输入")]),t._v(": nums = [1,2,3]")]),t._v(" "),a("li",[a("strong",[t._v("输出")]),t._v(": [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]")])]),t._v(" "),a("p",[a("strong",[t._v("（2）解题思路")])]),t._v(" "),a("ul",[a("li",[t._v("要求："),a("strong",[t._v("①")]),t._v("所有子集；"),a("strong",[t._v("②")]),t._v("没有重复元素。")]),t._v(" "),a("li",[t._v("有出路、有死路。")]),t._v(" "),a("li",[t._v("考虑使用回溯算法。")])]),t._v(" "),a("p",[a("strong",[t._v("（3）解题步骤")])]),t._v(" "),a("ul",[a("li",[t._v("用递归模拟出所有情况。")]),t._v(" "),a("li",[t._v("保证接的数字都是后面的数字。")]),t._v(" "),a("li",[t._v("收集所有到达递归终点的情况，并返回。")])]),t._v(" "),a("p",[a("strong",[t._v("（4）代码实现")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number[][]}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("subsets")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.定义一个变量，存放结果")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("backtrack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4.到达路径终点时，push到结果里面")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.不断遍历数组，并将其添加到path中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.子集的长度有可能是0-nums.length不等")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 三个参数分别指：路径,路径数组的长度,起始的下标")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("subsets")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h1",{attrs:{id:"五、写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、写在最后"}},[t._v("#")]),t._v(" 五、写在最后")]),t._v(" "),a("p",[t._v("贪心算法和回溯算法在前端的面试和笔试中也是非常经典的常考题。贪心算法相较于其他算法来说比较简单，而回溯算法涉及到很多溯回问题，逻辑较强，建议大家在做题目时如果看不懂的情况下可以选择"),a("strong",[t._v("多调试代码")]),t._v("，一步一步跟着它的思路，多调试几遍，慢慢就能深入理解其逻辑了。")]),t._v(" "),a("p",[t._v("贪心算法和回溯算法在前端中的应用就讲到这里啦！如有不理解或文章有误欢迎评论区留言或私信我交流~")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("关注公众号 "),a("strong",[t._v("星期一研究室")]),t._v(" ，第一时间关注技术干货，"),a("strong",[t._v("更多有趣的专栏待你解锁")]),t._v("~")]),t._v(" "),a("li",[t._v("如果这篇文章对你有用，记得"),a("strong",[t._v("点个赞加个关注")]),t._v("再走哦~")]),t._v(" "),a("li",[t._v("我们下期见！🥂🥂🥂")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);