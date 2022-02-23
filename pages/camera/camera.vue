<template>
    <view>
        <!--pages/camera/camera.wxml-->
        <camera device-position="back" flash="auto" resolution="high" mode="normal" style="width: 100vw; height: 100vh"></camera>
        <button
            style="border: solid; border-radius: 50%; border-width: 15rpx; width: 150rpx; height: 150rpx; bottom: 10%; position: absolute; left: 50%; margin-left: -75rpx"
            @tap="takePhoto"
        ></button>
    </view>
</template>

<script>
// pages/camera/camera.js
export default {
    data() {
        return {
            cameraContext: null,
            key: 'photo'
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let key = options.key ? options.key : 'photo';
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
        takePhoto: function () {
            this.cameraContext = uni.createCameraContext();
            this.cameraContext.takePhoto({
                quality: 'high',
                success: (res) => {
                    let pages = getCurrentPages();
                    let prev = pages[pages.length - 2];
                    prev.setData({
                        [this.key]: res.tempImagePath
                    });
                    uni.navigateBack();
                }
            });
        }
    }
};
</script>
<style>
/* pages/camera/camera.wxss */
</style>
