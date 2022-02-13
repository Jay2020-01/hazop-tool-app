<template>
    <!--pages/mainPage/plant/plant.wxml-->
    <view class="cu-list menu-avatar" style="margin-top: 12%; margin-bottom: 12%">
        <block v-for="(table, table_index) in plantTables" :key="table_index">
            <view class="cu-item">
                <view class="cu-avatar round lg" style="background-image: url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"></view>
                <navigator
                    class="content"
                    style="display: flex; flex-direction: column"
                    :url="'/pages/mainPage/plant/hazop_lopa_list/hazop_lopa_list?plantIndex=' + table_index"
                    hover-class="none"
                >
                    <view class="text-grey">
                        <text class="text-cut">{{ table.name }}</text>
                    </view>
                    <view class="text-gray text-sm flex">编号:{{ table.coder }} 位置:{{ table.site_name }}</view>
                </navigator>
            </view>
        </block>
    </view>
</template>

<script>
// pages/mainPage/plant/plant.js
export default {
    data() {
        return {
            plantTables: [],
            table_index: 0,

            table: {
                name: '',
                coder: '',
                site_name: ''
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
            url: 'http://39.102.44.76:8000/get_plant/',
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
                    uni.setStorageSync('plantList', res.data.data);
                    that.setData({
                        plantTables: temp
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
/* pages/mainPage/plant/plant.wxss */
</style>
