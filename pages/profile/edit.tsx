import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";

/**
 * 프로필 에디터
 * 프로필 사진, 이메일, 전화번호를 수정하는 페이지
 */

const EditProfile: NextPage = () => {
  return (
    <Layout canGoBack hasTabBar>
      <div className="py-16 px-4 space-y-4">
        {/* 프로필 사진 */}
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="bg-orange-400 text-white cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            프로필 사진 바꾸기
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        {/* 이메일 변경 */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
        {/* 전화번호 변경 */}
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            전화번호
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="input"
              type="number"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>

        <Button text="프로필 바꾸기" />
      </div>
    </Layout>
  );
};

export default EditProfile;
