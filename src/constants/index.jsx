import { socialMedias } from "@/components/Follow";

export const nav = [
  {
    name: "Work",
    links: [
      { name: "Amazon Clone", href: "/work/amazonclone" },
      { name: "Bazar e-commerce", href: "/work/bazar" },
      { name: "Blog 101", href: "/work/blog101" },
      {
        name: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/work",
      },
    ],
  },

  {
    name: "Connect",
    links: socialMedias,
  },
];
