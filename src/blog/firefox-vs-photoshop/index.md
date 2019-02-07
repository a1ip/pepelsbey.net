<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Firefox против Photoshop — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Firefox против Photoshop</a></h1>
				<time pubdate datetime="2008-10-16T02:57:09+00:00">16 октября ’08</time>
			</header>
			<p>Нет, у меня всё в порядке с рассудком&nbsp;— я не пытаюсь сравнить тёплое с мягким. Дело в том, что буквально только что вышла вторая бета Firefox&nbsp;3.1, помимо всяческих <code>&lt;audio&gt;</code> и <code>&lt;video&gt;</code>, поддерживающая набор <a href="http://developer.mozilla.org/en/Firefox_3.1_for_developers#Web_site_and_application_changes">новых интересных CSS-свойств</a>.</p>

<p>В частности, появилась поддержка свойства <code>box-shadow</code>, пока с только с вендорным префиксом <code>-moz-box-shadow</code>. Свойство&nbsp;— свойством, ничего серьёзного&nbsp;— блок просто сможет отбрасывать тень. Но если подумать, то <code>box-shadow</code> входит в группу сложных визуальных свойств вроде <code>border-radius</code>, <code>border-image</code>, <code>text-shadow</code>, реализация которых по-настоящему полезна только в том случае, когда все браузеры  не только корректно поддерживают синтаксис правила, но ещё и более-менее одинаково отрисовывают все спецэффекты.</p>

<p>Помимо Firefox&nbsp;3.1, свойство <code>box-shadow</code> уже более полутора лет поддерживает <a href="http://webkit.org/">Webkit</a>, а вместе с ним, с некоторых пор, и Safari&nbsp;3.1, а также… уже чёрт знает сколько лет, <code>box-shadow</code>, точнее <code>drop-shadow</code>, умеет делать Photoshop.</p>

<p>Поскольку Photoshop является отраслевым стандартом для отрисовки макетов, то вполне логично принять его способ отбрасывания тени за эталонный. Речь о качестве этой тени сейчас не идёт. Параметры фильтра <strong>Drop Shadow</strong> максимально приближены к значениям свойства <code>box-shadow</code> в дальнейших примерах:</p>

<ul>
<li>Color: #000</li>
<li>Opacity: 100%</li>
<li>Distance: 0</li>
<li>Spread: 0</li>
<li>Size: 100px</li>
</ul>

<figure class="small">
	<a href="/pro/2008/10/firefox-vs-photoshop/photoshop.png" rel="darkbox"><img src="/pro/2008/10/firefox-vs-photoshop/photoshop-t.png" width="230" height="140" alt="Photoshop, drop shadow"></a>
	<figcaption>Photoshop, drop shadow</figcaption>
</figure>

<p><strong>Photoshop, drop shadow</strong>&nbsp;— таким образом, размер видимой тени в данном случае составил 94 из заданных 100 пикселов&nbsp;— таковы особенности создания тени этим редактором.</p>

<p>Следующим продемонстрирует нам способность отбрасывать тень браузер, больше известный как «убийца IE»,&nbsp;— Firefox. И вот что ему для этого нужно: <code>-moz-box-shadow:0 0 100px #000</code></p>

<p>Синтаксис сокращённого правила в нашем примере таков:</p>

<ul>
<li>Горизонтальное смещение</li>
<li>Вертикальное смещение</li>
<li>Величина размытия (spread)</li>
<li>Цвет тени (color)</li>
</ul>

<p>Подробное описание свойства <code>box-shadow</code> доступно в <a href="http://www.w3.org/TR/CSS3-background/#the-box-shadow">черновиках W3C</a>.</p>

<figure class="small">
	<a href="/pro/2008/10/firefox-vs-photoshop/firefox.png" rel="darkbox"><img src="/pro/2008/10/firefox-vs-photoshop/firefox-t.png" width="230" height="140" alt="Firefox, box-shadow"></a>
	<figcaption>Firefox, box-shadow</figcaption>
</figure>

<p>В скобках указаны примерные аналоги настроек фильтра Drop Shadow в Photoshop, за исключением смещения&nbsp;— оно работает иначе и получается из сочетания значений <var>angle</var> и <var>distance</var>.</p>

<p><strong>Firefox, box-shadow</strong>&nbsp;— размер тени в данном случае составил ровно 100 пикселов (ну, как сказали&nbsp;— так и сделал) и по структуре своей выглядит несколько грубее, чем в предыдущем примере. Однако стоит отметить довольно близкое сходство с нашим эталоном.</p>

<p>Завершает показательные выступления браузер Safari, в котором свойство <code>box-shadow</code> хоть и появилось впервые на рынке, но до сих пор прячется за префиксом: <code>-webkit-box-shadow:0 0 100px #000</code></p>

<figure class="small">
	<a href="/pro/2008/10/firefox-vs-photoshop/safari.png" rel="darkbox"><img src="/pro/2008/10/firefox-vs-photoshop/safari-t.png" width="230" height="120" alt="Safari, box-shadow"></a>
	<figcaption>Safari, box-shadow</figcaption>
</figure>

