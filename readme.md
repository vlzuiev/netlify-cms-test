# Netlifycms with nextjs

[netlifycms](https://www.netlifycms.org/) with [next.js](https://nextjs.org/) proof of concept

## Quick start

### Developer Mode

#### Starting The App Locally

The app can be started locally using following commands:

1. Install all npm dependencies - In the project's root directory run `npm i`
2. Run `npm run dev`. This will
   - Start the app

The client lives at [`localhost:3000/`](http://localhost:3000/)
and cms at [`http://localhost:3000/admin/index.htm`](http://localhost:3000/admin/index.htm).

# How it works

Sites take their content from markdown files in `/content`. Two of pages (`home` and `about`) are referencing directly their respective markdown files.

Blog component loads all posts (during build!) and lists them out [How to load multiple md files](https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f)

Posts are separate static sites thanks to dynamically created export map. I took inspiration on how to do it from
[here](https://medium.com/@joranquinten/for-my-own-website-i-used-next-js-725678e65b09)
