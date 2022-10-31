import type { NextPage } from "next";
import Layout from "../../components/layout";

/**
 * 동영상 스트리밍
 *
 */

const Stream: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar>
      <div className="py-16 px-4  space-y-4">
        {/* 동영상 출력부 */}
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        {/* 영상 제목, 가격, 소개 */}
        <div className="border rounded-md">
          <div className="border-b p-2 rounded-b-md">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <span className="text-2xl block mt-3 text-gray-900">$140</span>
          </div>
          <p className="my-6 p-2 text-gray-700">
            영상 설명 ㅁㄴㅇㅁㄴㅇㄴㅁㅇㅁㄴㅇㅁㄴㅇㅂㅈㄷㅁㄴㅇㄴ
          </p>
        </div>
        {/* 채팅창 */}
        <div className="border rounded-md">
          <h2 className="text-2xl font-bold text-gray-900 border-b rounded-md">
            채팅
          </h2>
          {/* 채팅창 크기 설정 및 채팅창 스크롤바 생성 */}
          <div className="py-10 pb-16 h-[30vh] overflow-y-scroll  px-4 space-y-4">
            {/* 채팅 */}
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>와</p>
              </div>
            </div>
            <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-400" />
              <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
                <p>헉</p>
              </div>
            </div>
          </div>

          {/* 채팅쓰기 창 */}
          <div className="fixed py-2 bg-white  bottom-0 inset-x-0">
            <div className="flex relative max-w-md items-center  w-full mx-auto">
              <input
                type="text"
                className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
              />
              <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stream;
