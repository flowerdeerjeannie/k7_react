//tailselect는 자식컴포넌트로, ({})것들의 내용을 받아서 {} 변수로 쓰는거임
//그럼 부모컴포넌트 안에는 그 내용이 정리되어있어야겟지
export default function TailSelect({id, ops, selRef, initText, handleChange}) {
     const opTag = ops.map(item =>  
                                   <option key={item} value={item}>{item}</option>
     );
                         //이거를 이렇게 잡고 밑에 opTag 하는 생각을못함 사고과정 따라가기
                         //구 어레이를 돌면서 옵션으로 만들어주기!!!! -> 셀렉트 사이에 넣기
     return (
          <select id={id}
               ref={selRef} //선택했을때 해당데이터만 집어올수잇는 장치
               onChange={handleChange}
               className="bg-gray-50 border border-gray-300 text-gray-900 
                         text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
               <option defaultValue=''>{initText}</option>
               {opTag}
          </select>
     )
}
