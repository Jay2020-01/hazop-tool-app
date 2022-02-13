<template>
    <view>
        <!--pages/latency/solution/add/add.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>治理方案</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">编号</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
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
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>隐患</text>
            </view>
        </view>
        <form>
            <block v-for="(item, index) in latencyList" :key="index">
                <view class="cu-form-group">
                    <text style="flex: 1">{{ item }}</text>
                    <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0" @tap="deleteFun" :data-index="index">
                        -
                    </button>
                </view>
            </block>
            <view class="cu-form-group">
                <picker mode="selector" :range="latencyRange" @change="setLatency">{{ latency }}</picker>
                <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0; font-size: large" @tap="add">+</button>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/latency/solution/add/add.js
export default {
    data() {
        return {
            latencyList: [],
            latency: '请选择隐患',
            latencyRange: ['隐患1', '隐患2', '隐患3'],

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
        setLatency: function (e) {
            this.setData({
                latency: this.latencyRange[e.detail.value]
            });
        },

        add: function (e) {
            let tmp = this.latencyList;
            tmp.push(this.latency);
            this.setData({
                latencyList: tmp,
                latency: '请选择隐患'
            });
        },

        deleteFun: function (e) {
            let tmp = this.latencyList;
            tmp.splice(e.currentTarget.dataset.index, 1);
            this.setData({
                latencyList: tmp
            });
        },

        submit: function (e) {
            uni.navigateBack();
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
/* pages/latency/solution/add/add.wxss */
</style>
