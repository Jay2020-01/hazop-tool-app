<template>
    <view>
        <!--pages/latency/latency/add/add.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>排查计划</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">编号</view>
                <input placeholder="输入" @input="getCode" />
            </view>
            <view class="cu-form-group">
                <view class="title">名称</view>
                <input placeholder="输入" @input="getName" />
            </view>
            <view class="cu-form-group">
                <view class="title">描述</view>
                <textarea placeholder="多行输入" @input="getDescription"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">类型</view>
                <picker mode="selector" :range="typeList" @change="setType">{{ type >= 0 ? typeList[type] : '请选择' }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">周期</view>
                <picker mode="selector" :range="cycleList" @change="setCycle">{{ cycle >= 0 ? cycleList[cycle] : '请选择' }}</picker>
            </view>
            <view class="cu-form-group">
                <view class="title">开始时间</view>
                <input placeholder="输入" @input="getStartTime" />
            </view>
            <view class="cu-form-group">
                <view class="title">截止时间</view>
                <input placeholder="输入" @input="getEndTime" />
            </view>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action" style="flex: 7; justify-content: start">
                <text>排查点</text>
            </view>
            <view class="cuIcon-pulldown" @tap="pulldown" style="flex: 1; font-size: x-large"></view>
        </view>
        <form>
            <block v-for="(item, index) in hiddenDangerList" :key="index">
                <view class="cu-form-group">
                    <text style="flex: 1">{{ item.name }}</text>
                    <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0;  display: flex; align-items: center; justify-content: center;" @tap="deleteFun" :data-index="index">
                        -
                    </button>
                </view>
            </block>
            <view class="cu-form-group">
                <picker mode="selector" :range="hiddenDangerRange" range-key="name" @change="setHiddenDanger">
                    {{ hiddenDanger != null ? hiddenDanger.name : '请选择排查点' }}
                </picker>
                <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0; font-size: large; display: flex; align-items: center; justify-content: center;" @tap="add">+</button>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/latency/latency/add/add.js
const app = getApp();
export default {
    data() {
        return {
            code: '',
            name: '',
            description: '',
            startTime: '',
            endTime: '',
            typeList: ['日常', '专项', '综合性'],
            type: -1,
            cycleList: ['每天', '每周', '每月', '每季', '每年'],
            cycle: -1,
            hiddenDangerList: [],
            hiddenDanger: null,
            hiddenDangerRange: []
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/hidden_danger/',
            data: {
                model: 2
            },

            success(res) {
                console.log(res);
                that.setData({
                    hiddenDangerRange: res.data.data
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
        getCode: function (e) {
            this.setData({
                code: e.detail.value
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

        getStartTime: function (e) {
            this.setData({
                startTime: e.detail.value
            });
        },

        getEndTime: function (e) {
            this.setData({
                endTime: e.detail.value
            });
        },

        setCycle: function (e) {
            this.setData({
                cycle: e.detail.value
            });
        },

        setType: function (e) {
            this.setData({
                type: e.detail.value
            });
        },

        setHiddenDanger: function (e) {
            this.setData({
                hiddenDanger: this.hiddenDangerRange[e.detail.value]
            });
        },

        pulldown: function (e) {
            this.setData({
                hiddenDangerList: this.hiddenDangerRange.slice(0)
            });
        },

        add: function (e) {
            let tmp = this.hiddenDangerList;
            tmp.push(this.hiddenDanger);
            this.setData({
                hiddenDangerList: tmp,
                hiddenDanger: null
            });
        },

        deleteFun: function (e) {
            let tmp = this.hiddenDangerList;
            tmp.splice(e.currentTarget.dataset.index, 1);
            this.setData({
                hiddenDangerList: tmp
            });
        },

        submit: function (e) {
            let that = this;
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/latency_plan/',
                method: 'POST',
                data: {
                    data: {
                        code: this.code,
                        name: this.name,
                        description: this.description,
                        type: this.type,
                        cycle: this.cycle,
                        start: this.startTime,
                        due: this.endTime
                    }
                },

                success(res) {
                    console.log(res);
                    let uuid = res.data.uuid;
                    that.hiddenDangerList.forEach((element) => {
                        console.log(element);
                        element.latency_plan.push(uuid);
                        uni.request({
                            url: app.globalData.globalReqUrl + '/analysis/hidden_danger/',
                            method: 'PUT',
                            data: {
                                model: 2,
                                uuid: element.uuid,
                                data: element
                            },

                            success(res) {
                                console.log(res);
                            }
                        });
                    });
                }
            });
            uni.navigateBack();
        }
    }
};
</script>
<style>
/* pages/latency/latency/add/add.wxss */
</style>
