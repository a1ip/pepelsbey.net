<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Семантическая вёрстка. Часть вторая — Пепелсбей.net</title>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="description" content="Авторские заметки, посвящённые современной веб-разработке">
	<meta name="keywords" content="pepelsbey, Пепелсбей, Вадим Макеев, семантическая вёрстка, семантика, веб-стандарты, zen coding, микроформаты, css3, css, html5, html">
	<meta name="viewport" content="width=780">
	<link rel="stylesheet" href="/static/s/screen.css">
	<!--[if lt IE 9]><link rel="stylesheet" href="https://pepelsbey.net/static/s/ie.css"><![endif]-->
	<link rel="icon" sizes="16x16" href="/static/i/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="/static/i/favicon.png">
	<link rel="yandex-tableau-widget" href="/static/i/tableau.json">
	<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed/index.rss">
	<link rel="alternate" type="application/atom+xml" title="Atom 0.3" href="/feed/atom/index">
	<!--[if lt IE 9]><script src="https://pepelsbey.net/static/j/html5.js"></script><![endif]-->
</head>
<body>
	<div class="header-wrap">
		<header class="header" role="banner">
			<p><a href="/">Пепелсбей.net</a></p>
			<ul role="navigation">
				<li><a href="/search/">Поиск</a></li>
				<li><a href="/author/">Об авторе</a></li>
				<li><a href="/feed/index.rss" title="RSS">RSS</a></li>
			</ul>
		</header>
	</div>
	<div class="article-wrap">
		<article class="article" role="main">
			<header>
				<h1><a href="index.html" rel="bookmark">Семантическая вёрстка. Часть вторая</a></h1>
				<time pubdate datetime="2008-04-24T18:00:09+00:00">24 апреля ’08</time>
			</header>
			<p>Современный взгляд на организацию кода. По материалам доклада «Семантическая вёрстка» на конференциях <a href="http://www.client2007.ru/">ClientSide&nbsp;2007</a> и <a href="http://uaweb.in.ua/">UA&nbsp;Web&nbsp;2008</a>. Продолжение.</p>

<p>Начало&nbsp;— «<a href="/2008/04/semantic-coding-1/">Семантическая вёрстка. Часть первая</a>».</p>

<h2>Второй уровень семантики</h2>

<p>Для создания второго смыслового уровня документа у нас есть два способа именования элементов: <code>id</code> и <code>class</code>. Каждый имеет свои особенности, в силу которых формируются типичные ситуации применения каждого из них.</p>

<p>Имя элемента характеризует его функциональность или содержимое: <em>упорядоченный список</em> (первый уровень семантики) <em>комментариев</em> (второй уровень семантики).</p>

<pre><code>&lt;ol id="comments"&gt;</code>
<code>    &lt;li&gt;Первый&lt;/li&gt;</code>
<code>    &lt;li&gt;Второй&lt;/li&gt;</code>
<code>&lt;/ol&gt;</code></pre>

<p>Согласно спецификации, <code>id</code>&nbsp;— это имя уникального элемента, в большей степени подходит для создания <em>структурной</em> разметки документа:</p>

<pre><code>&lt;body&gt;</code>
<code>    &lt;div id="header"&gt;&lt;/div&gt;</code>
<code>    &lt;div id="content"&gt;&lt;/div&gt;</code>
<code>    &lt;div id="footer"&gt;&lt;/div&gt;</code>
<code>&lt;/body&gt;</code></pre>

<p>В отдельном случае, <code>id</code> применяется для создания связей ярлык-поле при помощи атрибута <code>for</code> элемента <code>&lt;label&gt;</code>:</p>

<pre><code>&lt;label for="full-name"&gt;</code>
<code>    Полное имя</code>
<code>&lt;/label&gt;</code>
<code>&lt;input type="text" id="full-name"/&gt;</code></pre>

<p>В то время, как <code>class</code>&nbsp;— это общее имя множества элементов и, соответственно, их общая семантическая роль. Множественные классы для одного элемента позволяют удобно комбинировать не только стили, но ещё смысловые значения нескольких имён. Данный фрагмент микроформата <a href="http://microformats.org/wiki/hcard">hCard</a> говорит нам о том, что эта ссылка ведёт на <em>сайт</em> (url) <em>организации</em> (org) под <em>названием</em> (fn) «Яндекс»:</p>

<pre><code>&lt;a href="http://yandex.ru/" class="fn org url"&gt;</code>
<code>    Яндекс</code>
<code>&lt;/a&gt;</code></pre>

<p>Таким образом, применяя <code>id</code> для структурной разметки, мы создаём некие пространства имён, благодаря которым мы можем адресовать применение стилей для элементов с одинаковыми смысловыми ролями и, соответственно, именами классов. В качестве примера такой ситуации, можно привести оформление ссылок на RSS-поток, которые в шапке и подвале документа, в нашем случае, должны отличаться цветами:</p>

