import fb from '../../assets/facebook.png';
import inn from '../../assets/in.png';
import twitter from '../../assets/twitter.png';
import ig from '../../assets/instagram.png';
import vast from '../../assets/vastlogo.png';
import stripe from "../../assets/stripe.png"
import stripe2 from "../../assets/stripe-mobile.png"
const Header = () => {
  return (
    <div className="relative">
      <div className="bg-black lg:h-[126vh] xm:h-[150vh] md:h-[170vh] ml:h-[120vh] xs:h-[149vh]  h-[139.5vh]">
        <img src={stripe2} className="sm:hidden" />
        <img src={stripe} className="hidden sm:block h-[57vh]" />
      </div>
      <div className="absolute top-0 w-[100%]">
        <div className="flex items-center justify-between pl-5 pr-10 sm:pl-24 sm:pr-14 py-10">
          <img src={vast} alt="vastlogo" className="md:w-[102px] w-[68px]" />
          <div className="flex items-center justify-center gap-2 sm:gap-5">
            <img src={fb} className="h-[26.5px]" />
            <img src={inn} className="h-[26.5px]" />
            <img src={twitter} className="h-[26.5px]" />
            <img src={ig} className="h-[31px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
