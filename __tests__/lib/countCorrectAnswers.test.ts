import { countCorrectAnswers } from '../../src/lib/countCorrectAnswers';
import type { QuestionData } from '../../src/types';

describe('Tests on countCorrectAnswers function', () => {
  test('should return 0 when none of the answers are correct', () => {
    const testArray: QuestionData[] = [
      {
        question: 'Test question',
        answers: ['1', '2', '3', '4'],
        correctAnswer: 3,
        selectedAnswer: 4,
      },
      {
        question: 'Test question 2',
        answers: ['1', '2', '3', '4'],
        correctAnswer: 2,
        selectedAnswer: 1,
      },
    ];

    const count = countCorrectAnswers(testArray);
    expect(count).toBe(0);
  });

  test('should return the correct number of correct answers', () => {
    const testArray: QuestionData[] = [
      {
        question: 'Test question',
        answers: ['1', '2', '3', '4'],
        correctAnswer: 3,
        selectedAnswer: 4,
      },
      {
        question: 'Test question 2',
        answers: ['1', '2', '3', '4'],
        correctAnswer: 2,
        selectedAnswer: 2,
      },
    ];

    const count = countCorrectAnswers(testArray);
    expect(count).toBe(1);
  });
});
