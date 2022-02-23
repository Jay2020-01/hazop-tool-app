<template>
    <view class="login-container">
        <view class="title">工艺危害分析工具</view>
        <view class="login-box">
            <label>用户名</label>
            <input placeholder="请输入用户名" @input="usernameInput" />
            <label>密码</label>
            <input type="password" placeholder="请输入密码" @input="passwordInput" />
            <button class="login-btn" @tap="login">登录</button>
            <button class="login-btn" style="background-color: green; margin-top: 10%">验证码登录</button>
        </view>
    </view>
</template>

<script>
// pages/login/login.js
const app = getApp();
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    }
    /**
     * 生命周期函数--监听页面加载
     */,
    onLoad: function (options) {},
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        uni.hideTabBar({});
    },
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
        // 获取输入账号
        usernameInput: function (e) {
            this.setData({
                username: e.detail.value
            });
        },

        // 获取输入密码
        passwordInput: function (e) {
            this.setData({
                password: e.detail.value
            });
        },

        // 登录处理
        login: function () {
            let that = this;

            if (this.username.length == 0 || this.password.length == 0) {
                uni.navigateTo({
                    url: '../index/index'
                });
                /*
        wx.showToast({
          title: '账号或密码不能为空',
          icon: 'none',
          duration: 2000
        })*/
            } else {
                uni.request({
                    url: app.globalData.globalReqUrl + '/login/',
                    method: 'post',
                    data: {
                        name: that.username,
                        password: that.password,
                        app_info: 2,
                        method: 1
                    },
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },

                    success(res) {
                        if (res.data.msg == 'success') {
                            uni.setStorageSync('session_key', res.data.session_key);
                            uni.navigateTo({
                                url: '../index/index'
                            });
                        } else {
                            uni.showToast({
                                title: res.data.message,
                                icon: 'none',
                                duration: 2000
                            });
                        }
                    }
                });
            }
        },

        //事件处理函数
        bindViewTap: function () {
            uni.navigateTo({
                url: '../logs/logs'
            });
        }
    }
};
</script>
<style>
page {
    height: 100%; /* 使用page的height可以使页面占全屏 */
    background-color: #fafafa;
}
.login-container {
    padding: 0 10%;
    height: 100%;
}
.title {
    font-size: large;
    text-align: center;
    padding-top: 10%;
    font-weight: bold;
}
.login-box {
    margin-top: 10%;
    padding: 10% 5%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 4px #888888;
}
.login-box > input {
    margin: 5% 0 8% 0;
    border-bottom: 1rpx solid lightgray;
}
.login-btn {
    width: 100% !important;
    background-color: #2f6afd;
    color: white;
    font-weight: normal;
}

.three-line {
    margin: 8% 0;
    text-align: center;
    font-size: 12px;
    color: gray;
}
</style>
