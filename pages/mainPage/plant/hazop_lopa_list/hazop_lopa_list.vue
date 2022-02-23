<template>
    <!--pages/hazop_lopa_list/hazop_lopa_list.wxml-->
    <view :class="'cu-list menu ' + (menuBorder ? 'sm-border' : '') + ' ' + (menuCard ? 'card-menu margin-top' : '')">
        <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
            <navigator class="content" hover-class="none" :url="'/pages/mainPage/plant/basicInfo/basicInfo?plantIndex=' + plantIndex" open-type="redirect">
                <text class="cuIcon-text"></text>
                <text class="text-grey">装置信息</text>
            </navigator>
        </view>
        <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
            <button class="cu-btn content" open-type="contact">
                <text class="cuIcon-picfill text-green"></text>
                <text class="text-grey">装置PID图</text>
            </button>
        </view>
        <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
            <navigator class="content" hover-class="none" :url="'/pages/mainPage/plant/hazop_worksheet/hazop_worksheet?plantIndex=' + plantIndex" open-type="redirect">
                <text class="cuIcon-formfill text-green"></text>
                <text class="text-grey">HAZOP记录表</text>
            </navigator>
        </view>
        <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
            <navigator class="content" hover-class="none" :url="'/pages/mainPage/plant/allMeasureList/allMeasureList?plantIndex=' + plantIndex" open-type="redirect">
                <text class="cuIcon-formfill text-green"></text>
                <text class="text-grey">建议措施汇总表</text>
            </navigator>
        </view>
        <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
            <navigator class="content" hover-class="none" :url="'/pages/mainPage/plant/lopa_worksheet/lopa_worksheet?plantIndex=' + plantIndex" open-type="redirect">
                <text class="cuIcon-formfill text-green"></text>
                <text class="text-grey">LOPA记录表</text>
            </navigator>
        </view>
        <view :class="'cu-item ' + (menuArrow ? 'arrow' : '')">
            <navigator class="content" hover-class="none" :url="'/pages/mainPage/plant/allSILList/allSILList?plantIndex=' + plantIndex" open-type="redirect">
                <text class="cuIcon-formfill text-green"></text>
                <text class="text-grey">SIL结果汇总</text>
            </navigator>
        </view>
    </view>
</template>

<script>
// pages/hazop_lopa_list/hazop_lopa_list.js
export default {
    data() {
        return {
            plantIndex: '1',
            menuBorder: false,
            menuCard: false,
            menuArrow: false
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        console.log(options.plantIndex);
        this.setData({
            plantIndex: options.plantIndex
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
    methods: {}
};
</script>
<style>
/* pages/hazop_lopa_list/hazop_lopa_list.wxss */
</style>
