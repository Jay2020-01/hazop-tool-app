<template>
    <view>
        <!-- <view class="container">
  <scroll-view scroll-x style="width:90%;white-space: nowrap;">
    <block wx:for="{{contentList}}">
      <view class="{{isShowAll?'view-column-all':'view-column'}}" style="">
        <block wx:for="{{item}}" wx:for-index="subIndex" wx:for-item="subItem">
        <view style="width:100%;background:{{subIndex%2==0?'rgb(206, 236, 255)':'white'}};padding:10px 0;border:1px solid white" bindtap="showAll">
          <text class="{{isShowAll?'text-all':'text-shrink'}}" style="width:100%">{{subItem}}</text>
        </view>
        </block>
      </view>
    </block>
  </scroll-view>
</view> -->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>建议措施汇总表</text>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table">
            <block v-for="(table, table_index) in measureDataTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>
    </view>
</template>

<script>
// pages/allMeasureList/allMeasureList.js
export default {
    data() {
        return {
            // isShowAll:false,
            // contentList: [
            //   ["序号", "孙达", "任二"],
            //   ["节点", "男", "男"],
            //   ["偏差", "河北事河北事河北事河北事河北事河北事河北事河北事河北事河北事","河北事河北事河北事河北事河北事河北事河北事河北事河北事河北事"],
            //   ["原因", "孙达", "任二"],
            //   ["后果", "男", "男"],
            //   ["建议措施", "孙达", "任二"],
            //   ["种类", "男", "男"],
            //   ["责任方", "孙达", "任二"],
            //   ["责任方答复", "男", "男"]
            // ],
            measureDataTables: [
                ['序号', '节点', '偏差', '原因', '后果', '建议措施', '种类', '责任方', '责任方答复'],
                ['1', 'xxx', 'xxx', 'xxx', 'xxx', 'xxxxxxxxxxxx', 'xxx', 'xxxxxxxxxxxx', 'xxx'],
                ['1', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxxxxxxxxxxx', 'xxx'],
                ['1', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxxxxxxxxxxx', 'xxx']
            ],

            table_index: 0,
            table: []
        };
    }, // showAll(){
    //   if(this.data.isShowAll){
    //     this.setData({
    //       isShowAll:false
    //     })
    //   }else{
    //     this.setData({
    //       isShowAll:true
    //     })
    //   }
    // },

    /**
     * 生命周期函数--监听页面加载
     */
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
    methods: {}
};
</script>
<style>
/* .container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.text-shrink {
  font-size: 12px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
}
.text-all {
  font-size: 12px;
  text-align: center;
  word-break:break-all;
}
.view-column{
  width:11%;display:inline-block;
}
.view-column-all{
  min-width:11%;display:inline-block;
} */
.table {
    border: 0px solid darkgray;
    font-size: 12px;
}

.tr {
    display: flex;
    width: 100%;
    align-items: center;
}

.td {
    width: 11%;
    min-height: 2rem;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    flex-shrink: 0;
    line-height: 2rem;
}

.gray {
    background: white;
}
</style>
