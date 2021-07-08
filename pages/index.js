import Head from "next/head";
import Link from "next/link";
import Date from "../components/Date";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const postsToRender = allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
      <Link href={`/posts/${id}`}>
        <a>{title}</a>
      </Link>
      <br />
      <small className={utilStyles.lightText}>
        <Date dateString={date} />
      </small>
    </li>
  ));
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Alexis Ortiz Ojeda. I am a software engineer
          residing in San Jose, CA. I attended the University of California
          Santa Cruz and received a degree in Computer Networking and Digital
          Technology.
        </p>
        <p>
          While in college, I found my passion for making websites and have
          continued to improve my skills every day. When I am not programming, I
          am making beats, reading books, or listening to podcasts.
        </p>
        <p>
          You can find me on{" "}
          <a
            href="https://www.linkedin.com/in/alexis-ortiz-ojeda/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          and find my resume{" "}
          <a
            href="https://docs.google.com/document/d/19Kjd7Sc2ZaMb9Sk4q2K7_zuZ78vtgmS63pa9xdRu4bA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>{postsToRender}</ul>
      </section>
    </Layout>
  );
}
