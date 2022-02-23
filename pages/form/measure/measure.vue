<template>
    <view>
        <!--pages/form/measure/measure.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.riskpoint }}及{{ label.riskunit }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">{{ label.riskpoint }}</view>
                <text style="flex: 1">{{ risk_point }}</text>
            </view>
            <view class="cu-form-group">
                <view class="title">{{ label.riskunit }}</view>
                <text style="flex: 1">{{ risk_unit }}</text>
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
                <text style="flex: 1">{{ accident_type_dict[accident_type] }}</text>
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
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.evaluationlevel }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">{{ label.evaluationlevel }}</view>
                <text style="flex: 1">{{ evaluate_level }}</text>
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>{{ label.controllevel }}</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">{{ label.controllevel }}</view>
                <text style="flex: 1">{{ manage_level }}</text>
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>现有管控措施</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">工程技术</view>
                <textarea placeholder="多行输入" :value="engineering_technology" @input="getEngineeringTechnology"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">管理措施</view>
                <textarea placeholder="多行输入" :value="management_measures" @input="getManagementMeasures"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">培训教育</view>
                <textarea placeholder="多行输入" :value="training_education" @input="getTrainingEducation"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">个体防护</view>
                <textarea placeholder="多行输入" :value="personal_protection" @input="getPersonalProtection"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">应急处置</view>
                <textarea placeholder="多行输入" :value="emergency_handling" @input="getEmergencyHandling"></textarea>
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>建议新增措施</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">措施</view>
                <textarea placeholder="多行输入" :value="new_management" @input="getNewManagement"></textarea>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; top: 80rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/form/measure/measure.js
