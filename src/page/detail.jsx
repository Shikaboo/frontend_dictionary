// import DatasInput from "../hook/datasInput";
import { useState, useContext } from 'react'
import { editContext } from "../App";
import { getLogo } from '../util'

const detail = ({id, word, content, createData, category})=>{
    const [Update, setUpdate] = useState(true);
    const [editCont, setEditCont] = useState(content);
    const {deleteWord, editWord} = useContext(editContext);
    // const {editWord} = useContext(editContext);
    // const [{id, word, content}, onChangeTxt, reset] = DatasInput({
    //     id: id,
    //     word : '',
    //     content : ''
    // })

    function removeBtn(){
        if(window.confirm(`${word}에 관한 내용을 정말 삭제하시겠습니까?`)){
            deleteWord(id)}
    }
    // function editEventBtn(){
    //     editWord(id, word, content);
    //     setUpdate(true);
    //     reset();
    // }

    function editChange(e){
        setEditCont(e.target.value)
    }
    
    function editBtn(){
        setUpdate(false);
    }

    function saveBtn(){
        if(window.confirm(`${word}에 관한 수정사항을 저장하시겠습니까?`)){
            editWord(id, content);
            setUpdate(true);
        }else{
            return false
        }
    }

    function CancleBtn(){
        setUpdate(true);
    }
    return(

        <>
            {Update === true ? (
                <dl key={id}>
                    <dt>
                        <span className='num'>NO.{id}</span>
                        <span className='cate'><img src={getLogo(category)} alt={`${category} 아이콘`} className={`icon_${category}`} /></span>  
                        <span>작성일자: {createData}</span>
                    </dt>
                    <dd>- 단어: {word}</dd>
                    <dd>
                        - 설명: {editCont}
                    </dd>
                    <div>
                        <button onClick={editBtn}>수정</button>
                        <button onClick={removeBtn}>삭제</button>
                    </div>
                </dl>
            ) : (
                <dl key={id}>
                    <dd>
                        <input type='text' name='word' defaultValue={word}></input>
                    </dd>
                    <dd>
                        <textarea rows={5} cols={50} type='text' name='content' defaultValue={editCont} onChange={editChange}></textarea>
                    </dd>
                    <div>
                        <button onClick={saveBtn}>수정완료</button>
                        <button onClick={CancleBtn}>수정취소</button>
                    </div>
                </dl>
            )}


            {/* <dl key={id}>
                <dt>NO.{id} 분류: {category} <span>작성일자: {createData}</span></dt>
                <dd>
                {Update === true ? 
                <>
                    - 단어: {word}
                    - 설명: {content}
                    <button onClick={editBtn}>수정</button>
                    <button onClick={removeBtn}>삭제</button>
                </>

                :
                <>
                    <div>
                        <input name='word' value={word}></input>
                        <textarea rows={5} cols={50} name='content' value={content}></textarea>
                    </div>
                    <button onClick>수정완료</button>
                    <button onClick={CancleBtn}>수정취소</button>
                </>}
                </dd>
            </dl> */}


            {/* <div>
                <input type="text" value={word} onChange={ondChange}></input>
            </div> */}
        </>
    )
}

export default detail;