# Portfolio - Next.js

This portfolio is built using Next.js, a React-based framework, to showcase my skills and projects. It incorporates various technologies and libraries to enhance the user experience.

`This README is improved and some details added by ChatGPT, a language model created by OpenAI`

## Key Dependencies:

- **@emailjs/browser**: Simplifies email sending from the client side.
- **@fortawesome/fontawesome-free**: Provides a collection of scalable vector icons.
- **@hcaptcha/react-hcaptcha**: Integrates hCaptcha, a privacy-focused alternative to reCAPTCHA.
- **axios**: Facilitates HTTP requests for data fetching.
- **class-variance-authority**: A library for handling class variance and authority in your application.
- **clsx**: Enables conditional class names for React components.
- **framer-motion**: Adds animation capabilities to components.
- **gsap**: GreenSock Animation Platform for creating high-performance animations.
- **locomotive-scroll**: Implements smooth scrolling for a polished user experience.
- **next**: The core Next.js framework, version 14.0.3.
- **postcss-preset-env**: Provides modern CSS features using PostCSS.
- **react**: The core React library.
- **react-dom**: React's package for DOM rendering.
- **react-fast-marquee**: Enables fast and customizable marquee effects.
- **react-icons**: A comprehensive collection of React icons.
- **react-intersection-observer**: Monitors elements entering or exiting the viewport.
- **react-toastify**: Displays non-intrusive notifications to users.

## Some Features:

- **Responsive Design**: Ensures a seamless experience across various devices.
- **Interactive Animations**: Utilizes Framer Motion and GSAP for engaging UI animations.
- **Email Integration**: Allows users to contact me through the website using emailjs.
- **CAPTCHA Security**: Implements hCaptcha to enhance security and prevent spam.
- **Dynamic Data Fetching**: Uses Axios for fetching data dynamically.
- **Class Variance Handling**: Incorporates class variance authority for effective component management.

## Project Structure

```plaintext
src/
|-- components/
|   |-- Illustration.jsx
|   |-- icons/
|       |-- Design.jsx
|       |-- Keyboard.jsx
|       |-- KeyboardAnimation.jsx
|       |-- WhoIAm.jsx
|       |-- ZapIllustration.jsx
|   |-- ArtWorks.jsx
|   |-- Border.jsx
|   |-- Button.jsx
|   |-- ButtonsHero.jsx
|   |-- CodeBlock.jsx
|   |-- CodeEditor.jsx
|   |-- connectToStack.jsx
|   |-- ContactDetails.jsx
|   |-- ContactForm.jsx
|   |-- Container.jsx
|   |-- Exp.jsx
|   |-- Experience.jsx
|   |-- FadeIn.jsx
|   |-- Follow.jsx
|   |-- Footer.jsx
|   |-- FooterNav.jsx
|   |-- Grid.jsx
|   |-- Hero.jsx
|   |-- Intro.jsx
|   |-- List.jsx
|   |-- Logo.jsx
|   |-- MyLocation.jsx
|   |-- Quote.jsx
|   |-- RootLayout.jsx
|   |-- SectionIntro.jsx
|   |-- Skills.jsx
|   |-- StackTechnology.jsx
|   |-- TextInput.jsx
```

## Installation

Provide step-by-step instructions on how to set up the project locally.

```bash
# Clone the repository
git clone https://github.com/shpetimaliu/Portfolio.git


cd portfolio-master

# Install dependencies
npm install
```

## Usage

Explain how to use and run your project.

```bash
# Run the development server
npm run dev
```

Visit `http://localhost:3000` in your browser to access the project.

# ArtWorks.jsx

### Overview

This repository contains the source code for the `ArtWorks` component, a key element of a React-based web application. The component leverages the `framer-motion` library to add motion effects and utilizes the `react-icons` library to incorporate the "BsFillArrowRightCircleFill" icon. The styling is enhanced through the use of global styles defined in the "globals.css" file.

## Components and Libraries

### 1. `ArtWorks`

The `ArtWorks` component is designed to showcase the author's role as a Freelancer Web Developer and Product Creator. It features a responsive layout with dynamic typography and motion effects for a visually engaging user experience.

## Dependencies

- `framer-motion`: Used for adding smooth motion effects to the component.
- `react-icons`: Utilized to include the "BsFillArrowRightCircleFill" icon.

## Global Styles

The "globals.css" file contains styles that enhance the visual presentation of the `ArtWorks` component. It includes responsive design elements, such as font sizes and spacing.

## Usage

To integrate the `ArtWorks` component into your project, follow these steps:

1. Import the `ArtWorks` component into your project.
2. Place the `<ArtWorks />` tag within the desired section of your application.

```jsx
import React from "react";
import ArtWorks from "path-to-artworks-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <ArtWorks />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

# Border.jsx

### Overview

This repository contains the source code for the `Border` component, a versatile utility component designed to create decorative borders. The component is written in React and utilizes the `clsx` library for managing dynamic class names. It offers options for specifying the position, color scheme, and element type for flexible use in different parts of a web application.

## Component

### 1. `Border`

The `Border` component allows for the creation of decorative borders with various configurations. It supports options for specifying the position (`top` or `left`), inverting the color scheme, and customizing the HTML element type. The component is adaptable, providing a dynamic and visually appealing way to enhance the layout.

## Dependencies

- `clsx`: A utility for conditionally joining class names together.

## Usage

To integrate the `Border` component into your project, follow these steps:

1. Import the `Border` component into your project.
2. Use the `<Border />` tag with desired props within your components or layout.

```jsx
import React from "react";
import Border from "path-to-border-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Border position="top" invert />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Props

