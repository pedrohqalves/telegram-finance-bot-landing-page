
import { Check, Coins, Wallet, ChartLine } from "lucide-react";

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

  return (
    <section id="benefits" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que escolher o <span className="gradient-text">FinBot</span>?</h2>
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

        <div className="mt-16 bg-gradient-to-r from-finance-primary to-finance-accent rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Tudo em um só lugar</h3>
              <p className="text-white/90 mb-6">
                Unifique o controle das suas finanças em um único assistente inteligente, acessível diretamente pelo Telegram.
              </p>
              <ul className="space-y-3">
                {[
                  "Cadastre suas receitas e despesas com simples mensagens",
                  "Receba alertas de contas a pagar",
                  "Consulte seus relatórios financeiros a qualquer momento",
                  "Defina metas de economia e acompanhe seu progresso"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="mr-3 bg-white/20 rounded-full p-1">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/10 rounded-full absolute -top-5 -left-5 animate-pulse"></div>
                <div className="w-56 h-56 bg-white/20 rounded-full relative z-10 flex items-center justify-center">
                  <span className="text-5xl font-bold">100%</span>
                </div>
                <div className="absolute bottom-0 text-center w-full">
                  <span className="bg-white/20 px-4 py-1 rounded-full text-sm">Satisfação dos usuários</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
