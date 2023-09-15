import React, { useEffect, useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import MoviesTable from '../components/MoviesTable';

export default function RecommendedPage() {
  const {siteConfig} = useDocusaurusContext();
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetch(`${siteConfig.url}/recomendation`).then((response) => response.json()).then((movies) => setFetchData(movies))
  }, [])

  return (
    <Layout
      title={``}
      description="Best-rated movies">
      <main>
        {fetchData && <MoviesTable movieFetch={fetchData} setMovieFetch={setFetchData}/> }   
      </main>
    </Layout>
  );
}
