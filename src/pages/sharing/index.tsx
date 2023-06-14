import Head from 'next/head'
import axios from 'axios';

 function Page({ ogData }: any) {

    console.log(ogData)
  return (
    <div>
        <Head>
            <meta property="og:title" content={ogData?.title} />
            <meta property="og:type" content={ogData?.type} />
            <meta property="og:description" content={ogData?.description} />
            <meta property="og:image" content={ogData?.image} />
            <meta name="twitter:image" content={ogData?.image} />
            <meta name="twitter:card" content={ogData?.card} />
            <meta name="twitter:title" content={ogData?.title} />
            <meta name="twitter:description" content={ogData?.description} />
      </Head>
      <h1>A page with Open Graph Image.</h1>
    </div>
  )
}

export async function getStaticProps() {
    // Gọi API để lấy dữ liệu Open Graph
    const response = await axios.get('https://6482013029fa1c5c503274e6.mockapi.io/api/v1/open-graph/1')

    return {
        props: {
            ogData: {
                title: 'Open graph social',
                image: response.data.image,
                type: 'website',
                description: 'Senior Selachimorpha at DigitalOcean',
                card: 'summary',
                name: '====InDEx===='
            }
        },
    };
}

export default Page