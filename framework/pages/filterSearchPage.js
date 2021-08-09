const FilterSearchPage = function() { 

  const poiskButton = ('div>div>div>div:nth-child(1)>div>div:nth-child(4)>div>div'); // кнпока Лупы
  const searchInnField = ('[placeholder="Введите ИНН"]'); // поле поиска по ИНН
  const requests = ('html>body>div>div>div>div>div:nth-child(2)>div>div:nth-child(2)>div>div:nth-child(2)'); // вкладка Запросы
  const filterButtonForInnAtTaxpayers = ('table>thead>tr>th:nth-child(1)>div>div>div:nth-child(2)>div:nth-child(2)>div'); // тркеугольничек для фильра по инн на вкладке НП
  const innFiled = ('[placeholder = "Найти..."]'); 
  const applyButton = ('text="Применить"'); // кнпока Применить, нашли кнпоку по надписи
  const filterButtonForInnAtRequests = ('table>thead>tr>th:nth-child(4)>div>div>div:nth-child(2)>div:nth-child(2)>div');// тркеугольничек для фильра по инн на вкладке Запросы





  this.searchTaxpayerByInnAtTaxpayers = async function (page, inn){   // поиск по ИНН на вкладке НП,  к ней обращаетмся как FilterSearchPage.searchTaxpayerByInnAtTaxpayers
    
    await page.click(poiskButton); // жме мна кнопку Лупы

    await page.fill(searchInnField, inn); // вбиваем Инн в поле поиска
    
  };


  this.searchTaxpayerByInnAtRequests = async function (page, inn){   // поиск по ИНН на вкладке Запросы

    await page.click(requests); // переходим на  вкладку Запросы
    
    await page.click(poiskButton); // жме мна кнопку Лупы

    await page.fill(searchInnField, inn); // вбиваем Инн в поле поиска
    
  };



  
  this.filterTaxpayerByInnAtTaxpayers = async function (page, inn){  // фильтр по Инн на вкладке НП
    
    await page.click(filterButtonForInnAtTaxpayers); // на треугольничек жмем

    await page.fill(innFiled, inn); 

    await page.click(applyButton);  // жмем Применить
    
  };


  this.filterTaxpayerByInnAtRequests = async function (page, inn){  // фильтр по Инн на вкладке Запросы

    await page.click(requests); // переходим на  вкладку Запросы

    await page.click(filterButtonForInnAtRequests); // на треугольничек жмем

    await page.fill(innFiled, inn); 

    await page.click(applyButton);  // жмем Применить
    
  };



  this.filterTaxpayerByInnAtRequests = async function (page, inn){  // фильтр по Статусу на вкладке Запросы

    await page.click(requests); // переходим на  вкладку Запросы

    await page.click(); // 

    await page.fill(); 

    await page.click(applyButton);  // жмем Применить
    
  };





  // сортировка:



};


export { FilterSearchPage };