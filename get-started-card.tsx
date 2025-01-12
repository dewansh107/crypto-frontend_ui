import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function GetStartedCard() {
  return (
    <Card className="bg-[#0052FE] text-white">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Get Started with KoinX
          <br />
          for FREE
        </h2>
        <p className="text-sm opacity-90">
          With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>
        <img
          src="/get-started-illustration.svg"
          alt="KoinX Features"
          className="w-40 h-40 my-4"
        />
        <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-6">
          Get Started for FREE →
        </Button>
      </CardContent>
    </Card>
  )
}

