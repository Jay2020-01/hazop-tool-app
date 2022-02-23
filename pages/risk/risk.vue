<template>
    <view>
        <!--pages/risk/risk.wxml-->
        <scroll-view scroll-x class="bg-blue nav text-center" style="top: 0%; position: fixed; z-index: 999">
            <view :class="'cu-item ' + ('project' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="project" style="width: 30%">
                <text>项目</text>
            </view>
            <view :class="'cu-item ' + ('evaluate' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="evaluate" style="width: 30%">
                <text>评估</text>
            </view>
            <view :class="'cu-item ' + ('measure' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="measure" style="width: 30%">
                <text>措施</text>
            </view>
        </scroll-view>

        <project v-if="TopTabCur == 'project'"></project>
        <evaluate v-if="TopTabCur == 'evaluate'"></evaluate>
        <measure v-if="TopTabCur == 'measure'"></measure>
    </view>
</template>

<script>
import project from '@/pages/risk/project/project';
import evaluate from '@/pages/risk/evaluate/evaluate';
import measure from '@/pages/risk/measure/measure';
// pages/risk/risk.js
export default {
    components: {
        project,
        evaluate,
        measure
    },
    data() {
        return {
            TopTabCur: 'project'
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
/* pages/risk/risk.wxss */
</style>
