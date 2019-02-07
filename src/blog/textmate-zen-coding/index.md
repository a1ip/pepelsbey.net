<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>TextMate Zen Coding 1.3 — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">TextMate Zen Coding 1.3</a></h1>
				<time pubdate datetime="2009-06-27T12:33:29+00:00">27 июня ’09</time>
			</header>
			<p>Логичным этапом после всех <a href="/2009/04/zen-coding-concept/">мечтаний про Zen&nbsp;Coding 2.0</a> стало написание документации по элементам, селекторам, свойствам и сокращениям.</p>

<ul>
<li><a href="http://code.google.com/p/zen-coding/wiki/ZenHTMLElementsRu">Элементы Zen&nbsp;HTML</a></li>
<li><a href="http://code.google.com/p/zen-coding/wiki/ZenHTMLSelectorsRu">Селекторы Zen&nbsp;HTML</a></li>
<li><a href="http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesRu">Свойства Zen&nbsp;CSS</a></li>
</ul>

<p>На основе этой документации, пакеты Zen&nbsp;HTML и Zen&nbsp;CSS для редактора <a href="http://macromates.com/">TextMate</a> были обновлены до версии 1.3. Это обновление стало не столько исправлением ошибок в версиях 1.2, сколько подготовкой для перехода к версии 2.0. Тут вам и HTML&nbsp;5, и CSS&nbsp;3 и много других исправлений. А именно:</p>

<h2>Zen&nbsp;HTML</h2>

<p>Набор элементов новой версии пакета создан на основе черновика HTML&nbsp;5, плюс элемент <code>&lt;acronym&gt;</code>, который был исключён из HTML&nbsp;5. Немного был изменён принцип именования шаблонов — сначала идёт версия языка, а потом уже тип:</p>

<pre><code>html:4t  = HTML 4.01 Transitional</code>
<code>html:4s  = HTML 4.01 Strict</code>
<code>html:5   = HTML&nbsp;5</code>
<code>html:xt  = XHTML 1.0 Transitional</code>
<code>html:xs  = XHTML 1.0 Strict</code>
<code>html:xxs = XHTML 1.1 Strict</code></pre>

<p>Также добавлен новый шаблон страницы <code>html:5</code>:</p>

<pre><code>&lt;!DOCTYPE HTML&gt;</code>
<code>&lt;html lang="ru-RU"&gt;</code>
<code>&lt;head&gt;</code>
<code>    &lt;title&gt;&lt;/title&gt;</code>
<code>    &lt;meta charset="UTF-8"&gt;</code>
<code>&lt;/head&gt;</code>
<code>&lt;body&gt;</code>
<code>    </code>
<code>&lt;/body&gt;</code>
<code>&lt;/html&gt;</code></pre>

<p>Ещё один шаг к большей доступности пакета состоит в том, что теперь все элементы можно набирать как по псевдонимам, так и по полному имени:</p>

<pre><code>bq &rarr; &lt;blockquote&gt;&lt;/blockquote&gt;</code>
<code>blockquote &rarr; &lt;blockquote&gt;&lt;/blockquote&gt;</code></pre>

<p>То есть, не зная псевдонима, можно всё равно получить то, что нужно. Помимо этого, в пакет было добавлено много приятных мелочей:</p>

<p>Все элементы, которые имеют особенность много раз повторяться строка за строкой, теперь имеют механизм, который позволяет после написания первой строки сразу же приступать к написанию второй — достаточно нажать <kbd>Tab</kbd> после одного из следующих закрывающих тегов: <code>&lt;/p&gt;</code>, <code>&lt;/li&gt;</code>, <code>&lt;/tr&gt;</code>, <code>&lt;/th&gt;</code>, <code>&lt;/td&gt;</code> или <code>&lt;/option&gt;</code>.</p>

<p> Элемент <code>&lt;div&gt;</code> теперь разворачивается с атрибутами <code>class</code> и <code>id</code> более логично, раньше вместо точки использовалась собачка:</p>

<pre><code>div. &rarr; &lt;div class=""&gt;&lt;/div&gt;</code>
<code>div# &rarr; &lt;div id=""&gt;&lt;/div&gt;</code></pre>

