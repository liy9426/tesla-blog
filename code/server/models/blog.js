import db from '../mongodb';
let blogSchema = db.Schema({
    type: String,
    subtypes: Array,
    title: String,
    desc: String,
    html: String,
    source: Number,
    url: String,
    releaseTime: Date,
    createTime: { type: Date, default: Date.now },
    readCount: { type: Number, default: 0 }
});
export default db.model('blog', blogSchema)
;
