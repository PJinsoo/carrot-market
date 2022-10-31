import type { NextPage } from "next";
import Layout from "../../components/layout";

/**
 * 채팅 페이지
 * 채팅방 목록
 */

const Chats: NextPage = () => {
  return (
    <Layout title="채팅방" hasTabBar>
      //divide 형제 요소 사이마다 선을 그어줌
      <div className="py-10 divide-y-[1px] ">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex px-4 cursor-pointer py-3 items-center space-x-3"
          >
            {/* 프로필 사진 */}
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700 font-semibold">유저명</p>
              <p className="text-sm  text-gray-500">내일 2시에 뵈요</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
