import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  // TODO: Replace this placeholder with your actual WhatsApp link
  // Format: https://wa.link/yourlink or https://wa.me/491234567890?text=Your%20pre-filled%20message
  const whatsappLink = "https://wa.me/491234567890?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20professionelles%20Gespr%C3%A4ch";

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center space-y-8 animate-in fade-in duration-700">
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
          >
            <a 
              href={whatsappLink}
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
