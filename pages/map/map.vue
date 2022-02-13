<template>
    <view>
        <map
            id="myMap"
            :style="'width: ' + map_width + 'px; height: ' + map_height + 'px;'"
            :latitude="latitude"
            :longitude="longitude"
            :markers="markers"
            :covers="covers"
            show-location
        ></map>
    </view>
</template>

<script>
// pages/map/map.js
export default {
    data() {
        return {
            latitude: 23.099994,
            longitude: 113.32452,
            markers: [],
            map_width: 300,
            map_height: 300,
            covers: []
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        uni.getSystemInfo({
            success: (result) => {
                that.setData({
                    map_width: result.windowWidth,
                    map_height: result.windowHeight
                });
            }
        });
        uni.getLocation({
            isHighAccuracy: true,
            success: (res) => {
                console.log(res);
                that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                });
            }
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.mapCtx = uni.createMapContext('myMap');
        this.mapCtx.moveToLocation();
    },
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
    methods: {}
};
</script>
<style>
/* pages/map/map.wxss */
</style>
