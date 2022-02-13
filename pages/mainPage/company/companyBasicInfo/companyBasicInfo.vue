<template>
    <view>
        <!--pages/mainPage/company/companyBasicInfo/companyBasicInfo.wxml-->
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
                <view class="title">公司名称</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyName" />
            </view>
            <view class="cu-form-group">
                <view class="title">社会应用代码</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyCoder" />
            </view>
            <view class="cu-form-group">
                <view class="title">所在地</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyLocation" />
            </view>
            <view class="cu-form-group">
                <view class="title">行业</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyIndustry" />
            </view>
            <view class="cu-form-group">
                <view class="title">网站</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyWebsite" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">简介</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="companyNameInput" :value="companyBriefInformation" placeholder="未填写"></textarea>
            </view>
        </form>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showContactInformation">
            <view class="cu-item arrow" style="background: greenyellow" v-if="contactInformationShow">
                <view class="content">
                    <text></text>
                    <text>联系信息</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>联系信息</text>
                </view>
            </view>
        </view>

        <form v-if="contactInformationShow">
            <view class="cu-form-group">
                <view class="title">联系人</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyContacts" />
            </view>
            <view class="cu-form-group">
                <view class="title">联系电话</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyContactsTel" />
            </view>
            <view class="cu-form-group">
                <view class="title">邮箱</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyEmail" />
            </view>
            <view class="cu-form-group">
                <view class="title">公司法人</view>
                <input placeholder="未填写" @input="companyNameInput" :value="companyCorporation" />
            </view>
            <view class="cu-form-group align-start">
                <view class="title">备注</view>
                <textarea maxlength="-1" :disabled="modalName != null" @input="companyNameInput" :value="companyComment" placeholder="未填写"></textarea>
            </view>
        </form>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showDepartment">
            <view class="cu-item arrow" style="background: greenyellow" v-if="departmentTableShow">
                <view class="content">
                    <text></text>
                    <text>部门管理</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>部门管理</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="departmentTableShow">
            <block v-for="(table, table_index) in departmentTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" @tap="openDepartmentModal" :data-department_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" @tap="openDepartmentModal" :data-department_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="departmentShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in departmentCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-department_id="col_index" @blur="departmentDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editDepartmentModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeDepartmentModel">取消</button>
        </view>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showHuman">
            <view class="cu-item arrow" style="background: greenyellow" v-if="humanTableShow">
                <view class="content">
                    <text></text>
                    <text>公司人员</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>公司人员</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="humanTableShow">
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

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showFactory">
            <view class="cu-item arrow" style="background: greenyellow" v-if="factoryTableShow">
                <view class="content">
                    <text></text>
                    <text>厂区分布</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>厂区分布</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="factoryTableShow">
            <block v-for="(table, table_index) in factoryTables" :key="table_index">
                <view class="tr gray" v-if="table_index % 2 == 0">
                    <view class="td" wx:item="item" @tap="openFactoryModal" :data-factory_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>

                <view class="tr" v-else>
                    <view class="td" wx:item="item" @tap="openFactoryModal" :data-factory_id="table_index" v-for="(item, index) in table" :key="index">{{ item }}</view>
                </view>
            </block>
        </scroll-view>

        <view v-if="factoryShow" class="mask-form">
            <view class="mask-content-container" v-for="(col, col_index) in factoryCols" :key="col_index">
                <!-- <text class="list-mask-title">{{titles[col_index]}}</text> -->

                <input class="list-mask-input" type="text" :value="col" :data-factory_id="col_index" @blur="factoryDataChange" />
            </view>
            <button class="btn btn-confirm" type="success" @tap="editFactoryModel">确认</button>
            <button class="btn btn-cancle" type="default" @tap="closeFactoryModel">取消</button>
        </view>

        <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" @tap="showFile">
            <view class="cu-item arrow" style="background: greenyellow" v-if="fileTableShow">
                <view class="content">
                    <text></text>
                    <text>公司附件</text>
                </view>
            </view>
            <view class="cu-item arrow" v-else>
                <view class="content">
                    <text></text>
                    <text>公司附件</text>
                </view>
            </view>
        </view>
        <scroll-view scroll-x style="width: 100%" class="table" v-if="fileTableShow">
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

        <!-- <view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" bindtap="showRiskPoint">
  <view class="cu-item arrow" style="background:greenyellow" wx:if="{{riskPointTableShow}}">
    <view class="content">
      <text></text>
      <text>风险点清单</text>
    </view>
  </view>
  <view class="cu-item arrow" wx:else>
    <view class="content">
      <text></text>
      <text>风险点清单</text>
    </view>
  </view>
