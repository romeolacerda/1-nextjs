import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../../db.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const product = products.find((prod) => prod.id === Number(id));
  res.status(200).json(product);
}
