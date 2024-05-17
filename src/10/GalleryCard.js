//갤러리에게서 아래 {,,,} 들을 받아와서 바로 쓸거니까 거기 함수, 거기에서 이거 사용한 속성에 정의가 다 되어있어야지
export default function GalleryCard({imgUrl, title, content, spTag}) {

     const sptags = (spTag.includes(',') ? spTag.split(',') : [spTag]) // 문자열안에 ,가 있으면 ,기준으로 나누고 아니면 그냥 송출
                    .map(item => 
                         <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                              key={item}>
                         {item}</span>
                    );
     console.log('sptags',sptags)
     return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
               <img className="w-full" src={imgUrl.includes('http:') ? 
                                             imgUrl.replace('http:','https:') : imgUrl} 
                                             alt={title}/>
               <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                         {content}
                    </p>
                    <p className="text-gray-700 text-base tx-xs">
                    </p>
               </div>
               <div className="px-6 pt-4 pb-2">
                    {sptags}
               </div>
          </div>
     )
}
