let mongoose = require('mongoose');
// 配置表
let schema = new mongoose.Schema({
    name: String, age: Number
});
module.exports = mongoose.model('User', schema);
//# sourceMappingURL=user.js.map