import { socialMedias } from "@/components/Follow";

export const nav = [
  {
    name: "Work",
    links: [
      { name: "TheUnnix", href: "/works/theunnix" },
      { name: "London Lash Pro", href: "/works/londonlashpro" },
      { name: "Arbanika GMBH", href: "/works/arbanika" },
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
