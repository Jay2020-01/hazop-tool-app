<template>
    <view>
        <!--pages/project/projectBasicInfo/projectBasicInfo.wxml-->
        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>基本信息</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">项目名称</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">项目编号</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">被评估公司</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">评估公司</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">预计起始时间</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">预计终止时间</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">项目创建时间</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">项目简介</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="textareaBInput" placeholder="xxx"></textarea>
            </view>
        </form>

        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>分析方法信息</text>
            </view>
        </view>
        <form>
            <view class="cu-form-group">
                <view class="title">项目分析方法</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">分析范围</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">分析目的</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group">
                <view class="title">分析依据</view>
                <input placeholder="xxx" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">备注</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="textareaBInput" placeholder="xxx"></textarea>
            </view>
        </form>

        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>合同信息</text>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table">
            <block v-for="(table, table_index) in contractTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td2" wx:item="item" @tap="openContractModal" :data-contract_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td2" wx:item="item" @tap="openContractModal" :data-contract_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="contractShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in contractCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-contract_id="col_index" @blur="contractDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editContractModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeContractModel">取消</button>
        </view>

        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>参与人员</text>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table">
            <block v-for="(table, table_index) in humanTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" @tap="openHumanModal" :data-human_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" @tap="openHumanModal" :data-human_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="humanShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in humanCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-human_id="col_index" @blur="humanDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editHumanModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeHumanModel">取消</button>
        </view>

        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>评估装置</text>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table">
            <block v-for="(table, table_index) in plantTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" @tap="openPlantModal" :data-plant_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" @tap="openPlantModal" :data-plant_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="plantShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in plantCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-plant_id="col_index" @blur="plantDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editPlantModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closePlantModel">取消</button>
        </view>

        <view class="cu-bar bg-green solid-bottom">
            <view class="action">
                <text>项目附件</text>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table">
            <block v-for="(table, table_index) in fileTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" @tap="openFileModal" :data-file_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" @tap="openFileModal" :data-file_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="fileShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in fileCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-file_id="col_index" @blur="fileDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editFileModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeFileModel">取消</button>
        </view>
    </view>
</template>

