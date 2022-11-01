//NextJS에서 TypeScript Import
import type { NextPage } from "next";
import Layout from "../components/layout";
import FloatingButton from "../components/floatingButton";
import Item from "../components/item";

/**
 * 마켓 메인 화면
 *
 * 상품 판매 화면
 *
 * 브랜치 분리 테스트....
 */

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 px-4 py-16 ">
        {/* 판매 상품 목록 */}
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            option="black"
            price="₩1,250,000"
            img="pome.jpg"
            comments={1}
            hearts={1}
          />
        ))}
        {/* 상품 판매 등록 버튼 */}
        <FloatingButton href="/items/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