</view>
<scroll-view scroll-x style="width: 100%" class="table" wx:if="{{riskPointTableShow}}">
    <block wx:for="{{riskPointTables}}" wx:for-item="table" wx:for-index="table_index">
        <view class="tr gray" wx:if="{{table_index % 2 == 0}}">
            <view class="td2" wx:for="{{table}}" wx:item="item" bindtap="openRiskPointModal" data-riskpoint_id="{{table_index}}">{{item}}</view>
        </view>
        <view class="tr" wx:else>
            <view class="td2" wx:for="{{table}}" wx:item="item" bindtap="openRiskPointModal" data-riskpoint_id="{{table_index}}">{{item}}</view>
        </view>
    </block>
</scroll-view>

<view wx:if="{{riskPointShow}}" class="mask-form">
    <view class="mask-content-container" wx:for="{{riskPointCols}}" wx:for-item="col" wx:for-index="col_index">
        <text class="list-mask-title">{{titles[col_index]}}</text>
        <input class="list-mask-input" type="text" value="{{col}}" data-riskpoint_id="{{col_index}}" bindblur="riskPointDataChange" />
    </view>
    <button class="btn btn-confirm" type="success" bindtap="editRiskPointModel">确认</button>
    <button class="btn btn-cancle" type="default" bindtap="closeRiskPointModel">取消</button>
</view>

<view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" bindtap="showJobActivity">
  <view class="cu-item arrow" style="background:greenyellow" wx:if="{{jobActivityTableShow}}">
    <view class="content">
      <text></text>
      <text>作业活动清单</text>
    </view>
  </view>
  <view class="cu-item arrow" wx:else>
    <view class="content">
      <text></text>
      <text>作业活动清单</text>
    </view>
  </view>
</view>
<scroll-view scroll-x style="width: 100%" class="table" wx:if="{{jobActivityTableShow}}">
    <block wx:for="{{jobActivityTables}}" wx:for-item="table" wx:for-index="table_index">
        <view class="tr gray" wx:if="{{table_index % 2 == 0}}">
            <view class="td3" wx:for="{{table}}" wx:item="item" bindtap="openJobActivityModal" data-jobactivity_id="{{table_index}}">{{item}}</view>
        </view>
        <view class="tr" wx:else>
            <view class="td3" wx:for="{{table}}" wx:item="item" bindtap="openJobActivityModal" data-jobactivity_id="{{table_index}}">{{item}}</view>
        </view>
    </block>
</scroll-view>

<view wx:if="{{jobActivityShow}}" class="mask-form">
    <view class="mask-content-container" wx:for="{{jobActivityCols}}" wx:for-item="col" wx:for-index="col_index">
        <text class="list-mask-title">{{titles[col_index]}}</text>
        <input class="list-mask-input" type="text" value="{{col}}" data-jobactivity_id="{{col_index}}" bindblur="jobActivityDataChange" />
    </view>
    <button class="btn btn-confirm" type="success" bindtap="editJobActivityModel">确认</button>
    <button class="btn btn-cancle" type="default" bindtap="closeJobActivityModel">取消</button>
</view>

<view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" bindtap="showAccident">
  <view class="cu-item arrow" style="background:greenyellow" wx:if="{{accidentTableShow}}">
    <view class="content">
      <text></text>
      <text>常见事故清单</text>
    </view>
  </view>
  <view class="cu-item arrow" wx:else>
    <view class="content">
      <text></text>
      <text>常见事故清单</text>
    </view>
  </view>
</view>
<scroll-view scroll-x style="width: 100%" class="table" wx:if="{{accidentTableShow}}">
    <block wx:for="{{accidentTables}}" wx:for-item="table" wx:for-index="table_index">
        <view class="tr gray" wx:if="{{table_index % 2 == 0}}">
            <view class="td3" wx:for="{{table}}" wx:item="item" bindtap="openAccidentModal" data-accident_id="{{table_index}}">{{item}}</view>
        </view>
        <view class="tr" wx:else>
            <view class="td3" wx:for="{{table}}" wx:item="item" bindtap="openAccidentModal" data-accident_id="{{table_index}}">{{item}}</view>
        </view>
    </block>
