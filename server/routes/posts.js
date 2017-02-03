import express from 'express';
import path from 'path';
import auth from './api/auth';
import user from './api/user';
import authMiddleware from '../../middlewares/auth';

const router = express.Router();

router.get('/dd', (req, res) => {
	console.log('@#$%^%$#@!@#$basic router');
	res.send('posts!!!');
});



router.use('/auth', auth);
router.use('/user', authMiddleware);
router.use('/user', user);

router.get('*', function(req, res) {
	console.log('req.path',req.path);
	res.sendFile(path.resolve(__dirname, './../../public/index.html'));
})

export default router;