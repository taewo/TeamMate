const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const User = new Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
})
 
// create new User document
User.statics.create = function(username, password) {
	console.log('create1 -ing');
    const user = new this({
        username,
        password
    })
 
    // return the Promise
    return user.save()
}
 
// find one user by using username
User.statics.findOneByUsername = function(username) {
	console.log('findOneByUsername -ing');
    console.log('username : ',username);
    return this.findOne({
        username
    }).exec()
}
 
 
// verify the password of the User documment
User.methods.verify = function(password) {
	console.log('verify -ing');
    return this.password === password
}
 
User.methods.assignAdmin = function() {
	console.log('assignAdmin -ing');
    this.admin = true
    return this.save()
}
 
module.exports = mongoose.model('User', User)

