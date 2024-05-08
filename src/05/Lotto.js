import Ball from "./Ball";
import ButtonC from "../UI/ButtonC";
import { useState } from "react";
//버튼을 누를때마다 새로 만들어져야 하므로,바뀌어야하므로 useState를 쓴다는것

export default function Lotto() {
     
     const [tags, setTags] = useState();

     const handleOk = () => {
          //배열선언
          let arr = [];
          //배열의 조건을 위해 반복문 걸기, 6개로 생성된 arr배열은 n(숫자값)은 45이하.
          while(arr.length < 7) { //어레이 길이를 먼저정해주고 
               let n = Math.floor(Math.random()*45)+1 ; //안에 들어갈 숫자를 정해주고
               if (!arr.includes(n)) arr.push(n)        //n이 하나씩 만들어진다고 생각할 때 앞에 만든 배열에 n이 없으면 끝 인덱스에 n을 추가!
          }                                              //n이 중복수로 되지 않도록 하는 조건 
          //그 배열을 다시 ball에 담아주기 위해서 map함수 걸고 변수지정해주기 
          //배열 하나의 값은 item이라고 칭하므로 <Ball n={item}>이 성립
          //tm은 ball에다가 위 조건문에 의해 생성된 n 하나씩 값을 넣어주는 새로운 배열변수
          let tm = arr.map(item=> <Ball n={item} key={item} />
          );
          
          //인덱스 6의 위치에 ,, 뒤에 요소를 추가
          tm.splice(6, 0, <span className="font-bold text-3xl mx-2 py-4" key="sp"> + </span>);
          //tm을 변수로 tags의 값이 바뀔 수 있도록 하기 위하여 setTags 메소드 호출
          setTags(tm);
     }

  return (
      <div className="flex flex-col w-full justify-center items-center">
          <div className="flex m-10">
               {tags}
          </div>
          <div>
          <ButtonC caption={'생성'} bcolor={'red'} handleClick={handleOk} />
          </div>               
      </div>
  )
}
