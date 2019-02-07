<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Семантическая вёрстка. Часть первая — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Семантическая вёрстка. Часть первая</a></h1>
				<time pubdate datetime="2008-04-22T15:01:35+00:00">22 апреля ’08</time>
			</header>
			<p>Современный взгляд на организацию кода. По материалам доклада «Семантическая вёрстка» на конференциях <a href="http://www.client2007.ru/">ClientSide&nbsp;2007</a> и <a href="http://uaweb.in.ua/">UA&nbsp;Web&nbsp;2008</a>.</p>

<p>Начало. Продолжение&nbsp;— «<a href="/2008/04/semantic-coding-2/">Семантическая вёрстка. Часть вторая</a>».</p>

<p>Прежде всего, давайте договоримся: семантическая вёрстка&nbsp;— это не гербалайф. Она не поможет вам в одночасье научиться верстать в восемь раз быстрее, IE6 вдруг не перестанет бажить, да и волосы не станут гладкими и шелковистыми, скорее наоборот. Более того, использование данного подхода потребует от вас бóльших умственных усилий. Как на освоение методики, так и в работе с ней.</p>

<p>В чём же смысл? Зачем я предлагаю использовать подход, который, на первый взгляд, только усложняет жизнь? Просто поверьте&nbsp;— оно того стоит, но обо всём по порядку.</p>

<h2>Семантика?</h2>

<blockquote><p>Семантика (фр. sémantique от греч. σημαντικός&nbsp;— обозначающий)</p></blockquote>

<p>Понятие «семантика» пришло к нам из лингвистики в несколько сокращённом значении для того, чтобы можно было применить его к HTML-вёрстке. Прежде всего, семантика в вёрстке&nbsp;— это совокупность смысловых отношений, возникающих в документе. Однако для существования таких отношений необходим документ, который возникает благодаря внедрению HTML-разметки в простой текст.</p>

<h2>Сайт, страница, документ</h2>

<p>Для более уверенного разговора на эту тему, будет полезно договориться о терминах:</p>

<ul>
<li>Сайт&nbsp;— это совокупность страниц</li>
<li>Страница&nbsp;— это то, что увидел пользователь, после применения к документу стилей и JavaScript</li>
<li>Документ&nbsp;— это то, что получает браузер, поисковик или пользователь, у которого отключены или не подгрузились стили</li>
</ul>

<p>Таким образом, для разговора о семантике нам необходим валидный, семантически верно размеченный HTML-документ.</p>

<h2>Смысловые связи</h2>

<p>Откуда же берутся пресловутые смысловые связи, составляющие основу семантики? Если бы речь шла о лингвистике, то следующий пример легко бы продемонстрировал смысловую связь между левой и правой частями предложения: <em>означающее</em> и <em>означаемое</em>, отношение которых рождает <em>значение</em>.</p>

<blockquote><p>Семантика&nbsp;— совокупность смысловых отношений.</p></blockquote>

<p>Однако мы ведём речь о семантике относительно HTML-вёрстки, поэтому разметим указанный пример при помощи элемента <code>&lt;dl&gt;</code>, предназначенного для создания списка определений (definition list).</p>

<pre><code>&lt;dl&gt;</code>
<code>    &lt;dt&gt;Семантика&lt;/dt&gt;</code>
<code>    &lt;dd&gt;совокупность смысловых отношений.&lt;/dd&gt;</code>
<code>&lt;/dl&gt;</code></pre>

<p>Итак, перед нами термин <code>&lt;dt&gt;</code> (definition term) и его определение <code>&lt;dd&gt;</code> (definition description), которые связаны теми же смысловыми отношениями, что и <em>означающее</em> и <em>означаемое</em> в изначальном предложении.</p>

<p>Однако особенность нашей ситуации состоит в том, что для существования подобных связей нам не требуется осмысленного предложения. Все смысловые отношения продиктованы нам контейнером <code>&lt;dl&gt;</code>. По этой причине, текст внутри элементов <code>&lt;dt&gt;</code> и <code>&lt;dd&gt;</code> может быть абсолютно любым:</p>

<pre><code>&lt;dl&gt;</code>
<code>    &lt;dt&gt;.........&lt;/dt&gt;</code>
<code>    &lt;dd&gt;.................................&lt;/dd&gt;</code>
<code>&lt;/dl&gt;</code></pre>

<p>Создавать логически стройный текст документа&nbsp;— это забота редактора, наше же дело&nbsp;— формировать абстрактную логику документа. Из чего следует, что семантические связи в документе существует только между HTML-элементами, а не между отдельными словами или частями текста.</p>

