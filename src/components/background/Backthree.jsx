import Header from '../header/Header';
import Phone from './Phone';
import Third from '../inputs/Third';
const Backthree = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <div className="md:flex md:justify-start lg:w-[100%] w-[100vw] grid justify-center absolute top-[28%] lg:top-[19%] xl:top-[28%]">
          <Phone />
          <Third />
        </div>
      </div>
    </div>
  );
};

export default Backthree;
