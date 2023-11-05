// const { default: axios } = require("axios")

// const { default: axios } = require("axios")

const getData = async () => {
    try {
        const {data}=await axios.get('https://server-contacts.onrender.com/contacts')
        console.log(data)
        for(const x of data){
            console.log(x)
        }
    } catch (err) {
        console.log(err.message)
    }
}

let info = { name: 'hossein', age: '22', job: "student" }
const createData=async()=>{
    try{
        const data=await axios.post('https://server-contacts.onrender.com/contacts',info)
        if(data.status==201){
            console.log('created')
        }
    }
    catch(err){
        console.log(err.message)
    }
}
const deleteContact=async()=>{
    try{}
    catch(err){
        console.log(err.message)
    }
}
// createData()
// getData()