import Box from "./Box.json";

export default function BoxOffice() {
     //자세히 집어와서 배열로 만들어주고 다시 맵으로 필요한거만 뽑아서 배열만들기 
     const dailyList = Box.boxOfficeResult.dailyBoxOfficeList ;
     const tags = dailyList.map(item => <li key={item.movieCd}> {item.rank} : {item.movieNm}</li> ) ;
     
  return (
    <div>
          <ul>
        {tags}  
          </ul>
    </div>
  )
}
