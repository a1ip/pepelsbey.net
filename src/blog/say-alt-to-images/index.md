<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Скажем alt картинкам! — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Скажем alt картинкам!</a></h1>
				<time pubdate datetime="2008-05-26T15:28:22+00:00">26 мая ’08</time>
			</header>
			<p>Создавая доступные сайты, без сомнения, стоит обращать внимание и на то, как они выглядят при отключённой графике. Существует ряд традиционных рекомендаций, которые помогут вам в такой ситуации:</p>

<ul>
<li>Не забывайте добавлять фоновый цвет при указании фонового изображения, когда цвет фона страницы совпадает или не слишком контрастирует с цветом текста.</li>
<li>Постарайтесь обрисовать основные блоки, очертания которых формируются с помощью картинок, при помощи цвета фона или рамок. Чтобы каркас вашего сайта прорисовывался и без графики. Как пример такой практики — задание слабо контрастного цвета фона элементов <code>&lt;img&gt;</code> для иллюстраций в тексте для того, чтобы избежать дырок в тексте — конечно при условии, что картинкам заданы размеры.</li>
<li>Не ленитесь указывать альтернативный текст для изображений и не забывайте, что этот текст можно оформлять, применяя стили шрифта к элементу <code>&lt;img&gt;</code>.</li>
</ul>

<p>В принципе, можно продолжать и дальше, но я не об этом. Обратите внимание на последнюю рекомендацию — о ней помнит большинство верстальщиков, иначе можно получить линейкой по рукам от валидатора. Однако мало кто вспоминает про такой слегка сомнительный, но пока вполне легальный элемент, как <code>&lt;input type="image"/&gt;</code></p>

<p>И чёрт с ней, с иллюстрацией — не увидят, да может и к лучшему. А вот невозможность отправить форму при отсутствующей или неявно присутствующей кнопке — это уже дело посерьёзнее. И что будем делать? Понятное дело — прописывать текст действия, написанный или подразумеваемый на картинке. Но как? К примеру, встретил я на днях такое:</p>

<pre><code>&lt;input type="image" src="send.gif" value="Отправить"/&gt;</code></pre>

<p>Судя по всему, это сработано по аналогии с <code>&lt;input type="submit"/&gt;</code>, где задание атрибута <code>value="Отправить"</code> задаёт текст действия на кнопке. И ведь работает, правда, местами… Однако, как нам известно, элемент <code>&lt;input type="image"/&gt;</code> имеет красноречивый атрибут <code>alt</code> (наряду с типично картиночными <code>align, usemap, ismap</code>), предназначенный как раз для задания альтернативного текста.</p>

<p>Учитывая то, что валидатор не имеет ничего против атрибутов <code>value</code> и <code>alt</code> для <code>&lt;input type="image"/&gt;</code> в XHTML 1.0 Strict документе, то давайте проверим на практике — кто же из них круче. Предложим такой код следующему зверинцу: IE&nbsp;5–7, Firefox&nbsp;3, Opera&nbsp;9, Safari&nbsp;3…</p>

<pre><code>&lt;input type="image" src="send.gif" alt="Альтернативный текст"/&gt;</code>
<code>&lt;input type="image" src="send.gif" value="Чушь какая-то"/&gt;</code>
<code>&lt;input type="image" src="send.gif" value="Чушь какая-то" alt="Альтернативный текст"/&gt;</code></pre>

<p>…и получаем:</p>

<figure class="large">
	<img src="/pro/2008/05/say-alt-to-images/alt.vs.value.png" width="670" height="310" alt="Альтернативный текст: alt vs. value">
	<figcaption>Альтернативный текст: alt vs. value</figcaption>
</figure>

<p>Выходит, что <code>value</code> хоть и срабатывает в Firefox и Safari как альтернативный текст, но всё же напрочь перебивается значением <code>alt</code>, которое стабильно отображается во всех протестированных браузерах.</p>

<p>Вывод очевиден — помимо правильности использования атрибута <code>alt</code> по прямому назначению, это ещё и самый стабильный способ задания альтернативного текста для элемента <code>&lt;input type="image"/&gt;</code>.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>19</small>
				</header>
				<article id="comment-371"class="comment even thread-even depth-1">
					<p>Спасибо. Ценное замечание.<br />
