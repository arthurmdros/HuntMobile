const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(req,res){
        const { page = 1 } = req.query;        

        const [ count ] = await connection('products').count();

        const products = await connection('products')
            .limit(5)            
            .offset((page - 1) * 5)
            .select([    
                'products.id',
                'products.title',
                'products.description',
                'products.url'
            ]);

        res.header('X-Total-Count', count['count(*)']);    
        return res.json(products);
    },

    async create(req,res){
        const { title, description, url } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('products').insert({
            id,
            title,
            description,
            url,
        });

        return res.json({ id });
    },

    async delete(req,res){
        const { id } = req.params;
        
        const products = await connection('products')
            .where('id', id)
            .first();
        
        await connection('products').where('id', id).delete();

        return res.status(204).send();
    }
};