import phone from '../../assets/phone-left.png';
import phone2 from '../../assets/phone-right.png';
import mobile from '../../assets/mobilephone.png';
const Mobiles = () => {
  return (
    <div>
      <div className="flex justify-end absolute top-[50%] xm:hidden">
        <img src={mobile} className="w-[100vh] h-[70vh] xs:h-[74vh]" />
      </div>

      <div className="hidden xm:block absolute xm:top-[60%] lg:top-[40%] ">
        <div className="flex justify-between gap-10 w-[98.7vw] ">
          <div>
            <img src={phone} className="lg:w-[52vw] " />
          </div>
          <div>
            <img
              src={phone2}
              className="lg:mt-7 md:mt-5 xm:mt-3 lg:w-[37.7vw] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;
