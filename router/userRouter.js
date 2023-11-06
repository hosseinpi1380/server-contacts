const express = require('express');
const userRouter = express.Router();
const db = require('../db.json')

userRouter.get('/', (req, res) => {
    console.log(req.params)
    res.send('hello world')
});
let data = {
    contacts: [
        {
            id: 1,
            name: "John",
            familyname: "Doe",
            age: 30,
            city: "New York",
            country: "USA",
        },
        {
            id: 2,
            name: "Alice",
            familyname: "Smith",
            age: 25,
            city: "Los Angeles",
            country: "USA",
        },
        {
            id: 3,
            name: "David",
            familyname: "Johnson",
            age: 35,
            city: "London",
            country: "UK",
        },
        {
            id: 4,
            name: "Sarah",
            familyname: "Wilson",
            age: 28,
            city: "Toronto",
            country: "Canada",
        },
        {
            id: 5,
            name: "Mohammad",
            familyname: "Khan",
            age: 32,
            city: "Karachi",
            country: "Pakistan",
        },
        {
            id: 6,
            name: "Maria",
            familyname: "Garcia",
            age: 27,
            city: "Madrid",
            country: "Spain",
        },
        {
            id: 7,
            name: "Elena",
            familyname: "Ivanova",
            age: 29,
            city: "Moscow",
            country: "Russia",
        },
        {
            id: 8,
            name: "Yusuke",
            familyname: "Sato",
            age: 26,
            city: "Tokyo",
            country: "Japan",
        },
        {
            id: 9,
            name: "Miguel",
            familyname: "Lopez",
            age: 31,
            city: "Mexico City",
            country: "Mexico",
        },
        {
            id: 10,
            name: "Anna",
            familyname: "Andersen",
            age: 33,
            city: "Copenhagen",
            country: "Denmark",
        },
    ], baskets: [
        {
            name: "Basket 1",
            count: 5,
            price: 10.99,
            img: "basket1.jpg",
        },
        {
            name: "Basket 2",
            count: 3,
            price: 7.49,
            img: "basket2.jpg",
        },
        {
            name: "Basket 3",
            count: 2,
            price: 12.99,
            img: "basket3.jpg",
        },
        {
            name: "Basket 4",
            count: 8,
            price: 15.99,
            img: "basket4.jpg",
        },
        {
            name: "Basket 5",
            count: 4,
            price: 9.99,
            img: "basket5.jpg",
        },
        {
            name: "Basket 6",
            count: 6,
            price: 11.49,
            img: "basket6.jpg",
        },
        {
            name: "Basket 7",
            count: 7,
            price: 14.99,
            img: "basket7.jpg",
        },
        {
            name: "Basket 8",
            count: 1,
            price: 6.99,
            img: "basket8.jpg",
        },
        {
            name: "Basket 9",
            count: 9,
            price: 18.99,
            img: "basket9.jpg",
        },
        {
            name: "Basket 10",
            count: 10,
            price: 20.99,
            img: "basket10.jpg",
        },
    ]
}
userRouter.delete('/items/:id', (req, res) => {
    try {
        const { id } = req.params;
        data = data.contacts.filter(el => el.id == id)
        console.log('delete method')
        res.send(JSON.stringify(data))
    } catch (err) {
        console.log(err.message)
    }
});
userRouter.post('/contacts/newContacts', (req, res) => {
    try {
        const info = req.body;
        data.contacts.push(info)
        res.send(JSON.stringify('کاربر با موفقیت ساخته شد با موفقیت ساخته شد'))
    } catch (err) {
        console.log(err.message)
        res.send(JSON.stringify(Error(err.message)))
    }
});
userRouter.get('/editcontacts/:id', (req, res) => {
    try {
        const { id } = req.params;
        res.send(JSON.stringify(data.contacts.filter(el => el.id == id)))
        console.log('edit method')
        res.send(JSON.stringify('getting method of edit api'))
    }
    catch (err) {
        console.log(err.message)
    }
});
userRouter.get('/contacts', (req, res) => {
    res.send(JSON.stringify(data.contacts))
});
userRouter.get('/items', (req, res) => {
    console.log('get method')
    res.send(JSON.stringify(data.baskets))
});
module.exports = userRouter;