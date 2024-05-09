import DatasInput from "../hook/datasInput";
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { editContext } from "../App";


const Write = ()=>{
    const navigate = useNavigate();

    const[{word, content, category}, onChangeTxt, reset]= DatasInput({
        word : '',
        content : '',
        category : ''
    })
    const {createWord} = useContext(editContext)
    const createBtn = ()=>{
        let cate
        if(category === undefined || category === ''){
            cate = 'html'
        }else{
            cate = category
        }
        console.log(cate);
        createWord(word, content, cate);
        reset();
        navigate('/list')
    }


    return(
        <>
        <div className="write">
            <div className="selec box">
                <label>분류</label>
                <select name="category" value={category} onChange={onChangeTxt}>
                    <option value={'html'}>html</option>
                    <option value={'css'}>css</option>
                    <option value={'javascript'}>javascript</option>
                    <option value={'node'}>node</option>
                    <option value={'react'}>react</option>
                </select>
            </div>
            <div className="txt box">
                <label>단어</label>
                <input type="text" name="word" value={word || ''} onChange={onChangeTxt}></input>
            </div>
            <div className="txtarea box">
                <label>설명</label>
                <textarea type="text" name="content" value={content || ''} onChange={onChangeTxt}></textarea>
            </div>
            <button onClick={createBtn}>저장</button>
        </div>
        </>
    )
}

export default Write;