import { Link } from "react-router-dom";

const Bansecond = () => {
  return (
    <div className="w-[100%] z-50 absolute top-[30%]  text-center ">
      <div className="grid justify-center text-[#D4D4D4]">
        <div className="w-[740px]">
          <h2 className="lg:text-[52px]  text-[20px] md:text-[20px] pb-2 text-[#fff]">
            Thanks Deborah🤗 for taking time to fill this survey!
          </h2>
          <p className="lg:text-[24px] text-[16px] ">
            We will continue to build based on your recommendations. Kindly join
            our Community to be up-to-date on our product offerings cheers!🥂
          </p>
        </div>
      </div>
      <div className="pt-10">
        <Link to="/">
          <button
            type="button"
            className="bg-[#3484ED] text-[18px] text-[#fff] rounded-md font-medium px-14 py-2">
            Join Community
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Bansecond