<h2>Уровни семантики</h2>

<p>Создание семантически верного документа&nbsp;— это не только использование HTML-элементов по назначению. Существует три уровня существования семантики в HTML-документе&nbsp;— от самого простого к более сложному:</p>

<ul>
<li>Применение HTML-элементов</li>
<li>Именование элементов</li>
<li>Комбинация именованных элементов</li>
</ul>

<p>Рассмотрим, в качестве примера всех трёх уровней, разметку простой информации:</p>

<pre><code>Алексей Рыбаков, alex@example.com</code></pre>

<p>Для начала правильно разметим информацию при помощи HTML-элементов. Озаглавим персону элементом <code>&lt;h3&gt;</code> и отметим <em>адрес</em> электронной почты при помощи элемента <code>&lt;address&gt;</code>:</p>

<pre><code>&lt;h3&gt;Алексей Рыбаков&lt;/h3&gt;</code>
<code>&lt;address&gt;alex@example.com&lt;/address&gt;</code></pre>

<p>Затем, в случае необходимости дополнительного оформления элементов, правильно назовём классы для <em>имени</em> (name) и <em>электронной почты</em> (email):</p>

<pre><code>&lt;h3 class="name"&gt;Алексей Рыбаков&lt;/h3&gt;</code>
<code>&lt;address class="email"&gt;alex@example.com&lt;/address&gt;</code></pre>

<p>И, наконец, усложним разметку при помощи микроформата <a href="http://microformats.org/wiki/hcard">hCard</a> настолько, что строка текста превратится в полноценную визитную карточку. Корневой класс <code>vcard</code>, точное указание на <em>имя</em> (given-name), <em>фамилию</em> (family-name) и <em>электронную почту</em> (email) персоны:</p>

<pre><code>&lt;div class="vcard"&gt;</code>
<code>    &lt;h3 class="fn n"&gt;</code>
<code>        &lt;span class="given-name"&gt;Алексей&lt;/span&gt;</code>
<code>        &lt;span class="family-name"&gt;Рыбаков&lt;/span&gt;</code>
<code>    &lt;/h3&gt;</code>
<code>    &lt;address class="email"&gt;alex@example.com&lt;/address&gt;</code>
<code>&lt;/div&gt;</code></pre>

<p>А теперь рассмотрим подробнее каждый из уровней.</p>

<h2>Первый уровень семантики: применение HTML-элементов</h2>

<p>С чего же мы взяли, что, к примеру, элемент <code>&lt;h1&gt;</code> должен быть заголовком первого уровня, а <code>&lt;ul&gt;</code> неупорядоченным списком? Информация о всех элементах той версии языка, с которой вы работаете, содержится в DTD (Document Type Definition), либо в спецификации соответствующей версии.</p>

<p>Перед вами фрагмент DTD <a href="http://www.w3.org/TR/html401/">спецификации HTML 4.01</a>:</p>

<pre><code>&lt;!ENTITY % heading "H1|H2|H3|H4|H5|H6"&gt;</code>
<code>&lt;!--</code>
<code>There are six levels of headings from H1 (<em>the most important</em>)</code>
<code>to H6 (<em>the least important</em>).</code>
<code>--&gt;</code>
<code>&lt;!ELEMENT (%heading;) - - (%inline;)* -- heading --&gt;</code>
<code>&lt;!ATTLIST (%heading;)</code>
<code>%attrs; -- %coreattrs, %i18n, %events --</code>
<code>&gt;</code></pre>

<p>Обратите внимание на комментарий:</p>

<blockquote><p>Существуют шесть уровней заголовков: от H1 (самого значимого) до H6 (наименее значимого).</p></blockquote>

<p>Таким образом, получается, что все особенности применения элемента и смысловые связи, которые образует с остальными элементами, расписаны в спецификации, остаётся только научиться использовать эту информацию. Конечно, такие подробности удобнее всего выяснять в полной спецификации, но наличие ссылки на DTD в <code>&lt;DOCTYPE&gt;</code> вашего документа, теперь становится ещё более очевидным.</p>

<p>Подобное использование HTML-элементов по их назначению, получило название <a href="http://microformats.org/wiki/posh">POSH</a> (Plain Old Semantic HTML)&nbsp;— проще говоря, «старый добрый семантический HTML».</p>

<p>Рассмотрим пример типичной «дивной» вёрстки:</p>

