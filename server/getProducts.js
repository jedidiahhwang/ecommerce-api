const products = require("../products.json");

module.exports = {
    getProducts: (req, res) => {
        const {price} = req.query;

        //If there is not a property called "price", send all the products
        if(!price) {
            res.status(200).send(products)
        } else {
            const filteredProducts = products.filter((element) =>
                element.price >= parseInt(req.query.price)
        )
            res.status(200).send(filteredProducts);
        }
    }
}
