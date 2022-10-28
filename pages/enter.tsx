import { useState } from "react";

/**
 * 마켓 로그인 화면
 * 로그인은 이메일과 전화번호, 트위터 계정, 깃허브 계정으로 가능
 */

//className에 삼항연산자 등이 쓰여 길어질 때 사용하는 함수
function cls(...classnames: string[]) {
  return classnames.join();
}

export default function Enter() {
  //로그인 형태 선택에 따른 state
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");

  return (
    <div className="mt-16 px-4 sm:px-24 lg:px-60 xl:px-96">
      {/* 타이틀 및 로고 이미지 */}
      <div className="flex justify-center">
        <img className="h-14 w-14 rounded-full shadow-lg mr-2" src="pome.jpg" />
        <h3 className="bg-orange-400 rounded-xl text-3xl font-bold pt-2.5">
          로고
        </h3>
      </div>
      {/* 로그인 부분 */}
      <div className="mt-8">
        <div className="flex flex-col items-center">
          <h5 className="text-sm text-gray-500 font-medium">
            무엇으로 로그인 할까요?
          </h5>
          {/* 이메일, 전화번호 선택 부분 */}
          <div className="mt-8 border-b w-full text-center grid grid-cols-2">
            <button
              className={cls(
                "pb-4 font-semibold border-b-2 ",
                method === "email"
                  ? " text-orange-400 border-orange-500"
                  : " border-transparent text-gray-500"
              )}
              onClick={onEmailClick}
            >
              이메일
            </button>
            <button
              className={cls(
                "pb-4 font-semibold border-b-2 ",
                method === "phone"
                  ? " text-orange-400 border-orange-500"
                  : " border-transparent text-gray-500"
              )}
              onClick={onPhoneClick}
            >
              전화번호
            </button>
          </div>
        </div>
        {/* 텍스트 입력 및 버튼 부분 */}
        <form className="flex flex-col mt-8">
          <label
            htmlFor="input"
            className="text-sm font-semibold text-gray-700"
          >
            {method === "email" ? "이메일 주소" : null}
            {method === "phone" ? "전화번호" : null}
          </label>
          <div className="mt-1.5">
            {/* 이메일로 로그인 할 때 보여질 텍스트박스 및 버튼 */}
            {method === "email" ? (
              <input
                id="input"
                type="email"
                required
                className="appearance-none w-full px-3 py-2 bodrer border-gray-300 rounded-md placeholder-gray-400 shadow-sm
                           focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              />
            ) : null}
            {/* 전화번호로 로그인 할 때 보여질 텍스트박스 및 버튼 */}
            {method === "phone" ? (
              <div className="flex rounded-md shadow-sm">
                <span //서로 다른 요소를 하나처럼 보이게 하는 tailwind 디자인 방법
                  className="flex items-center justify-center px-3 rounded-l-md select-none
                             border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
                >
                  +82
                </span>
                <input //서로 다른 요소를 하나처럼 보이게 하는 tailwind 디자인 방법
                  id="input"
                  type="number"
                  required
                  className="appearance-none w-full px-3 py-2 bodrer border-gray-300 rounded-md rounded-l-none placeholder-gray-400 shadow-sm
                             focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            ) : null}
          </div>
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 
                         border-transparent rounded-md shadow-md font-semibold mt-2
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            {method === "email" ? "로그인 링크 받기" : null}
            {method === "phone" ? "일회용 비밀번호 받기" : null}
          </button>
        </form>
        <div className="mt-7">
          {/* relative와 absolute를 조합해 ㅡABCDㅡ 같은 디자인 만들기 */}
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white px-2 text-sm text-gray-500">
                다른 곳에서 계정 불러오기
              </span>
            </div>
          </div>
          <div className="mt-1.5 grid grid-cols-2 gap-3">
            {/* 트위터 로고 */}
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm font-semibold text-blue-400 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            {/* 깃허브 로고 */}
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm font-semibold text-gray-600 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
