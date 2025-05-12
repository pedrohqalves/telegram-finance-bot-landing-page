
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
            Junte-se a milhares de pessoas que estão usando o UnoBot para organizar suas finanças 
            e conquistar seus objetivos financeiros
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md p-6">
            <div className="bg-white rounded-xl text-gray-800 p-6 md:p-8 shadow-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-xl font-bold">Plano Mensal</h4>
                  <p className="text-gray-500">Desbloqueie todo o potencial do UnoBot</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">R$ 19,90<span className="text-base font-normal text-gray-500">/mês</span></div>
                  <p className="text-sm text-green-600">Economize 20% no plano anual</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                {[
                  "Todas as funcionalidades do UnoBot",
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
                Assinar agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
