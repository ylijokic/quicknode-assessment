import React from 'react'
import { Node } from '../types'

export interface CollectionCardProps {
    node: Node;
}

const CollectionCard = ({ node }: CollectionCardProps) => {
    const { average, ceiling, floor, totalSales, volume } = node.stats;
    return (               
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-4 border-solid bg-sky-50 m-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{node.name}</div>
                <p className="text-gray-700 text-base">
                    <strong>Average: </strong>
                    {average}
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Ceiling: </strong>
                    {ceiling}
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Floor: </strong>
                    {floor}
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Total Sales: </strong>
                    {totalSales}
                </p>
                <p className="text-gray-700 text-base">
                    <strong>Volume: </strong>
                    {volume}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NFT</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#QuickNode</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#icy.tools</span>
            </div>
        </div>
    )
}

export default CollectionCard
