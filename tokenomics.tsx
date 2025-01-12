import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Tokenomics() {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Tokenomics</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">Initial Distribution</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">
          {/* Donut Chart */}
          <div className="w-[220px] h-[220px] relative">
            <svg
              viewBox="0 0 100 100"
              className="transform rotate-[270deg] w-full h-full"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="white"
                stroke="none"
              />
              {/* Blue segment (80%) */}
              <circle
                cx="50"
                cy="50"
                r="32"
                fill="none"
                stroke="#0082FF"
                strokeWidth="16"
                strokeDasharray="201.06 251.32"
                className="transition-all duration-300 ease-in-out"
              />
              {/* Yellow segment (20%) */}
              <circle
                cx="50"
                cy="50"
                r="32"
                fill="none"
                stroke="#FAA002"
                strokeWidth="16"
                strokeDasharray="50.26 251.32"
                strokeDashoffset="-201.06"
                className="transition-all duration-300 ease-in-out"
              />
              {/* Inner white circle for donut effect */}
              <circle
                cx="50"
                cy="50"
                r="24"
                fill="white"
                stroke="none"
              />
            </svg>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0082FF]"></div>
              <span className="text-base text-gray-900">Crowdsale investors: 80%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FAA002]"></div>
              <span className="text-base text-gray-900">Foundation: 20%</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600">
          The initial distribution of Bitcoin tokens was designed to create a fair and decentralized network. 80% of the tokens were allocated to crowdsale investors, allowing for wide distribution among early adopters and enthusiasts. The remaining 20% was reserved for the Bitcoin Foundation to fund ongoing development, marketing, and community initiatives.
        </p>
      </CardContent>
    </Card>
  )
}