<pre><code>&lt;div id="header"&gt;</code>
<code>    &lt;a href="#" class="rss"&gt;RSS&lt;/a&gt;</code>
<code>&lt;/div&gt;</code>
<code>&lt;div id="footer"&gt;</code>
<code>    &lt;a href="#" class="rss"&gt;RSS&lt;/a&gt;</code>
<code>&lt;/div&gt;</code></pre>

<pre><code>.rss {</code>
<code>    padding-left:20px;</code>
<code>    background:url(rss.png) no-repeat;</code>
<code>    }</code>
<code>#header .rss {</code>
<code>    color:#C00;</code>
<code>    }</code>
<code>#footer .rss {</code>
<code>    color:#069;</code>
<code>    }</code></pre>

<p>Семантически верное именование HTML-элементов при помощи атрибутов <code>id</code> и <code>class</code>, помимо самой семантики, привносит упорядоченность не только в сам документ, а ещё и в процесс разработки.</p>

<p>Правильно именованный код удобно читать, разбираться во всех его хитросплетениях, даже если этот код чужой. Личный опыт показывает, что при использовании последовательной и логичной политики именования элементов, а также отступов, формирующих дерево документа, практически полностью отпадает необходимость разметки кода HTML-комментариями, поясняющими где блок начался, где закончился и что в нём вообще содержится. Всё и так легко понимается из визуальной структуры и имён элементов.</p>

<h2>Третий уровень семантики</h2>

<p>Основа интернета&nbsp;— это гипертекстуальность, т.е. связь документов при помощи гиперссылок, создающая единое информационное пространство сети. Говоря же о третьем уровне семантики, мы подразумеваем создание смысловых связей между семантическими единицами в документе.</p>

<p>Единственным внятным примером этого механизма на данный момент являются <a href="http://microformats.org">микроформаты</a> (μf). Идейным вдохновителем данной методики семантической разметки является Тантек Челик (Tantek Çelik), известный нам по работе над IE for Mac, <a href="http://tantek.com/CSS/Examples/boxmodelhack.html">Box Model Hack</a> и проекту <a href="http://technorati.com/">Technorati</a>.</p>

<p>Микроформаты сами по себе являются большой темой для изучения, для чего я могу порекомендовать следить за обновлениями следующих ресурсов:</p>

<ul>
<li><a href="http://microformats.org/">Microformats</a>&nbsp;— официальный блог и wiki-документация</li>
<li><a href="http://microformatique.com/">Microformatique</a>&nbsp;— блог Джона Оллсопа (John Allsopp), автора <a href="http://www.amazon.com/gp/product/1590598148?ie=UTF8&amp;tag=microformatiq-20&amp;linkCode=as2&amp;camp=1789&amp;creative=9325&amp;creativeASIN=1590598148">книги о микроформатах</a></li>
<li><a href="http://habrahabr.ru/blog/microformats/">Микроформаты</a>&nbsp;— о микроформатах по-русски на Хабрхабре</li>
</ul>

<p>Я же продемонстрирую вам некоторые примеры превращения скверной разметки в разметку, содержащую новые смысловые уровни, и просто интересные примеры использования микроформатов.</p>

<p>В качестве первого примера можно привести разметку имени пользователя и маленькой иконки рядом, так называемого «головастика», который используется в сервисе блогов <a href="http://www.livejournal.com/">Livejournal.com</a>. Вот, каким образом это выглядит сейчас:</p>

<pre><code>&lt;span class='ljuser' lj:user='kuteev' style='white-space: nowrap;'&gt;</code>
<code>    &lt;a href='#'&gt;</code>
<code>        &lt;img src='#' alt='[info]' width='17' height='17'</code>
<code>            style='vertical-align: bottom;</code>
<code>            border: 0; padding-right: 1px;' /&gt;</code>
<code>    &lt;/a&gt;</code>
<code>    &lt;a href='#'&gt;</code>
<code>        &lt;b&gt;kuteev&lt;/b&gt;</code>
<code>    &lt;/a&gt;</code>
<code>&lt;/span&gt;</code></pre>

<p>Давайте внимательно рассмотрим, какую же полезную информацию мы можем извлечь из приведённой разметки:</p>

<ul>
<li>Юзернейм не переносится, ибо <code>white-space: nowrap</code></li>
<li>Головастика выровняли по вертикали, отключили у него рамку, отступ и задали размеры&nbsp;— <code>width='17' height='17' style='…'</code></li>
<li>Кутеев, оказывается, полужирный, поскольку <code>&lt;b&gt;kuteev&lt;/b&gt;</code></li>
</ul>

<p>Впечатляющая подборка… Но давайте всё-таки попробуем улучшить эту разметку, используя микроформат <a href="http://microformats.org/wiki/hcard">hCard</a> и долю здравого смысла:</p>

