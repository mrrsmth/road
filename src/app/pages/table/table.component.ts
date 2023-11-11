import { Component } from '@angular/core';
import { Table } from 'src/app/interface/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  headerRoadMapTable: string[] = ['technology', 'theme', 'ready'];

  roadmapTable: Table[] = [
    { technology: 'HTML', theme: 'Элементы в HTML', ready: 'Bool?'},
    { technology: '', theme: 'Формы, валидация форм', ready: 'Bool?'},
    { technology: '', theme: 'Семантическая верстка', ready: 'Bool?'},
    { technology: 'CSS', theme: 'Элементы в HTML', ready: 'Bool?'},
    { technology: '', theme: 'Селекторы', ready: 'Bool?'},
    { technology: '', theme: 'Свойства', ready: 'Bool?'},
    { technology: '', theme: 'Позиционирование элементов, Flexbox, Grid', ready: 'Bool?'},
    { technology: '', theme: 'Трансформации, переходы, анимации', ready: 'Bool?'},
    { technology: '', theme: '‘Адаптивный дизайн и медиазапросы', ready: 'Bool?'},
    { technology: '', theme: 'СSS-препроцессоры(sass, scss, less)', ready: 'Bool?'},
    { technology: '', theme: 'БЭМ', ready: 'Bool?'},
    { technology: 'JavaScript', theme: 'Типы данных, преобразования типов', ready: 'Bool?'},
    { technology: '', theme: 'Условное ветвление, логические операторы, циклы', ready: 'Bool?'},
    { technology: '', theme: 'Функции, функциональные выражения, стрелочные функции, поднятие', ready: 'Bool?'},
    { technology: '', theme: 'Замыкание, IIFE', ready: 'Bool?'},
    { technology: '', theme: 'Строки, шаблонные строки, регулярные выражения', ready: 'Bool?'},
    { technology: '', theme: 'Массивы, методы массивов, перебор массивов', ready: 'Bool?'},
    { technology: '', theme: 'Объекты, методы объектов, сравнение объектов, ссылки', ready: 'Bool?'},
    { technology: '', theme: 'Классы, наследование, статические свойства и методы, защищенные свойства и методы', ready: 'Bool?'},
    { technology: '', theme: 'Колбэки, промисы, обработка ошибок, микротаски, азупс/амаи, event loop', ready: 'Bool?'},
    { technology: '', theme: 'Взаимодействие DOM (создание, добавление, изменение и удаление элементов веб-станиць), браузерные события, распространение событий', ready: 'Bool?'},
    { technology: '', theme: 'Хранение данных - сооке, session storage, local storage', ready: 'Bool?'},
    { technology: '', theme: 'Дебаг в Chrome DevTools', ready: 'Bool?'},
    { technology: '', theme: 'XMLHttpRequest, FetchApi, WebSocket', ready: 'Bool?'},
  ];

}
// `Дебаггингв Сьготе ОечТос 5

// основы п, стопе, сот, ри, рузв, пегде, 1115

// Внесение исправлений/изменений - гебазе, снепу-реК, заиазв
// Разрешение конфликтов

// Использование какого либо 61