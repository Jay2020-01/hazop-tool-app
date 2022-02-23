<template>
    <view>
        <!--pages/latency/solution/add/add.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>治理方案</text>
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
                <view class="title">开始时间</view>
                <input placeholder="输入" @input="getStartTime" />
            </view>
            <view class="cu-form-group">
                <view class="title">截止时间</view>
                <input placeholder="输入" @input="getEndTime" />
            </view>
            <block v-for="(item, index) in attribute.necessary" :key="index">
                <view class="cu-form-group">
                    <view class="title">{{ item.name }}</view>
                    <picker v-if="item.type == 'SmallIntegerField'" mode="selector" :range="item.List" @change="setValue" :data-index="index">{{ item.value }}</picker>
                    <input v-else placeholder="输入" @input="getValue" :data-index="index" />
                </view>
            </block>
        </form>
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>隐患</text>
            </view>
        </view>
        <form>
            <block v-for="(item, index) in latencyList" :key="index">
                <view class="cu-form-group">
                    <text style="flex: 1">{{ item.name }}</text>
                    <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0" @tap="deleteFun" :data-index="index">
                        -
                    </button>
                </view>
            </block>
            <view class="cu-form-group">
                <picker mode="selector" :range="latencyRange" range-key="name" @change="setLatency">{{ latency >= 0 ? latencyRange[latency].name : '请选择隐患' }}</picker>
                <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0; font-size: large" @tap="add">+</button>
            </view>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/latency/solution/add/add.js
const app = getApp();
export default {
    data() {
        return {
            code: '',
            name: '',
            description: '',
            startTime: '',
            endTime: '',
            latencyList: [],
            latency: -1,
            latencyRange: [],

            attribute: {
                necessary: []
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/latency/',

            success(res) {
                console.log(res);
                that.setData({
                    latencyRange: res.data.data.filter((item) => item.latency_management == null)
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

        setLatency: function (e) {
            this.setData({
                latency: e.detail.value
            });
        },

        add: function (e) {
            let tmp = this.latencyList;
            tmp.push(this.latencyRange[this.latency]);
            this.setData({
                latencyList: tmp,
                latency: -1
            });
        },

        deleteFun: function (e) {
            let tmp = this.latencyList;
            tmp.splice(e.currentTarget.dataset.index, 1);
            this.setData({
                latencyList: tmp
            });
        },

        submit: function (e) {
            let that = this;
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/latency_management/',
                method: 'POST',
                data: {
                    data: {
                        code: this.code,
                        name: this.name,
                        description: this.description,
                        start: this.startTime,
                        due: this.endTime
                    }
                },

                success(res) {
                    console.log(res);
                    let uuid = res.data.uuid;
                    that.latencyList.forEach((element) => {
                        console.log(element);
                        element.latency_management = uuid;
                        uni.request({
                            url: app.globalData.globalReqUrl + '/analysis/latency/',
                            method: 'PUT',
                            data: {
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
        },

        setValue() {
            console.log('占位：函数 setValue 未声明');
        },

        getValue() {
            console.log('占位：函数 getValue 未声明');
        }
    }
};
</script>
<style>
/* pages/latency/solution/add/add.wxss */
</style>