<pre><code>&lt;span class="ljuser vcard"&gt;</code>
<code>    &lt;a href="#" target="_blank"</code>
<code>        class="ico" title="Профиль"&gt;</code>
<code>        &lt;img src="#" alt="" /&gt;</code>
<code>    &lt;/a&gt;</code>
<code>    &lt;a href="#" target="_blank"</code>
<code>        class="fn nickname url" title="Журнал"&gt;</code>
<code>        kuteev</code>
<code>    &lt;/a&gt;</code>
<code>&lt;/span&gt;</code></pre>

<p>Что же нового мы теперь можем узнать:</p>

<ul>
<li>Мы имеем дело с мини-визиткой Кутеева, потому как <code>class="vcard"</code></li>
<li>Ссылка с головастика ведёт в профиль&nbsp;— мы уточнили <code>title="Профиль"</code></li>
<li>Никнейм Кутеева&nbsp;— kuteev, мы видим <code>class="fn nickname"</code></li>
<li>Ссылка с никнейма ведёт на сайт Кутеева&nbsp;— <code>class="nickname url"</code>, а точнее&nbsp;— в журнал,&nbsp;— мы уточнили <code>title="Журнал"</code></li>
<li>Пара нажатий&nbsp;— и Кутеев добавлен в мою адресную книгу</li>
</ul>

<p>Данный код был написан мною для проекта <a href="http://www.livejournal.ru/">Livejournal.ru</a>, где таким образом были размечены все имена пользователей. Надеюсь, что в скором будущем подобная разметка будет использоваться и на <a href="http://www.livejournal.com/">Livejournal.com</a>.</p>

<p>Следующий пример более абстрактен и демонстрирует разметку информации о компании при помощи микроформата <a href="http://microformats.org/wiki/hcard">hCard</a>, которая дополняется картой расположения офиса, при помощи <a href="http://code.google.com/apis/maps/">Google Maps API</a>:</p>

<pre><code>&lt;div class="vcard"&gt;</code>
<code>    &lt;h1 class="fn org"&gt;Яндекс&lt;/h1&gt;</code>
<code>    &lt;dl&gt;</code>
<code>        &lt;dt&gt;Адрес:&lt;/dt&gt;</code>
<code>        &lt;dd class="adr"&gt;</code>
<code>            &lt;span class="postal-code"&gt;111033&lt;/span&gt;,</code>
<code>            &lt;span class="locality"&gt;Москва&lt;/span&gt;,</code>
<code>            &lt;span class="street-address"&gt;</code>
<code>                ул. Самокатная, дом 1</code>
<code>            &lt;/span&gt;</code>
<code>        &lt;/dd&gt;</code>
<code>    &lt;dl&gt;</code>
<code>    &lt;div id="map" class="geo"&gt;</code>
<code>        &lt;abbr class="latitude" title="55.7582"&gt;</code>
<code>            N 55° 75.82</code>
<code>        &lt;/abbr&gt;</code>
<code>        &lt;abbr class="longitude" title="37.6786"&gt;</code>
<code>            W 37° 67.86</code>
<code>        &lt;/abbr&gt;</code>
<code>    &lt;/div&gt;</code>
<code>&lt;/div&gt;</code></pre>

<ul>
<li>Мы имеем дело с визиткой организации и называется она «Яндекс»&nbsp;— <code>class="fn org"</code></li>
<li>У нас есть её структурно размеченный адрес: <code>postal-code</code>, <code>locality</code>, <code>street-address</code></li>
<li>Также нам известно точное географическое положение организации, обозначенное в в элементах <code>&lt;abbr&gt;</code>: <code>class="latitude"</code> и <code>title="55.7582"</code>, <code>class="longitude"</code> и <code>title="37.6786"</code></li>
<li>При помощи несложного JavaScript-кода и <a href="http://code.google.com/apis/maps/">Google Maps API</a> мы извлекаем информацию о координатах и рисуем в элементе с <code>id="map"</code> карту, спозиционированную точно в нужном месте</li>
<li>Пара нажатий&nbsp;— и «Яндекс» добавлен в мою адресную книгу</li>
</ul>

<p>Соответственно, вся информация из приведённых примеров становится доступна поисковым машинам и плагинам ваших браузеров, поскольку её разметка формализована в <a href="http://microformats.org/wiki/hcard">спецификации микроформата hCard</a>. Попробуйте сами:</p>

<ul>
<li>Плагины для Firefox&nbsp;— <a href="https://addons.mozilla.org/ru/firefox/addon/4106">Operator</a> и <a href="https://addons.mozilla.org/ru/firefox/addon/2240">Tails Export</a></li>
<li>Плагин для Safari&nbsp;— <a href="http://zappatic.net/safarimicroformats/">Safari Microformats</a></li>
</ul>

