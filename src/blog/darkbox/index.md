<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Даркбокс — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Даркбокс</a></h1>
				<time pubdate datetime="2008-11-20T15:49:32+00:00">20 ноября ’08</time>
			</header>
			<p><em>Читайте про более новую версию скрипта в записи «<a href="/2010/12/darkbox-return/">Возвращение Даркбокса</a>»</em></p>

<p>К счастью, прошли времена, когда для загрузки картинки разработчики открывали отдельное окно браузера. У нас нынче <em>вебдваноль</em>, поэтому открывать отдельные окна это <em>моветон</em>, а современные JS-фрейворки дают возможность показать картинку по-настоящему красиво без особых сложностей.</p>

<p>И вроде решений для этого написано уйма — бери, да используй. Но вот беда — все они сделаны по принципу «plug-n-play», мол подключай и не парься. В итоге эти решения снабжены всевозможными фичами, которые позволяют открывать окошки с любым содержимым, передвигаться по галерее при помощи клавиатурных сокращений и многое-многое другое. Классно, ведь! Нет? Ну, не совсем — в итоге код такого плагина распухает от всех этих возможностей, которыми никто не будет пользоваться, и непонятных HTML-шаблонов, содержащих сомнительный код — и тут же стили к нему. А вот это уже не слишком классно…</p>

<p>Если страдать <em>синдромом аккуратизма</em> определённой тяжести, то подход <q>а всё равно это JS, какая нафиг разница</q> становится совсем неприемлем. А переписывание чужих решений практически равноценно написанию собственного — чем, собственно, я и занялся при подготовке новой версии этого сайта.</p>

<p>Начиналось всё с простых, но очень правильных принципов:</p>

<ul>
<li>Данные, т.е. картинка, — в HTML</li>
<li>Оформление — в CSS</li>
<li>Динамика — в JS, с полной обратной совместимостью</li>
</ul>

<p>В итоге, благодаря применению <a href="http://jquery.com/">jQuery</a>, получилась не слишком сложная функция и набор стилей к ней, которые решают простую задачу — открытие одной картинки с затемнением всего окна.</p>

<p><a href="/pro/2008/11/darkbox/">Даркбокс</a> — пример работы, весь код в одном файле.</p>

<h2>Принципы работы</h2>

<p>Очень полезно начинать описание задачи не с фраз вроде «<em>а там такая штука крутится полупрозрачная, а потом пфф! и блёстки…</em>». Поэтому я начал с простого: у меня есть <em>просто ссылка</em> на <em>просто картинку</em>, и только если у пользователя включён JS, ссылка не срабатывает, а открывается то самое <em>полупрозрачное с блёстками</em>.</p>

<p>Контейнер для открытия картинки представляет собой блок вырванный из потока и спозиционированный при помощи <code>position:fixed</code>. Внутри него расположено само полупрозрачное затемнение и блок загрузчика с крутящимся псевдо-датчиком загрузки. Все эти объекты создаются динамически и складываются в нужном порядке:</p>

<pre><code>&lt;div class="popup-frame"&gt;</code>
<code>    &lt;div class="popup-shadow"&gt;&lt;/div&gt;</code>
<code>    &lt;div class="popup-loader"&gt;&lt;/div&gt;</code>
<code>&lt;/div&gt;</code></pre>

<p>Это дело красиво появляется и дальше в загрузчик вкладываются пока невидимые картинка и кнопка закрытия. Атрибут <code>src</code> берётся из <code>href</code> ссылки, <code>alt</code> из её <code>title</code>:</p>

<pre><code>&lt;img src="…" alt="…"/&gt;</code>
<code>&lt;span title="Закрыть">&lt;/span&gt;</code></pre>

<p>Сразу после загрузки нашей картинки, загрузчику выдаётся класс <code>popup-loaded</code>, который отключает датчик загрузки. Дальше он плавно меняет свои размеры, смещение, прозрачность и, наконец, ещё раз сменив класс на <code>popup-canvas</code>, показывает нам картинку. А на тень, кнопку и <kbd>Esc</kbd> вешается обработчик закрытия всей этой красоты.</p>

<p>Таким образом, всё оформление, что не участвует в анимации, применяется при помощи CSS-классов, а не присутствует в JS явно, как очень любят делать все плагинописатели.</p>

<h2>Неизбежное исключение</h2>

