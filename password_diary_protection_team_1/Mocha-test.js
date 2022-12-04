assert = chai.assert;

describe('Testing function weather() of the project', function () {

it('Test 1: test if toggleWeather is exists', function () {   
  assert.exists(toggleWeather, 'the return value is not null or undefined');
});

it('Test 2: test if the toggleWeather returned is from type boolean', function () {
  assert.typeOf(toggleWeather, 'boolean');
});

it('Test 3: test if toggleWeather from weather() is false', function(){
  assert.equal(toggleWeather, false);
});
})