<h2>Семантика! Почему это важно</h2>

<p>Суммируя всё вышесказанное, постараемся собрать все основные преимущества семантической вёрстки, как для разработчика, так и для конечного пользователя:</p>

<p>Повышение доступности сайта для альтернативных устройств просмотра. Речь идёт о всех устройствах, альтернативных привычному десктопному браузеру: мобильные и голосовые браузеры, принтеры, поисковые роботы. Для всех из них очень полезен первый уровень семантики в документе&nbsp;— т.е. логичная разметка информации:</p>

<ul>
<li>Мобильный браузер легко обработает валидный код, не переполненный презентационной разметкой, который, в большинстве случаев, окажется ещё и компактнее. В случае с предварительной обработкой страницы, как происходит при работе с <a href="http://www.operamini.com/">Opera Mini</a>, мы получаем, по меньшей мере, два преимущества: отсутствие потенциально опасной необходимости выпрямлять табличный макет для умещения его в небольшой экран устройства и такую специфическую особенность, как сворачивание меню в один блок, с возможностью его развернуть. За счёт этого экономится место на экране, а работает это всё на основе обычных списков. Также, подобная практика разметки страниц, позволяет легко писать специальные файлы стилей для мобильных устройств, на основе единого макета.</li>
<li>Голосовой браузер правильно акцентирует каждый уровень заголовков, последовательно перечислит общие элементы списка, без необходимости продираться через каждую табличную строчку и ячейку макета, мешая и так непростому использованию сайтов людьми с ограниченными возможностями.</li>
<li>Создание версии для печати превращается либо в простое отключение стилей, либо в минимальное оформление документа, который уже и так готов для удобного чтения.</li>
<li>Поисковые машины оценят вашу работу. И речь идёт не только о весе ключевых слов в заголовке <code>&lt;h1&gt;</code>, вместо несуразности <code>&lt;td class="title"&gt;</code> и общем уменьшении мусорного кода на странице, но ещё и о всё более широко внедряемой поддержке микроформатов для более точного и подробного анализа ваших документов.</li>
</ul>

<p>Использование языка в соответствии с его предназначением. Упомянутая выше концепция <a href="http://microformats.org/wiki/posh">POSH</a> (Plain Old Semantic HTML) основывается, прежде всего, на использовании встроенных возможностей языка. Прежде чем работать с HTML, неплохо было бы изучить его. К примеру, по этой статье: «<a href="http://microformatique.com/?p=82">Встроенная семантика в HTML</a>» (Built in Semantics in HTML). Вполне вероятно, что после изучения всех возможностей HTML, вам больше не захочется называть вёрстку «дивной». Иначе говоря, использование вещей по их прямому назначению&nbsp;— это всегда наиболее оптимально.</p>

<p>Самодокументируемый код. При использовании второго уровня семантики в документе, а именно&nbsp;— именования элементов в соответствии с их содержимым или назначением, ваш код начинает звучать. Теперь это не просто набор бессмысленных классов вроде <code>border4px</code> или <code>no-margin-right</code>, а полноценный скелет вашего документа, который можно легко читать по внятно именованным ключевым элементам. Это не только упрощает разработку и поддержку сайтов, но ещё и является отличной основой для единого стиля вёрстки для целой команды, чтобы <em>работа</em> с кодом не превращалась в <em>борьбу</em> с кодом.</p>

<p>Новые смысловые уровни документа, удобная работа с ними. Речь, в данном случае, идёт о микроформатах, которые позволяют извлекать и интерпретировать максимально точно размеченную информацию из вашего документа, без использования сложных морфологических алгоритмов, всего лишь на основе формализованного синтаксиса. Мгновенный доступ к нужной информации средствами браузера, плагинов, веб-сервисов или поисковых машин&nbsp;— это уже сегодняшний день. Не опоздайте на уходящий поезд.</p>

<h2>О «шмемантике»</h2>

<p>Небольшая ремарка о понятии «семантика» относительно вёрстки. Это не попытка подвести серьёзную научную базу под саму вёрстку и технологии с ней связанные, и не игры во что-то высокое, светлое и элитарное. Семантическая вёрстка&nbsp;— это всего лишь набор идеологических установок и приёмов, которые помогут вам работать более уверенно и последовательно, создавая действительно качественную разметку. Если ваша задача просто «фигачить», вам сложно будет понять, о чём я, собственно, здесь рассказываю. По этой причине публикация «<a href="http://ay4.getalime.ru/blog/2008/04/24/semantics-shmemantics/">Семантика-шмемантика</a>» (<a href="http://web.archive.org/web/20080730163823/http://ay4.getalime.ru/blog/2008/04/24/semantics-shmemantics/">её архивная версия</a>) не может вызвать какой-либо дискуссии&nbsp;— мы говорим о разных вещах, хоть и используем одинаковую терминологию.</p>

