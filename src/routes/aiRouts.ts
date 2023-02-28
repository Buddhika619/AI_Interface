
import  {dellEfunc, gpt3Func } from '../controllers/aiController'
import express from 'express'
const router = express.Router()

// router.post('/', random)
router.post('/',  dellEfunc)
router.post('/gpt',  gpt3Func)


export default router