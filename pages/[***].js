import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={"w-full max-w-6xl mx-auto"}>
        <div className="grid grid-cols-2">
          <div>Image</div>
          <div>
            <span className="font-bold mb-2">Election</span>
            <h2 className="text-4xl font-bold mb-2">
              School Board Race; The Candidates
            </h2>
            <div>
              This will be the first election where Natomas Unified board
              members will be elected to represent a subset of a geographic area
              within the Natomas School District{"'"}s boundaries. In prior
              elections, school board members were elected by all voters within
              the school district.
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