<p>Да, чуть было не забыл про IE. Данному скрипту удалось угодить всем его актуальным версиям, начиная с 5.5 и заканчивая 8.0. Проблемы с <code>position:fixed</code> для IE6 и младше решаются при помощи <code>expression</code>:</p>

<pre><code>* HTML BODY {</code>
<code>    background:url(about:blank) fixed;</code>
<code>    }</code>
<code>* HTML .popup-frame {</code>
<code>    position:absolute;</code>
<code>    top:expression(0+(</code>
<code>        (e=document.documentElement.scrollTop)</code>
<code>        ?e:document.body.scrollTop)+'px');</code>
<code>    }</code></pre>

<p>Правило <code>background:url(about:blank) fixed</code> задаёт пустое фиксированное изображение для того, чтобы позиционирование блока в IE6 работало плавно, без рывков. Прозрачность для всех версий IE решается при помощи <code>filter:alpha(opacity=N)</code>, а использование PNG-24 картинки для кнопки, столь же традиционно лечится для IE6 с помощью <code>AlphaImageLoader</code>.</p>

<p>В целом, написание скрипта прошло гладко, как по учебнику, за исключением выходки браузера Opera. Ему, видите ли, не получить размеры динамически созданной и уже загруженной картинки, пока она не будет вставлена в документ. Даже IE5 ничего подобного не вытворял, в прочем, мне не жалко.</p>

<p>Итак, перед вами не претендующее на красоту и универсальность, однако, простое и эффективное решение для открытия картинок в стиле <em>вебдваноль</em>. Если кому-то пригодится — буду только рад.</p>

<p><strong>19 декабря 2008:</strong> благодаря внимательности читателей, поправлены некоторые ошибки в IE6, в частности — методика борьбы с дрожащим фоном и <code>expression</code> теперь универсальны и работают как в Standard Mode, так и в Quirks Mode.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>47</small>
				</header>
				<article id="comment-2009"class="comment even thread-even depth-1">
					<p>Спасибо. Единственное НО: мне кажется, что привычнее "закрыть" делать справа от картинки. Когда хотел закрыть рука на автомате потянулась в правый верхний угол. имхо</p>
					<footer>
						<a href="http://rsboarder.biz" rel="external nofollow" class="url">rsboarder</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2009">20 ноября ’08 в 16:39</a></time>
					</footer>
				</article>
				<article id="comment-2013"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Очень здорово!</p>
<p>Не подозревал что в обычном лайтбоксе напихано столько не нужных вещей, что js файл можно сократить на столько! Работа сделана не зря - это точно.</p>
<p>Но я рядовой избалованный пользователь, и мне не хватает простой навигации (не клавиатурной) вперед/назад и отображение количества фотографий вместе с порядковым номером текущей фотографии.</p>
<p>Было бы это - я бы забыл про лайтбокс.</p>
					<footer>
						Дмитрий						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2013">20 ноября ’08 в 17:07</a></time>
					</footer>
				</article>
				<article id="comment-2014"class="comment even thread-even depth-1">
					<p>...так сказать, перешел бы на темную сторону.)</p>
					<footer>
						Дмитрий						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2014">20 ноября ’08 в 17:09</a></time>
					</footer>
				</article>
				<article id="comment-2015"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, было не плохо иметь метки к записям и к этой в частности solution (к примеру), чтобы можно было посмотреть все ваши решения по разным проблемам )</p>
<p>Хорошее решение, я бы в точности сделал (концептуально имеется ввиду).</p>
					<footer>
						Эди						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2015">20 ноября ’08 в 17:16</a></time>
					</footer>
				</article>
				<article id="comment-2016"class="comment even thread-even depth-1">
					<p>здорово!<br />
осталось добавить поддержку массивов изображений для галлерей</p>
					<footer>
						chestah						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2016">20 ноября ’08 в 17:27</a></time>
					</footer>
				</article>
				<article id="comment-2017"class="comment odd alt thread-odd thread-alt depth-1">
					<p>любопыственно.<br />
