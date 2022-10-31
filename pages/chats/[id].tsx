import type { NextPage } from "next";
import Layout from "../../components/layout";

/**
 * 채팅방
 *
 */

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar title="채팅방 목록">
      <div className="py-16 px-4 space-y-4">
        {/* 대화 */}
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-md text-gray-700 p2 border border-gray-500 rounded-md">
            <p>섡</p>
          </div>
        </div>

        {/* 대화 */}
        <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-md text-gray-700 p2 border border-gray-500 rounded-md">
            <p>20000</p>
          </div>
        </div>

        {/* 대화 */}
        <div className="flex items-start space-x-2">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="w-1/2 text-md text-gray-700 p2 border border-gray-500 rounded-md">
            <p>ㅇㅋㅇㅋ</p>
          </div>
        </div>

        {/* 텍스트 입력 창 */}
        <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
          <div className="flex relative items-center ">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-400 pr-12
                     focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button
                className="flex items-center bg-orange-400 rounded-full px-3 text-sm text-white
            hover:bg-orange-500 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
