---
title: 『软件工程10』结构化系统分析：数据流图和字典案例分析
author: 周一
date: '2021-05-29'
categories:
  - 产品汪
tags:
  - 软件工程
sidebar: 'auto'
---

# 前言

接[上一篇文章](https://blog.csdn.net/weixin_44803753/article/details/117234787)的内容，我们挑选出几个案例来对数据流图和数据字典进行分析。

# 一、数据流图案例分析

## 1、案例 1：商店业务管理系统

**（1）某商店业务管理系统的顶层数据流图如下：**

![商店业务管理系统](https://img-blog.csdnimg.cn/20210525191340781.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

以上数据流图只是一个高层的系统逻辑模型，它反映了目标系统要实现的功能。

**（2）该管理系统的数据流图绘制步骤为：**

- 首先确定系统的**输入**和**输出**；
- 根据商店的业务，画出**顶层**数据流图，以反映**最主要业务**的处理流程；
- 经过分析，商店业务处理的**主要功能**应当有**销售**、**采购**、**会计**三大项。主要数据流的<font color = "red">输入源点</font>和<font color = "red">输出终点</font>是<font color = "#0000FF">顾客</font>和<font color = "#0000FF">供应商</font>；
- 然后从输入端开始，根据商店业务的工作流程，画出数据流流经的各个加工框，逐步画到输出端，得到**第 0 层数据流图**。

**（3）根据步骤分别画出第 0 层和第 1 层数据流图。具体图形如下：**

- **第 0 层数据流图如下图所示：**

![第0层数据流图](https://img-blog.csdnimg.cn/20210525191358865.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

- 细化**第 0 层数据流图**的每一个加工项，得到**第 1 层数据流图**，其中包括**销售**、**采购**、**会计**三大项功能。**具体数据流图如下：**

![第1层数据流图—销售细化](https://img-blog.csdnimg.cn/20210525191425934.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)
![第1层数据流图—采购细化](https://img-blog.csdnimg.cn/20210525191448541.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)
![第1层数据流图—会计细化](https://img-blog.csdnimg.cn/20210525191518553.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

## 2、案例 2：学籍管理系统

**（1）某学籍管理系统的顶层数据流图如下：**

![学籍管理系统顶层流程图](https://img-blog.csdnimg.cn/20210525191530384.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**（2）该管理系统的数据流图绘制步骤为：**

- 首先确定系统的**输入**和**输出**；
- 根据学籍管理系统的业务，画出**顶层**数据流图，以反映**最主要业务**的处理流程；
- 经过分析，据学籍管理系统的**主要功能**应当有**注册**、**成绩管理**、**资格管理**、**奖励管理**四大项。主要数据流的<font color = "red">输入源点</font>和<font color = "red">输出终点</font>是<font color = "#0000FF">学生</font>和<font color = "#0000FF">老师</font>；
- 然后从输入端开始，根据学籍管理系统相关业务的工作流程，画出数据流流经的各个加工框，逐步画到输出端，得到**第 0 层数据流图**。

**（3）根据步骤画出第 0 层数据流图。具体图形如下：**

- **第 0 层数据流图如下图所示：**

![学籍管理系统第0层流程图](https://img-blog.csdnimg.cn/20210525191557597.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

## 3、案例 3：大型企业数据中心

某大型企业的数据中心为了集中管理、控制用户对数据的访问并支持大量的连接需求，欲构建**数据管理中间件**，其主要功能如下：

（1）数据管理员可通过中间件进行**用户管理、操作管理和权限管理**。**用户管理**维护用户信息（用户名、密码），存储在<font color = "#0000FF">用户表</font>中；**操作管理**维护数据实体的标准操作及其所属的后端数据库信息，存放在<font color = "#0000FF">操作表</font>中；**权限管理**维护<font color = "#0000FF">权限表</font>，该表存储用户可执行的操作信息。

（2）中间件**验证**前端应用提供的用户信息。若验证不通过，返回非法用户信息；若验证通过，中间件将等待前端应用提交操作请求。

（3）前端应用提交操作请求后，中间件先对请求进行**格式检查**。如果**格式不正确**，返回格式错误信息；如果**格式正确**，则进行**权限验证**（验证用户是否有权执行请求的操作），若用户无权执行该操作，则返回权限不足信息，否则进行**连接管理**。

（4）连接管理连接相应的后端数据库并提交操作。连接管理先检查是否存在空闲的数据库连接，如果不存在，**新建连接**；如果存在，则**重用连接**。

（5）后端数据库执行操作并将结果传输给中间件，中间件**对收到的操作结果进行处理**后，将其返回给前端应用。

现采用结构化方法对系统进行分析与设计，获得如下图所示的**顶层数据流图**和**0 层数据流图**。

![数据管理中间件顶层数据流图](https://img-blog.csdnimg.cn/20210526172207380.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

![数据管理中间件0层数据流图](https://img-blog.csdnimg.cn/20210526172226429.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

> **回答以下问题：**
>
> 1.  E1、 E2 和 E3 分别指哪三个实体？E1：前端应用；E2:数据管理层；E3：后端数据库。
> 2.  D1 、D2 和 D3 分别指哪三个数据存储？D1：用户表；D2：操作表；D3：权限表。
> 3.  加工 P 指什么？并指出 0 层数据流图丢失的两条数据流，包括数据流的起点、终点及数据流名称。
>     **加工 p 表示数据管理中间件**。0 层数据流图丢失的两条数据如 4 和 5 所示。
> 4.  丢失的数据流 1 中，其起点、终点和名称分别是什么。→ 起点为**P**，终点为**E1**，名称为**处理后的操作结果**。
> 5.  丢失的数据流 2 中，其起点、终点和名称分别是什么。→ 起点为**E3**，终点为**P**，名称为**操作结果**。

# 二、数据字典案例分析

## 1、案例 1：学籍管理系统

某学籍管理系统的第 0 层数据流图如下所示。

![学籍管理系统第0层流程图](https://img-blog.csdnimg.cn/20210525191621303.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**Question：**
根据以上第 0 层数据流图，请写出该学籍管理系统的五个条目。

**Answer：**

**条目一：数据流**

![条目一：数据流](https://img-blog.csdnimg.cn/20210525191639202.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**条目二：数据元素**

![条目二：数据元素](https://img-blog.csdnimg.cn/2021052519165221.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**条目三：数据存储**

![条目三：数据存储](https://img-blog.csdnimg.cn/20210525191703875.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**条目四：数据加工**

![条目四：数据加工](https://img-blog.csdnimg.cn/20210525191718408.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

**条目五：外部项**

![条目五：外部项](https://img-blog.csdnimg.cn/20210525191733436.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDgwMzc1Mw==,size_16,color_FFFFFF,t_70#pic_center)

# 三、写在最后

关于数据流图和数据字典的案例分析就讲到这里啦！大家可以根据[上一篇文章](https://blog.csdn.net/weixin_44803753/article/details/117234787)和这一篇文章连在一起结合学习。如有需要了解软件工程相关的其他内容，可到『[软件工程](https://blog.csdn.net/weixin_44803753/category_10895589.html?spm=1001.2014.3001.5482)』栏目进行查看学习~

同时，有不理解或有误的地方也欢迎评论区评论或私信我交流~

> - 关注公众号 **星期一研究室** ，不定期分享学习干货，学习路上不迷路~
> - 如果这篇文章对你有用，记得**点个赞加个关注**再走哦~