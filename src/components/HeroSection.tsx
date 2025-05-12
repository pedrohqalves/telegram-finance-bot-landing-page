
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, ChartLine, Wallet } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="mb-4 inline-block bg-finance-light text-finance-primary py-2 px-4 rounded-full text-sm font-medium">
              Revolucione suas finanças com IA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Seu <span className="gradient-text">Assistente Financeiro</span> Inteligente no Telegram
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Controle suas finanças de forma simples e eficiente com nosso bot de IA que analisa, organiza e otimiza seus gastos e receitas automaticamente.
            </p>
            <div>
              <Button size="lg" className="bg-finance-primary hover:bg-finance-secondary text-white px-8 py-6 rounded-lg text-lg">
                Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4Mzc1MzAyMQ&ixlib=rb-4.0.3&q=80&w=40" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4Mzc1MzAyMQ&ixlib=rb-4.0.3&q=80&w=40" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4Mzc1MzAyMQ&ixlib=rb-4.0.3&q=80&w=40" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4Mzc1MzAyMQ&ixlib=rb-4.0.3&q=80&w=40" alt="User 4" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-sm text-gray-600">
                <strong>1,000+</strong> usuários ativos
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-gradient-to-br from-finance-primary to-finance-accent rounded-3xl p-1 shadow-xl animate-float">
              <div className="bg-white rounded-3xl p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-finance-primary flex items-center justify-center">
                      <Bot className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-bold">UnoBot</p>
                      <p className="text-xs text-gray-500">Assistente financeiro</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Online</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Olá! Como posso ajudar com suas finanças hoje?</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Você gastou R$ 240,00 em restaurantes este mês, 15% a mais que o mês passado.</p>
                  </div>
                  
                  <div className="bg-finance-light p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm">Qual é meu saldo atual?</p>
                  </div>
                  
                  <div className="bg-gray-100 p-3 rounded-lg max-w-[90%]">
                    <p className="text-sm">Seu saldo atual é R$ 3.450,50. Você tem 3 contas a pagar nos próximos 5 dias totalizando R$ 680,00.</p>
                  </div>
                  
                  <div className="bg-finance-light p-3 rounded-lg max-w-[80%] ml-auto">
                    <p className="text-sm">Mostre como estão meus gastos este mês</p>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="mb-2 text-sm font-medium">Resumo de gastos - Maio 2025</div>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-finance-primary"></div>
                          <span className="text-xs">Moradia</span>
                        </div>
                        <span className="text-xs font-medium">40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-finance-secondary"></div>
                          <span className="text-xs">Alimentação</span>
                        </div>
                        <span className="text-xs font-medium">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-finance-accent"></div>
                          <span className="text-xs">Transporte</span>
                        </div>
                        <span className="text-xs font-medium">15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                          <span className="text-xs">Outros</span>
                        </div>
                        <span className="text-xs font-medium">20%</span>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="flex h-full">
                        <div className="bg-finance-primary h-full" style={{ width: '40%' }}></div>
                        <div className="bg-finance-secondary h-full" style={{ width: '25%' }}></div>
                        <div className="bg-finance-accent h-full" style={{ width: '15%' }}></div>
                        <div className="bg-gray-400 h-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-4 -bottom-4 md:-right-10 md:-bottom-10 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <ChartLine className="text-green-600 h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Economia</div>
                  <div className="font-bold text-green-600">+12% este mês</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -left-4 top-1/4 md:-left-10 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Wallet className="text-finance-primary h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Meta de poupança</div>
                  <div className="font-bold text-finance-primary">75% concluída</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