<p>В список автоматических парных подстановок были добавлены русские кавычки: <code>«„“»</code>. Теперь при наборе первой из них, автоматически будет подставляться и вторая.</p>

<p>HTML-элементы теперь сгруппированы на основе спецификации, поэтому <a href="/pro/2009/06/textmate-zen-coding/menu.navigation.png" rel="darkbox">навигация через меню «Bundles»</a> теперь организована не по алфавиту, а по группам.</p>

<h2>Zen&nbsp;CSS</h2>

<p>Набор свойств в этом пакете основан на черновике спецификации CSS&nbsp;3 и в дальнейшем будет обновляться, в зависимости от реализации в браузерах и решений, что принимает <a href="http://www.w3.org/blog/CSS/">CSS WG</a>. Этот пакет оптимизация коснулась в большей степени.</p>

<p>Основной файл настроек языка был взят из самой последней версии оригинального пакета CSS и модифицирован для полного соответствия CSS&nbsp;3:</p>

<ul>
<li>HTML-селекторы: 99, вместо прежних 76-ти</li>
<li>Псевдо-классы: 24, вместо прежних 5-ти</li>
<li>Свойства: 169, вместо прежних 125-ти</li>
<li>Значения: 160, вместо прежник 138-ми</li>
</ul>

<p>Это значит, что все новые свойства и значения из черновика CSS&nbsp;3 будут правильно подсвечиваться. Исключением станут вендорные свойства и значения, в частности, с префиксами. Их полезно отличать от остального массива кода. Также было модифицировано регулярное выражение, которое отвечает за HTML-селекторы, теперь подсвечиваться будут как строчные, так и прописные имена.</p>

<p>Всем свойствам, отвечающим за позиционирование (<code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>) были присвоены однобуквенные сокращения: <code>t</code>, <code>r</code>, <code>b</code>, <code>l</code>. Соответственно, для свойства <code>border</code> теперь используется сочетание <code>bd</code>, по аналогии с <code>bg</code> для <code>background</code>. Да, стало длиннее, да, придётся привыкать, но общая логичность решения повысилась.</p>

<p>Короткое сочетание <code>z</code> вернулось и свойству <code>z-index</code>, которое близко к тем обнобуквенным, что отвечают за позиционирование. Поэтому свойство <code>zoom</code>, о котором мы когда-нибудь забудем, отправлено в <code>zoo</code> и открывается сразу со значением, равным единице.</p>

<p>Помимо этого в пакет была внесена некоторая <em>вендорная специфика</em>: вроде <code>-ms-filter</code>, <code>display:-moz-inline-box</code>, <code>-webkit-box-shadow</code> и некоторых других. Эти свойства также будут обновляться, в зависимости от поддержки новых экспериментальных свойств в различных браузерах.</p>

<p>Ну, и немного приятных мелочей. Свойство <code>quotes</code> теперь может быть развёрнуто с уже готовыми значениями для двух уровней русских или английских кавычек:</p>

<pre><code>q:ru &rarr; quotes:'\00AB' '\00BB' '\201E' '\201C';</code>
<code>q:en &rarr; quotes:'\201C' '\201D' '\2018' '\2019';</code></pre>

<p>…а нажатая после символа <code>;</code> клавиша <kbd>Tab</kbd> создаст строку для нового правила.</p>

<h2>Кто здесь?</h2>

<p>Сейчас пакеты проекта Zen&nbsp;Coding существуют в двух основных ветках:</p>

<ul>
<li><strong>Первая ветка</strong> использует для работы с сокращениями внутренние возможности редактора и существует в виде отдельных пакетов для каждого языка:
<ul>
<li>Zen&nbsp;HTML и Zen&nbsp;CSS для редактора <a href="http://macromates.com/">TextMate</a>, автор — ваш покорный слуга.</li>
<li>Zen&nbsp;HTML для редактора <a href="http://www.netbeans.org/">NetBeans</a>, автор — <a href="http://rmcreative.ru/">Александр Макаров</a>.</li>
</ul>
</li>
<li><strong>Вторая ветка</strong> является единым пакетом и использует для работы с сокращениями скрипт, написанный <a href="http://chikuyonok.ru/">Сергеем Чикуёнком</a> на JavaScript, а затем портированный для Python:
<ul>
<li>Zen&nbsp;Coding для редактора <a href="http://macromates.com/">TextMate</a></li>
<li>Zen&nbsp;Coding для редактора <a href="http://www.aptana.com/">Aptana</a></li>
<li>Zen&nbsp;Coding для редактора <a href="http://panic.com/coda/">Coda</a></li>
</ul>
</li>
</ul>

