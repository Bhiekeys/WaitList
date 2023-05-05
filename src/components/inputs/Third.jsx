import ButtonPrimary from '../buttons/Button';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Third = () => {
  return (
    <div>
      <BsArrowLeft className="text-[#fff] text-[30px]" />
      <div className=" mb-12">
        <div className=" my-4">
          <h2 className="lg:text-[48px] text-[30px] w-[300px] lg:w-[620px] font-medium text-[#fff]">
            What has been your Major frustration with virtual Card Providers?
          </h2>
          <p className="text-[#969696] text-[16px]">
            (You can check multiple boxes)
          </p>
        </div>
        <form action="">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name=""
              className="cursor-pointer accent-[#9C9C9C] h-[20px] w-[20px]"
            />
            <h2 className="text-[#fff] text-[18px] lg:text-[24px]">
              Exchange Rates
            </h2>
          </div>
          <div className="flex items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              className="cursor-pointer accent-[#9C9C9C] h-[20px] w-[20px]"
            />
            <h2 className="text-[#fff] text-[18px] lg:text-[24px]">
              Transaction Limits
            </h2>
          </div>
          <div className="flex items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              className="cursor-pointer accent-[#9C9C9C] h-[20px] w-[20px]"
            />
            <h2 className="text-[#fff] text-[18px] lg:text-[24px]">
              Long Onboarding Process
            </h2>
          </div>
          <div className="flex items-center gap-3 ">
            <input
              type="checkbox"
              name=""
              className="cursor-pointer accent-[#9C9C9C] h-[20px] w-[20px]"
            />
            <h2 className="text-[#fff] text-[18px] lg:text-[24px]">other</h2>
          </div>
        </form>
      </div>
      <div className="flex justify-end">
        <Link to="/questfour">
          <ButtonPrimary>Next</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default Third;