<p>Напоследок&nbsp;— серия публикаций по теме, обязательных для ознакомления:</p>

<ul>
<li>Джон Оллсоп (John Allsopp)&nbsp;— «<a href="http://microformatique.com/?p=83">Semantics in HTML</a>», «<a href="http://microformatique.com/?p=82">Built in Semantics in HTML</a>»</li>
<li>Тантек Челик (Tantek Çelik)&nbsp;— «<a href="http://tantek.com/log/2002/12.html#L20021216">A Touch of Class</a>», «<a href="http://tantek.com/log/2007/04.html#d20t0823">The Importance of Being POSH</a>»</li>
<li>Джесс Скиннер (Jesse Skinner)&nbsp;— «<a href="http://www.thefutureoftheweb.com/blog/who-will-read-your-semantic-html">Who will read your Semantic HTML?</a>»</li>
</ul>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>34</small>
				</header>
				<article id="comment-238"class="comment even thread-even depth-1">
					<p>Я постараюсь похудеть :-)</p>
					<footer>
						<a href="http://kuteev.livejournal.com" rel="external nofollow" class="url">kuteev</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-238">24 апреля ’08 в 20:16</a></time>
					</footer>
				</article>
				<article id="comment-239"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Отличное продолжение первой части, сиквел, что называется, удался. Особенно порадовала последняя глава о шмемантике. Как раз такое определение для семантической верстки и я и хотел здесь увидеть.</p>
<p>Спасибо за интересный рассказ на такую актуальную тему.</p>
					<footer>
						flexrs						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-239">24 апреля ’08 в 20:36</a></time>
					</footer>
				</article>
				<article id="comment-240"class="comment even thread-even depth-1">
					<p>По второму уровню замечу, опытные js'ники выступают против структурной разметки с использованием id в сторону class. Не менее опытные верстальщики соглашаются, но делают структуру с #header и #footer :)</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-240">24 апреля ’08 в 20:49</a></time>
					</footer>
				</article>
				<article id="comment-241"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Классная статья *THUMBS UP*</p>
<p>Не знаю может глупый вопрос, но задам) а можно где-нибудь получить полный список имен классов, используемых в hCard? достаточно много инфы просмотрел и не встречал приведенные здесь имена nickname, fn n :-[</p>
<p>Думаю в правила именования элементов стоит добавить информацию о том, какими могут быть имена (не начинаться с цифры, регистр имеет значение и т.д.). Не раз сталкивался с ситуацией, когда приходилось исправлять подобные названия: &quot;icon[1]&quot;, &quot;1-st&quot;, &quot;2-nd&quot; и т.д.</p>
<p>p.s. operator глючит в ff 2.0.0.13 - не видно некоторых надписей :-/</p>
					<footer>
						<a href="http://www.webpp.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-241">24 апреля ’08 в 21:18</a></time>
					</footer>
				</article>
				<article id="comment-242"class="comment even thread-even depth-1">
					<p><cite>а можно где-нибудь получить полный список имен классов, используемых в hCard?</cite></p>
<p>например, в <a href="http://microformats.org/wiki/hcard-cheatsheet" rel="nofollow">вики</a>, посвященной hCard</p>
<p>Или воспользоваться прекрасной <a href="http://suda.co.uk/projects/microformats/cheatsheet/microformats.cheatsheet.pdf" rel="nofollow">шпаргалкой</a> по микроформатам от Брайана Суда.</p>
<p>В примере с &quot;головостиком&quot; может стоило бы повесить класс photo на картинку?</p>
					<footer>
						Larsz						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-242">24 апреля ’08 в 21:53</a></time>
					</footer>
				</article>
				<article id="comment-243"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>В примере с "головостиком" может стоило бы повесить класс photo на картинку?</p></blockquote>
<p>Думаю, что головастик, в данном случае, не имеет никакого портретного сходства с человеком, поэтому обозначить это как фото было бы странно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-243">24 апреля ’08 в 22:44</a></time>
					</footer>
				</article>
				<article id="comment-244"class="comment even thread-even depth-1">
					<p>Спасибо, очень славная статья. Полезным оказался блок о микроформатах: всегда ценен живой пример.</p>
					<footer>
						<a href="http://neithere.net" rel="external nofollow" class="url">neithere</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-244">24 апреля ’08 в 23:29</a></time>
					</footer>
				</article>
				<article id="comment-249"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Мне очень погравилось. Настолько всё всеобъемлюще и доступно написано, что комментировать просто как бы нечего. Ни добавить, ни возразить. Пожалуйста, продолжай в том же духе.</p>
					<footer>
						uggallery						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-249">25 апреля ’08 в 14:08</a></time>
					</footer>
				</article>
				<article id="comment-250"class="comment even thread-even depth-1">
					<p>кто такой Айк? o_O</p>
					<footer>
						ogonkov						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-250">25 апреля ’08 в 15:10</a></time>
					</footer>
				</article>
				<article id="comment-251"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Айк, он же <a href="http://IKuznetsov2.moikrug.ru/" rel="nofollow">Иван Кузнецов</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-251">25 апреля ’08 в 15:29</a></time>
					</footer>
				</article>
				<article id="comment-254"class="comment even thread-even depth-1">
					<p>Очень хорошо написано, браво!</p>
<p>Обе публикации, как я понимаю, призывают верстальщиков:<br />
а) научиться разделять разметку (html) от представления (CSS)<br />
б) правильно воспринять <strong><a href="http://slovari.yandex.ru/search.xml?text=%D0%BF%D0%B0%D1%80%D0%B0%D0%B4%D0%B8%D0%B3%D0%BC%D0%B0" rel="nofollow"> парадигму</a></strong> разметки.</p>
					<footer>
						<a href="http://www.mordovorot.ru/" rel="external nofollow" class="url">Зимин Дмитрий</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-254">25 апреля ’08 в 19:43</a></time>
					</footer>
				</article>
				<article id="comment-256"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Статья, имхо, не стоит зря потраченного времени. Абсолютно, простите, ни о чем. Хотя народу видимо нравится (судя по комментам:)</p>
					<footer>
						<a href="http://alt-f4.ru" rel="external nofollow" class="url">Виктор</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-256">26 апреля ’08 в 1:02</a></time>
					</footer>
				</article>
				<article id="comment-257"class="comment even thread-even depth-1">
					<p><strong>Виктор,</strong> вот вы сами всё и сказали — статья писалась для людей, а не ради личного самолюбования. Чтобы отныне увереннее пользоваться этим термином, а при случае отсылать людей к этой публикации.</p>
