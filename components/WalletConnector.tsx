import React from 'react'
import Button from './Button'

export interface WalletConnectorProps {
  handleWalletConnection: () => void;
}

const WalletConnector = ({ handleWalletConnection }: WalletConnectorProps) => {
  return (
    <div className="rounded overflow-hidden shadow-lg border-4 border-solid bg-sky-50 m-16">
        <div className="flex flex-col px-6 py-4 items-center">
            <div className="font-bold text-xl mb-2">Connect Wallet to View Trending Connections:</div>
            <Button message='Connect Wallet' type='primary' onClick={handleWalletConnection} />
        </div>
    </div>
  )
}

export default WalletConnector
