import Link from "next/link";

/**
 * 채팅방 목록 컴포넌트
 */

interface ChatRoomProps {
  id: number;
  name: string;
  lastMsg: string;
  profileImg: string;
}

export default function ChatRoom({
  id,
  name,
  lastMsg,
  profileImg,
}: ChatRoomProps) {
  return (
    <div>
      <Link href="chats/${id}">
        <div className="flex px-4 cursor-pointer py-3 items-center space-x-3">
          {/* 프로필 사진 */}
          <img src={profileImg} className="w-12 h-12 rounded-full" />
          <div>
            <p className="text-gray-700 font-semibold">{name}</p>
            <p className="text-sm  text-gray-500">{lastMsg}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
