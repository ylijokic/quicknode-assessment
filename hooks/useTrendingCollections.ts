import { gql, useQuery } from '@apollo/client'

export interface QueryParams {
  first: number;
  after: string;
  orderBy: string;
  orderDirection: string;
}

// TODO: Resolve Error: Could not find "client" in the context or passed in as an option
export const useTrendingCollections = (params: QueryParams) => {
  const { first, after, orderBy, orderDirection } = params;

  const TRENDING_COLLECTIONS_QUERY = gql`  
      query TrendingCollections(
        $first: Int, 
        $after: String, 
        $orderBy: String, 
        $orderDirection: String
        ) {
        trendingCollections(
          first: $first,
           after: $after, 
           orderBy: $orderBy, 
           orderDirection: $orderDirection
          ) {
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

  const { loading, data } = useQuery(
    TRENDING_COLLECTIONS_QUERY, 
    {
      variables: {
        first, 
        after, 
        orderBy, 
        orderDirection
      }
    });

  return {
    loading,
    collections: data.trendingCollections.edges,
    pageInfo: data.trendingCollections.pageInfo,
  }
}
