import Box from './Box.json'
import { GoArrowUp } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

export default function BoxContent({dailyList, setSelMv}) {
  const handleMvSelect = (mv) => {
    console.log("handleMvSelcet",mv);
    setSelMv(mv) ;
  }
  const tags = dailyList.map(item => 
                <tr key={item.movieCd} onClick={()=>{handleMvSelect(item)}} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold"> {item.rank}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.movieNm} </td>
                    <td className="px-6 py-4 text-right"> {parseInt(item.salesAcc).toLocaleString()} 원</td>
                    <td className="px-6 py-4 text-right"> {parseInt(item.audiAcc).toLocaleString()} 명</td>
                    <td className="px-6 py-4 flex justify-center items-center font-bold"> 
                        <span>{ item.rankInten > 0 ? < GoArrowUp className='text-red-600'/> :
                                item.rankInten < 0 ? < GoArrowDown className='text-blue-600'/> : '-'} </span>
                               {/* 링크값이 0이 아니면 abs는 -떼고 표시하도록 한다.앞의 값이 true일 경우에만 뒤에거 실행 */}
                        <span> {parseInt(item.rankInten) !== 0 && Math.abs(item.rankInten)} </span>
                    </td> 
                </tr> );

  return (
    <tbody>
       {tags}
    </tbody>
  )
}