<pre><code>&lt;div id="menu"&gt;</code>
<code>    &lt;a href="#"&gt;Колбаса&lt;/a&gt;</code>
<code>    &lt;br/&gt;</code>
<code>    &lt;a href="#"&gt;Макароны&lt;/a&gt;</code>
<code>    &lt;br/&gt;</code>
<code>    &lt;a href="#"&gt;Тушёнка&lt;/a&gt;</code>
<code>&lt;/div&gt;</code></pre>

<p>Формально, такой код подходит популярному нынче требованию «дивной» или «бестабличной» вёрстки. Таблиц нет, див есть и даже внятно именован, код вполне может нормально отображаться во всех браузерах. Чего же боле?</p>

<p>Давайте всё же попробуем разметить этот текст в соответствии с той информацией, что в нём содержится. Включаем мозг и анализируем, что же мы видим:</p>

<ul>
<li>Корневой <em>группирующий</em> элемент</li>
<li><em>Неупорядоченный</em> список продуктов</li>
<li>Элемент <em>визуального</em> форматирования&nbsp;— <code>&lt;br&gt;</code></li>
</ul>

<p>Исходя из увиденного, практически не остаётся сомнений, каким образом разметить эту информацию: неупорядоченный список <code>&lt;ul&gt;</code> c элементами списка <code>&lt;li&gt;</code> внутри, а визуальное форматирование&nbsp;— в CSS.</p>

<pre><code>&lt;ul id="menu"&gt;</code>
<code>    &lt;li&gt;&lt;a href="#"&gt;Колбаса&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href="#"&gt;Макароны&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href="#"&gt;Тушёнка&lt;/a&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code></pre>

<p>Но это довольно очевидный пример, как и табличные макеты старой школы вёрстки. В то же время, существуют пограничные ситуации, когда принятие решения о разметке зависит от визуальных особенностей вывода информации и общих идеологических склонностей верстальщика. Кто-то, в отдельно взятой ситуации, использует неупорядоченный список и заголовки, кто-то список определений, а кто-то, нисколько не стесняясь, влепит таблицу.</p>

<p>В качестве примера можно привести ситуацию с разметкой подобной информации:</p>

<pre><code>Колбаса 100 гр. 250 руб.</code>
<code>Макароны 100 гр. 18 руб.</code>
<code>Тушёнка 100 гр. 75 руб.</code></pre>

<p>С одной стороны&nbsp;— это типичная таблица:</p>

<pre><code>&lt;table&gt;</code>
<code>&lt;tr&gt;</code>
<code>    &lt;td&gt;Колбаса&lt;/td&gt;</code>
<code>    &lt;td&gt;100 гр.&lt;/td&gt;</code>
<code>    &lt;td&gt;250 руб.&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;tr&gt;</code>
<code>    &lt;td&gt;Макароны&lt;/td&gt;</code>
<code>    &lt;td&gt;100 гр.&lt;/td&gt;</code>
<code>    &lt;td&gt;18 руб.&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;tr&gt;</code>
<code>    &lt;td&gt;Тушёнка&lt;/td&gt;</code>
<code>    &lt;td&gt;100 гр.&lt;/td&gt;</code>
<code>    &lt;td&gt;75 руб.&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;/table&gt;</code></pre>

<p>У нас есть ряды, есть столбцы со схожими типами значений. И неплохо было сделать этой таблице шапку с <code>&lt;th&gt;</code> для выделения столбцов. Но потом на ваши попытки сделать логичную разметку смотрит дизайнер и наотрез отказывается крутить какую-то шапку списку продуктов, а вес и цена должны, оказывается идти тут же, через пробел, а не в каких-то ячейках.</p>

<p>И тут возникает понимание, что дизайнер, в общем-то, прав:</p>

<ul>
<li>Информации довольно мало, восприятие не затруднено объёмом информации</li>
<li>Структурная связность в строки или столбцы минимальная</li>
<li>Наконец, это просто список продуктов, а не таблица значений</li>
</ul>

<p>И дальше? А дальше уже решать вам, в каждой ситуации. Остаётся только добавить, что таблица&nbsp;— это развившийся список, в который внедрены дополнительные механизмы, облегчающие поиск и визуальную группировку данных по строкам и столбцам. Если эти механизмы не работают, а вам всего лишь нужно провести горизонтальные линии у каждого пункта, то задумайтесь&nbsp;— таблица ли это? И так далее… Интересно, правда?</p>

<p><a href="../semantic-coding-2/">Продолжение следует…</a></p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>41</small>
				</header>
				<article id="comment-189"class="comment even thread-even depth-1">
					<p>Последнее я бы всё-таки сделал таблицей. Ну не список это.</p>
					<footer>
						<a href="http://rmcreative.ru/" rel="external nofollow" class="url">Sam</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-189">22 апреля ’08 в 15:30</a></time>
					</footer>
				</article>
				<article id="comment-190"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>я бы всё-таки сделал таблицей</p></blockquote>
