<template>
    <view>
        <!--pages/latency/latency/add/add.wxml-->
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
                <view class="title">类型</view>
                <picker mode="selector" :range="typeList" @change="setType">{{ type }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">周期</view>
                <picker mode="selector" :range="cycleList" @change="setCycle">{{ cycle }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">开始时间</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">截止时间</view>
                <input placeholder="输入" @input="getName" />
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>排查点</text>
            </view>
        </view>
        <form>
            <block v-for="(item, index) in hiddenDangerList" :key="index">
                <view class="cu-form-group">
                    <text style="flex: 1">{{ item }}</text>
                    <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0" @tap="deleteFun" :data-index="index">
                        -
                    </button>
                </view>
            </block>
            <view class="cu-form-group">
                <picker mode="selector" :range="hiddenDangerRange" @change="setHiddenDanger">{{ hiddenDanger }}</picker>
                <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0; font-size: large" @tap="add">+</button>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/latency/latency/add/add.js
export default {
    data() {
        return {
            typeList: ['日常', '专项', '综合性'],
            type: '请选择',
            cycleList: ['每天', '每周', '每月', '每季', '每年'],
            cycle: '请选择',
            hiddenDangerList: [],
            hiddenDanger: '请选择排查点',
            hiddenDangerRange: ['排查点1', '排查点2', '排查点3']
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
        setCycle: function (e) {
            this.setData({
                cycle: this.cycleList[e.detail.value]
            });
        },

        setType: function (e) {
            this.setData({
                type: this.typeList[e.detail.value]
            });
        },

        setHiddenDanger: function (e) {
            this.setData({
                hiddenDanger: this.hiddenDangerRange[e.detail.value]
            });
        },

        add: function (e) {
            let tmp = this.hiddenDangerList;
            tmp.push(this.hiddenDanger);
            this.setData({
                hiddenDangerList: tmp,
                hiddenDanger: '请选择排查点'
            });
        },

        deleteFun: function (e) {
            let tmp = this.hiddenDangerList;
            tmp.splice(e.currentTarget.dataset.index, 1);
            this.setData({
                hiddenDangerList: tmp
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
        }
    }
};
</script>
<style>
/* pages/latency/latency/add/add.wxss */
</style>
