import type { NextPage } from "next";
import Layout from "../../components/layout";
import FloatingButton from "../../components/floatingButton";

const Live: NextPage = () => {
  return (
    <Layout title="라이브 스트리밍" hasTabBar>
      <div className="py-16 space-y-4 divide-y-2">
        {[1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className="pt-4 px-4">
            <div className="w-full bg-slate-400 aspect-video rounded-md shadow-sm" />
            <h3 className="text-gray-700 text-lg">스트리밍 영상 제목</h3>
          </div>
        ))}
        <FloatingButton href="/live/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Live;
