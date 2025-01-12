"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from 'lucide-react'

interface TrendingCoin {
  item: {
    id: string
    coin_id: number
    name: string
    symbol: string
    small: string
    data: {
      price_change_percentage_24h: {
        usd: number
      }
      sparkline: string
    }
  }
}

export function TrendingCoins() {
  const [trending, setTrending] = useState<TrendingCoin[]>([])

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending")
        const data = await response.json()
        setTrending(data.coins.slice(0, 3))
      } catch (error) {
        console.error("Error fetching trending coins:", error)
      }
    }

    fetchTrending()
  }, [])

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-900">Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trending.map((coin) => (
          <div key={coin.item.coin_id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={coin.item.small} alt={coin.item.name} className="w-6 h-6 rounded-full" />
              <span className="font-medium text-gray-900">
                {coin.item.name} ({coin.item.symbol.toUpperCase()})
              </span>
            </div>
            <div
              className={`flex items-center px-2 py-1 rounded ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                <ArrowUp className="w-3 h-3 mr-1" />
              ) : (
                <ArrowDown className="w-3 h-3 mr-1" />
              )}
              {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

