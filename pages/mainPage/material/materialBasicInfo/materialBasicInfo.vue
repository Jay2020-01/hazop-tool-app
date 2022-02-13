<template>
    <view>
        <!--pages/mainPage/material/materialBasicInfo/materialBasicInfo.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>基本信息</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">MSDS名称</view>
                <input placeholder="xxx" @input="nameInput" :value="name" />
            </view>
            <view class="cu-form-group">
                <view class="title">中文名称</view>
                <input placeholder="xxx" @input="nameInput" :value="chineseName" />
            </view>
            <view class="cu-form-group">
                <view class="title">English</view>
                <input placeholder="xxx" @input="nameInput" :value="englishName" />
            </view>
            <view class="cu-form-group">
                <view class="title">所属公司</view>
                <input placeholder="xxx" @input="nameInput" :value="company" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">备注</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="nameInput" :value="comment" placeholder="xxx"></textarea>
            </view>
        </form>
    </view>
</template>

<script>
// pages/mainPage/material/materialBasicInfo/materialBasicInfo.js
export default {
    data() {
        return {
            name: '',
            chineseName: '',
            englishName: '',
            company: '',
            comment: '',
            modalName: ''
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        this.name = uni.getStorageSync('materialList')[options.materialIndex].name;
        this.chineseName = uni.getStorageSync('materialList')[options.materialIndex].chinese_name;
        this.englishName = uni.getStorageSync('materialList')[options.materialIndex].english_name;
        this.company = uni.getStorageSync('materialList')[options.materialIndex].company_name;
        this.comment = uni.getStorageSync('materialList')[options.materialIndex].comment;
        this.setData({
            name: this.name,
            chineseName: this.chineseName,
            englishName: this.englishName,
            company: this.company,
            comment: this.comment
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
        nameInput: function (e) {
            this.setData({
                name: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/mainPage/material/materialBasicInfo/materialBasicInfo.wxss */
</style>
