import { useState } from 'react'
import { gql } from '@apollo/client'
import CollectionsContainer from '../components/CollectionsContainer'
import { Collection } from '../lib/types'
import { client } from '../lib/client'
import WalletConnector from '../components/WalletConnector'

export interface HomeProps {
  collection: Collection;
}

const Home = ({ collection }: HomeProps) => {
  const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false)

  const handleWalletConnection = () => {
    setIsWalletConnected(!isWalletConnected)
  }

  const mainContent = 
    !isWalletConnected 
    ? <WalletConnector handleWalletConnection={handleWalletConnection} />
    : <CollectionsContainer collection={collection} handleWalletConnection={handleWalletConnection} />

  return (
    <div className="container mx-auto px-4 min-h-screen">
      {mainContent}
    </div>
  )
}

export async function getServerSideProps() {
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
