<template>
    <view>
        <!--pages/form/latency/latency.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>隐患</text>
            </view>
        </view>
        <form>
            <!-- <view class="cu-form-group">
		<view class="title">编号</view>
		<picker mode="selector" range="{{riskUnitList}}" range-key="name" bindchange="setRiskUnit" disabled="{{riskUnit_disabled}}">{{code}}</picker>
	</view> -->
            <view class="cu-form-group">
                <view class="title">名称</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">要素</view>
                <picker mode="selector" :range="typeList" @change="setType">{{ type >= 0 ? typeList[type] : '请选择' }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">位置</view>
                <input placeholder="输入" @input="getLocation" />
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
                <input placeholder="输入" @input="getLevel" />
            </view>
            <view class="cu-form-group">
                <view class="title">是否重大</view>
                <picker mode="selector" :range="isMajorList" @change="setIsMajor">{{ isMajor >= 0 ? isMajorList[isMajor] : '请选择' }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">是否需要治理</view>
                <picker mode="selector" :range="needList" @change="setNeed">{{ need >= 0 ? needList[need] : '请选择' }}</picker>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/form/latency/latency.js
const app = getApp();
export default {
    data() {
        return {
            method: 2,
            name: '',
            typeList: ['消防设备的配备', '双回路供电', '危险化学品使用'],
            type: -1,
            description: '',
            location: '',
            photo: null,
            level: '',
            isMajorList: ['否', '是'],
            isMajor: -1,
            needList: ['否', '是'],
            need: -1,
            hidden_danger: null,
            riskUnit: '',

            attribute: {
                necessary: []
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        this.setData({
            method: uni.getStorageSync('method'),
            hidden_danger: uni.getStorageSync('hidden_danger')
        });
    },
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
        getName: function (e) {
            this.setData({
                name: e.detail.value
            });
        },

        getDescription: function (e) {
            this.setData({
                description: e.detail.value
            });
        },

        getLocation: function (e) {
            this.setData({
                location: e.detail.value
            });
        },

        getLevel: function (e) {
            this.setData({
                level: e.detail.value
            });
        },

        setRiskUnit: function (e) {
            this.setData({
                riskUnit: this.riskUnitList[e.detail.value]
            });
        },

        setIsMajor: function (e) {
            this.setData({
                isMajor: e.detail.value
            });
        },

        setNeed: function (e) {
            this.setData({
                need: e.detail.value
            });
        },

        setType: function (e) {
            this.setData({
                type: e.detail.value
            });
        },

        submit: function (e) {
            console.log(this);
            let that = this;
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/latency/',
                method: 'POST',
                data: {
                    data: {
                        name: this.name,
                        description: this.description,
                        location: this.location,
                        type: this.type,
                        isMajor: this.isMajor,
                        method: this.method,
                        level: this.level,
                        toManage: this.need
                    }
                },

                success(res) {
                    console.log(res.data);
                    let uuid = res.data.uuid;
                    uni.uploadFile({
                        url: app.globalData.globalReqUrl + '/analysis/attachment/upload/',
                        filePath: that.photo,
                        name: 'attachment',
                        formData: {
                            uuid: uuid,
                            type: 'Latency'
                        },

                        success(res) {
                            console.log(res.data);
                        }
                    });
                }
            });
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
