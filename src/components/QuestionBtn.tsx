interface Props {
  questionNumber: number;
  active?: boolean;
}

const QuestionBtn: React.FC<Props> = ({ questionNumber, active = false }) => {
  return (
    <a
      href='#'
      className={active ? 'question-btn-active' : 'question-btn gradient'}
    >
      {questionNumber}
    </a>
  );
};

export default QuestionBtn;
