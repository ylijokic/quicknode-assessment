import { useState } from 'react'
import Head from 'next/head'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import CollectionsContainer from '../components/CollectionsContainer'
import { Collection } from '../types'
import Navbar from '../components/Navbar'
import Button from '../components/Button'

export interface HomeProps {
  collection: Collection;
}

const Home = ({ collection }: HomeProps) => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false)

  const handleWalletConnection = () => {
    setIsWalletConnected(!isWalletConnected)
  }

  const headerMessage = 
    !isWalletConnected ?
      'Connect Wallet to View Trending NFT Collections!'
    : 'Trending NFT Collections!';

  const mainContent = 
    !isWalletConnected ?
      <div className="rounded overflow-hidden shadow-lg border-4 border-solid bg-sky-50 m-4">
        <div className="flex flex-col px-6 py-4 items-center">
            <div className="font-bold text-xl mb-2">View Trending Connections:</div>
            <Button message='Connect Wallet' type='primary' onClick={handleWalletConnection} />
        </div>
      </div>
    : <CollectionsContainer collection={collection} handleWalletConnection={handleWalletConnection}/>

  return (
    <>
      <Navbar message={headerMessage}/>
      <div className="container mx-auto px-4">
        <Head>
          <title>Trending Collections</title>
          <meta name="description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {mainContent}

        <footer className="text-center border-gray-500 border-t-2 m-10 p-2">2022</footer>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'https://graphql.icy.tools/graphql',
    cache: new InMemoryCache(),
    headers: {
      'x-api-key': `${process.env.API_KEY}`,
    },
  })

  const { data } = await client.query({
    query: gql`  
      query TrendingCollections {
        trendingCollections(first: 10, orderBy: SALES, orderDirection: DESC) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            node {
              address
              ... on ERC721Contract {
                name
                stats {
                  totalSales
                  average
                  ceiling
                  floor
                  volume
                }
                symbol
              }
            }
          }
        }
      }
    `
  })
  return {
    props: {
      collection: data.trendingCollections,
    }
  }
}

export default Home
