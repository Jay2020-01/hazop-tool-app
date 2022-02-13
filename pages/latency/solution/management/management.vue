<template>
    <!--pages/latency/solution/management/management.wxml-->
    <view class="cu-list menu-avatar">
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
            <view class="content" style="display: flex; flex-direction: column">
                <view class="text-grey">
                    <text class="text-cut">排查点1</text>
                </view>
                <view class="text-gray text-sm flex" style="display: block">
                    <view>
                        <text class="text-cut">ID：</text>
                        <text class="text-cut" style="margin-right: 20rpx">001</text>
                    </view>
                    <view>
                        <text class="text-cut">位置：</text>
                        <text class="text-cut">1号车间</text>
                    </view>
                </view>
            </view>
            <button size="mini" style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white" @tap="form">制定方案</button>
        </view>
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
            <view class="content" style="display: flex; flex-direction: column">
                <view class="text-grey">
                    <text class="text-cut">排查点2</text>
                </view>
                <view class="text-gray text-sm flex" style="display: block">
                    <view>
                        <text class="text-cut">ID：</text>
                        <text class="text-cut" style="margin-right: 20rpx">002</text>
                    </view>
                    <view>
                        <text class="text-cut">位置：</text>
                        <text class="text-cut">1号车间</text>
                    </view>
                </view>
            </view>
            <button size="mini" style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white" @tap="form">制定方案</button>
        </view>
    </view>
</template>

<script>
// pages/latency/solution/management/management.js
const app = getApp();
export default {
    data() {
        return {
            projects: []
        };
    },
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    props: {},
    beforeMount: function () {},
    /**
     * 组件的方法列表
     */
    methods: {
        pass: function (e) {},
        form: function (e) {
            uni.navigateTo({
                url: '/pages/form/latency/solution/solution'
            });
        }
    }
};
</script>
<style>
/* pages/latency/solution/management/management.wxss */
</style>
