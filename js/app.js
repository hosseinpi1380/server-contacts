const getData = async () => {
    try {
        const response = await axios.get('http://localhost:5001/api/contacts')
        console.log(response)
    } catch (err) {
        console.log(err.message)
    }
}

const createData = async (data) => {
    try {
        const response = await axios.post('http://localhost:5001/api/contacts/newContacts', data)
        console.log(response)
    }
    catch (err) {
        console.log(err.message)
    }
}
const deleteContact = async () => {
    try {

    }
    catch (err) {
        console.log(err.message)
    }
}
const submitBtn = document.querySelector('.submitBtn')
const form = document.querySelector('form')
const name = document.getElementById('name').value
const familyName = document.getElementById('familyname').value
const age = document.getElementById('age').value
const city = document.getElementById('city').value
const country = document.getElementById('country').value
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = { name, familyName, age, city, country }
    createData(data)
    // getData()
})