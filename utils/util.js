const formatTime = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : `0${n}`;
};

const promiseRequest = function (url, data, method) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method: method,
            data: data,

            success(res) {
                resolve(res.data);
            },

            fail(res) {
                reject(res.data);
            }
        });
    });
};

module.exports = {
    formatTime,
    promiseRequest
};
