import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout hasTabBar canGoBack title="게시판">
      <div>
        {/* 사용자 프로필 파트 */}
        <div className="flex items-center px-2 mb-5 space-x-3 py-2 border-t border-b cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-semibold text-gray-700">작성자 이름</p>
            <p className="text-xs font-semibold text-gray-500">
              프로필 정보 &rarr;
            </p>
          </div>
        </div>
        {/* 게시글 태그 */}
        <div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full shadow-md text-xs font-semibold bg-gray-100 text-gray-800">
            동네질문
          </span>
        </div>
        {/* 게시글 제목 */}
        <div className="mt-2 text-gray-700">
          <span className="text-orange-500 font-semibold">Q. </span>
          게시글 제목이에요
        </div>
        {/* 공감, 댓글 개수 */}
        <div>
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
        {/* 댓글 목록 부분 */}
        <div className="px-4 my-5 space-y-5">
          <div className="flex items-start space-x-3">
            {/* 유저 프로필 사진 */}
            <div className="w-8 h-8 bg-slate-200 rounded-full" />
            {/* 닉네임, 댓작성시간, 댓내용 */}
            <div>
              <span className="text-sm block text-gray-700 font-semibold">
                댓글 작성자
              </span>
              <span className="text-xs text-gray-500 block ">2시간 전</span>
              <p className="text-gray-700 mt-2">여기는 댓글이에요</p>
            </div>
          </div>
        </div>
        {/* 댓글 작성부 */}
        <div className="px-2">
          <textarea
            className="mt-1 w-full shadow-sm rounded-md border-gray-300
                   focus:ring-orange-500 focus:border-orange-500"
            rows={1}
            placeholder="댓글을 입력해주세요."
          />
          <Button text="댓글쓰기" />
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
