<template>
    <view>
        <!--pages/mainPage/riskPoint/riskPointBasicInfo/riskPointBasicInfo.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>基本信息</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">序号</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">公司</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">风险点名称</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">地点</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">风险点负责人</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">风险点负责部门</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">简介</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="textareaBInput" placeholder="xxx"></textarea>
            </view>
        </form>
    </view>
</template>

<script>
// pages/mainPage/riskPoint/riskPointBasicInfo/riskPointBasicInfo.js
export default {
    data() {
        return {
            modalName: ''
        };
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
    methods: {
        textareaBInput() {
            console.log('占位：函数 textareaBInput 未声明');
        }
    }
};
</script>
<style>
/* pages/mainPage/riskPoint/riskPointBasicInfo/riskPointBasicInfo.wxss */
</style>
