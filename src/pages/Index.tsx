import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Smartphone, CreditCard, MessageSquare, Star, Users, Clock, Zap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🚀 Nova plataforma de agendamentos
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            AgendaFácil
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Sua agenda online em poucos cliques. De WhatsApp bagunçado para agenda profissional em 5 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => window.alert('Redirecionando para cadastro...')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Começar Grátis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3"
              onClick={() => window.alert('Abrindo demonstração...')}
            >
              Ver Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">+2.000</div>
              <div className="text-sm text-muted-foreground">Profissionais</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">-80%</div>
              <div className="text-sm text-muted-foreground">No-shows</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5min</div>
              <div className="text-sm text-muted-foreground">Para configurar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa para profissionalizar seus agendamentos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Elimine a bagunça do WhatsApp e ofereça uma experiência profissional para seus clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Mobile First</CardTitle>
                <CardDescription>
                  80% dos agendamentos acontecem no celular. Nossa interface foi pensada para mobile.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Integração WhatsApp</CardTitle>
                <CardDescription>
                  Funciona dentro do app que seus clientes já usam. Notificações automáticas por WhatsApp.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pagamentos Pix & Cartão</CardTitle>
                <CardDescription>
                  Receba pagamentos antecipados via Pix ou cartão. Reduza cancelamentos de última hora.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Configuração em 5 minutos</CardTitle>
                <CardDescription>
                  Cadastro super simples. Wizard inteligente te guia em cada passo.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sistema de Avaliações</CardTitle>
                <CardDescription>
                  Colete feedback dos clientes automaticamente. Melhore sua reputação online.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Link Personalizado</CardTitle>
                <CardDescription>
                  Seu próprio link profissional: agendafacil.com/seunome. Compartilhe em qualquer lugar.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-xl text-muted-foreground">
              Comece grátis e evolua conforme seu negócio cresce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="p-6 border-2">
              <CardHeader>
                <CardTitle className="text-center">Gratuito</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">R$ 0</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Até 3 tipos de serviços
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    50 agendamentos/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Notificações por email
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Link personalizado
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6" 
                  variant="outline"
                  onClick={() => window.alert('Iniciando plano gratuito...')}
                >
                  Começar Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="p-6 border-2 border-primary relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-center">Profissional</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">R$ 29</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Agendamentos ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Integração WhatsApp
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Pagamentos via Pix
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Design personalizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Relatórios básicos
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  onClick={() => window.alert('Iniciando teste gratuito do plano profissional...')}
                >
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="p-6 border-2">
              <CardHeader>
                <CardTitle className="text-center">Premium</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">R$ 59</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Múltiplos profissionais
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Pagamentos via cartão
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Sistema de avaliações
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Automações avançadas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    Suporte prioritário
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6" 
                  variant="outline"
                  onClick={() => window.alert('Iniciando teste gratuito do plano premium...')}
                >
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pronto para profissionalizar seus agendamentos?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 2.000 profissionais que já transformaram seus negócios com o AgendaFácil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-8 py-3"
              onClick={() => window.alert('Redirecionando para cadastro gratuito...')}
            >
              <Zap className="mr-2 h-5 w-5" />
              Começar Agora - Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => window.alert('Abrindo chat com especialista...')}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-muted/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 AgendaFácil. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;