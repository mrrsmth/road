import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/interface/iTable.interface';

@Component({
  selector: 'road-table',
  templateUrl: './road-table.component.html',
  styleUrls: ['./road-table.component.scss'],
})
export class RoadTableComponent implements OnInit {
  headerRoadMapTable: string[] = ['technology', 'theme', 'bool'];
  local: string = '';
  showBtn:boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.loadLocalStorage();
  }


  addLocalStorage(index: number) {
    const item = this.roadmapTable[index];
    localStorage.setItem(item.theme, String(item.bool));
  }

  clearLocalStorage() {
    localStorage.clear();
    this.loadLocalStorage();
  }

  loadLocalStorage() {
    this.roadmapTable.forEach((item) => {
      const storedValue = localStorage.getItem(item.theme);
      if (storedValue === 'true') {
        item.bool = true;
      } else {
        item.bool = false;
      }
    });
  }

  check() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = String(localStorage.key(i));
      this.local += `${key}: ${localStorage.getItem(key)}, `;
    }
  }

  refresh(): void {
    window.location.reload();
  }

  showTestBtn() {
    this.showBtn = this.showBtn === false ? true:false;
  }

  roadmapTable: Table[] = [
    { technology: 'HTML', theme: 'Элементы в HTML', bool: false },
    { technology: '', theme: 'Формы, валидация форм', bool: false },
    { technology: '', theme: 'Семантическая верстка', bool: false },
    { technology: 'CSS', theme: 'Селекторы', bool: false },
    { technology: '', theme: 'Свойства', bool: false },
    {
      technology: '',
      theme: 'Позиционирование элементов, Flexbox, Grid',
      bool: false,
    },
    { technology: '', theme: 'Трансформации, переходы, анимации', bool: false },
    { technology: '', theme: '‘Адаптивный дизайн и медиазапросы', bool: false },
    {
      technology: '',
      theme: 'СSS-препроцессоры(sass, scss, less)',
      bool: false,
    },
    { technology: '', theme: 'БЭМ', bool: false },
    {
      technology: 'JavaScript',
      theme: 'Типы данных, преобразования типов',
      bool: false,
    },
    {
      technology: '',
      theme: 'Условное ветвление, логические операторы, циклы',
      bool: false,
    },
    {
      technology: '',
      theme: 'Функции, функциональные выражения, стрелочные функции, поднятие',
      bool: false,
    },
    { technology: '', theme: 'Замыкание, IIFE', bool: false },
    {
      technology: '',
      theme: 'Строки, шаблонные строки, регулярные выражения',
      bool: false,
    },
    {
      technology: '',
      theme: 'Массивы, методы массивов, перебор массивов',
      bool: false,
    },
    {
      technology: '',
      theme: 'Объекты, методы объектов, сравнение объектов, ссылки',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Классы, наследование, статические свойства и методы, защищенные свойства и методы',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Колбэки, промисы, обработка ошибок, микротаски, азупс/амаи, event loop',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Взаимодействие DOM (создание, добавление, изменение и удаление элементов веб-станиць), браузерные события, распространение событий',
      bool: false,
    },
    {
      technology: '',
      theme: 'Хранение данных - сооке, session storage, local storage',
      bool: false,
    },
    { technology: '', theme: 'Дебаг в Chrome DevTools', bool: false },
    {
      technology: '',
      theme: 'XMLHttpRequest, FetchApi, WebSocket',
      bool: false,
    },
    {
      technology: 'Angular',
      theme: 'Компоненты, модули, загрузка приложения',
      bool: false,
    },
    {
      technology: '',
      theme: 'Привязка данных',
      bool: false,
    },
    {
      technology: '',
      theme: 'Привязка к событиям дочернего компонента',
      bool: false,
    },
    {
      technology: '',
      theme: 'Жизненный цикл компонента',
      bool: false,
    },
    {
      technology: '',
      theme: 'Атрибутивные и структурные директивы, создание директив',
      bool: false,
    },
    {
      technology: '',
      theme: 'Сервисы и dependency injection',
      bool: false,
    },
    {
      technology: '',
      theme: 'Работа с формами',
      bool: false,
    },
    {
      technology: '',
      theme: 'НТТР и взаимодействие с сервером',
      bool: false,
    },
    {
      technology: '',
      theme: 'Маршрутизация',
      bool: false,
    },
    {
      technology: '',
      theme: 'Pipes',
      bool: false,
    },
    {
      technology: 'RxJS',
      theme: 'Observable',
      bool: false,
    },
    {
      technology: '',
      theme: 'Observer',
      bool: false,
    },
    {
      technology: '',
      theme: 'Subject',
      bool: false,
    },
    {
      technology: '',
      theme: 'Scheduler',
      bool: false,
    },
    {
      technology: '',
      theme: 'Subscription',
      bool: false,
    },
    {
      technology: '',
      theme: 'Операторы и метод pipe()',
      bool: false,
    },
    {
      technology: 'NgRX',
      theme: 'Actions',
      bool: false,
    },
    {
      technology: '',
      theme: 'Reducers',
      bool: false,
    },
    {
      technology: '',
      theme: 'Store',
      bool: false,
    },
    {
      technology: '',
      theme: 'Selectors',
      bool: false,
    },
    {
      technology: '',
      theme: 'Effects',
      bool: false,
    },
    {
      technology: '',
      theme: 'Router store',
      bool: false,
    },
    {
      technology: '',
      theme: 'Meta reducers',
      bool: false,
    },
    {
      technology: '',
      theme: 'Entity state',
      bool: false,
    },
    {
      technology: 'TypeScript',
      theme: 'Типы данных',
      bool: false,
    },
    {
      technology: '',
      theme: 'Типы функции, стрелочные функции',
      bool: false,
    },
    {
      technology: '',
      theme: 'Массивы, методы массивов, перебор массивов',
      bool: false,
    },
    {
      technology: '',
      theme: 'Объекты',
      bool: false,
    },
    {
      technology: '',
      theme: 'Перечисления enum',
      bool: false,
    },
    {
      technology: '',
      theme: 'Кортежи',
      bool: false,
    },
    {
      technology: '',
      theme:
        'Классы, наследование, модификаторы доступа, методы доступа get и set, статические поля и методы',
      bool: false,
    },
    {
      technology: '',
      theme: 'Интерфейсы, превдонимы обобщения',
      bool: false,
    },
    {
      technology: '',
      theme: 'Миксины, декораторы',
      bool: false,
    },
    {
      technology: '',
      theme: 'Содание и работа с модулями, пространство имен',
      bool: false,
    },
    {
      technology: 'Тестирование',
      theme: 'е2е',
      bool: false,
    },
    {
      technology: '',
      theme: 'Cypress',
      bool: false,
    },
    {
      technology: 'ООП',
      theme: 'Принципы ООП(Инкапсуляция, абстранция, полиморфизм, наследование',
      bool: false,
    },
    {
      technology: '',
      theme: 'Паттерны проектирования',
      bool: false,
    },
    {
      technology: '',
      theme: 'Принципы SOLID',
      bool: false,
    },
    {
      technology: 'Остальное',
      theme: 'Сборщики(Gulp, Webpack)',
      bool: false,
    },
    {
      technology: '',
      theme: 'Пакетные менеджеры (npm)',
      bool: false,
    },
    {
      technology: '',
      theme: 'Форматтеры (Prettier)',
      bool: false,
    },
    {
      technology: '',
      theme: 'Компиляторы (Babel)',
      bool: false,
    },
    {
      technology: '',
      theme: 'Линтеры (ESLint)',
      bool: false,
    },
    {
      technology: 'Безопасность',
      theme: 'CORS',
      bool: false,
    },
    {
      technology: '',
      theme: 'XSS',
      bool: false,
    },
    {
      technology: '',
      theme: 'Content Security Policy',
      bool: false,
    },
    {
      technology: '',
      theme: 'OWASP Security Risks',
      bool: false,
    },
    {
      technology: 'Мобильная разработка',
      theme: 'Flutter',
      bool: false,
    },
    {
      technology: '',
      theme: 'Ionic',
      bool: false,
    },
    {
      technology: 'Десктопная разработка',
      theme: 'Electron',
      bool: false,
    },
    {
      technology: 'NodeJS',
      theme: 'Основы',
      bool: false,
    },
  ];
}
