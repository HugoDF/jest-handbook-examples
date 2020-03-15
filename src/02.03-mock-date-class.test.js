/* eslint-disable no-constructor-return, constructor-super */
const getCurrentDate = () => new Date();
let realDate;

test('It should create new date', () => {
  // Setup
  const currentDate = new Date('2019-05-14T11:01:58.135Z');
  realDate = Date;
  global.Date = class extends Date {
    constructor(date) {
      if (date) {
        return super(date);
      }

      return currentDate;
    }
  };

  expect(getCurrentDate()).toEqual(new Date('2019-05-14T11:01:58.135Z'));

  // Cleanup
  global.Date = realDate;
});
