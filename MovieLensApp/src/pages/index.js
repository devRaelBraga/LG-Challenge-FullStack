import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


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
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}

      <main className={styles.main}>

        <SearchBar setFetchData={setFetchData} ></SearchBar>

        {fetchData && <MoviesTable movieFetch={fetchData} setMovieFetch={setFetchData}/> }   

        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
