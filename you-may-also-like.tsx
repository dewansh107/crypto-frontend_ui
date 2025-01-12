"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from 'lucide-react'

interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  sparkline_in_7d: {
    price: number[]
  }
}

export function YouMayAlsoLike() {
  const [coins, setCoins] = useState<Coin[]>([])

  useEffect(() => {
    async function fetchCoins() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        const data = await response.json()
        setCoins(data)
      } catch (error) {
        console.error("Error fetching coins:", error)
      }
    }

    fetchCoins()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">You May Also Like</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {coins.map((coin) => (
            <div key={coin.id} className="flex-shrink-0 w-44">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center gap-2 mb-2">
                  <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full" />
                  <span className="font-medium">{coin.symbol.toUpperCase()}</span>
                </div>
                <div className="font-bold">${coin.current_price.toFixed(2)}</div>
                <img
                  src={`https://www.coingecko.com/coins/${coin.id}/sparkline`}
                  alt={`${coin.name} sparkline`}
                  className="w-full h-16 mt-2"
                />
                <div
                  className={`flex items-center justify-end mt-2 ${
                    coin.price_change_percentage_24h > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 ? (
                    <ArrowUp className="w-3 h-3 mr-1" />
                  ) : (
                    <ArrowDown className="w-3 h-3 mr-1" />
                  )}
                  {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

