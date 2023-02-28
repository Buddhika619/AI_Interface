import asyncHandler from 'express-async-handler'
import { Request, Response } from 'express'
import  {generator, imageGenerator}
from '../config/openai'


// @des  Email body
// @route POST /api/ai/gpt
// @access private
const gpt3Func = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const result = await generator('text-davinci-003', req.body.text, 1, 250, 2)

    res.json(result)
  }

)


// @des  Email body
// @route POST /api/ai
// @access private
const dellEfunc = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {

    const result = await imageGenerator(req.body.text, 10)

    res.json(result)
  }

)





export { dellEfunc, gpt3Func }
