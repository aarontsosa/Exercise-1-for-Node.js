const funk = require('../index')
const expect = require('chai').expect

let yo = new funk();

discribe('should captilize a text', () => {
    it('do something', (done) => {
       yo.cap(err, (val) =>{
            if(val === "Hello")
                done();
            else {
                done( new error("did not work"))
            }
       }) 
    })
})