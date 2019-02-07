<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Коробка с cюрпризами — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Коробка с cюрпризами</a></h1>
				<time pubdate datetime="2008-11-07T05:29:07+00:00">7 ноября ’08</time>
			</header>
			<p>Сначала мы <a href="/2008/08/im-not-coward-but-hell/">боялись</a>, потом вроде <a href="/2008/09/ie-street-magic/">взяли себя в руки</a>, приняв происходящее за простые и понятные фокусы. Сегодня пришло время удивляться снова — фокусы IE8 с переключением режимов рендеринга оказались хитрее, чем казалось поначалу. Что же мы знаем про магическую директиву <code>X-UA-Compatible</code>?</p>

<ul>
<li>Эта директива в виде элемента <code>&lt;meta&gt;</code> должна присутствовать в документе.</li>
<li>В ней должно быть указано одно из двух типов значений: <code>IE=x</code>, где <code>x</code> — это обозначение желаемой версии движка или специальное ключевое слово <code>EmulateIE7</code>.</li>
<li>…и, в общем-то, всё.</li>
</ul>

<p>Давайте проверим, скормив IE8 простой документ:</p>

<pre><code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"</code>
<code>"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</code>
<code>&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru"&gt;</code>
<code>&lt;head&gt;</code>
<code>    &lt;title&gt;IE=x&lt;/title&gt;</code>
<code>    &lt;meta http-equiv="Content-Type" content="text/html;charset=utf-8"/&gt;</code>
<code>    &lt;meta http-equiv="X-UA-Compatible" content="IE=x"/&gt;</code>
<code>    &lt;style type="text/css"&gt;</code>
<code>        BODY[class*='page'] {</code>
<code>            background:#090; /* IE8 и прочие современные */</code>
<code>            }</code>
<code>        *:first-child+HTML .page {</code>
<code>            background:#FC0; /* IE7, исключительно */</code>
<code>            }</code>
<code>        * HTML .page {</code>
<code>            background:#C00; /* IE6 и младше */</code>
<code>            }</code>
<code>    &lt;/style&gt;</code>
<code>&lt;/head&gt;</code>
<code>&lt;body class="page"&gt;&lt;/body&gt;</code>
<code>&lt;/html&gt;</code></pre>

<p>Меняя значение <code>IE=x</code> последовательно — 8, 7, 6 — мы переключаем режимы рендеринга IE и получаем <a href="/pro/2008/11/surprise-box/traffic-lights.png" rel="darkbox">такой светофор</a>. Красивую расцветку обеспечили нам специальные CSS-фильтры для каждой версии IE:</p>

<ul>
<li><code>E[att*='val']</code> — IE8 и прочие современные браузеры, селектор выборки подстрок атрибутов из <a href="http://www.w3.org/TR/css3-selectors/#attribute-substrings">черновика CSS 3</a>. Да-да, из <em>черновика</em>, который IE8 не собирался поддерживать…</li>
<li><code>*:first-child+HTML E</code> — IE7, исключительно. Просто милый хак, в очередной раз обыгрывающий странное понимание разработчиками IE понятия <em>корневой элемент</em>.</li>
<li><code>* HTML E</code> — IE6 и младше, знаменитый <em>Star HTML Hack</em>, что бы мы без него делали.</li>
</ul>

<p>Ну что — пока без сюрпризов, почти скучно. А давайте-ка подключим к документу фавиконку. Вставим её куда-нибудь в элемент <code>&lt;head&gt;</code>, произвольно:</p>

<pre><code>&lt;head&gt;</code>
<code>    &lt;title&gt;IE=x&lt;/title&gt;</code>
<code>    &lt;meta http-equiv="Content-Type" content="text/html;charset=utf-8"/&gt;</code>
<code>    &lt;link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/&gt;</code>
<code>    &lt;meta http-equiv="X-UA-Compatible" content="IE=x"/&gt;</code>
<code>&lt;/head&gt;</code></pre>

<p>…и вот здесь начинается самое интересное — все документы позеленели, при любых значениях <code>IE=x</code>. И это фактически означает то, что IE8 просто перестал воспринимать директиву <code>X-UA-Compatible</code>.</p>

