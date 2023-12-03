import ContactDeatils from "@/components/ContactDeatils";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Intro from "@/components/Intro";

function ContactPage() {
  return (
    <>
      <Intro eyebrow="Contact Me" title="Let's work together"></Intro>
      <Container className="mt-24 md:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDeatils />
          <ContactForm />
        </div>
      </Container>
    </>
  );
}

export default ContactPage;
