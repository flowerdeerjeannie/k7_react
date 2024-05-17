import GalleryCard from "./GalleryCard";
import {useState, useEffect} from "react";


export default function Gallery() {
     // const imgUrl ="http://tong.visitkorea.or.kr/cms2/website/21/2988721.jpg";
     // const title ="태종대유원지";
     // const content ="부산광역시 영도구 동삼동";
     // const spTag ="태종대유원지, 부산광역시 영도구, 명승 제17호, 태종사, 절, 사찰, 종교, 불교"
     const [gdata, setGdata] = useState();
     const [cards, setCards] = useState();

     const getFetchData = (url) =>{
          fetch(url)
               .then(resp => resp.json())
               .then(data => setGdata(data.response.body.items.item))
               .catch(err=>console.log(err));
     }    

     useEffect(()=>{    
          let url ='https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=Q9s8CvLD43U6GPLiTL0bp67tBw9Xqa0XURc%2Fc%2B8ln8LLQuk77H8HY9rZptGhhpV6rS7bkdxqs2qcIHFlZfpiZg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ED%83%9C%EC%A2%85%EB%8C%80&_type=json';
          console.log(url)
          getFetchData(url);
     },[]);

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

     return (
     <div className="w-full h-full flex flex-col justify-start items-start m-5">
          <div className="w-11/12 flex flex-col justify-center items-center m-2 p-2">
               입력
          </div>
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
               {cards}</div>
     </div>
     )
}
