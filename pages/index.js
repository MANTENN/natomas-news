import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/map"), {
  ssr: false,
});

import { areas } from "../components/data/area";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={"w-full max-w-6xl mx-auto"}>
        <div className="grid grid-cols-1 gap-8 mb-4">
          <div>
            <Image src="/hero.jpg" width="1200" height="660" />
          </div>
          <div>
            <span className="font-bold mt-8 mb-2">Election</span>
            <h2 className="text-4xl font-bold mb-2">
              School Board Race; The Candidates
            </h2>
            <div className="mb-8">
              Published by N87M Technologies Group. Updated on 10/25/2022
            </div>
            <div className="grid gap-2">
              <div className="text-2xl">
                This will be the first election where Natomas Unified board
                members will be elected to represent a subset of a geographic
                area within the Natomas School District&apos;s boundaries. In
                prior elections, school board members were elected by all voters
                within the entire school district.
              </div>
              <div className="text-2xl">Proposed Map F.</div>
              <DynamicMap areas={areas} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
