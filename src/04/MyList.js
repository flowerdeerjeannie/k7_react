import MyListData from "./MyListData.json";
import MyListitems from "./MyListitems";

export default function MyList() {
     //MyListData가 배열이기 때문에 다시 배열을 만들어주는 map함수 사용
     //tags라고 잡아줄건데, 저 데이터 파일에서 아이템들을 가지고와서 그거의 타이틀은 타이틀로 
     //필드화 해주어야 그 map이 새로운 배열을 만들어내는거임 
     //이러한 필드를 가지고 있는 tags를 밑에서 변수로 불러온다 
     const tags = MyListData.map(item => <MyListitems key={item.title}
                                                     title={item.title}
                                                    imgUrl={item.imgUrl}
                                                  content={item.content} />)
     return (
          <div className="w-full grid grid-cols-2 m-2 p-2 ">
               {tags}
          </div>
     )
}
