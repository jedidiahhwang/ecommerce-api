const products = require("../products.json");

module.exports = {
    getProduct: (req, res) => {
        const {item_id} = req.params;

        const item = products.find((element) => element.id === +item_id)

        if(item) {
            res.status(200).send(item)
        } else {
            res.status(404).send("Item does not exist")
        }
    }
}