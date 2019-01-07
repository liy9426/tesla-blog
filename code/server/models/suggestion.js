import db from '../mongodb';
let suggestionSchema = db.Schema({
    type: String,
    title: String,
    content: String
});
export default db.model('suggestion', suggestionSchema);
