const fetch = jest.fn();

async function data() {
  const data = await fetch('/endpoint-1');
  await fetch(`/endpoint-2/${data.id}`, {
    method: 'POST'
  });
}

test('It should call endpoint-1 followed by POST to endpoint-2 with id', async () => {
  fetch.mockImplementationOnce(async () => ({id: 'my-id'}));
  fetch.mockImplementationOnce(async () => {});
  await data();
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledWith('/endpoint-1');
  expect(fetch).toHaveBeenCalledWith('/endpoint-2/my-id', {
    method: 'POST'
  });
});
