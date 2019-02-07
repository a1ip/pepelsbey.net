<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Zen CSS — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Zen CSS</a></h1>
				<time pubdate datetime="2008-10-24T00:15:18+00:00">24 октября ’08</time>
			</header>
			<p>Что может быть важнее для верстальщика, чем комфортная и быстрая работа с HTML-кодом? Правильно — только комфортная и быстрая работа с CSS-кодом. Ведь основная часть работы современного разработчика происходит именно с CSS.</p>

<p>Поэтому, вслед за рассказом о редакторе <a href="http://macromates.com/">TextMate</a> и пакете настроек <a href="/2008/08/zen-html/">Zen HTML</a>, следует обзор пакета Zen&nbsp;CSS. Для начала, предлагаю вам небольшой скринкаст, демонстрирующий его основные возможности:</p>

<iframe src="https://player.vimeo.com/video/17588946?title=0&amp;byline=0&amp;portrait=0&amp;color=188418" width="609" height="457" frameborder="0" class="video-player"></iframe>

<p>Подобно принципам работы предыдущего пакета, принципы этого основаны на использовании псевдонимов для CSS-свойств. Например:</p>

<pre><code>bg → background:|;</code>
<code>bgc → background-color:#|FFF|;</code></pre>

<p>Таким образом, развёрнутое свойство готово к введению значения на месте появления курсора <code>|</code>. В случае, когда значение свойства предсказуемо, как в нашем примере с цветом фона, псевдоним разворачивается со значением по умолчанию, которое выделено и готово к редактированию <code>|…|</code>.</p>

<p>Но помимо длинных свойств, существует некоторое количество достаточно сложных для написания значений, к примеру — <code>list-style-type:decimal-leading-zero</code>. В этой ситуации нам на помощь приходит второй тип псевдонимов — с заданным значением:</p>

<pre><code>lst:n → list-style-type:none;</code>
<code>lst:declz → list-style-type:decimal-leading-zero;</code></pre>

<p>Другая сложность кроется в сокращённом написании свойств — зачастую, нам приходится писать длинные однотипные конструкции вроде <code>font:1em Arial,sans-serif</code> или <code>padding:10px 0 2px 0</code>. Для таких случаев предусмотрены специальные псевдонимы с предустановленными комбинациями значений:</p>

<pre><code>f+ → font:1em Arial,sans-serif;</code>
<code>bg+ → background:#FFF url(../i/) 0 0 no-repeat;</code></pre>

<p>Плюс в данном случае символизирует разворачивание псевдонима в сложное правило. Если нам нужно описать сокращённое свойство блока при помощи двух, трёх или четырёх значений — <code>top|bottom + right|left</code>, <code>top + right|left + bottom</code>, <code>top + right + bottom + left</code> — то мы используем следующий тип псевдонимов:</p>

<pre><code>p:2 → padding:|0| 0;</code>
<code>p:3 → padding:|0| 0 0;</code>
<code>p:4 → padding:|0| 0 0 0;</code></pre>

<p>Главная ценность подобных комбинаций заключается в том, что после разворачивания вы имеете возможность передвигаться по списку значений при помощи клавиши <kbd>Tab</kbd>, начиная с первого выделенного значения.</p>

<p>Такой тип псевдонимов предусмотрен только для самых часто употребимых случаев использования двойных, тройных и четверных сокращений — для свойств <code>padding</code> и <code>margin</code>. В дальнейшем, если это окажется востребованным, методика заполнения комбинаций свойств может быть использована для свойств <code>border</code>, <code>outline</code>, а также для значений <code>rgb</code>, <code>rect</code> и подобных им.</p>

<p>Пакет включает в себя все свойства CSS 2.1, а также некоторую экзотику из CSS 3, но пока только в самом простом виде, без широкого круга предустановленных значений:</p>

<pre><code>bsz → box-sizing:|;</code>
<code>bsh → box-shadow:|;</code>
<code>bi → border-image:|;</code>
<code>brs → border-radius:|;</code></pre>

<p>Доступны также типовые варианты решений проблем с IE:</p>

<pre><code>bg:ie → filter:[…]AlphaImageLoader(src='i/|',sizingMethod='crop');</code>
<code>op:ie → filter:alpha(opacity=|);</code>
<code>exp → expression(|)</code>
<code>fr → filter:|;</code>
<code>z → zoom:1;</code></pre>

<p>Ну и конечно некоторые полезные мелочи, повешенные на горячие клавиши — фигурные скобки:</p>

<pre><code>Cmd + Enter →</code>
<code>{</code>
<code>    |</code>
<code>    }</code></pre>

<p>…и заголовки структурных элементов вашего CSS-файла:</p>

<pre><code>Cmd + Alt + / →</code>
<code>/* |</code>
<code>---------------------------------------- */</code></pre>

