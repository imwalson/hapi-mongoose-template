/**
 * 文章表
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postSchema = new Schema({
    // 标题
    title: { type: String, required: true },
    // 内容
    content: { type: String, required: true },
    // 作者
    author: String,
    // 类型 （1、原创  2、转载）
    post_type: Number,
    // 标签列表
    tags: [  { type: String }  ],
    // 浏览量
    views: Number,
    // 点赞数
    upvote: Number,
    create_at: Date,
    update_at: Date,
    // 是否显示
    enabled: Boolean
});

module.exports = mongoose.model('Post', postSchema);