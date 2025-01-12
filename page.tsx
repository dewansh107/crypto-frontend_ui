import { Navigation } from "@/components/navigation"
import { PriceHeader } from "@/components/price-header"
import { TradingChart } from "@/components/trading-chart"
import { GetStartedCard } from "@/components/get-started-card"
import { TrendingCoins } from "@/components/trending-coins"
import { PerformanceMetrics } from "@/components/performance-metrics"
import { Fundamentals } from "@/components/fundamentals"
import { SentimentAnalysis } from "@/components/sentiment-analysis"
import { YouMayAlsoLike } from "@/components/you-may-also-like"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AboutBitcoin } from "@/components/about-bitcoin"
import { Tokenomics } from "@/components/tokenomics"
import { Team } from "@/components/team"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EFF2F5]">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            <PriceHeader />
            <TradingChart />
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto bg-white rounded-t-lg border-b">
                <TabsTrigger value="overview" className="text-sm font-semibold">Overview</TabsTrigger>
                <TabsTrigger value="fundamentals" className="text-sm font-semibold">Fundamentals</TabsTrigger>
                <TabsTrigger value="news-insights" className="text-sm font-semibold">News Insights</TabsTrigger>
                <TabsTrigger value="sentiments" className="text-sm font-semibold">Sentiments</TabsTrigger>
                <TabsTrigger value="team" className="text-sm font-semibold">Team</TabsTrigger>
                <TabsTrigger value="technicals" className="text-sm font-semibold">Technicals</TabsTrigger>
                <TabsTrigger value="tokenomics" className="text-sm font-semibold">Tokenomics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6 bg-white rounded-b-lg p-6">
                <div className="space-y-6">
                  <PerformanceMetrics />
                  <Fundamentals />
                  <SentimentAnalysis />
                  <AboutBitcoin />
                  <Tokenomics />
                  <Team />
                </div>
              </TabsContent>
              <TabsContent value="fundamentals" className="mt-6 bg-white rounded-b-lg p-6">
                <Fundamentals />
              </TabsContent>
              <TabsContent value="news-insights" className="mt-6 bg-white rounded-b-lg p-6">
                <div>News and Insights content</div>
              </TabsContent>
              <TabsContent value="sentiments" className="mt-6 bg-white rounded-b-lg p-6">
                <SentimentAnalysis />
              </TabsContent>
              <TabsContent value="team" className="mt-6 bg-white rounded-b-lg p-6">
                <Team />
              </TabsContent>
              <TabsContent value="technicals" className="mt-6 bg-white rounded-b-lg p-6">
                <div>Technical analysis content</div>
              </TabsContent>
              <TabsContent value="tokenomics" className="mt-6 bg-white rounded-b-lg p-6">
                <Tokenomics />
              </TabsContent>
            </Tabs>
          </div>
          <div className="lg:w-1/3 space-y-6">
            <GetStartedCard />
            <TrendingCoins />
          </div>
        </div>
        <div className="mt-8">
          <YouMayAlsoLike />
        </div>
      </div>
    </div>
  )
}

