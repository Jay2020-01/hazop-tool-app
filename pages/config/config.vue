<template>
    <view>
        <!--pages/config/config.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>配置</text>
            </view>
        </view>
        <form>
            <block v-for="(item, index) in necessary" :key="index">
                <view class="cu-form-group">
                    <text style="flex: 1">{{ item.name }}</text>
                    <text style="flex: 1">{{ typeDict[item.type] }}</text>
                    <text style="flex: 1">{{ item.List }}</text>
                    <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0" @tap="deleteFun" :data-index="index">
                        -
                    </button>
                </view>
            </block>
            <view class="cu-form-group">
                <input placeholder="属性名" :value="name" @input="getName" />
                <picker mode="selector" :range="typeList" range-key="1" @change="setType">{{ type[1] }}</picker>
                <input placeholder="取值范围" :value="List" @input="getRange" />
                <button style="border-radius: 50%; background-color: #3388bb; color: white; width: 60rpx; height: 60rpx; padding: 0; font-size: large" @tap="add">+</button>
            </view>
        </form>
    </view>
</template>

<script>
// pages/config/config.js
const app = getApp();
export default {
    data() {
        return {
            necessary: [],
            unnecessary: [],
            name: '',
            type: ['null', '选择类型', null],
            List: '',
            name2: '',
            type2: ['null', '选择类型', null],
            List2: '',
            typeList: [
                ['TextField', '输入', 255],
                ['SmallIntegerField', '选择', null]
            ],
            typeDict: {
                TextField: '输入',
                SmallIntegerField: '选择',
                null: '选择类型'
            }
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {
        let that = this;
        let uuid = uni.getStorageSync('config_plan_uuid');
        uni.request({
            url: app.globalData.globalReqUrl + '/analysis/config/',
            data: {
                model: 2,
                plan_management: uuid
            },

            success(res) {
                console.log(res);
                let attribute = res.data.data.pop().attribute;
                that.setData({
                    necessary: attribute.necessary,
                    unnecessary: attribute.unnecessary
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
        getName: function (e) {
            this.setData({
                name: e.detail.value
            });
        },

        setType: function (e) {
            this.setData({
                type: this.typeList[e.detail.value]
            });
        },

        getRange: function (e) {
            this.setData({
                List: e.detail.value
            });
        },

        add: function () {
            if (this.name == '') {
                uni.showModal({
                    title: '错误',
                    content: '属性名不能为空'
                });
                return;
            }

            if (this.type[1] == '选择类型') {
                uni.showModal({
                    title: '错误',
                    content: '类型不能为空'
                });
                return;
            }

            let List = null;

            try {
                List = JSON.parse('[' + this.List + ']');
                console.log('list:');
                console.log(List);
            } catch (e) {
                uni.showModal({
                    title: '错误',
                    content: '取值范围出错'
                });
                return;
            }

            let tmp = this.necessary;
            tmp.push({
                name: this.name,
                type: this.type[0],
                max_length: this.type[2],
                List: List
            });
            this.setData({
                necessary: tmp,
                name: '',
                type: ['null', '选择类型', null],
                List: ''
            });
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/config/',
                method: 'POST',
                data: {
                    model: 2,
                    data: {
                        name: 'hazard_config',
                        plan_management: uni.getStorageSync('config_plan_uuid'),
                        method: 0,
                        attribute: {
                            config_type: '危险源因素属性',
                            necessary: this.necessary,
                            unnecessary: this.unnecessary
                        }
                    }
                },

                success(res) {
                    console.log(res);
                }
            });
        },

        deleteFun: function (e) {
            console.log(e.currentTarget);
            let tmp = this.necessary;
            tmp.splice(e.currentTarget.dataset.index, 1);
            this.setData({
                necessary: tmp
            });
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/config/',
                method: 'POST',
                data: {
                    model: 2,
                    data: {
                        name: 'hazard_config',
                        plan_management: uni.getStorageSync('config_plan_uuid'),
                        method: 0,
                        attribute: {
                            config_type: '危险源因素属性',
                            necessary: this.necessary,
                            unnecessary: this.unnecessary
                        }
                    }
                },

                success(res) {
                    console.log(res);
                }
            });
        }
    }
};
</script>
<style>
/* pages/config/config.wxss */
</style>
