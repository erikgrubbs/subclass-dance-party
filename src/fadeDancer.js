var FadeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('fadeDancer');
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeOut();
  this.$node.fadeIn();

};