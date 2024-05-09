import { useState, useContext } from 'react';
import { dataContext } from '../App';
import DataSearch from "./dataSearch";
import SortSelect from './default';
import Detail from './detail';

const list = ()=>{
    const datas = useContext(dataContext);
    const [optList, setOptList] = useState('All');
    console.log(datas)
    const getSortList = ()=>{
        const sortItem = (item)=>{
            switch(optList){
                case 'All' :  
                    return item.category === '전체'
                case 'html' :  
                    return item.category === 'html'
                case 'css' :  
                    return item.category === 'css'
                case 'javascript' :  
                    return item.category === 'javascript'
                case 'node' :  
                    return item.category === 'node'
                case 'react' :  
                    return item.category === 'react'
                default :
                    return null;
            }
        }
        const copyList = JSON.parse(JSON.stringify(datas))
        const sortList = optList === 'All' ? copyList : copyList.filter((item)=>sortItem(item));
        return sortList;
    }

    return(
        <>
        <div className='info_wrap'>
            <SortSelect value={optList} onChange={setOptList} />
            <DataSearch />
        </div>
        <div className='list_wrap'>
            {getSortList().map((data)=><Detail key={data.id} {...data}></Detail>)}
        </div>
        </>


        // <div>
        // {datas.map(data=>
        //             <dl key={data.id}>

        //                 <dt>{data.category}</dt>
        //                 <dd>{data.createData}</dd>
        //                 <dd>{data.word}</dd>
        //                 <dd>{data.content}</dd>
        //             </dl>
        //         )}
        // </div>
    )
}

export default list;