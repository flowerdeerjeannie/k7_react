import { useState, useEffect } from "react";


export default function MyListitems({ title, imgUrl, content }) {
     const [cnt,setCnt] = useState(0);
     const handleCount = () => {
          setCnt(cnt+1);
          console.log(title, 'cnt=', cnt)
     }
     //useEffect의 사용법, 1.import하고 2.const없이 콜백함수로 작성
     //컴포넌트 생성시 '최초' 한 번만 실행. 따로 실행하지 않아도 []에 의해서 실행이 되는 함수이므로 []빈칸으로 존재.
     useEffect(()=>{
          console.log(title, '생성')
     },[]);

     //state 변수가 변경이 되었을 때의 용례, []안에 변수 넣어줘야함 
     useEffect(()=>{
          console.log(title,'변경 cnt=', cnt)
     },[cnt]);

     //컴포넌트가 변경 생길 때마다 무조건 실행, []변수를 빼고 적었을 때
     useEffect(()=>{
          console.log(title,'변경됨')
     });

     return (
          <div className="flex justify-center items-start 
                         m-3 p-1 bg-slate-200">
               <div className="flex w-1/3 m-5">
                    <img src={imgUrl} alt={title} />
               </div>
               <div className="flex flex-col w-2/3  p-3 m-3">
                    <div className="font-bold text-xl">
                         {title}
                    </div>
                    <div className="flex">
                         {content}
                    </div>
                    <div className="flex justify-end items-center">
                         <span className="flex" onClick={handleCount}> 💗 </span>
                         <span className="inline-flfex mx-2 font-bold"> 좋아요 </span>
                         <span className="font-bold"> {cnt} </span>
                    </div>
               </div>
          </div>
     )
}
