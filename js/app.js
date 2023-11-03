console.log('hello world')
let info = { name: 'hossein', age: '22', job: "student" }
fetch('https://server-contacts.onrender.com/posts', {
    method: "POST",
    body: JSON.stringify(info)
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
fetch('https://server-contacts.onrender.com/posts')
    .then(res => res.json()).then(data => console.log(data))
    .catch(err => console.log(err.message))