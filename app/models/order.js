/**
 * 订单
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var modelSchema = new Schema({
    // 编码
    code: { type: String, required: true, unique: true },
    // 患者ID
    Patient_ID: String,
    // 患者编号
    patient_code: String,
    // 患者姓名
    patient_name: String, 
    /**
     * 订单状态:
     * 
        1、 已下单
        2、 已采样
        3、 已寄样
        4、 已收样
        5、 已质检
        6、 已建库
        7、 已上机
        8、 已分析
        9、 已出报告
       10、 报告已审核
       11、 报告已发送
       12、 订单作废，需要重新下单采样
     */ 
    status: Number,
    // 已作废（软删除）
    trashed: Boolean,
    // 操作历史记录
    statusRecord:[
        {
            time: Date,
            operater: String,
            describe: String,
        }
    ],
    // 订单类型 （1、原始订单 2、重采样订单）
    order_type: Number,
    // 原始订单编号
    original_order_code: String,
    // 重采样原因 (质检不合格、下机数据不合格)
    restart_reason: String,
    // 位置信息
    address: {
        province: String,
        city: String,
        hospital_code: String,
        hospital: String,
        department_code: String,
        department: String
    },
    // 创建时间
    create_at: Date,
    // 医生编码
    doctor_code: String,
    // 医生姓名
    doctor_name: String,
    // 销售编码
    salesman_code: String,
    // 销售姓名
    salesman_name: String,
    // 项目一级编码
    sort_code_1: String,
    // 项目二级编码
    sort_code_2: String,
    // 项目三级编码
    sort_code_3: String,
    // 个性化定制自选基因名称
    sort_code_individuation: String,
    // 订单已确认
    order_confirmed: Boolean,
    // 订单确认时间
    order_confirme_at: Date,
    // 订单确认人
    order_confirmer: String,
    // 支付方式
    payment_tunnel: String,
    // 支付已确认
    payment_confirmed: Boolean,
    // 支付时间
    pay_at: Date,
    // 支付确认时间
    payment_confirme_at: Date,
    // 应收价格
    original_price: Number,
    // 实际检测价格
    price: Number,
    // 优惠方式
    privilege_cause: String,
    // 要求发票
    require_invoice: Boolean,
    // 发票已开
    invoiced: Boolean,
    // 开票金额
    invoice_price: Number,
    // 发票抬头
    invoice_head: String,
    // 开具发票确认时间
    invoice_confirme_at: Date,
    // 开具发票确认人
    invoice_confirmer: String, 
    // 支付确认人
    payment_confirmer: String,
    // 电子版报告
    electronic_report: {
        // 状态（0、未发送 1、已发送 2、已收到）
        status: Number,
        // 发送时间
        send_at: Date,
        // 电子版接收email
        receiver_email: String,
        // 接收人
        receiver_name: String,
        // 发送人
        operater: String,
        // 邮件的个性化内容
        content: String
    },
    // 纸质版报告
    paper_report: {
        // 状态（0、未发送 1、已发送）
        status: Number,
        // 发送时间
        send_at: Date,
        // 接收人
        receiver_name: String,
        // 接收人电话
        receiver_mobile: String,
        // 寄送地址
        send_address: String,
        // 快递公司
        express_company: String,
        // 快递单号
        express_code: String,
        // 用户自取备注信息
        offline_take_info: String,
        // 发送人
        operater: String,
    },
    // 备注
    remarks: String,
    // 是否已采样
    is_sampled: Boolean,
    // 样本实例列表
    sample_list: [
        {
            sample_type: String,// 样本类型
            sample_count: Number,// 样本数量
            sample_unit: String,// 样本单位
            sampler_code: String,// 条码编号
            sampler_remarks: String,// 样本备注
            sampling_at: String// 采样日期
        }
    ],
    // 采样时间
    sampling_at: Date,
    // 采样人员
    sampling_man: String,
    // 寄样时间
    send_at: Date,
    // 寄样时间
    sample_post_at: Date,
    // 寄样快递单号
    sample_express_code: String,
    // 寄样快递公司
    sample_express_company: String,
    // 收样时间
    sample_receive_at: Date,
    // 样本接收时间
    receive_at: Date,
    // 样本质检时间
    quality_assurance_at: Date,
    // 样本质检结果
    quality_assurance_result: String,
    // 完成建库时间
    database_create_at: Date,
    // 上机测序时间
    sequencing_at: Date,
    // 分析完成时间
    analyze_complete_at: Date,
    // 报告批次编号
    report_batch_code: String,
    // 报告编号
    report_code: String,
    // 报告文件地址
    report_url: String,
    // 生成报告时间
    report_generate_at: Date,
    // 报告审核时间
    report_review_at: Date,
    // 报告审核被拒过
    //report_review_failed: Boolean,
    // 报告审核被拒原因
    //report_review_failed_reason: String,
    // 完成时间
    complete_at: Date,
    // 分析结果
    analyze_result: String,
    // 位点列表
    locus: [
        {
            gene_name: String, // 基因名称
            gene_locus: String, // 基因位点
            gene_value: String, // 基因值
            reference_value: String // 参考值
        }
    ],
    // 附件列表
    file_list: [
        {
            file_name: String,// 文件名
            file_url: String// 文件链接
        }
    ]
});

module.exports = mongoose.model('Order', modelSchema);