import { Meteor } from 'meteor/meteor';

export default class FontHelper {
  // comment about server's Asset "assets/app/<asset>" location vs client's plain "<asset>"
  static getLocation(relativeFontPath) {
    if(Meteor.isServer) return Assets.absoluteFilePath(relativeFontPath)
    return relativeFontPath
  }

  static buildFontFace(font) {
    this.buildFontSource = (fontObj, fontProperty) => {
      let relativeFontPath = `${fontObj.folderPath}/${fontObj.name}.${fontProperty.ext}`;
      let fontSourcePath = FontHelper.getLocation(relativeFontPath);
      return `src: url("${fontSourcePath}") format("${fontProperty.format}");`
    }

    this.buildFontSources = (fontObj) => {
      // let's grep over many available flavours of a given font
      let fontSources = fontObj.properties.map((property) => {
        return this.buildFontSource(fontObj, property);
      });
      return fontSources.join("\n")
    }

    return `
      @font-face {
        font-family: ${font.name};
        ${this.buildFontSources(font)}
      }
    `
    // return `
    //   @font-face {
    //     font-family: ${font};
    //     src: url(${ FontHelper.getLocation(FontHelper.FONTPATH_PREFIX + "/" + font + ".eot") }) format("eot");
    //     src: url(${ FontHelper.getLocation(FontHelper.FONTPATH_PREFIX + "/" + font + ".eot?#iefix") }) format("embedded-opentype"),
    //          url(${ FontHelper.getLocation(FontHelper.FONTPATH_PREFIX + "/" + font + ".svg#TheMixPlainSemiBoldSemiBold") }) format("svg"),
    //          url(${ FontHelper.getLocation(FontHelper.FONTPATH_PREFIX + "/" + font + ".woff") }) format("woff"),
    //          url(${ FontHelper.getLocation(FontHelper.FONTPATH_PREFIX + "/" + font + ".ttf") }) format("truetype");
    //   }
    // `
  }
}

FontHelper.FONTS = {
  MONTSERRAT_REGULAR: {
    name: 'MontRgl',
    folderPath: 'fonts/montserrat',
    properties: [
      {
        ext: 'eot',
        format: 'eot'
      },
      {
        ext: 'svg',
        format: 'svg'
      },
      {
        ext: 'woff',
        format: 'woff'
      },
      {
        ext: 'ttf',
        format: 'truetype'
      }
    ]
  },
  MONTSERRAT_BOLD: {
    name: 'MontBld',
    folderPath: 'fonts/montserrat',
    properties: [
      {
        ext: 'eot',
        format: 'eot'
      },
      {
        ext: 'svg',
        format: 'svg'
      },
      {
        ext: 'woff',
        format: 'woff'
      },
      {
        ext: 'ttf',
        format: 'truetype'
      }
    ]
  },
  MONTSERRAT_LIGHT: {
    name: 'MontLt',
    folderPath: 'fonts/montserrat',
    properties: [
      {
        ext: 'eot',
        format: 'eot'
      },
      {
        ext: 'svg',
        format: 'svg'
      },
      {
        ext: 'woff',
        format: 'woff'
      },
      {
        ext: 'ttf',
        format: 'truetype'
      }
    ]
  },
  FLATICON: {
    name: 'Flaticon',
    folderPath: 'fonts/flaticon',
    properties: [
      {
        ext: 'eot',
        format: 'eot'
      },
      {
        ext: 'svg',
        format: 'svg'
      },
      {
        ext: 'woff',
        format: 'woff'
      },
      {
        ext: 'ttf',
        format: 'truetype'
      }
    ]
  },
}
