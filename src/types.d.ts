export type QuestionData = {
  number: number;
  answered: boolean;
  question: string;
  selectedAnswer: 1 | 2 | 3 | 4 | null;
  answers: string[];
};

export type AppContextType = {
  currentQuestionNumber: number;
  questionsData: QuestionData[];
};
