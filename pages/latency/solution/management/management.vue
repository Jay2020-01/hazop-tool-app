<template>
    <!--pages/latency/solution/management/management.wxml-->
    <view class="cu-list menu-avatar">
        <block v-for="(item, index) in latency_list" :key="index">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
                <view class="content" style="display: flex; flex-direction: column">
                    <view class="text-grey">
                        <text class="text-cut">{{ item.name }}</text>
                    </view>
                    <view class="text-gray text-sm flex" style="display: block">
                        <view>
                            <text class="text-cut">要素：</text>
                            <text class="text-cut" style="margin-right: 20rpx">{{ typeList[item.type] }}</text>
                        </view>
                        <view>
                            <text class="text-cut">位置：</text>
                            <text class="text-cut">{{ item.location }}</text>
                        </view>
                    </view>
                </view>
                <button size="mini" style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white" @tap="form" :data-item="item">
                    制定方案
                </button>
            </view>
        </block>
    </view>
</template>

<script>
// pages/latency/solution/management/management.js
const app = getApp();
export default {
    data() {
        return {
            latency_list: [],
            typeList: ['消防设备的配备', '双回路供电', '危险化学品使用']
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
        let uuid = uni.getStorageSync('latency_management_uuid');
        console.log(uuid);
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/latency/',
            data: {
                model: 2,
                latency_management: uuid
            },

            success(res) {
                console.log(res);
                that.setData({
                    latency_list: res.data.data.filter((item) => item.latency_management == uuid)
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
            uni.setStorageSync('latency', e.currentTarget.dataset.item);
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
