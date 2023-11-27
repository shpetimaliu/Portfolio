import { socialMedias } from "@/components/Follow";

export const nav = [
  {
    name: "Work",
    links: [
      { name: "Netflix Clone", href: "/work/netflix" },
      { name: "Threads Clone", href: "/work/thread" },
      { name: "NotesApp", href: "/work/notesapp" },
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
