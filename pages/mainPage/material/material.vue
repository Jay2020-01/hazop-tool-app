<template>
    <!--pages/mainPage/material/material.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <block v-for="(table, table_index) in materialTables" :key="table_index">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"></view>
                <navigator
                    class="content"
                    style="display: flex; flex-direction: column"
                    :url="'/pages/mainPage/material/materialBasicInfo/materialBasicInfo?materialIndex=' + table_index"
                    hover-class="none"
                >
                    <view class="text-grey">
                        <text class="text-cut">{{ table.name }}</text>
                    </view>
                    <view class="text-gray text-sm flex">MSDS中文名称:{{ table.chinese_name }} 所属:{{ table.company_name }}</view>
                </navigator>
            </view>
        </block>
    </view>
</template>

<script>
// pages/mainPage/material/material.js
export default {
    data() {
        return {
            materialTables: [],
            table_index: 0,

            table: {
                name: '',
                chinese_name: '',
                company_name: ''
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
            url: 'http://39.102.44.76:8000/msds/get_all/',
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
                    uni.setStorageSync('materialList', res.data.data);
                    that.setData({
                        materialTables: temp
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
/* pages/mainPage/material/material.wxss */
</style>
