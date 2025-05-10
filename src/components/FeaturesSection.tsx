
import { Bot, Mail, DollarSign, ChartLine, Bell, Wallet, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-finance-primary" />,
      title: "Gestão financeira",
      description: "Controle de gastos, receitas e investimentos em um só lugar.",
    },
    {
      icon: <ChartLine className="h-6 w-6 text-finance-primary" />,
      title: "Análises inteligentes",
      description: "Relatórios detalhados sobre seus padrões financeiros.",
    },
    {
      icon: <Bell className="h-6 w-6 text-finance-primary" />,
      title: "Lembretes de contas",
      description: "Nunca mais esqueça uma data de pagamento importante.",
    },
    {
      icon: <Wallet className="h-6 w-6 text-finance-primary" />,
      title: "Metas financeiras",
      description: "Defina objetivos e acompanhe seu progresso.",
    },
    {
      icon: <Bot className="h-6 w-6 text-finance-primary" />,
      title: "Interação natural",
      description: "Converse com seu assistente como se fosse um amigo.",
    },
    {
      icon: <Mail className="h-6 w-6 text-finance-primary" />,
      title: "Relatórios por email",
      description: "Receba resumos periódicos sobre sua saúde financeira.",
    },
  ];

  return (
    <section id="features" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Funcionalidades</span> poderosas
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça as principais ferramentas que vão transformar a maneira como você lida com suas finanças pessoais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="mr-4 mt-1 bg-finance-light p-3 rounded-lg h-fit">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-finance-light rounded-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-finance-dark">Como funciona o FinBot</h3>
                <p className="text-gray-700 mb-6">
                  Nosso assistente financeiro utiliza inteligência artificial avançada para analisar seus dados e oferecer 
                  orientações personalizadas sobre como gerenciar melhor seu dinheiro.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Adicione o bot ao Telegram e comece a conversar",
                    "Informe seus gastos e receitas através de mensagens simples",
                    "Receba análises e sugestões personalizadas",
                    "Consulte relatórios e faça perguntas sobre suas finanças"
                  ].map((step, i) => (
                    <div key={i} className="flex items-start">
                      <div className="mr-3 bg-finance-primary rounded-full p-1 mt-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-finance-primary hover:bg-finance-secondary w-full md:w-auto">
                  Começar agora
                </Button>
              </div>
              <div className="md:w-1/2 bg-finance-primary p-8 md:p-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden transform rotate-3 animate-float">
                    <div className="p-4 border-b">
                      <div className="flex items-center">
                        <Bot className="h-8 w-8 text-finance-primary mr-2" />
                        <span className="font-bold">FinBot</span>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">Olá Maria! Sua meta de economia para o mês está em 75%. Faltam apenas R$ 250 para atingir o objetivo.</p>
                      </div>
                      <div className="bg-finance-light p-3 rounded-lg ml-auto max-w-[80%]">
                        <p className="text-sm">Quanto gastei com alimentação este mês?</p>
                      </div>
                      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                        <p className="text-sm">Você gastou R$ 850 com alimentação neste mês. Isso representa 23% dos seus gastos totais.</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg transform -rotate-2 animate-float" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      <span className="font-medium text-sm">75% da meta atingida</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
