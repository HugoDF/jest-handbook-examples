const format = jest.fn();
function getName(firstName, ...otherNames) {
  const restOfNames = otherNames.reduce(
    (acc, curr) => (acc ? `${acc} ${format(curr)}` : format(curr)),
    ''
  );
  return `${format(firstName)} ${restOfNames}`;
}

test('it should work for multiple calls', () => {
  format.mockReturnValue('default-format-output');
  format.mockReturnValueOnce('formatted-other-name-1');
  format.mockReturnValueOnce('formatted-other-name-2');
  format.mockReturnValueOnce('formatted-first-name');

  const actual = getName('first-name', 'other-name-1', 'other-name-2');

  expect(format).toHaveBeenCalledTimes(3);
  expect(actual).toEqual(
    'formatted-first-name formatted-other-name-1 formatted-other-name-2'
  );

  expect(format()).toEqual('default-format-output');
});