- `className`: Additional classes to be applied to the component.
- `position`: Specifies the position of the border (`top` or `left`).
- `invert`: Inverts the color scheme of the border.
- `as`: Specifies the HTML element type to be used for the border.

# Button.jsx

### Overview

This repository contains the source code for the `Button` component, a versatile and customizable button implemented in React. The component leverages the `clsx` library for managing dynamic class names and integrates with Next.js `Link` for navigation. It provides options for inverting color schemes, specifying href for navigation, and customizing the button's appearance.

## Component

### 1. `Button`

The `Button` component serves as a flexible button element for use in a React-based web application. It supports dynamic styling, color inversion, and Next.js navigation.

## Dependencies

- `clsx`: A utility for conditionally joining class names together.
- `Link` from Next.js: Used for client-side navigation.

## Usage

To integrate the `Button` component into your project, follow these steps:

1. Import the `Button` component into your project.
2. Use the `<Button />` tag with desired props within your components or layout.

```jsx
import React from "react";
import Button from "path-to-button-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Button invert href="/example">
        Click me
      </Button>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Props

- `invert`: Inverts the color scheme of the button.
- `href`: Specifies the destination URL for Next.js navigation.
- `className`: Additional classes to be applied to the button.
- `children`: The content of the button.

# ButtonsHero.jsx

### Overview

This repository contains the source code for the `ButtonsHero` component, a versatile button component implemented in React with dynamic styling capabilities. The component utilizes the `class-variance-authority` library for managing class variations based on specified variants and sizes. It also integrates with Next.js `Link` for client-side navigation.

## Component

### 1. `ButtonsHero`

The `ButtonsHero` component is designed to provide flexible and customizable buttons with dynamic styling. It supports variations in color (`variant`), size (`size`), and includes default variants. The component can be used both as a button and as a Next.js `Link` for navigation.

## Dependencies

- `class-variance-authority` (`cva`): A library for managing class variations based on specified variants.
- `Link` from Next.js: Used for client-side navigation.

## Usage

To integrate the `ButtonsHero` component into your project, follow these steps:

1. Import the `ButtonsHero` component and use the `buttonClasses` for dynamic class generation.
2. Apply the generated classes to the component.
3. Optionally, specify the `variant` and `size` props to customize the button's appearance.

```jsx
import React from "react";
import ButtonsHero, { buttonClasses } from "path-to-buttonshero-component";