<p>Обе ветки используют документацию, упомянутую в начале заметки, поэтому совместимы между собой. Особенностью второй ветки является то, что в XML-подобных языках поддерживается разворачивание шаблонов на основе CSS-синтаксиса, о чём <a href="/2009/04/zen-coding-concept/">мечталось в одной заметке</a>.</p>

<p>Несмотря на некоторую запутанность с ветками, пакеты продолжают развиваться, более того — планируется написание Zen&nbsp;HTML для <a href="http://www.ultraedit.com/products/ultraedit/">UltraEdit</a> и Zen&nbsp;CSS для возрождённого <a href="http://www.topstyle4.com/">TopStyle 4</a>.</p>

<h2>Установка пакетов</h2>

<p>Последние версии всех пакетов по-прежему можно скачать со <a href="http://code.google.com/p/zen-coding/">страницы проекта на Google Code</a>. Речь же пойдёт о специфике установки пакетов для редактора TextMate.</p>

<p>Если вы устанавливаете пакеты в первый раз, то достаточно просто кликнуть два раза по разархивированному файлу. Но если вы не уверены, то лучше читайте дальше.</p>

<p>Если вы уже использовали предыдущие версии пакетов для TextMate, включая бета-версии пакетов 1.3 с <a href="http://code.google.com/p/zen-coding/">Google Code</a>, то пакеты нужно будет обновить прямой заменой файлов. Иначе, попытки смёржить две разные версии приведут к непредсказуемым последствиям. Итак, нужно сделать следующее:</p>

<ol>
<li>Закрыть TextMate</li>
<li>Зайти в папку: <code>~/Library/Application Support/TextMate/Bundles/</code></li>
<li>Удалить старые пакеты Zen-CSS и Zen-HTML</li>
<li>Скопировать в эту папку новые пакеты</li>
</ol>

<p>Такая тактика уменьшит вероятность возникновения проблем.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>35</small>
				</header>
				<article id="comment-4009"class="comment even thread-even depth-1">
					<p>Кстати, по поводу CSS и текстмейта: а не подскажешь, как поправить фолдинг для правил CSS, которые записываются с закрывающей скобкой на уровне с правилами? Я что-то пытался покопать и поправить стандартные бандлы на этот счёт, но у меня так и не получилось )</p>
					<footer>
						<a href="http://kizu.ru" rel="external nofollow" class="url">kizu</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4009">27 июня ’09 в 13:14</a></time>
					</footer>
				</article>
				<article id="comment-4010"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну, очевидно, нужно разобраться с этой регуляркой:</p>
<pre>
<code>foldingStopMarker = &#039;(?&amp;lt;!\*)\*\*/|^\s*\}&#039;;</code>
</pre>
<p>Я не готов к этому ) Благо, что сворачиванием пользуюсь только в HTML, да и то очень редко.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4010">27 июня ’09 в 13:18</a></time>
					</footer>
				</article>
				<article id="comment-4011"class="comment even thread-even depth-1">
					<p>Да вот в том-то и дело, что добавление, скажем, таба, в этот регексп ситуацию не меняет. Там такое ощущение, что там захардкожено совпадение вайтспейсов у начального маркера и конечного :(</p>
					<footer>
						<a href="http://kizu.ru" rel="external nofollow" class="url">kizu</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4011">27 июня ’09 в 13:55</a></time>
					</footer>
				</article>
				<article id="comment-4012"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я тоже когда правил вчера языковой файл пару раз впадал в уныние, мол, <em>там же захардкожено всё</em>, но потом разбирался и понимал как оно работает ;) Так что стоит попытаться ещё раз, может быть при помощи супер-программиста.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4012">27 июня ’09 в 13:57</a></time>
					</footer>
				</article>
				<article id="comment-4013"class="comment even thread-even depth-1">
					<p>В текстмейте есть бандл, который создаёт открытый и закрытый теги из написанного слова. Ну это так... к слову о </p>
