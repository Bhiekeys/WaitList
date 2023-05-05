import ButtonPrimary from '../buttons/Button';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Second = () => {
  return (
    <div className="">
      <BsArrowLeft className="text-[#fff] text-[30px]" />
      <div className="  mb-24">
        <h2 className="md:text-[48px] w-[300px] md:w-[430px] lg:w-[620px] text-[32px] my-4 font-medium text-[#fff]">
          Have you ever made payment with a virtual card?
        </h2>
        <form action="">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name=""
              className="cursor-pointer accent-[#9C9C9C] h-[20px] w-[20px]"
            />
            <h2 className="text-[#fff] text-[24px]">Yes</h2>
          </div>
          <div className="flex items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              className="cursor-pointer accent-[#9C9C9C] h-[20px] w-[20px]"
            />
            <h2 className="text-[#fff] text-[24px]">No</h2>
          </div>
        </form>
      </div>
      <div className="flex justify-end">
        <Link to="/questhree">
          {' '}
          <ButtonPrimary>Next</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default Second;
