import type { QuestionData } from '../types';

/**
 * Counts the number of correct answers in a given array of question data.
 * Each question is evaluated by comparing the selected answer to the correct answer.
 *
 * @param questionsData - An array of objects representing the questions. Each object should include a `selectedAnswer` and a `correctAnswer` property.
 * @returns The number of correct answers in the provided array.
 */

export const countCorrectAnswers = (questionsData: QuestionData[]): number => {
  let correct = 0;

  for (let i = 0; i < questionsData.length; i++) {
    if (questionsData[i].selectedAnswer === questionsData[i].correctAnswer)
      correct++;
  }

  return correct;
};
