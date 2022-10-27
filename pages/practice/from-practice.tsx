import type { NextPage } from "next";

const From: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-3">
      <input
        type="text"
        required
        placeholder="이름"
        className="peer border p-1 rounded-md border-gray-400"
      />
      <span className="hidden peer-invalid:block text-red-500">
        유효하지 않은 값 입니다.
      </span>
      <span className="hidden peer-valid:block">유효한 값 입니다.</span>
      <input type="submit" value="Login" className="bg-gray-100 rounded-md" />
    </form>
  );
};

export default From;
