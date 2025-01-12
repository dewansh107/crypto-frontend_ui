import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&q=80",
      description: "John Smith is a visionary entrepreneur with over 15 years of experience in blockchain technology. He founded Bitcoin with the goal of creating a decentralized digital currency that could revolutionize the global financial system. His expertise in cryptography and distributed systems has been instrumental in shaping the core principles of Bitcoin.",
    },
    {
      name: "Emily Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=300&h=300&fit=crop&q=80",
      description: "Emily Chen is a brilliant computer scientist with a Ph.D. in Distributed Systems from MIT. She leads the technical development of Bitcoin, overseeing the implementation of key features and ensuring the network's security and scalability. Her innovative approaches to consensus algorithms have significantly improved Bitcoin's performance.",
    },
    {
      name: "Michael Johnson",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80",
      description: "Michael Johnson brings over two decades of experience in finance and business development to the Bitcoin team. He is responsible for fostering strategic partnerships with financial institutions, merchants, and technology companies. His efforts have been crucial in driving the adoption of Bitcoin as a mainstream payment method.",
    },
  ]

  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">Team</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-gray-600">
          The Bitcoin team consists of world-class experts in cryptography, distributed systems, and finance. Their combined expertise and vision drive the continuous innovation and growth of the Bitcoin network.
        </p>
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-[#E8F4FD] border-none">
              <CardContent className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 p-6">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-lg object-cover" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

