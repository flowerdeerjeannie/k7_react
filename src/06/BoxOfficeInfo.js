


export default function BoxOfficeInfo({selMv}) {
  return (
    <div className="w-full flex justify-center items-center bg-slate-600 text-white p-3">
       [{selMv.movieCd}-{selMv.movieNm}] 
       개봉일 : {selMv.openDt} 
       {/* 내가 원하는 조건식을 클래스 네임 자체에 걸고 이렇게 하면 표시되는게 없으니까 그 안에 내용을 밑에 다시넣어주기 */}
       <span className= {selMv.rankOldAndNew === 'OLD' ? "text-yellow-200" :"text-blue-500"}> 
                         {selMv.rankOldAndNew}     </span>

    </div>
  )
}
