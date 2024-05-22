import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import QuestionBtn from './QuestionBtn';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Navigation = () => {
  const { search } = useLocation();

  const { question } = queryString.parse(search) as { question: string };

  return (
    <nav className='flex flex-wrap gap-3 justify-center mb-10'>
      {numbers.map((number) => (
        <QuestionBtn
          key={number}
          questionNumber={number}
          active={parseInt(question) === number}
        />
      ))}
    </nav>
  );
};

export default Navigation;
