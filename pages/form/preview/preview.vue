<template>
    <view>
        <!--pages/form/preview/preview.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.riskpoint }}及{{ label.riskunit }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">{{ label.riskpoint }}</view>
                <text style="flex: 1">{{ risk_point.name }}</text>
            </view>
            <view class="cu-form-group">
                <view class="title">{{ label.riskunit }}</view>
                <text style="flex: 1">{{ risk_unit.name }}</text>
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.hazardsources }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <text style="flex: 1">{{ hazard_name }}</text>
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <text style="flex: 1; height: 150rpx">{{ hazard_description }}</text>
            </view>
            <block v-for="(item, index) in hazard_attribute" :key="index">
                <view class="cu-form-group">
                    <view class="title">{{ item.name }}</view>
                    <text style="flex: 1">{{ item.value }}</text>
                </view>
            </block>
            <view class="cu-form-group" style="display: block">
                <view class="title">图片</view>
                <image
                    v-if="hazard_photo"
                    :src="hazard_photo"
                    style="width: 120rpx; height: 120rpx; display: block; box-sizing: border-box; position: relative; margin: 10rpx 0"
                    @tap="preview"
                    :data-url="hazard_photo"
                ></image>
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.accident }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <text style="flex: 1">{{ accident_name }}</text>
            </view>
            <view class="cu-form-group">
                <view class="title">类型</view>
                <text style="flex: 1">{{ accident_type[1] }}</text>
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <text style="flex: 1; height: 150rpx">{{ accident_description }}</text>
            </view>
            <view class="cu-form-group" style="display: block">
                <view class="title">图片</view>
                <image
                    v-if="accident_photo"
                    :src="accident_photo"
                    style="width: 120rpx; height: 120rpx; display: block; box-sizing: border-box; position: relative; margin: 10rpx 0"
                    @tap="preview"
                    :data-url="accident_photo"
                ></image>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; top: 80rpx; margin-bottom: 40rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/form/preview/preview.js
const app = getApp();
export default {
    data() {
        return {
            risk_point: null,
            risk_unit: null,
            hazard_name: '',
            hazard_description: '',
            hazard_attribute: [],
            hazard_photo: null,
            accident_name: '',
            accident_type: null,
            accident_description: '',
            accident_photo: null,
            label: {
                riskpoint: '',
                riskunit: '',
                hazardsources: '',
                accident: ''
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        this.setData({
            risk_point: uni.getStorageSync('riskPoint'),
            risk_unit: uni.getStorageSync('riskUnit'),
            hazard_name: uni.getStorageSync('hazard_name'),
            hazard_description: uni.getStorageSync('hazard_description'),
            hazard_attribute: uni.getStorageSync('hazard_attribute'),
            hazard_photo: uni.getStorageSync('hazard_photo'),
            accident_name: uni.getStorageSync('accident_name'),
            accident_type: uni.getStorageSync('accident_type'),
            accident_description: uni.getStorageSync('accident_description'),
            accident_photo: uni.getStorageSync('accident_photo'),
            label: uni.getStorageSync('label')
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
        submit: function () {
            let that = this;
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/riskfactor/',
                method: 'POST',
                data: {
                    model: 2,
                    data: {
                        risk_unit: this.risk_unit.uuid,
                        name: this.hazard_name,
                        description: this.hazard_description,
                        attribute: this.hazard_attribute
                    }
                },

                success(res) {
                    console.log(res.data);
                    let uuid = res.data.uuid;
                    uni.uploadFile({
                        url: app.globalData.globalReqUrl + '/analysis/attachment/upload/',
                        filePath: that.hazard_photo,
                        name: 'attachment',
                        formData: {
                            uuid: uuid,
                            type: 'riskfactor',
                            model: 2
                        },

                        success(res) {
                            console.log(res.data);
                        }
                    });
                }
            });
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/accident/',
                method: 'POST',
                data: {
                    model: 2,
                    data: {
                        risk_unit: this.risk_unit.uuid,
                        name: this.accident_name,
                        accident_type: this.accident_type[0],
                        description: this.accident_description
                    }
                },

                success(res) {
                    console.log(res.data);
                    let uuid = res.data.uuid;
                    uni.uploadFile({
                        url: app.globalData.globalReqUrl + '/analysis/attachment/upload/',
                        filePath: that.accident_photo,
                        name: 'attachment',
                        formData: {
                            uuid: uuid,
                            type: 'accident',
                            model: 2
                        },

                        success(res) {
                            console.log(res.data);
                        }
                    });
                }
            });
            uni.reLaunch({
                url: '/pages/index/index'
            });
        },

        preview: function (e) {
            uni.previewImage({
                urls: [e.currentTarget.dataset.url]
            });
        }
    }
};
</script>
<style>
/* pages/form/preview/preview.wxss */
</style>
