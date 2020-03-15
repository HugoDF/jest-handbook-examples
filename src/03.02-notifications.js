const OPERATIONS = {
  SEND_EMAIL: 'SEND_EMAIL',
  SEND_PUSH_NOTIFICATION: 'SEND_PUSH_NOTIFICATION'
};

function createEmailNotification(to, subject, content) {
  return {
    type: OPERATIONS.SEND_EMAIL,
    payload: {
      to,
      subject,
      content
    }
  };
}

function createPushNotification(to, title, content) {
  return {
    type: OPERATIONS.SEND_PUSH_NOTIFICATION,
    payload: {
      to,
      title,
      content
    }
  };
}

async function sendNotification() {
  // Send something to an API
}

module.exports = {
  OPERATIONS,
  createEmailNotification,
  createPushNotification,
  sendNotification
};
