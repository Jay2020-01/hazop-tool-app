<script>
// app.js
export default {
    data() {
        return {};
    },
    onLaunch() {
        // 展示本地存储能力
        const logs = uni.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        uni.setStorageSync('logs', logs); // 登录

        // #ifdef MP-WEIXIN
		uni.login({
            success: (res) => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        }); // 获取用户信息

        uni.getSetting({
            success: (res) => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    uni.getUserInfo({
                        success: (res) => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo; // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况

                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res);
                            }
                        }
                    });
                }
            }
        });
		// #endif
    },
    globalData: {
        userInfo: null,
        globalReqUrl: 'http://39.102.44.76:8000'
    }
};
</script>
<style>
@import './colorui/main.css';
@import './colorui/icon.css'; /**app.wxss**/
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
}
</style>
