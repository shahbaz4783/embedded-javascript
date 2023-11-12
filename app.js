import express from 'express';

const app = express()
const port = 4000

const day = new Date().getDay();
let dayType = 'weekday';
let task = 'work hard';


const isWeekend = (day === 0) | (day === 6);
dayType = isWeekend && 'weekend';
task = isWeekend && 'chill';
let totalLetters;

app.use(express.urlencoded({ extended: false }));

// const countLetters = (req, res, next) => {
//     console.log(req.body);
// 	totalLetters = (req.body['fname'] + req.body['lname']).length;
//     next();
// };

// app.use(countLetters)

// First Challenge
app.get('/', (req, res) => {
	res.render('index.ejs', { day: dayType, task: task });
});

app.get('/time', (req, res) => {
    const data = {
			title: 'EJS Tags',
			second: new Date().getSeconds(),
			item: ['apple', 'mango', 'banana'],
		};
	res.render('time.ejs', data);
});


// Sencond Challenge
app.get('/count', (req, res) => {
	res.render('namecount.ejs');
});

app.post('/count', (req, res) => {
    const totalLetters = (req.body['fname'] + req.body['lname']).length;
	res.render('namecount.ejs', { count: totalLetters });
});

app.listen(port, () => {
	console.log(`Listning on Port ${port}`);
});