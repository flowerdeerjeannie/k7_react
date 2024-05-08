import MyDiv3 from "./MyDiv3";


export default function MyDiv2(probs) {
  return (
     <div className="flex flex-col items-center justify-center p-5 m-10 w-3/4 h-3/4 bg-lime-600 text-white">
          {`${probs.dn1} > ${probs.dn2}`}
          <MyDiv3 dn1={probs.dn1} dn2={probs.dn2} dn3={probs.dn3} />
     </div>
  )
}

