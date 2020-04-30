---
title: 'Zen Coding 1.1'
date: 2008-11-06
tags: post
layout: post.njk
---

Первая порция исправлений ошибок и некоторых новых возможностей пакетов [Zen CSS](/blog/zen-css/) и [Zen HTML](/blog/zen-html/) для TextMate доступна на странице проекта [Zen Coding](http://code.google.com/p/zen-coding/).

Итак, список изменений:

## Общие

- Модули языков переименованы в соответствии с рекомендациями по именованию: сначала название языка, потом пакета — HTML Zen, CSS Zen. Теперь языки будет удобнее выбирать из списка, но на самих названиях пакетов это не отразилось. Кстати, эти пакеты могу включаться сочетаниями клавиш: Zen HTML — Cmd + Alt + H, Zen CSS — Cmd + Alt + C.
- Меню пакетов приведено в порядок: все элементы рассортированы по группам, а в корневом узле содержится версия пакета.

## Zen HTML

Для элементов `<div>` и `<span>` введены модификаторы, которые разворачивают их с атрибутами `id` или `class`:

    div# → <div id="|"></div>
    span@ → <span class="|"></span>

Расположения курсора сначала позволяет ввести `id` или `class` элемента, а после нажатия клавиши Tab, перейти внутрь. Обозначения модификаторов соответствуют горячим клавишам для вставки этих атрибутов: Cmd + # и Cmd + @.

Также для элементов `<ul>`, `<ol>`, `<select>` и `<tr>`, в дополнение к модификатору `+`, были введены числовые модификаторы количества детей в развёрнутом состоянии:

    ul+2 →
    <ul>
       <li>|</li>
       <li>|</li>
    </ul>

    select+3 →
    <select>
       <option>|</option>
       <option>|</option>
       <option>|</option>
    </select>

К сожалению, на данном этапе развития пакетов, все значения прописываются вручную, поэтому предусмотрено разворачивание максимум 5-ти детей. Комбинация `ul+6` уже не сработает.

## Zen CSS

- Исправлена ошибка с разворачиванием фигурных скобок, которая отменяла срабатывание первой комбинации. Эта ошибка заметна на [скринкасте](/blog/zen-css/), в момент описания фона для `<body>`.
- Автоматическая подстановка точки с запятой после двоеточия теперь реализована умнее — через `smartTypingPairs`.
- Клавиша Tab после точки с запятой в конце правила теперь создаёт новую строку в блоке правил.
- Псевдоним `bgi` теперь разворачивается по умолчанию с шаблоном значения `background-image: url(../i/|);`, потому как особых альтернатив нет, а значение `none` выводится с помощью `bgi:n`.

Дальше — больше.