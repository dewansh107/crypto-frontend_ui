import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutBitcoin() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">About Bitcoin</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">What is Bitcoin?</h3>
        <p className="mb-4 text-gray-600">
          Bitcoin is a decentralized digital currency created in 2009 by an unknown person using the pseudonym Satoshi Nakamoto. It operates on a peer-to-peer network without the need for intermediaries or central authorities. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.

        </p>
        <h3 className="text-lg font-semibold mb-2 text-gray-900">Bitcoin's Market Position</h3>
        <p className="mb-4 text-gray-600">
          As the first and most well-known cryptocurrency, Bitcoin has maintained its position as the largest digital asset by market capitalization. Its limited supply of 21 million coins and its adoption by institutional investors have contributed to its perceived value as a store of wealth and a hedge against inflation.
        </p>
        <p className="text-gray-600">
          Despite its volatility, Bitcoin has shown remarkable resilience over the years, recovering from multiple market crashes and reaching new all-time highs. Its influence extends beyond its own market, often setting trends for the entire cryptocurrency ecosystem and inspiring the creation of numerous other digital currencies and blockchain-based projects.
        </p>
      </CardContent>
    </Card>
  )
}