попробуем.</p>
					<footer>
						<a href="http://itstep.livejournal.com" rel="external nofollow" class="url">Дмитрий</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2017">20 ноября ’08 в 17:32</a></time>
					</footer>
				</article>
				<article id="comment-2018"class="comment even thread-even depth-1">
					<p>А зачем создавать элементы при открытии картинки? Во первых, это задержит пользователя (немножко), а во вторых — будет создавать всё новые элементы при каждом нажатии. Звучит неэкономно.</p>
					<footer>
						<a href="http://sokolov.cc" rel="external nofollow" class="url">Денис</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2018">20 ноября ’08 в 17:40</a></time>
					</footer>
				</article>
				<article id="comment-2019"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ага! То есть, все-таки, полгода нытья «напиши мне плагин для картинок» — мне, а вся слава в результате тебе?!</p>
					<footer>
						engel						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2019">20 ноября ’08 в 17:59</a></time>
					</footer>
				</article>
				<article id="comment-2021"class="comment even thread-even depth-1">
					<p>А если на странице будут присутствовать select-ы они будут перекрыватся в IE6 ? )</p>
					<footer>
						cogonet						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2021">20 ноября ’08 в 18:31</a></time>
					</footer>
				</article>
				<article id="comment-2023"class="comment odd alt thread-odd thread-alt depth-1">
					<p>IE8b2, режим совместимости со стандартами - кнопка закрытия в демке попадает девушке на лоб.</p>
					<footer>
						<a href="http://blog.ad.by" rel="external nofollow" class="url">enternet</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2023">20 ноября ’08 в 18:56</a></time>
					</footer>
				</article>
				<article id="comment-2030"class="comment even thread-even depth-1">
					<p>Если, честно, скрипт на 4 с натяжкой (если расценивать не как «просто мозг размять», а как претендент на публичный проект):<br />
1) как заметил cogone, в IE 6 select'ы будут просвечивать через фон и box<br />
2) наверно, лучше бы, добавлять динамический контент один раз (например при первой загрузки darkbox'а или при загрузки страницы)<br />
3) для распространения и использования, код удобнее бы обернуть в класс или plug-in для jQuery.</p>
<p>Плюс, если уж начал придираться, то: если картинка по размеру больше чем окно браузера, то darkbox «улетает» за границы. :))</p>
					<footer>
						Ви						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2030">20 ноября ’08 в 23:19</a></time>
					</footer>
				</article>
				<article id="comment-2033"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ви прав, динамический контент нужно добавлять один раз, а не при каждом попапе. Кроме этого в функции closeit не помешало бы unbind keydown с документа.<br />
И ещё вот эта конструкция: shadow.click(function(){closeit()}); смело заменяется вот этой: shadow.click(closeit);</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2033">21 ноября ’08 в 3:27</a></time>
					</footer>
				</article>
				<article id="comment-2037"class="comment even thread-even depth-1">
					<p>Ещё бы он не перебивал CtrlShiftClick, который открывает картинку в фоновой странице, да и ShiftClick, или открыть в новой странице, было бы куда-ни-шло.</p>
<p>А вообще, все эти лайтбоксы есть одно из худших проявлений, можно даже сказать полный уёбдваноль. В особенности, когда не используют a, а в место этого вешают дурные обработчкии на спаны, или там img</p>
					<footer>
						<a href="http://kildor.mirandaim.ru" rel="external nofollow" class="url">Kildor</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2037">21 ноября ’08 в 8:44</a></time>
					</footer>
				</article>
				<article id="comment-2038"class="comment odd alt thread-odd thread-alt depth-1">
					<p>«Ещё бы он не перебивал CtrlShiftClick, который открывает картинку в фоновой странице, да и ShiftClick, или открыть в новой странице, было бы куда-ни-шло».</p>
<p>Вот за это всегда не любил такие открывалки. Оно, конечно, красиво. И, если на странице одна-две картинки, даже удобно. Но если надо посмотреть несколько картинок, то это просто не работает.</p>
					<footer>
						<a href="http://birdwatcher.ru" rel="external nofollow" class="url">Артём Сапегин</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2038">21 ноября ’08 в 10:50</a></time>
					</footer>
				</article>
				<article id="comment-2039"class="comment even thread-even depth-1">
					<p>«…<em>в прочем</em>, мне не жалко».</p>
					<footer>
						<a href="http://birdwatcher.ru" rel="external nofollow" class="url">Артём Сапегин</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2039">21 ноября ’08 в 10:52</a></time>
					</footer>
				</article>
				<article id="comment-2042"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>если расценивать не как «просто мозг размять»</p></blockquote>
<p>В точку. Это как раз мелочь, написанная для конкретной задачи, именно разминка для мозга. По этой же причине в заметке рассматривается только вёрсточная часть этого решения. JS-часть безусловно нужно оптимизировать, чем я и займусь на основе ваших советов )</p>
<p>Спасибо всем за отзывы.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2042">21 ноября ’08 в 12:39</a></time>
					</footer>
				</article>
				<article id="comment-2045"class="comment even thread-even depth-1">
					<p>Вот побаловался тут маленько :)<br />
