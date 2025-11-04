import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import labBackground from "@/assets/lab-background.jpg";

const Index = () => {
  // TODO: Replace this placeholder with your actual WhatsApp link
  // Format: https://wa.link/yourlink or https://wa.me/491234567890?text=Your%20pre-filled%20message
  const whatsappLink = "https://wa.link/e0s9e8";
 
  const handleWhatsAppClick = () => {
    if (typeof == 'function') {
       fbq('track', 'Contact');
    }

    setTimeout(() => {
      window.location.href = whatsappLink;
    })
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      {/* Dark blurred laboratory background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${labBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
      </div>
      {/* Content - elevated above background */}
      <div className="relative z-10 max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
          Ein Schritt entfernt vom professionellen Gespräch
        </h1>

        {/* Subheadline */}
        <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium max-w-xl mx-auto">
          Wir schätzen Ihre Diskretion. Setzen wir die Konversation auf WhatsApp fort.
        </h2>

        {/* CTA Button - The star of the show */}
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="w-full max-w-md h-16 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
            onClick={handleWhatsAppClick}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Gespräch auf WhatsApp starten</span>
            </a>
          </Button>
        </div>

        {/* Subtle premium touch - minimalist divider */}
        <div className="pt-8">
          <div className="h-px w-24 bg-primary/20 mx-auto" />
        </div>
      </div>
    </main>
  );
};

export default Index;
