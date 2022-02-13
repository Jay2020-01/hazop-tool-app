<template>
    <view>
        <!--pages/latency/latency/plan/plan.wxml-->
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
                <button
                    size="mini"
                    style="position: relative; left: 360rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                    @tap="pass"
                    :data-uuid="item.uuid"
                >
                    通过
                </button>
                <button
                    size="mini"
                    style="position: relative; left: 120rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                    @tap="form"
                    :data-uuid="item.uuid"
                >
                    填报
                </button>
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
                <button
                    size="mini"
                    style="position: relative; left: 360rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                    @tap="pass"
                    :data-uuid="item.uuid"
                >
                    通过
                </button>
                <button
                    size="mini"
                    style="position: relative; left: 120rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                    @tap="form"
                    :data-uuid="item.uuid"
                >
                    填报
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
				display: flex;
				align-items: center;
				justify-content: center;
            "
            @tap="add"
        >
            +
        </button>
    </view>
</template>

<script>
// pages/latency/latency/plan/plan.js
const app = getApp();
export default {
    data() {
        return {
            projects: [],
			// add by J
			item: {},
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
                url: '/pages/form/latency/latency'
            });
        },
        add: function (e) {
            uni.navigateTo({
                url: '/pages/form/latency/latency'
            });
        }
    }
};
</script>
<style>
/* pages/latency/latency/plan/plan.wxss */
</style>
