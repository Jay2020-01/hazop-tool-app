<template>
    <view>
        <!--pages/plantInfo/plantInfo.wxml-->
        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showBasicInformation">
            <view class="cu-item arrow" style="background: greenyellow" v-if="basicInformationShow">
                <view class="content">
                    <text></text>
                    <text>基本信息</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>基本信息</text>
                </view>
            </view>
        </view>
        <form v-if="basicInformationShow">
            <view class="cu-form-group">
                <view class="title">装置名称</view>
                <input placeholder="xxx" @input="plantNameInput" :value="plantName" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置编号</view>
                <input placeholder="xxx" @input="plantNameInput" :value="plantCoder" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置位置</view>
                <input placeholder="xxx" @input="plantNameInput" :value="plantLocation" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置所属公司</view>
                <input placeholder="xxx" @input="plantNameInput" :value="plantCompany" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">装置简介</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="plantNameInput" :value="plantBriefInformation" placeholder="xxx"></textarea>
            </view>
        </form>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showTecInformation">
            <view class="cu-item arrow" style="background: greenyellow" v-if="tecInformationShow">
                <view class="content">
                    <text></text>
                    <text>技术信息</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>技术信息</text>
                </view>
            </view>
        </view>
        <form v-if="tecInformationShow">
            <view class="cu-form-group">
                <view class="title">装置操作规范</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantProcedure" />
            </view>
            <view class="cu-form-group">
                <view class="title">工艺流程</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantProcess" />
            </view>
            <view class="cu-form-group">
                <view class="title">关键控制与连锁方案</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantSis" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">备注</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="companyNameInput" :value="plantComment" placeholder="xxx"></textarea>
            </view>
        </form>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showMaintenanceInformation">
            <view class="cu-item arrow" style="background: greenyellow" v-if="maintenanceInformationShow">
                <view class="content">
                    <text></text>
                    <text>维护信息</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>维护信息</text>
                </view>
            </view>
        </view>
        <form v-if="maintenanceInformationShow">
            <view class="cu-form-group">
                <view class="title">最近维护时间</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantMaintenanceTime" />
            </view>
            <view class="cu-form-group">
                <view class="title">预期报废时间</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantExpectScrapTime" />
            </view>
            <view class="cu-form-group">
                <view class="title">生产时间</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantProduceTime" />
            </view>
            <view class="cu-form-group">
                <view class="title">启动时间</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantStartTime" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置负责人</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantDirector" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置负责人联系电话</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantDirectorTel" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置设计者</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantDesigner" />
            </view>
            <view class="cu-form-group">
                <view class="title">装置建设者</view>
                <input placeholder="xxx" @input="companyNameInput" :value="plantConstructor" />
            </view>
        </form>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showAbbreviation">
            <view class="cu-item arrow" style="background: greenyellow" v-if="plantAbbreviationShow">
                <view class="content">
                    <text></text>
                    <text>缩写词维护</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>缩写词维护</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="plantAbbreviationShow">
            <block v-for="(table, table_index) in abbreviationTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" @tap="openAbbreviationModal" :data-abbreviation_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" @tap="openAbbreviationModal" :data-abbreviation_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="abbreviationShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in abbreviationCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-abbreviation_id="col_index" @blur="abbreviationDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editAbbreviationModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeAbbreviationModel">取消</button>
        </view>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showTerm">
            <view class="cu-item arrow" style="background: greenyellow" v-if="plantTermShow">
                <view class="content">
                    <text></text>
                    <text>术语维护</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>术语维护</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="plantTermShow">
            <block v-for="(table, table_index) in termTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td2" wx:item="item" @tap="openTermModal" :data-term_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td2" wx:item="item" @tap="openTermModal" :data-term_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="termShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in termCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-term_id="col_index" @blur="termDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editTermModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeTermModel">取消</button>
        </view>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showPlantUnit">
            <view class="cu-item arrow" style="background: greenyellow" v-if="plantUnitShow">
                <view class="content">
                    <text></text>
                    <text>装置单元</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>装置单元</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="plantUnitShow">
            <block v-for="(table, table_index) in unitTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td3" wx:item="item" @tap="openUnitModal" :data-unit_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td3" wx:item="item" @tap="openUnitModal" :data-unit_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="unitShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in unitCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-unit_id="col_index" @blur="unitDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editUnitModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeUnitModel">取消</button>
        </view>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showPlantFacility">
            <view class="cu-item arrow" style="background: greenyellow" v-if="plantFacilityShow">
                <view class="content">
                    <text></text>
                    <text>装置设备</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>装置设备</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="plantFacilityShow">
            <block v-for="(table, table_index) in facilityTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td3" wx:item="item" @tap="openFacilityModal" :data-facility_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td3" wx:item="item" @tap="openFacilityModal" :data-facility_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="facilityShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in facilityCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-facility_id="col_index" @blur="facilityDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editFacilityModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeFacilityModel">取消</button>
        </view>
    </view>
</template>

