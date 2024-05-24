import { QuestionData } from '../types';

export const countCorrectAnswers = (questionsData: QuestionData[]): number => {
  let correct = 0;

  for (let i = 0; i < questionsData.length; i++) {
    if (questionsData[i].selectedAnswer === questionsData[i].correctAnswer)
      correct++;
  }

  return correct;
};
