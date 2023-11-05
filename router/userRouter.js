const express = require('express');
const userRouter = express.Router();
const db = require('../db.json')

userRouter.get('/', (req, res) => {
    console.log(req.params)
    res.send('hello world')
});
const data = {
    contacts: []
}

userRouter.delete('/items/:id', (req, res) => {
    const {id}=req.params;
    console.log(id)
    res.send(JSON.stringify('delete method'))
    console.log('delete method')
    
})
userRouter.post('/contacts/newcontacts', (req, res) => {
    // data.contacts=[...data.contacts,req.body]
    // console.log(req.body)
    // data.contacts.push(req.body)
    res.send(JSON.stringify('دیتا با موفقیت ساخته شد'))
})
userRouter.get('/items', (req, res) => {
    console.log('get method')
    
    res.send(JSON.stringify('تمامی اطلاعات از سرور گرفته شد'))
})
module.exports = userRouter;