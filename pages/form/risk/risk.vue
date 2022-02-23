<template>
    <view>
        <!--pages/form/risk/risk.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.riskpoint }}及{{ label.riskunit }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">{{ label.riskpoint }}</view>
                <picker mode="selector" :range="riskPointList" range-key="name" @change="setRiskPoint">{{ riskPoint.name }}</picker>
                <text class="cuIcon-location" @tap="openMap"></text>
            </view>
            <view class="cu-form-group">
                <view class="title">{{ label.riskunit }}</view>
                <picker mode="selector" :range="riskUnitList" range-key="name" @change="setRiskUnit" :disabled="riskUnit_disabled">{{ riskUnit.name }}</picker>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; top: 733rpx; background-color: #33cc99; color: white" @tap="hazard">下 一 步</button>
    </view>
</template>

<script>
// pages/form/risk/risk.js
const app = getApp();
export default {
    data() {
        return {
            riskList: null,
            riskPointList: [],
            riskPoint: {
                name: '请选择'
            },
            riskUnitList: [],
            riskUnit: {
                name: '请选择'
            },
            riskUnit_disabled: true,
            label: {
                riskpoint: '',
                riskunit: ''
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        let uuid = uni.getStorageSync('form_plan_uuid');
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/config/',
            data: {
                model: 2,
                plan_management: uuid
            },

            success(res) {
                let label = {
                    riskpoint: '风险点',
                    riskunit: '风险单元',
                    hazardsources: '危险源',
                    accident: '事故',
                    evaluationlevel: '评价级别',
                    controllevel: '管控级别'
                };

                while (res.data.data && res.data.data.length > 0) {
                    let tmp = res.data.data.pop().attribute;

                    if (tmp.config_type == '分级管控标签属性') {
                        console.log(tmp);
                        label = {
                            riskpoint: tmp.labels[0].newName,
                            riskunit: tmp.labels[2].newName,
                            hazardsources: tmp.labels[3].newName,
                            accident: tmp.labels[4].newName,
                            evaluationlevel: tmp.labels[5].newName,
                            controllevel: tmp.labels[6].newName
                        };
                        break;
                    }
                }

                that.setData({
                    label: label
                });
                uni.setStorageSync('label', label);
                console.log(that);
            }
        }); // wx.request({
        //   url: app.globalData.globalReqUrl +'/analysis/risklist/',
        //   data: {
        //     model: 2,
        //     plan_management: uuid
        //   },
        //   success (res) {
        //     that.setData({"riskList": res.data.data[0]});

        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/riskpoint/',
            data: {
                model: 2,
                plan_management: uuid
            },

            success(res) {
                that.setData({
                    riskPointList: res.data.data
                });
            }
        }); //   }
        // });
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
        hazard: function () {
            uni.setStorageSync('riskPoint', this.riskPoint);
            uni.setStorageSync('riskUnit', this.riskUnit);
            uni.navigateTo({
                url: '/pages/form/hazard/hazard'
            });
        },

        setRiskPoint: function (e) {
            let that = this;
            this.setData({
                riskPoint: this.riskPointList[e.detail.value]
            });
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/riskunit',
                data: {
                    model: 2,
                    risk_point: that.riskPoint.uuid
                },

                success(res) {
                    that.setData({
                        riskUnitList: res.data.data,
                        riskUnit: {
                            name: '请选择'
                        },
                        riskUnit_disabled: false
                    });
                }
            });
        },

        setRiskUnit: function (e) {
            this.setData({
                riskUnit: this.riskUnitList[e.detail.value]
            });
        },

        openMap: function (e) {
            uni.navigateTo({
                url: '/pages/map/map'
            });
        }
    }
};
</script>
<style>
/* pages/form/risk/risk.wxss */
</style>
