import { Component } from '@angular/core';
import { Table } from 'src/app/interface/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  headerRoadMapTable: string[] = ['technology', 'theme', 'bool'];

  roadmapBool: any = {
    'Элементы в HTML': false
  }

  roadmapTable: Table[] = [
    { technology: 'HTML', theme: 'Элементы в HTML', bool: 'Bool?'},
    { technology: '', theme: 'Формы, валидация форм', bool: 'Bool?'},
    { technology: '', theme: 'Семантическая верстка', bool: 'Bool?'},
    { technology: 'CSS', theme: 'Элементы в HTML', bool: 'Bool?'},
    { technology: '', theme: 'Селекторы', bool: 'Bool?'},
    { technology: '', theme: 'Свойства', bool: 'Bool?'},
    { technology: '', theme: 'Позиционирование элементов, Flexbox, Grid', bool: 'Bool?'},
    { technology: '', theme: 'Трансформации, переходы, анимации', bool: 'Bool?'},
    { technology: '', theme: '‘Адаптивный дизайн и медиазапросы', bool: 'Bool?'},
    { technology: '', theme: 'СSS-препроцессоры(sass, scss, less)', bool: 'Bool?'},
    { technology: '', theme: 'БЭМ', bool: 'Bool?'},
    { technology: 'JavaScript', theme: 'Типы данных, преобразования типов', bool: 'Bool?'},
    { technology: '', theme: 'Условное ветвление, логические операторы, циклы', bool: 'Bool?'},
    { technology: '', theme: 'Функции, функциональные выражения, стрелочные функции, поднятие', bool: 'Bool?'},
    { technology: '', theme: 'Замыкание, IIFE', bool: 'Bool?'},
    { technology: '', theme: 'Строки, шаблонные строки, регулярные выражения', bool: 'Bool?'},
    { technology: '', theme: 'Массивы, методы массивов, перебор массивов', bool: 'Bool?'},
    { technology: '', theme: 'Объекты, методы объектов, сравнение объектов, ссылки', bool: 'Bool?'},
    { technology: '', theme: 'Классы, наследование, статические свойства и методы, защищенные свойства и методы', bool: 'Bool?'},
    { technology: '', theme: 'Колбэки, промисы, обработка ошибок, микротаски, азупс/амаи, event loop', bool: 'Bool?'},
    { technology: '', theme: 'Взаимодействие DOM (создание, добавление, изменение и удаление элементов веб-станиць), браузерные события, распространение событий', bool: 'Bool?'},
    { technology: '', theme: 'Хранение данных - сооке, session storage, local storage', bool: 'Bool?'},
    { technology: '', theme: 'Дебаг в Chrome DevTools', bool: 'Bool?'},
    { technology: '', theme: 'XMLHttpRequest, FetchApi, WebSocket', bool: 'Bool?'},
  ];
}
