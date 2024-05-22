import AnswerBtn from './components/AnswerBtn';
import Navigation from './components/Navigation';

const question = 'Which country is Kuala Lumpur the capital';

const App = () => {
  return (
    <main className='main'>
      <h1 className='font-bold text-sm tracking-wider text-[#8B8EAB] mb-5'>
        Country Quiz
      </h1>

      <Navigation />

      <h2 className='text-xl font-semibold mb-10'>{question}</h2>

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
