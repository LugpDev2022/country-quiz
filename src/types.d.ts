export type QuestionData = {
  question: string;
  correctAnswer: 1 | 2 | 3 | 4;
  selectedAnswer: 1 | 2 | 3 | 4 | null;
  answers: string[];
};

export interface AppState {
  currentQuestionNumber: number;
  questionsData: QuestionData[];
  completedQuestions: number;
}

export interface AppContextType extends AppState {
  sendAnswer: (questionNumber: number, answerNumber: 1 | 2 | 3 | 4) => void;
  handlePlayAgain: () => void;
}
