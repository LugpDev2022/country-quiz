import { Link } from 'react-router-dom';
interface Props {
  questionNumber: number;
  active?: boolean;
}

const QuestionBtn: React.FC<Props> = ({ questionNumber, active = false }) => {
  return (
    <Link
      to={`/?question=${questionNumber}`}
      className={active ? 'question-btn-active' : 'question-btn gradient'}
    >
      {questionNumber}
    </Link>
  );
};

export default QuestionBtn;
