import { getQuestionNumber } from '../../src/lib/getQuestionNumber';

describe('Tests on parseQuestionNumber', () => {
  test('should return the given value', () => {
    const number = 4;
    const query = `?random=2&question=${number}`;
    const questionNumber = getQuestionNumber(query);
    expect(questionNumber).toBe(number);
  });

  test('should return the default value', () => {
    const query = `?value=4`;
    const questionNumber = getQuestionNumber(query);
    expect(questionNumber).toBe(1);
  });
});
