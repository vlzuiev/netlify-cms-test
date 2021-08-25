import { Component } from 'react';
import Head from 'next/head';
import { attributes } from '../content/home.md';

export default class Home extends Component {
  render() {
    const { title, cats } = attributes;

    console.log(attributes);

    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
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
// <article>
//   <h1>{title}</h1>
//   <HomeContent />
//   <ul>
//     {cats.map((cat, k) => (
//       <li key={k}>
//         <h2>{cat.name}</h2>
//         <p>{cat.description}</p>
//       </li>
//     ))}
//   </ul>
// </article>
//       </>
//     )
//   }
// }
