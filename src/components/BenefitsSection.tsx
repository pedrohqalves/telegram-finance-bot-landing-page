
import { Check, Coins, Wallet, ChartLine, AlertCircle, FileText, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Wallet className="h-8 w-8 text-finance-primary" />,
      title: "Controle financeiro simplificado",
      description: "Acompanhe seus gastos e receitas de forma simples e intuitiva, sem complicações ou planilhas complexas."
    },
    {
      icon: <ChartLine className="h-8 w-8 text-finance-primary" />,
      title: "Análise inteligente",
      description: "Nossa IA analisa seus hábitos financeiros e fornece insights personalizados para melhorar seu controle financeiro."
    },
    {
      icon: <Coins className="h-8 w-8 text-finance-primary" />,
      title: "Economize mais",
      description: "Receba dicas personalizadas de economia e veja seu dinheiro render mais com sugestões de corte de gastos."
    },
  ];

  const allInOneFeatures = [
    {
      icon: <Check className="h-5 w-5 text-white" />,
      text: "Cadastre suas receitas e despesas com simples mensagens",
      bgColor: "bg-finance-primary"
    },
    {
      icon: <AlertCircle className="h-5 w-5 text-white" />,
      text: "Receba alertas de contas a pagar",
      bgColor: "bg-finance-secondary"
    },
    {
      icon: <FileText className="h-5 w-5 text-white" />,
      text: "Consulte seus relatórios financeiros a qualquer momento",
      bgColor: "bg-finance-accent"
    },
    {
      icon: <Target className="h-5 w-5 text-white" />,
      text: "Defina metas de economia e acompanhe seu progresso",
      bgColor: "bg-finance-dark"
    }
  ];

  return (
    <>
      <section id="benefits" className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o <span className="gradient-text">UnoBot</span>?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso assistente financeiro inteligente traz uma nova maneira de gerenciar suas finanças, 
              com foco na simplicidade e eficiência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 p-3 bg-finance-light inline-block rounded-lg">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Tudo em um só lugar</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unifique o controle das suas finanças em um único assistente inteligente, acessível diretamente pelo Telegram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allInOneFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-2 ${feature.bgColor}`}></div>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <p className="font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-8 max-w-md">
              <div className="relative">
                <div className="w-36 h-36 bg-gradient-to-br from-finance-primary to-finance-accent rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">100%</span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Satisfação garantida</h4>
                <p className="text-gray-600">Nossos usuários aprovam e recomendam o UnoBot para gerenciar finanças.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenefitsSection;
