<template>
    <!--pages/mainPage/company/company.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <block v-for="(table, table_index) in companyTables" :key="table_index">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"></view>
                <navigator
                    class="content"
                    style="display: flex; flex-direction: column"
                    :url="'/pages/mainPage/company/companyBasicInfo/companyBasicInfo?companyIndex=' + table_index"
                    hover-class="none"
                >
                    <view class="text-grey">
                        <text class="text-cut">{{ table.name }}</text>
                    </view>
                    <view class="text-gray text-sm flex">行业:{{ table.industry }} 所在地:{{ table.location }}</view>
                </navigator>
            </view>
        </block>
        <!-- <view class="cu-item">
      <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">凯尔公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item">
      <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">塔里克公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item ">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">莫甘娜公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item grayscale">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">伊泽瑞尔公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view>
    <view class="cu-item cur">
      <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
        <view class="cu-tag badge"></view>
      </view>
      <navigator class="content" style="display: flex;flex-direction: column;"   url="/pages/mainPage/company/companyBasicInfo/companyBasicInfo" hover-class="none">
        <view class="text-grey">
          <text class="text-cut">瓦罗兰公司</text>
        </view>
        <view class="text-gray text-sm flex">
          <text class="text-cut">行业:xxx   所在地:xxx</text>
        </view>
      </navigator>
    </view> -->
    </view>
</template>

<script>
// pages/mainPage/company/company.js
const app = getApp();
export default {
    data() {
        return {
            companyTables: [],
            table_index: 0,

            table: {
                name: '',
                industry: '',
                location: ''
            }
        };
    },
    options: {
        addGlobalClass: true
    },
    beforeMount: function () {
        let temp = [];
        let that = this;
        uni.request({
            url: app.globalData.globalReqUrl + '/company/getlist/',
            method: 'post',
            data: {
                session_key: uni.getStorageSync('session_key'),
                app_info: 2,
                method: 1
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded' // 默认值
            },

            success(res) {
                if (res.data.msg == 'success') {
                    temp = res.data.data;
                    uni.setStorageSync('companyList', res.data.data);
                    that.setData({
                        companyTables: temp
                    });
                    console.log(temp);
                } else {
                    uni.showToast({
                        title: res.data.message,
                        icon: 'none',
                        duration: 2000
                    });
                }
            }
        });
    },
    methods: {}
};
</script>
<style>
/* pages/mainPage/company/company.wxss */
.td {
    word-wrap: break-word;
    flex-shrink: 0;
}
</style>
