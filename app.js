import express from 'express';

const app = express()
const port = 4000

const day = new Date().getDay();
let dayType = 'weekday';
let task = 'work hard';


const isWeekend = (day === 0) | (day === 6);
dayType = isWeekend && 'weekend';
task = isWeekend && 'chill';

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


app.listen(port, () => {
	console.log(`Listning on Port ${port}`);
});