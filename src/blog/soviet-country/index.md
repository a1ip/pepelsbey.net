<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Страна Советов — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Страна Советов</a></h1>
				<time pubdate datetime="2008-05-22T15:27:52+00:00">22 мая ’08</time>
			</header>
			<p>Принимая <a href="http://uggallery.audiopeace.ru/2008/05/19/5-advices">приглашение Александра Исакова</a> поучаствовать в <a href="http://seleckis.lv/journal/css/5-sovetov-verstalschiku">провокации</a>, предлагаю вам пять советов, облетевшие словно письмо счастья почти все русскоязычные блоги разработчиков:</p>

<ol>
<li>Всегда отдавайте каждому браузеру только то, что он <em>должен</em> и <em>может</em> переварить. Это значит, что ваш HTML-документ и файл стилей абсолютно валидны, не содержат загадочных невидимых юникодных символов, все хаки для IE вынесены во внешний файл и подключаются через условные комментарии. Тогда мистики в вашей работе поубавится.</li>
<li>Пишите хаки <em>только</em> для IE, не ройте себе яму. Где и как — см. пункт 1.</li>
<li>Изучайте <a href="http://www.css3.info/">возможности CSS3</a> и внедряйте их в свои работы, не забывая про обратную совместимость с динозаврами.</li>
<li>Не превращайтесь в макетонарезочный автомат — мыслите на шаг вперёд дизайнера, помогайте ему и не нойте <q>он не предусмотрел состояние посещённых ссылок!</q>, а просто сделайте это сами.</li>
<li>Фары и ремень!.. Точнее, грамотность и типографика. Тире, копирайты, кавычки, заголовки, списки, врезки, цитаты, форматы дат, телефонных номеров — всё мнообразие представления текста. Не поддавайтесь быдло-вебу и чат-стилю текста.</li>
</ol>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>18</small>
				</header>
				<article id="comment-353"class="comment even thread-even depth-1">
					<p>видимо меня избаловали хорошие дизайнеры, которые всё предусматривают</p>
					<footer>
						<a href="http://savintsev.ru" rel="external nofollow" class="url">Egor</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-353">22 мая ’08 в 16:09</a></time>
					</footer>
				</article>
				<article id="comment-356"class="comment odd alt thread-odd thread-alt depth-1">
					<p>пункт 4 действует только если не работать с «быдло-дизайнером»</p>
					<footer>
						<a href="http://outofcloud.net/" rel="external nofollow" class="url">KBA-KBA</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-356">22 мая ’08 в 17:28</a></time>
					</footer>
				</article>
				<article id="comment-359"class="comment even thread-even depth-1">
					<p>Я тоже хочу сказать про пункт 4 :-)<br />
Практика показывает, что &quot;понравится&quot; дизайнеру очень сложно. Даже если всё хорошо, но придумал-то не он. И это проблема.</p>
<p>Вот такой пример - некто предложил сделать вертикальный ритм, идея не прошла, зато у дизайнера появилась дебильная привычка мерять расстояние между <em>бейзлайнами</em> элементов. Хотя даже ёжику ясно, что визуально <em>расстояние</em> от заголовка до таблицы  не есть расстояние от строки заголовка до строки первой td-шки. При этом данное расстояние дизайнер гордо именует интерлиньяж. И ему плевать, что в HTML интерлиньяж - это несколько другое понятие, чётко привязанное к одному элементу.</p>
<p>Вот и выходит, что инициатива наказуема.</p>
					<footer>
						<a href="http://warmrobot.com" rel="external nofollow" class="url">warmrobot</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-359">22 мая ’08 в 18:12</a></time>
					</footer>
				</article>
				<article id="comment-361"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Кстати, про посещённые гиперссылки: Вадим, а почему посещенная гиперссылка имеет абсолютно то же стилевое описание, что и не посещенная при наведении? Есть ли этому какое-то логическое объяснение, или просто — «так получилось»?</p>
<p>Какой-то дискомфорт ощущается от того, что наводишь курсор на ссылку, а она тебе не подмигивает.</p>
					<footer>
						<a href="http://designnotfound.ru" rel="external nofollow" class="url">Михаил</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-361">23 мая ’08 в 0:06</a></time>
					</footer>
				</article>
				<article id="comment-363"class="comment even thread-even depth-1">
					<blockquote><p>посещенная гиперссылка … абсолютно то же … что и не посещенная</p></blockquote>
<p>Тем самым я просто подчёркиваю то, что вы ссылку уже однажды «потрогали», поэтому делать её обычной при наведении я смысла не вижу. Разве что чуть ярче, раз уж дискомфорт…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-363">23 мая ’08 в 0:26</a></time>
					</footer>
				</article>
				<article id="comment-365"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>Пишите хаки только для IE, не ройте себе яму.</cite><br />
Это смотря что называть хаком, по-мне так display:-moz-inline-stack; тот же &quot;хак&quot; (использование специфического параметра для конкретного браузера/группы браузеров).</p>
<p>Хотя это просто придирки... &gt;))</p>
					<footer>
						Ви						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-365">24 мая ’08 в 15:39</a></time>
					</footer>
				</article>
				<article id="comment-366"class="comment even thread-even depth-1">
					<blockquote><p>не нойте «он не предусмотрел состояние посещённых ссылок!», а просто сделайте это сами.</p></blockquote>
<p>За реализацию того чего не придумано дизайнером можно негатив от заказчика получить.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-366">24 мая ’08 в 18:29</a></time>
					</footer>
				</article>
				<article id="comment-367"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>можно негатив от заказчика получить</p></blockquote>
