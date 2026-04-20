import { useState } from "react";
import contactBg from "@/assets/contact-bg.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in your name and email first.");
      return;
    }
    setIsModalOpen(true);
  };

  const handleSendMessage = () => {
    if (!message.trim()) {
      toast.error("Please enter a message before submitting.");
      return;
    }

    // Simulate sending message to backend
    console.log("Sending message:", { name, email, message });
    
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setIsModalOpen(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 600);
  };

  return (
    <section ref={ref} id="contact" className="section-rounded relative h-auto min-h-[480px] sm:min-h-[520px] md:h-[88vh] flex items-center justify-center overflow-hidden">
      <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-[2] text-center max-w-[680px] w-full px-5 sm:px-10 py-12 sm:py-20">
        <h2 className="font-mono text-[clamp(32px,10vw,90px)] font-medium text-primary-foreground uppercase mb-3 sm:mb-4 tracking-[0.02em] whitespace-nowrap">
          Get In Touch
        </h2>
        <p className="text-xs sm:text-sm text-primary-foreground/60 mb-6 sm:mb-8 font-light leading-relaxed">
          Have a project in mind? We're here to bring your vision to life.
        </p>
        <div className="glass-form rounded-[28px] sm:rounded-[36px] p-6 sm:p-11 text-left">
          <span className="font-mono text-[9px] tracking-[0.2em] text-primary-foreground/40 uppercase block mb-3 sm:mb-4">
            Contact Us
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="glass-input w-full rounded-[12px] sm:rounded-[14px] py-3.5 sm:py-[18px] px-4 sm:px-5 text-xs sm:text-sm text-primary-foreground outline-none mb-3 sm:mb-4 placeholder:text-primary-foreground/30 transition-all duration-300 focus:border-primary-foreground/50 focus:bg-[rgba(255,255,255,0.18)]"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="glass-input w-full rounded-[12px] sm:rounded-[14px] py-3.5 sm:py-[18px] px-4 sm:px-5 text-xs sm:text-sm text-primary-foreground outline-none mb-4 sm:mb-6 placeholder:text-primary-foreground/30 transition-all duration-300 focus:border-primary-foreground/50 focus:bg-[rgba(255,255,255,0.18)]"
            placeholder="Email"
          />
          <button 
            onClick={handleOpenModal}
            className="mt-1 sm:mt-2 bg-primary-foreground/15 border-[1.5px] border-primary-foreground/30 rounded-full py-3 sm:py-4 px-7 sm:px-10 font-mono text-[10px] sm:text-xs text-primary-foreground tracking-[0.12em] cursor-pointer uppercase transition-all duration-300 hover:bg-primary-foreground/25 hover:border-primary-foreground/50 hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-form border-primary-foreground/20 bg-dark/40 backdrop-blur-xl sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-mono text-primary-foreground uppercase tracking-widest text-lg">
              Project Details
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/60 font-light text-sm">
              Tell us a bit more about what you need, {name || 'there'}.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="I am looking for..."
              className="glass-input min-h-[150px] w-full rounded-[14px] text-primary-foreground outline-none border-primary-foreground/20 bg-dark/20 placeholder:text-primary-foreground/30 focus-visible:ring-primary-foreground/50"
            />
          </div>
          <div className="mt-6 flex justify-end">
            <button 
              onClick={handleSendMessage}
              className="bg-primary-foreground text-dark rounded-full py-3 px-8 font-mono text-xs font-bold tracking-[0.12em] cursor-pointer uppercase transition-all duration-300 hover:bg-primary-foreground/90 hover:scale-105"
            >
              Submit
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
