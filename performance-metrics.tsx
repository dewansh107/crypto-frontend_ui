import { Card, CardContent } from "@/components/ui/card"

export function PerformanceMetrics() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Performance</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">Today's Low</span>
          <span className="text-sm">Today's High</span>
        </div>
        <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full mb-2"></div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm">$46,930.22</span>
          <span className="text-sm">$49,343.83</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">52W Low</span>
          <span className="text-sm">52W High</span>
        </div>
        <div className="h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full mb-2"></div>
        <div className="flex justify-between items-center">
          <span className="text-sm">$16,930.22</span>
          <span className="text-sm">$49,743.83</span>
        </div>
      </CardContent>
    </Card>
  )
}

