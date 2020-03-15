const fetch = jest.fn();

async function data() {
  const data = await fetch('/endpoint-1');
  await fetch(`/endpoint-2/${data.id}`, {
    method: 'POST'
  });
}

test('Only mockResolvedValueOnce should work (in order)', async () => {
  fetch.mockResolvedValue({data: {}});
  fetch.mockResolvedValueOnce({id: 'my-id'});
  fetch.mockResolvedValueOnce({});
  await data();
  expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledWith('/endpoint-1');
  expect(fetch).toHaveBeenCalledWith('/endpoint-2/my-id', {
    method: 'POST'
  });

  expect(await fetch()).toEqual({
    data: {}
  });
});
