import { cls } from "../libs/utils";

/**
 * 채팅 메시지 컴포넌트
 *
 * 자신이 보낸 메시지면 reversed = ture
 */

interface MessageProp {
  message: string;
  reversed?: boolean;
  profileimg: string;
  avatarUrl?: string;
}

export default function Message({
  message,
  reversed,
  avatarUrl,
  profileimg,
}: MessageProp) {
  return (
    <div
      className={cls(
        "flex  items-start",
        reversed ? "flex-row-reverse space-x-reverse" : "space-x-2"
      )}
    >
      <img src={profileimg} className="w-8 h-8 rounded-full" />
      <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        <p>{message}</p>
      </div>
    </div>
  );
}
