import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";

const ROICalculatorSection = () => {
  const navigate = useNavigate();
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
        <div className="text-center space-y-6 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-whatsapp-green/10 text-whatsapp-green px-4 py-3 rounded-full font-medium text-sm sm:text-base">
            <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
            ROI Calculator
          </div>
          
          <h2 className="font-h1 text-foreground">
            Calculate Your Potential
            <span className="block bg-gradient-to-r from-whatsapp-green to-whatsapp-dark bg-clip-text text-transparent mt-2">
              Business Savings
            </span>
          </h2>
          
          <p className="font-body-lg text-muted-foreground mx-auto">
            See exactly how much TheChatFlow can save your business every month
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-3xl shadow-card p-6 sm:p-8 space-y-6 sm:space-y-8">
            <h3 className="font-h3 text-foreground text-center">Your Current Setup</h3>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Daily Messages Slider */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="font-medium text-foreground text-sm sm:text-base">Daily WhatsApp Messages</label>
                  <span className="font-bold text-whatsapp-green text-lg sm:text-xl">{dailyMessages}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={dailyMessages}
                  onChange={(e) => setDailyMessages(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>50</span>
                  <span>5000</span>
                </div>
              </div>

              {/* Current Staff Slider */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="font-medium text-foreground text-sm sm:text-base">Staff Handling Chats</label>
                  <span className="font-bold text-whatsapp-green text-lg sm:text-xl">{currentStaff}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={currentStaff}
                  onChange={(e) => setCurrentStaff(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Average Salary Slider */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <label className="font-medium text-foreground text-sm sm:text-base">Average Staff Salary</label>
                  <span className="font-bold text-whatsapp-green text-lg sm:text-xl">Rs. {averageSalary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="30000"
                  max="80000"
                  step="5000"
                  value={averageSalary}
                  onChange={(e) => setAverageSalary(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>30k</span>
                  <span>80k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6 lg:space-y-8 mt-8 lg:mt-0">
            {/* Current Cost Card */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 sm:h-7 sm:w-7 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 text-base sm:text-lg">Current Monthly Cost</h4>
                  <p className="text-sm sm:text-base text-red-600">Manual chat handling</p>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-red-800">{formatCurrency(currentMonthlyCost)}</div>
            </div>

            {/* TheChatFlow Cost Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-whatsapp-green rounded-full flex items-center justify-center">
                  <Calculator className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-base sm:text-lg">TheChatFlow Cost</h4>
                  <p className="text-sm sm:text-base text-blue-600">Complete automation</p>
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-whatsapp-green">{formatCurrency(thechatflowCost)}</div>
            </div>

            {/* Savings Card */}
            <div className="bg-gradient-to-r from-whatsapp-green to-whatsapp-dark rounded-2xl p-6 sm:p-8 text-white shadow-hero">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-base sm:text-lg">Your Monthly Savings</h4>
                  <p className="text-sm sm:text-base text-white/90">Pure profit increase</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="text-4xl sm:text-5xl font-bold text-white">{formatCurrency(monthlySavings)}</div>
                <div className="text-lg sm:text-xl text-white">Annual Savings: <strong className="text-white">{formatCurrency(annualSavings)}</strong></div>
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-3 rounded-full">
                  <span className="text-sm sm:text-base font-medium text-white">ROI: {roi}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section - Full Width & Centered */}
        <div className="w-full flex justify-center mt-12 lg:mt-16">
          <div className="text-center pt-6 space-y-6 max-w-2xl">
            <div className="mx-auto space-y-4">
              <h3 className="font-h3 text-foreground">Ready to 10X Your Business Growth?</h3>
              <p className="text-muted-foreground font-body">
                Join 500+ Pakistani businesses already automating their success
              </p>
            </div>
            
            <div className="flex justify-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="shadow-hero"
                onClick={() => navigate('/contact')}
              >
                <Calculator className="mr-2 h-5 w-5" />
                Book Free Demo
              </Button>
            </div>
            
            <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground">
              <p>Setup in 24-48 hours</p>
              <p>30-day money-back guarantee</p>
              <p>No contracts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;