<pre>
<code>blockquote → &lt;blockquote&gt;&lt;/blockquote&gt;</code>
</pre>
<p>p.s. почему у ты в комментариях используешь разметку source а не code?</p>
					<footer>
						<a href="http://friendfeed.com/yodapunk" rel="external nofollow" class="url">Глеб Арестов</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4013">27 июня ’09 в 14:02</a></time>
					</footer>
				</article>
				<article id="comment-4014"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>В текстмейте есть бандл, который создаёт открытый и закрытый теги из написанного слова</p></blockquote>
<p>Ну, это дело понятное и знакомое. Полные имена элементов добавлены исключительно для обратной совместимости. Основа этого HTML-бандла система элемент:параметр.</p>
<p>Насчёт source vs. code: по сути, source это маркер для плагина, который оборачивает код в список. Посмотри исходник.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4014">27 июня ’09 в 14:06</a></time>
					</footer>
				</article>
				<article id="comment-4015"class="comment even thread-even depth-1">
					<p>Ололо! TopStyle 4!</p>
					<footer>
						Макс						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4015">27 июня ’09 в 14:11</a></time>
					</footer>
				</article>
				<article id="comment-4018"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А почему в документауии выбран по умолчанию синтаксис HTML, а не xHTML?<br />
Например: <a href="http://code.google.com/p/zen-coding/wiki/ZenHTMLElementsRu" rel="nofollow">http://code.google.com/p/zen-coding/wiki/ZenHTMLElementsRu</a>.<br />
P.S.: попробую по этой документации сделать свой файл abbrev.properties для SciTE, а то руки не доходили именно по причине того, что в голове не устоялся метод сокращений</p>
					<footer>
						<a href="http://fiskus.name/" rel="external nofollow" class="url">fiskus_boulder</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4018">27 июня ’09 в 15:43</a></time>
					</footer>
				</article>
				<article id="comment-4020"class="comment even thread-even depth-1">
					<p>Немного оффтоп: для linux вышел аналог TexMate'а — <a href="http://redcareditor.com/" rel="nofollow">Redcar</a>. Кажется обещают совместимость, в том числе с бандлами.</p>
<p>P.S. Сам не пробовал (и пока не собираюсь :))</p>
					<footer>
						Vii						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4020">27 июня ’09 в 15:45</a></time>
					</footer>
				</article>
				<article id="comment-4021"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Синтаксис HTML потому, что в TetxMate за вывод слеша отвечает статическая переменная, поэтому во всех одиночных элементах просто стоит проверка на наличие этой переменной — он либо добавляется, либо нет. Если коротко: для большей универсальности документации.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4021">27 июня ’09 в 15:57</a></time>
					</footer>
				</article>
				<article id="comment-4023"class="comment even thread-even depth-1">
					<p>И еще:<br />
почему table+ раскрывается без thead, th и tbody?<br />
Мне кажется стоит сделать два варианта, один такоей, как есть, другой со всеми элементами таблицы.</p>
<p>Второе: у меня помимо аналогов ul+ и ol+ были еще ul a и ol a, раскрывающиеся в список ссылок, удобно</p>
					<footer>
						<a href="http://fiskus.name/" rel="external nofollow" class="url">fiskus_boulder</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4023">27 июня ’09 в 17:25</a></time>
					</footer>
				</article>
				<article id="comment-4024"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я сознательно не делаю шаблонов, которые сочетают много элементов потому, что не хочу, чтобы эта система из стремительной лани превратилась в медлительного бегемота. Т.е. если делать «на все случаи жизни», то этим никто не будет пользоваться, кроме того, кто выдумал тот самый случай.</p>