<p>Нет, дело совсем не в фавиконке. Дело в новом расположении элемента <code>&lt;meta&gt;</code> с нашей чудо-директивой. Теперь мета-информация о режиме рендеринга документа становится известна <em>после</em> появления первых элементов самого документа и успешно игнорируется.</p>

<p>В ходе тестов выяснилось, что предшествовать директиве могут только мета-элементы и <code>&lt;title&gt;</code> — по сути тоже часть мета-описания документа. Все остальные варианты расположения директивы делают её абсолютно неработоспособной.</p>

<p>Эксперименты это конечно хорошо, но хочется знать наверняка, поэтому полчаса копания в <a href="http://msdn.microsoft.com/">MSDN</a> дали однозначный ответ в статье «<a href="http://msdn.microsoft.com/en-us/magazine/cc288325(VS.85).aspx">Defining Document Compatibility</a>» — все предположения оказались верны:</p>

<blockquote><p>Являясь регистронезависимым, заголовок X-UA-compatible, тем не менее, должен находиться в секции HEAD страницы перед всеми остальными элементами, за исключением title и других мета-элементов.</p></blockquote>

<p>Вывод из всей этой истории напрашивается следующий: для успешной борьбы, врага нужно знать в лицо. Пусть даже ценой чтения сомнительной документации по MSHTML.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>17</small>
				</header>
				<article id="comment-1723"class="comment even thread-even depth-1">
					<p>Спасибо, Вадим</p>
					<footer>
						Egor						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1723">7 ноября ’08 в 10:53</a></time>
					</footer>
				</article>
				<article id="comment-1728"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, спасибо за статью!<br />
Исправьте, пожалуйста, в примере незакрытый тег  :)</p>
					<footer>
						<a href="http://redbook.me" rel="external nofollow" class="url">Alexei</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1728">7 ноября ’08 в 13:57</a></time>
					</footer>
				</article>
				<article id="comment-1729"class="comment even thread-even depth-1">
					<p>Упс, забыл пресловутый сурс указать.<br />
Незакрытый тег <code>&lt;html&gt;</code></p>
					<footer>
						<a href="http://redbook.me" rel="external nofollow" class="url">Alexei</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1729">7 ноября ’08 в 13:58</a></time>
					</footer>
				</article>
				<article id="comment-1730"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Немного не в тему, но может кому-то поможет в будущем.<br />
Заметил такую вещь, характерную для семейства IE.<br />
Если в обычном CSS файле задать у любого элемента свойство background</p>
<pre>
<code>#sample{</code>
<code>background:url(../img/sample.gif)top left repeat-x;</code>
<code>}</code>
</pre>
<p>то любой браузер, кроме IE, отображает бэкграунд, а IE напрочь отказывается это дело.<br />
Проблема оказалась в отсутствующем пробеле после скобки, т.е.:</p>
<pre>
<code>#sample{</code>
<code>background:url(../img/sample.gif) top left repeat-x;</code>
<code>}</code>
</pre>
					<footer>
						stolho						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1730">7 ноября ’08 в 15:42</a></time>
					</footer>
				</article>
				<article id="comment-1732"class="comment even thread-even depth-1">
					<p>Спасибо, надо проверить везде, где ужё успел вставить :)</p>
					<footer>
						<a href="http://pchelobej.livejournal.com" rel="external nofollow" class="url">Pchelobej</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1732">7 ноября ’08 в 15:59</a></time>
					</footer>
				</article>
				<article id="comment-1733"class="comment odd alt thread-odd thread-alt depth-1">
					<p>О боги! Эта трабла станет хитом в форумах в ближайшие годы :)))</p>
					<footer>
						<a href="http://uggallery.audiopeace.ru" rel="external nofollow" class="url">uggallery</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1733">7 ноября ’08 в 17:31</a></time>
					</footer>
				</article>
				<article id="comment-1735"class="comment even thread-even depth-1">
					<p>А если не указывать директиву, то движок будет от ie8 ? Если это так и например мне нужен именно такой режим, то можно тогда не указывать эту директиву?</p>
					<footer>
						oracle						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1735">7 ноября ’08 в 19:46</a></time>
					</footer>
				</article>
				<article id="comment-1737"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо. Действительно будущий хит.</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1737">7 ноября ’08 в 23:10</a></time>
					</footer>
				</article>
				<article id="comment-1738"class="comment even thread-even depth-1">
					<p>Отличная штучка из разряда «делайте всегда вооот так и проблем не будет». Итак, <strong>всегда</strong> ставим все мета-теги до тайтла и радуемся. Всё равно мета-тег, указывающий кодировку должен там стоять, вот и остальные пускай не разбредаются.</p>
