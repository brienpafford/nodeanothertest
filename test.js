var path = require('path');
var should = require("chai").should();
var Animal = require(path.join(process.cwd(), '/lib/Animal'));
// var argv = require(path.join(process.cwd(), 'app'));
var cp = require('child_process');

// var expect = require('chai').expect;


// describe('Mocha + Chai', function() {
//   it('truthiness', function () {
//     true.should.equal(true);
//   });
// });

// describe('CLI', function() {
//   it('should work for a one-word name and capitalize all letters despite being put in in lowercase', function (done) {
//     cp.execFile('/lib/cheers.js', ["mari"], function (err, stdout) {
//       stdout.should.equal('Give me an M!\nGive me an A!\nGive me an R!\nGive me an I!\n')
//       done();
//     })
//   });

//   it('should insert an instead of a for any letter in halfnorsemix', function (done) {
//     cp.execFile('/lib/cheers.js', ["halfnorsemix"], function (err, stdout) {
//       stdout.should.equal('Give me an H!\nGive me an A!\nGive me an L!\nGive me an F!\nGive me an N!\nGive me an O!\nGive me an R!\nGive me an S!\nGive me an E!\nGive me an M!\nGive me an I!\nGive me an X!\n')
//       done();
//     })
//   });

//   it('should work for a multi-word name and not insert spaces into the cheers', function (done) {
//     cp.execFile('/lib/cheers.js', ["bob", "marley"], function (err, stdout) {
//       //console.log(err);
//       stdout.should.equal('Give me a B!\nGive me an O!\nGive me a B!\nGive me an M!\nGive me an A!\nGive me an R!\nGive me an L!\nGive me an E!\nGive me a Y!\n')
//       done();
//     })
//   });

//   it('should work even if the name is put in in all caps', function (done) {
//     cp.execFile('/lib/cheers.js', ["MARI"], function (err, stdout) {
//       stdout.should.equal('Give me an M!\nGive me an A!\nGive me an R!\nGive me an I!\n')
//       done();
//     })
//   });

//   it('should work with nonenglish/extended characters', function (done) {
//     cp.execFile('/lib/cheers.js', ["中高田馬場"], function (err, stdout) {
//       stdout.should.equal('Give me a 中!\nGive me a 高!\nGive me a 田!\nGive me a 馬!\nGive me a 場!\n')
//       done();
//     })
//   });

//   it('should work with nonalphabet characters', function (done) {
//     cp.execFile('/lib/cheers.js', ["$#&@"], function (err, stdout) {
//       stdout.should.equal('Give me a $!\nGive me a #!\nGive me a &!\nGive me a @!\n')
//       done();
//     })
//   });

// });

// describe('CLI', function () {
//   it('should thank me for downloading', function (done) {
//     console.log('childprocess');
//     cp.execFile('./app.js', function (err, stdout) {
//       console.log('err', err);
//       console.log('stdout', stdout);
//       stdout.should.equal('Thank for Downloading me\n')
//       done();
//     });
//   });
// });



// TESTING AN 'ANIMAL' OBJECT




describe('animal', function () {
  describe('constructor', function() {
    it('should return an animal object', function () {
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    })
  });
  it('should be alive', function () {
    var animal = new Animal();

    animal.isAlive.should.be.true;
  })
});

describe('#becute()', function () {
  var animal = new Animal();
  it('should make the animal cute', function () {
    animal.isCute.should.not.be.true;
    animal.beCute();
    animal.isCute.should.be.true;
  });
  it('should accept a type', function () {
    var cat = new Animal('cat');
    var dog = new Animal('dog');

    cat.type.should.equal('cat');
    dog.type.should.equal('dog');
});
  it('should be a prototype method', function () {
    animal.should.respondTo('beCute');
    animal.should.not.have.ownProperty('beCute');
  });
});

describe('#updateHealthStats()', function () {
  it('should change the health', function (done) {
    this.timeout(30000);

    var animal = new Animal();
    var health = animal.health;

    animal.updateHealthStats(function () {
      animal.health.should.not.equal(health);
      done();
    });
  });
});

// THIS TEST IS TESTING THE TESTING. MIND BLOWN.

  describe('Tests', function() {
    it('truthyness', function() {
      true.should.equal(true);
  });
});

// TEST ARRAY WITH MAP FUNCTIONS

describe('Array', function () {
  describe('#map()', function () {
    it('should create a new array with the return value of the inner fn', function () {
      var array = [1,2,3,4,5];

      var output = array.map(function (item) {
        return item * item;
      })
      output.should.eql([1,4,9,16,25]);
    });

  it('should return an array of items that return truthy in the inner fn', function () {
    var array = [1,2,3,4,5];

    var output = array.filter(function (item) {
      return item %2;
    });
    output.should.eql([1,3,5]);
  })
    it('should keep the same length', function () {
      var array = [1,2,3,4,5];

      var length = array.map(function (item) {
        return false;
      }).length;
      length.should.equal(array.length);
    });

    it('should not mutate the original array', function () {
      var array = [1,2,3,4,5];

      array.map(function () {
        return false;
      });
      array.should.eql([1,2,3,4,5]);
    });
  });
});
