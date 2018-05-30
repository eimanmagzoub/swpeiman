var mongoose = require("mongoose"),
Schema = mongoose.Schema,
objectId = mongoose.Schema.ObjectId;

var userSchema = new Schema({
_id: { type: objectId, auto: true },
name: { type: String, required: true },
phone: { type: String, required: true },
location: { type: String, required: true },
job: { type: String, required: true }
}, {
versionKey: false
});

var user = mongoose.model('users', userSchema);

module.exports = user;

