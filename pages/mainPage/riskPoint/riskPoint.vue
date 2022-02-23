<template>
    <!--pages/mainPage/riskPoint/riskPoint.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
            <navigator class="content" style="display: flex; flex-direction: column" url="/pages/mainPage/riskPoint/riskPointBasicInfo/riskPointBasicInfo" hover-class="none">
                <view class="text-grey">
                    <text class="text-cut">风险点1</text>
                </view>
                <view class="text-gray text-sm flex">
                    <text class="text-cut">索引:123 所属:凯尔公司</text>
                </view>
            </navigator>
        </view>
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"></view>
            <navigator class="content" style="display: flex; flex-direction: column" url="/pages/mainPage/riskPoint/riskPointBasicInfo/riskPointBasicInfo" hover-class="none">
                <view class="text-grey">
                    <text class="text-cut">风险点2</text>
                </view>
                <view class="text-gray text-sm flex">
                    <text class="text-cut">索引:456 所属:莫甘娜公司</text>
                </view>
            </navigator>
        </view>
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"></view>
            <navigator class="content" style="display: flex; flex-direction: column" url="/pages/mainPage/riskPoint/riskPointBasicInfo/riskPointBasicInfo" hover-class="none">
                <view class="text-grey">
                    <text class="text-cut">风险点3</text>
                </view>
                <view class="text-gray text-sm flex">
                    <text class="text-cut">索引:789 所属:伊利瑞尔公司</text>
                </view>
            </navigator>
        </view>
    </view>
</template>

<script>
// pages/mainPage/riskPoint/riskPoint.js
export default {
    data() {
        return {};
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
    methods: {}
};
</script>
<style>
/* pages/mainPage/riskPoint/riskPoint.wxss */
</style>