</scroll-view>

<view wx:if="{{accidentShow}}" class="mask-form">
    <view class="mask-content-container" wx:for="{{accidentCols}}" wx:for-item="col" wx:for-index="col_index">
        <text class="list-mask-title">{{titles[col_index]}}</text>
        <input class="list-mask-input" type="text" value="{{col}}" data-accident_id="{{col_index}}" bindblur="accidentDataChange" />
    </view>
    <button class="btn btn-confirm" type="success" bindtap="editAccidentModel">确认</button>
    <button class="btn btn-cancle" type="default" bindtap="closeAccidentModel">取消</button>
</view>

<view class="cu-list menu card-menu margin-top-xs margin-bottom-xs shadow-lg" bindtap="showHarm">
  <view class="cu-item arrow" style="background:greenyellow" wx:if="{{harmTableShow}}">
    <view class="content">
      <text></text>
      <text>常见危害清单</text>
    </view>
  </view>
  <view class="cu-item arrow" wx:else>
    <view class="content">
      <text></text>
      <text>常见危害清单</text>
    </view>
  </view>
</view>
<scroll-view scroll-x style="width: 100%" class="table" wx:if="{{harmTableShow}}">
    <block wx:for="{{harmTables}}" wx:for-item="table" wx:for-index="table_index">
        <view class="tr gray" wx:if="{{table_index % 2 == 0}}">
            <view class="td" wx:for="{{table}}" wx:item="item" bindtap="openHarmModal" data-harm_id="{{table_index}}">{{item}}</view>
        </view>
        <view class="tr" wx:else>
            <view class="td" wx:for="{{table}}" wx:item="item" bindtap="openHarmModal" data-harm_id="{{table_index}}">{{item}}</view>
        </view>
    </block>
</scroll-view>

<view wx:if="{{harmShow}}" class="mask-form">
    <view class="mask-content-container" wx:for="{{harmCols}}" wx:for-item="col" wx:for-index="col_index">
        <text class="list-mask-title">{{titles[col_index]}}</text>
        <input class="list-mask-input" type="text" value="{{col}}" data-harm_id="{{col_index}}" bindblur="harmDataChange" />
    </view>
    <button class="btn btn-confirm" type="success" bindtap="editHarmModel">确认</button>
    <button class="btn btn-cancle" type="default" bindtap="closeHarmModel">取消</button>
</view> -->
    </view>
</template>

