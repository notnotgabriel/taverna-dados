import './App.css';
import target from './target.png';

function App() {
  return (
    <div className='app'>
      <div className='p-28 relative'>
        <img src={target} className='w-96 absolute left-0 target' alt='' />
        <div className='pontos-container relative z-10 ml-20 p-10 flex flex-col gap-3'>
          <div className='input-container border-rose-500 border-2 flex gap-4 pr-2'>
            <input type='text' className='player-name w-full p-3' />
            <input
              type='text'
              className='round p-3 bg-white text-black font-bold w-16 text-center'
            />
            <input
              type='text'
              className='round p-3 bg-white text-black font-bold w-32 text-center'
            />
          </div>

          <div className='input-container border-rose-500 border-2 flex gap-4 pr-2'>
            <input type='text' className='player-name w-full p-3' />
            <input
              type='text'
              className='round p-3 bg-white text-black font-bold w-16 text-center'
            />
            <input
              type='text'
              className='round p-3 bg-white text-black font-bold w-32 text-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
