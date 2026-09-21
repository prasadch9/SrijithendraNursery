import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/site";
import "../styles/WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href={"https://wa.me/919381608126(Hello Sri Jithendra Nursery, I would like to know more about your plants.)"}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
