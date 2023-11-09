const getData = async () => {
    try {
        const response = await axios.get('https://server-sample-6hhd.onrender.com/api/contacts')
        console.log(response)
    } catch (err) {
        console.log(err.message)
    }
}

const createData = async (data) => {
    try {
        const response = await axios.post('https://server-sample-6hhd.onrender.com/api/contacts/create', data)
        console.log(response)
    }
    catch (err) {
        console.log(err.message,err.status)
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
    createData(data).then(res=>console.log(res))
    // getData()
})