<p>А то ведь и форму можно развернуть с fieldset'ами, label'ами и кнопкой reset. Хотя кто-то наверняка пользуется div'ами и вообще не знает про label. В общем, мне кажется, что дописать то, чего не хватает, проще, чем вычистить развернувшееся от лишнего.</p>
<p>Ближе к атомарности. М?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4024">27 июня ’09 в 17:31</a></time>
					</footer>
				</article>
				<article id="comment-4026"class="comment even thread-even depth-1">
					<p>угу, согласен. я вот для себя допилил по этим пунктам (<a href="http://fiskus-boulder.livejournal.com/148647.html" rel="nofollow">http://fiskus-boulder.livejournal.com/148647.html</a>)</p>
<p>Нашел косяк :)<br />
input:r = input:radio, input:reset</p>
					<footer>
						<a href="http://fiskus.name/" rel="external nofollow" class="url">fiskus_boulder</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4026">27 июня ’09 в 18:01</a></time>
					</footer>
				</article>
				<article id="comment-4027"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я думал, что багу с input:r я уже правил. Значит только в самих пакетах, а про докуменацию забыл. Спасибо ) Думаю, на каком-нибудь этапе, скажем, после первых полевых стрельбищ, стоит добавить эту штуку на Google Code. Ок?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4027">27 июня ’09 в 18:08</a></time>
					</footer>
				</article>
				<article id="comment-4031"class="comment even thread-even depth-1">
					<p>Zen coding для TopStyle 4 был бы очень актуален.<br />
Хоть TopStyle уже и не тот :(</p>
					<footer>
						private_face						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4031">27 июня ’09 в 22:03</a></time>
					</footer>
				</article>
				<article id="comment-4034"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Небольшие комментарии:<br />
1. Zen Coding 2.0 есть еще и для редактора Espresso под Mac, входит в состав сахара TEA for Espresso: <a href="http://wiki.macrabbit.com/forums/viewthread/160/" rel="nofollow">http://wiki.macrabbit.com/forums/viewthread/160/</a><br />
2. В следующей версии ZC2 будут доступны настраиваемые профили вывода кода. Среди настроек будет регистр названий тэгов и атрибутов, способ написания самозакрывающихся тэгов, настройка переносов тэгов. Также будет автоопределение типа документа: HTML/XHTML/XML, в зависимости от этого будет выбран соответствующий профиль. </p>
<p>Также хотелось бы узнать, кто каким редактором пользуется, чтобы по возможности подготовить версии для самых популярных.</p>
					<footer>
						<a href="http://chikuyonok.ru" rel="external nofollow" class="url">Сергей Чикуёнок</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4034">28 июня ’09 в 0:51</a></time>
					</footer>
				</article>
				<article id="comment-4037"class="comment even thread-even depth-1">
					<p>Вадим, спасибо. Буду пользоваться.<br />
Сергей - я пользуюсь E-texteditor и был бы очень счастлив, если бы по возможности были версии и для него.</p>
					<footer>
						Сергей						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4037">28 июня ’09 в 7:00</a></time>
					</footer>
				</article>
				<article id="comment-4046"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Хм, спасибо за доктайпы ;)<br />
Это действительно самая логичная идея, много лучше чем какие-то сокращения, забываемые через несколько минут.<br />
И таб в конце строки тоже приятен.</p>
<p>Надо будет это добавить в мой набор для фаровского TrueTemplate.</p>
					<footer>
						<a href="http://kildor.mirandaim.ru" rel="external nofollow" class="url">Kildor</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4046">29 июня ’09 в 7:43</a></time>
					</footer>
				</article>
				<article id="comment-4049"class="comment even thread-even depth-1">
					<p>Вот подождем новую версию InType (в ней изменится синтаксис снипетов) и займемся :-)<br />
Кстати, а почему у вас судя по шаблону html:5 сначала идет тайтл, а только потом - мета? Не было бы логичнее сначала передать всю метаинформацию, а только потом - текстовый контент документа (тайтл ведь уже непосредственно относится к содежримому)? Тем более что так будет сначала передаваться кодировка, и к моменту получения заголовка страницы браузер будет знать, как его интерпретировать. Я понимаю, что все работает и так, но считаю, что передавать метаинформацию в первую очередь более логично.</p>
					<footer>
						<a href="http://smmurf.ya.ru" rel="external nofollow" class="url">Антон</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4049">29 июня ’09 в 15:27</a></time>
					</footer>
				</article>
				<article id="comment-4050"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>считаю, что передавать метаинформацию в первую очередь более логично</p></blockquote>
