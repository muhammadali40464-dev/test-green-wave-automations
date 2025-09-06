import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const ROICalculatorSection = () => {
  const [dailyMessages, setDailyMessages] = useState(500);
  const [currentStaff, setCurrentStaff] = useState(3);
  const [averageSalary, setAverageSalary] = useState(40000);

  const currentMonthlyCost = currentStaff * averageSalary;
  const thechatflowCost = 9999;
  const monthlySavings = currentMonthlyCost - thechatflowCost;
  const annualSavings = monthlySavings * 12;
  const roi = Math.round((monthlySavings / thechatflowCost) * 100);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="section-padding gradient-background">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-2 rounded-full font-medium text-sm">
            <Calculator className="h-4 w-4" />
            ROI Calculator
          </div>
          
          <h2 className="font-h1 text-foreground">
            Calculate Your Potential
            <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent">
              Business Savings
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground max-w-2xl mx-auto">
            See exactly how much TheChatFlow can save your business every month
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-3xl shadow-card p-8 space-y-8">
            <h3 className="font-h3 text-foreground text-center">Your Current Setup</h3>
            
            <div className="space-y-6">
              {/* Daily Messages Slider */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="font-medium text-foreground">Daily WhatsApp Messages</label>
                  <span className="font-bold text-whatsapp-green">{dailyMessages}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={dailyMessages}
                  onChange={(e) => setDailyMessages(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>50</span>
                  <span>5000</span>
                </div>
              </div>

              {/* Current Staff Slider */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="font-medium text-foreground">Staff Handling Chats</label>
                  <span className="font-bold text-whatsapp-green">{currentStaff}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={currentStaff}
                  onChange={(e) => setCurrentStaff(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Average Salary Slider */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="font-medium text-foreground">Average Staff Salary</label>
                  <span className="font-bold text-whatsapp-green">Rs. {averageSalary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="80000"
                  step="5000"
                  value={averageSalary}
                  onChange={(e) => setAverageSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>30k</span>
                  <span>80k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Current Cost Card */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-800">Current Monthly Cost</h4>
                  <p className="text-sm text-red-600">Manual chat handling</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-red-800">{formatCurrency(currentMonthlyCost)}</div>
            </div>

            {/* TheChatFlow Cost Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-whatsapp-green rounded-full flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">TheChatFlow Cost</h4>
                  <p className="text-sm text-blue-600">Complete automation</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-whatsapp-green">{formatCurrency(thechatflowCost)}</div>
            </div>

            {/* Savings Card */}
            <div className="gradient-cta rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Your Monthly Savings</h4>
                  <p className="text-sm text-white/80">Pure profit increase</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold animate-pulse-custom">{formatCurrency(monthlySavings)}</div>
                <div className="text-lg">Annual Savings: <strong>{formatCurrency(annualSavings)}</strong></div>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">ROI: {roi}%</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="hero" size="lg" className="shadow-hero animate-pulse-custom">
                <Calculator className="mr-2 h-5 w-5" />
                Start Saving Today
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Setup in 24-48 hours • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;