import Link from "next/link";
import Border from "./Border";
import { FadeIn } from "./FadeIn";
import Follow from "./Follow";
import MyLocation from "./MyLocation";

function ContactDeatils() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-bold text-neutral-950">
        My Location
      </h2>
      <MyLocation />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-bold text-neutral-950">
          Email Us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ["Support", "info@shputzz.dev"],
            ["Shpetim Aliu", "shpetim@shputzz.dev"],
          ].map(([label, email]) => (
            <div key={email}>
              <dl className="font-medium text-neutral-950">{label}</dl>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-bold text-neutral-950">
          Connect with me
        </h2>
        <Follow className="mt-6" />
      </Border>
    </FadeIn>
  );
}

export default ContactDeatils;
