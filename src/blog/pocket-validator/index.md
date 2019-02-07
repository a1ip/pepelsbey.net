<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Карманный валидатор — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Карманный валидатор</a></h1>
				<time pubdate datetime="2008-02-22T03:12:28+00:00">22 февраля ’08</time>
			</header>
			<p>Зачастую HTML-валидатор — это не только способ похвастаться аккуратным кодом, поставив зелёную галочку на сайт, но ещё и полезный инструмент для непосредственной разработки. Контроль аккуратности кода, отсутствия каких-то опечаток или неуместных вещей стоит производить как можно чаще.</p>

<figure class="small">
	<a href="/pro/2008/02/pocket-validator/validator.png" rel="darkbox"><img src="/pro/2008/02/pocket-validator/validator-t.png" width="230" height="170" alt="Validator S.A.C."></a>
	<figcaption>Validator S.A.C.</figcaption>
</figure>

<p>Потенциально, код можно периодически скармливать той самой последней инстанции на W3C, но это не слишком удобно для локальных файлов или полевых условий. Альтернативным решением можно назвать использование плагинов для браузеров: <a href="http://users.skynet.be/mgueury/mozilla/">HTML Validator</a> для Firefox и <a href="http://zappatic.net/safaritidy/">Safari Tidy</a> для Safari, оба они основаны на движке <a href="http://tidy.sourceforge.net/">HTML Tidy</a> и, к слову сказать, невероятно криво сделаны. Но W3C HTML Validator и Tidy — это два разных проекта, хоть и преследующие схожие цели. Не берусь судить об их различиях, но факт остаётся фактом.</p>

<p>Есть и другая возможность проверять свой код локально: <a href="http://validator.w3.org/source/">W3C HTML Vadlidator</a> не только распространяется в виде открытого исходного кода, но также доступен в виде готовых пакетов для *nix-платформ и, в частности, отдельного приложения для Mac&nbsp;OS&nbsp;X — <a href="http://habilis.net/validator-sac/">Validator S.A.C.</a></p>

<p>Это приложение устанавливается простым перетаскиванием в папку «Программы», имеет знакомый интерфейс и позволяет проверять как локальные, так и удалённые страницы и получать результаты идентичные онлайн-валидатору.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>11</small>
				</header>
				<article id="comment-135"class="comment even thread-even depth-1">
					<p>Привет!<br />
Кстати, был где-то и под оперу виджет.<br />
SGML парсит по DTD, а Tidy по построен на своих фантастических алгоритмах :) Есть еще Serial parser - это когда Tidy начинает работать, только если со структурой все в порядке.</p>
					<footer>
						<a href="http://artem.chertov.name" rel="external nofollow" class="url">Artem.Chertov</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-135">22 февраля ’08 в 4:53</a></time>
					</footer>
				</article>
				<article id="comment-136"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Зачем тебе Coda, Вадим?</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-136">22 февраля ’08 в 5:03</a></time>
					</footer>
				</article>
				<article id="comment-137"class="comment even thread-even depth-1">
					<p><strong>Дима,</strong> нравится она мне, ничего не поделаешь ) Особенно возможностью быстро подключиться к сайту. Хотя вот наконец-то взялся и собрал собственные HTML и CSS банглы для TextMate и продолжаю его осваивать.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-137">22 февраля ’08 в 13:17</a></time>
					</footer>
				</article>
				<article id="comment-138"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Так можно же локально проверять в самом TextMate: bundles — html — validate syntax (W3C), с css — по аналогии: bundles — css — validate syntax (W3C). К слову сказать, я css пишу тоже в TextMate.</p>
					<footer>
						<a href="http://www.ioracle.ru" rel="external nofollow" class="url">Oracle</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-138">22 февраля ’08 в 13:34</a></time>
					</footer>
				</article>
				<article id="comment-139"class="comment even thread-even depth-1">
					<p>Или имелось ввиду, проверка без подключения к сети?</p>
					<footer>
						<a href="http://www.ioracle.ru" rel="external nofollow" class="url">Oracle</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-139">22 февраля ’08 в 13:35</a></time>
					</footer>
				</article>
				<article id="comment-140"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Именно! В самолёте, в поезде или в стогу сена — валидатор всегда с вами )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-140">22 февраля ’08 в 13:38</a></time>
					</footer>
				</article>
				<article id="comment-142"class="comment even thread-even depth-1">
					<p>Пардон, невнимательно, видимо, прочитал :-)<br />
Спасибо за наводку (Validator S.A.C.), будем пробовать.</p>
					<footer>
						<a href="http://www.ioracle.ru" rel="external nofollow" class="url">Oracle</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-142">22 февраля ’08 в 13:54</a></time>
					</footer>
				</article>
				<article id="comment-146"class="comment odd alt thread-odd thread-alt depth-1">
					<p>а для windows аналога нет?</p>
<p>интересует возможность установки на XP + denwer</p>
					<footer>
						<a href="http://google.com" rel="external nofollow" class="url">Васек</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-146">25 февраля ’08 в 16:26</a></time>
					</footer>
				</article>
				<article id="comment-147"class="comment even thread-even depth-1">
					<p>HTML Validator у меня устанавливается, сразу же после самого FF :)</p>
<blockquote><p>и, к слову сказать, невероятно криво сделаны</p></blockquote>
<p>Что именно там криво? Я только один баг нашел: если писать название id через дефис, то  валидатор не считает два одинковых за ошибку. То есть два #good-id в тексте для него это нормально.</p>
<p>PS<br />
Можешь сделать подписку на комментарии? Плагин тут <a href="http://txfx.net/code/wordpress/subscribe-to-comments/" rel="nofollow">http://txfx.net/code/wordpress/subscribe-to-comments/</a></p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">pokrovskii.com</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-147">25 февраля ’08 в 16:59</a></time>
					</footer>
				</article>
				<article id="comment-148"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Что именно там криво?</p></blockquote>
<p>FF2 очень сильно бажил с HTML Validator, периодически не работал копипейст, были конфликты с другими плагинами. Да и автор не слишком печётся о судьбе плагина. Это вам не Web Developer :)</p>
<blockquote><p>а для windows аналога нет?</p></blockquote>
<p>Думаю, что можно запустить его под Denwer, но я в этом деле не специалист.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-148">25 февраля ’08 в 20:57</a></time>
					</footer>
				</article>
				<article id="comment-149"class="comment even thread-even depth-1">
					<blockquote><p>Можешь сделать подписку на комментарии?</p></blockquote>
<p>Попробовал поставить указанный плагин влоб, испугался: никаких шаблонов для вставки чекбокса или вызова функции, страшные str_replace'ы. Поищу что-нибудь получше.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-02-22T03:12:28+00:00"><a href="index.html#comment-149">26 февраля ’08 в 0:13</a></time>
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
	<!-- 14 & 0,427 -->
</body>
</html>
