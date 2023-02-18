import { settings, select } from './settings.js';

const app = {
  initData: function() {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  initHome: function () {
    const thisApp = this;

    thisApp.home = document.querySelector(select.containerOf.home);
    thisApp.homePage = new Home(thisApp.home);
    

  },

  init: function() {
    const thisApp = this;

    thisApp.initData();
    thisApp.initHome();

  },
};

app.init();