<p>Вот и я говорю — сплошная дискуссия ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-190">22 апреля ’08 в 15:33</a></time>
					</footer>
				</article>
				<article id="comment-191"class="comment even thread-even depth-1">
					<p>Однозначно список определений )</p>
<p>Колбаса - dt, цена и вес - dd, dd. Но холиварить не будем все же ;)</p>
					<footer>
						<a href="http://www.webmakerslounge.com" rel="external nofollow" class="url">CurlyBrace</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-191">22 апреля ’08 в 16:50</a></time>
					</footer>
				</article>
				<article id="comment-192"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо. А последнее конечно список :)</p>
					<footer>
						Миша						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-192">22 апреля ’08 в 16:58</a></time>
					</footer>
				</article>
				<article id="comment-193"class="comment even thread-even depth-1">
					<p>ура, наконец!</p>
<p>а я всё ссылки жду обещанные в конце доклада (на Джона Олсона и прочее что так быстро промелькнуло)</p>
					<footer>
						Del'ka						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-193">22 апреля ’08 в 17:51</a></time>
					</footer>
				</article>
				<article id="comment-194"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Если допустить, что последнее - таблица, возможно таки стоит сделать шапку, но c display:none<br />
Как в таком случае с семантикой? :)</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-194">22 апреля ’08 в 18:09</a></time>
					</footer>
				</article>
				<article id="comment-195"class="comment even thread-even depth-1">
					<p>Я встречал решения, в которых, в угоду семантике, использовались скрытые блоки. И они мне всё-таки кажутся излишним фанатизмом. Для начала стоит определить цель — если вы скрываете данные (заголовок таблицы) от пользователя, то рассчитываете, что их кто-то прочитает — либо читалка сайтов, либо поисковик, либо они будут видны в представлении с отсутствующими/другими стилями.</p>
<p>В общем, сплошная неоднозначность, идущая из компромисса между лёгкостью и логичностью кода ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-195">22 апреля ’08 в 18:26</a></time>
					</footer>
				</article>
				<article id="comment-196"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Видимо, фанатизмом в какой-то мере страдаю — периодически делаю в формах legend с display:none (оно в links красиво смотрится, да).<br />
Даже помню откуда началось, с <a href="http://webstandards.org" rel="nofollow">http://webstandards.org</a><br />
А вообще, помню, на хабре был интересный топик, календарь таблица или список.</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-196">22 апреля ’08 в 19:15</a></time>
					</footer>
				</article>
				<article id="comment-197"class="comment even thread-even depth-1">
					<p>Фанатизм в нашем деле скорее полезен ;)<br />
А календарь, имхо, всё-таки таблица, ибо существует полезная вертикальная выборка по дням недели.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-197">22 апреля ’08 в 19:30</a></time>
					</footer>
				</article>
				<article id="comment-198"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Если в перечне несколько сущностей и их атрибуты - это dl. Но если атрибуты сами становятся сущностями, через которые можно что-то определять, тут уже таблица. То есть таблица - более сложная семантическая система, в ней как бы две смысловые плоскости (например, таблица следования поездов или таблица Пифагора).<br />
Поэтому по логике пример с продуктами - все-таки таблица. Просто потому что выбирать здесь можно и по весу, и по цене.<br />
С другой стороны, это все может быть не так важно :)).</p>
					<footer>
						<a href="http://darksidesign.com" rel="external nofollow" class="url">Евгений</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-198">22 апреля ’08 в 20:57</a></time>
					</footer>
				</article>
				<article id="comment-200"class="comment even thread-even depth-1">
					<p>Ох, чёрт, забыл, что тэги не прокатят.</p>
<p>Почему не:</p>
<pre>
<code>&lt;div class="vcard"&gt;</code>
<code>&lt;h3 class="fn"&gt;Алексей Рыбаков&lt;/h3&gt;</code>
<code>&lt;address class="email"&gt;alex@example.com&lt;/address&gt;</code>
<code>&lt;/div&gt;</code>
<code>?</code>
</pre>
<p>Последнее я бы сделал так:</p>
<pre>
<code>&lt;dl&gt;</code>
<code>&lt;dt&gt;Колбаса&lt;/dt&gt;</code>
<code>&lt;dd&gt;</code>
<code>&lt;span class="quantity"&gt;100 гр.&lt;/span&gt;</code>
<code>&lt;span class="price"&gt;250 руб.&lt;/span&gt;</code>
<code>&lt;/dd&gt;</code>
<code>...</code>
<code>&lt;/dl&gt;</code>
</pre>
					<footer>
						<a href="http://ioracle.ru" rel="external nofollow" class="url">Oracle</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-200">22 апреля ’08 в 23:28</a></time>
					</footer>
				</article>
				<article id="comment-201"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Почему не: &lt;div class="vcard"&gt;…</p></blockquote>
