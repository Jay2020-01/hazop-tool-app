<template>
    <!--pages/latency/result/result.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
            <view class="content" style="display: flex; flex-direction: column">
                <view class="text-grey">
                    <text class="text-cut">隐患1</text>
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
            <button size="mini" style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white" @tap="form" :data-uuid="item.uuid">
                验收
            </button>
        </view>
        <view class="cu-item">
            <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
            <view class="content" style="display: flex; flex-direction: column">
                <view class="text-grey">
                    <text class="text-cut">隐患2</text>
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
            <button size="mini" style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white" @tap="form" :data-uuid="item.uuid">
                验收
            </button>
        </view>
    </view>
</template>

<script>
// pages/latency/result/result.js
const app = getApp();
export default {
    data() {
        return {
            projects: [],
			// add by J
			item: "",
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
        form: function (e) {
            uni.navigateTo({
                url: '/pages/form/latency/result/result'
            });
        }
    }
};
</script>
<style>
/* pages/latency/result/result.wxss */
</style>
