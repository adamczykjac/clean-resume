import ReactDOMServer from 'react-dom/server';
import wkhtmltopdf from 'wkhtmltopdf';
import fs from 'fs';
import path from 'path';

let pdfModule;

toFileUri = (filename) => ('file://' + path.resolve(filename))

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
    const htmlStream = fs.createWriteStream("out.html")
    htmlStream.write(html)
    htmlStream.end()

    // This needs to be rewritten, no clue why passing a stream does not work, so passing an URL
    // to a file instead
    const outputPDF = fs.createWriteStream(fileName);
    wkhtmltopdf(toFileUri('out.html'), { encoding: 'UTF-8' }).pipe(outputPDF);
    outputPDF.on('finish', function() {
      pdfModule.resolve({ fileName, base64: getBase64String(outputPDF.path) });
      // fs.unlink(htmlStream.path);
      fs.unlink(outputPDF.path);
    }).on('error', function(err) {
      console.log(err);
      pdfModule.reject(err);
    });
  } catch (exception) {
    console.log(exception);
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
