const fs = require('fs');

const detail_controller = async (req,res)=>{
    const id = parseInt(req.params.id)

    await fs.readFile('item_list.json','utf-8',(error,data)=>{
        const parsedData = JSON.parse(data);
       
        try {
            const requiredData = parsedData.find((data)=>{data.id === id})
            return res.status(200).send(requiredData);
        } catch (error) {
            return res.status(500).send(error)
        }

    })
}

module.exports = {detail_controller}