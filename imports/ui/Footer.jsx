import React, { Component } from 'react';
import InlineCss from 'react-inline-css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        &copy; Clean Resume, 2016 - Icon credits: <a href="http://flaticon.com" target="_blank">flaticon.com</a>
      </footer>
    );
  }
};

// export const Document = ({ document }) => (
//   <InlineCss stylesheet={`
//       .Document {
//         font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
//       }
//       @media print {
//         .Document {
//           display: block;
//           border: 1px solid red;
//           padding: 20px;
//         }
//         .btn { display: none; }
//         hr { display: none; }
//         h3 {
//           font-size: 28px;
//           margin-top: 0px;
//           margin-bottom: 0px;
//         }
//         p {
//           margin-top: 10px;
//           margin-bottom: 0px;
//           font-size: 18px;
//         }
//       }
//   `}>
//     <ListGroupItem className="Document">
//       <hr />
//       <h3>Hello</h3>
//       <p>Moto</p>
//     </ListGroupItem>
//   </InlineCss>
// );
