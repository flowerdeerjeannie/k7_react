import {useState, useEffect, useRef } from "react";
import GalleryCard from "../10/GalleryCard";
import TailSelect from "./TailSelect";

export default function Festival() {
     const [fdata,setFdata] = useState();  //부산 축제 정보
     const [ops,setOps] = useState();       //구 정보.구 어레이 
     const selRef = useRef();                     //사용자가 선택하는 옵션
     const [cards,setCards] = useState();

     const getFetchData = (url) => {
          fetch(url)
               .then(resp=>resp.json())
               .then(data=>setFdata(data.getFestivalKr.item))
               .catch(err=>console.log(err));
     }
     //컴포넌트 생성시 fdata를 가져오는 것으로


     //구 선택
     const handleGuSelect = (e) => {
          e.preventDefault();
          console.log(selRef.current.value)
          
          //조건을 만족하는거만 가져와야해서 '필터'를 사용함
          //조건을 걸고 걔만 뽑아낼때!! 이값에 만족하는것만 가져올때
          //구군명 === 사용자가 선택하는 값 이랑 같을 때의 값만 뽑아내서 
          let tm = fdata.filter(item => item.GUGUN_NM === selRef.current.value)
                         .map(item => <GalleryCard key={item.LAT}
                              imgUrl={item.MAIN_IMG_NORMAL}
                              title={item.TITLE} 
                              content={item.SUBTITLE} 
                              spTag={item.MAIN_PLACE} />)
          setCards(tm);
     }

     //이게 이미 뿌려져 있어야 구를 선택할수가있지;이걸 const handle안에 넣으면 안돼
     useEffect(()=>{
          let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
          url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=37&resultType=json`;
          getFetchData(url);
     }, [])

     useEffect(()=>{
          if(!fdata) return;
          console.log(fdata)
          //이부분중요함 데이터에 맵 돌려서 카드형식으로 만들고 그 변수를 state함수에 넣어줘야
          //카드로 쓸수있다는거! 바로쓸수없다
          let tm = fdata.map(item => item.GUGUN_NM); //이렇게만 하면 13개가 나오는 상태이므로
          tm = [...new Set(tm)].sort();  //set으로 중복제거를 해주고 ...풀어서 [array]로 만들어줘야한다는거 
          setOps(tm);      //이 배열을 setOps에 넣어줘야 ops값이 만들어질수있다. 
     },[fdata]);

     useEffect(()=>{
          console.log(ops)
     }, [ops]);

  return (
     <div className="w-full h-full flex flex-col justify-start items-start m-5">
          <div className="w-full justify-center items-center m-2 p-2">
          <form className="max-w-sm mx-auto">
               <label htmlFor="op"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    부산축제정보</label>
                    {/* 셀렉트만 따로 컴포넌트 잡는방법 잘보기 */}
                    {ops && <TailSelect id="op"
                         selRef={selRef}
                         ops={ops}
                         initText='---부산 지역 구 선택---'
                         handleChange={handleGuSelect} />}
          </form>
          </div>
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {cards}
           </div>
     </div>
  )
}



// 