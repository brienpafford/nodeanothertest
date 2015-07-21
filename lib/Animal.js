module.exports = Animal;

function Animal(type) {
  this.isAlive = true;
  this.isCute = false;
  this.type = type;
};
  Animal.prototype.beCute = function () {
    this.isCute = true;
  };
