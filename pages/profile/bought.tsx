import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Bought: NextPage = () => {
  return (
    <Layout hasTabBar canGoBack title="구매목록">
      <div className="flex flex-col space-y-5 py-16">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="iPhone 14"
            option="black"
            price="₩1,250,000"
            img="../pome.jpg"
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Bought;