<p>Что забавно, единственный адекватный HTML 5 валидатор тоже считает, что мета с кодировкой должна быть «first child of head element», хотя точных указаний в спецификации я не нашёл.</p>
<p>Думаю, что ближе к концу этой недели выйдет обновление 1.3.1 для Zen CSS (уже много ошибок и улучшений) и может чуть позже 1.3.1 для Zen HTML.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4050">29 июня ’09 в 15:33</a></time>
					</footer>
				</article>
				<article id="comment-4052"class="comment even thread-even depth-1">
					<p><a href="http://zone51.3dn.ru/publ/9-1-0-14" rel="nofollow">http://zone51.3dn.ru/publ/9-1-0-14</a><br />
И вообще, поиск по словам utf-7 XSS.</p>
					<footer>
						<a href="http://kildor.mirandaim.ru" rel="external nofollow" class="url">Kildor</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4052">29 июня ’09 в 16:35</a></time>
					</footer>
				</article>
				<article id="comment-4053"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну, я только за то, чтобы мета с кодировкой была в документе. Но расположение её после title кажется мне несколько более логичным. Не с точки зрения определения кодировки этого самого title, а с точки зрения структуры документа.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4053">29 июня ’09 в 16:42</a></time>
					</footer>
				</article>
				<article id="comment-4085"class="comment even thread-even depth-1">
					<p>Круто. Отличная идея и отличная реализация. Жаль что только под TextMate.</p>
<p>Что на счет Adobe Dreamweaver?</p>
					<footer>
						<a href="http://sweedbes.com" rel="external nofollow" class="url">sweedbes</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4085">3 июля ’09 в 11:56</a></time>
					</footer>
				</article>
				<article id="comment-4100"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Насколько я знаю, браузер сначала определяет кодировку, как ему вздумается. Затем он добирается до тега meta с кодировкой, и если указанная не совпадает с дефолтной, то страница начинает грузиться заново. Поэтому лучше указать кодировку раньше всего. В общем, что-то такое я читал...</p>
<p>А по поводу добавления abbrev.properties SciTE на гугл-код - можно. Но стоит учесть, что в Скайте нет сниппетов, поэтому там все сильно отличается. На почту вышлю</p>
					<footer>
						<a href="http://fiskus.name" rel="external nofollow" class="url">fiskus_boulder</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4100">9 июля ’09 в 15:20</a></time>
					</footer>
				</article>
				<article id="comment-4133"class="comment even thread-even depth-1">
					<p>а когда можно ожидать поддержку IntelliJ IDEA?</p>
					<footer>
						glivera						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4133">16 июля ’09 в 18:48</a></time>
					</footer>
				</article>
				<article id="comment-4175"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Небольшая проблема с bdl+<br />
Поправьте пожалуйста.</p>
					<footer>
						Сергей						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4175">28 июля ’09 в 2:18</a></time>
					</footer>
				</article>
				<article id="comment-4231"class="comment even thread-even depth-1">
					<p>Вадим, у меня есть пакет сниппетов первой ветки под intype. Который к тому же поддерживает некоторые фишки второй ветки.</p>
<p>Можно зарелизить, отпишите пожалуйста на почту.</p>
					<footer>
						jazz						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4231">20 октября ’09 в 3:56</a></time>
					</footer>
				</article>
				<article id="comment-4232"class="comment odd alt thread-odd thread-alt depth-1">
					<p>jazz, а разве интайп сейчас позволяет реализовать разворачивание произвольных конструкций?<br />
Если могу чем-нибудь помочь в работе над снипетами для интайпа - дайте знать, мне небезразлична судьба этого редактора -)</p>
					<footer>
						<a href="http://smmurf.ya.ru" rel="external nofollow" class="url">Антон</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4232">20 октября ’09 в 17:15</a></time>
					</footer>
				</article>
				<article id="comment-4517"class="comment even thread-even depth-1">
					<p>Я тут подумал...</p>
