import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

/**
 * 채팅방
 *
 */

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar title="채팅방 목록">
      <div className="py-16 px-4 space-y-4">
        {/* 채팅버블 */}
        <Message message="섡" profileimg="/pome.jpg" />
        <Message message="20000" profileimg="/chair.jpg" reversed />
        <Message message="굳" profileimg="/pome.jpg" />

        {/* 텍스트 입력 창 */}
        <div className="fixed w-full mx-auto max-w-md bottom-20 inset-x-0">
          <div className="flex relative items-center ">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-400 pr-12
                     focus:ring-orange-500 focus:outline-none focus:border-orange-500"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <button
                className="flex items-center bg-orange-400 rounded-full px-3 text-sm text-white cursor-pointer
                         hover:bg-orange-500 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
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
