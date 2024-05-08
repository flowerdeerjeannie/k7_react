
export default function MyDiv3(probs) {
  return (

     <div className="flex flex-col items-center justify-center p-5 m-10 w-4/5 h-4/5 bg-lime-400 text-white">
          {`${probs.dn1} > ${probs.dn2} > ${probs.dn3}`}
         
     </div>
  )
}
