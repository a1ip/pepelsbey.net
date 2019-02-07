<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Неизбежное Исключение — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Неизбежное Исключение</a></h1>
				<time pubdate datetime="2008-06-05T17:02:30+00:00">5 июня ’08</time>
			</header>
			<p>Что ж, блог <a href="http://www.css3.info/">CSS3.info</a> сегодня <a href="http://www.css3.info/firefox-31-is-the-latest-to-pass-our-selectors-test/">сообщил нам</a>, что последняя бета-версия Firefox, наряду с Safari и Opera, полностью проходит <a href="http://www.css3.info/selectors-test/">тест на работоспособность CSS3-селекторов</a>. Однако в разговорах про все чудеса CSS3 не стоит забывать про одно <em>неизбежное исключение</em>:</p>

<blockquote><p>So Safari, Opera and now Firefox all pass the test; of the major browsers, that only leaves one Inevitable Exception…</p></blockquote>

<p>Судя по словам архитектора IE8 Алекса Могилевского, CSS3-селекторы не будут внедрены в IE до тех пор, пока спецификация не будет официально утверждена. А что до тех CSS3-селекторов, что уже появились в IE7 («<a href="http://blogs.msdn.com/ie/archive/2006/08/22/712830.aspx#718220">we actually did a couple of CSS3 Selectors for IE7</a>»), то это, по его же словам, произошло <em>случайно</em> — просто человек, занимавшийся внедрением, не был в курсе, что это оказывается CSS3…</p>

<p>В общем, теперь-то мы знаем, что на самом деле скрывается за аббревиатурой IE ;)</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>23</small>
				</header>
				<article id="comment-428"class="comment even thread-even depth-1">
					<p>Осталось то всего ничего - дождаться пока пользователи забудут про IE6.</p>
					<footer>
						<a href="http://tabunov.ru" rel="external nofollow" class="url">Over</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-428">5 июня ’08 в 19:03</a></time>
					</footer>
				</article>
				<article id="comment-429"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Наверное скоро появятся сайты, представленные в 2-х вариантах, для IE и для нормальных браузеров, первая — продвинутая версия будет написана на каком-нибудь XHTML2, HTML5, XHTML5 + CSS3, а вторая — урощенная, для самого замечательного браузера :D на старом добром XHTML1.0 Strict + СSS2.0.<br />
—Это безумие?<br />
—Это Inevitable Exception!<br />
:D</p>
					<footer>
						<a href="http://www.webpp.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-429">5 июня ’08 в 19:11</a></time>
					</footer>
				</article>
				<article id="comment-430"class="comment even thread-even depth-1">
					<p>Теперь вполне можно будет применять gracefull degradation</p>
					<footer>
						<a href="http://webdev.lovata.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-430">5 июня ’08 в 20:07</a></time>
					</footer>
				</article>
				<article id="comment-431"class="comment odd alt thread-odd thread-alt depth-1">
					<p>IE вообще случайный браузер.</p>
					<footer>
						<a href="http://vladzima.livejournal.com" rel="external nofollow" class="url">Влад</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-431">5 июня ’08 в 21:14</a></time>
					</footer>
				</article>
				<article id="comment-432"class="comment even thread-even depth-1">
					<p>Octane, так уже было на самом деле. Писали отдельно для IE, отдельно для Netscape… одельно koi8, отдельно 1251.</p>
					<footer>
						<a href="http://rmcreative.ru/" rel="external nofollow" class="url">Sam</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-432">5 июня ’08 в 22:10</a></time>
					</footer>
				</article>
				<article id="comment-433"class="comment odd alt thread-odd thread-alt depth-1">
					<p>С такими темпами (разработка CSS3 начата в прошлом веке) и стратегиями (закрытая разработка людьми, слабо представляющими нужды реальных веб-разработчиков), как у W3, CSS3 <strong>никогда</strong> не выйдет из статуса черновика.</p>
<p>Остаётся только сделать существующие разумные (по меньшей мере) части  черновика стандартом де-факто, чем и занимаются по возможности производители нормальных браузеров. И только ребята из MS будут ждать финальной версии CSS3. Ну-ну.</p>
					<footer>
						<a href="http://TANALIN.com/" rel="external nofollow" class="url">MT</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-433">5 июня ’08 в 22:50</a></time>
					</footer>
				</article>
				<article id="comment-434"class="comment even thread-even depth-1">
					<p>MT, не думаю. Алекс Могилевский на РИТе сам рассказывал о практике разработки стандартов, так что, думаю, в IE9 начнут внедряться утвержденные в статусе рекомендаций модули CSS3.</p>
					<footer>
						<a href="http://webdev.lovata.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-434">5 июня ’08 в 23:26</a></time>
					</footer>
				</article>
				<article id="comment-435"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>произошло случайно — просто человек, занимавшийся внедрением, не был в курсе, что это оказывается CSS3…</cite><br />
жесть...</p>
					<footer>
						Repka						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-435">5 июня ’08 в 23:36</a></time>
					</footer>
				</article>
				<article id="comment-438"class="comment even thread-even depth-1">
					<p><cite>А что до тех CSS3-селекторов, что уже появились в IE7… то это, по его же словам, произошло случайно…</cite><br />
