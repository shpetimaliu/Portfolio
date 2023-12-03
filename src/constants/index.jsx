import { socialMedias } from "@/components/Follow";

export const nav = [
  {
    name: "Work",
    links: [
      { name: "TheUnnix", href: "https://theunnix.com" },
      { name: "London Lash Pro", href: "https://londonlashpro-ks.com" },
      { name: "Rinesa Academy", href: "https://rinesalashes.academy" },
      {
        name: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/works",
      },
    ],
  },

  {
    name: "Connect",
    links: socialMedias,
  },
];
