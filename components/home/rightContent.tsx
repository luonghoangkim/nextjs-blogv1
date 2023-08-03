import topSearches from "./dataSearchTop";
import Search from "./search";
import TopSearch from "./top-search";



const RightContent = () => {
  return (
    <div className="w-1/3 mt-10 ml-5">
      <Search />
      <TopSearch searches={topSearches} />
    </div>
  );
};

export default RightContent;
