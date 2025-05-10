
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CtaSection = () => {
  const features = [
    "Controle financeiro completo",
    "Análises personalizadas",
    "Metas de economia",
    "Alertas de gastos",
    "Suporte por chat",
    "Relatórios periódicos",
  ];

  return (
    <section className="section bg-gradient-to-br from-finance-primary to-finance-dark text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a transformar suas finanças hoje
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que estão usando o FinBot para organizar suas finanças 
            e conquistar seus objetivos financeiros
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Experimente grátis por 14 dias</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3 bg-white/20 rounded-full p-1">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <Button className="bg-white text-finance-primary hover:bg-gray-100 w-full md:w-auto">
                Começar agora
              </Button>
              <p className="text-sm text-white/70">
                Não é necessário cartão de crédito
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 p-6">
            <div className="bg-white rounded-xl text-gray-800 p-6 md:p-8 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold">Plano Premium</h4>
                  <p className="text-gray-500">Desbloqueie todo o potencial do FinBot</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">R$ 19,90<span className="text-base font-normal text-gray-500">/mês</span></div>
                  <p className="text-sm text-green-600">Economize 20% no plano anual</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  "Todas as funcionalidades do plano básico",
                  "Análises financeiras avançadas",
                  "Projeções de gastos futuros",
                  "Relatórios completos por email",
                  "Suporte prioritário 24/7",
                  "Metas financeiras ilimitadas",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <div className="mr-3 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-finance-primary hover:bg-finance-secondary text-white w-full">
                Obter Premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
