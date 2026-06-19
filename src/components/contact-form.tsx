"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import type { Contact } from "@/types";

interface ContactFormProps {
  contact: Contact;
}

export function ContactForm({ contact }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isValid = fullname.trim() && email.trim() && message.trim();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");

    const capitalizedName =
      fullname.charAt(0).toUpperCase() + fullname.slice(1);

    const currentTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    }).format(new Date());

    try {
      // Dynamically initialize EmailJS
      const emailjs = await import("@emailjs/browser");
      emailjs.default.init(contact.emailjsPublicKey);

      const response = await emailjs.default.send(
        contact.emailjsServiceId,
        contact.emailjsTemplateId,
        {
          name: capitalizedName,
          email: email,
          time: currentTime,
          message: message,
        },
        contact.emailjsPublicKey
      );

      if (response.status === 200) {
        setStatus("success");
        setFullname("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="mb-[10px]">
      <h3 className="text-[18px] md:text-[24px] font-medium text-foreground mb-5">
        Contact Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="Full name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
            className="bg-card text-foreground border-border rounded-[14px] px-5 py-[13px] h-auto text-[14px] md:text-[15px] placeholder:text-muted-foreground focus:border-secondary"
          />
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-card text-foreground border-border rounded-[14px] px-5 py-[13px] h-auto text-[14px] md:text-[15px] placeholder:text-muted-foreground focus:border-secondary"
          />
        </div>
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="bg-card text-foreground border-border rounded-[14px] px-5 py-[13px] min-h-[100px] max-h-[200px] text-[14px] md:text-[15px] placeholder:text-muted-foreground focus:border-secondary"
        />

        <Button
          type="submit"
          disabled={!isValid || status === "sending"}
          className="w-full md:w-auto md:ml-auto flex items-center gap-[10px] bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground rounded-[14px] px-5 py-[13px] h-auto text-[14px] md:text-[16px] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-primary-foreground transition-colors"
        >
          <Send className="h-4 w-4 md:h-[18px] md:w-[18px]" />
          <span>
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message Sent!"
              : status === "error"
              ? "Failed to send"
              : "Send Message"}
          </span>
        </Button>
      </form>
    </section>
  );
}
