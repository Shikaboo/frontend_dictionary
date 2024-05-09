const encyclopedia = {
    inputs : {
        word : '',
        content : '',
        category : ''
    },

    datas : [
        {
            id : 1,
            word : '<!Doctype html>',
            content : 'html5를 사용한다는 의미. html로 코드를 짤 때 가장 먼저 적어야 할 태그.',
            category : 'html',
            createData : '2024. 01. 23'
        },
        {
            id : 2,
            word : '<html>',
            content : 'HTML이 작용하는 범위를 지정하는 태그로 위의 DTD를 제외한 전체를 이 태그로 둘러싼다.',
            category : 'html',
            createData : '2024. 01. 23'
        },
        {
            id : 3,
            word : '<head>',
            content : 'html info 즉, html의 정보를 표기함.',
            category : 'html',
            createData : '2024. 01. 23'
        },
        {
            id : 4,
            word : '<meta>',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'html',
            createData : '2024. 01. 23'
        },
        {
            id : 5,
            word : 'border',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'css',
            createData : '2024. 01. 23'
        },
        {
            id : 6,
            word : 'flex-box',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'css',
            createData : '2024. 01. 23'
        },
        {
            id : 7,
            word : 'grid-box',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'css',
            createData : '2024. 01. 23'
        },
        {
            id : 8,
            word : '@media',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'css',
            createData : '2024. 01. 23'
        },
        {
            id : 9,
            word : 'Functions',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'javascript',
            createData : '2024. 01. 23'
        },
        {
            id : 10,
            word : 'Objects',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'javascript',
            createData : '2024. 01. 23'
        },
        {
            id : 11,
            word : 'Events',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'javascript',
            createData : '2024. 01. 23'
        },
        {
            id : 12,
            word : 'Strings',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'javascript',
            createData : '2024. 01. 23'
        },
        {
            id : 13,
            word : 'Functions',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'node',
            createData : '2024. 01. 23'
        },
        {
            id : 14,
            word : 'Objects',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'node',
            createData : '2024. 01. 23'
        },
        {
            id : 15,
            word : 'Events',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'node',
            createData : '2024. 01. 23'
        },
        {
            id : 16,
            word : 'Strings',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'node',
            createData : '2024. 01. 23'
        },
        {
            id : 17,
            word : 'Functions',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'react',
            createData : '2024. 01. 23'
        },
        {
            id : 18,
            word : 'Objects',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'react',
            createData : '2024. 01. 23'
        },
        {
            id : 19,
            word : 'Events',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'react',
            createData : '2024. 01. 23'
        },
        {
            id : 20,
            word : 'Strings',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'react',
            createData : '2024. 01. 23'
        },
        {
            id : 21,
            word : 'Strings',
            content : 'HTML의 부가 정보를 선언하는 태그',
            category : 'javascript',
            createData : '2024. 01. 23'
        }

        // 여기에 링크 주소도 넣어서 각 리스트 항목에 a태그로 연결해주면 노션이랑도 연동 가능
    ]
}

const Reduce = (state, action)=>{
    switch(action.type){
        case 'change' :
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.name] : action.value
                }
            }
        case 'create' : 
            return {
                inputs : encyclopedia.inputs,
                datas  : state.datas.concat(action.data)
            }
        case 'delete' : 
            return{
                ...state,
                datas : state.datas.filter((data)=>data.id !== action.id)    
            }
        case 'edit' : 
            return{
                ...state,
                datas : state.datas.map((data)=>data.id === action.id ? 
                    {...data,
                        content : action.content
                        // 추가로 수정하고 싶은게 있다면
                        // datas  : state.datas.concat(action.data) 처럼 받아주자
                    }
                    : 
                    data)
            }
        case 'search' :
            return{
                ...state,
                datas : state.datas.filter((data)=>{return(
                    data.word.toLowerCase().includes(action.text.toLowerCase()) ||
                    data.content.toLowerCase().includes(action.text.toLowerCase())
                    // toLowerCase 는 대,소문자에 상관없이 소문자로 변환해 찾아달라는 요청
                )})
            }

        default :
        return state;
    }
}

export {
    encyclopedia, 
    Reduce
}