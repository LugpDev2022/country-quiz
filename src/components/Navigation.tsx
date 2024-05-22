import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import QuestionBtn from './QuestionBtn';

const questions = [
  {
    number: 1,
    answered: false,
  },
  {
    number: 2,
    answered: false,
  },
  {
    number: 3,
    answered: false,
  },
  {
    number: 4,
    answered: false,
  },
  {
    number: 5,
    answered: false,
  },
  {
    number: 6,
    answered: false,
  },
  {
    number: 7,
    answered: false,
  },
  {
    number: 8,
    answered: false,
  },
  {
    number: 9,
    answered: false,
  },
  {
    number: 10,
    answered: false,
  },
];

const Navigation = () => {
  const { search } = useLocation();

  const { question } = queryString.parse(search) as { question: string };

  return (
    <nav className='flex flex-wrap gap-3 justify-center mb-10'>
      {questions.map(({ number, answered }) => (
        <QuestionBtn
          key={number}
          questionNumber={number}
          active={answered || parseInt(question) === number}
        />
      ))}
    </nav>
  );
};

export default Navigation;
