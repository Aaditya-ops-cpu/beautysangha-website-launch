import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("4500");
  const [customAmount, setCustomAmount] = useState("");
  const [supportProgram, setSupportProgram] = useState(true);
  const [programAmount, setProgramAmount] = useState("375");

  const donationAmounts = [
    { amount: "4500", label: "₹ 4500.00" },
    { amount: "9000", label: "₹ 9000.00" },
    { amount: "13500", label: "₹ 13500.00" },
    { amount: "18000", label: "₹ 18000.00" },
    { amount: "24000", label: "₹ 24000.00" },
    { amount: "30000", label: "₹ 30000.00" },
    { amount: "37500", label: "₹ 37500.00" },
    { amount: "45000", label: "₹ 45000.00" },
    { amount: "60000", label: "₹ 60000.00" },
    { amount: "75000", label: "₹ 75000.00" },
    { amount: "90000", label: "₹ 90000.00" },
    { amount: "105000", label: "₹ 105000.00" },
    { amount: "150000", label: "₹ 150000.00" },
    { amount: "201000", label: "₹ 201000.00" }
  ];

  const campaigns = [
    {
      title: "Education Support Program",
      description: "Support education for underprivileged children",
      raised: 150000,
      goal: 500000,
      percentage: 30,
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare Initiative",
      description: "Provide healthcare facilities to rural communities",
      raised: 275000,
      goal: 600000,
      percentage: 46,
      image: "/placeholder.svg"
    },
    {
      title: "Women Empowerment Program",
      description: "Skill development and training for women",
      raised: 320000,
      goal: 400000,
      percentage: 80,
      image: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Make a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Difference</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Support our mission to create positive change in communities through education, healthcare, and empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Choose Donation Amount</h2>
              <p className="text-muted-foreground mb-6">
                I wish to donate ₹ 4500 to support 3 child(ren) for one academic year.
              </p>

              <RadioGroup value={selectedAmount} onValueChange={setSelectedAmount} className="grid grid-cols-3 md:grid-cols-7 gap-4 mb-6">
                {donationAmounts.map((amount) => (
                  <div key={amount.amount} className="flex items-center space-x-2">
                    <RadioGroupItem value={amount.amount} id={amount.amount} />
                    <Label 
                      htmlFor={amount.amount} 
                      className={`cursor-pointer p-3 border rounded-lg text-center text-sm ${
                        selectedAmount === amount.amount 
                          ? 'bg-primary text-white border-primary' 
                          : 'border-muted hover:border-primary'
                      }`}
                    >
                      {amount.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="mb-6">
                <Label htmlFor="custom-amount" className="block mb-2">Other Amount</Label>
                <Input
                  id="custom-amount"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="max-w-sm"
                />
              </div>

              <div className="flex items-start space-x-3 mb-6">
                <Checkbox 
                  id="support-program" 
                  checked={supportProgram}
                  onCheckedChange={(checked) => setSupportProgram(checked === true)}
                />
                <div className="flex-1">
                  <Label htmlFor="support-program" className="text-sm">
                    Support our new initiative - Morning Nutrition Programme (Breakfast) by donating ₹{" "}
                    <Input
                      value={programAmount}
                      onChange={(e) => setProgramAmount(e.target.value)}
                      className="inline-block w-20 h-8 mx-1"
                    />
                    {" "}to support 3 child/ren along with Mid-Day Meals
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    (You can uncheck if you wish.)
                  </p>
                </div>
              </div>

              <Button size="lg" className="w-full md:w-auto">
                Proceed to Payment
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Active Campaigns */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campaigns
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground">
              Support our ongoing initiatives and make a lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <span className="text-muted-foreground">Campaign Image</span>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                        style={{ width: `${campaign.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>{campaign.percentage}%</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      Raised: ₹{campaign.raised.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Goal: ₹{campaign.goal.toLocaleString()}
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{campaign.title}</h3>
                  <p className="text-muted-foreground mb-4">{campaign.description}</p>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    DONATE NOW
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;