//NextJS에서 TypeScript Import
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 flex flex-col space-y-5">
      {/* 장바구니 */}
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-3xl ">장바구니</span>
        <div className="flex justify-between">
          <span className="text-gray-500 my-2">책상</span>
          <span className="font-semibold">₩4000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">의자</span>
          <span className="font-semibold">₩2000</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>합계</span>
          <span className="font-semibold">₩6000</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-1/2 mx-auto">
          구매하기
        </div>
      </div>
      {/* 유저 프로필 */}
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl font-semibold">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">주문내역</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
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
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-6 rounded-2xl shadow-xl"></div>
    </div>
  );
};

export default Home;
