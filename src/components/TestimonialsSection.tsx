
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      position: "Profissional autônoma",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
      text: "O FinBot mudou completamente como eu gerencio minhas finanças. Consigo facilmente acompanhar meus gastos e receitas, e as dicas personalizadas já me ajudaram a economizar muito dinheiro.",
    },
    {
      name: "Carlos Eduardo",
      position: "Empresário",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "Muito prático poder gerenciar tudo pelo Telegram! O bot é intuitivo e me ajuda a manter minhas contas organizadas. As análises de gastos são detalhadas e me ajudam a identificar onde posso economizar.",
    },
    {
      name: "Ana Luiza",
      position: "Estudante universitária",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      text: "Como estudante, preciso controlar bem meu orçamento limitado. O FinBot me ajuda a organizar meus gastos e a estabelecer metas de economia. Recomendo para todos os estudantes!",
    },
    {
      name: "Ricardo Mendes",
      position: "Gestor de projetos",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 4,
      text: "Excelente ferramenta para controle financeiro. Consigo visualizar facilmente para onde está indo meu dinheiro e receber alertas sobre gastos excessivos em determinadas categorias.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubra como o FinBot está ajudando milhares de pessoas a transformar sua relação com o dinheiro
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[activeIndex].position}</p>
                  <div className="flex mt-2">
                    {Array(testimonials[activeIndex].rating).fill(0).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8 md:border-l border-gray-200">
                  <div className="relative">
                    <div className="text-4xl font-serif text-finance-primary opacity-30 absolute -top-6 -left-2">"</div>
                    <p className="italic text-gray-700 relative z-10 text-lg">
                      {testimonials[activeIndex].text}
                    </p>
                    <div className="text-4xl font-serif text-finance-primary opacity-30 absolute -bottom-10 right-0">"</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-finance-primary hover:bg-finance-light transition-colors"
            aria-label="Testimonial anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-finance-primary hover:bg-finance-light transition-colors"
            aria-label="Próximo testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full mx-1 ${
                index === activeIndex ? "bg-finance-primary" : "bg-gray-300"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-md p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Usuários ativos", value: "10.000+" },
            { label: "Economia média", value: "25%" },
            { label: "Satisfação", value: "98%" },
            { label: "Metas atingidas", value: "75.000+" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-finance-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
