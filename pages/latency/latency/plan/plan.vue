<template>
    <view>
        <!--pages/latency/latency/plan/plan.wxml-->
        <view class="cu-list menu-avatar">
            <block v-for="(item, index) in hidden_danger_list" :key="index">
                <view class="cu-item">
                    <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
                    <view class="content" style="display: flex; flex-direction: column">
                        <view class="text-grey">
                            <text class="text-cut">{{ item.name }}</text>
                        </view>
                        <view class="text-gray text-sm flex" style="display: block">
                            <view>
                                <text class="text-cut">ID：</text>
                                <text class="text-cut" style="margin-right: 20rpx">{{ item.id }}</text>
                            </view>
                            <view>
                                <text class="text-cut">位置：</text>
                                <text class="text-cut">{{ item.location }}</text>
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
                        :data-item="item"
                    >
                        填报
                    </button>
                </view>
            </block>
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
// pages/latency/latency/plan/plan.js
const app = getApp();
export default {
    data() {
        return {
            hidden_danger_list: []
        };
    },
    options: {
        addGlobalClass: true
    },
    /**
     * 组件的属性列表
     */
    props: {},
    beforeMount: function () {
        let that = this;
        let uuid = uni.getStorageSync('form_hidden_danger_uuid');
        console.log(uuid);
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/hidden_danger/',
            data: {
                model: 2,
                latency_plan: uuid
            },

            success(res) {
                console.log(res);
                that.setData({
                    hidden_danger_list: res.data.data
                });
            }
        });
    },
    /**
     * 组件的方法列表
     */
    methods: {
        pass: function (e) {},
        form: function (e) {
            uni.setStorageSync('hidden_danger', e.currentTarget.dataset.item);
            uni.setStorageSync('method', 1);
            uni.navigateTo({
                url: '/pages/form/latency/latency'
            });
        },
        add: function (e) {
            uni.setStorageSync('method', 2);
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
