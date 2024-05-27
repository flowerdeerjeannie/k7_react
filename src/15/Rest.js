import { useEffect, useState } from "react";

export default function Rest() {
     const[tdata, setTdata] = useState(); //url의 데이터를 가지고 잡아오는 data내용 = tdata
     const[tags, setTags] = useState();

     const getFetchData = async (url) => {
          const resp = await fetch(url) ; //fetch가 끝날때까지 기다린다 
          const data = await resp.json() ;  //async에 의해서 await이 끝나야 그 다음 문장(resp.json)이 실행된다. 
          setTdata(data)
     } //이 흐름에 의해서 data가 있으면 tdata설정되도록... tdata는 내가 잡은 변수지 data그자체랑 다르니까 꼭 data를 넣어서 tdata가 설정되도록 짚어준다. 

     useEffect(()=>{
          if(!tdata) return;
          let tm=tdata.map(item => <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
                                    hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" key={item.title}>
                                   {item.id}-{item.title}</li>)
          setTags(tm)
          //내 실수- setTags에 그냥 tdata 냅다 집어넣으면 안되고 그걸 골라오는 임시변수 만들어서 넣어줘야함.
     },[tdata]);

     useEffect (()=>{
          let url = 'http://localhost:3005/posts';
          getFetchData(url);
     },[]);

     return (
     <div className="flex flex-col">
          <ul>
          {tags}
          </ul>
     </div>
  )
  
}
