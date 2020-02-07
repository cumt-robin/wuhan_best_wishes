# 武汉加油

武汉疫情资讯小程序的`nodejs`后台部分，采用`express`脚手架搭建

# 数据来源

源数据来自于丁香园，感谢掘金社区的`@普通程序员`费心处理后提供的[数据接口](https://programmerauthor.github.io/spread-information-docs/)

> 本项目体现了程序员的基本道德素质，为了不给别人增加麻烦和服务器压力，我每15分钟抓一次上述数据接口，并存储于个人服务器，供自己和他人使用。

# 目前提供的能力

提供了`https`的能力，

在线接口基地址： `https://wuhan.wbjiang.cn/api/`

| 接口名         | 请求方式 | 接口描述                     |
| -------------- | -------- | ---------------------------- |
| timeline       | GET      | 获取发生的事件，支持分页参数pageNo和pageSize             |
| stats          | GET      | 整体统计数据                 |
| rumour         | GET      | 最新辟谣                     |
| protect_wiki   | GET      | 最新防护知识                 |
| wiki           | GET      | 最新知识百科                 |
| help_links     | GET      | 便民信息/诊疗信息            |
| province_stats | GET      | 全国省份级患者分布数据       |
| city_stats/:areaName | GET      | 根据省份查市县疫情数据，areaName传入省级行政区的简写，如“湖南”       |
| oversea_stats  | GET      | 全球海外其他地区患者分布数据 |

可以点击[整体统计数据](https://wuhan.wbjiang.cn/api/stats)试试看呢!

> 其他能力待完善...