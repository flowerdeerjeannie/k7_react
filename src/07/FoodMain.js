import FoodData from './FoodData.json'
import ButtonC from '../UI/ButtonC';
import FoodCard from './FoodCard';
import { useState } from 'react';

export default function FoodMain() {
     const [c1List, setC1List] = useState([]);

     //c1List를 [배열]로 초기값을 줘야 하나가 아닌 그에 해당하는 여러개가 배열형식처럼 두두두 나올수있음.

     let c1 = FoodData.map(item => item['운영주체 분류'])
     c1 = new Set(c1); //c1의 데이터값들 중에서 set으로 중복 없앤게**Set** 다시 c1!!
     c1 = [...c1] ; //set타입에서는 map을 더이상 쓸수없기때문에
     // array 로 프로토타입을 배열로 만들어주는 방법.
     
     //c는 말그대로 내가 넣는 어떤값 아무거나지 버튼의 밸류값인 8비영리민간단체 일수도 3사단법인일수도..
     const handleC1 = (c) => {   
               //필터를 건거를 가지고 다시 맵을 쓸수있다는거!!!! 맵을 써서 아이템고른걸 푸드카드 형태로 뽑아내겠다 
         let tm = FoodData
                         .filter(item=> item['운영주체 분류'] === c )
                         .map(item => <FoodCard data={item} key={item['사업장명']}/>)
          //제이슨에서 운영주체분류 값이 c와 같은 것만 골라내온 배열이 tm 
          //c는 3.사단법인 이면  값인것들을 다 추려내면 tm임 사단법인 값을 가지는 모든걸 배열
          setC1List(tm);
     }


     //버튼 태그 안에 아이템이 맵함수로 돌아가면서 찍혀진 버튼이 c1bts
     const c1Bts = c1.map(item =>  
                         <ButtonC caption={item}
                                   key = {item}
                                   bcolor={'sky'}
                                   handleClick={()=>handleC1(item)} />
                         )


   return (
    <div className='flex flex-col w-full h-full justify-start items-center'>
        <div className='flex w-full justify-between my-5 px-5 items-center'>
          {c1Bts}
        </div>
        <div className='w-full grid grid-cols-2 xl:grides-cols-1 m-2 p-2'>
          {c1List }
        </div>
    </div>
  )
}
