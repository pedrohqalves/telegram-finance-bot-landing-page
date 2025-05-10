
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como o FinBot funciona?",
      answer:
        "O FinBot é um assistente financeiro que opera através do Telegram. Você adiciona o bot ao seu Telegram e pode começar a cadastrar suas receitas e despesas, consultar relatórios e receber insights personalizados sobre suas finanças. Nosso sistema de inteligência artificial analisa seus dados e fornece recomendações para melhorar sua saúde financeira."
    },
    {
      question: "É seguro compartilhar minhas informações financeiras?",
      answer:
        "Sim, totalmente seguro. Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos protocolos de segurança. Não armazenamos dados sensíveis como senhas de banco ou números completos de cartões. Além disso, você tem controle total sobre quais informações deseja compartilhar com o bot."
    },
    {
      question: "O FinBot é gratuito?",
      answer:
        "Oferecemos um plano gratuito com funcionalidades básicas para controle financeiro. Para acesso a recursos avançados como análises detalhadas, planejamento financeiro personalizado e relatórios completos, temos planos premium com preços acessíveis."
    },
    {
      question: "Posso cadastrar múltiplas contas bancárias?",
      answer:
        "Sim! O FinBot permite que você cadastre e gerencie múltiplas contas bancárias, cartões de crédito, investimentos e outras formas de ativos e despesas, proporcionando uma visão consolidada das suas finanças."
    },
    {
      question: "Como o FinBot me ajuda a economizar?",
      answer:
        "O FinBot analisa seus padrões de gastos e identifica oportunidades de economia. Ele pode alertar sobre gastos excessivos em determinadas categorias, sugerir melhores momentos para compras importantes, ajudar a definir e acompanhar metas de economia, e muito mais."
    },
    {
      question: "É possível obter relatórios periódicos das minhas finanças?",
      answer:
        "Sim, o FinBot pode enviar relatórios diários, semanais ou mensais sobre sua situação financeira, dependendo da sua preferência. Estes relatórios incluem resumos de gastos, progresso em relação às metas, alertas importantes e dicas personalizadas."
    },
  ];

  return (
    <section id="faq" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre como o FinBot pode transformar sua relação com o dinheiro
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center bg-finance-light rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-finance-dark">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para responder qualquer pergunta que você possa ter sobre o FinBot e como ele pode ajudar a transformar suas finanças.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="mailto:contato@finbot.com.br" 
              className="inline-flex items-center justify-center bg-finance-primary text-white px-6 py-3 rounded-lg hover:bg-finance-secondary transition-colors"
            >
              Entrar em contato
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center bg-white text-finance-primary px-6 py-3 rounded-lg border border-finance-primary hover:bg-gray-50 transition-colors"
            >
              Ver documentação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