<p>Следующая публикация из серии Zen Coding, запланированная на ближайшие дни, будет содержать оба пакета настроек — <a href="/2008/08/zen-html/">Zen HTML</a> и <a href="index.html">Zen CSS</a>, а также некоторые планы по их развитию и поддержке.</p>

<p>Энергичный инструментал для скринкаста — группа <a href="http://www.lastfm.ru/music/Skafandr">Skafandr</a> с композицией «Тяжёлый шар земной».</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>21</small>
				</header>
				<article id="comment-1445"class="comment even thread-even depth-1">
					<p>Я так понял, это все реализовано в виде отдельно программы? А где ее можно скачать?</p>
					<footer>
						<a href="http://zodios.net" rel="external nofollow" class="url">Zodios</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1445">24 октября ’08 в 9:20</a></time>
					</footer>
				</article>
				<article id="comment-1446"class="comment odd alt thread-odd thread-alt depth-1">
					<p>z = zoom? А почему не z-indeх?</p>
					<footer>
						<a href="http://lusever.ru/" rel="external nofollow" class="url">Павел Корнилов</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1446">24 октября ’08 в 9:38</a></time>
					</footer>
				</article>
				<article id="comment-1448"class="comment even thread-even depth-1">
					<p><strong>Zodios,</strong> это пакеты настроек для редактора TextMate, который доступен на платформе Mac OS X. Однако и на Windows есть программы, которые объявили об их поддержке, в частности — <a href="http://www.e-texteditor.com/" rel="nofollow">E Text Editor</a>.</p>
<p><strong>Павел,</strong> наверное всё-таки из-за более частой употребимости. Для z-index у меня есть псевдоним «zi». Хотя это не принципиальная позиция, мнения заинтересованных в развитии бандла людей с удовольствием приму ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1448">24 октября ’08 в 11:48</a></time>
					</footer>
				</article>
				<article id="comment-1450"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Супер бандл! Думаю если запомнить все, то можно будет также шустро кодить. А где бандл брать то? :-)</p>
					<footer>
						<a href="http://livedev.org" rel="external nofollow" class="url">ilya</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1450">24 октября ’08 в 13:25</a></time>
					</footer>
				</article>
				<article id="comment-1452"class="comment even thread-even depth-1">
					<p>На мой взгляд, зря переопределили cmd+enter, по-умолчанию на него повешена очень удобная штука (перевод каретки на новую строку с любого места)</p>
<p>А скобки и так можно довольно быстро ставить (поставил открывающую TM автоматически ставит закрывающую, а потом просто нажимаешь enter), единственное отличие от вашего сниппета в том, что закрывающая скобка будет в начале строки а не после таба</p>
					<footer>
						Panya						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1452">24 октября ’08 в 18:36</a></time>
					</footer>
				</article>
				<article id="comment-1454"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Товарищи, желающие попробовать бандл, внимательнее читаем предпоследний абзац ;) Идут последние приготовления…</p>
<p><strong>Panya,</strong> мне оказалась важна именна такая комбинация скобок/табов. Если придумаю каким образом только для CSS выставлять скобки именно так, то, возможно, откажусь от этого варианта. А пока одно движение гораздо удобнее, чем: пробел + скобка + enter.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1454">24 октября ’08 в 19:26</a></time>
					</footer>
				</article>
				<article id="comment-1460"class="comment even thread-even depth-1">
					<p>Такие штуки есть в TopStyle с незапамятных времен. Действительно, очень удобно.</p>
					<footer>
						<a href="http://sunnyfetis.livejournal.com" rel="external nofollow" class="url">fetis</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1460">25 октября ’08 в 11:27</a></time>
					</footer>
				</article>
				<article id="comment-1464"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, у меня скобки автоматически дописываются. То есть, ставишь одну, появляется вторая, между ними курсор. Это очень удобно, но когда нажимаю enter, то нижняя скобка прижимается к левому краю (то есть не как у тебя). Не знаешь где и как это поправить? Я бы бы очень благодарен.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1464">25 октября ’08 в 14:28</a></time>
					</footer>
				</article>
				<article id="comment-1469"class="comment even thread-even depth-1">
					<p><strong>fetis,</strong> чертовски верно. Нынешние бандлы выросли именно из моих экспериментов с автоподстановкой в TopStyle. Но, к сожалению, механизмы подстановки в TopStyle довольно примитивны — хотя в своё время мне их хватало с головой. Так что воспринимайте эти бандлы как некий шаг вперёд в развитии моих идей быстрого кодинга )</p>
<p><strong>Максим,</strong> честно говоря, я не готов определить какая именно часть дефолтного бандла CSS отвечает за это, но факт есть факт — он так умеет. Довольного большую часть функциональности я позаимствовал их него.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1469">25 октября ’08 в 23:07</a></time>
					</footer>
				</article>
				<article id="comment-1475"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Хорошо вам на маках))) Я вот всё мечтаю систему сниппетов в Komodo до похожего состояния довести.</p>