:))) Действительно — жесть.</p>
					<footer>
						vashurin						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-438">6 июня ’08 в 15:08</a></time>
					</footer>
				</article>
				<article id="comment-439"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Было бы вполне логично со стороны команды разработчиков IE совершенно случайно поручить внедрение остальных CSS3 селекторов тому самому человеку, который уже <a href="http://www.css3.info/modules/selector-compat/" rel="nofollow">внедрил несколько из них в IE7</a>…<br />
)</p>
					<footer>
						<a href="http://live.miripiruni.org" rel="external nofollow" class="url">miripiruni</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-439">6 июня ’08 в 16:24</a></time>
					</footer>
				</article>
				<article id="comment-440"class="comment even thread-even depth-1">
					<p>Мне интересно другое, то, что внедрили случайно, уберут?</p>
					<footer>
						<a href="http://webdev.lovata.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-440">7 июня ’08 в 20:48</a></time>
					</footer>
				</article>
				<article id="comment-441"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да уж вряд ли, это не в стиле MS.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-441">7 июня ’08 в 21:53</a></time>
					</footer>
				</article>
				<article id="comment-443"class="comment even thread-even depth-1">
					<p>Не могу найти заявленную встроенную поддержку микроформатов в FF3. Может быть, это от того, что он всё ещё beta или что у меня версия для Linux?</p>
					<footer>
						<a href="http://welimir.ru" rel="external nofollow" class="url">Максим Нечаев</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-443">8 июня ’08 в 20:31</a></time>
					</footer>
				</article>
				<article id="comment-444"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Максим, а вот и ответ на ваш вопрос: <a href="http://www.kaply.com/weblog/2008/05/20/where-are-the-microformat-in-firefox-3/" rel="nofollow">Where are the microformats in Firefox 3?</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-444">8 июня ’08 в 20:38</a></time>
					</footer>
				</article>
				<article id="comment-445"class="comment even thread-even depth-1">
					<p>Спасибо. Теперь всё стало понятно :-).</p>
					<footer>
						<a href="http://welimir.ru" rel="external nofollow" class="url">Максим Нечаев</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-445">8 июня ’08 в 21:10</a></time>
					</footer>
				</article>
				<article id="comment-446"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Почитал заметку и комменты - рыдаю :)<br />
Ослик, в принципе, меня всегда &quot;радовал&quot;...</p>
					<footer>
						<a href="http://yoyurec.in.ua" rel="external nofollow" class="url">YoYurec</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-446">9 июня ’08 в 14:41</a></time>
					</footer>
				</article>
				<article id="comment-449"class="comment even thread-even depth-1">
					<p>дшамшутизатизация майкрософта...</p>
					<footer>
						<a href="http://nicothin.ru" rel="external nofollow" class="url">Николай громов (nicothin)</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-449">11 июня ’08 в 23:03</a></time>
					</footer>
				</article>
				<article id="comment-450"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>МТ: С такими темпами (разработка CSS3 начата в прошлом веке) и стратегиями (закрытая разработка людьми, слабо представляющими нужды реальных веб-разработчиков), как у W3, CSS3 никогда не выйдет из статуса черновика.</cite></p>
<p>Марат, а ты пробовал попробовать участвовать в этой «закрытой разработке»? Например, HTML5 разрабатывается открыто и можно вступить в WG и участвовать. Только там такой поток писем, что я выдержал его неделю и отписался. Про CSS не знаю, но недавно можно было писать и предлагать, что ещё хочется увидеть в CSS.</p>
<p>А по поводу выхода из черновика скажу, что WD становится CR когда у него есть как минимум 2 независимые реализации. Т.ч. MS в этом случае вообще типа в белом, пусть остальные реализуют, пройдут по граблям, потом если надо поправим спеку и только потом сделаем реализацию.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-450">12 июня ’08 в 1:19</a></time>
					</footer>
				</article>
				<article id="comment-451"class="comment even thread-even depth-1">
					<p>2pepelsbey: кнопка добавления комментария без картинок не видна. :(</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-451">12 июня ’08 в 1:20</a></time>
					</footer>
				</article>
				<article id="comment-454"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Странно, вроде давал фоновый цвет...</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-454">12 июня ’08 в 3:20</a></time>
					</footer>
				</article>
				<article id="comment-514"class="comment even thread-even depth-1">
					<p>Может быть IE и не совсем тот фантан, но я его держу как RSS-агрегатор... ну уж больно изящьно работает оно в IE7.</p>
					<footer>
						vkraw						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-514">19 июля ’08 в 16:35</a></time>
					</footer>
				</article>
				<article id="comment-516"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>vkraw,</strong> попробуйте <a href="http://www.newsgator.com/individuals/feeddemon/default.aspx" rel="nofollow">FeedDemon</a>, вот это действительно RSS-агрегатор, а не ч.з. какая дополнительная функция в сомнительном браузере.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-516">19 июля ’08 в 21:51</a></time>
					</footer>
				</article>
				<article id="comment-8476"class="comment even thread-even depth-1">
					<blockquote><p> Наверное скоро появятся сайты, представленные в 2-х вариантах, для IE и для нормальных браузеров, первая — продвинутая версия будет написана на каком-нибудь XHTML2, HTML5, XHTML5 + CSS3, а вторая — урощенная, для самого замечательного браузера :D на старом добром XHTML1.0 Strict + СSS2.0.</p></blockquote>
<p> Напророчил, кстати.</p>
					<footer>
						Александр						<time pubdate datetime="2008-06-05T17:02:30+00:00"><a href="index.html#comment-8476">19 ноября ’14 в 15:45</a></time>
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
	<!-- 14 & 0,490 -->
</body>
</html>
