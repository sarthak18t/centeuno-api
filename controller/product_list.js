const fs = require('fs')
const itemList = require('../item_list.json')

const list_controller = async(req,res) => {

    const size  = parseInt(req.query.size);
    const page = parseInt(req.query.page);

    await fs.readFile('item_list.json','utf-8',(err,data)=>{
         try {
            const parsedData = JSON.parse(data)
            
            const startIndex = (page-1)*size;
            const paginationData = parsedData.slice(startIndex,startIndex+size);
            const requiredData = paginationData.map((item) => {
                return {
                  id: item.id,
                  item_name: item.item_name,
                  item_image: item.item_image,
                  item_price: item.item_price
                };
              });     
            return res.status(200).send(requiredData)
        } catch (error) {
            return res.status(500).send(error)
        }
    })
}

module.exports = {list_controller}