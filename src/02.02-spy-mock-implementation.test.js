const myObject = {
  doSomething() {
    console.log('does something');
  }
};

test('spyOn().mockImplementation()', () => {
  const somethingSpy = jest.spyOn(myObject, 'doSomething').mockImplementation();
  myObject.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});
test('spyOn().mockReturnValue()', () => {
  const somethingSpy = jest.spyOn(myObject, 'doSomething').mockReturnValue();
  myObject.doSomething();
  expect(somethingSpy).toHaveBeenCalled();
});
