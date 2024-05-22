import queryString from 'query-string';

export const getQuestionNumber = (query: string) => {
  const { question: questionNumber } = queryString.parse(query) as {
    question: string;
  };

  return questionNumber ? parseInt(questionNumber) : 1;
};
