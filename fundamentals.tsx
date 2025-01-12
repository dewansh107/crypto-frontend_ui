import { Card, CardContent } from "@/components/ui/card"

export function Fundamentals() {
  const fundamentalData = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    { label: "All-Time High", value: "$69,044.77 -75.6%" },
    { label: "All-Time Low", value: "$67.81 24729.1%" },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Fundamentals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fundamentalData.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
              <span className="text-sm text-gray-500">{item.label}</span>
              <span className="text-sm font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

