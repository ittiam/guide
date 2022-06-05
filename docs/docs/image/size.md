# 图片大小

---

## 图片大小

### 全国网速现状

#### 固定网络

据文章 [《2021年全国网络速度和质量报告》](https://www.speedtest.cn/article/VXjrPAKZ3Vkx8wMlLBpW)，三大运营商2021年的宽带网络网速：

![image](https://file2.speedtest.cn/images/2022/03/AIZxJOkHPdP9zKltU3dBH68hINfuMqGmlRTaRSMy.jpeg)

#### 移动网络

4G 网络传输速率理论上可达到 20Mbps，最高可以达到 100Mbps。根据 `128KB/s=128×8(Kb/s)=1024Kb/s=1Mb/s` 的转换来算，3G 网络的理论传输速率可达到 450KB/s，4G 网络的理论传输速率可达到 2.5MB/s ~ 12.5MB/s，5G峰值理论传输速度可达2.5GB/s

受用户计算机性能、网络设备质量、资源使用情况、网络高峰期、网站服务能力、线路衰耗、信号衰减等多因素影响，4G 和 5G 的实际平均传输速率约为：

- 4G：最高值 2.75MB/s，平均 500 ～ 1000KB/s
- 5G：平均值 38MB/s

### 4G/5G 用户占比

2022年5月移动宽带（4G/5G）用户占比各省分布情况：

![image](https://file2.speedtest.cn/images/2022/06/mABLIpoWL44gj0HPAUMEdzYmnOvODVo4v9zdvaH3.png)
![image](https://file2.speedtest.cn/images/2022/06/OhO6PIX4k2ealyQ4sre3I24MGyXjAAFa1INzbX7d.png)

据 [《第 49 次中国互联网络发展状况统计报告》](https://www.cnnic.net.cn/hlwfzyj/hlwxzbg/hlwtjbg/202202/P020220407403488048001.pdf) 介绍：

> 截至2021年12月，移动电话用户总数达16.43亿，4G 移动电话用户为 10.69 亿户，5G 移动电话用户达 3.55 亿户。

## 团队约定

中国普通家庭的宽带基本能达到 100Mbps，实际速率大约为 12.5MB/s，为了保证图片能更好地加载展示给用户看，团队约定：

**PC 平台单张的图片的大小不应大于 2M。**

**移动平台单张的图片的大小不应大于 1M。**

_（图片的大小约定标准随全国网速的改变而改变）_