<a href="http://riamatic.com/poligon/darkbox" rel="nofollow">http://riamatic.com/poligon/darkbox</a><br />
<a href="http://riamatic.com/poligon/darkbox/docs" rel="nofollow">http://riamatic.com/poligon/darkbox/docs</a></p>
					<footer>
						akira						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2045">21 ноября ’08 в 14:12</a></time>
					</footer>
				</article>
				<article id="comment-2051"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А за что мой коммент был удален? За ссылку, так уберу ее.<br />
Или скрины нужны чтобы убедиться что в ИЕ6 не все так гладко?</p>
					<footer>
						milax						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2051">21 ноября ’08 в 18:41</a></time>
					</footer>
				</article>
				<article id="comment-2052"class="comment even thread-even depth-1">
					<blockquote><p>А за что мой коммент был удален?</p></blockquote>
<p>Именно. Просто прямо перед вашим был опубликован подобный комментарий с явным спам-доменом. Прошу прощения.</p>
<p>И спасибо за ваше замечание — публикация готовилась на ходу, поэтому склейка двух версий прошла не очень гладко — кое-что потерялось.</p>
<p>IE8 пока сброшен в IE7-режим, а для IE6 всё поправлено.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2052">21 ноября ’08 в 19:34</a></time>
					</footer>
				</article>
				<article id="comment-2053"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>akira,</strong> спасибо! Внимательно посмотрю твой вариант. На первый взгляд здорово, многому можно научиться. Думаю, что выпущу апдейт в этом ключе.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2053">21 ноября ’08 в 19:38</a></time>
					</footer>
				</article>
				<article id="comment-2054"class="comment even thread-even depth-1">
					<p>pepelsbey, спасибо<br />
Ссылку на свой блог больше оставлять не буду, ато мало ли :)</p>
					<footer>
						milax						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2054">21 ноября ’08 в 19:41</a></time>
					</footer>
				</article>
				<article id="comment-2055"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>milax,</strong> на войне как на войне, к сожалению. А со спамерами сейчас именно война (</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2055">21 ноября ’08 в 19:44</a></time>
					</footer>
				</article>
				<article id="comment-2063"class="comment even thread-even depth-1">
					<blockquote><p>мне кажется, что привычнее "закрыть" делать справа от картинки</p></blockquote>
<p>Кнопка Esc тоже находится слева и тоже срабатывает ;) Я понимаю, что для вас расположение контролов справа удобнее так же, как для меня слева — из-за Windows и Mac OS X, соответственно.</p>
<p>Я выбрал такой вариант, по праву определяя концепцию этого сайта.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2063">22 ноября ’08 в 2:40</a></time>
					</footer>
				</article>
				<article id="comment-2087"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Красиво конечно, но на большом мониторе притормаживает анимация во всех браузерах.</p>
					<footer>
						<a href="http://www.designwizard.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2087">23 ноября ’08 в 17:02</a></time>
					</footer>
				</article>
				<article id="comment-2118"class="comment even thread-even depth-1">
					<p>Octane, на маленьких тоже притормаживает.</p>
