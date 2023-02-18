import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(){
    const thisHome = this;

    thisHome.render();
  }

  render(){
    const thisHome = this;

    render(){
      const thisHome = this;
          
      const generatedHTML = templates.home();
      const generatedDom = utils.createDOMFromHTML(generatedHTML);
      const homeWrapper = document.querySelector(select.containerOf.home);
  
      homeWrapper.appendChild(generatedDom);
  
      thisHome.dom = {};    
    } ;
  };
};