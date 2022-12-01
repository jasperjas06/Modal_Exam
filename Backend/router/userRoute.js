import express from 'express'
import User from '../controller/login.js'
const router=express.Router()

router.post('/reg',User.register)
router.post('/login',User.sigin)
export default router