<p>Решение отличное, но немного смущает размер файла jquery.js, ~55кб. Сжать бы его до 20-30кб, и тогда скрипт возможно, пошел бы в массы.</p>
					<footer>
						<a href="http://frize.ru" rel="external nofollow" class="url">Frize</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2118">25 ноября ’08 в 17:37</a></time>
					</footer>
				</article>
				<article id="comment-2120"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Скрипт задумывался для случая, когда вы уже используете jQuery. В любом случае, если jQuery ещё и Gzip'овать, то получается порядка 15 кб.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2120">25 ноября ’08 в 17:53</a></time>
					</footer>
				</article>
				<article id="comment-2131"class="comment even thread-even depth-1">
					<p>Интересное решение, но жаль лишь что это для пользователей библиотеки jQuery.  Лично я с программистом выбрали mootools. Вадим не планируешь работать с этим фреймворком.</p>
					<footer>
						<a href="http://pepyaka.net" rel="external nofollow" class="url">Cinic</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2131">26 ноября ’08 в 16:28</a></time>
					</footer>
				</article>
				<article id="comment-2132"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Неторопливо, но верно делаю новую версию, помочь с созданием плагинов для mootools и jQuery взялся один хороший JS-программист, так что всё будет ;) …и на качественно новом уровне.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2132">26 ноября ’08 в 17:04</a></time>
					</footer>
				</article>
				<article id="comment-2138"class="comment even thread-even depth-1">
					<p>Во втором абзаце «Принципов работы» слово «превдо-датчиком»...</p>
					<footer>
						<a href="http://yar-webdev.ru/" rel="external nofollow" class="url">ЯR</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2138">26 ноября ’08 в 23:07</a></time>
					</footer>
				</article>
				<article id="comment-2217"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Во втором абзаце «мол подклюйчай».</p>
					<footer>
						Alexander						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2217">2 декабря ’08 в 1:06</a></time>
					</footer>
				</article>
				<article id="comment-2218"class="comment even thread-even depth-1">
					<p>Большое спасибо за найденные ошибки — вот что значит писать в дороге )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2218">2 декабря ’08 в 1:33</a></time>
					</footer>
				</article>
				<article id="comment-2241"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Подозрительное правило filter:true, в данной ситуации, заменяет традиционную методику с фальшивой картинкой и background-attachment:fixed для того, чтобы позиционирование блока работало плавно, без рывков.</p></blockquote>
<p>Судя по всему, это работает только в Quirks mode. Ваш пример у меня, к сожалению, дергается при скроллинге (кроме стопроцентного блока — он не дрожит никогда, даже без доп. ухищрений). В Standards mode мне удалось победить дрожание, лишь задав body полноценный фильтр — ценой изрядных тормозов.</p>
<p>Все-таки, по моим наблюдениям, самый юзабельный и "кросс-режимный" вариант — это
<pre><code>html { background: #fff url(about:blank) fixed; }</code></pre>
					<footer>
						SelenIT						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2241">3 декабря ’08 в 18:40</a></time>
					</footer>
				</article>
				<article id="comment-2294"class="comment even thread-even depth-1">
					<pre><code>url(about:blank)</code></pre>
<p>Эта штука действительно срабатывает так же, как и фейковая картинка?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2294">7 декабря ’08 в 2:55</a></time>
					</footer>
				</article>
				<article id="comment-2314"class="comment odd alt thread-odd thread-alt depth-1">
					<p>хороший скрипт только под  в  Internet Explorer 7 если страничка больше самого экрана, не закрашивается она, как то так. А так всё хорошо,</p>
					<footer>
						ADAM						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2314">8 декабря ’08 в 3:51</a></time>
					</footer>
				</article>
				<article id="comment-2325"class="comment even thread-even depth-1">
					<p>У меня да, независимо от доктайпа (режима).</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2325">8 декабря ’08 в 11:49</a></time>
					</footer>
				</article>
				<article id="comment-2329"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Можно даже так:</p>
<pre><code>url(a)</code></pre>
<p>url просто не должен быть пустым.</p>
					<footer>
						Panya						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2329">8 декабря ’08 в 16:00</a></time>
					</footer>
				</article>
				<article id="comment-2332"class="comment even thread-even depth-1">
					<p>Только, насколько я понимаю, url(a) — это обычный относительный URI (притом скорее всего ошибочный), а about:blank — легитимный URL, заведомо не вызывающий запроса к серверу (полностью "удовлетворяемый" локально). По этим соображениям я его и выбрал...</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2332">8 декабря ’08 в 16:53</a></time>
					</footer>
				</article>
				<article id="comment-2357"class="comment odd alt thread-odd thread-alt depth-1">
					<p>а в таком случае url(#) не будет ли полноценной аналогией?<br />
Тоже, получается, легитимный URI, не требующий запроса к серверу, только запись короче.</p>
					<footer>
						<a href="http://ismmurf.spaces.live.com/" rel="external nofollow" class="url">smmurf</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2357">10 декабря ’08 в 11:49</a></time>
					</footer>
				</article>
				<article id="comment-2385"class="comment even thread-even depth-1">
					<p>Про "#" я не так уверен, это все-таки ссылка не заведомо "в пустоту", а на тот же документ. А IE6 вообще любит тащить фоновые картинки с сервера по каждому поводу и без повода (по крайней мере, при некоторых настройках и без волшебного средства <a href="http://www.mister-pixel.com/index.php?Content__state=is_that_simple" rel="nofollow">от Попы</a>:). К тому же был <a href="http://phorror.livejournal.com/40819.html" rel="nofollow">прецедент</a> (хоть и в др. браузере).</p>
<p>Эффект фиксации-то оно дает, но за отсутствие запросов не ручаюсь, чуть позже проверю на полноценном IE6...</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2385">12 декабря ’08 в 17:39</a></time>
					</footer>
				</article>
				<article id="comment-2428"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Действительно здорово. Надо будет на досуге поковырять. </p>
<p>То есть там 1 скриптик остался+ jQuery?</p>
					<footer>
						<a href="http://kitich.in.ua" rel="external nofollow" class="url">Kitich</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2428">17 декабря ’08 в 3:58</a></time>
					</footer>
				</article>
				<article id="comment-2572"class="comment even thread-even depth-1">
					<p><a href="http://fancy.klade.lv/" rel="nofollow">http://fancy.klade.lv/</a><br />
FancyBox. Не похож на ваш?</p>
					<footer>
						bestann						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-2572">25 декабря ’08 в 16:41</a></time>
					</footer>
				</article>
				<article id="comment-3023"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Прикрутил эту штуку к своему новому проекту :) (только загрузчик нарисовал другой :)). Спасибо, Вадим!<br />
