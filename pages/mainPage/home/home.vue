<template>
    <view>
        <!--pages/mainPage/home/home.wxml-->
        <scroll-view scroll-x class="bg-blue nav text-center" style="top: 0%; position: fixed; z-index: 999">
            <view :class="'cu-item ' + ('company' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="company">
                <text></text>
                公司
            </view>
            <view :class="'cu-item ' + ('plant' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="plant">
                <text></text>
                装置
            </view>
            <view :class="'cu-item ' + ('material' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="material">
                <text></text>
                物料
            </view>
            <view :class="'cu-item ' + ('riskPoint' == TopTabCur ? 'text-white cur' : '')" @tap="topTabSelect" data-id="riskPoint">
                <text></text>
                风险点
            </view>
        </scroll-view>

        <company v-if="TopTabCur == 'company'"></company>
        <plant v-if="TopTabCur == 'plant'"></plant>
        <material v-if="TopTabCur == 'material'"></material>
        <riskPoint v-if="TopTabCur == 'riskPoint'"></riskPoint>
    </view>
</template>

<script>
import company from '@/pages/mainPage/company/company';
import plant from '@/pages/mainPage/plant/plant';
import material from '@/pages/mainPage/material/material';
import riskPoint from '@/pages/mainPage/riskPoint/riskPoint';
// pages/mainPage/home/home.js
export default {
    components: {
        company,
        plant,
        material,
        riskPoint
    },
    data() {
        return {
            TopTabCur: 'company'
        };
    },
    options: {
        addGlobalClass: true
    },
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
/* pages/mainPage/home/home.wxss */
</style>