Как-то до этого не обращал на это внимание.</p>
<p>Из серии: Теща проглотила 10 копеек. Мелочь а приятно.</p>
					<footer>
						Repka						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-371">26 мая ’08 в 16:47</a></time>
					</footer>
				</article>
				<article id="comment-372"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Проблема с третьим пунктом: альтернативный текст должен писать тот же, кто пишет основной текст, но он врядли знает об этом. Инструкций о том как это правильно сделать очень мало, да и те на английском. Оттого грамотный альтернативный текст - удивительная редкость.</p>
					<footer>
						<a href="http://uggallery.audiopeace.ru" rel="external nofollow" class="url">uggallery</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-372">26 мая ’08 в 17:20</a></time>
					</footer>
				</article>
				<article id="comment-373"class="comment even thread-even depth-1">
					<blockquote><p>грамотный альтернативный текст - удивительная редкость</p></blockquote>
<p>Отчасти — это проблема CMS'ок, когда при вставке картинок не предлагается ввести их описание. WordPress в это смысле — молодец, выдаёт два promt'а: для url и alt.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-373">26 мая ’08 в 17:26</a></time>
					</footer>
				</article>
				<article id="comment-376"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А я поругаюсь не на alt, а что вместе с ним очень редко прописывают width и height (c display:block) в css для часто используемых img-элементов (анонсы к новостям, например), потому что в том же firefox alt-текст может выгядеть несколько не так, как хотелось бы.</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-376">26 мая ’08 в 20:06</a></time>
					</footer>
				</article>
				<article id="comment-385"class="comment even thread-even depth-1">
					<blockquote><p>что вместе с ним очень редко прописывают width и height</p></blockquote>
<p>Поддерживаю. Некоторые CMS сами забивают альты, руководствуюсь скажем названием статьей. А посколько статья может быть озаглавлена нехилым таким предложением, то при отключении картинок, сайт превращается в целлюлитную жопу.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-385">27 мая ’08 в 23:00</a></time>
					</footer>
				</article>
				<article id="comment-394"class="comment odd alt thread-odd thread-alt depth-1">
					<p>— Неправильными цмсками пользуетесь, господа. — грустно сказал Никита Селецкий, переключаясь на таб с мануалом по TYPO3...</p>
<p>Автору спасибо за статью. А чем использование  лучше  с фоновым рисунком? Ну разве что использование графической кнопки без надписи. Хотя для submit обычно пишется, что собственно будет происходить.</p>
					<footer>
						<a href="http://seleckis.lv" rel="external nofollow" class="url">Nikita</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-394">29 мая ’08 в 0:49</a></time>
					</footer>
				</article>
				<article id="comment-395"class="comment even thread-even depth-1">
					<blockquote><p>А чем использование лучше с фоновым рисунком?</p></blockquote>
<p>Что-то не пойму о чём речь.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-395">29 мая ’08 в 0:56</a></time>
					</footer>
				</article>
				<article id="comment-403"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Однако мало кто вспоминает про такой слегка сомнительный, но пока вполне<br />
легальный элемент, как</p></blockquote>
<p>Почему сомнительный?</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-403">29 мая ’08 в 15:23</a></time>
					</footer>
				</article>
				<article id="comment-404"class="comment even thread-even depth-1">
					<blockquote><p>Почему сомнительный?</p></blockquote>
<p>Потому, что это скорее IMG, который используется не в качестве иллюстрации, а в качестве элемента формы. Понимаете?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-404">29 мая ’08 в 17:30</a></time>
					</footer>
				</article>
				<article id="comment-410"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Извините за повтор, но я ошибся:<br />
Чем использование input type=&quot;image&quot; лучше input type=&quot;submit&quot; с фоновым рисунком?</p>
					<footer>
						<a href="http://seleckis.lv" rel="external nofollow" class="url">Nikita</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-410">30 мая ’08 в 13:57</a></time>
					</footer>
				</article>
				<article id="comment-411"class="comment even thread-even depth-1">
					<blockquote><p>Чем использование input type="image" лучше input type="submit" с фоновым рисунком?</p></blockquote>