<p>Что могу сказать: а) если заказчик так хорошо знает, как делаются сайты, то зачем он обратился к вам? пусть сам делает б) человек, предлагающий улучшения, выглядит как профессионал, а не как пассивный участник процесса</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-367">25 мая ’08 в 1:13</a></time>
					</footer>
				</article>
				<article id="comment-384"class="comment even thread-even depth-1">
					<p>Спасибо, Вадим, за хорошие советы. Полностью с тобой солидарен. Подхватываю эстафету и предлагаю свои 5 советов:</p>
<p>1. Если ты уделяешь верстке 1 час в день - не жди успеха. Если за версткой ты не замечаешь как летит время, можешь работать целый день и это приносит удовольствие - значит ты верстальщик-фанатик, и со временем ты сможешь верстать как твои кумиры.</p>
<p>2. Не останавливайся на достигнутом! Читай больше статей про html/css верстку. Броди по блогам верстальщиков, там можно найти много новой и полезной для себя информации. Все знать ты не можешь.</p>
<p>3. Собирай и структурируй свою библиотеку решений по верстке и создавай свои фреймворки. Это поможет сэкономить много времени при верстке.</p>
<p>4. Таблицы используй только для вывода табличных данных. Не слушай тех, кто говорит, что таблицами верстать быстрее и надежнее. Это говорят ленивые верстальщики, которые выучили 5 лет назад табличную верстку (тогда она была актуальной), а сейчас не хотят переучиваться. Грамотная блочная верстка справится с макетами любой сложности!</p>
<p>5. Не напрягай мозг, заучивая новые теги, приемы и технологии верстки. Не обязательно все помнить и держать в голове, важнее знать, где это найти в случае необходимости! Если ты будешь много верстать -  все это само сабой отложится в памяти.</p>
					<footer>
						<a href="http://www.webmolot.com" rel="external nofollow" class="url">webmolot</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-384">27 мая ’08 в 17:30</a></time>
					</footer>
				</article>
				<article id="comment-452"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>4. Таблицы используй только для вывода табличных данных. Не слушай тех, кто говорит, что таблицами верстать быстрее и надежнее. Это говорят ленивые верстальщики, которые выучили 5 лет назад табличную верстку (тогда она была актуальной), а сейчас не хотят переучиваться. Грамотная блочная верстка справится с макетами любой сложности!</cite></p>
<p>Это неправда.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-452">12 июня ’08 в 1:25</a></time>
					</footer>
				</article>
				<article id="comment-453"class="comment even thread-even depth-1">
					<p>К сожалению, вынужден согласиться с тем, что не все макеты можно сверстать без таблиц :( Пишите, покажу...</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-453">12 июня ’08 в 3:17</a></time>
					</footer>
				</article>
				<article id="comment-470"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Добрый вечер! А что такое <cite>загадочные невидимые юникодные символы</cite>?</p>
					<footer>
						quwiero						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-470">24 июня ’08 в 19:33</a></time>
					</footer>
				</article>
				<article id="comment-471"class="comment even thread-even depth-1">
					<blockquote><p>А что такое загадочные невидимые юникодные символы?</p></blockquote>
<p><a href="http://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4" rel="nofollow">BOM</a> (порядок байтов), главным образом, но случаются и другие.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-471">24 июня ’08 в 21:06</a></time>
					</footer>
				</article>
				<article id="comment-477"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Верстальщик - по определению  макето-нарезочный аппарат. Дизайнер (если не чудак, через любую другую понравившуюся букву) - должен предусмотреть все, на то он и дизайнер.</p>
<p>ИМХО как -то очень странно должно смотрется высказывания верстальщика о, например, типографике о которой он где-то читал, дизайнеру который должен был на ней собаку съесть прежде чем садиться за создание макетов.</p>
					<footer>
						<a href="http://nomagic.ru" rel="external nofollow" class="url">Константин</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-477">1 июля ’08 в 23:24</a></time>
					</footer>
				</article>
				<article id="comment-478"class="comment even thread-even depth-1">
					<p>Я понимаю о чём вы. Но покажите мне дизайнера, который собаку съел на типографике. Таких, к сожалению, единицы. Верстальщику просто говорят «в футере будут контактные данные» и кидают по аське кусок неформатированного текста.</p>
<p>А так — да, если работать с идельным <em>сферическим дизайнером в вакууме</em>, то часть советов и правда будет не нужна.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-478">1 июля ’08 в 23:39</a></time>
					</footer>
				</article>
				<article id="comment-555"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, как с тобой связаться?</p>
					<footer>
						<a href="http://www.webmolot.com" rel="external nofollow" class="url">Webmolot</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-555">4 августа ’08 в 12:03</a></time>
					</footer>
				</article>
				<article id="comment-556"class="comment even thread-even depth-1">
					<p>На странице "Об авторе" всё есть -- почта, жаббер.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-556">4 августа ’08 в 12:59</a></time>
					</footer>
				</article>
				<article id="comment-557"class="comment odd alt thread-odd thread-alt depth-1">
					<p>ой, не заметил почту</p>
					<footer>
						<a href="http://www.webmolot.com" rel="external nofollow" class="url">Webmolot</a>						<time pubdate datetime="2008-05-22T15:27:52+00:00"><a href="index.html#comment-557">4 августа ’08 в 13:16</a></time>
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
	<!-- 16 & 0,502 -->
</body>
</html>
