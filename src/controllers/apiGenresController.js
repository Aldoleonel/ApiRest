const db = require('../database/models');
const { getAllGenres } = require('../services/genres.services');
module.exports = {
    index: async (req,res) => {
        try{
            const {genres} = await getAllGenres();
            return res.status(200).json({
                ok: true,
                meta: {
                    total: genres.length
                },
                data: genres.map(genre=> {
                    return {
                            ...genre.dataValues,
                            url : `${req.protocol}://${req.get('host')}/api/v1/genres/${genre.id}`
                    }
                })
            })
        }catch(error){
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                status: error.status || 500,
                error: error.message || 'ERROR EN EL SERVICIO'
            })
        }
    },
    show: (req,res) => {

    }

};