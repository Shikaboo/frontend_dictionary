import { useRef, useCallback, useMemo, useReducer, createContext } from 'react'
import { encyclopedia,  Reduce } from './DB';
import {Route, Routes} from 'react-router-dom';
import './App.css'
import Main from './page/main';
import Write from './page/write';
import List from "./page/list";

export const dataContext = createContext();
export const editContext = createContext();

function App() {
  const [state, dispatch] = useReducer(Reduce, encyclopedia);
  const {datas} = state;
  const {word, content, category} = state.inputs;
  const userId = useRef(21);

  const createWord = useCallback((word, content, category)=>{
    const createData = 
    new Date().toLocaleDateString();
    dispatch({
      type : 'create',
      data : 
      {
        word,
        content ,
        category ,
        id : userId.current,
        createData,
      }
    })
    userId.current++;
  },[word, content, category])

  const editWord = (id, content)=>{
    dispatch({
      type : 'edit',
      id, content
    })
  }

  const deleteWord = (id)=>{
    dispatch({
      type : 'delete',
      id
    })
  }

  const searchWord = (text)=>{
    dispatch({
      type : 'search',
      text
    })
  }

  const memoWord = useMemo(()=>{
    return{createWord, editWord, deleteWord, searchWord}
  },[])
  // useMemo를 쓰는 이유는 필요할 때만 사용하기 위해 괄호안의 [] 는 처음에 한 번만 실행되라고 넣음.
  // return 안에 들어가는 C R U D 기능과 관련된 함수들은 {}로 감싸야 함수로 인식됨.


  return (
    <>
    <header>
      <div>
        <h1>vite</h1>
      </div>
      <div className='menu_wrap'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </header>
    <dataContext.Provider value={datas}>
      <editContext.Provider value={memoWord}>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/write' element={<Write></Write>}></Route>
            <Route path='/list' element={<List></List>}></Route>
          </Route>
        </Routes>
      </editContext.Provider>
    </dataContext.Provider>
    </>
  )
}

export default App
