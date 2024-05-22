import { QuestionData } from '../types';

export const createQuestionsData = (
  numberOfQuestions: number
): QuestionData[] => {
  const questionsData: QuestionData[] = [];

  for (let i = 1; i <= numberOfQuestions; i++) {
    questionsData.push({
      number: i,
      answered: false,
    });
  }

  return questionsData;
};