<p>Потому, что я демонстрировал второй уровень семантики, а дальше — уже третий, с микроформатами.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-201">22 апреля ’08 в 23:32</a></time>
					</footer>
				</article>
				<article id="comment-202"class="comment even thread-even depth-1">
					<p>А есть разница между версткой и разметкой? На мой взгляд, есть. Не подумайте, что я цепляюсь к словам, просто, делаю доклад в университете на эту тему и довольно долго думал на названием. В итоге решил, что разметка - более уместное здесь слово, т.к. речь идет только о смысле, структуре, а не об отображении.</p>
					<footer>
						<a href="http://quwiero.livejournal.com" rel="external nofollow" class="url">quwiero</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-202">23 апреля ’08 в 0:16</a></time>
					</footer>
				</article>
				<article id="comment-203"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Согласен, с тем, что «разметка» звучит максимально точно, однако, на мой взгляд, слишком сухо и академично. В широкое употребление уже вошло понятие «вёрстка» и мне хотелось, чтобы название звучало максимально популярно и доступно.</p>
<p>К тому же, во второй части пойдёт речь о именовании элементов и их комбинации, а это уже не разметка как таковая.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-203">23 апреля ’08 в 0:23</a></time>
					</footer>
				</article>
				<article id="comment-204"class="comment even thread-even depth-1">
					<p>Согласен. Спасибо! Ждем продолжения.</p>
					<footer>
						<a href="http://quwiero.livejournal.com" rel="external nofollow" class="url">quwiero</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-204">23 апреля ’08 в 0:58</a></time>
					</footer>
				</article>
				<article id="comment-210"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Последний пример выглядит вырванным из контекста. Ведь если строк больше, тогда появляется <em>необходимость</em> в семантике и таблице. А с приведённым количеством строк таблица, естественно, бессмысленна. Зато осмысленным может выглядеть список следующего вида:</p>
<pre>
<code>&lt;ul class="buy-list"&gt;</code>
<code>&lt;li&gt;Колбаса — &lt;span class="weight"&gt;100 гр.&amp;lt/span&gt; за &lt;span class="price"&gt;250 руб.&lt;/span&gt;&lt;/li&gt;</code>
<code>&lt;li&gt;Макароны — &lt;span class="weight"&gt;100 гр.&amp;lt/span&gt; за &lt;span class="price"&gt;18 руб.&amp;lt/span&gt;&lt;/li&gt;</code>
<code>&lt;li&gt;Тушёнка — &lt;span class="weight"&gt;100 гр.&amp;lt/span&gt; за &lt;span class="price"&gt;75 руб.&amp;lt/span&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code>
</pre>
<p>Я позволил себе немного его подрихтовать - иначе он выглядит не по-человечьи.  Я не использую dl-dd-dt потому что в данном случае мы скорее имеем дело с неупорядоченным потоком сознания (ну и нет здесь связи вида определение - раскрытие смысла). Опять же - так этот список выглядеть будет тогда, когда есть <em>необходимость</em> в семантике.</p>
<p>Вадим, вот вопрос необходимости семантики - он ведь важный. А действительно, зачем семантика? Кроме стандартных преимуществ. Надо подумать.</p>
					<footer>
						jahson						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-210">23 апреля ’08 в 8:49</a></time>
					</footer>
				</article>
				<article id="comment-213"class="comment even thread-even depth-1">
					<p>Грамота.ру на запрос определения &quot;таблица&quot; предложила посмотреть определение &quot;список&quot;.  Поиздевалась, ага :)</p>
					<footer>
						<a href="http://www.mordovorot.ru/" rel="external nofollow" class="url">Зимин Дмитрий</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-213">23 апреля ’08 в 10:03</a></time>
					</footer>
				</article>
				<article id="comment-219"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Последний пример выглядит вырванным из контекста</p></blockquote>
<p>Я привёл его именно так не для того, чтобы устраивать холивара — как его правильнее сверстать, а для того, чтобы продемонстрировать, что бывают неоднозначные ситуации и, в зависимости от контекста, приходится принимать соответствующие решения.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-219">23 апреля ’08 в 15:30</a></time>
					</footer>
				</article>
				<article id="comment-220"class="comment even thread-even depth-1">
					<p>;)<br />
