import { useState, useContext } from 'react'
import { editContext } from "../App";

const DataSearch = ()=>{
    const {searchWord} = useContext(editContext);
    const [searchData, setSearchData] = useState();

    function onChangeHandler(e){
        setSearchData(e.target.value);
    }

    function searchBtn(){
        searchWord(searchData);
    }


    return(
        <div className='search_wrap'>
            <input type="text" value={searchData} onChange={onChangeHandler} />
            <button onClick={searchBtn}>검색</button>
        </div>
    )
}

export default DataSearch;