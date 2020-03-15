jest.mock('./03.02-notifications', () => ({
  ...jest.requireActual('./03.02-notifications'),
  sendNotification: jest.fn(async () => {})
}));

const {
  OPERATIONS,
  createEmailNotification,
  createPushNotification
} = require('./03.02-notifications');

test('access tests', () => {
  expect(OPERATIONS).toEqual({
    SEND_EMAIL: 'SEND_EMAIL',
    SEND_PUSH_NOTIFICATION: 'SEND_PUSH_NOTIFICATION'
  });
  expect(
    createEmailNotification(
      'hi@example.tld',
      'new email notification',
      'This is an email notification'
    )
  ).toEqual({
    type: 'SEND_EMAIL',
    payload: {
      to: 'hi@example.tld',
      subject: 'new email notification',
      content: 'This is an email notification'
    }
  });
  expect(
    createPushNotification(
      'hi@example.tld',
      'new push notification',
      'This is a push notification'
    )
  ).toEqual({
    type: 'SEND_PUSH_NOTIFICATION',
    payload: {
      to: 'hi@example.tld',
      title: 'new push notification',
      content: 'This is a push notification'
    }
  });
});
