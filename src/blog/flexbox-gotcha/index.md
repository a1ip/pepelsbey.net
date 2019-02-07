<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Flexbox, теперь понятно — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Flexbox, теперь понятно</a></h1>
				<time pubdate datetime="2013-05-27T11:52:31+00:00">27 мая ’13</time>
			</header>
			<p>В марте я впервые побывал в Новосибирске по приглашению конференции <a href="http://codefest.ru/">CodeFest</a>. И чтобы не ехать с пустыми руками, я подготовил премьеру доклада «Flexbox, теперь понятно», в котором попытался понятно рассказать о первой настоящей системе для раскладки, которой уже можно начинать пользоваться.</p>

<iframe src="https://player.vimeo.com/video/67011034?title=0&amp;byline=0&amp;portrait=0&amp;color=188418" width="610" height="343" class="video-player"></iframe>

<p>Видео сцены крупным планом уже давно было опубликовано на сайте CodeFest, но без слайдов не имело смысла. Эта версия включает последовательно вмонтированные слайды и выглядит гораздо понятнее. На всякий случай держите под рукой <a href="/pres/flexbox-gotcha/">оригинал презентации</a>, который работает прямо в браузере: там есть живые демки, работающие только <a href="http://caniuse.com/flexbox">в браузерах с поддержкой Flexbox 2012</a>, и ссылки для чтения.</p>

<p>По материалам этого доклада и сопутствующих экспериментов готовится подробная статья, так что это видео не ставит точку в истории о понятном Flexbox.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>30</small>
				</header>
				<article id="comment-6156"class="comment even thread-even depth-1">
					<p>Очень спасибо!</p>
<p>А как быть с дизайнерами, которые, не до конца (если не до начала) представляют, что и как работает в браузерах? И вообще, Вадим, какова должна быть степень осведомленности о современном вебе у дизайнера, который хочет рисовать сайты в духе времени? Я в последнее время сталкиваюсь с тем, что дизайнеру нравится какой-нибудь западный сайт, который он берет и копирует, абсолютно не уделяя при этом внимания основной концепции, положенной в основу такого сайта...</p>
					<footer>
						Олег						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6156">27 мая ’13 в 14:21</a></time>
					</footer>
				</article>
				<article id="comment-6157"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Олег,</b> я искренне убеждён, что дизайнеру о веб-технологиях лучше не знать. С одной стороны, это конечно минус, что дизайнер не сможет сам воплотить прототип. С другой стороны, дизайнер в таком случае не будет ограничивать себя рамками «возможного», то есть не будет сразу же верстать в голове, рисуя.</p>
<p>Однако это не отменяет того, что дизайнер должен хорошо разбираться в интерфейсных взаимодействиях, чтобы не нарисовать принципиально непонятный пользователю вращающийся трёхмерный куб с формой регистрации.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6157">27 мая ’13 в 14:25</a></time>
					</footer>
				</article>
				<article id="comment-6158"class="comment even thread-even depth-1">
					<p>Я лично считаю, что дизайнер должен представлять что такое веб, и основные принципы. Основные возможности вёрстки тоже желательно представлять: кнопки и ссылки, поведение при наведении мышки и почему не стоит на него рассчитывать, возможные вариации данных и прочее. А то нарисуют такое, что в крайних случаях, которые верстальщик обязательно должен учитывать, непонятно как быть: например, интерфейс отлично выглядит при коротком имени, а если при длинном начинается <em>боль</em>.</p>
<p>Впрочем хороший дизайнер всегда может спросить у верстальщика и наоборот, хороший верстальщик будет спрашивать дизайнера. Без диалога приличный результат выйдет разве что при высоком профессионализме обоих, на что мало надежды.</p>
					<footer>
						Лев Солнцев						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6158">27 мая ’13 в 15:54</a></time>
					</footer>
				</article>
				<article id="comment-6159"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо за доклад. Очень хорошо ввёл в тему.</p>
					<footer>
						Владимир						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6159">27 мая ’13 в 18:43</a></time>
					</footer>
				</article>
				<article id="comment-6160"class="comment even thread-even depth-1">
					<p>Давно присматривался к теме, но с некоторой ленцой, т.к. терминология и вообще концепция другого порядка в сравнении с современным CSS.<br />
Поэтому, Вадим, огромное спасибо за доклад. Я просто в восторге и от доходчивого рассказа и от технологии в целом.</p>
					<footer>
						Александр						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6160">27 мая ’13 в 23:31</a></time>
					</footer>
				</article>
				<article id="comment-6161"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, слушал тебя в живую впервые на codefest 2013. У тебя получаются очень доходчивые и атмосферные доклады! Надеюсь что Новосибирск тебе пришёлся по душе.</p>
					<footer>
						<a href="https://twitter.com/bisserof" rel="external nofollow" class="url">bisserof</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6161">29 мая ’13 в 19:09</a></time>
					</footer>
				</article>
				<article id="comment-6162"class="comment even thread-even depth-1">
					<p>Слюни потекли. В мозгу рисуется сайт, сверстанный целиком в одном контейнере... Прямо перестановка сознания</p>
					<footer>
						Alex Beep						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6162">31 мая ’13 в 15:52</a></time>
					</footer>
				</article>
				<article id="comment-6163"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Интересный доклад, спасибо.<br />