<p><strong>ps:</strong> если вы готовы к дискуссии — что бы вы хотели увидеть в статье на подобную тематику?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-257">26 апреля ’08 в 1:06</a></time>
					</footer>
				</article>
				<article id="comment-259"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Аатличная статья! И, будете смеяться, но катастрофически вовремя. Теперь мне не нужно будет искать «правильные» определения к лекции, достаточно будет <cite>отсылать людей к этой публикации</cite>. %)</p>
<p>Вот ещё бы статью о подходах к именованию идентификаторов и классов в «промышленном масштабе» - и совсем бы наступил мир во всём мире.</p>
					<footer>
						<a href="http://designnotfound.ru" rel="external nofollow" class="url">Михаил</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-259">26 апреля ’08 в 13:53</a></time>
					</footer>
				</article>
				<article id="comment-260"class="comment even thread-even depth-1">
					<p>а код который рисует гугль мепс это вот этот?<br />
<a href="http://tech.bluesmoon.info/2006/01/of-microformats-and-geocoding.html" rel="nofollow">http://tech.bluesmoon.info/2006/01/of-microformats-and-geocoding.html</a></p>
<p>можно где-то посмотреть его живое применение? там какие-то не очень примеры даются</p>
					<footer>
						ogonkov						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-260">26 апреля ’08 в 19:09</a></time>
					</footer>
				</article>
				<article id="comment-262"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>pepelsbey</strong>, у вас в HTML коде ошибка (с примером vCard), …<br />
А статья интересная, Вам спасибо.</p>
					<footer>
						vashurin						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-262">28 апреля ’08 в 11:51</a></time>
					</footer>
				</article>
				<article id="comment-263"class="comment even thread-even depth-1">
					<blockquote><p>в HTML коде ошибка (с примером vCard)…</p></blockquote>
<p>Спасибо, поправил</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-263">28 апреля ’08 в 12:23</a></time>
					</footer>
				</article>
				<article id="comment-298"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Было бы супер, если бы вы сделали одну простую страничку, к которой бы прицепили тот &quot;несложный JavaScript-код&quot; и продемонстрировали вживую появление кусочка карты с указателем на ней в указанной точке.</p>
					<footer>
						Максим						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-298">9 мая ’08 в 15:33</a></time>
					</footer>
				</article>
				<article id="comment-304"class="comment even thread-even depth-1">
					<p>Ура, вот и долгожданные ссылки :)</p>
