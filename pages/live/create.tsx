import type { NextPage } from "next";
import Button from "../../components/button";
import Layout from "../../components/layout";
import Textarea from "../../components/textarea";

const Create: NextPage = () => {
  return (
    <Layout hasTabBar canGoBack>
      <div className=" space-y-5 py-16 px-4">
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            제목
          </label>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <input
              id="name"
              type="email"
              className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <div>
          <label
            className="mb-1 block text-sm font-medium text-gray-700"
            htmlFor="price"
          >
            가격
          </label>
          <div className="rounded-md relative flex  items-center shadow-sm">
            <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              id="price"
              className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            영상 설명
          </label>
          <Textarea />
        </div>
        <Button text="영상투고" />
      </div>
    </Layout>
  );
};

export default Create;
