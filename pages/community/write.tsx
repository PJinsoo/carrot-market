import type { NextPage } from "next";
import Layout from "../../components/layout";

/**
 * 게시글 작성 페이지
 */

const Write: NextPage = () => {
  return (
    <Layout hasTabBar canGoBack>
      <form className="px-4 py-16">
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
          rows={4}
          placeholder="내용을 작성해주세요."
        />
        <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
          등록하기
        </button>
      </form>
    </Layout>
  );
};

export default Write;