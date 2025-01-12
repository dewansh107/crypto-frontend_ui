"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface PriceData {
  bitcoin: {
    usd: number
    usd_24h_change: number
    inr: number
  }
}

export function PriceHeader() {
  const [priceData, setPriceData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (!data.bitcoin) {
          throw new Error('Bitcoin data not found in response');
        }
        
        setPriceData(data);
      } catch (error) {
        console.error("Error fetching price:", error);
        setError(error instanceof Error ? error.message : 'Failed to fetch price data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPrice()
    const interval = setInterval(fetchPrice, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="border-none shadow-none bg-white">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin" className="h-10 w-10" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">BTC</h1>
            <span className="text-sm text-gray-500">Bitcoin</span>
          </div>
          <span className="text-sm font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">Rank #1</span>
        </div>
        {loading ? (
          <div className="text-gray-600">Loading price data...</div>
        ) : error ? (
          <div className="flex flex-col gap-2">
            <div className="text-red-500">{error}</div>
            <button 
              onClick={() => window.location.reload()} 
              className="text-blue-500 underline text-sm"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">
                ${priceData?.bitcoin.usd.toLocaleString()}
              </span>
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  priceData?.bitcoin.usd_24h_change && priceData.bitcoin.usd_24h_change > 0
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {priceData?.bitcoin.usd_24h_change > 0 ? '▲' : '▼'} {Math.abs(priceData?.bitcoin.usd_24h_change || 0).toFixed(2)}%
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              ₹ {priceData?.bitcoin.inr.toLocaleString()}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}

