This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Adding Bulma
1. Add dependencies:
```bash
npm install bulma -s
npm install sass -s
npm install node-sass@4.14.1 -s
```
2. Create file scss/styles.scss
3. Add to _app.js import:
```javascript
import '../scss/styles.scss'
```

### Adding Font Awesome
1. Add dependencies:
```bash
npm i --save @fortawesome/fontawesome-svg-core \
             @fortawesome/free-solid-svg-icons \
             @fortawesome/free-brands-svg-icons \
             @fortawesome/react-fontawesome
```
2. Create your component:
```javascript
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MyComponent(): ReactElement {
  return <FontAwesomeIcon icon={faCoffee} />
}
```

### Stack
* NextJS
* Firebase
* Bulma
* Font Awesome Icons