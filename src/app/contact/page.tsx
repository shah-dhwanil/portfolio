import { getContact } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  const contact = getContact();

  return (
    <>
      <header className="mb-[30px]">
        <h2 className="text-[24px] md:text-[32px] font-medium text-foreground capitalize pb-[7px] relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-secondary after:rounded-[3px] md:after:w-[40px] md:after:h-[5px]">
          Contact
        </h2>
      </header>

      <ContactForm contact={contact} />
    </>
  );
}
