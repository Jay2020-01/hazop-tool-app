<template>
    <view>
        <!--pages/form/hazard.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.hazardsources }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
            </view>
            <block v-for="(item, index) in attribute.necessary" :key="index">
                <view class="cu-form-group">
                    <view class="title">{{ item.name }}</view>
                    <picker v-if="item.type == 'SmallIntegerField'" mode="selector" :range="item.List" @change="setValue" :data-index="index">{{ item.value }}</picker>
                    <input v-else placeholder="输入" @input="getValue" :data-index="index" />
                </view>
            </block>
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
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="accident">下 一 步</button>
    </view>
</template>

<script>
// pages/form/hazard.js
const app = getApp();
export default {
    data() {
        return {
            name: '',
            description: '',
            photo: null,
            attribute: {
                config_type: '危险源表单步骤一',
                necessary: [],
                unnecessary: []
            },
            typeList: [
                ['TextField', '输入', 255],
                ['SmallIntegerField', '选择', null]
            ],
            typeDict: {
                TextField: '输入',
                SmallIntegerField: '选择',
                null: '选择类型'
            },
            label: {
                hazardsources: ''
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
            url: app.globalData.globalReqUrl + '/analysis/config/',
            data: {
                model: 2,
                plan_management: uni.getStorageSync('form_plan_uuid')
            },

            success(res) {
                let attribute = {};

                while (res.data.data && res.data.data.length > 0) {
                    attribute = res.data.data.pop().attribute;

                    if (attribute.config_type == '危险源因素属性') {
                        break;
                    } else {
                        attribute = {};
                    }
                }

                for (const e of attribute.necessary) {
                    if (e.type == 'SmallIntegerField') {
                        e.value = '请选择';
                    }
                }

                that.setData({
                    attribute: attribute
                });
                console.log(that);
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
        accident: function () {
            uni.setStorageSync('hazard_name', this.name);
            uni.setStorageSync('hazard_description', this.description);
            uni.setStorageSync('hazard_photo', this.photo);
            uni.setStorageSync('hazard_attribute', this.attribute.necessary.concat(this.attribute.unnecessary));
            uni.navigateTo({
                url: '/pages/form/accident/accident'
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

        getValue: function (e) {
            let index = e.currentTarget.dataset.index;
            this.attribute.necessary[index].value = e.detail.value;
        },

        setValue: function (e) {
            let index = e.currentTarget.dataset.index;
            let tmp = this.attribute;
            tmp.necessary[index].value = tmp.necessary[index].List[e.detail.value];
            this.setData({
                attribute: tmp
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
/* pages/form/hazard.wxss */
</style>