Холиворами тут не пахнет.</p>
					<footer>
						jahson						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-220">23 апреля ’08 в 15:41</a></time>
					</footer>
				</article>
				<article id="comment-225"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я бы всё-таки сделал так...</p>
<pre>
<code>&lt;table&gt;</code>
<code>&lt;tr&gt;</code>
<code>&lt;th scope="row"&gt;Колбаса&lt;/th&gt;</code>
<code>&lt;td&gt;100 гр.&lt;/td&gt;</code>
<code>&lt;td&gt;250 руб.&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;tr&gt;</code>
<code>&lt;th scope="row"&gt;Макароны&lt;/th&gt;</code>
<code>&lt;td&gt;100 гр.&lt;/td&gt;</code>
<code>&lt;td&gt;18 руб.&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;tr&gt;</code>
<code>&lt;th scope="row"&gt;Тушёнка&lt;/th&gt;</code>
<code>&lt;td&gt;100 гр.&lt;/td&gt;</code>
<code>&lt;td&gt;75 руб.&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;/table&gt;</code>
</pre>
<p>Хотя, конечно, встречаются такие ситуации, когда сложно с чем-то конкретным определиться.<br />
Я обычно делаю из того рассчета во что размечаемое в принципе может развиться в будущем.</p>
<p>Интереснее был бы пример с чем-то вроде отдельно стоящих блоков с неким контентом внутри, когда нету даже четко выраженной иерархии что с чем кто от чего. Или, например, пример с не самыми простыми формами. Помнится я впал в экстаз от вот этой формы :)<br />
<a href="http://xhtml.ru/2005/11/28/css-forms/" rel="nofollow">http://xhtml.ru/2005/11/28/css-forms/</a></p>
					<footer>
						ogonkov						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-225">23 апреля ’08 в 20:05</a></time>
					</footer>
				</article>
				<article id="comment-226"class="comment even thread-even depth-1">
					<blockquote><p>Помнится я впал в экстаз от вот этой формы</p></blockquote>
<p>Ну, ничего экстатического в этих формах нет, но я согласен, что вёрстка сложных форм — это отдельная весьма интересная тема, которую в своё время поднял Алексей Рыбаков: «Создаём сложные формы без таблиц» — <a href="http://flack.ru/2006/02/08/tableless-complicated-forms/" rel="nofollow">часть первая</a>, <a href="http://flack.ru/2006/03/10/tableless-complicated-forms-reloaded/" rel="nofollow">часть вторая</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-226">23 апреля ’08 в 20:11</a></time>
					</footer>
				</article>
				<article id="comment-231"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Мне кажется, здесь лучше использовать список. Т.к. информации довольно мало и смысловая нагрузка минимальна.</p>
<p>Меня вот мучает вопрос. А какой практический смысл в семантической верстке? Нет, мне очень нравится вся эта правильность, но кому это в итоге будет полезно? Автора в рассчет не берем )</p>
					<footer>
						flexrs						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-231">24 апреля ’08 в 12:27</a></time>
					</footer>
				</article>
				<article id="comment-232"class="comment even thread-even depth-1">
					<p><strong>flexrs,</strong> об этом будет рассказано во второй части, она будет более практическая.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-232">24 апреля ’08 в 12:31</a></time>
					</footer>
				</article>
				<article id="comment-234"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>pepelsbey</b>, замечательно. Тогда еще один вполне закономерный вопрос: когда?</p>
					<footer>
						flexrs						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-234">24 апреля ’08 в 13:06</a></time>
					</footer>
				</article>
				<article id="comment-235"class="comment even thread-even depth-1">
					<p><strong>flexrs,</strong> думаю, что сегодня-завтра.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-235">24 апреля ’08 в 13:08</a></time>
					</footer>
				</article>
				<article id="comment-245"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Не вдаваясь в практику, и только с точки зрения теории, пример с таблицей как раз не так уж и неоднозначен (насколько семантика вообще может быть однозначной). То, что там написано, таки стоит делать таблицей, потому что это таблица. А неоднозначности я бы описал так:</p>
