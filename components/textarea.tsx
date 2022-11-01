/**
 * 텍스트 에리어
 *
 * 판매 상품 설명, 게시판 글 작성 등에 사용
 */

export default function Textarea() {
  return (
    <textarea
      className="mt-1 w-full shadow-sm rounded-md border-gray-300
                   focus:ring-orange-500 focus:border-orange-500"
      rows={4}
    />
  );
}
