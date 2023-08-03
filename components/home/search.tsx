

const Search = () => {
    return ( 
        <form className="flex items-center border border-gray-300 rounded-md px-4 py-2 ">
          <div className="flex items-center border rounded-md px-2 ">
            <input
              type="text"
              placeholder="Nhập từ khóa ...."
              className="flex-1 focus:outline-none"
            />
            <button
              type="submit"
              className="ml-3 bg-black font-bold text-white rounded-md py-2 px-4 hover:bg-gray-500 focus:outline-none focus:ring-2"
            > Tìm kiếm
            </button>
          </div>
        </form> 
    );
  };
  
  export default Search;
  