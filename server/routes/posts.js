import express from 'express';
import path from 'path';
import auth from './api/auth';

const router = express.Router();

router.get('/dd', (req, res) => {
	console.log('@#$%^%$#@!@#$basic router');
	res.send('posts!!!');
});

router.use('/auth', auth);

router.get('*', function(req, res) {
	console.log('req.path',req.path);
	res.sendFile(path.resolve(__dirname, './../../public/index.html'));
})

export default router;