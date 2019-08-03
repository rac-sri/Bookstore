const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json())
app.get('/', async(req , res)=>
{
	num = await data.find();
	res.render('index', {num: num});
});

app.get('/cart',async (req,res)=>
{	
	let da = await data.find();
	let total = (da[0].number*20) + (da[1].number * 25); 
	res.render('cart', { Total : total});
}	);

app.post('/number',(req , res)=>
{
	console.log(req.number);
});
app.listen(3000 , ()=> {
	console.log("Server Up");

})