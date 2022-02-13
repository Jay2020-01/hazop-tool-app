<template>
    <!--pages/person/person.wxml-->
    <view style="margin-bottom: 12%">
        <view style="height: 240rpx; background-color: #33cc99">
            <image
                src="/static/img/logo.png"
                style="width: 160rpx; height: 160rpx; display: inline-block; box-sizing: border-box; left: 97rpx; top: 40rpx; position: relative; border-radius: 80rpx"
            ></image>

            <text style="position: relative; left: 148rpx; top: -52rpx; font-size: x-large">用户名</text>

            <view style="position: relative; width: fit-content; left: 308rpx; top: -30rpx">
                <text style="color: #888888; font-size: small">ID：</text>
                <text style="color: #888888; font-size: s">123456</text>
            </view>
        </view>
        <view class="cu-list menu-avatar">
            <view class="cu-item" style="border-bottom: solid; border-width: thin">
                <text style="font-size: medium; flex: 1; margin: 20rpx">修改用户名</text>
            </view>
            <view class="cu-item" style="border-bottom: solid; border-width: thin">
                <text style="font-size: medium; flex: 1; margin: 20rpx">修改密码</text>
            </view>
        </view>
        <button style="position: relative; left: 0rpx; top: 401rpx; background-color: #ee0000; color: white" @tap="logout">退 出</button>
    </view>
</template>

<script>
// pages/person/person.js
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
    methods: {
        logout: function () {
            uni.reLaunch({
                url: '/pages/login/login'
            });
        }
    }
};
</script>
<style>
/* pages/person/person.wxss */
</style>
