/**
 * 상품 목록 컴포넌트
 */

interface ItemProps {
  id: number;
  title: string;
  option?: string;
  price: string;
  img: string;
  comments: number;
  hearts: number;
}

export default function Item({
  id,
  title,
  option,
  price,
  img,
  comments,
  hearts,
}: ItemProps) {
  return (
    <div className="flex border-b pb-4 cursor-pointer justify-between">
      {/* 상품 이미지, 상품명, 옵션, 가격 */}
      <div className="flex space-x-4">
        <img src={img} className="w-20 h-20 rounded-md shadow-sm" />
        <div className="pt-2 flex flex-col">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <span className="text-xs text-gray-500">{option}</span>
          <span className="font-semibold mt-1 text-gray-900">{price}</span>
        </div>
      </div>
      {/* 좋아요 이모지, 좋아요 개수, 코멘트 이모지, 코멘트 개수 */}
      <div className="flex space-x-1.5 items-end justify-end">
        {/* 좋아요 */}
        <div className="flex space-x-0.5 items-center text-sm text-gray-600">
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span>{hearts}</span>
        </div>
        {/* 코멘트 */}
        <div className="flex space-x-0.5 items-center text-sm text-gray-600">
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
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
}