<p><code>w:100 → width:100px;</code> или <code>r:30% → right:30%;</code> и т.д.</p>
<p>То есть тут две идеи. Одна про то, что можно сразу указывать цифру, а вторая про то, что если величина не задана изначально, то по дефолту указывается в пикселях.<br />
м?</p>
					<footer>
						tefery						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4517">24 января ’10 в 5:20</a></time>
					</footer>
				</article>
				<article id="comment-4519"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>tefery,</strong> вам всё равно набирать нужную величину, а сделаете вы это до или после — разницы большой нет. Мне кажется, что схема, при которой вы сначала разворачиваете свойство, а потом уже полноценно с ним работаете меньше всего ломает привычное написание кода, напоминая скорее более удобную подстановку, чем какой-то новый мета-язык.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4519">24 января ’10 в 5:37</a></time>
					</footer>
				</article>
				<article id="comment-4520"class="comment even thread-even depth-1">
					<p><strong>pepelsbey</strong>, Я вам это на основе личного опыта говорю. Так реально удобней. Особенно, когда нужно корректировать что либо в вёрстке, чем меньше телодвижений, тем быстрее я увижу результат.</p>
<p>Насчёт мета языка... Вы везде пишете, про то что не хотите превращать Zen Coding во что то большее, чем он является сейчас. Собственно, почему нет? По моему это отличная идея. Любая великая вещь сначала была просто хорошей штукой для себя. Взять к примеру Стива Возняка. Сначала он был просто парнем любящим электронику, а теперь мы можем говорить с вами общаться о зен кодинге на огромном расстоянии. </p>
<p>Zen Coding уже сам по себе революционен и если добавить в него всяких хороших штук, то будет вообще супер. А если вам дорога идея простоты, точнее «не усложнения», то можно в итоге сделать разные версии, что то вроде Zen Coding Core и Zen Coding Extended.<br />
Новый мета язык разметки, разве это плохо?</p>
					<footer>
						tefery						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4520">24 января ’10 в 6:21</a></time>
					</footer>
				</article>
				<article id="comment-4632"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Господа, это всё просто супер!</strong><br />
Я работаю под Виндой, использую редактор Notepad++ (Scintilla-based). Сделайте, пожалуйста, поддержку этого редактора, или посоветуйте хороший редактор под винду с уже реализованной поддержкой. Но я надеюсь, поскольку SciTE вы уже поддержали, N++ поддержать будет не так сложно...</p>
					<footer>
						Вектор						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-4632">24 февраля ’10 в 11:55</a></time>
					</footer>
				</article>
				<article id="comment-5152"class="comment even thread-even depth-1">
					<p>Скажите, это чудо доступно в программе Bluefish??? Или это не реально?</p>
					<footer>
						Вячнслав						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-5152">29 мая ’11 в 21:36</a></time>
					</footer>
				</article>
				<article id="comment-5212"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Знаю что есть фильтр |c, который обрамляет комментариями тег. Но это слишком перенасыщает код ненужной информацией, ведь открытый тег итак с классом, а над ним еще и комментарий ставится, нет ли возможности добавлять комментарий только после закрывающего тега? К примеру, чтобы было не так:</p>
<pre>
<code>&lt;!-- #page --&gt;</code>
<code>&lt;div id="page"&gt;&lt;/div&gt;</code>
<code>&lt;!-- /#page --&gt;</code>
</pre>
<p>А вот так:</p>
<pre>
<code>&lt;div id="page"&gt;&lt;/div&gt;&lt;!-- /#page --&gt;</code>
</pre>
					<footer>
						<a href="http://www.beskrovnyy.com/" rel="external nofollow" class="url">Евгений</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-5212">10 сентября ’11 в 16:11</a></time>
					</footer>
				</article>
				<article id="comment-5213"class="comment even thread-even depth-1">
					<p><b>Евгений,</b> я не очень понимаю, что вы имеете в виду и почему пишете именно сюда. Если у вас есть какие-нибудь вопросы по поводу Zen Coding, то обратите внимание на <a href="https://github.com/sergeche/zen-coding" rel="nofollow">проект Zen Coding на Github</a> и твиттер <a href="https://twitter.com/zen_coding" rel="nofollow">@zen_coding</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-06-27T12:33:29+00:00"><a href="index.html#comment-5213">10 сентября ’11 в 16:23</a></time>
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
	<!-- 20 & 0,505 -->
</body>
</html>