const app = getApp();
const fs = uni.getFileSystemManager();
export default {
    data() {
        return {
            risk_point: '',
            risk_unit: '',
            plan_management: '',
            hazard_name: '',
            hazard_description: '',
            hazard_attribute: [],
            hazard_photo: null,
            accident_name: '',
            accident_type: null,
            accident_description: '',
            accident_photo: null,
            evaluate_level: '',
            manage_level: '',
            engineering_technology: '',
            management_measures: '',
            training_education: '',
            personal_protection: '',
            emergency_handling: '',
            new_management: '',
            accident_type_dict: {},
            label: {
                riskpoint: '',
                riskunit: '',
                hazardsources: '',
                accident: '',
                evaluationlevel: '',
                controllevel: ''
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        let uuid = uni.getStorageSync('measure_unit_uuid');
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/riskunit/',
            data: {
                model: 2,
                uuid: uuid
            },

            success(res) {
                that.setData({
                    risk_unit: res.data.data[0].name
                });
                uni.request({
                    url: app.globalData.globalReqUrl + '/analysis/riskpoint/',
                    data: {
                        model: 2,
                        uuid: res.data.data[0].risk_point
                    },

                    success(res) {
                        that.setData({
                            risk_point: res.data.data[0].name
                        });
                        let plan_management = res.data.data[0].plan_management;
                        that.setData({
                            plan_management: plan_management
                        });
                        uni.request({
                            url: app.globalData.globalReqUrl + '/analysis/config/',
                            data: {
                                model: 2,
                                plan_management: plan_management
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
                            }
                        });
                        uni.request({
                            url: app.globalData.globalReqUrl + '/analysis/measure/',
                            data: {
                                plan_management: that.plan_management,
                                model: 2
                            },

                            success(res) {
                                let measures = res.data.data.pop();
                                that.setData({
                                    engineering_technology: measures.engineering_technology,
                                    management_measures: measures.management_measures,
                                    training_education: measures.training_education,
                                    personal_protection: measures.personal_protection,
                                    emergency_handling: measures.emergency_handling,
                                    new_management: measures.new_management
                                });
                            }
                        });
                    }
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/riskfactor/',
            data: {
                model: 2,
                risk_unit: uuid
            },

            success(res) {
                that.setData({
                    hazard_name: res.data.data[0].name,
                    hazard_description: res.data.data[0].description,
                    hazard_attribute: res.data.data[0].attribute
                });
                let uuid = res.data.data[0].uuid;
                uni.request({
                    url: app.globalData.globalReqUrl + '/analysis/attachment/query/',
                    data: {
                        uuid: uuid,
                        type: 'riskfactor',
                        model: 2
                    },

                    success(res) {
                        let filepath = res.data.fullname_list[0];
                        uni.request({
                            url: app.globalData.globalReqUrl + '/analysis/attachment/query/',
                            data: {
                                fullname: filepath
                            },
                            method: 'POST',
                            responseType: 'arraybuffer',

                            success(res) {
                                if (res.statusCode === 200) {
                                    fs.writeFileSync(uni.env.USER_DATA_PATH + '/static/hazard_photo.png', res.data, 'binary');
                                    that.setData({
                                        hazard_photo: uni.env.USER_DATA_PATH + '/static/hazard_photo.png'
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/accident/',
            data: {
                model: 2,
                risk_unit: uuid
            },

            success(res) {
                that.setData({
                    accident_name: res.data.data[0].name,
                    accident_type: res.data.data[0].accident_type,
                    accident_description: res.data.data[0].description
                });
                let uuid = res.data.data[0].uuid;
                uni.request({
                    url: app.globalData.globalReqUrl + '/analysis/attachment/query/',
                    data: {
                        uuid: uuid,
                        type: 'accident',
                        model: 2
                    },

                    success(res) {
                        let filepath = res.data.fullname_list[0];
                        uni.request({
                            url: app.globalData.globalReqUrl + '/analysis/attachment/query/',
                            data: {
                                fullname: filepath
                            },
                            method: 'POST',
                            responseType: 'arraybuffer',

                            success(res) {
                                if (res.statusCode === 200) {
                                    fs.writeFileSync(uni.env.USER_DATA_PATH + '/static/accident_photo.png', res.data, 'binary');
                                    that.setData({
                                        accident_photo: uni.env.USER_DATA_PATH + '/static/accident_photo.png'
                                    });
                                }
                            }
                        });
                    }
                });
                uni.request({
                    url: app.globalData.globalReqUrl + '/analysis/metadata/',
                    data: {
                        name: 'PlanAccident'
                    },

                    success(res) {
                        for (const e of res.data.data) {
                            if (e.name == 'accident_type') {
                                let typeList = e.choices;
                                let temp = {};

                                for (const item of typeList) {
                                    temp[item[0]] = item[1];
                                }

                                that.setData({
                                    accident_type_dict: temp
                                });
                            }
                        }
                    }
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/evaluation/',
            data: {
                risk_unit: uuid
            },

            success(res) {
                let evaluation = res.data.data.pop();
                that.setData({
                    evaluate_level: evaluation.evaluate_level,
                    manage_level: evaluation.manage_level
                });
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
        submit: function () {
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/measure/',
                method: 'POST',
                data: {
                    model: 2,
                    data: {
                        risk_unit: uni.getStorageSync('measure_unit_uuid'),
                        plan_management: this.plan_management,
                        engineering_technology: this.engineering_technology,
                        management_measures: this.management_measures,
                        training_education: this.training_education,
                        personal_protection: this.personal_protection,
                        emergency_handling: this.emergency_handling,
                        new_management: this.new_management
                    }
                },

                success(res) {
                    console.log(res.data);
                }
            });
            uni.reLaunch({
                url: '/pages/index/index'
            });
        },

        getEngineeringTechnology: function (e) {
            this.setData({
                engineering_technology: e.detail.value
            });
        },

        getManagementMeasures: function (e) {
            this.setData({
                management_measures: e.detail.value
            });
        },

        getTrainingEducation: function (e) {
            this.setData({
                training_education: e.detail.value
            });
        },

        getPersonalProtection: function (e) {
            this.setData({
                personal_protection: e.detail.value
            });
        },

        getEmergencyHandling: function (e) {
            this.setData({
                emergency_handling: e.detail.value
            });
        },

        getNewManagement: function (e) {
            this.setData({
                new_management: e.detail.value
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
/* pages/form/measure/measure.wxss */
</style>
