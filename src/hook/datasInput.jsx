import { useState, useCallback } from 'react';

const DatasInput = (inputData)=>{
    const [data, setData] = useState(inputData);

    const onChangeTxt = useCallback((e)=>{
        const {name, value} = e.target;
        setData((data)=>({
                ...data,
                [name] : value
            }))
    },[])
    
    const reset = useCallback(()=>setData(inputData),[inputData])
    // setData() 뒤에 [] 는 값이 들어올 때를 의미함.


    return[data, onChangeTxt, reset]
}

// 이 파일에선 커스텀 hook을 만들 것이기에 return [] 로 데이터를 정리만 하면 됨.

export default DatasInput;