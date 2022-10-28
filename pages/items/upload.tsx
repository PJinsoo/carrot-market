import type { NextPage } from "next";

/**
 * 판매상품 업로드 페이지
 */

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        {/* 이미지 업로드 부분 */}
        <label //label 내부에 file_input과 이미지를 넣고 input을 숨기는 디자인 패턴
          className="w-full flex items-center justify-center border-2 border-dashed border-gray-300 h-48
                     rounded-md text-gray-600 hover:text-orange-500 hover:border-orange-500 cursor-pointer"
        >
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input className="hidden" type="file" />
        </label>
      </div>
      {/* 판매가격 설정 */}
      <div className="my-5">
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-semibold text-gray-700"
        >
          판매가
        </label>
        {/* relative와 absolute를 사용해 각기 다른 요소를 하나처럼 */}
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pl-3 pb-0.5 flex items-center pointer-events-none">
            <span className="text-gray-500 text-sm">₩</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0"
            className="appearance-none w-full pl-7 px-3 py-2 bodrer border-gray-300 rounded-md placeholder-gray-400 shadow-sm
                       focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">원</span>
          </div>
        </div>
      </div>
      {/* 판매 상품 상세 설명 */}
      <div>
        <label className="mb-1 block text-sm font-semibold text-gray-700">
          판매 상품 설명
        </label>
        <textarea
          className="mt-1 w-full shadow-sm rounded-md border-gray-300
                   focus:ring-orange-500 focus:border-orange-500"
          rows={4}
        />
      </div>
      <button
        className="mt-2 w-full px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white
                   border-transparent rounded-md shadow-md font-semibold
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
      >
        판매하기
      </button>
    </div>
  );
};

export default Upload;
