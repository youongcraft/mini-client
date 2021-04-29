import styles from "../styles/Home.module.css";
import Layout from "../components/layout";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.homepage}>
        <p className={styles.indexTitle}>เสื้อผ้าแฟนชั่น</p>
        <p className={styles.subtitle}>คอลเลคชั่นใหม่</p>
        <button className={styles.indexButton} onClick={() => {
            router.push("/treeshop");
          }}>เลือกชมต้นไม้ของทางเรา</button>
      </div>
    </Layout>
  );
}
