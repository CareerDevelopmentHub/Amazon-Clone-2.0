import Products from "../../lib/products.json";


export default async function handler(req, res) {
 
  res.status(200).json(Products);
}
