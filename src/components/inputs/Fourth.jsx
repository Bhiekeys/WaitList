import ButtonPrimary from '../buttons/Button';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Fourth = () => {
  return (
    <div className="">
      <BsArrowLeft className="text-[#fff] text-[30px]" />
      <div className="">
        <h2 className="lg:text-[48px] text-[32px] w-[300px] lg:w-[635px] mt-4 font-medium text-[#fff]">
          What services would you like to see on “
          <span className="text-[#3484ED]">Vast</span>”
        </h2>
      </div>
      <form action="" className="grid mt-3 gap-3">
        <input
          type="text"
          name="name"
          placeholder="Share your thoughts here"
          className="py-3 outline-none border-b mb-24 lg:w-[32vw] bg-black placeholder:text-[#D4D4D4] placeholder:text-[24px] text-[24px] text-white"
        />
        <div className="flex justify-end">
          <Link to="/completed">
            <ButtonPrimary>Submit</ButtonPrimary>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Fourth;
