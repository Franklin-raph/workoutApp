import { useState } from "react"
const SearchComponent = ({ workout }) => {
    const [searchTerm, setSearchTerm] = useState('')
    return(
        <div>
            <input type="text" id=""  placeholder="Search" onKeyUp={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )
}

export default SearchComponent