<p><strong>Safari, box-shadow</strong>&nbsp;— и мы видим нечто необычное. Несмотря на указанную величину размытия в 100 пикселов, размеры видимой тени составили всего 35 пикселов.</p>

<p>До выхода версии Firefox, поддерживающей это свойство, и до попыток сравнивать способ отбрасывания тени с эталонным, такое поведение казалось вполне нормальным&nbsp;— ну мало ли какой там механизм размытия, мало ли от какой точки ведётся отсчёт. Теперь же возникает очевидная сложность&nbsp;— для использования данного свойства нужно быть уверенным если уж и не в идентичности способов отображения тени в основных браузерах, то хотя бы в примерной схожести.</p>

<p>Выхода из этой ситуации может быть два:</p>

<ul>
<li>Подробное описание в спецификации CSS3 способа формирования тени, не допускающее сколь-нибудь серьёзных различий в браузерах, которые заявили о полной поддержке спецификаци.</li>
<li>При отсутствии в спецификации подробных инструкций по формированию тени, производители браузеров могут просто договориться о каком-то компромиссе.</li>
</ul>

<p>И пока в черновиках спецификации указано <q>the exact algorithm is not specified</q>, нам остаётся придумывать способы скомпенсировать разницу в реализациях этого непростого свойства&nbsp;— благо у нас пока есть вендорные префиксы.</p>

<p>К примеру, данный код выводит приблизительно одинаковые тени, как в Firefox&nbsp;3.1, так и в Safari&nbsp;3.1:</p>

<pre><code>-moz-box-shadow:0 0 34px #000;</code>
<code>-webkit-box-shadow:0 0 100px rgba(0,0,0,.97);</code></pre>

<figure class="small">
	<a href="/pro/2008/10/firefox-vs-photoshop/safari-firefox.png" rel="darkbox"><img src="/pro/2008/10/firefox-vs-photoshop/safari-firefox-t.png" width="230" height="120" alt="Safari vs. Firefox, box-shadow"></a>
	<figcaption>Safari vs. Firefox, box-shadow</figcaption>
</figure>

<p>Достигнуто это было методом <em>научной подгонки</em>&nbsp;— как размера тени, так и диапазона от начального до конечного цветов градиента. Методика не то чтобы очень удобная, но при желании <em>сделать красиво</em> для современных браузеров можно и повозиться.</p>

<p>К слову сказать, Safari, при увеличении размеров тени до 800 пикселов и расширении размеров блока до 1000 пикселов, начал заметно тормозить. Вполне очевидно, что данные свойства, как и сама спецификация CSS3, до сих пор находятся в черновом варианте. Но прикоснуться к будущему всё равно приятно.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>14</small>
				</header>
				<article id="comment-1316"class="comment even thread-even depth-1">
					<p>Видимо разные начала отсчёта :)</p>
<p>Ох не туда движется паровоз развития веба - ещё старые-то стандарты не стандарты а рекомендации и поддержка в браузерах не ахти, а уже спешат намешать всего-всего, чтобы был веб похож на глянцевый журнал.</p>
					<footer>
						jahson						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1316">16 октября ’08 в 6:16</a></time>
					</footer>
				</article>
				<article id="comment-1322"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А картинок к статье не положено?))</p>
					<footer>
						Михаил						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1322">16 октября ’08 в 11:19</a></time>
					</footer>
				</article>
				<article id="comment-1324"class="comment even thread-even depth-1">
					<p>Пока Firefox не добил IE окончательно, думаю, этим свойством мало кто будет пользоваться.<br />
Картинки лучше было бы вставить в стаью, а не ссылками, неудобно с ридера читать.</p>
					<footer>
						<a href="http://blog.sribna.com" rel="external nofollow" class="url">Yuriy Drozdov</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1324">16 октября ’08 в 12:23</a></time>
					</footer>
				</article>
				<article id="comment-1323"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Почему — положено ) в виде ссылок: <a href="/pro/2008/10/firefox-vs-photoshop/photoshop.png" rel="nofollow">раз</a>-<a href="/pro/2008/10/firefox-vs-photoshop/firefox.png" rel="nofollow">два</a>-<a href="/pro/2008/10/firefox-vs-photoshop/safari.png" rel="nofollow">три</a>-<a href="/pro/2008/10/firefox-vs-photoshop/safari-firefox.png" rel="nofollow">четыре</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1323">16 октября ’08 в 11:56</a></time>
					</footer>
				</article>
				<article id="comment-1325"class="comment even thread-even depth-1">
					<p>Мне кажется для визуальных эффектов все еще удобнее пользоваться JavaScript. Кросс-браузерность он тоже сможет обеспечить. Тем более мне помниться что есть уже готовые решения, которые миксуют JS+CSS для полной совместимости со всеми браузерами.</p>
<p>А вообще как только эту фичу начнут использовать массово, то и шум поднимут верстальщики, и браузеры договорятся как что рисовать. А пока хаки...</p>
					<footer>
						<a href="http://livedev.org" rel="external nofollow" class="url">ilya</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1325">16 октября ’08 в 13:11</a></time>
					</footer>
				</article>
				<article id="comment-1326"class="comment odd alt thread-odd thread-alt depth-1">
					<p>2ilya А как без использования картинок с помощью скриптов и цсс реализовть тень. Мне кажется, пока не дойдет до адекватного поддерживания стандартов всеми браузерами ни о каких фичах говорить рано. Или пока все браузеры не будут сделаны на одной основе... </p>
