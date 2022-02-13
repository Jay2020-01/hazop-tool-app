<template>
    <view>
        <!--pages/form/latency/latency.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>隐患</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">编号</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">要素</view>
                <picker mode="selector" :range="typeList" @change="setType">{{ type }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">位置</view>
                <input placeholder="输入" @input="getName" />
                <text class="cuIcon-location" @tap="openMap"></text>
            </view>
            <block v-for="(item, index) in attribute.necessary" :key="index">
                <view class="cu-form-group">
                    <view class="title">{{ item.name }}</view>
                    <picker v-if="item.type == 'SmallIntegerField'" mode="selector" :range="item.List" @change="setValue" :data-index="index">{{ item.value }}</picker>
                    <input v-else placeholder="输入" @input="getValue" :data-index="index" />
                </view>
            </block>
            <view class="cu-form-group" style="display: block">
                <view class="title">媒体附件</view>
                <image
                    v-if="photo"
                    :src="photo"
                    style="width: 120rpx; height: 120rpx; display: block; box-sizing: border-box; position: relative; margin: 10rpx 0"
                    @tap="takePhoto"
                ></image>
                <image
                    v-else
                    src="/static/img/camera.jpg"
                    style="width: 120rpx; height: 120rpx; display: block; box-sizing: border-box; position: relative; margin: 10rpx 0"
                    @tap="takePhoto"
                ></image>
            </view>
            <view class="cu-form-group">
                <view class="title">隐患等级</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">是否需要治理</view>
                <picker mode="selector" :range="needList" @change="setNeed">{{ need }}</picker>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/form/latency/latency.js
export default {
    data() {
        return {
            typeList: ['消防设备的配备', '双回路供电', '危险化学品使用'],
            type: '请选择',
            needList: ['是', '否'],
            need: '请选择',
            riskUnitList: [],
            riskUnit_disabled: '',

            riskUnit: {
                name: ''
            },

            attribute: {
                necessary: []
            },

            photo: ''
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
        setNeed: function (e) {
            this.setData({
                need: this.needList[e.detail.value]
            });
        },

        setType: function (e) {
            this.setData({
                type: this.typeList[e.detail.value]
            });
        },

        submit: function (e) {
            uni.navigateBack();
        },

        openMap: function (e) {
            uni.navigateTo({
                url: '/pages/map/map'
            });
        },

        takePhoto: function () {
            uni.navigateTo({
                url: '/pages/camera/camera'
            });
        },

        setRiskUnit() {
            console.log('占位：函数 setRiskUnit 未声明');
        },

        getName() {
            console.log('占位：函数 getName 未声明');
        },

        getDescription() {
            console.log('占位：函数 getDescription 未声明');
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
/* pages/form/latency/latency.wxss */
</style>