<p>@stolho: С пробелами в css IE вообще своеобразно обходится. Так что тоже желательно ставить их везде, где не запрещено, имхо. Хуже не будет, а от необходимости помнить о потенциальных траблах самообороняемся.</p>
					<footer>
						<a href="http://designnotfound.ru" rel="external nofollow" class="url">Михаил</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1738">8 ноября ’08 в 0:33</a></time>
					</footer>
				</article>
				<article id="comment-1739"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>всегда ставим все мета-теги до тайтла…</p></blockquote>
<p>Вот-вот, именно поэтому при тестировании и не напарывался на эту проблему — аккуратизм и последовательность помогли )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1739">8 ноября ’08 в 1:16</a></time>
					</footer>
				</article>
				<article id="comment-1754"class="comment even thread-even depth-1">
					<p>это напоминает глюк с доктайпом в IE6. прям родовое проклятие Майкрософт ;)</p>
					<footer>
						<a href="http://sunnyfetis.livejournal.com" rel="external nofollow" class="url">feits</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1754">9 ноября ’08 в 0:15</a></time>
					</footer>
				</article>
				<article id="comment-1919"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Для IE7 есть более изящный хак: *+HTML -- я был уверен, что та о нем знаешь :)</p>
					<footer>
						<a href="http://webo.in/" rel="external nofollow" class="url">sunnybear</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1919">17 ноября ’08 в 11:37</a></time>
					</footer>
				</article>
				<article id="comment-1932"class="comment even thread-even depth-1">
					<p>Исторически сложилось, что IE7 не приходится хакать, поэтому на уме был какой-то древний пример )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-1932">17 ноября ’08 в 17:21</a></time>
					</footer>
				</article>
				<article id="comment-2119"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Pepelsbey, давно читаю ваш блог, и вы не перестаете радовать.</p>
<p>После прочтения статьи взял за правило вставлять в шапку страницы такой код</p>
<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="EmulateIE7"/&gt;</code></pre>
<p>после чего правлю верстку под ie6-7 и не заморачиваюсь с отображением под ie8.</p>
					<footer>
						<a href="http://frize.ru" rel="external nofollow" class="url">Frize</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-2119">25 ноября ’08 в 17:45</a></time>
					</footer>
				</article>
				<article id="comment-2193"class="comment even thread-even depth-1">
					<p>Спасибо автору. Сразу же после прочтения  заточил свои шаблоны под ие8.</p>
					<footer>
						Александр						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-2193">1 декабря ’08 в 0:49</a></time>
					</footer>
				</article>
				<article id="comment-3685"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо, учитывая то что IE8 взломали за первый же день......тут нечему и удивляться, как ни обещали Microsoft конфетку так и не слепили...</p>
					<footer>
						<a href="http://weberty.ru" rel="external nofollow" class="url">Геннадий</a>						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-3685">6 апреля ’09 в 17:58</a></time>
					</footer>
				</article>
				<article id="comment-6236"class="comment even thread-even depth-1">
					<p>Привет из будушего! У нас уже есть IE11 и он весьма хорош.</p>
					<footer>
						Gleb						<time pubdate datetime="2008-11-07T05:29:07+00:00"><a href="index.html#comment-6236">26 марта ’14 в 16:43</a></time>
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
	<!-- 12 & 0,591 -->
</body>
</html>
