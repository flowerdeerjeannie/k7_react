import ButtonC from "../UI/ButtonC";
import GalleryCard from "./GalleryCard";
import {useState, useEffect, useRef } from "react";

export default function Gallery() {
     const [gdata, setGdata] = useState();
     const [cards, setCards] = useState();
     const inRef = useRef();
     //useState를 사용하는 경우;1. 컴포넌트가 상태를 가져야 할때
     //2.해당 상태에 따라 렌더링이 달라질때. 3. 상태가 변경될 때마다 컴포넌트가 다시 렌더링되어야 할때 
     
     
     //사용자 입력값이 있을때는 e넣고 eprevent 해줘야 뱅글안돈다
     const handleOk = (e) => {
          e.preventDefault();
          console.log(inRef.current.value);
          if (inRef.current.value == '') {
               alert('키워드를 입력하세요');
               inRef.current.focus();
               //사용자가 해당 요소를 조작할 수 있도록 하는게 focus 메소드!!
               return;
          } //값이 없으면 url 페치가 안되게끔 하는거임 
          let url =`https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
          url = url + `serviceKey=Q9s8CvLD43U6GPLiTL0bp67tBw9Xqa0XURc%2Fc%2B8ln8LLQuk77H8HY9rZptGhhpV6rS7bkdxqs2qcIHFlZfpiZg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURI(inRef.current.value)}&_type=json`;
          getFetchData(url);
     } 

     //clear 상태를 false값으로 설정하고 누르면 clear가 true 되도록
     //clear가 true인게 화면을 지우는것. 이 clear 상태에 따라 렌더링이 달라져야 하므로 useState 써야함
     const handleClear = (e) => { //밸류값만 생각하고 데이터 생각을 못함! 랜더링 될 데이터를 빈걸로 만들어줘야지
          setGdata(''); //gdata라는 상태 변수를 빈값으로 만든다. 해당데이터를 비운다.
          setCards('');
          inRef.current.value = ''; //밸류값 빈값으로 만든다.
          inRef.current.focus(); //그다음은 해당 인풋에 focus를 설정해서 바로 입력할수있게 하는거!
     }

     // 원래 따로 let url을 useEffect에 잡아놨었는데, 그때는 그냥 화면에 바로 랜더링 되어있게 하는거였고
     //지금은 handleOk 하고 currentvalue에 따라 url이 불러와줘야 하므로 이 함수 바디 안에 옮김
     
     const getFetchData = (url) =>{
          fetch(url)
               .then(resp => resp.json())
               .then(data => setGdata(data.response.body.items.item))
               .catch(err=>console.log(err));
     }    

     //gdata(item 한개한개) 가 만들어질때
     useEffect(()=>{
          if (!gdata) return;
          console.log(gdata)

          let tm = gdata.map(item => <GalleryCard key={item.galContentId}
                                        imgUrl={item.galWebImageUrl}
                                        title={item.galTitle} 
                                        content={item.galPhotographyLocation} 
                                        spTag={item.galSearchKeyword} />)
          setCards(tm);
          },[gdata]);
          //이부분중요함 데이터에 맵 돌려서 카드형식으로 만들고 그 변수를 state함수에 넣어줘야
          //카드로 쓸수있다는거! 바로쓸수없다

     return (
     <div className="w-full h-full flex flex-col justify-start items-start m-5">
          <div className="w-full justify-center items-center m-2 p-2">
               <form class="w-full flex justify-end items-center">
               <div class="w-full grid grid-cols-1 md:grid-cols-2 mb-5">
                    <div>
                    <input type="txt" id="search" 
                         ref={inRef} 
                         className="m-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900
                                    text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5" />
                    </div>
                    <div className="w-1/2 flex items-center justify-between">
                    <ButtonC caption="확인"
                              bcolor={'sky'}  
                              handleClick={handleOk} />
                    <ButtonC caption="취소" 
                              bcolor={'sky'}  
                              handleClick={handleClear} />
                    </div>
               </div>  
               </form>
          </div>
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {cards}
          </div>
     </div>
     )
}
