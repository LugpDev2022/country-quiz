import QuestionBtn from './components/QuestionBtn';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const App = () => {
  return (
    <main className='main'>
      <h1 className='font-bold text-sm tracking-wider text-[#8B8EAB] mb-5'>
        Country Quiz
      </h1>

      <nav className='flex flex-wrap gap-3 justify-center'>
        {numbers.map((number) => (
          <QuestionBtn questionNumber={number} />
        ))}
      </nav>
    </main>
  );
};

export default App;
