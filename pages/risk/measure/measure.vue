<template>
    <!--pages/evaluate/measure/measure.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <block v-for="(item, index) in units" :key="index">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"></view>
                <navigator class="content" style="display: flex; flex-direction: column" url="/pages/project/projectBasicInfo/projectBasicInfo" hover-class="none">
                    <view class="text-grey" v-if="projects[index]">
                        <text class="text-cut">{{ projects[index].name }}</text>
                    </view>
                    <view class="text-gray text-sm flex" style="display: block">
                        <view v-if="points[index]">
                            <text class="text-cut">风险点：</text>
                            <text class="text-cut" style="margin-right: 20rpx">{{ points[index].name }}</text>
                        </view>
                        <view>
                            <text class="text-cut">风险单元：</text>
                            <text class="text-cut">{{ item.name }}</text>
                        </view>
                    </view>
                </navigator>

                <button
                    size="mini"
                    style="position: relative; left: 280rpx; top: 0rpx; background-color: #009988; font-size: x-small; color: white; width: 150rpx"
                    @tap="form"
                    :data-uuid="item.uuid"
                >
                    措施
                </button>
            </view>
        </block>
    </view>
</template>

<script>
const { promiseRequest } = require('../../../utils/util'); // pages/evaluate/measure/measure.js

const app = getApp();
export default {
    data() {
        return {
            units: [],
            points: [],
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
            url: app.globalData.globalReqUrl + '/analysis/riskunit/',
            data: {
                model: 2
            },

            success(res) {
                that.setData({
                    units: res.data.data
                });
                that.setPoints();
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
            uni.setStorageSync('measure_unit_uuid', uuid);
            uni.navigateTo({
                url: '/pages/form/measure/measure'
            });
        },
        setPoints: async function () {
            let response = [];

            for (const e of this.units) {
                let res = await promiseRequest(app.globalData.globalReqUrl + '/analysis/riskpoint/', {
                    uuid: e.risk_point,
                    model: 2
                });
                response.push(res.data[0]);
            }

            this.setData({
                points: response
            });
            this.setProjects();
        },
        setProjects: async function () {
            let response = [];

            for (const e of this.points) {
                let res = await promiseRequest(app.globalData.globalReqUrl + '/analysis/plan/query', {
                    uuid: e.plan_management
                });
                response.push(res.data[0]);
            }

            this.setData({
                projects: response
            });
        }
    }
};
</script>
<style>
/* pages/evaluate/measure/measure.wxss */
</style>
