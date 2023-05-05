import phone from '../../assets/phone-left.png';
import phone2 from '../../assets/phone-right.png';
import mobile from '../../assets/mobilephone.png';
import Bansecond from './Bansecond';
import Header from '../header/Header';
const Closing = () => {
  return (
    <div className="">
      <div className="relative">
        <Header />
        <Bansecond />
        <div className="mt-4 flex justify-end md:hidden">
          <img src={mobile} className="" />
        </div>
        <div className="hidden md:block absolute top-[40%] ">
          <div className="flex justify-between gap-10 w-[98.7vw] ">
            <div>
              <img src={phone} className="w-[705px]" />
            </div>
            <div>
              <img src={phone2} className="lg:mt-7 md:mt-5 w-[505px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Closing;