<p>&quot;Если ваша задача просто «фигачить», вам сложно будет понять, о чём я, собственно, здесь рассказываю.&quot; - сохранил цитату, отлично)</p>
<p>Третья OperaMini несворачивает списки(<br />
Может четвёртая сворачивает?</p>
					<footer>
						Del'ka						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-304">12 мая ’08 в 14:35</a></time>
					</footer>
				</article>
				<article id="comment-351"class="comment odd alt thread-odd thread-alt depth-1">
					<p>target=&quot;_blank&quot; — плохо.</p>
					<footer>
						<a href="http://seleckis.lv" rel="external nofollow" class="url">Nikita</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-351">22 мая ’08 в 1:26</a></time>
					</footer>
				</article>
				<article id="comment-423"class="comment even thread-even depth-1">
					<p>Вот теперь я совсем не понимаю, как мне верстать...<br />
Все конечно правильно тут написано, но что мне делать, когда я получаю навороченный макет страницы, где дизайнер с заказчиком развернулись, насколько их фантазии хватило и чуточку более - страницы с меняющимся фоном, с открывающимися-закрывающимися в несколько этапов блоками, у которых к тому же закругленные края, и края эти должны быть прозрачными, потому что блоки могут попадать на разный по цвету фон. И блоки к тому же должны тянуться на неопределенную высоту и ширину... И прочая, и прочая, и прочая...<br />
А тэгов в html для реализации всего этого просто нет.<br />
Как в таких условиях сделать семантически правильную верстку? А верстку все равно делать надо.</p>
					<footer>
						jalex						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-423">1 июня ’08 в 12:19</a></time>
					</footer>
				</article>
				<article id="comment-424"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Вот теперь я совсем не понимаю, как мне верстать...</p></blockquote>
<p>Боюсь, что вы восприняли статью слишком буквально и не очень внимательно прочли предпоследний абзац «О шмемантике». Я призываю лишь к тому, чтобы вы думали, что вы пишете в документе.</p>
<p>Получили навороченный макет? Поймите из каких логических частей он состоит, создайте правильный и красивый документ, а дальше уже начинайте думать как это сверстать и, при необходимости, крутите дополнительные DIV'ы и SPAN'ы для того, чтобы реализовать несколько фонов для одного объекта или справиться с багами IE6.</p>
<p>Это не жёсткие правила, это методика.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-424">1 июня ’08 в 12:33</a></time>
					</footer>
				</article>
				<article id="comment-425"class="comment even thread-even depth-1">
					<p><cite>Я призываю лишь к тому, чтобы вы думали, что вы пишете в документе.</cite></p>
<p>Если бы я не думала об этом, я не читала бы таких статей. Я прочла предпоследний абзац и никогда не ставила задачи &quot;просто фигачить&quot;. Я хочу понять для себя - как делать правильно, потому что не хочу краснеть за свою работу.</p>
<p>В любом случае, спасибо за статью.</p>
					<footer>
						jalex						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-425">1 июня ’08 в 13:10</a></time>
					</footer>
				</article>
				<article id="comment-442"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>jalex</b>, </p>
<p>сделать закруглённые (полу-)прозрачные уголки Вам поможет формат PNG. Минус — отсутствие поддержки в IE6, который и так уже давно пора пристрелить.</p>
<p>От изменения фона страниц настоятельно уговорите заказчика отказаться. <a href="http://www.artlebedev.ru/kovodstvo/sections/65/" rel="nofollow">Причины логические</a>.</p>
<p>Решение оставшихся задач должно быть проще :-). Далеко не всё решается тэгами, о чём было справедливо замечено в «шмемантике».</p>
					<footer>
						<a href="http://welimir.ru" rel="external nofollow" class="url">Максим Нечаев</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-442">8 июня ’08 в 20:12</a></time>
					</footer>
				</article>
				<article id="comment-532"class="comment even thread-even depth-1">
					<p>Вопрос по коду: пробелы в именах классов, это опечатка или фишка? </p>
<p>ps: капризы IE c прозрачностью в png можно обойти:<br />
<a href="http://webfx.eae.net/dhtml/pngbehavior/pngbehavior.html" rel="nofollow">http://webfx.eae.net/dhtml/pngbehavior/pngbehavior.html</a></p>
					<footer>
						Илья						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-532">25 июля ’08 в 19:36</a></time>
					</footer>
				</article>
				<article id="comment-534"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну, если вы не знаете, что такое <a href="http://www.quirksmode.org/css/multipleclasses.html" rel="nofollow">пробелы в именах классов</a>, то разбираться с PNG-24 в IE вам ещё рановато ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-534">26 июля ’08 в 13:30</a></time>
					</footer>
				</article>
				<article id="comment-1849"class="comment even thread-even depth-1">
					<p>Я тут искал как изменить width у label и заметил что вы в этом блоге у комментариев решили эту проблему довольно неказистым способом (поставили текст у label за input-ами), это довольно неплохо смотрится у вас в блоге. Но все же... Как поставить ширину для этих лайблов? Да чтоб по кроссбраузернее.</p>
					<footer>
						Wincert						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-1849">13 ноября ’08 в 20:42</a></time>
					</footer>
				</article>
				<article id="comment-3814"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, а можно ли вкладывать внутрь блоков с микроформатами свои блоки?<br />