Батареи свойств угнетают, но при использовании препроцессоров проблема отпадет.<br />
Как сильно флексбокс нагружает браузер в сравнении с классической версткой?</p>
					<footer>
						<a href="http://techmeat.net" rel="external nofollow" class="url">TecHMeaT</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6163">1 июня ’13 в 11:24</a></time>
					</footer>
				</article>
				<article id="comment-6164"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>TecHMeaT,</b> никаких специальных тестов быстродействия Флексбокса я не видел и не проводил, но думаю, что он подчиняется всем тем же правилам, что и любые другие двухмерные технологии: чем больше объектов меняется, тем дольше идёт отрисовка. Ничего слишком сложного или опасного я в технологии не вижу.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6164">1 июня ’13 в 19:41</a></time>
					</footer>
				</article>
				<article id="comment-6165"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо за доклад, а можно ли выровнять текст по средине?<br />
<a href="http://jsfiddle.net/Pustovalov/3R7fP/3/" rel="nofollow">пример</a></p>
					<footer>
						Павел						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6165">2 июня ’13 в 17:01</a></time>
					</footer>
				</article>
				<article id="comment-6166"class="comment even thread-even depth-1">
					<p>Гениально! Кажется мир стал совершенным! Благодарю!!!</p>
					<footer>
						<a href="http://dpage.ru/" rel="external nofollow" class="url">Dаниил</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6166">4 июня ’13 в 1:43</a></time>
					</footer>
				</article>
				<article id="comment-6167"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо за доклад. Использую флексбокс около года, чтобы не упутаться в синтаксисах использую набор миксинов для компасса <a href="https://gist.github.com/cimmanon/4461470" rel="nofollow">https://gist.github.com/cimmanon/4461470</a> На сколько я понял это будет включено в следующий релиз компасса, сейчас он синтаксис 2009 поддерживает.</p>
					<footer>
						Kuzzy						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6167">4 июня ’13 в 11:33</a></time>
					</footer>
				</article>
				<article id="comment-6172"class="comment even thread-even depth-1">
					<p>Класс, Вадим, спасибо!<br />
На следующем проекте обязательно попробую flex-box.</p>
					<footer>
						Олег Громов						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6172">15 июня ’13 в 16:18</a></time>
					</footer>
				</article>
				<article id="comment-6174"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В ИЕ до 10го флексбокс не поддерживается никоим образом?<br />
У 9го же еще достаточно большой <a href="http://theie9countdown.com/" rel="nofollow">процент использования</a>, а вместе с 8 и того больше.</p>
					<footer>
						Андрей						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6174">20 июня ’13 в 14:16</a></time>
					</footer>
				</article>
				<article id="comment-6178"class="comment even thread-even depth-1">
					<p>Забавный момент: у меня на презентации сафари в iOS падает при открытии первого слайда с бендером и попытке прокрутить вниз :)</p>
					<footer>
						Александр						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6178">17 июля ’13 в 10:21</a></time>
					</footer>
				</article>
				<article id="comment-6179"class="comment odd alt thread-odd thread-alt depth-1">
					<p>90 градусов же :) голову на 90 градусов поворачиваем (хоть это и невозможно). а так доклад очень классный.</p>
<p>в 22 ФФ запилили поддержку многострочности?</p>
					<footer>
						sunnyfetis						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6179">21 июля ’13 в 23:34</a></time>
					</footer>
				</article>
				<article id="comment-6183"class="comment even thread-even depth-1">
					<p>Во-первых, спасибо за прекрасную презентацию.<br />
Во-вторых, нужно мнение скептика. Собираюсь делать небольшой grid-framework с использованием flexbox и откатом до float/inline-block. Нужен ли будет такой фреймворк сообществу? Какие подводные камни? Может знаете уже такую тулзу?</p>
					<footer>
						<a href="http://morewings.name" rel="external nofollow" class="url">Дима</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6183">6 августа ’13 в 18:16</a></time>
					</footer>
				</article>
				<article id="comment-6184"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Дима,</b> дерзайте, я уверен, что это будет востребовано.</p>