<p>- Наличие &lt;th&gt; у этой таблицы -- вопрос на самом деле не презентационный, он решается еще на уровне контента. Если автор контента посчитал, что написанное очевидно без аннотаций, значит заголовков у столбцов нет. И это никак не связано с желанием дизайнера их не отображать.</p>
<p>- Для отображения не по ячейкам в CSS есть замечательное срдество: table, tr {display: block;} td {display: inline;}</p>
<p>Последнее, очевидно, убивается наличием IE, но я специально хотел прокомментировать все только с точки зрения теории :-)</p>
					<footer>
						<a href="http://softwaremaniacs.org/blog/" rel="external nofollow" class="url">Иван Сагалаев</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-245">25 апреля ’08 в 11:47</a></time>
					</footer>
				</article>
				<article id="comment-247"class="comment even thread-even depth-1">
					<p>Автор, сделай CSS для принтера. Печатать твои статьи невозможно!!!</p>
					<footer>
						<a href="http://svetlyak.ru" rel="external nofollow" class="url">Big 40wt Svetlyak</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-247">25 апреля ’08 в 12:42</a></time>
					</footer>
				</article>
				<article id="comment-248"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Автор, сделай CSS для принтера…</p></blockquote>
<p>Понял, <del>исправлюсь</del> исправился.</p>
<blockquote><p>таки стоит делать таблицей, потому что это таблица</p></blockquote>
<p>Честно говоря, я бы тоже сделал это таблицей, приведя всё к нужному виду простыми CSS-свойствами. Но высокая идея семантической теории очень часто зарубается на корню суровой практикой. Дай бог нам гибкий CSS3 и хороших браузеров, и мы сделаем всё красиво.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-248">25 апреля ’08 в 13:11</a></time>
					</footer>
				</article>
				<article id="comment-253"class="comment even thread-even depth-1">
					<p><b>pepelsbey</b>, а стоит ли игра свеч при нынешнем развитии HTML?</p>
<p>Вот такая философская задачка (на примере такого текста):</p>
<p><cite>Я вышел из автобуса, зашел в магазин, купил: хлеба, молока, колбасы и пошел домой.</cite></p>
<p>С точки зрения логики и русского языка: «хлеба, молока, колбасы» - это список, внутри параграфа. А с точки зрения меня, как верстальщика HTML не валидная  (да и не семантическая по меркам HTML) конструкция: список, внутри параграфа...</p>
<p>PS пример про колбасу, макароны и тушенку из статьи, лично я б сверстал таблицей. </p>
<p>PS PS <b>pepelsbey</b>, в предыдущем сообщении тег &lt;B&gt; не закрыл, удалите все сообщение, а то совсем не красивое оформление...</p>
					<footer>
						vashurin						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-253">25 апреля ’08 в 15:36</a></time>
					</footer>
				</article>
				<article id="comment-268"class="comment odd alt thread-odd thread-alt depth-1">
					<p>ИМХО табличные данные - всегда надо верстать в таблице. </p>
<p>Много данных, мало данных, и как это смотриться - по-хорошему это вопросы представления(дизайна), а не содержания(разметки). </p>
<p>Корень зла, как мне кажется в том, что сделать реально семантическую верстку на HTML+CSS - нельзя.  Набор семантических элементов html крайне скуден, он заставляет &quot;натягивать&quot; наши обьекты реального мира на семантику имеющихся элементов. Да и CSS мало что может....</p>
<p>PS:  XML и XSLT  спасут мир.</p>
					<footer>
						<a href="http://nomagic.ru" rel="external nofollow" class="url">Константин</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-268">29 апреля ’08 в 22:26</a></time>
					</footer>
				</article>
				<article id="comment-269"class="comment even thread-even depth-1">
					<p><strong>Константин,</strong> XML и XSLT убьют интернет в современном понимании. А насчёт таблиц/нетаблиц — мне кажется, что вы неправы. Существуют пограничные случаи, когда использование таблицы остаётся только на усмотрение верстальщика.</p>
<p>А насчёт скудности HTML — я не зря писал про второй и третий уровни семантики.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-269">29 апреля ’08 в 23:50</a></time>
					</footer>
				</article>
				<article id="comment-270"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Большое спасибо, Вадим! Замечательная статья :)<br />
Бегу читать продолжение…</p>
					<footer>
						Петр						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-270">30 апреля ’08 в 16:58</a></time>
					</footer>
				</article>
				<article id="comment-273"class="comment even thread-even depth-1">
					<p>Ну вот так всегда - захочешь сократить коммент - придется писать второй =)</p>