Как например тут вложен</p>
<pre>
<code>&lt;span class=&quot;vevent-title&quot;&gt;открытие: &lt;/span&gt;</code>
</pre>
<pre>
<code>&lt;div class=&quot;vevent&quot;&gt;</code>
<code>    &lt;span class=&quot;vevent-title&quot;&gt;открытие: &lt;/span&gt;</code>
<code>    &lt;abbr class=&quot;dtstart&quot; title=&quot;20100510T1000&quot;&gt;</code>
<code>       10 мая в 10:00, 2010 год.</code>
<code>    &lt;/abbr&gt;</code>
<code>    &lt;span class=&quot;vevent-title&quot;&gt;закрытие: &lt;/span&gt;</code>
<code>    &lt;abbr class=&quot;dtend&quot; title=&quot;20100513T2000&quot;&gt;</code>
<code>        13 мая в 20:00, 2010 год.</code>
<code>    &lt;/abbr&gt;</code>
<code>    &lt;a class=&quot;url&quot; href=&quot;yandex.ru&quot;&gt;</code>
<code>        &lt;span class=&quot;summary&quot;&gt;название конференции&lt;/span&gt;</code>
<code>    &lt;/a&gt;</code>
<code>    &lt;span class=&quot;location&quot;&gt;Москва&lt;/span&gt;</code>
<code>    &lt;div class=&quot;description&quot;&gt;описание конференции&lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
</pre>
					<footer>
						Сергей Серов						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-3814">30 апреля ’09 в 18:31</a></time>
					</footer>
				</article>
				<article id="comment-3815"class="comment even thread-even depth-1">
					<p>Главное, чтобы атомарные микроформаты вроде location содержали подходящий по смыслу текст. А в обёрточные элементы вроде vevent можно вкладывать что угодно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-3815">30 апреля ’09 в 18:44</a></time>
					</footer>
				</article>
				<article id="comment-3941"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Раньше никогда не задумывался и не знал о семантике. Теперь буду стараться делать все более "правильно"</p>
					<footer>
						<a href="http://alexpts.ru" rel="external nofollow" class="url">alexpts</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-3941">11 июня ’09 в 20:16</a></time>
					</footer>
				</article>
				<article id="comment-4720"class="comment even thread-even depth-1">
					<p>жалко, что ссылка на «Семантика-шмемантика» уже битая :(</p>
					<footer>
						<a href="http://lamp-dev.ru" rel="external nofollow" class="url">Иван</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-4720">3 июня ’10 в 13:34</a></time>
					</footer>
				</article>
				<article id="comment-4721"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Иван, я обновил пост ссылкой на архивную версию статьи про «Шмемантику».</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-4721">3 июня ’10 в 13:56</a></time>
					</footer>
				</article>
				<article id="comment-4733"class="comment even thread-even depth-1">
					<p>А я вот искал и не нашёл такого микроформата которые бы сделал пагинацию семантической. Неужели его в самом деле нет, рецепты есть, а пагинации нет? Это было бы так здорово, что бы браузеры понимали пагинацию, и можно было бы пролистывать страницы без мышки. А до ближайшего будущего хватило бы написать всего один js который навешивал горячие клавиши.</p>
					<footer>
						<a href="http://www.google.com/profiles/dzyanis" rel="external nofollow" class="url">Dzyanis Kuzmenka</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-4733">19 июля ’10 в 21:01</a></time>
					</footer>
				</article>
				<article id="comment-4734"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Денис, я боюсь, что вы не до конца поняли назначение микроформатов. Для оформления постраничной навигации вполне верно использовать нумерованный список <code>&lt;ol&gt;</code>, а дополнительные спецэффекты, как вы правильно заметили, навешивать при помощи JS.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-24T18:00:09+00:00"><a href="index.html#comment-4734">20 июля ’10 в 0:55</a></time>
					</footer>
				</article>
			</section>
		</article>
	</div>
	<div class="footer-wrap">
		<footer class="footer" role="contentinfo">
			<p><a href="/author/">Вадим Макеев</a> © 2005—2016</p>
		</footer>
	</div>
	<script src="https://yandex.st/jquery/1.9.1/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="https://pepelsbey.net/static/j/jquery.js">\x3C/script>');</script>
	<script src="/static/j/script.js"></script>
	<!-- Yandex -->
	<script>(function(b,c,a){(c[a]=c[a]||[]).push(function(){try{c.yaCounter155532=new Ya.Metrika({id:155532})}catch(a){}});var e=b.getElementsByTagName('script')[0],d=b.createElement('script'),a=function(){e.parentNode.insertBefore(d,e)};d.async=!0;d.src='//mc.yandex.ru/metrika/watch.js';'[object Opera]'==c.opera?b.addEventListener('DOMContentLoaded',a):a()})(document,window,'yandex_metrika_callbacks');</script><noscript><img src="https://mc.yandex.ru/watch/155532" alt=""></noscript>
	<!-- 19 & 0,522 -->
</body>
</html>
