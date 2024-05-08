import MyDiv2 from "./MyDiv2";
import MyDiv3 from "./MyDiv3";

export default function MyDiv(props) {

  const dname1 = 'vdiv1';
  const dname2 = 'vdiv2';
  const dname3 = 'vdiv3';

  return (
    <div className="flex justify-center items-center
                    flex-col p-5 m-10 w-2/3 h-2/3 bg-lime-900 text-white">
      <div className="flex items-center justify-center w-full">
          {dname1}
      </div> 
      <MyDiv2 dn1={dname1} dn2={dname2}/>
    </div>
  )
}
