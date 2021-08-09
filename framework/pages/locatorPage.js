
const LocatorPage = function() { 


  this.getLocator = async function (locator){
      return locator; 
  };


  this.getElement = async function (page, locator){ // получаем текст элемента по локатору

        await page.waitForSelector(locator) 
          .then(
            () => console.log('Загрузился элемент'),
          );

        const elemText = await page.textContent(locator); // текст элемента получаем
        
        return elemText;
  };

}

export { LocatorPage };