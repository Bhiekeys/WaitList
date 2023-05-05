import { Link } from "react-router-dom";
const Banfirst = () => {
  return (
    <div className="w-[100%] z-50 px-6 sm:px-0 absolute lg:top-[30%] top-[18%] xs:top-[25%]  text-center ">
      <h2 className="lg:text-[52px] text-[20px] md:text-[20px] pb-2 text-[#fff]">
        Getting a virtual card{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEBE58] to-[#DE2BAE]">
          just got easier
        </span>
      </h2>
      <div className="flex justify-center text-[#D4D4D4]">
        <p className="lg:text-[24px] text-[15px] w-[626px]">
          We are building Vast to take all of your online and international card
          transactions to an upgrade.
        </p>
      </div>
      <div className="lg:pt-10 pt-8">
        <p className="md:text-[16px] text-[12px] pb-3 text-[#7B7B7B]">
          You would love to be a part of that experience, right?
        </p>

        <Link to="/questions">
          <button
            type="button"
            className="bg-[#3484ED] text-[18px] text-[#fff] rounded-md font-medium px-14 py-2">
            Join WaitList
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banfirst