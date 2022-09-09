import React, { useState } from 'react'
import { Collection, Edge } from '../lib/types'
import Button from './Button';
import CollectionCard from './CollectionCard'

export interface CollectionContainerProps {
  collection: Collection;
  handleWalletConnection: () => void;
}

const CollectionsContainer = ({ collection, handleWalletConnection }: CollectionContainerProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const hasPreviousPage = collection.pageInfo?.hasPreviousPage;
    const hasNextPage = collection.pageInfo?.hasNextPage;

    const handlePrevious = () => {
        const startCursor = collection.pageInfo.startCursor;
        console.log(`Start Cursor-> ${startCursor}`);
    }

    const handleNext = () => {
        const endCursor = collection.pageInfo.endCursor;
        console.log(`End Cursor-> ${endCursor}`);
    }

    const handleOrderBy = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <main className="flex flex-col justify-center items-center">
                <Button message='Disconnect Wallet' type='cancel' onClick={handleWalletConnection} />
                
                <div className="relative inline-block text-left">
                    <div>
                        <button type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={() => setIsOpen(!isOpen)}>
                        Order By
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                        </svg>
                        </button>
                        <p className="text-xs">*Defaulted to SALES</p>
                    </div>
                    {isOpen && 
                        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-1" role="none">
                            <button className="text-gray-700 block px-4 py-2 text-sm" id="menu-item-0" onClick={handleOrderBy}>SALES</button>
                            <button className="text-gray-700 block px-4 py-2 text-sm" id="menu-item-1" onClick={handleOrderBy}>AVERAGE</button>
                            <button className="text-gray-700 block px-4 py-2 text-sm" id="menu-item-2" onClick={handleOrderBy}>VOLUME</button>
                            </div>
                        </div>
                    }
                </div>

                <div className="flex flex-wrap justify-center items-center">
                    {collection.edges?.map((edge: Edge) => {
                        const { node } = edge;
                        return (
                            <CollectionCard key={node.name} node={node} />
                        )
                    })}
                </div>
            </main>

            <div className="flex m-4 justify-between">
                <Button 
                    message='Previous 10' 
                    type={hasPreviousPage ? 'primary' : 'cancel'} 
                    onClick={handlePrevious} 
                />
                <Button 
                    message='Next 10' 
                    type={hasNextPage ? 'primary' : 'cancel'} 
                    onClick={handleNext}
                />
            </div>
        </>
    )
}

export default CollectionsContainer
