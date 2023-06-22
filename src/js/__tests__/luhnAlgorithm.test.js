import luhnAlgorithm from '../luhnAlgorithm';

test('invalid', () => {
  const result = luhnAlgorithm('123');
  expect(result).toBe(false);
});

test('valid visa card', () => {
  const result = luhnAlgorithm('4111111111111111');
  expect(result).toBe(true);
});

test('valid master-card', () => {
  const result = luhnAlgorithm('5555555555554444');
  expect(result).toBe(true);
});

test('valid american-express card', () => {
  const result = luhnAlgorithm('371449635398431');
  expect(result).toBe(true);
});

test('valid mir card', () => {
  const result = luhnAlgorithm('2911410872278176');
  expect(result).toBe(true);
});
