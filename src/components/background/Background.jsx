import Header from '../header/Header';
import Phone from './Phone';
import First from "../inputs/First"
const Background = () => {
  return (
    <div className="relative">
      <Header />
      <div className="md:flex md:justify-start lg:w-[100%] w-[100vw] grid justify-center absolute top-[28%]">
        <Phone />
        <First />
      </div>
    </div>
  );
};

export default Background;
