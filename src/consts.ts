import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Yuri's Portfolio",
  DESCRIPTION: "Welcome to a small part of my little world",
  AUTHOR: "Yuri Fu",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "My work experience",
}

// Blog Page
// export const BLOG: Page = {
//   TITLE: "Blog",
//   DESCRIPTION: "Learn more about the process of my work",
// }

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email Me",
    ICON: "email", 
    TEXT: "yurifuofficial@gmail.com",
    HREF: "mailto:yurifuofficial@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "https://github.com/YuriFuuu",
    HREF: "https://github.com/YuriFuuu"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "https://www.linkedin.com/in/yu-fu-314371296/",
    HREF: "https://www.linkedin.com/in/yu-fu-314371296/",
  },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

