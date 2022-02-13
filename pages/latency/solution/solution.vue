<template>
    <view>
        <!--pages/latency/solution/solution.wxml-->
        <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
                <navigator class="content" style="display: flex; flex-direction: column" url="/pages/latency/solution/management/management" hover-class="none">
                    <view class="text-grey">
                        <text class="text-cut">治理计划名</text>
                    </view>
                    <view class="text-gray text-sm flex" style="display: block">
                        <view>
                            <text class="text-cut">ID：</text>
                            <text class="text-cut" style="margin-right: 20rpx">001</text>
                        </view>
                        <view>
                            <text class="text-cut">状态：</text>
                            <text class="text-cut">未完成</text>
                            <text class="text-cut" style="margin-left: 5%">截止时间：</text>
                            <text class="text-cut">2022-1-31</text>
                        </view>
                    </view>
                </navigator>
                <button size="mini" style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white" @tap="management">
                    查看计划
                </button>
            </view>
        </view>

        <button
            style="
                border-radius: 50%;
                background-color: #3388bb;
                color: white;
                width: 110rpx;
                height: 110rpx;
                padding: 0;
                font-size: xx-large;
                position: fixed;
                right: 5%;
                bottom: 12%;
            "
            @tap="add"
        >
            +
        </button>
    </view>
</template>

<script>
// pages/latency/solution/solution.js
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
        management: function (e) {
            uni.navigateTo({
                url: '/pages/latency/solution/management/management'
            });
        },
        add: function (e) {
            uni.navigateTo({
                url: '/pages/latency/solution/add/add'
            });
        }
    }
};
</script>
<style>
/* pages/latency/solution/solution.wxss */
</style>
