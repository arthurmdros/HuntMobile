const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const products = await connection('products')
            .where('id', id)
            .select('*');

            return res.json(products);
    }
}