<p>Проблема HTML не в том что тегов мало,... а в том что они создавались с подглядыванием на печатное дело. Поэтому каждый тег несет свою собственную печатную семантику . Можно создать очень большое количество уровней абстракции поверх нижнего слоя, но вам все равно придется платить за это тем, что размещая на странице трактор (или визитку),  его телом будет блок, его характеристики будут списком, название заголовком,  надпись на боку - параграфом. .... </p>
<p>Можно обмануть нормальных пользователей, написав соответствующие стили изменив стили отображения элементов так, чтобы они казались чем-то еще. А как мы будем обманывать устройства для чтения с экрана?  Скажем чтобы  эти параграфы читало нормально - а  вот эти параграфы - это совсем не параграфы - это на самом деле определения характеристик трактора! </p>
<p>А потом когда обманем этих....придут следующие...и тд и тп.... Стоит ли начинать?</p>
<p>PS: Если следовать букве семантики - пограничных случаев не бывает. Если следовать здравому смыслу - их более чем предостаточно.</p>
					<footer>
						<a href="http://nomagic.ru" rel="external nofollow" class="url">Константин</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-273">30 апреля ’08 в 21:29</a></time>
					</footer>
				</article>
				<article id="comment-288"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Браво! Хорошо разложено и разжёвано.</p>
					<footer>
						<a href="http://www.vsevsegdaok.net" rel="external nofollow" class="url">yopopt</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-288">6 мая ’08 в 20:02</a></time>
					</footer>
				</article>
				<article id="comment-381"class="comment even thread-even depth-1">
					<p><strong>pepelsbey</strong>, а в чем губительность xml/xslt для интернета в современном понимании?</p>
					<footer>
						<a href="http://partweb.ru" rel="external nofollow" class="url">Гвидон Маляров</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-381">27 мая ’08 в 12:57</a></time>
					</footer>
				</article>
				<article id="comment-382"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я говорил про губительность непосредственного XML, разобранного при помощи XSL и раскрашенного при помощи CSS, а связка XML+XSL->HTML на клиенте вполне ничего.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-382">27 мая ’08 в 13:09</a></time>
					</footer>
				</article>
				<article id="comment-519"class="comment even thread-even depth-1">
					<p>Вот такие статьи нужно демонстрировать вначале книги, а не начинать с описи всех тегов. Черт, ну почему никто не возьмется и не объяснит все, как было и как стало, с самого начала и до самого конца? Что такое DOCTYPE и как его формулировать, как верстать в каких случаях (как раз статья на эту тему) и что нужно делать для того, чтобы не пришлось переделывать через два года? Автор, вам большое спасибо, обратите внимание, сколько раз вас сохранили в социалках. На ваш блог подписываюсь.</p>
					<footer>
						Inque						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-519">21 июля ’08 в 1:40</a></time>
					</footer>
				</article>
				<article id="comment-520"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Только у меня Outlook при экспорте vcard через Operator и Tails Export отображает имя-фамилию чем-то, но не кириллицей? При экспорте с Вашего сайта проблема с кодировкой та же. Что это и что делать?</p>
					<footer>
						Aovd						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-520">23 июля ’08 в 0:01</a></time>
					</footer>
				</article>
				<article id="comment-5144"class="comment even thread-even depth-1">
					<p>интересная статья :)<br />
--------------------------<br />
прочитав множество постов о том, что последний пример - "однозначно" таблица, захотела и свою точку зрения высказать.<br />
Однозначность мог бы внести только контекст.<br />
Так как это может быть, например, и просто список цен на эти продукты (знаков препинания не хватает только). :)</p>
					<footer>
						April						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-5144">2 мая ’11 в 15:50</a></time>
					</footer>
				</article>
				<article id="comment-5217"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p> Дай бог нам гибкий CSS3 и хороших браузеров, и мы сделаем всё красиво</p></blockquote>
<p>Так всё же... CSS3-таблица или нет?</p>
					<footer>
						<a href="http://www.levik.info" rel="external nofollow" class="url">Levik</a>						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-5217">14 сентября ’11 в 22:04</a></time>
					</footer>
				</article>
				<article id="comment-6141"class="comment even thread-even depth-1">
					<p>HTML вот уже 10 лет со своей семантической вёрсткой пытается развиваться в никуда. Поскольку путь ложен, то воз и ныне там. Вот объясните, зачем язык визуального форматирования превращать в язык логического форматирования. Если задача у него - форматирования визуальное? Идти надо в противоположном направлении. Подальше от CSS. Даёшь визуальный HTML! Что означает абсолютно визуальные шаблоны. Куда по желанию, можно уже вставлять и логические элементы.</p>
					<footer>
						Volly						<time pubdate datetime="2008-04-22T15:01:35+00:00"><a href="index.html#comment-6141">9 февраля ’13 в 0:56</a></time>
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
	<!-- 22 & 0,531 -->
</body>
</html>
