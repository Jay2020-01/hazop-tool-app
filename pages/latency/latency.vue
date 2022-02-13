<template>
    <view>
        <!--pages/latency/latency.wxml-->
        <scroll-view scroll-x class="bg-blue nav text-center" style="top: 0%; position: fixed; z-index: 999">
            <view :class="'cu-item ' + ('latency' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="latency" style="width: 30%">
                <text>排查</text>
            </view>
            <view :class="'cu-item ' + ('solution' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="solution" style="width: 30%">
                <text>治理</text>
            </view>
            <view :class="'cu-item ' + ('result' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="result" style="width: 30%">
                <text>验收</text>
            </view>
        </scroll-view>

        <latency v-if="TopTabCur == 'latency'"></latency>
        <solution v-if="TopTabCur == 'solution'"></solution>
        <result v-if="TopTabCur == 'result'"></result>
    </view>
</template>

<script>
import latency from '@/pages/latency/latency/latency';
import solution from '@/pages/latency/solution/solution';
import result from '@/pages/latency/result/result';
// pages/latency/latency.js
export default {
    components: {
        latency,
        solution,
        result
    },
    data() {
        return {
            TopTabCur: 'latency'
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
        topTabSelect(e) {
            this.setData({
                TopTabCur: e.currentTarget.dataset.id
            });
        }
    }
};
</script>
<style>
/* pages/latency/latency.wxss */
</style>
