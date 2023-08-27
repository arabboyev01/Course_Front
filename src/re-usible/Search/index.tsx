import SearchImage from "../../../public/search.svg"
import Image from 'next/image'
const Search = () => {

    return (
        <div className="search-box">
            <button className="btn-search"><Image className="search-icon"  src={SearchImage.src} alt="search" width={22} height={22}/></button>
            <input type="text" className="input-search" placeholder="Type to Search..." />
        </div>
    )
}

export default Search