<template>
    <view>
        <!--pages/form/latency/solution/solution.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>治理方案</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">对应隐患</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">治理意见</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">方案制定部门</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">制定人</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">治理负责部门</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">治理负责人</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">开始时间</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">截止时间</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <block v-for="(item, index) in attribute.necessary" :key="index">
                <view class="cu-form-group">
                    <view class="title">{{ item.name }}</view>
                    <picker v-if="item.type == 'SmallIntegerField'" mode="selector" :range="item.List" @change="setValue" :data-index="index">{{ item.value }}</picker>
                    <input v-else placeholder="输入" @input="getValue" :data-index="index" />
                </view>
            </block>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/form/latency/solution/solution.js
export default {
    data() {
        return {
            riskUnitList: [],
            riskUnit_disabled: '',

            riskUnit: {
                name: ''
            },

            attribute: {
                necessary: []
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {},
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
    methods: {
        submit: function (e) {
            uni.navigateBack();
        },

        setRiskUnit() {
            console.log('占位：函数 setRiskUnit 未声明');
        },

        getDescription() {
            console.log('占位：函数 getDescription 未声明');
        },

        getName() {
            console.log('占位：函数 getName 未声明');
        },

        setValue() {
            console.log('占位：函数 setValue 未声明');
        },

        getValue() {
            console.log('占位：函数 getValue 未声明');
        }
    }
};
</script>
<style>
/* pages/form/latency/solution/solution.wxss */
</style>
