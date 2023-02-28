import { Configuration, OpenAIApi } from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
})

const OpenAi = new OpenAIApi(configuration)

const generator = async (model:string, prompt:string, temperature:number, max_tokens:number, results:number) :Promise<any> => {
  const completion = await OpenAi.createCompletion({
    model: model,
    prompt: prompt,
    temperature: temperature,
    max_tokens: max_tokens,
    n: results,
  })

  return completion.data.choices
}


const imageGenerator = async (prompt:string,results:number) :Promise<any> => {

  const response = await OpenAi.createImage({
    prompt: prompt,
    n: results,
    size: "1024x1024",
  });
  return response.data.data;
}




export  {generator, imageGenerator}
