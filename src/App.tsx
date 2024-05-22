import AnswerBtn from './components/AnswerBtn';
import QuestionBtn from './components/QuestionBtn';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const question = 'Which country is Kuala Lumpur the capital';

const App = () => {
  return (
    <main className='main'>
      <h1 className='font-bold text-sm tracking-wider text-[#8B8EAB] mb-5'>
        Country Quiz
      </h1>

      <nav className='flex flex-wrap gap-3 justify-center mb-10'>
        {numbers.map((number) => (
          <QuestionBtn questionNumber={number} />
        ))}
      </nav>

      <h2 className='text-lg font-semibold mb-10'>{question}</h2>

      <section className='grid grid-cols-2 gap-5'>
        <AnswerBtn />
        <AnswerBtn />
        <AnswerBtn />
        <AnswerBtn />
      </section>
    </main>
  );
};

export default App;