<p>Кстати, чем обоснована запись имён тегов в верхнем регистре?</p>
					<footer>
						Михаил						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1475">26 октября ’08 в 19:49</a></time>
					</footer>
				</article>
				<article id="comment-1476"class="comment even thread-even depth-1">
					<p>Имена элементов в верхнем регистре — один из способов отделить селектор .body от body, без пристального всматривания, сходу. Подробности — в скором переиздании доклада «CSS-менеджмент» ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1476">26 октября ’08 в 20:18</a></time>
					</footer>
				</article>
				<article id="comment-1478"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Не к статье будет сказано, но нашел такую группу <a href="http://pepelsbei.spb.ru" rel="nofollow">http://pepelsbei.spb.ru</a> )))</p>
					<footer>
						akxxiv						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1478">26 октября ’08 в 23:41</a></time>
					</footer>
				</article>
				<article id="comment-1479"class="comment even thread-even depth-1">
					<p><cite><strong>@pepelsbey</strong> | один из способов отделить селектор .body от body</cite><br />
Грамотная подсветка рулит. </p>
<p><cite>@Михаил | Хорошо вам на маках))) Я вот всё мечтаю систему сниппетов в Komodo до похожего состояния довести.</cite></p>
<p>Можно юзать, <a href="http://www.e-texteditor.com/" rel="nofollow">e-texteditor</a> или <a href="http://intype.info/" rel="nofollow">intype</a></p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1479">27 октября ’08 в 1:04</a></time>
					</footer>
				</article>
				<article id="comment-1481"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Грамотная подсветка рулит</p></blockquote>
<p>Я пользуюсь в TextMate темой <a href="http://minimaldesign.net/downloads/tools/textmate-theme" rel="nofollow">minimal Theme</a>, там, к сжл, такого нет. Мне бы сил и возможностей написать свою расцветку… но это дело почище бандлов.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1481">27 октября ’08 в 1:36</a></time>
					</footer>
				</article>
				<article id="comment-1487"class="comment even thread-even depth-1">
					<blockquote><p>Можно юзать, e-texteditor или intype</p></blockquote>
<p>Я работаю под win и под linux, поэтому нужен были кроссплатформенный редактор. А e и intype - знаю давно, но они оба только под win. Ну да всё это разговоры в пользу бедных, что называется. Здесь важнее идея именования бандлов, за что отдельное спасибо Вадиму.</p>
					<footer>
						Михаил						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1487">27 октября ’08 в 13:23</a></time>
					</footer>
				</article>
				<article id="comment-1488"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Я пользуюсь в TextMate темой minimal Theme</p></blockquote>
<p>Я тоже. Там различаются по цвету класс, id и селектор.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1488">27 октября ’08 в 13:39</a></time>
					</footer>
				</article>
				<article id="comment-1490"class="comment even thread-even depth-1">
					<blockquote><p>Там различаются по цвету класс, id и селектор</p></blockquote>
<p>А ведь точно. Сглупил.<br />
Думаю, нужно будет пересмотреть кое-какие привычные представления.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-1490">27 октября ’08 в 16:10</a></time>
					</footer>
				</article>
				<article id="comment-4250"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А будет ли поддержка для Линукс для Gedit в частности... Или для Aptana&amp;</p>
					<footer>
						Иван						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-4250">11 декабря ’09 в 9:13</a></time>
					</footer>
				</article>
				<article id="comment-4251"class="comment even thread-even depth-1">
					<p>Иван, для Gedit есть частичная поддержка: <a href="http://www.kryogenix.org/days/2009/09/21/zen-coding-for-gedit" rel="nofollow">zen-coding for gedit</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-4251">11 декабря ’09 в 17:23</a></time>
					</footer>
				</article>
				<article id="comment-5090"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Как скоро устраниться проблема с горячими клавишами в zencoding for Npp под Win7.</p>
					<footer>
						<a href="http://marow.net" rel="external nofollow" class="url">kolyuchii</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-5090">16 января ’11 в 13:31</a></time>
					</footer>
				</article>
				<article id="comment-5091"class="comment even thread-even depth-1">
					<p><b>kolyuchii,</b> лучше вам обратиться либо к автору реализации под Notepad++, либо к <a href="http://chikuyonok.ru/" rel="nofollow">Сергею Чикуёнку</a>. Или задавайте вопросы <a href="https://twitter.com/zen_coding" rel="nofollow">@zen_coding</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-24T00:15:18+00:00"><a href="index.html#comment-5091">17 января ’11 в 14:38</a></time>
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
	<!-- 18 & 0,504 -->
</body>
</html>
