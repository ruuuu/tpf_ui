const CreateTaxpayerPage = function() { 

  const createTaxpayerButton = ('text="Создать карточку"'); // кнопка "Создать карточку"    
  const innField = ('[data-field-name = "inn"]'); // поле ввода ИНН
  const checkButton = ('text="Найти"'); //  кнопка  Найти(check) 
  const prodolgitButton = ('text="Продолжить"'); // кнопка Продолжить
  const queryTab = ('text="Заявки на получение сведений"'); // вкладка  Запросы
  const innTab = ('text="Налогоплательщики"'); // вкладка Налогоплательщики
  


  this.createTaxpayer = async function (page, inn){  
    
      await page.click(createTaxpayerButton); // оранжевая кнпока Запросить данные 

      await page.fill(innField, inn); 

      await page.click(checkButton); // кнопка Найти

      await page.click(prodolgitButton); // кнпока Продолжить

      await page.click(queryTab); // вкладка Заявки на получение сведений(раньше была Запросы)
      
      const cellStatusLocator = ('table>tbody>tr:nth-child(2)>td:nth-child(2)>div>div'); // вернет локартор

      
      while(await page.textContent(cellStatusLocator) !== 'Подтвержден'){
          await page.waitForTimeout(5000); // 5 сек ждем 
      }
  
    };


  this.createTaxpayerAlreadyExist = async function (page, inn){   // Создаем НП, котрый уже есть в системе
    
    await page.click(createTaxpayerButton); // оранжевая кнпока Запросить данные 

    await page.fill(innField, inn); 

    await page.click(checkButton); // кнопка Найти

    await page.click(prodolgitButton); // кнпока Продолжить

    await page.click(prodolgitButton); // кнпока Продолжить

  };  
  


};

export { CreateTaxpayerPage };