По поводу больших картинок, которые выше высоты окна...Нельзя ли позиционировать их относительно самого окна, а не относительно .popup-loader ? При этом задать им процентную высоту от высоты окна? Пока для больших картинок не нашёл ничего лучшего, чем явно указать высоту  height: 550px; width: auto; (но возникла необходимость  в кнопке "Увеличить" :))</p>
					<footer>
						<a href="http://www.aksyonov.com" rel="external nofollow" class="url">Ростислав</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-3023">26 января ’09 в 9:57</a></time>
					</footer>
				</article>
				<article id="comment-3250"class="comment even thread-even depth-1">
					<p>Если во время загрузки картинки нажать Esc, загрузка прерывается, но затемнение не уходит.<br />
ФФ 3.0</p>
					<footer>
						<a href="http://brotkin.ru" rel="external nofollow" class="url">Иван</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-3250">4 февраля ’09 в 13:13</a></time>
					</footer>
				</article>
				<article id="comment-3272"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Видимо, нужно до момента полной загрузки ловить Esc и отменять его действие…<br />
Или же ловить его с самого начала и тут же закрывать окно. Спасибо за багрепорт, буду думать.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-3272">5 февраля ’09 в 15:20</a></time>
					</footer>
				</article>
				<article id="comment-3816"class="comment even thread-even depth-1">
					<p>Даркбокс понравился. Ничего лишнего и правильно работает при прокрутке.<br />
Использовал его на одном сайте, но так как там все на Mootools, пришлось портировать Даркбокс.<br />
Результат тут: <a href="http://torqueo.net/files/mootools-darkbox/" rel="nofollow">http://torqueo.net/files/mootools-darkbox/</a></p>
<p>Надеюсь, Вадим не против.</p>
					<footer>
						<a href="http://torqueo.net" rel="external nofollow" class="url">Bonch</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-3816">1 мая ’09 в 1:52</a></time>
					</footer>
				</article>
				<article id="comment-3817"class="comment odd alt thread-odd thread-alt depth-1">
					<p><a href="http://torqueo.net/darkbox-for-mootools/" rel="nofollow">Высказался</a> по оригинальному адресу.<br />
А так — конечно не против, более того — двумя руками «за».</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-3817">1 мая ’09 в 2:01</a></time>
					</footer>
				</article>
				<article id="comment-3819"class="comment even thread-even depth-1">
					<p>2 pepelsbey:</p>
<p>Я не сдержался и сделал порт второй версии Даркбокса. Плюс, добавил опциональный эффект падения окна при закрытии.</p>
<p>Новая версия там же: <a href="http://torqueo.net/files/mootools-darkbox/" rel="nofollow">http://torqueo.net/files/mootools-darkbox/</a></p>
<p>Про одновременное исчезновение фона и картинки что-то не понял. Помоему и в моем и в вашем скрипта все происходит одинаково - сколько не смотрел, не могу различий найти :(</p>
					<footer>
						<a href="http://torqueo.net" rel="external nofollow" class="url">Bonch</a>						<time pubdate datetime="2008-11-20T15:49:32+00:00"><a href="index.html#comment-3819">1 мая ’09 в 3:55</a></time>
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
	<!-- 21 & 0,566 -->
</body>
</html>
