const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const schema = mongoose.Schema({
	number: Number,
	Book : String
});
app.use(express.static('public'));
const data = new mongoose.model('Bookstore',schema);

async function enter()
{
	let book1= new data({number:100 , Book : '1'});
	let book2= new data({number:100 , Book : '2'});
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

app.put('/number',async(req , res)=>
{
	let number = 100 - req.body.number;
	let d = await data.findOne({Book : req.body.book});
	d.number = number;
	console.log(d.number);
	d.save()
	res.status(200).send({value : number});
});
app.listen(3000 , ()=> {
	console.log("Server Up");
	//run if first time
   //enter();
})