import Header from '../header/Header';
import Phone from './Phone';
import Second from '../inputs/Second';


const Backtwo = () => {
  return (
    <div className="relative">
      <Header />
      <div className="md:flex md:justify-start lg:w-[100%] w-[100vw] grid justify-center absolute top-[28%]">
        <Phone />
        <Second />
      </div>
    </div>
  );
}

export default Backtwo