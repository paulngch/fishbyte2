import { Link } from "react-router-dom";
import DateDropdown from "../components/DateDropdown";
import fishingQuotes from "../components/fishingQuotes";

const Home = () => {
  const randomQuote =
    fishingQuotes[Math.floor(Math.random() * fishingQuotes.length)];

  return (
    <>
      <div className="pageTabs mx-auto pt-10 pr-10 relative w-[432px]">
        <div className=" max-w-[300px] text-xl">{randomQuote}</div>
      </div>
    </>
  );
};

export default Home;
