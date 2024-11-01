import { nanoid } from "nanoid";

export const OnBoardingStats: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center ">
      <div className="flex gap-4 p-4 items-center bg-bgBtn rounded-lg">
        <p className="text-[32px] text-darkText w-[42px] font-bold">5X</p>
        <p className="text-sm font-normal text-darkText tracking-wide">
          Acquiring a new customer is 5x more costly than making an unhappy
          customer happy
        </p>
      </div>
      <ul className="flex gap-3">
        {[1, 2, 3, 4, 5].map((item) => (
          <li
            key={nanoid()}
            className={`size-2 rounded-full ${
              item === 1 ? "bg-darkText" : "bg-bgBtn"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};
