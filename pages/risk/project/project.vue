<template>
    <!--pages/project/project.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <block v-for="(item, index) in projects" :key="index">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
                <navigator class="content" style="display: flex; flex-direction: column" url="/pages/project/projectBasicInfo/projectBasicInfo" hover-class="none">
                    <view class="text-grey">
                        <text class="text-cut">{{ item.name }}</text>
                    </view>
                    <view class="text-gray text-sm flex" style="display: block">
                        <view>
                            <text class="text-cut">ID：</text>
                            <text class="text-cut" style="margin-right: 20rpx">{{ item.code }}</text>
                        </view>
                        <view>
                            <text class="text-cut">所属：</text>
                            <text class="text-cut">{{ item.company_name }}</text>
                        </view>
                    </view>
                </navigator>
                <button
                    size="mini"
                    style="position: relative; left: 340rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                    @tap="config"
                    :data-uuid="item.uuid"
                >
                    配置
                </button>
                <button
                    size="mini"
                    style="position: relative; left: 120rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white"
                    @tap="form"
                    :data-uuid="item.uuid"
                >
                    填报风险
                </button>
            </view>
        </block>
    </view>
</template>

<script>
// pages/project/project.js
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
    beforeMount: function () {
        let that = this;
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/plan/query',

            success(res) {
                that.setData({
                    projects: res.data.data
                });
            }
        });
    },
    /**
     * 组件的方法列表
     */
    methods: {
        form: function (e) {
            let uuid = e.currentTarget.dataset.uuid;
            console.log(uuid);
            uni.setStorageSync('form_plan_uuid', uuid);
            uni.navigateTo({
                url: '/pages/form/risk/risk'
            });
        },
        config: function (e) {
            let uuid = e.currentTarget.dataset.uuid;
            uni.setStorageSync('config_plan_uuid', uuid);
            uni.navigateTo({
                url: '/pages/config/config'
            });
        }
    }
};
</script>
<style>
/* pages/project/project.wxss */
</style>
