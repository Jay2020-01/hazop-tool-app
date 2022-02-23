<template>
    <view>
        <!--pages/latency/latency/latency.wxml-->
        <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
            <block v-for="(item, index) in plans" :key="index">
                <view class="cu-item">
                    <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
                    <navigator class="content" style="display: flex; flex-direction: column" url="/pages/latency/latency/plan/plan" hover-class="none">
                        <view class="text-grey">
                            <text class="text-cut">{{ item.name }}</text>
                        </view>
                        <view class="text-gray text-sm flex" style="display: block">
                            <view>
                                <text class="text-cut">ID：</text>
                                <text class="text-cut" style="margin-right: 20rpx">{{ item.code }}</text>
                            </view>
                            <view>
                                <text class="text-cut">类型：</text>
                                <text class="text-cut">{{ plan_type_dict[item.type] }}</text>
                                <text class="text-cut" style="margin-left: 5%">周期：</text>
                                <text class="text-cut">{{ plan_cycle_dict[item.cycle] }}</text>
                            </view>
                        </view>
                    </navigator>
                    <button
                        size="mini"
                        style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                        @tap="plan"
                        :data-uuid="item.uuid"
                    >
                        查看计划
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
// pages/latency/latency/latency.js
const app = getApp();
export default {
    data() {
        return {
            plans: [],
            plan_type_dict: {
                0: '日常',
                1: '专项',
                2: '综合性'
            },
            plan_cycle_dict: {
                0: '每天',
                1: '每周',
                2: '每月',
                3: '每季',
                4: '每年'
            }
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
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/latency_plan/',

            success(res) {
                that.setData({
                    plans: res.data.data
                });
            }
        });
    },
    /**
     * 组件的方法列表
     */
    methods: {
        plan: function (e) {
            let uuid = e.currentTarget.dataset.uuid;
            console.log(uuid);
            uni.setStorageSync('form_hidden_danger_uuid', uuid);
            uni.navigateTo({
                url: '/pages/latency/latency/plan/plan'
            });
        },
        add: function (e) {
            uni.navigateTo({
                url: '/pages/latency/latency/add/add'
            });
        }
    }
};
</script>
<style>
/* pages/latency/latency/latency.wxss */
</style>
