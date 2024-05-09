import React from 'react'

export default function BoxOfficeThead() {
  return (
   
      <thead className="w-full text-xs text-gray-900 uppercase bg-gray-50">
                  <tr className="bg-gray-500 text-white w-full font-bold">
                      <th scope="col" className="px-6 py-3">순위</th>
                      <th scope="col" className="px-6 py-3">영화명</th>
                      <th scope="col" className="px-6 py-3">매출액</th>
                      <th scope="col" className="px-6 py-3">관객수</th>
                      <th scope="col" className="px-6 py-3">증감율</th>
                  </tr>
              </thead>

  )
}
