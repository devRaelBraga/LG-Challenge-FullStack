import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';  
import MoviesTable from '../components/MoviesTable';
import SearchBar from '../components/SearchBar';



export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch(siteConfig.url).then((response) => response.json()).then((movies) => setFetchData(movies))
  }, [])
  
  return (
    <Layout
      title={``}
      description="Table with movies and ratings">
      {/* <HomepageHeader /> */}

      <Link
        className="button button--secondary   "
        to="/recommended">
        See the best-rated movies!  
      </Link>
      <main className={styles.main}>
        <Link  ></Link>
        <div className={styles.content}>
          <SearchBar setFetchData={setFetchData} ></SearchBar>
          {fetchData && <MoviesTable movieFetch={fetchData} setMovieFetch={setFetchData}/> }   
        </div>

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
