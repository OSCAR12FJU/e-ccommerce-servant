import { Search } from "../../icons/Search"

const SearchBar = () =>{
    return(
        <div className="relative w-full md:w-2/4">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pe-4 pointer-events-none">
        <Search />
        <span className="sr-only">Search icon</span>
        </div>
        <input
        type="text"
        id="search-navbar"
        // onChange={searcher}
        className="block w-full p-2 ps-10 text-sm text-gray-900 bg-input border-input border rounded-lg placeholder-black placeholder:font-medium focus:bg-input focus:border-input2"
        placeholder="¿Que estas buscando...?"
        />
    </div>
    )
}
export default SearchBar;