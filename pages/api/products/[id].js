import Products from "../../../lib/products.json";


export default async function handler(req, res) {
 const {id} = req.query;
 const data = Products.filter((item)=> item.id === id);

  res.status(200).json(data);
}
