import bank from './img/bank.png';
import busan from './img/busan.png';
import market from './img/market.png';
import FoodData from './FoodData.json';
import { useState } from 'react';

export default function FoodCard({data}) {
     const [isShow,setIsShow] = useState(false);
     const handleShow = () => {
          setIsShow(!isShow);
     }
     // const data =   {
     //      "구분": "광역지원센터",
     //      "시군구": "부산시",
     //      "사업장명": "부산광역푸드뱅크",
     //      "신고기준": "당연",
     //      "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
     //      "연락처(대표번호)": "051-791-1377",
     //      "팩스번호": "051-714-3096",
     //      "운영주체 분류": "1. 사회복지법인",
     //      "운영주체명": "부산광역시사회복지협의회"
     // }
     


  return (
    <div className='flex w-full h-40
                    justify-start items-center m-2 p-3'>
          <div className='flex w-40 h-30'>
               <img src={data['구분']==="광역지원센터" ?busan :
                         data['구분']==="기초푸드뱅크" ?bank: market} /> 
          </div>
               <div className='w-full flex flex-col justify-start'>
               <div>
                    <h1 className='text-2xl font-bold text-gray-700'>
                    {data['사업장명']}</h1>
                    <h2 className='text-xl font-bold text-gray-700'>
                    {data["운영주체명"]}</h2>
                    <p className='text-sm text-gray-700 py-1'> {data["사업장 소재지"]}</p>
               </div>
               <div className='w-full p-2 h-10 bg-slate-500'
                    onClick={handleShow}>
                         {/* //isShow가 참이어야 뒤가 보여지는건데 state 초기값을 
                         //false로 잡아놈으로서 기본값은 p태그가 안보이는게 되고
                         //클릭함으로서 true가 되니까  */}
                         {isShow && <p className='text-white font-bold'>
                              Tel. {data["연락처(대표번호)"]}</p>}
               </div>
          </div>         
    </div>
  )
}
