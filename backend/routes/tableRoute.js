const express = require('express')
const router = express.Router()
const { addTable, getTables, getTableById, updateTable } = require('../controllers/tableController')
const { isVerifiedUser } = require('../middleware/tokenVerification')


router.post('/',  isVerifiedUser, addTable)
router.get('/', isVerifiedUser, getTables)
router.get('/:id', isVerifiedUser, getTableById)
router.put('/:id', isVerifiedUser, updateTable)

module.exports = router;