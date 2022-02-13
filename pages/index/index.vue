<template>
    <view>
        <!--pages/index/index.wxml-->
        <mainPage v-if="PageCur == 'mainPage'"></mainPage>
        <risk v-if="PageCur == 'risk'"></risk>
        <latency v-if="PageCur == 'latency'"></latency>
        <about v-if="PageCur == 'about'"></about>

        <view class="cu-bar tabbar bg-white shadow foot">
            <view class="action" @tap="NavChange" data-cur="mainPage">
                <view class="cuIcon-cu-image">
					<!-- change by J -->
                    <image :src="'/static/img/mainPage' + (PageCur == 'mainPage' ? '_cur' : '') + '.png'"></image>
                </view>
                <view :class="PageCur == 'mainPage' ? 'text-green' : 'text-gray'">首页</view>
            </view>
            <view class="action" @tap="NavChange" data-cur="risk">
                <view class="cuIcon-cu-image">
                    <image :src="'/static/img/project' + (PageCur == 'risk' ? '_cur' : '') + '.png'"></image>
                </view>
                <view :class="PageCur == 'risk' ? 'text-green' : 'text-gray'">风险分级</view>
            </view>
            <view class="action" @tap="NavChange" data-cur="latency">
                <view class="cuIcon-cu-image">
                    <image :src="'/static/img/assess' + (PageCur == 'latency' ? '_cur' : '') + '.png'"></image>
                </view>
                <view :class="PageCur == 'latency' ? 'text-green' : 'text-gray'">隐患排查</view>
            </view>
            <view class="action" @tap="NavChange" data-cur="about">
                <view class="cuIcon-cu-image">
                    <image :src="'/static/img/about' + (PageCur == 'about' ? '_cur' : '') + '.png'"></image>
                </view>
                <view :class="PageCur == 'about' ? 'text-green' : 'text-gray'">我的</view>
            </view>
        </view>
    </view>
</template>

<script>
import mainPage from '@/pages/mainPage/home/home';
import risk from '@/pages/risk/risk';
import latency from '@/pages/latency/latency';
import about from '@/pages/person/person';
// pages/index/index.js
export default {
    components: {
        mainPage,
        risk,
        latency,
        about
    },
    data() {
        return {
            PageCur: 'mainPage'
        };
    },
    /**
     * 生命周期函数--监听页面加载
     */
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
        NavChange(e) {
            this.setData({
                PageCur: e.currentTarget.dataset.cur
            });
        }
    }
};
</script>
<style>
/* pages/index/index.wxss */
</style>
