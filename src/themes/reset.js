const reset = {
  '@global': {
    '*, *::before, *::after': {
      boxSizing: 'border-box'
    },
    'html, body, div, h1, h2, h3, h4, h5, h6, p, small, span, a, blockquote, pre, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video': {
      margin: '0',
      padding: '0',
      border: '0',
      outline: '0',
      fontSize: '100%',
      font: 'inherit',
      verticalAlign: 'baseline'
    },
    body: {
      scrollBehavior: 'smooth',
      lineHeight: '1.25',
      fontSmoothing: 'antialiased',
      fontSynthesis: 'none',
      textRendering: 'auto'
    },
    'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
      display: 'block'
    },
    a: {
      cursor: 'pointer'
    },
    'ol, ul': {
      listStyle: 'none'
    },
    'blockquote, q': {
      quotes: 'none'
    },
    'blockquote:before, blockquote:after, q:before, q:after': {
      content: 'none'
    }
  }
};

export default reset;
