/* eslint-disable no-unused-vars */
export const select = {
  templateOf: {
    product:'#template-product',
  },
};

export const  containerOf = {
  pages: '#pages',
  home: '#home-page',
  aboutUs: '#aboutUs',
  contact: '#contact',
  input: {
    name: '#name',
    title: '#title',
    message: '#message',
    submit: '#submit',
  }
};

export const classNames = {
  active: 'active',
};

/*export const setings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
    orders: 'orders',
        
    product: 'product',
    order: 'order',
    booking: 'booking',
    event: 'event',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  },
};*/

export const templates = {
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
};