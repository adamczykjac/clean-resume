import ReactDOMServer from 'react-dom/server';
import wkhtmltopdf from 'wkhtmltopdf';
import fs from 'fs';
import path from 'path';

let pdfModule;

const getBase64String = (path) => {
  try {
    const file = fs.readFileSync(path);
    return new Buffer(file).toString('base64');
  } catch (exception) {
    console.log(exception);
    pdfModule.reject(exception);
  }
};

const generatePDF = (html, fileName) => {
  try {
    wkhtmltopdf(html, {
      pageSize: 'letter'
    }, (error, stream) => {
      if (error) {
        pdfModule.reject(error);
      } else {
        const outputPDF = fs.createWriteStream(fileName);
        stream.pipe(outputPDF);
        outputPDF.on('finish', function() {
          pdfModule.resolve({ fileName, base64: getBase64String(outputPDF.path) });
          fs.unlink(outputPDF.path);
        });
      }
    });
  } catch (exception) {
    pdfModule.reject(exception);
  }
};

const getComponentAsHTML = (component) => {
  try {
    return ReactDOMServer.renderToStaticMarkup(component);
  } catch (exception) {
    pdfModule.reject(exception);
  }
};

const handler = ({ component, fileName }, promise) => {
  pdfModule = promise;
  const html = getComponentAsHTML(component);
  if (html && fileName) generatePDF(html, fileName);
};

export const generateComponentAsPDF = (options) => {
  return new Promise((resolve, reject) => {
    return handler(options, { resolve, reject });
  });
};
