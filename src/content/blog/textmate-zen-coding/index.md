---
title: 'TextMate Zen Coding 1.3'
date: 2009-06-27
tags: post
layout: post.njk
---

Логичным этапом после всех [мечтаний про Zen Coding 2.0](/blog/zen-coding-concept/) стало написание документации по элементам, селекторам, свойствам и сокращениям.

- [Элементы Zen HTML](http://code.google.com/p/zen-coding/wiki/ZenHTMLElementsRu)
- [Селекторы Zen HTML](http://code.google.com/p/zen-coding/wiki/ZenHTMLSelectorsRu)
- [Свойства Zen CSS](http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesRu)

На основе этой документации, пакеты Zen HTML и Zen CSS для редактора [TextMate](http://macromates.com/) были обновлены до версии 1.3. Это обновление стало не столько исправлением ошибок в версиях 1.2, сколько подготовкой для перехода к версии 2.0. Тут вам и HTML 5, и CSS 3 и много других исправлений. А именно:

## Zen HTML

Набор элементов новой версии пакета создан на основе черновика HTML 5, плюс элемент `<acronym>`, который был исключён из HTML 5. Немного был изменён принцип именования шаблонов — сначала идёт версия языка, а потом уже тип:

    html:4t  = HTML 4.01 Transitional
    html:4s  = HTML 4.01 Strict
    html:5   = HTML 5
    html:xt  = XHTML 1.0 Transitional
    html:xs  = XHTML 1.0 Strict
    html:xxs = XHTML 1.1 Strict

Также добавлен новый шаблон страницы `html:5`:

    <!DOCTYPE HTML>
    <html lang="ru-RU">
    <head>
        <title></title>
        <meta charset="UTF-8">
    </head>
    <body>

    </body>
    </html>

Ещё один шаг к большей доступности пакета состоит в том, что теперь все элементы можно набирать как по псевдонимам, так и по полному имени:

    bq → <blockquote></blockquote>
    blockquote → <blockquote></blockquote>

То есть, не зная псевдонима, можно всё равно получить то, что нужно. Помимо этого, в пакет было добавлено много приятных мелочей:

Все элементы, которые имеют особенность много раз повторяться строка за строкой, теперь имеют механизм, который позволяет после написания первой строки сразу же приступать к написанию второй — достаточно нажать Tab после одного из следующих закрывающих тегов: `</p>`, `</li>`, `</tr>`, `</th>`, `</td>` или `</option>`.

Элемент `<div>` теперь разворачивается с атрибутами `class` и `id` более логично, раньше вместо точки использовалась собачка:

    div. → <div class=""></div>
    div# → <div id=""></div>

В список автоматических парных подстановок были добавлены русские кавычки: `«„“»`. Теперь при наборе первой из них, автоматически будет подставляться и вторая.

HTML-элементы теперь сгруппированы на основе спецификации, поэтому [навигация через меню «Bundles»](images/menu.navigation.png) теперь организована не по алфавиту, а по группам.

## Zen CSS

Набор свойств в этом пакете основан на черновике спецификации CSS 3 и в дальнейшем будет обновляться, в зависимости от реализации в браузерах и решений, что принимает [CSS WG](http://www.w3.org/blog/CSS/). Этот пакет оптимизация коснулась в большей степени.

Основной файл настроек языка был взят из самой последней версии оригинального пакета CSS и модифицирован для полного соответствия CSS 3:

- HTML-селекторы: 99, вместо прежних 76.
- Псевдо-классы: 24, вместо прежних 5.
- Свойства: 169, вместо прежних 125.
- Значения: 160, вместо прежник 138.

Это значит, что все новые свойства и значения из черновика CSS 3 будут правильно подсвечиваться. Исключением станут вендорные свойства и значения, в частности, с префиксами. Их полезно отличать от остального массива кода. Также было модифицировано регулярное выражение, которое отвечает за HTML-селекторы, теперь подсвечиваться будут как строчные, так и прописные имена.

Всем свойствам, отвечающим за позиционирование (`top`, `right`, `bottom`, `left`) были присвоены однобуквенные сокращения: `t`, `r`, `b`, `l`. Соответственно, для свойства `border` теперь используется сочетание `bd`, по аналогии с `bg` для `background`. Да, стало длиннее, да, придётся привыкать, но общая логичность решения повысилась.

Короткое сочетание `z` вернулось и свойству `z-index`, которое близко к тем обнобуквенным, что отвечают за позиционирование. Поэтому свойство `zoom`, о котором мы когда-нибудь забудем, отправлено в `zoo` и открывается сразу со значением, равным единице.

Помимо этого в пакет была внесена некоторая _вендорная специфика_: вроде `-ms-filter`, `display:-moz-inline-box`, `-webkit-box-shadow` и некоторых других. Эти свойства также будут обновляться, в зависимости от поддержки новых экспериментальных свойств в различных браузерах.

Ну, и немного приятных мелочей. Свойство `quotes` теперь может быть развёрнуто с уже готовыми значениями для двух уровней русских или английских кавычек:

    q:ru → quotes:'\00AB' '\00BB' '\201E' '\201C';
    q:en → quotes:'\201C' '\201D' '\2018' '\2019';

…а нажатая после символа `;` клавиша Tab создаст строку для нового правила.

## Кто здесь?

Сейчас пакеты проекта Zen Coding существуют в двух основных ветках:

- **Первая ветка** использует для работы с сокращениями внутренние возможности редактора и существует в виде отдельных пакетов для каждого языка:
    - Zen HTML и Zen CSS для редактора [TextMate](http://macromates.com/), автор — ваш покорный слуга.
    - Zen HTML для редактора [NetBeans](http://www.netbeans.org/), автор — [Александр Макаров](http://rmcreative.ru/).
- **Вторая ветка** является единым пакетом и использует для работы с сокращениями скрипт, написанный [Сергеем Чикуёнком](http://chikuyonok.ru/) на JavaScript, а затем портированный для Python:
    - Zen Coding для редактора [TextMate](http://macromates.com/)
    - Zen Coding для редактора [Aptana](http://www.aptana.com/)
    - Zen Coding для редактора [Coda](http://panic.com/coda/)

Обе ветки используют документацию, упомянутую в начале заметки, поэтому совместимы между собой. Особенностью второй ветки является то, что в XML-подобных языках поддерживается разворачивание шаблонов на основе CSS-синтаксиса, о чём [мечталось в одной заметке](/blog/zen-coding-concept/).

Несмотря на некоторую запутанность с ветками, пакеты продолжают развиваться, более того — планируется написание Zen HTML для [UltraEdit](http://www.ultraedit.com/products/ultraedit/) и Zen CSS для возрождённого [TopStyle 4](http://www.topstyle4.com/).

## Установка пакетов

Последние версии всех пакетов по-прежему можно скачать со [страницы проекта на Google Code](http://code.google.com/p/zen-coding/). Речь же пойдёт о специфике установки пакетов для редактора TextMate.

Если вы устанавливаете пакеты в первый раз, то достаточно просто кликнуть два раза по разархивированному файлу. Но если вы не уверены, то лучше читайте дальше.

Если вы уже использовали предыдущие версии пакетов для TextMate, включая бета-версии пакетов 1.3 с [Google Code](http://code.google.com/p/zen-coding/), то пакеты нужно будет обновить прямой заменой файлов. Иначе, попытки смёржить две разные версии приведут к непредсказуемым последствиям. Итак, нужно сделать следующее:

1. Закрыть TextMate.
2. Зайти в папку: `~/Library/Application Support/TextMate/Bundles/`.
3. Удалить старые пакеты Zen-CSS и Zen-HTML.
4. Скопировать в эту папку новые пакеты.

Такая тактика уменьшит вероятность возникновения проблем.
