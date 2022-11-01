import type { NextPage } from "next";
import Button from "../../components/button";
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
        <Button text="등록하기" />
      </form>
    </Layout>
  );
};

export default Write;