<script>
// pages/mainPage/company/companyBasicInfo/companyBasicInfo.js
const app = getApp();
export default {
    data() {
        return {
            companyName: '',
            companyCoder: '',
            companyLocation: '',
            companyIndustry: '',
            companyWebsite: '',
            companyBriefInformation: '',
            companyContacts: '',
            companyContactsTel: '',
            companyEmail: '',
            companyCorporation: '',
            companyComment: '',
            departmentTables: [
                ['部门', '编号', '电话'],
                ['法务部', '001', '010-61236222'],
                ['财务部', '002', '18812345678'],
                ['人力资源部', '003', '18867891234']
            ],
            humanTables: [
                ['姓名', '编号', '部门'],
                ['张三', '001', '法务部'],
                ['李四', '002', '财务部'],
                ['王五', '003', '人力资源部']
            ],
            factoryTables: [
                ['厂区名', '厂区编号', '电话'],
                ['炼钢厂', '001', '010-61216222'],
                ['炼油厂', '002', '18812215678'],
                ['机械厂', '003', '18867441234']
            ],
            fileTables: [
                ['附件名', '附件编号', '附件种类'],
                ['炼钢图片', '001', '图片'],
                ['炼油厂文档', '002', 'word'],
                ['机械厂文档', '003', 'pdf']
            ],
            riskPointTables: [
                ['名称', '编号', '简介', '地点', '索引', '类型'],
                ['名称1', '001', '未填写', '炼油厂', '001', '明火']
            ],
            jobActivityTables: [
                ['名称', '编号', '简介', '频率'],
                ['名称1', '001', 'xxx', 'xxx'],
                ['名称2', '002', 'xxx', 'xxx'],
                ['名称3', '003', 'xxx', 'xxx']
            ],
            accidentTables: [
                ['名称', '编号', '简介', '类型'],
                ['名称1', '001', 'xxx', 'xxx'],
                ['名称2', '002', 'xxx', 'xxx'],
                ['名称3', '003', 'xxx', 'xxx']
            ],
            harmTables: [
                ['名称', '编号', '简介'],
                ['名称1', '001', 'xxx'],
                ['名称2', '002', 'xxx'],
                ['名称3', '003', 'xxx']
            ],
            basicInformationShow: false,
            contactInformationShow: false,
            departmentTableShow: false,
            departmentTitles: '',
            departmentCols: '',
            department_id: '',
            departmentShow: false,
            humanTableShow: false,
            humanTitles: '',
            humanCols: '',
            human_id: '',
            humanShow: false,
            factoryTableShow: false,
            factoryTitles: '',
            factoryCols: '',
            factory_id: '',
            factoryShow: false,
            fileTableShow: false,
            fileTitles: '',
            fileCols: '',
            file_id: '',
            fileShow: false,
            riskPointTableShow: false,
            riskPointTitles: '',
            riskPointCols: '',
            riskpoint_id: '',
            riskPointShow: false,
            jobActivityTableShow: false,
            jobActivityTitles: '',
            jobActivityCols: '',
            jobactivity_id: '',
            jobActivityShow: false,
            accidentTableShow: false,
            accidentTitles: '',
            accidentCols: '',
            accident_id: '',
            accidentShow: false,
            harmTableShow: false,
            harmTitles: '',
            harmCols: '',
            harm_id: '',
            harmShow: false,
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
        console.log(uni.getStorageSync('companyList')[options.companyIndex]);
        this.companyName = uni.getStorageSync('companyList')[options.companyIndex].name;
        this.companyCoder = uni.getStorageSync('companyList')[options.companyIndex].coder;
        this.companyLocation = uni.getStorageSync('companyList')[options.companyIndex].location;
        this.companyIndustry = uni.getStorageSync('companyList')[options.companyIndex].industry;
        this.companyWebsite = uni.getStorageSync('companyList')[options.companyIndex].website;
        this.companyBriefInformation = uni.getStorageSync('companyList')[options.companyIndex].brief_information;
        this.companyContacts = uni.getStorageSync('companyList')[options.companyIndex].contacts;
        this.companyContactsTel = uni.getStorageSync('companyList')[options.companyIndex].contacts_tel;
        this.companyEmail = uni.getStorageSync('companyList')[options.companyIndex].Email;
        this.companyCorporation = uni.getStorageSync('companyList')[options.companyIndex].corporation;
        this.companyComment = uni.getStorageSync('companyList')[options.companyIndex].comments;
        this.setData({
            companyName: this.companyName,
            companyCoder: this.companyCoder,
            companyLocation: this.companyLocation,
            companyIndustry: this.companyIndustry,
            companyWebsite: this.companyWebsite,
            companyBriefInformation: this.companyBriefInformation,
            companyContacts: this.companyContacts,
            companyContactsTel: this.companyContactsTel,
            companyEmail: this.companyEmail,
            companyCorporation: this.companyCorporation,
            companyComment: this.companyComment
        });
        let that = this;
        let company_id = uni.getStorageSync('companyList')[options.companyIndex].uuid;
        let session_key = uni.getStorageSync('session_key');
        uni.request({
            url: app.globalData.globalReqUrl + '/company/get_department_list/',
            method: 'POST',
            data: {
                company_id: company_id,
                session_key: session_key
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            success(res) {
                let tmp = res.data.data;
                let departmentTables = [['部门', '编号', '电话']];

                for (let e of tmp) {
                    departmentTables.push([e.name, e.coder, e.phone]);
                }

                that.setData({
                    departmentTables: departmentTables
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/company/get_person_list/',
            method: 'POST',
            data: {
                company_id: company_id,
                session_key: session_key
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            success(res) {
                let tmp = res.data.data;
                let humanTables = [['姓名', '编号', '部门']];

                for (let e of tmp) {
                    humanTables.push([e.name, e.coder, e.department]);
                }

                that.setData({
                    humanTables: humanTables
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/company/get_companyzone_list/',
            method: 'POST',
            data: {
                company_id: company_id,
                session_key: session_key
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            success(res) {
                let tmp = res.data.data;
                let factoryTables = [['厂区名', '厂区编号', '电话']];

                for (let e of tmp) {
                    factoryTables.push([e.name, e.coder, e.phone]);
                }

                that.setData({
                    factoryTables: factoryTables
                });
            }
        });
        uni.request({
            url: app.globalData.globalReqUrl + '/reference/get_list/',
            method: 'POST',
            data: {
                company_id: company_id,
                session_key: session_key
            },
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },

            success(res) {
                let tmp = res.data.data;
                let fileTables = [['附件名', '附件编号', '附件种类']];

                for (let e of tmp) {
                    fileTables.push([e.name, e.coder, e.func_type]);
                }

                that.setData({
                    fileTables: fileTables
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

        showContactInformation(e) {
            if (this.contactInformationShow === true) {
                this.setData({
                    contactInformationShow: false
                });
            } else {
                this.setData({
                    contactInformationShow: true
                });
            }
        },

        showDepartment(e) {
            if (this.departmentTableShow === true) {
                this.setData({
                    departmentTableShow: false
                });
            } else {
                this.setData({
                    departmentTableShow: true
                });
            }
        },

        openDepartmentModal(e) {
            let department_id = e.target.dataset.department_id;
            let departmentCols_temp = JSON.parse(JSON.stringify(this.departmentTables[department_id]));
            this.setData({
                departmentTitles: this.departmentTables[0],
                departmentCols: departmentCols_temp,
                department_id: department_id,
                departmentShow: true
            });
        },

        departmentDataChange(e) {
            let departmentCols = this.departmentCols;
            departmentCols[e.target.dataset.department_id] = e.detail.value;
            console.log(departmentCols);
            console.log(this.departmentTables);
            this.setData({
                departmentCols: departmentCols
            });
        },

        editDepartmentModel(e) {
            let departmentTables = this.departmentTables;
            departmentTables[this.department_id] = this.departmentCols;
            this.setData({
                departmentTables: departmentTables,
                departmentShow: false
            });
        },

        closeDepartmentModel(e) {
            this.setData({
                departmentShow: false
            });
        },

        showHuman(e) {
            if (this.humanTableShow === true) {
                this.setData({
                    humanTableShow: false
                });
            } else {
                this.setData({
                    humanTableShow: true
                });
            }
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

        showFactory(e) {
            if (this.factoryTableShow === true) {
                this.setData({
                    factoryTableShow: false
                });
            } else {
                this.setData({
                    factoryTableShow: true
                });
            }
        },

        openFactoryModal(e) {
            let factory_id = e.target.dataset.factory_id;
            let factoryCols_temp = JSON.parse(JSON.stringify(this.factoryTables[factory_id]));
            this.setData({
                factoryTitles: this.factoryTables[0],
                factoryCols: factoryCols_temp,
                factory_id: factory_id,
                factoryShow: true
            });
        },

        factoryDataChange(e) {
            let factoryCols = this.factoryCols;
            factoryCols[e.target.dataset.factory_id] = e.detail.value;
            console.log(factoryCols);
            console.log(this.factoryTables);
            this.setData({
                factoryCols: factoryCols
            });
        },

        editFactoryModel(e) {
            let factoryTables = this.factoryTables;
            factoryTables[this.factory_id] = this.factoryCols;
            this.setData({
                factoryTables: factoryTables,
                factoryShow: false
            });
        },

        closeFactoryModel(e) {
            this.setData({
                factoryShow: false
            });
        },

        showFile(e) {
            if (this.fileTableShow === true) {
                this.setData({
                    fileTableShow: false
                });
            } else {
                this.setData({
                    fileTableShow: true
                });
            }
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

        showRiskPoint(e) {
            if (this.riskPointTableShow === true) {
                this.setData({
                    riskPointTableShow: false
                });
            } else {
                this.setData({
                    riskPointTableShow: true
                });
            }
        },

        openRiskPointModal(e) {
            let riskpoint_id = e.target.dataset.riskpoint_id;
            let riskPointCols_temp = JSON.parse(JSON.stringify(this.riskPointTables[riskpoint_id]));
            this.setData({
                riskPointTitles: this.riskPointTables[0],
                riskPointCols: riskPointCols_temp,
                riskpoint_id: riskpoint_id,
                riskPointShow: true
            });
        },

        riskPointDataChange(e) {
            let riskPointCols = this.riskPointCols;
            riskPointCols[e.target.dataset.riskpoint_id] = e.detail.value;
            console.log(riskPointCols);
            console.log(this.riskPointTables);
            this.setData({
                riskPointCols: riskPointCols
            });
        },

        editRiskPointModel(e) {
            let riskPointTables = this.riskPointTables;
            riskPointTables[this.riskpoint_id] = this.riskPointCols;
            this.setData({
                riskPointTables: riskPointTables,
                riskPointShow: false
            });
        },

        closeRiskPointModel(e) {
            this.setData({
                riskPointShow: false
            });
        },

        showJobActivity(e) {
            if (this.jobActivityTableShow === true) {
                this.setData({
                    jobActivityTableShow: false
                });
            } else {
                this.setData({
                    jobActivityTableShow: true
                });
            }
        },

        openJobActivityModal(e) {
            let jobactivity_id = e.target.dataset.jobactivity_id;
            let jobActivityCols_temp = JSON.parse(JSON.stringify(this.jobActivityTables[jobactivity_id]));
            this.setData({
                jobActivityTitles: this.jobActivityTables[0],
                jobActivityCols: jobActivityCols_temp,
                jobactivity_id: jobactivity_id,
                jobActivityShow: true
            });
        },

        jobActivityDataChange(e) {
            let jobActivityCols = this.jobActivityCols;
            jobActivityCols[e.target.dataset.jobactivity_id] = e.detail.value;
            console.log(jobActivityCols);
            console.log(this.jobActivityTables);
            this.setData({
                jobActivityCols: jobActivityCols
            });
        },

        editJobActivityModel(e) {
            let jobActivityTables = this.jobActivityTables;
            jobActivityTables[this.jobactivity_id] = this.jobActivityCols;
            this.setData({
                jobActivityTables: jobActivityTables,
                jobActivityShow: false
            });
        },

        closeJobActivityModel(e) {
            this.setData({
                jobActivityShow: false
            });
        },

        showAccident(e) {
            if (this.accidentTableShow === true) {
                this.setData({
                    accidentTableShow: false
                });
            } else {
                this.setData({
                    accidentTableShow: true
                });
            }
        },

        openAccidentModal(e) {
            let accident_id = e.target.dataset.accident_id;
            console.log(accident_id);
            let accidentCols_temp = JSON.parse(JSON.stringify(this.accidentTables[accident_id]));
            this.setData({
                accidentTitles: this.accidentTables[0],
                accidentCols: accidentCols_temp,
                accident_id: accident_id,
                accidentShow: true
            });
        },

        accidentDataChange(e) {
            let accidentCols = this.accidentCols;
            accidentCols[e.target.dataset.accident_id] = e.detail.value;
            console.log(accidentCols);
            console.log(this.accidentTables);
            this.setData({
                accidentCols: accidentCols
            });
        },

        editAccidentModel(e) {
            let accidentTables = this.accidentTables;
            accidentTables[this.accident_id] = this.accidentCols;
            this.setData({
                accidentTables: accidentTables,
                accidentShow: false
            });
        },

        closeAccidentModel(e) {
            this.setData({
                accidentShow: false
            });
        },

        showHarm(e) {
            if (this.harmTableShow === true) {
                this.setData({
                    harmTableShow: false
                });
            } else {
                this.setData({
                    harmTableShow: true
                });
            }
        },

        openHarmModal(e) {
            let harm_id = e.target.dataset.harm_id;
            let harmCols_temp = JSON.parse(JSON.stringify(this.harmTables[harm_id]));
            this.setData({
                harmTitles: this.harmTables[0],
                harmCols: harmCols_temp,
                harm_id: harm_id,
                harmShow: true
            });
        },

        harmDataChange(e) {
            let harmCols = this.harmCols;
            harmCols[e.target.dataset.harm_id] = e.detail.value;
            console.log(harmCols);
            console.log(this.harmTables);
            this.setData({
                harmCols: harmCols
            });
        },

        editHarmModel(e) {
            let harmTables = this.harmTables;
            harmTables[this.harm_id] = this.harmCols;
            this.setData({
                harmTables: harmTables,
                harmShow: false
            });
        },

        closeHarmModel(e) {
            this.setData({
                harmShow: false
            });
        },

        companyNameInput: function (e) {
            this.setData({
                companyName: e.detail.value
            });
        }
    }
};
</script>
<style>
/* pages/mainPage/company/companyBasicInfo/companyBasicInfo.wxss */
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
    width: 16.6%;
    min-height: 2rem;
    justify-content: center;
    text-align: center;
    word-wrap: break-word;
    flex-shrink: 0;
    line-height: 2rem;
}

.td3 {
    width: 25%;
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
