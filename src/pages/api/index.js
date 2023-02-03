import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-NMeackF3xlwn9MVoiJmE0y2W",
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const getModel = await openai.retrieveModel("code-davinci-002");
  res.status(200).json("zeus server");
  console.log(getModel.data);
}