<p>Да ничем, просто это проще ;) Нормальная резиновая кнопка с масштабируемыми скруглениями — это, в лучшем случае, 4 экстра-div'а, а если нужна полупрозрачная тень, то в разы больше…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-411">30 мая ’08 в 14:19</a></time>
					</footer>
				</article>
				<article id="comment-489"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Нормальная резиновая кнопка с масштабируемыми скруглениями — это, в лучшем случае, 4 экстра-div'а</p></blockquote>
<p>hint: css3</p>
<pre>
<code>border-radius</code>
<code>-moz-border-radius</code>
<code>-webkit-border-radius</code>
</pre>
<p>а если нужна полупрозрачная тень, то в разы больше…</p>
<pre>
<code>opacity</code>
<code>box-shadow</code>
</pre>
					<footer>
						siegerstein						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-489">12 июля ’08 в 11:41</a></time>
					</footer>
				</article>
				<article id="comment-490"class="comment even thread-even depth-1">
					<p>Эмм, а IE6–8, значит, идут лесом? Категорично…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-490">12 июля ’08 в 12:00</a></time>
					</footer>
				</article>
				<article id="comment-548"class="comment odd alt thread-odd thread-alt depth-1">
					<p>но вот честно, неужели в нынешние времена рассвета видео-хостингов и трекеров кто-то еще просматривает сайты без включенной графики?<br />
может и полезно делать сайт совместимым, но имхо это уже стало ненужной работой.</p>
					<footer>
						<a href="http://www.wordpressplugins.ru/" rel="external nofollow" class="url">Flector</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-548">2 августа ’08 в 4:23</a></time>
					</footer>
				</article>
				<article id="comment-549"class="comment even thread-even depth-1">
					<p>Двайте признаем честно, жизнь не заканчивается за МКАДом, где скорости таковы, что… ладно. Но помимо сценария «картинки отключены» есть ещё и такие:</p>
<p>— Пользователь физически не может увидеть картинки<br />
— Загрузка картинок по какой-то причине прервана частично или полностью<br />
— Поиск по картинкам Google/Yandex, где правильный alt весьма важен</p>
<p>…и всё это обеспечивает ту или иную доступность сайта. Неужели этого мало?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-549">2 августа ’08 в 7:16</a></time>
					</footer>
				</article>
				<article id="comment-550"class="comment odd alt thread-odd thread-alt depth-1">
					<p>с точки зрения SEO можно и title для картинок прописывать. да и самим картинкам давать осмысленные имена.<br />
но мы же не о SEO говорим? не знаю что там с МКАД'ом, я за 41 км от него живу. но даже в глубинке канал 128кбс уже считается слабеньким.</p>
					<footer>
						<a href="http://www.wordpressplugins.ru/" rel="external nofollow" class="url">Flector</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-550">2 августа ’08 в 7:43</a></time>
					</footer>
				</article>
				<article id="comment-551"class="comment even thread-even depth-1">
					<p>Скажу проще: есть более, чем одна причина для корректного использования alt — а поскольку это не сложно, то я не вижу причин отказывать себе в этом.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-551">2 августа ’08 в 7:53</a></time>
					</footer>
				</article>
				<article id="comment-2031"class="comment odd alt thread-odd thread-alt depth-1">
					<p>пмнится мне что alt не работал в каких то стареньких версиях толи оперы толи мозилы... непомню но именно из-за этого всегда использовал title</p>
					<footer>
						nesQuake						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-2031">21 ноября ’08 в 1:04</a></time>
					</footer>
				</article>
				<article id="comment-2109"class="comment even thread-even depth-1">
					<p>nesQuake, всегда он работал. Просто в IE он появляется при наведении, а в FF и Опере нет. В принципе и появляться он там не должен, это ошибка IE.</p>
					<footer>
						BeTePoK						<time pubdate datetime="2008-05-26T15:28:22+00:00"><a href="index.html#comment-2109">25 ноября ’08 в 2:07</a></time>
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
	<!-- 17 & 0,454 -->
</body>
</html>
