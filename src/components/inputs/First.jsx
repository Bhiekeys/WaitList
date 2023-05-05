import ButtonPrimary from "../buttons/Button";
import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom";
const First = () => {
  return (
    <div className="-translate-y-10 px-6">
      <BsArrowLeft className="text-[#fff]  text-[30px]" />
      <h2 className="md:text-[48px] text-[32px] mt-4 font-medium text-[#fff]">
        Can we meet you😊?
      </h2>
      <form action="" className="grid mt-3 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Enter First Name here"
          className="py-3 outline-none border-b mt-4 bg-black placeholder:text-[#D4D4D4] placeholder:text-[24px] text-[24px] text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email address here"
          className="py-3 outline-none border-b mt-4 mb-14 bg-black placeholder:text-[#D4D4D4] placeholder:text-[24px] text-[24px] text-white"
        />
        <div className="flex justify-end">
          <Link to="/questwo">
            <ButtonPrimary>Next</ButtonPrimary>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default First;