<p><b>sunnyfetis,</b> до сих пор нет :\</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6184">6 августа ’13 в 19:38</a></time>
					</footer>
				</article>
				<article id="comment-6192"class="comment even thread-even depth-1">
					<p>Я как-то попробовал наоборот, взять за основу имеющуюся сетку на инлайн-блоках (YUI Grid) и «прогрессивно улучшить» ее до флексбоксов, заодно избавившись от неприличных магических констант: <a href="http://jsfiddle.net/XeVFP/4/" rel="nofollow">http://jsfiddle.net/XeVFP/4/</a>. Имеет ли такой подход право на жизнь?</p>
					<footer>
						SelenIT						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6192">18 сентября ’13 в 11:02</a></time>
					</footer>
				</article>
				<article id="comment-6193"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>SelenIT,</b> выглядит весьма неплохо! Не хочешь рассказать об этом в гостевой статье на <a href="https://web-standards.ru" rel="nofollow">Веб-стандартах</a>?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6193">18 сентября ’13 в 12:09</a></time>
					</footer>
				</article>
				<article id="comment-6213"class="comment even thread-even depth-1">
					<p>Вадим, спасибо за презентацию.<br />
Вопрос такой. Имеется ли сейчас какой-нибудь JS-скрипт добавляющий поддержку flexbox в те браузеры, которые его не поддерживают?<br />
По примеру html5shiv.js — подключил и все.</p>
<p>P. S. Гуглил, но не нашел. Может не так искал.</p>
					<footer>
						Владимир						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6213">8 октября ’13 в 21:25</a></time>
					</footer>
				</article>
				<article id="comment-6214"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Владимир,</b> была попытка написать <a href="https://github.com/doctyper/flexie" rel="nofollow">полифил для Flexbox 09</a> и она даже удалась, но ничего более нового для Flexbox 12 пока не видел.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6214">8 октября ’13 в 21:34</a></time>
					</footer>
				</article>
				<article id="comment-6215"class="comment even thread-even depth-1">
					<p>Значит, на данный момент, заставить IE 8-9 понимать flexbox невозможно?<br />
Или все таки есть какая-нибудь хитрость?</p>
					<footer>
						Владимир						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6215">8 октября ’13 в 23:08</a></time>
					</footer>
				</article>
				<article id="comment-6216"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Владимир,</b> хитростей пока, к сожалению, нет. Разве что фолбеки на плавающие блоки.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6216">8 октября ’13 в 23:15</a></time>
					</footer>
				</article>
				<article id="comment-6221"class="comment even thread-even depth-1">
					<p>Уважаемый Вадим, не подскажите почему в опере версии 12.16 не верно зафиксирована ширина колонок и текст не переносится и зеленый блок не обрезается? Я уже всё перепробовал, но ничего не помогает. <a href="http://codepen.io/anon/pen/IFyoj" rel="nofollow">ссылка</a>.</p>
					<footer>
						Андрей						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6221">5 ноября ’13 в 16:42</a></time>
					</footer>
				</article>
				<article id="comment-6228"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Павел, по поводу Вашего примера, Вам необходимо добавить<br />
<code>flex-wrap: wrap;</code><br />
в контейнер.</p>
					<footer>
						<a href="http://broadcastto.blogspot.com" rel="external nofollow" class="url">Rubinchyk Alexey</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-6228">15 января ’14 в 13:35</a></time>
					</footer>
				</article>
				<article id="comment-12127"class="comment even thread-even depth-1">
					<p>Вадим, здравствуйте. Привет вам из 2015. Изучаю react-native и там есть слабая поддержка flexbox, во свем разобрался, что пока есть, но вот вопрос большой. Как из макета psd/tif перенести во flexbox? Есть ли тулзы какие нибудь? как можно было бы проще соотношения элементов расставить как в макетах от дизайнеров?</p>
					<footer>
						Максим						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-12127">26 апреля ’15 в 1:31</a></time>
					</footer>
				</article>
				<article id="comment-12128"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Максим,</b> боюсь я не слишком знаком с нюансами работы React Native и как именно Flexbox реализован там на уровне компонентов. Но я знаком с чистым Flexbox, CSS и вёрсткой. И мой опыт говорит: из готового плоского или послойного макета, который был нарисован в обычном редакторе, такие взаимодействия в код никак не перенести. Даже существующие «специальные» редакторы, вроде Macaw, такого не умеют. В этом и состоит умение верстать: вы смотрите на макет и видите как он устроен, потом открываете редактор и описываете его в коде. Пока только так.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-12128">26 апреля ’15 в 1:43</a></time>
					</footer>
				</article>
				<article id="comment-15436"class="comment even thread-even depth-1">
					<p>Доброе, как думаете, Флексбоксы нужно/можно использовать в верстке тех же лендингов или нет?</p>
					<footer>
						GoodProject						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-15436">8 сентября в 6:06</a></time>
					</footer>
				</article>
				<article id="comment-15442"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>GoodProject,</b> не важно: лендинг это или не лендинг, Флексбокс универсален и если позволяют требования совместимости (IE10+), то можно смело его использовать для любой вёрстки.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2013-05-27T11:52:31+00:00"><a href="index.html#comment-15442">8 сентября в 14:21</a></time>
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
	<!-- 10 & 0,472 -->
</body>
</html>
