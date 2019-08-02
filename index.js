const express = require('express');
const mongoose = require('mongoose');

const app = express();

const schema = mongoose.Schema({
	number: Number
});
app.use(express.static('public'));
const data = new mongoose.model('Bookstore',schema);

async function enter()
{
	let book1= new data({number:100});
	let book2= new data({number:100});
	await book1.save();
	await book2.save();
}

mongoose.connect('mongodb://localhost/bookstore' , { useNewUrlParser:"true"})
	.then(()=>console.log("Connected to mongodb"))	
	.catch(()=>console.log("Failed"));
app.set('view engine' , 'ejs');

app.get('/', async(req , res)=>
{
	num = await data.find();
	console.log(num);
	console.log(num[0].number);
	res.render('index', {num: num});
});

app.listen(3000 , ()=> {
	console.log("Server Up");
})