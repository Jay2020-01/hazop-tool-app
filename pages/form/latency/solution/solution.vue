<template>
    <view>
        <!--pages/form/latency/solution/solution.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>治理方案</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">对应隐患</view>
                <view>{{ latency.name }}</view>
            </view>
            <view class="cu-form-group">
                <view class="title">治理意见</view>
                <textarea placeholder="多行输入" @input="getSolution"></textarea>
            </view>
            <view class="cu-form-group">
                <view class="title">方案制定部门</view>
                <picker mode="selector" :range="departmentList" range-key="name" @change="setDepartmentSolution">
                    {{ department_solution != null ? department_solution.name : '请选择部门' }}
                </picker>
            </view>
            <view class="cu-form-group">
                <view class="title">制定人</view>
                <picker mode="selector" :range="respondentSolutionList" range-key="name" @change="setRespondentSolution" :disabled="department_solution == null">
                    {{ respondent_solution != null ? respondent_solution.name : '请选择负责人' }}
                </picker>
            </view>
            <view class="cu-form-group">
                <view class="title">治理负责部门</view>
                <picker mode="selector" :range="departmentList" range-key="name" @change="setDepartmentManage">
                    {{ department_manage != null ? department_manage.name : '请选择部门' }}
                </picker>
            </view>
            <view class="cu-form-group">
                <view class="title">治理负责人</view>
                <picker mode="selector" :range="respondentManageList" range-key="name" @change="setRespondentManage" :disabled="department_manage == null">
                    {{ respondent_manage ? respondent_manage.name : '请选择负责人' }}
                </picker>
            </view>
            <view class="cu-form-group">
                <view class="title">开始时间</view>
                <input placeholder="输入" @input="getStart" />
            </view>
            <view class="cu-form-group">
                <view class="title">截止时间</view>
                <input placeholder="输入" @input="getDue" />
            </view>
            <block v-for="(item, index) in attribute.necessary" :key="index">
                <view class="cu-form-group">
                    <view class="title">{{ item.name }}</view>
                    <picker v-if="item.type == 'SmallIntegerField'" mode="selector" :range="item.List" @change="setValue" :data-index="index">{{ item.value }}</picker>
                    <input v-else placeholder="输入" @input="getValue" :data-index="index" />
                </view>
            </block>
        </form>
        <button style="position: relative; left: 0rpx; margin-top: 100rpx; margin-bottom: 50rpx; background-color: #33cc99; color: white" @tap="submit">提 交</button>
    </view>
</template>

<script>
// pages/form/latency/solution/solution.js
const app = getApp();
export default {
    data() {
        return {
            latency: null,
            solution: '',
            start: '',
            due: '',
            department_solution: null,
            respondent_solution: null,
            department_manage: null,
            respondent_manage: null,
            departmentList: [],
            personList: [],
            respondentSolutionList: [],
            respondentManageList: [],

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
        let session_key = uni.getStorageSync('session_key');
        let company_id = uni.getStorageSync('company_id');
        uni.request({
            url: app.globalData.globalReqUrl + '/company/get_department_list/',
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                session_key: session_key,
                company_id: company_id
            },

            success(res) {
                console.log(res);
                that.setData({
                    departmentList: res.data.data
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/company/get_person_list/',
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                session_key: uni.getStorageSync('session_key'),
                company_id: uni.getStorageSync('company_id')
            },

            success(res) {
                that.setData({
                    personList: res.data.data
                });
            }
        });
        this.setData({
            latency: uni.getStorageSync('latency')
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
        getSolution: function (e) {
            this.setData({
                solution: e.detail.value
            });
        },

        getStart: function (e) {
            this.setData({
                start: e.detail.value
            });
        },

        getDue: function (e) {
            this.setData({
                due: e.detail.value
            });
        },

        setDepartmentSolution: function (e) {
            let department_solution = this.departmentList[e.detail.value];
            let respont_solution_list = this.personList.filter((item) => item.department == department_solution.name);
            this.setData({
                department_solution: department_solution,
                respondentSolutionList: respont_solution_list
            });
        },

        setRespondentSolution: function (e) {
            this.setData({
                respondent_solution: this.respondentSolutionList[e.detail.value]
            });
        },

        setDepartmentManage: function (e) {
            let department_manage = this.departmentList[e.detail.value];
            let respont_manage_list = this.personList.filter((item) => item.department == department_manage.name);
            this.setData({
                department_manage: department_manage,
                respondentManageList: respont_manage_list
            });
        },

        setRespondentManage: function (e) {
            this.setData({
                respondent_manage: this.respondentManageList[e.detail.value]
            });
        },

        submit: function (e) {
            let that = this;
            uni.request({
                url: app.globalData.globalReqUrl + '/analysis/latency_solution/',
                method: 'POST',
                data: {
                    data: {
                        latency: this.latency.uuid,
                        solution: this.solution,
                        department_solution: this.department_solution.id,
                        respondent_solution: this.respondent_solution.person_uuid,
                        department_manage: this.department_manage.id,
                        respondent_manage: this.respondent_manage.person_uuid,
                        start: this.start,
                        due: this.due
                    }
                },

                success(res) {
                    console.log(res);
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
/* pages/form/latency/solution/solution.wxss */
</style>
