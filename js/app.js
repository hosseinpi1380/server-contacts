// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const getData = async () => {
    try {
        const {data}=await axios.get('https://server-contacts.onrender.com/comments')
        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}
getData()
let info = { name: 'hossein', age: '22', job: "student" }
const createData=async()=>{
    try{
        const data=await axios.post('https://server-contacts.onrender.com/posts',info)
        console.log(data)
    }
    catch(err){
        console.log(err.message)
    }
}
createData()
getData()