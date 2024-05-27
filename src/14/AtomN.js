import { atom, selector } from "recoil";
//atom은 상태저장하는 기본단위라고 생각하면됨
export const AtomN = atom({
     key : "AtomN",
     default : 0
}); //{}를 넣어서 오브젝트가 들어간다는걸 명시해줌

//AtomN2 의 값이 바뀌면 selector가 실행된다. 
export const AtomN2 = selector({
     key : "AtomN2",
     get : ({get}) => { //return해서 get할때 atomN*2를 가져온다. return에 직접 get(AtomN)을 써도 되고 이렇게 써도 됨
          let tm = get(AtomN) % 2 ===0? "짝수" : "홀수"
          return tm;
     }
});

