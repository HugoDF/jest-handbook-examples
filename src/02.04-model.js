/* eslint-disable prettier/prettier */
const { Model } = require('sequelize');

class MyModel extends Model {
  static init() {
    return (
      // Config
      super
        .init()
    );
  }

  isAvailable(date) {
    if (!Array.isArray(this.meetings)) {
      throw new TypeError('meetings should be eager-loaded');
    }

    return !this.meetings.some(
      ({ startDate, endDate }) => startDate < date && endDate > date
    );
  }
}

module.exports = MyModel;
