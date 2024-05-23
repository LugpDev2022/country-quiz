export type QuestionData = {
  number: number;
  question: string;
  correctAnswer: 1 | 2 | 3 | 4;
  selectedAnswer: 1 | 2 | 3 | 4 | null;
  answers: string[];
};

export interface AppState {
  currentQuestionNumber: number;
  questionsData: QuestionData[];
}

export interface AppContextType extends AppState {
  sendAnswer: (questionNumber: number, answerNumber: 1 | 2 | 3 | 4) => void;
}
