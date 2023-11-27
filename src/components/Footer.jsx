import Container from "./Container";
import { FadeIn } from "./FadeIn";
import FooterNav from "./FooterNav";

const JustContact = () => {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-medium tracking-wider text-neutral-700">
        Just let an email
      </h2>
      <p className="mt-4 text-sm text-neutral-700">loremipsum</p>
    </form>
  );
};

function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNav />
        </div>
      </FadeIn>
    </Container>
  );
}

export default Footer;
