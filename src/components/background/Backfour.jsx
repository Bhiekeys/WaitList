import Header from '../header/Header';
import Phone from './Phone';
import Fourth from '../inputs/Fourth';
const Backfour = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="md:flex md:justify-start lg:w-[100%] w-[100vw] grid justify-center absolute top-[28%]">
          <Phone />
          <Fourth />
        </div>
      </div>
    </div>
  );
};

export default Backfour;
