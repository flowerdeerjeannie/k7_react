import React from 'react'

export default function Ball({n}) {
//ball의 역할은 내용을 담고있는게 아니라 보여지게 하는 컴포먼트라는것
//내용변경내역을 담고있지 않고 n의 값에 따라서 자기 색깔을 표시할뿐임
//n의 값은 여기서 건드려주면 안됨 
     
     const colorN={
          'b0' : 'bg-orange-500',
          'b1' : 'bg-red-500',
          'b2' : 'bg-green-300',
          'b3' : 'bg-lime-500',
          'b4' : 'bg-sky-500',
          'b5' : 'bg-violet-400',
     }
     return (
          //colorN을 변수로 사용해주기위해서 {``}백틱사용, ${변수명["안의값"]}
          //Math.floor(number/10) 이거는 내림함수, 소수점내리고 가장 큰 정수반환 
          <div className={`justify-center items-center text-2xl font-bold rounded-md  m-2 p-2
                          ${colorN["b"+Math.floor(n/10)]}
                         inline-flex w-16 h-16 rounded-full bg-red-400 text-white`}>
               {n}
          </div>
  )
}
