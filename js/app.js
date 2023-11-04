// const { default: axios } = require("axios");

const $ = document;
const getData = async () => {
    try {
        const { data } = await axios.get('https://server-contacts.onrender.com/contacts')
        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}

const createData = async () => {
    try {
        const { data } = await axios.post('https://server-contacts.onrender.com/contacts', contact1)
        console.log(data)
    }
    catch (err) {
        console.log(err.message)
    }
}
let contact1 = { name: 'ali', age: '22', fname: 'bageri' }
const deleteContact = async () => {
    try {
        const response = await axios.delete("https://server-contacts.onrender.com/contacts")
        console.log(response)
    }
    catch (err) {
        console.log(err.message)
    }
}
deleteContact()
const container = $.querySelector('.container')
container.insertAdjacentHTML('afterbegin', `<div>
hello world
</div>`)