<script>
// pages/project/projectBasicInfo/projectBasicInfo.js
export default {
    data() {
        return {
            contractTables: [
                ['公司', '法人'],
                ['伊利瑞尔公司', '张三'],
                ['伊利瑞尔公司', '李四'],
                ['伊利瑞尔公司', '王五']
            ],
            humanTables: [
                ['用户姓名', '用户角色', '公司'],
                ['张三', '公司管理员', '伊利瑞尔公司'],
                ['李四', '项目管理员', '伊利瑞尔公司'],
                ['王五', '装置管理员', '莫甘娜公司']
            ],
            plantTables: [
                ['装置名称', '装置编号', '分析方法'],
                ['装置1', '001', 'HAZOP/LOPA'],
                ['装置2', '002', 'JHA'],
                ['装置3', '003', 'SCL']
            ],
            fileTables: [
                ['附件名', '附件编号', '附件种类'],
                ['炼钢图片', '001', '图片'],
                ['炼油厂文档', '002', 'word'],
                ['机械厂文档', '003', 'pdf']
            ],
            contractTitles: '',
            contractCols: '',
            contract_id: '',
            contractShow: false,
            humanTitles: '',
            humanCols: '',
            human_id: '',
            humanShow: false,
            plantTitles: '',
            plantCols: '',
            plant_id: '',
            plantShow: false,
            fileTitles: '',
            fileCols: '',
            file_id: '',
            fileShow: false,
            modalName: '',
            table_index: 0,
            table: [],
            col_index: 0,
            col: ''
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
        openContractModal(e) {
            let contract_id = e.target.dataset.contract_id;
            let contractCols_temp = JSON.parse(JSON.stringify(this.contract_Tables[contract_id]));
            this.setData({
                contractTitles: this.contract_Tables[0],
                contractCols: contractCols_temp,
                contract_id: contract_id,
                contractShow: true
            });
        },

        contractDataChange(e) {
            let contractCols = this.contractCols;
            contractCols[e.target.dataset.contract_id] = e.detail.value;
            console.log(contractCols);
            console.log(this.contractTables);
            this.setData({
                contractCols: contractCols
            });
        },

        editContractModel(e) {
            let contractTables = this.contractTables;
            contractTables[this.contract_id] = this.contractCols;
            this.setData({
                contractTables: contractTables,
                contractShow: false
            });
        },

        closeContractModel(e) {
            this.setData({
                contractShow: false
            });
        },

        openHumanModal(e) {
            let human_id = e.target.dataset.human_id;
            let humanCols_temp = JSON.parse(JSON.stringify(this.humanTables[human_id]));
            this.setData({
                humanTitles: this.humanTables[0],
                humanCols: humanCols_temp,
                human_id: human_id,
                humanShow: true
            });
        },

        humanDataChange(e) {
            let humanCols = this.humanCols;
            humanCols[e.target.dataset.human_id] = e.detail.value;
            console.log(humanCols);
            console.log(this.humanTables);
            this.setData({
                humanCols: humanCols
            });
        },

        editHumanModel(e) {
            let humanTables = this.humanTables;
            humanTables[this.human_id] = this.humanCols;
            this.setData({
                humanTables: humanTables,
                humanShow: false
            });
        },

        closeHumanModel(e) {
            this.setData({
                humanShow: false
            });
        },

        openPlantModal(e) {
            let plant_id = e.target.dataset.plant_id;
            let plantCols_temp = JSON.parse(JSON.stringify(this.plantTables[plant_id]));
            this.setData({
                plantTitles: this.plantTables[0],
                plantCols: plantCols_temp,
                plant_id: plant_id,
                plantShow: true
            });
        },

        plantDataChange(e) {
            let plantCols = this.plantCols;
            plantCols[e.target.dataset.plant_id] = e.detail.value;
            console.log(plantCols);
            console.log(this.plantTables);
            this.setData({
                plantCols: plantCols
            });
        },

        editPlantModel(e) {
            let plantTables = this.plantTables;
            plantTables[this.plant_id] = this.plantCols;
            this.setData({
                plantTables: plantTables,
                plantShow: false
            });
        },

        closePlantModel(e) {
            this.setData({
                plantShow: false
            });
        },

        openFileModal(e) {
            let file_id = e.target.dataset.file_id;
            let fileCols_temp = JSON.parse(JSON.stringify(this.fileTables[file_id]));
            this.setData({
                fileTitles: this.fileTables[0],
                fileCols: fileCols_temp,
                file_id: file_id,
                fileShow: true
            });
        },

        fileDataChange(e) {
            let fileCols = this.fileCols;
            fileCols[e.target.dataset.file_id] = e.detail.value;
            console.log(fileCols);
            console.log(this.fileTables);
            this.setData({
                fileCols: fileCols
            });
        },

        editFileModel(e) {
            let fileTables = this.fileTables;
            fileTables[this.file_id] = this.fileCols;
            this.setData({
                fileTables: fileTables,
                fileShow: false
            });
        },

        closeFileModel(e) {
            this.setData({
                fileShow: false
            });
        },

        textareaBInput() {
            console.log('占位：函数 textareaBInput 未声明');
        }
    }
};
</script>
<style>
/* pages/project/projectBasicInfo/projectBasicInfo.wxss */
.table {
    border: 0px solid darkgray;
    font-size: 12px;
}

.tr {
    display: flex;
    width: 100%;
    align-items: center;
}

.td {
    width: 33.3%;
    min-height: 2rem;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    flex-shrink: 0;
    line-height: 2rem;
}

.td2 {
    width: 50%;
    min-height: 2rem;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    flex-shrink: 0;
    line-height: 2rem;
}

.gray {
    background: white;
}
</style>
