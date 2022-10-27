//NextJS에서 TypeScript Import
import type { NextPage } from "next";

const Fisrt: NextPage = () => {
  return (
    <div
      className="bg-slate-200 py-20 px-20 grid gap-10 min-h-screen place-content-center
                md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" //반응형 적용
    >
      {/* 장바구니 */}
      <div
        className="bg-white p-6 rounded-3xl shadow-xl flex flex-col justify-between
      dark:bg-black"
      >
        <span className="font-semibold text-3xl ">장바구니</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between odd:bg-blue-50 odd:rounded-lg even:bg-gray-50 even:rounded-lg"
            >
              <span className="text-gray-500 my-2">{i}) 책상</span>
              <span className="font-semibold">₩4000</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>합계</span>
          <span className="font-semibold">₩20000</span>
        </div>
        <button
          className="block mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto
        hover:bg-teal-500 hover:text-black
        active:bg-yellow-500 focus:bg-red-500
        "
        >
          구매하기
        </button>
      </div>
      {/* 유저 카드 
          className에 group을 지정해 div 속 요소들을 그룹화
      */}
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl font-semibold">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">주문내역</span>
              <span className="font-semibold">340</span>
            </div>
            {/* 그룹화된 요소가 hover되면 반응하는 group-hover */}
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-lime-200 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">잔액</span>
              <span className="font-semibold">₩12345</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-semibold">아아아</span>
            <span className="text-sm text-gray-400">대한민국</span>
          </div>
        </div>
      </div>
      {/* 상품 페이지 */}
      <div className="bg-white p-6 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-lg p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-gray-100 mb-5">
          <img src="/dask.jpg" className="shadow-sm rounded-md" />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-xl">데스크</span>
          <span className="text-xs text-gray-500">책상</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-70 focus:ring-2 ring-offset-1 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-70 focus:ring-2 ring-offset-1 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-300 bg-opacity-70 focus:ring-2 ring-offset-1 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 font-semibold text-xl text-gray-500 rounded-lg shadow-sm">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 font-semibold text-xl text-gray-500 rounded-lg shadow-sm">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-2xl">₩4000</span>
            <button className="bg-blue-500 text-sm text-center text-white rounded-2xl px-6 py-3">
              장바구니에 담기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fisrt;
