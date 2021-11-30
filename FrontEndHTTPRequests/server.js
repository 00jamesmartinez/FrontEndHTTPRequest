const express = require('express')
const app = express();



axios.get("/users")
.then(res=>{
    const user=res.data;
})

axios.put("/updateUser/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedUser= {
    id: id,
    isPublic: req.body.isPublic,
    name:req.body.name,
    companies: req.body.companies,
    books: req.body.books
    };
    for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === id) {
    userList[i] = updatedUser;
    return res.status(201).send({
    success: true,
    message: "user added successfully",
    updatedUser
    });
    }
    }
    return res.status(404).send({
    success: true,
    message: "error in update"
    });
    })




axios.delete("delete/:id",(req,res)=>{
    const id = parseInt(req.params.id, 10);
    const updatedUser= {
    id: id,
    isPublic: req.body.isPublic,
    name:req.body.name,
    companies: req.body.companies,
    books: req.body.books
    };
    for (let i = 0; i < userList.length; i++) {
    if (userList[i].id === id) {
    userList[i].splice(i,1);
    return res.status(201).send({
    success: true,
    message: "user added successfully",
    updatedUser
    });
    }
    }
    return res.status(404).send({
    success: true,
    message: "error in update"
    });
    });





axios.get('/', (req, res) => {
res.send('Welcome to learn backend with express!')
});
app.listen(8000, () => {
console.log('Example app listening on port 8000!')
});