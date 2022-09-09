export interface Collection {
  edges: Edge[];
  pageInfo: PageInfo;
}

export interface Edge {
  node: Node;
}

export interface Node {
  address: string;
  name: string;
  stats: Stats;
  symbol: string;
}

export interface Stats {
  totalSales: number;
  average: number;
  ceiling: number;
  floor: number;
  volume: number;
}

export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
}
