import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  const blogPostList = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {blogPostList.map(({ slug, ...delegated }) => (
        <BlogSummaryCard key={slug} slug={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
