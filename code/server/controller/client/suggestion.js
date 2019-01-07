import suggestionModel from '../../models/suggestion';

module.exports = {
    async add (ctx, next) {
        console.log('----------------添加意见建议 suggestion -----------------------');
        let paramsData = ctx.request.body;
        try {
            let data = await ctx.add(suggestionModel, paramsData);
            console.log('data', data);
            ctx.send(paramsData);
        } catch (e) {
            ctx.sendError(e);
        }
    }
};
