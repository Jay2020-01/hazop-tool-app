<template>
    <view>
        <!--pages/form/accident/accident.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.accident }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">类型</view>
                <picker mode="selector" :range="typeList" range-key="1" @change="setType">{{ type[1] }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
            </view>
            <view class="cu-form-group" style="display: block">
                <view class="title">图片上传</view>
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
        </form>
        <button style="position: relative; left: 0rpx; top: 351rpx; background-color: #33cc99; color: white" @tap="preview">预 览</button>
    </view>
</template>

<script>
// pages/form/accident/accident.js
const app = getApp();
export default {
    data() {
        return {
            name: '',
            typeList: [],
            type: [0, '请选择'],
            description: '',
            photo: null,
            label: {
                accident: ''
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        this.setData({
            label: uni.getStorageSync('label')
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/metadata/',
            data: {
                name: 'PlanAccident'
            },

            success(res) {
                for (const e of res.data.data) {
                    if (e.name == 'accident_type') {
                        that.setData({
                            typeList: e.choices
                        });
                    }
                }
            }
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
        preview: function () {
            uni.setStorageSync('accident_name', this.name);
            uni.setStorageSync('accident_type', this.type);
            uni.setStorageSync('accident_description', this.description);
            uni.setStorageSync('accident_photo', this.photo);
            uni.navigateTo({
                url: '/pages/form/preview/preview'
            });
        },

        setType: function (e) {
            this.setData({
                type: this.typeList[e.detail.value]
            });
        },

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

        takePhoto: function () {
            uni.navigateTo({
                url: '/pages/camera/camera'
            });
        }
    }
};
</script>
<style>
/* pages/form/accident/accident.wxss */
</style>
