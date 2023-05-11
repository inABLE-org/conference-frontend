import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.post(
      `${process.env.GRAPHQL_ENDPOINT}`,
      req.body,
      {
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (e) {
    console.log(e);
  }
}
