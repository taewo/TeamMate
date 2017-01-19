import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/dd', (req, res) => {
	console.log('@#$%^%$#@!@#$basic router');
	res.send('posts!!!');
});

// router.get('/test1', (req, res) => {
// 	res.send('fuck!');
// })

// router.get('/read/:id', (req, res) => {
// 	res.send('You are reading post ' + req.params.id);
// });

router.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, './../../public/index.html'));
})

export default router;