<blockquote><p>А вообще как только эту фичу начнут использовать массово, то и шум поднимут верстальщики, и браузеры договорятся как что рисовать.</p></blockquote>
<p>Шум по поводу кроссбраузерности уже давно идет. И к чему это привело. ИЕ как был бичем так и остался, остается с надеждой поглядывать на 8 версию...</p>
					<footer>
						<a href="http://zodios.net" rel="external nofollow" class="url">Zodios</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1326">16 октября ’08 в 13:44</a></time>
					</footer>
				</article>
				<article id="comment-1327"class="comment even thread-even depth-1">
					<p>Вообще, боюсь, что внедрение данного и других «украшательных» свойств в стандарт приведёт к появлению большого количества безвкусных сайтов. Абсолютно точно так же, как изобилие в творениях начинающих дизайнеров разного рода стилевых эффектов. Особенно drop shadow и bevel and emboss.</p>
<p>А то, что процессор при их отрисовке грузится - так это предсказуемая реакция (Adobe Flash CS3 тоже замечательно тормозит при перемещении панели Actions, когда она правильная, плавающая). Это ж сколько всего обсчитать нужно. Вот если бы разработчики браузеров не только сделали реализацию этих свойств одинаковой, но и предусмотрели возможность их отключения при необходимости - был праздник вселенский и веселуха. </p>
<p>А картинки всё-таки хочется превьюшками-ссылками.</p>
					<footer>
						Михаил						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1327">16 октября ’08 в 14:05</a></time>
					</footer>
				</article>
				<article id="comment-1329"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>Поскольку Photoshop является отраслевым стандартом для отрисовки макетов</cite></p>
<p>Вот это ужасно. Если мне приходится рисовать сайты — рисую в файерворксе. Фотошоповские хоткеи есть, остальное не в пример удобнее, быстрее и УГАРНЕЕ.</p>
					<footer>
						1smash1						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1329">16 октября ’08 в 15:00</a></time>
					</footer>
				</article>
				<article id="comment-1330"class="comment even thread-even depth-1">
					<p>Ну, Fireworks я и сам люблю нежной любовью. Очень долго рисовал в нём, но таки-перелез в Photoshop. Почему? Вот простой пример — создай в Fw какую-нибудь диагональную шейпу, где-нибудь 12x12 пикселов, а потом сделай Flip Horizonal. А теперь сравни шейпы — являются ли они зеркальным отражением? Нет. А хотелось бы, особенно это важно при отрисовке такой мелочи. А Photoshop всё делает правильно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1330">16 октября ’08 в 15:05</a></time>
					</footer>
				</article>
				<article id="comment-1331"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>upd:</strong> по многочисленным просьбам, в заметку добавлены превьюшки</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1331">16 октября ’08 в 15:34</a></time>
					</footer>
				</article>
				<article id="comment-1333"class="comment even thread-even depth-1">
					<p>Для ІЕ тоже можно имитировать тень с помощью фильтров.</p>
					<footer>
						Serhiy						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1333">16 октября ’08 в 16:31</a></time>
					</footer>
				</article>
				<article id="comment-1335"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Serhiy,</strong> а вы сами пробовали ;) Лично я пробовал и был очень напуган результатом. Повторять не захотелось…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1335">16 октября ’08 в 20:12</a></time>
					</footer>
				</article>
				<article id="comment-1347"class="comment even thread-even depth-1">
					<p>Думаю самым популярным поисковым запросом в 2010 году будет &quot;How to disable drop shadow effect in IE&quot; =))</p>
					<footer>
						<a href="http://sunnyfetis.livejournal.com" rel="external nofollow" class="url">feits</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1347">17 октября ’08 в 18:38</a></time>
					</footer>
				</article>
				<article id="comment-1370"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Больше чем уверен, что разработчики браузеров наслышаны о проблемах, свзяанных с версткой под их продукт. Чего никак не могу понять, так это почему если все знают как именно это работает где-то в том же сафари или даже IE не реализовать точно так же… да и вообще освоили бы хорошенько существующие технологии и причесали бы их под общую гребенку. </p>
<p>Абсолютному большинству даже сейчас хватает html 3 чтобы делать сайты на народе и инлайнить некоторые стили. Очень мало людей знают на достаточном уровне CSS2, действительно понимают зачем им нужна сила CSS3, а главное <i>понимают как правильно ей пользоваться</i>.  Ох чувствую отхватим мы с CSS3 еще больше бегающих строк, летающих мячиков и остальной [[censored]].</p>
					<footer>
						<a href="http://getkandy.com" rel="external nofollow" class="url">keep</a>						<time pubdate datetime="2008-10-16T02:57:09+00:00"><a href="index.html#comment-1370">19 октября ’08 в 23:50</a></time>
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
	<!-- 14 & 0,449 -->
</body>
</html>
