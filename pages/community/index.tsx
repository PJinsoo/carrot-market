import type { NextPage } from "next";
import FloatingButton from "../../components/floatingButton";
import Layout from "../../components/layout";

/**
 * 자유게시판 페이지
 */

const Community: NextPage = () => {
  return (
    <Layout title="우리 동네 질문 게시판" hasTabBar>
      <div className="py-16 px-4 space-y-8">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="flex flex-col items-start cursor-pointer">
            {/* 게시글 태그 */}
            <span className="flex items-center px-2.5 py-0.5 rounded-full shadow-md text-xs font-semibold bg-gray-100 text-gray-800">
              동네질문
            </span>
            {/* 게시글 제목 */}
            <div className="mt-2 text-gray-700">
              <span className="text-orange-500 font-semibold">Q. </span>
              게시글 제목이에요
            </div>
            {/* 작성자 및 작성시간 */}
            <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-semibold text-sm">
              <span className="pl-5">닉네임</span>
              <span>18시간 전</span>
            </div>
            {/* 궁금해요, 답변 개수 */}
            <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[2px] w-full">
              <span className="flex space-x-2 items-center text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span>궁금해요 1</span>
              </span>
              <span className="flex space-x-2 items-center text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>답변 1</span>
              </span>
            </div>
          </div>
        ))}
        {/* 새 글 작성 버튼 */}
        <FloatingButton href="/community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
