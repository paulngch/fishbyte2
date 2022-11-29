import { Link } from "react-router-dom";
import DateDropdown from "../components/DateDropdown";
import fishingQuotes from "../components/fishingQuotes";

const Home = () => {
  const randomQuote =
    fishingQuotes[Math.floor(Math.random() * fishingQuotes.length)];

  return (
    <>
      <div className="pageTabs mx-auto pt-10 relative">
        <div className=" max-w-[300px] text-xl">{randomQuote}</div>
      </div>
      <div><DateDropdown/></div>
    </>
  );
};

export default Home;