<script>
// pages/plantInfo/plantInfo.js
export default {
    data() {
        return {
            // basicInformationShow: false,
            plantName: '',

            plantCoder: '',
            plantLocation: '',
            plantCompany: '',
            plantBriefInformation: '',
            plantProcedure: '',
            plantProcess: '',
            plantSis: '',
            plantComment: '',
            plantMaintenanceTime: '',
            plantExpectScrapTime: '',
            plantProduceTime: '',
            plantStartTime: '',
            plantDirector: '',
            plantDirectorTel: '',
            plantDesigner: '',
            plantConstructor: '',
            abbreviationTables: [
                ['简写', '全称', '中文名', '解释'],
                ['xxx缩写词简写缩写词简写缩写词简写缩写词简写', 'xxx', 'xxx', 'xxx'],
                ['xxx', 'xxx', 'xxx', 'xxx'],
                ['xxx', 'xxx', 'xxx', 'xxx']
            ],
            termTables: [
                ['名称', '定义', '中文名称', '中文定义', '解释'],
                ['xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
                ['xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
                ['xxx', 'xxx', 'xxx', 'xxx', 'xxx']
            ],
            unitTables: [
                ['单元名', '单元编号'],
                ['xxx', 'xxx'],
                ['xxx', 'xxx'],
                ['xxx', 'xxx']
            ],
            facilityTables: [
                ['设备名', '设备编号'],
                ['xxx', 'xxx'],
                ['xxx', 'xxx'],
                ['xxx', 'xxx']
            ],
            basicInformationShow: false,
            tecInformationShow: false,
            maintenanceInformationShow: false,
            plantAbbreviationShow: false,
            abbreviationTitles: '',
            abbreviationCols: '',
            abbreviation_id: '',
            abbreviationShow: false,
            plantTermShow: false,
            termTitles: '',
            termCols: '',
            term_id: '',
            termShow: false,
            plantUnitShow: false,
            unitTitles: '',
            unitCols: '',
            unit_id: '',
            unitShow: false,
            plantFacilityShow: false,
            facilityTitles: '',
            facilityCols: '',
            facility_id: '',
            facilityShow: false,
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
    onLoad: function (options) {
        this.plantName = uni.getStorageSync('plantList')[options.plantIndex].name;
        this.plantCoder = uni.getStorageSync('plantList')[options.plantIndex].coder;
        this.plantLocation = uni.getStorageSync('plantList')[options.plantIndex].site_name;
        this.plantCompany = uni.getStorageSync('plantList')[options.plantIndex].company_name;
        this.plantBriefInformation = uni.getStorageSync('plantList')[options.plantIndex].brief_information;
        this.plantProcedure = uni.getStorageSync('plantList')[options.plantIndex].procedure;
        this.plantProcess = uni.getStorageSync('plantList')[options.plantIndex].process;
        this.plantSis = uni.getStorageSync('plantList')[options.plantIndex].SIS;
        this.plantComment = uni.getStorageSync('plantList')[options.plantIndex].comment;
        this.plantMaintenanceTime = uni.getStorageSync('plantList')[options.plantIndex].maintenance_time;
        this.plantExpectScrapTime = uni.getStorageSync('plantList')[options.plantIndex].expect_scrap_time;
        this.plantProduceTime = uni.getStorageSync('plantList')[options.plantIndex].produce_time;
        this.plantStartTime = uni.getStorageSync('plantList')[options.plantIndex].start_time;
        this.plantDirector = uni.getStorageSync('plantList')[options.plantIndex].director;
        this.plantDirectorTel = uni.getStorageSync('plantList')[options.plantIndex].director_tel;
        this.plantDesigner = uni.getStorageSync('plantList')[options.plantIndex].designer;
        this.plantConstructor = uni.getStorageSync('plantList')[options.plantIndex].constructor;
        this.setData({
            plantName: this.plantName,
            plantCoder: this.plantCoder,
            plantLocation: this.plantLocation,
            plantCompany: this.plantCompany,
            plantBriefInformation: this.plantBriefInformation,
            plantProcedure: this.plantProcedure,
            plantProcess: this.plantProcess,
            plantSis: this.plantSis,
            plantComment: this.plantComment,
            plantMaintenanceTime: this.plantMaintenanceTime,
            plantExpectScrapTime: this.plantExpectScrapTime,
            plantProduceTime: this.plantProduceTime,
            plantStartTime: this.plantStartTime,
            plantDirector: this.plantDirector,
            plantDirectorTel: this.plantDirectorTel,
            plantDesigner: this.plantDesigner,
            plantConstructor: this.plantConstructor
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
        showBasicInformation(e) {
            if (this.basicInformationShow === true) {
                this.setData({
                    basicInformationShow: false
                });
            } else {
                this.setData({
                    basicInformationShow: true
                });
            }
        },

        showTecInformation(e) {
            if (this.tecInformationShow === true) {
                this.setData({
                    tecInformationShow: false
                });
            } else {
                this.setData({
                    tecInformationShow: true
                });
            }
        },

        showMaintenanceInformation(e) {
            if (this.maintenanceInformationShow === true) {
                this.setData({
                    maintenanceInformationShow: false
                });
            } else {
                this.setData({
                    maintenanceInformationShow: true
                });
            }
        },

        showAbbreviation(e) {
            if (this.plantAbbreviationShow === true) {
                this.setData({
                    plantAbbreviationShow: false
                });
            } else {
                this.setData({
                    plantAbbreviationShow: true
                });
            }
        },

        openAbbreviationModal(e) {
            let abbreviation_id = e.target.dataset.abbreviation_id;
            let abbreviationCols_temp = JSON.parse(JSON.stringify(this.abbreviationTables[abbreviation_id]));
            this.setData({
                abbreviationTitles: this.abbreviationTables[0],
                abbreviationCols: abbreviationCols_temp,
                abbreviation_id: abbreviation_id,
                abbreviationShow: true
            });
        },

        abbreviationDataChange(e) {
            let abbreviationCols = this.abbreviationCols;
            abbreviationCols[e.target.dataset.abbreviation_id] = e.detail.value;
            console.log(abbreviationCols);
            console.log(this.abbreviationTables);
            this.setData({
                abbreviationCols: abbreviationCols
            });
        },

        editAbbreviationModel(e) {
            let abbreviationTables = this.abbreviationTables;
            abbreviationTables[this.abbreviation_id] = this.abbreviationCols;
            this.setData({
                abbreviationTables: abbreviationTables,
                abbreviationShow: false
            });
        },

        closeAbbreviationModel(e) {
            this.setData({
                abbreviationShow: false
            });
        },

        showTerm(e) {
            if (this.plantTermShow === true) {
                this.setData({
                    plantTermShow: false
                });
            } else {
                this.setData({
                    plantTermShow: true
                });
            }
        },

        openTermModal(e) {
            let term_id = e.target.dataset.term_id;
            let termCols_temp = JSON.parse(JSON.stringify(this.termTables[term_id]));
            this.setData({
                termTitles: this.termTables[0],
                termCols: termCols_temp,
                term_id: term_id,
                termShow: true
            });
        },

        termDataChange(e) {
            let termCols = this.termCols;
            termCols[e.target.dataset.term_id] = e.detail.value;
            console.log(termCols);
            console.log(this.termTables);
            this.setData({
                termCols: termCols
            });
        },

        editTermModel(e) {
            let termTables = this.termTables;
            termTables[this.term_id] = this.termCols;
            this.setData({
                termTables: termTables,
                termShow: false
            });
        },

        closeTermModel(e) {
            this.setData({
                termShow: false
            });
        },

        showPlantUnit(e) {
            if (this.plantUnitShow === true) {
                this.setData({
                    plantUnitShow: false
                });
            } else {
                this.setData({
                    plantUnitShow: true
                });
            }
        },

        openUnitModal(e) {
            let unit_id = e.target.dataset.unit_id;
            let unitCols_temp = JSON.parse(JSON.stringify(this.unitTables[unit_id]));
            this.setData({
                unitTitles: this.unitTables[0],
                unitCols: unitCols_temp,
                unit_id: unit_id,
                unitShow: true
            });
        },

        unitDataChange(e) {
            let unitCols = this.unitCols;
            unitCols[e.target.dataset.unit_id] = e.detail.value;
            console.log(unitCols);
            console.log(this.unitTables);
            this.setData({
                unitCols: unitCols
            });
        },

        editUnitModel(e) {
            let unitTables = this.unitTables;
            unitTables[this.unit_id] = this.unitCols;
            this.setData({
                unitTables: unitTables,
                unitShow: false
            });
        },

        closeUnitModel(e) {
            this.setData({
                unitShow: false
            });
        },

        showPlantFacility(e) {
            if (this.plantFacilityShow === true) {
                this.setData({
                    plantFacilityShow: false
                });
            } else {
                this.setData({
                    plantFacilityShow: true
                });
            }
        },

        openFacilityModal(e) {
            let facility_id = e.target.dataset.facility_id;
            let facilityCols_temp = JSON.parse(JSON.stringify(this.facilityTables[facility_id]));
            this.setData({
                facilityTitles: this.facilityTables[0],
                facilityCols: facilityCols_temp,
                facility_id: facility_id,
                facilityShow: true
            });
        },

        facilityDataChange(e) {
            let facilityCols = this.facilityCols;
            facilityCols[e.target.dataset.facility_id] = e.detail.value;
            console.log(facilityCols);
            console.log(this.facilityTables);
            this.setData({
                facilityCols: facilityCols
            });
        },

        editFacilityModel(e) {
            let facilityTables = this.facilityTables;
            facilityTables[this.facility_id] = this.facilityCols;
            this.setData({
                facilityTables: facilityTables,
                facilityShow: false
            });
        },

        closeFacilityModel(e) {
            this.setData({
                facilityShow: false
            });
        },

        plantNameInput: function (e) {
            this.setData({
                plantName: e.detail.value
            });
        },

        companyNameInput() {
            console.log('占位：函数 companyNameInput 未声明');
        }
    }
};
</script>
<style>
/* pages/plantInfo/plantInfo.wxss */
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
    width: 25%;
    min-height: 2rem;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    flex-shrink: 0;
    line-height: 2rem;
}

.td2 {
    width: 20%;
    min-height: 2rem;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    flex-shrink: 0;
    line-height: 2rem;
}

.td3 {
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
