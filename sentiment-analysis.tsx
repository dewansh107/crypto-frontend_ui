import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SentimentAnalysis() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Sentiment</CardTitle>
      </CardHeader>
      <CardContent>
        <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Events</h4>
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-4">
          <Card className="flex-shrink-0 w-80 bg-blue-50 border-none">
            <CardContent className="p-4 flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Bitcoin ETF Approval</h5>
                <p className="text-sm text-gray-600">The SEC's approval of Bitcoin ETFs is expected to bring a new wave of institutional investors, potentially driving up the price and market cap of Bitcoin.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="flex-shrink-0 w-80 bg-green-50 border-none">
            <CardContent className="p-4 flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h5 className="font-semibold mb-2 text-gray-900">Positive Market Trend</h5>
                <p className="text-sm text-gray-600">Bitcoin's price has shown a consistent upward trend over the past month, indicating growing investor confidence and potential for further gains.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        <h4 className="text-lg font-semibold mb-4 text-gray-900">Analyst Estimates</h4>
        <div className="flex items-center space-x-4">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-green-500">76%</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="w-8 text-sm text-gray-600">Buy</span>
              <Progress value={76} className="h-2 flex-1" />
              <span className="w-8 text-sm text-right text-gray-600">76%</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="w-8 text-sm text-gray-600">Hold</span>
              <Progress value={8} className="h-2 flex-1" />
              <span className="w-8 text-sm text-right text-gray-600">8%</span>
            </div>
            <div className="flex items-center">
              <span className="w-8 text-sm text-gray-600">Sell</span>
              <Progress value={16} className="h-2 flex-1" />
              <span className="w-8 text-sm text-right text-gray-600">16%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