function App() {
  const customClasses = buttonClasses({ variant: "primary", size: "medium" });

  return (
    <div>
      {/* Other components or content */}
      <ButtonsHero
        className={customClasses}
        variant="secondary"
        size="large"
        href="/example"
      >
        Click me
      </ButtonsHero>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Props

- `variant`: Specifies the color variant of the button (`primary` or `secondary`).
- `size`: Specifies the size of the button (`small`, `medium`, or `large`).
- `children`: The content of the button.
- `...props`: Additional props that can be applied to the underlying `button` or `Link` element.

# CodeBlock.jsx

### Overview

This repository contains the source code for the `CodeBlock` component, which renders a stylized code block using HTML and inline CSS styles. The component is designed to display a portion of HTML code related to a work experience section. It utilizes Next.js styling conventions and provides a clear visual representation of HTML tags and attributes.

## Component

### 1. `CodeBlock`

The `CodeBlock` component renders a stylized HTML code block. It uses the `pre` tag for maintaining whitespace and the `span` tag for individual elements within the code. The component is intended for use in a web application's work experience section to showcase HTML code.

## Usage

To integrate the `CodeBlock` component into your project, follow these steps:

1. Import the `CodeBlock` component into your project.
2. Use the `<CodeBlock />` tag within your components or layout.

```jsx
import React from "react";
import CodeBlock from "path-to-codeblock-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <CodeBlock />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

# CodeEditor.jsx

### Overview

This repository contains the source code for the `CodeEditor` component, a user interface element for displaying a code editor with syntax-highlighted HTML and related information. The component utilizes various libraries, such as Framer Motion for animations and Next.js for styling conventions.

## Component

### 1. `CodeEditor`

The `CodeEditor` component is a versatile code editor designed for displaying HTML code snippets. It incorporates motion animations for a dynamic user experience. The component features a tabbed interface, file list, and an interactive code block.

## Usage

To integrate the `CodeEditor` component into your project, follow these steps:

1. Import the `CodeEditor` component into your project.
2. Use the `<CodeEditor />` tag within your components or layout.

```jsx
import React from "react";
import CodeEditor from "path-to-codeeditor-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <CodeEditor />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- Framer Motion: [Link to Framer Motion](https://www.framer.com/motion/)

# ConnectToStack.jsx

## Overview

This repository contains the source code for the `ConnectToStack` component, a visually appealing section showcasing technologies and programming languages expertise. The component is designed to create a dynamic and engaging user interface with motion effects.

## Component

### 1. `ConnectToStack`

The `ConnectToStack` component is a visually appealing section that highlights technologies and programming languages expertise. It features an animated line connecting different elements, and an image of stars from GitHub for added aesthetics.

## Usage

To integrate the `ConnectToStack` component into your project, follow these steps:

1. Import the `ConnectToStack` component into your project.
2. Use the `<ConnectToStack />` tag within your components or layout.

```jsx
import React from "react";
import ConnectToStack from "path-to-connecttostack-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <ConnectToStack />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- Framer Motion: [Link to Framer Motion](https://www.framer.com/motion/)

# ContactDetails.jsx

### Overview

This repository contains the source code for the `ContactDetails` component, which provides information about the developer's location, email addresses, and social media connections. The component is designed with a clean and organized layout for easy readability.

## Component

### 1. `ContactDetails`

The `ContactDetails` component displays information about the developer's location, email addresses, and social media connections. It uses the `FadeIn` component for a smooth transition effect.

## Usage

To integrate the `ContactDetails` component into your project, follow these steps:

1. Import the `ContactDetails` component into your project.
2. Use the `<ContactDetails />` tag within your components or layout.

```jsx
import React from "react";
import ContactDetails from "path-to-contactdetails-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <ContactDetails />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- React: [Link to React](https://reactjs.org/)

# ContactForm.jsx

## Overview

This repository contains the source code for the `ContactForm` component, which provides a contact form for users to reach out. The component uses various libraries such as `emailjs`, `@hcaptcha/react-hcaptcha`, and `react-toastify` for form submission, captcha validation, and displaying success messages.

## Component

### 1. `ContactForm`

The `ContactForm` component renders a contact form that includes fields for the user's name, email, company, phone, and message. It utilizes the `emailjs` library to send the form data to a specified email service. Additionally, it incorporates the `@hcaptcha/react-hcaptcha` library for human verification through hCaptcha. Success messages are displayed using the `react-toastify` library.

## Usage

To integrate the `ContactForm` component into your project, follow these steps:

1. Import the `ContactForm` component into your project.
2. Use the `<ContactForm />` tag within your components or layout.

```jsx
import React from "react";
import ContactForm from "path-to-contactform-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <ContactForm />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- emailjs: [Link to emailjs](https://www.emailjs.com/)
- @hcaptcha/react-hcaptcha: [Link to hCaptcha](https://docs.hcaptcha.com/)
- react-toastify: [Link to react-toastify](https://fkhadra.github.io/react-toastify/)

# Container.jsx

### Overview

This repository contains the source code for the `Container` component, a flexible container that utilizes the `clsx` library for dynamic class management. The component is designed to wrap content within a responsive layout, applying appropriate styling for various screen sizes.

## Component

### 1. `Container`

The `Container` component is a higher-order component that accepts props for customization. It includes the following features:

- **Responsive Layout:** The container applies a maximum width of `7xl` and horizontal spacing for small to large screens, ensuring a responsive and centered layout.

- **Customization:** Users can provide additional classes (`className` prop) to further customize the container's styling.

- **Child Content:** The component accepts children elements to be rendered inside the container.

## Usage

To integrate the `Container` component into your project, follow these steps:

1. Import the `Container` component into your project.
2. Use the `<Container>` tag, providing any desired customizations and placing your content inside.

```jsx
import React from "react";
import Container from "path-to-container-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Container>{/* Your content goes here */}</Container>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- `clsx`: [Link to clsx](https://github.com/lukeed/clsx)

# Exp.jsx

### Overview

This documentation provides details about the `Exp` component, which is part of the project and serves the purpose of displaying work experience. The component utilizes the `Container` and `FadeIn` components to create a visually appealing and responsive layout.

## Component

### 1. `Exp`

The `Exp` component is responsible for showcasing work experience. It features the following:

- **Container Integration:** Utilizes the `Container` component for a responsive layout and easy customization.

- **FadeIn Animation:** Wraps content in the `FadeIn` component to add a subtle fadeIn effect.

- **Content:** Displays experience information, including company names, date ranges, positions, and job responsibilities.

## Usage

To use the `Exp` component, follow these steps:

1. Import the `Exp` component into your project.
2. Place the `<Exp>` tag in the desired location within your application.

```jsx
import React from "react";
import Exp from "path-to-exp-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Exp />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Customization

The `Exp` component is easily customizable:

- Adjust the `className` prop on the `Container` component to modify the overall styling.
- Customize the content within the `Exp` component to reflect your specific work experience.

# Experience.jsx

### Overview

This documentation provides details about the `Experience` component, which is part of the project and serves the purpose of showcasing professional experience. The component integrates with various sub-components, such as `Container`, `motion` for animations, `CodeEditor`, and `ConnectToStack`.

## Component

### 1. `Experience`

The `Experience` component is responsible for displaying professional experience on the webpage. It features the following:

- **Container Integration:** Utilizes the `Container` component for a responsive layout and easy customization.

- **Motion Animation:** Uses the `motion` component for animations, creating a visually engaging user experience.

- **Sub-Components:** Includes the `CodeEditor` and `ConnectToStack` components to present additional content.

## Usage

To use the `Experience` component, follow these steps:

1. Import the `Experience` component into your project.
2. Place the `<Experience>` tag in the desired location within your application.

```jsx
import React from "react";
import Experience from "path-to-experience-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Experience />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- `motion`: [Link to Framer Motion](https://www.framer.com/motion/)

## Customization

The `Experience` component is easily customizable:

- Adjust the `className` prop on the `Container` component to modify the overall styling.
- Customize the content within the `Experience` component, such as the text and animations, to reflect your specific needs.

# FadeIn.jsx

## Overview

This documentation provides details about the `FadeIn` and `FadeInStagger` components, which are part of the project. These components utilize the `framer-motion` library for smooth fade-in animations. The `FadeIn` component provides a single fading animation, while `FadeInStagger` is designed for staggered fading animations.

## Components

### 1. `FadeIn`

The `FadeIn` component is responsible for creating a fade-in animation for its child components. Key features include:

- **Reduced Motion:** Utilizes the `useReducedMotion` hook to adapt animations based on the user's motion preferences.
- **Context Integration:** Uses the `FadeInStraggerContext` context to determine whether it is part of a staggered animation group.
- **Variants and Transitions:** Implements motion variants for hidden and visible states with smooth transitions.

### 2. `FadeInStagger`

The `FadeInStagger` component is designed for staggered fade-in animations. Key features include:

- **Context Integration:** Uses the `FadeInStraggerContext` context to indicate that it is part of a staggered animation group.
- **Staggered Transition:** Utilizes the `staggerChildren` property in the `transition` prop for staggered animations.
- **Viewport Animation:** Implements viewport animation to trigger the animation when elements are in view.

## Usage

To use the `FadeIn` and `FadeInStagger` components, follow these steps:

1. Import the components into your project.
2. Wrap your content with the `<FadeIn>` or `<FadeInStagger>` tags to apply the fade-in animations.

```jsx
import React from "react";
import { FadeIn, FadeInStagger } from "path-to-fadein-components";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <FadeIn>
        <h1>Your Content Here</h1>
      </FadeIn>
      <FadeInStagger>
        <div>{/* Staggered children here */}</div>
      </FadeInStagger>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## Dependencies

- `framer-motion`: [Link to Framer Motion](https://www.framer.com/motion/)

## Configuration

Customization options are available through props for both `FadeIn` and `FadeInStagger` components. These may include adjusting durations, applying additional styles, or customizing animations.

### `FadeIn` Props

- `shouldReduceMotion`: Enables reduced motion based on the user's preferences.
- `isInStaggerGroup`: Specifies whether the component is part of a staggered animation group.

### `FadeInStagger` Props

- `faster`: Speeds up the staggered animation by reducing the delay between children.

# Follow.jsx

## Overview

This documentation provides details about the `Follow` component, which is part of the project. The `Follow` component is responsible for rendering a list of social media links with associated icons. Users can follow the provided links to the respective social media profiles.

## Component

### 1. `Follow`

The `Follow` component is designed to render a list of social media links. Key features include:

- **Social Media Data:** Utilizes the `socialMedias` array to define the social media platforms, including name, href (URL), and associated icons.
- **Link Generation:** Uses the `Link` component from Next.js to generate links for each social media platform.
- **Icon Rendering:** Renders icons for each social media platform using the provided React Icons.
- **Styling:** Applies conditional styling based on the `invert` prop to adjust colors for light and dark backgrounds.

## Usage

To use the `Follow` component, follow these steps:

1. Import the component and necessary dependencies into your project.
2. Utilize the `<Follow>` tag in your JSX, providing any additional styling or customization as needed.

```jsx
import React from "react";
import { Follow } from "path-to-follow-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Follow className="my-4" invert={true} />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Follow` Props

- `className`: Additional classes to be applied to the `ul` element.
- `invert`: Determines whether to use light or dark styling for the links. Defaults to `false`.

## `socialMedias` Array

The `socialMedias` array contains objects representing each social media platform. Each object includes the following properties:

- `name`: The name of the social media platform.
- `href`: The URL linking to the social media profile.
- `icon`: The associated React Icons component for the platform.

## Dependencies

- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)
- `react-icons`: [Link to React Icons](https://react-icons.github.io/react-icons/)
- `next/link`: [Link to Next.js Link](https://nextjs.org/docs/api-reference/next/link)

# Footer.jsx

## Overview

This documentation provides details about the `Footer` component, which is part of the project. The `Footer` component represents the website's footer and includes navigation links, a contact form, and branding information.

## Component

### 1. `Footer`

The `Footer` component is designed to represent the footer section of the website. Key features include:

- **Footer Navigation:** Utilizes the `FooterNav` component to display navigation links.
- **Contact Form:** Includes a `JustContact` component for users to submit their contact information.
- **Branding:** Displays the website logo and a brief description.

## Usage

To use the `Footer` component, follow these steps:

1. Import the component and necessary dependencies into your project.
2. Utilize the `<Footer>` tag in your JSX, providing any additional styling or customization as needed.

```jsx
import React from "react";
import { Footer } from "path-to-footer-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Footer />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Footer` Components

### 1. `JustContact`

The `JustContact` component represents a form that allows users to submit their contact information. Key features include:

- **Form Submission:** Uses the `emailjs` library to send form submissions to the specified service.
- **Input Field:** Provides a text input field for users to enter their email address or phone number.
- **Submit Button:** Includes a submit button with an arrow icon for form submission.

### 2. `FooterNav`

The `FooterNav` component represents the navigation links in the footer. This component can be customized to include the necessary links for your website.

## Dependencies

- `emailjs`: [Link to emailjs](https://www.npmjs.com/package/emailjs)
- `next/link`: [Link to Next.js Link](https://nextjs.org/docs/api-reference/next/link)

# FooterNav.jsx

## Overview

This documentation provides details about the `FooterNav` component, which is part of the project. The `FooterNav` component represents the navigation links displayed in the footer of the website.

## Component

### 1. `FooterNav`

The `FooterNav` component is designed to display navigation links in a grid layout. It uses the `nav` constant to dynamically generate links based on the provided data. The component includes:

- **Nested Navigation:** Utilizes nested lists to organize links under specific categories.
- **Styling:** Applies styling to enhance the visual presentation, including hover effects.

## Usage

To use the `FooterNav` component, follow these steps:

1. Import the component and necessary dependencies into your project.
2. Utilize the `<FooterNav>` tag in your JSX, providing any additional styling or customization as needed.

```jsx
import React from "react";
import { FooterNav } from "path-to-footer-nav-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <FooterNav />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `FooterNav` Component

### 1. `nav` Constant

The `nav` constant is an array containing navigation data. It is structured as an array of objects, where each object represents a category of links. Each category object has a `name` property (category name) and a `links` property (array of links under that category).

### 2. Rendering Navigation

The `FooterNav` component dynamically renders the navigation based on the `nav` constant. It maps through each category and its associated links, creating a structured grid of navigation items.

## Dependencies

- `next/link`: [Link to Next.js Link](https://nextjs.org/docs/api-reference/next/link)

# Grid.jsx

## Overview

This documentation provides details about the `Grid` component, which is part of the project. The `Grid` component is responsible for rendering an interactive grid pattern with animated and static blocks.

## Component

### 1. `Grid`

The `Grid` component is designed to display a grid pattern with animated and static blocks. It uses the `Blocku` component to create individual blocks within the grid. The component includes:

- **Interactive Blocks:** Allows for the addition of animated blocks that appear on interaction.
- **Styling:** Applies styling to enhance the visual presentation.
- **Pattern:** Utilizes a pattern fill to create the grid background.

## Usage

To use the `Grid` component, follow these steps:

1. Import the component and necessary dependencies into your project.
2. Utilize the `<Grid>` tag in your JSX, providing any additional styling or customization as needed.

```jsx
import React from "react";
import { Grid } from "path-to-grid-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Grid />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Grid` Component

### 1. `Blocku` Component

The `Blocku` component represents an individual block within the grid. It uses the `motion.path` component from `framer-motion` for animated transitions. The `Blocku` component is utilized within the `Grid` component.

### 2. Interactive Blocks

The `Grid` component supports the addition of interactive blocks that appear and animate on interaction. These blocks are stored in the `hoverBlocks` state, and their appearance is triggered by user interaction.

### 3. Pattern Fill

The `Grid` component uses a pattern fill to create the grid background. The pattern is defined in the `<defs>` section of the SVG, providing a visually appealing background for the grid.

## Dependencies

- `framer-motion`: [Link to Framer Motion](https://www.framer.com/motion/)
- `react`: [Link to React](https://reactjs.org/)

# Hero.jsx

## Overview

This documentation provides details about the `Hero` component, which is part of the project. The `Hero` component is responsible for rendering a hero section with illustrations and information about the developer's skills and expertise.

## Component

### 1. `Hero`

The `Hero` component is designed to create an engaging hero section with the following key features:

- **Illustrations:** Displays illustrations representing various aspects of the developer's expertise.
- **Text Content:** Provides information about the developer's skills, including web development, cybersecurity, and design.
- **Interactive Elements:** Includes interactive elements that enhance user engagement, such as a command prompt for additional information.

## Usage

To use the `Hero` component, follow these steps:

1. Import the component and necessary dependencies into your project.
2. Utilize the `<Hero>` tag in your JSX, providing any additional styling or customization as needed.

```jsx
import React from "react";
import { Hero } from "path-to-hero-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Hero />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Hero` Component

### 1. Illustrations

The `Hero` component includes illustrations representing key areas of expertise, such as web development, cybersecurity, and design. These illustrations add a visual appeal to the hero section.

### 2. Text Content

The text content in the `Hero` component provides concise and informative details about the developer's skills and expertise. It covers areas such as web development, cybersecurity practices, and design principles.

### 3. Interactive Elements

The hero section incorporates interactive elements to enhance user engagement. For example, the command prompt encourages users to click for additional information, adding an interactive and playful aspect to the component.

# Intro,jsx

## Overview

This documentation provides details about the `Intro` component, which is part of the project. The `Intro` component is responsible for rendering an introductory section with a title, eyebrow text, and optional content.

## Component

### 1. `Intro`

The `Intro` component creates an introductory section with the following key features:

- **Title:** Displays a title with customizable eyebrow text and content.
- **Styling Options:** Allows for customization of the component's appearance, such as centering the text.
- **Fade-In Animation:** Utilizes the `FadeIn` component for a smooth fade-in animation.

## Usage

To use the `Intro` component, follow these steps:

1. Import the component and necessary dependencies into your project.
2. Utilize the `<Intro>` tag in your JSX, providing the necessary props and any additional styling or customization as needed.

```jsx
import React from "react";
import { Intro } from "path-to-intro-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Intro eyebrow="Eyebrow Text" title="Main Title">
        {/* Optional content */}
      </Intro>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Intro` Component

### 1. Title

The `Intro` component displays a title with customizable eyebrow text, allowing developers to create visually appealing introductory sections.

### 2. Styling Options

The component provides styling options to customize its appearance. Developers can choose to center the text within the container by setting the `centered` prop to `true`.

### 3. Fade-In Animation

The `Intro` component utilizes the `FadeIn` component for a smooth fade-in animation. This adds a visually pleasing effect when the component is rendered.

# List.jsx

## Overview

This documentation provides details about the `List` component and its associated `SkillsItem` subcomponent. The `List` component is responsible for rendering an unordered list with fade-in staggered animation, and the `SkillsItem` subcomponent represents an individual item within the list, often used for displaying skills.

## Component

### 1. `List`

The `List` component creates an unordered list with the following key features:

- **Fade-In Staggered Animation:** Utilizes the `FadeInStagger` component to apply a staggered fade-in effect to the list items.
- **Styling Options:** Allows for customization of the list's appearance, such as adding additional classes.

### 2. `SkillsItem`

The `SkillsItem` subcomponent represents an individual item within the list and has the following features:

- **Fade-In Animation:** Utilizes the `FadeIn` component for a smooth fade-in animation.
- **Border and Styling:** Applies a border with additional styling for the first item in the list.

## Usage

To use the `List` component and `SkillsItem` subcomponent, follow these steps:

1. Import the components and necessary dependencies into your project.
2. Utilize the `<List>` tag to create an unordered list with fade-in staggered animation.
3. Inside the `<List>` component, use the `<SkillsItem>` tag for each list item, providing the necessary props and any additional styling or content as needed.

```jsx
import React from "react";
import { List, SkillsItem } from "path-to-list-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <List className="custom-list-styling">
        <SkillsItem title="Skill Title 1">Skill description 1</SkillsItem>
        <SkillsItem title="Skill Title 2">Skill description 2</SkillsItem>
        {/* Add more SkillsItem components as needed */}
      </List>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `List` Component

### 1. Fade-In Staggered Animation

The `List` component utilizes the `FadeInStagger` component to apply a staggered fade-in effect to the list items. This adds a visually pleasing animation when the list is rendered.

### 2. Styling Options

The component provides styling options to customize its appearance. Developers can add custom classes to the `List` component for additional styling.

## `SkillsItem` Subcomponent

### 1. Fade-In Animation

Each `SkillsItem` component uses the `FadeIn` component for a smooth fade-in animation. This enhances the visual presentation of each individual list item.

### 2. Border and Styling

The `SkillsItem` subcomponent applies a border with additional styling to the first item in the list. This distinguishes the first item from the rest of the list.

## Dependencies

The `List` component relies on the following dependencies:

- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)

# Logo.jsx

## Overview

This documentation provides details about the `Logo` component. The `Logo` component is responsible for rendering a logo with optional inversion and hover effects, which can serve as a clickable link.

## Component

### 1. `Logo`

The `Logo` component creates a logo with the following key features:

- **Color Inversion:** Allows for color inversion, making the logo text white on a dark background when `invert` is set to `true`.
- **Hover Effects:** Applies hover effects to the logo text for improved interactivity.
- **Clickable Link:** If provided with an `href` prop, the logo becomes a clickable link using the Next.js `Link` component.
- **Custom Styling:** Provides flexibility for custom styling by accepting additional classes through the `className` prop.

## Usage

To use the `Logo` component, follow these steps:

1. Import the `Logo` component and necessary dependencies into your project.
2. Use the `<Logo>` tag to create a logo with optional color inversion, hover effects, and the ability to function as a clickable link.

```jsx
import React from "react";
import { Logo } from "path-to-logo-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Logo invert href="/home" className="custom-logo-styling">
        My Logo
      </Logo>
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Logo` Component

### 1. Color Inversion

The `Logo` component supports color inversion. When the `invert` prop is set to `true`, the text color becomes white, suitable for a dark background.

### 2. Hover Effects

Hover effects are applied to the logo text, providing a smooth transition when users hover over the logo. This enhances the interactive experience.

### 3. Clickable Link

If an `href` prop is provided, the `Logo` component transforms into a clickable link using the Next.js `Link` component. This allows for easy navigation when the logo is clicked.

### 4. Custom Styling

Developers can customize the appearance of the `Logo` component by adding additional classes through the `className` prop. This feature provides flexibility for styling adjustments.

## Dependencies

The `Logo` component relies on the following dependencies:

- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)
- `next/link`: [Link to Next.js Link](https://nextjs.org/docs/api-reference/next/link)
- `react`: [Link to React](https://reactjs.org/)

# Location.jsx

## Overview

This documentation provides details about the `Location` and `MyLocation` components. The `Location` component is designed for rendering address information with optional color inversion, while the `MyLocation` component is a specific implementation of the `Location` component tailored for a single location.

## Components

### 1. `Location`

The `Location` component creates an address block with the following key features:

- **Custom Styling:** Supports optional color inversion for the entire address block and specific styling for the location name and details.

### 2. `MyLocation`

The `MyLocation` component is a specific implementation of the `Location` component, rendering a single location with a predefined structure. It inherits the customization options from the `Location` component.

## Usage

To use the `Location` and `MyLocation` components, follow these steps:

1. Import the `Location` and `MyLocation` components and necessary dependencies into your project.
2. Use the `<Location>` or `<MyLocation>` tags to create address blocks with optional color inversion and custom styling.

```jsx
import React from "react";
import { Location, MyLocation } from "path-to-location-components";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Location name="Kosove" invert>
        Mitrovice,
        <br />
        40000
      </Location>
      {/* More components or content */}
      <MyLocation invert className="custom-location-styling" />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Location` Component

### 1. Custom Styling

The `Location` component allows for custom styling, including optional color inversion for the entire address block and specific styling for the location name and details.

## `MyLocation` Component

### 1. Custom Styling

The `MyLocation` component inherits the custom styling options from the `Location` component, providing flexibility for additional styling adjustments.

## Dependencies

The `Location` and `MyLocation` components rely on the following dependency:

- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)

# Quote.jsx

## Overview

This documentation provides details about the `Quote` component. The `Quote` component is designed to fetch and display a random quote related to technology. It utilizes the Quotable API to retrieve quotes.

## Component

### 1. `Quote`

The `Quote` component creates a section with a random quote about technology. It includes the following key features:

- **Fetching Data:** Utilizes the Quotable API to fetch a random quote related to technology.
- **Loading State:** Displays a loading message while the quote is being fetched.
- **Styling:** Applies responsive and visually appealing styling to the quote section.

## Usage

To use the `Quote` component, follow these steps:

1. Import the `Quote` component and necessary dependencies into your project.
2. Use the `<Quote>` tag to render the component.

```jsx
import React from "react";
import Quote from "path-to-quote-component";

function App() {
  return (
    <div>
      {/* Other components or content */}
      <Quote />
      {/* More components or content */}
    </div>
  );
}

export default App;
```

## `Quote` Component

### 1. Fetching Data

The `Quote` component uses the `axios` library to fetch a random quote related to technology from the Quotable API.

### 2. Loading State

While the quote is being fetched, the component displays a loading message to provide feedback to the user.

### 3. Styling

The `Quote` component applies responsive and visually appealing styling to create an engaging quote section.

## Dependencies

The `Quote` component relies on the following dependencies:

- `axios`: [Link to axios](https://www.npmjs.com/package/axios)
- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)

# RootLayout.jsx

## Overview

This documentation provides details about the `RootLayout` component. The `RootLayout` component serves as the main layout for the application, providing a navigation header, main content area, and a footer. It uses motion animations for a smooth transition between different views.

## Component Structure

The `RootLayout` component consists of the following subcomponents:

1. **`Header` Component:** Represents the navigation header containing the application logo, navigation links, and a toggle button for the mobile menu.

2. **`Navigation` Component:** Displays the main navigation links in a two-row grid layout.

3. **`MyLocation` Component:** Displays the user's location and contact information.

4. **`Follow` Component:** Displays social media links for users to connect with the developer.

5. **`Footer` Component:** Represents the footer of the application.

## Usage

To use the `RootLayout` component, follow these steps:

1. Import the `RootLayout` component and necessary dependencies into your project.
2. Use the `<RootLayout>` tag to wrap your main content and provide a consistent layout.

```jsx
import React from "react";
import RootLayout from "path-to-root-layout-component";

function App() {
  return <RootLayout>{/* Your main content goes here */}</RootLayout>;
}

export default App;
```

## `RootLayout` Component

### 1. Mobile Menu

The mobile menu is triggered by the menu button in the header. It animates smoothly using the Framer Motion library.

### 2. Navigation

The navigation section displays main navigation links in a two-row grid layout, providing a clean and responsive design.

### 3. MyLocation and Follow Components

The `MyLocation` component displays the user's location and contact information, while the `Follow` component displays social media links for users to connect with the developer.

### 4. Footer

The `Footer` component represents the footer of the application, providing additional information about the developer and links to different sections.

### 5. Motion Config

The `MotionConfig` component from Framer Motion is used to configure motion transitions. It enables smooth transitions when components are added or removed.

### 6. `usePathname` Hook

The `usePathname` hook from Next.js is used to track changes in the pathname, ensuring that the `RootLayout` component re-renders when the route changes.

## Dependencies

The `RootLayout` component relies on the following dependencies:

- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)
- `framer-motion`: [Link to framer-motion](https://www.npmjs.com/package/framer-motion)

# SectionIntro.jsx

## Overview

This documentation provides details about the `SectionIntro` component. The `SectionIntro` component is designed to create an introductory section with an eyebrow, title, and optional additional content. It provides options for customization, including the ability to invert colors, adjust text size, and apply various styles.

## Component Structure

The `SectionIntro` component consists of the following key elements:

1. **Container Component:** A wrapper component that provides layout and spacing for the content.

2. **FadeIn Component:** A component that applies a fade-in animation to the content, creating a smooth transition effect.

## Usage

To use the `SectionIntro` component, follow these steps:

1. Import the `SectionIntro` component and any required dependencies into your project.

2. Use the `<SectionIntro>` tag to create an introductory section, providing values for the `eyebrow`, `title`, and `children` props.

```jsx
import React from "react";
import SectionIntro from "path-to-section-intro-component";

function MySection() {
  return (
    <SectionIntro eyebrow="Eyebrow Text" title="Section Title">
      {/* Additional content goes here */}
    </SectionIntro>
  );
}

export default MySection;
```

## `SectionIntro` Component

### 1. Props

- **`eyebrow` (string, optional):** Eyebrow text for the introductory section.

- **`title` (string):** Main title for the introductory section.

- **`children` (ReactNode, optional):** Additional content to be displayed below the title.

- **`smaller` (boolean, optional, default: `false`):** If `true`, reduces the font size of the title.

- **`invert` (boolean, optional, default: `false`):** If `true`, inverts the text color to white and adjusts the background color accordingly.

- **`...props` (object):** Additional props to be passed to the `Container` component.

### 2. Container Component

The `Container` component is used to wrap the content of the `SectionIntro` component. It provides a consistent layout and spacing.

### 3. FadeIn Component

The `FadeIn` component applies a fade-in animation to the content, creating a smooth transition effect when the component is rendered.

## Examples

### Example 1: Basic Usage

```jsx
<SectionIntro eyebrow="Eyebrow Text" title="Section Title">
  {/* Additional content goes here */}
</SectionIntro>
```

### Example 2: Inverted Colors and Smaller Title

```jsx
<SectionIntro eyebrow="Eyebrow Text" title="Section Title" invert smaller>
  {/* Additional content goes here */}
</SectionIntro>
```

### Example 3: Custom Styling

```jsx
<SectionIntro
  eyebrow="Custom Eyebrow"
  title="Custom Title"
  className="custom-style"
>
  {/* Additional content goes here */}
</SectionIntro>
```

## Dependencies

The `SectionIntro` component relies on the following dependencies:

- `clsx`: [Link to clsx](https://www.npmjs.com/package/clsx)

# Skills.jsx

## Overview

This documentation provides details about the `Skills` component. The `Skills` component is designed to showcase skills and digital innovation. It includes a title, introductory section, and a `Hero` component for a visually appealing presentation of skills.

## Component Structure

The `Skills` component consists of the following key elements:

1. **SectionIntro Component:** An introductory section that includes an eyebrow, title, and custom styling.

2. **Container Component:** A wrapper component that provides layout and spacing for the content.

3. **Hero Component:** A visual component for showcasing skills.

## Usage

To use the `Skills` component, follow these steps:

1. Import the `Skills` component and any required dependencies into your project.

2. Use the `<Skills>` tag to showcase skills.

```jsx
import React from "react";
import Skills from "path-to-skills-component";

function MySkillsPage() {
  return <Skills />;
}

export default MySkillsPage;
```

## `Skills` Component

### 1. SectionIntro

The `SectionIntro` component is used to create an introductory section with an eyebrow, title, and custom styling.

#### Props

- **`eyebrow` (string):** Eyebrow text for the introductory section.

- **`title` (string):** Main title for the introductory section.

- **`className` (string, optional):** Additional styling classes for customization.

#### Example

```jsx
<SectionIntro
  eyebrow="Skills"
  title="Driving Digital Innovation:"
  className="mt-24 sm:mt-32 lg:mt-40"
/>
```

### 2. Container

The `Container` component is a wrapper that provides layout and spacing for the content.

#### Props

- **`className` (string, optional):** Additional styling classes for customization.

#### Example

```jsx
<Container className="mt-16">{/* Content goes here */}</Container>
```

### 3. Hero

The `Hero` component is used to showcase skills in a visually appealing manner.

#### Example

```jsx
<Hero />
```

## Examples

### Example 1: Basic Usage

```jsx
<Skills />
```

# StackTechnology.jsx

## Overview

This documentation provides details about the `StackTechnology` component. The `StackTechnology` component is designed to display a collection of technology stacks used in front-end development, back-end development, web building, and design. It includes visual representations of each technology stack.

## Component Structure

The `StackTechnology` component consists of the following key elements:

1. **Container Component:** A wrapper component that provides layout and spacing for the content.

2. **FadeIn Component:** A component that adds a fade-in effect to the content.

3. **StarsIllustration Component:** An illustration component representing stars in the background.

4. **Image Component:** A component for displaying images, including the technology logos.

## Usage

To use the `StackTechnology` component, follow these steps:

1. Import the `StackTechnology` component and any required dependencies into your project.

2. Use the `<StackTechnology>` tag to showcase technology stacks.

```jsx
import React from "react";
import StackTechnology from "path-to-stack-technology-component";

function MyTechStackPage() {
  return <StackTechnology />;
}

export default MyTechStackPage;
```

## `StackTechnology` Component

### 1. Container

The `Container` component is a wrapper that provides layout and spacing for the content.

#### Example

```jsx
<Container>{/* Content goes here */}</Container>
```

### 2. FadeIn

The `FadeIn` component adds a fade-in effect to the content.

#### Example

```jsx
<FadeIn>{/* Content goes here */}</FadeIn>
```

### 3. StarsIllustration

The `StarsIllustration` component represents stars in the background.

#### Example

```jsx
<StarsIllustration />
```

### 4. Image

The `Image` component is used to display images, including the logos of various technology stacks.

#### Example

```jsx
<Image src={logo} alt={TechStack} unoptimized />
```

## Examples

### Example 1: Basic Usage

```jsx
<StackTechnology />
```

# TextInput.jsx

## Overview

This documentation provides details about the `TextInput` component. The `TextInput` component is a reusable input field component with a label that animates and transforms based on user interaction.

## Component Structure

The `TextInput` component consists of the following key elements:

1. **useId Hook:** A hook from the `react` library used to generate a unique ID for the input element.

2. **Input Element:** The main input field where users can type their input.

3. **Label Element:** A label associated with the input field that animates and transforms based on user interaction.

## Usage

To use the `TextInput` component, follow these steps:

1. Import the `TextInput` component and any required dependencies into your project.

2. Use the `<TextInput>` tag to create an input field.

```jsx
import React from "react";
import TextInput from "path-to-text-input-component";

function MyForm() {
  return <TextInput label="Username" />;
}

export default MyForm;
```

## `TextInput` Component

### 1. Input Element

The `input` element is the main input field where users can type their input. It includes various styles for appearance and transitions.

#### Example

```jsx
<input
  type="text"
  id={id}
  {...props}
  placeholder=" "
  className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
/>
```

### 2. Label Element

The `label` element is associated with the input field and animates/transforms based on user interaction.

#### Example

```jsx
<label
  htmlFor={id}
  className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
>
  {label}
</label>
```

## Examples

### Example 1: Basic Usage

```jsx
<TextInput label="Username" />
```

### Example 2: Custom Styling

```jsx
<TextInput label="Email" className="my-custom-input" />
```

- **@emailjs/browser**: Simplifies email sending from the client side.
- **@fortawesome/fontawesome-free**: Provides a collection of scalable vector icons.
- **@hcaptcha/react-hcaptcha**: Integrates hCaptcha, a privacy-focused alternative to reCAPTCHA.
- **axios**: Facilitates HTTP requests for data fetching.
- **class-variance-authority**: A library for handling class variance and authority in your application.
- **clsx**: Enables conditional class names for React components.
- **framer-motion**: Adds animation capabilities to components.
- **gsap**: GreenSock Animation Platform for creating high-performance animations.
- **locomotive-scroll**: Implements smooth scrolling for a polished user experience.
- **next**: The core Next.js framework, version 14.0.3.
- **postcss-preset-env**: Provides modern CSS features using PostCSS.
- **react**: The core React library.
- **react-dom**: React's package for DOM rendering.
- **react-fast-marquee**: Enables fast and customizable marquee effects.
- **react-icons**: A comprehensive collection of React icons.
- **react-intersection-observer**: Monitors elements entering or exiting the viewport.
- **react-toastify**: Displays non-intrusive notifications to users.

## Contribution Guidelines:

This project is open for contributions. If you would like to contribute, please follow these guidelines:

1. Fork the project.
2. Create a new branch for your contribution.
3. Make changes and commit them.
4. Push to the branch.
5. Create a pull request.

## License:

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

**Note:** This project is not allowed for commercial use or sale. Feel free to contribute and use it for personal and non-commercial purposes.
