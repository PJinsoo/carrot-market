import type { NextPage } from "next";
import Link from "next/link";
import ChatRoom from "../../components/chatRoom";
import Layout from "../../components/layout";

/**
 * 채팅 페이지
 * 채팅방 목록
 */

const Chats: NextPage = () => {
  return (
    <Layout title="채팅방" hasTabBar>
      <div className="py-16 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ChatRoom
            key={i}
            id={i}
            name="유저명"
            lastMsg="내일뵈요"
            profileImg="/pome.jpg"
          />
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
