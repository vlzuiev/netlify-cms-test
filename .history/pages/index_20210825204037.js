import { Component } from 'react';

// import Link from 'next/link';
import content from '../content/home.md';

export default class Home extends Component {
  render() {
    const { attributes, html } = content;
    const { title, cats } = attributes;
    console.log('consolefuckinglog', attributes);
    return (
      <>
        <h1>{attributes.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <style jsx>{`
          h1,
          div {
            text-align: center;
          }
        `}</style>
      </>
    );
  }
}

// import Head from "next/head"
// import { Component } from 'react'
// import { attributes, react as HomeContent } from '../content/home.md';

// export default class Home extends Component {
//   render() {
//     let { title, cats } = attributes;
//     return (
//       <>
//         <Head>
//           <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
//         </Head>
//         <article>
//           <h1>{title}</h1>
//           <HomeContent />
//           <ul>
//             {cats.map((cat, k) => (
//               <li key={k}>
//                 <h2>{cat.name}</h2>
//                 <p>{cat.description}</p>
//               </li>
//             ))}
//           </ul>
//         </article>
//       </>
//     )
//   }
// }
