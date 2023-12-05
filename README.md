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
