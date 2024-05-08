
export default function MyDiv3({dn1,dn2,dn3}) {
  return (

     <div className="flex flex-col items-center justify-center 
                    p-5 m-10 w-4/5 h-4/5 bg-lime-400 text-white">
          {`${dn1} > ${dn2} > ${dn3}`}
     </div>
  )
}
