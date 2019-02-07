<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Как новенький — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Как новенький</a></h1>
				<time pubdate datetime="2008-11-03T06:56:48+00:00">3 ноября ’08</time>
			</header>
			<p>Инициатива, начатая порядка трёх месяцев назад, наконец-то обернулась новым сайтом. Вы можете недоверчиво приглядываться — мол, вроде тот же, нет? Но уверяю вас, весь HTML, CSS и JS-код, а также часть плагинов для WordPress были написаны с нуля, а дизайн претерпел некоторые изменения.</p>

<p>С чего бы вдруг? Всё просто — предыдущей вёрстке исполнилось примерно полтора года и настало время её обновить для того, чтобы сделать сайт ещё быстрее, ещё удобнее и просто продемонстрировать некоторые новые технологические приёмы. Итак, чего же новенького? </p>

<h2>Документ и HTML</h2>

<p>Минусом предыдущей раскладки было не слишком логичное расположение блоков — элемент <code>#sidebar</code>, в силу технических особенностей вёрстки, располагался в коде <em>после</em> элемента <code>#foot</code>, теперь же всё логично:</p>

<pre><code>&lt;div id="page"&gt;</code>
<code>    &lt;div id="head"&gt;&lt;/div&gt;</code>
<code>    &lt;div id="content"&gt;&lt;/div&gt;</code>
<code>    &lt;div id="sidebar"&gt;&lt;/div&gt;</code>
<code>    &lt;div id="foot"&gt;&lt;/div&gt;</code>
<code>&lt;/div&gt;</code></pre>

<p>Также, для повышения доступности, было добавлено более подробное скрытое навигационное меню:</p>

<pre><code>&lt;ul class="skipto"&gt;</code>
<code>    &lt;li&gt;&lt;a href="#content"&gt;Содержимое&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href="#menu"&gt;Навигация&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href="#latest"&gt;Из последнего&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href="#search"&gt;Поиск&lt;/a&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code></pre>

<p>В ответ на просьбы, были несколько доработаны комментарии. Изменился список разрешённых элементов: <code>&lt;blockquote cite=""&gt;</code>, <code>&lt;a href=""&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;del&gt;</code>, из которого, в силу презентационной природы, ушли <code>&lt;b&gt;</code> и <code>&lt;i&gt;</code>.</p>

<p>Также в тексте комментария теперь можно удобно публиковать фрагменты кода. Достаточно обернуть ваш фрагмент в тег <code>[source]</code>. За этот плагин к WordPress нужно поблагодарить <a href="http://engel-t.moikrug.ru/">Ольгу Алексашенко</a> — в дальнейшем планируется его публикация. В качестве примера — ваш код в поле ввода:</p>

<pre><code>[source]&lt;div class="title"&gt;</code>
<code>    &lt;h1&gt;Пепелсбей.net&lt;/h1&gt;</code>
<code>    &lt;a href="#"&gt;RSS&lt;/a&gt;</code>
<code>&lt;/div&gt;[/source]</code></pre>

<p>…и то, что в итоге оказывается в комментарии:</p>

<pre><code>&lt;ol class="code"&gt;</code>
<code>&lt;li&gt;&lt;code&gt;&amp;lt;div class="title"&amp;gt;&lt;/code&gt;&lt;/li&gt;</code>
<code>&lt;li&gt;&lt;code&gt;    &amp;lt;h1&amp;gt;Пепелсбей.net&amp;lt;/h1&amp;gt;&lt;/code&gt;&lt;/li&gt;</code>
<code>&lt;li&gt;&lt;code&gt;    &amp;lt;a href="#"&amp;gt;RSS&amp;lt;/a&amp;gt;&lt;/code&gt;&lt;/li&gt;</code>
<code>&lt;li&gt;&lt;code&gt;&amp;lt;/div&amp;gt;&lt;/code&gt;&lt;/li&gt;</code>
<code>&lt;/ol&gt;</code></pre>

<h2>Представление, вёрстка и CSS</h2>

<p>Размеры CSS остались примерно в тех же рамках, однако файл <code>reset.css</code> теперь не подключается директивой <code>@import</code>, а входит в состав главного и единственного файла style.css, что позволило сэкономить на одном запросе к серверу — и это только начало.</p>

<p>Что касается хаков для IE, теперь они разделены на два файла <code>ie.css</code> (для всех версий) и <code>ie6.css</code> (для шестой версии и младше). IE8, от греха подальше, пока переключён в режим совместимости со стандартами при помощи директивы <code>X-UA-Compatible</code>. Подробнее об этой технике я уже писал в заметке «<a href="/2008/09/ie-street-magic/">Уличная магия IE</a>».</p>

<p>Отдельной строкой хочется упомянуть о причинах, которые заставили меня не чистить отдаваемые файлы от пробелов и переводов строк, а также не сжимать их явно при помощи GZIP. Дело в том, что этот сайт является не только демонстрацией моих навыков, но также может стать хорошим примером для тех, кто учится вёрстке. Я отлично помню сколько интересного я узнал много лет назад, прошерстив CSS-файл ещё первой версии <a href="http://alistapart.com/">A List Apart</a>. Надеюсь, кому-то это будет полезно.</p>

<p>Что касается новых вещей, то в теперь в CSS есть правила, отвечающие за обработку инлайн-цитат <code>&lt;q&gt;</code>, к сожалению — по причинам кроссбраузерности, не при помощи правил <code>content:open-quote</code> и <code>content:close-quote</code>, а более грубо:</p>

<pre><code>Q:before {</code>
<code>    content:'\00AB';</code>
<code>    }</code>
<code>    Q Q:before {</code>
<code>       content:'\201E';</code>
<code>       }</code>
<code>Q:after {</code>
<code>    content:'\00BB';</code>
<code>    }</code>
<code>    Q Q:after {</code>
<code>       content:'\201C';</code>
<code>       }</code></pre>

<p>…ну и другие радости из черновика CSS 3 с вендорными префиксами, которые хоть и благословлены W3C, но <a href="http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fpepelsbey.net%2F%3Fp%3D268%26preview%3Dtrue">делают CSS невалидным</a>:</p>

<pre><code>-webkit-border-radius:4px 4px;</code>
<code>-moz-border-radius:4px 4px;</code>
<code>border-radius:4px 4px;</code></pre>

<p>Но самым интересным в работе над новым сайтом, оказалось использование CSS-спрайтов. Прежняя версия сайта подключала в CSS-файле 22 (двадцать две) картинки. При общем весе порядка 12 килобайт, за этими картинками уходило 22 запроса к серверу. И вроде бы — чёрт с ним, справится с такой нагрузкой, чай не Яндекс по пиковой посещамости. Но если можно сделать лучше, зачем себе в этом отказывать?</p>

<p>Новая версия вёрстки использует всего 7 картинок, хотя самой графики на сайте стало использоваться больше. Как я умудрился? Всё просто — множество файлов картинок были сгруппированы в несколько, которые при использовании были спозиционированы нужным образом. Самый яркий пример такого объединения — файл <a href="/pro/2008/11/like-a-virgin/graphics.png" rel="darkbox">graphics.png</a>. Для удобства просмотра, прозрачность заменена на зелёный цвет.</p>

<p>На вопрос <q>почему же файлов тогда целых семь, а не один?</q> отвечу так: к этому привела целесообразность и некоторые технические ограничения. Под целесообразностью понимается нежелание городить лишнюю экстра-разметку, ведь я использую пуленепробиваемый метод, при котором картинки не едут при сильном изменении шрифта, поскольку заключены в отдельный контейнер с фиксированными размерами. Технические ограничения были связаны только с одним анимированным GIF-файлом.</p>

<p>Помимо версии для обычных браузеров, в скором времени появится полноценная версия для печати, а также версия сайта для iPhone — и всё это будет решено подключением двух дополнительных файлов: <code>print.css</code> и <code>iphone.css</code>.</p>

<h2>Немного блёсток и JavaScript</h2>

<p>Предыдущая версия сайта уже использовала JS, но весьма скромно. По этой причине, подключение примерно 30 килобайт фреймворка <a href="http://jquery.com/">jQuery</a> было явно не слишком целесообразным. Теперь всё лучше: фреймворк по-прежнему подключается (одним файлом, вместе со скриптами), но теперь он ощутимо помогает делать сайт удобнее и надёжнее, а именно:</p>

<ul>
<li>Поле поиска избавилось от лишнего заголовка и теперь о его функциональности говорит написанное прямо в нём недвусмысленное предложение поискать, которое скрывается при фокусе.</li>
<li>Правила публикации комментариев вежливо спрятаны в разворачивающемся блоке, чтобы не мозолить ваши глаза, а поле ввода плавно увеличивается до более удобных размеров, если вы решите оставить комментарий.</li>
<li>Картинки теперь открываются не просто как отдельный файл в новом окне, а довольно удобно подгружаются над затемнённым экраном. Попробовать как это работает можно в заметке «<a href="/2008/10/firefox-vs-photoshop/">Firefox против Photoshop</a>», кликнув на превьюшки. Описанию этого скрипта в скором времени будет посвящёна отдельная публикация.</li>
<li>Ну, и для <em>хромых</em> — упомянутое выше свойство для автоматического закавычивания фраз внутри элемента <code>&lt;q&gt;</code> эмулируется при помощи JS. Кхм, речь конечно же об IE.</li>
</ul>

<h2>В общем, в целом</h2>

<p>В числе небольших изменений в дизайне — третий цвет. Хорошо это или плохо — судить вам. Мне кажется, что это, по меньшей мере, удобно — ведь зелёный цвет имеет отношение только к вашей активности на этом сайта — к коммментариям. Также изменения коснулись постраничной навигации на главной: теперь она организована при помощи специальных «ушек» слева и справа внизу страницы — они не занимают много места и вполне интуитивно понятны.</p>

<p>Поиск на сайте работает при помощи Яндекса и его слегка подкрашенного поиска по сайтам. Попробуйте — это гораздо удобнее, чем калечный поиск от WordPress. При всём уважении к последнему — теперь поиском <em>действительно</em> можно пользоваться.</p>

<p>Надеюсь, что сайт стал лучше. Поэтому с меня новые публикации, а с вас — впечатления и багрепорты.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>40</small>
				</header>
				<article id="comment-1643"class="comment even thread-even depth-1">
					<p>border-radius вижу, но по-прежнему смущают много-div'ные module-* уголки ;)<br />
Ну и тут:</p>
<pre>
<code>&lt;div id="content"&gt;</code>
<code>&lt;div id="content-inner" class="content"&gt;</code>
</pre>
<p>Читать дальше и "комментарии" рядом - тоже что-то смущает</p>
<p>А вообще все очень мило, спрайты супер.</p>
<p>ЗЫ В первом предложении  не закрыт.</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1643">3 ноября ’08 в 9:49</a></time>
					</footer>
				</article>
				<article id="comment-1644"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В Опере лайтбокс для картинок не сработал. Бесконечно крутится лоадер.</p>
					<footer>
						Egor						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1644">3 ноября ’08 в 9:51</a></time>
					</footer>
				</article>
				<article id="comment-1646"class="comment even thread-even depth-1">
					<blockquote><p>по-прежнему смущают много-div'ные module-* уголки</p></blockquote>
<p>Нет, я конечно могу сделать всё при помощие border-radius, border-image или mutiple backgrounds, но профессиональная привычка не позволила оставить за бортом IE6–8. А использовать JS для построения раскладки — не мой метод.</p>
<blockquote><p>Читать дальше и "комментарии" рядом - тоже что-то смущает</p></blockquote>
<p>У самого такое ощущение, нужно что-то придумать…</p>
<blockquote><p>В Опере лайтбокс для картинок не сработал</p></blockquote>
<p>А ведь тестрировал, вроде работало, а сейчас ни в какую — 9.26–9.62. Даже в IE5 работает…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1646">3 ноября ’08 в 11:27</a></time>
					</footer>
				</article>
				<article id="comment-1647"class="comment odd alt thread-odd thread-alt depth-1">
					<p>я спецмально ничего не делал<br />
<a href="http://img-fotki.yandex.ru/get/3106/yuri.6/0_17afd_16b1fd54_XL.jpg" rel="nofollow">http://img-fotki.yandex.ru/get/3106/yuri.6/0_17afd_16b1fd54_XL.jpg</a></p>
					<footer>
						tyv						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1647">3 ноября ’08 в 11:44</a></time>
					</footer>
				</article>
				<article id="comment-1648"class="comment even thread-even depth-1">
					<p>С новым кодом %)<br />
У меня очень небольшое предложение по форме поиска — можно хорошо её улучшить, если пиктограмма поиска будет лейблом только пока ничего не введено, а после пользовательского ввода — становится сабмитом. М? :)<br />
Кстати, сейчас заметил: в форме комментирования пиктограмы в полях «Имя» и двух других перекрывают инпуты. Сейчас быстро в файрбаге положил их внутрь лейбла — поведение стало правильным %)</p>
					<footer>
						<a href="http://kizu.ru" rel="external nofollow" class="url">kizu</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1648">3 ноября ’08 в 13:42</a></time>
					</footer>
				</article>
				<article id="comment-1649"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Смущает текст комментариев вывороткой - белый текст на темном фоне тяжело воспринимается. И постоянное использование аббревиатур - лишнее это,в самом деле.</p>
					<footer>
						Антон						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1649">3 ноября ’08 в 13:42</a></time>
					</footer>
				</article>
				<article id="comment-1651"class="comment even thread-even depth-1">
					<p>я думаю css3 можно отдельный файлом замутить (если не жалко дополнительный запрос) и в media использовать queries для проверки поддержки css3<br />
зато основной файл будет валидным</p>
					<footer>
						<a href="http://arestov.habrahabr.ru" rel="external nofollow" class="url">Глеб Арестов</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1651">3 ноября ’08 в 14:15</a></time>
					</footer>
				</article>
				<article id="comment-1652"class="comment odd alt thread-odd thread-alt depth-1">
					<p>спамеры до тебя ещё не добрались? — вижу поле ввода без капчи)</p>
					<footer>
						<a href="http://arestov.habrahabr.ru" rel="external nofollow" class="url">Глеб Арестов</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1652">3 ноября ’08 в 14:16</a></time>
					</footer>
				</article>
				<article id="comment-1654"class="comment even thread-even depth-1">
					<p><strong>Юра,</strong> спасибо — потерялся апдейт для IE6. Поправил.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1654">3 ноября ’08 в 14:51</a></time>
					</footer>
				</article>
				<article id="comment-1655"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Глеб,</strong> фильтровать CSS 3 совсем не хочется. Как-то это неправильно и неперспективно ) А спамеры не прибиваются окончательно ни одной из методик. Правда капчу ещё не пробовал ставить, но у меня претензии к плагинам — чтобы не гадили в код, так что нахожусь в поисках.</p>
<blockquote><p>постоянное использование аббревиатур - лишнее это</p></blockquote>
<p>Речь идёт о тексте? Мне кажется, что аббревиатура должна быть размечена как аббревиатура, если у нас есть такой инструмент как HTML.</p>
<p><strong>kizu,</strong> хорошая идея, попробую.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1655">3 ноября ’08 в 17:35</a></time>
					</footer>
				</article>
				<article id="comment-1657"class="comment even thread-even depth-1">
					<p>Может стоить размечать аббревиатуру как аббревиатуру только при первом вхождении в текст статьи? Как это происходит со сносками, например. Чтобы избежать пестроты в некоторых случаях.</p>
					<footer>
						<a href="http://ismmurf.spaces.live.com/" rel="external nofollow" class="url">smmurf</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1657">3 ноября ’08 в 19:33</a></time>
					</footer>
				</article>
				<article id="comment-1661"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Открытие картинок при помощи скрипта — это хорошо. Но может переместить крестик закрытия окна в правый угол? Или это mac-style такой?</p>
					<footer>
						<a href="http://designnotfound.ru" rel="external nofollow" class="url">Михаил</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1661">3 ноября ’08 в 21:05</a></time>
					</footer>
				</article>
				<article id="comment-1662"class="comment even thread-even depth-1">
					<p><strong>smmurf,</strong> в этом что-то есть.</p>
<p><strong>Михаил,</strong> да, расположение крестика — это мак-стайл ;) Ничего не могу поделать. С другой стороны — Esc тоже работает, как и клик по тени.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1662">3 ноября ’08 в 21:10</a></time>
					</footer>
				</article>
				<article id="comment-1665"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Треугольник к "Правила добавления и форматирования" в IE7 расположен чуть ниже.<br />
Не знаю, как кому, но в последнее время использование условных комментариев, раздельно для разных версий IE приводит к тому, что присохранении страницы в IE7 на HDD и при просмотре локально, стилей скажем для IE6 не наблюдается.<br />
Тоже происходит и при сохранении в FireFox, стили для IE теряются :)<br />
Как с этим бороться?<br />
Понятно борьба за валидность стилей превыше всего, но как решить проблему?</p>
					<footer>
						<a href="http://trifler.ru/blog/" rel="external nofollow" class="url">gordi</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1665">3 ноября ’08 в 23:19</a></time>
					</footer>
				</article>
				<article id="comment-1666"class="comment even thread-even depth-1">
					<p>Продолжим :)<br />
Новая верстка, нюансы есть :)<br />
Тот же треугольник в IE6 отсуствует.<br />
Ну  скриншот: <a href="http://trifler.ru/blog/i/p/pepelsbey.png" rel="nofollow">http://trifler.ru/blog/i/p/pepelsbey.png</a><br />
что-то со стилями в IE6 не порядок :)</p>
					<footer>
						<a href="http://trifler.ru/blog/" rel="external nofollow" class="url">gordi</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1666">3 ноября ’08 в 23:37</a></time>
					</footer>
				</article>
				<article id="comment-1668"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>gordi,</strong> честно говоря, создаётся впечатление, что стили для IE6 вообще не подключились. Проверил на самом что ни на есть настоещем IE6 @ Windows 2000 — всё выглядит отлично. Возможно, скрин сделан со стандалон версии, в которой барахлят условные комментарии.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1668">3 ноября ’08 в 23:48</a></time>
					</footer>
				</article>
				<article id="comment-1669"class="comment even thread-even depth-1">
					<p>"...Возможно, скрин сделан со стандалон версии..."<br />
Может быть, "зоопарк" брал у вас давно, давно :)<br />
Но на своих сайтах подобного не наблюдаю,<br />
хотя многие из них переведены на единый файл стилей,<br />
но на не которых, есть и условные комментарии,<br />
проблем с подгрузкой не было :)<br />
В любом, случае на вопрос заданный в более раннем комментарии,<br />
об отдельном, раздельном подключении файлов стилей для IE, хочется услышать мнение профи.</p>
					<footer>
						<a href="http://trifler.ru/blog/" rel="external nofollow" class="url">gordi</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1669">4 ноября ’08 в 0:03</a></time>
					</footer>
				</article>
				<article id="comment-1671"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Думаю, что зоопарк следовало бы обновить при помощи <a href="http://tredosoft.com/Multiple_IE" rel="nofollow">Multiple IE</a>, хотя лучше оригинальных версий на виртуальных машинах всё равно ничего нет.</p>
<p>По поводу условных комментариев: если у пользователя стоит IE7, то он скачает и увидит всё, что нужно. Если IE6 — аналогично. Пытаться сделать так, чтобы сохранённые версии сайтов смотрелись хорошо — это, на мой взгляд, сложное и совершенно бесполезное занятие.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1671">4 ноября ’08 в 1:25</a></time>
					</footer>
				</article>
				<article id="comment-1677"class="comment even thread-even depth-1">
					<blockquote><p>Речь идёт о тексте? Мне кажется, что аббревиатура должна быть размечена как аббревиатура, если у нас есть такой инструмент как HTML.</p></blockquote>
<p>Да, тут уже подсказали в комментариях - рябит. Это все равно как делать ссылкой любое упоминание, например, Microsoft. Не играйте в Капитана Очевидность только потому что есть тэг abbr.</p>
					<footer>
						Антон						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1677">4 ноября ’08 в 15:04</a></time>
					</footer>
				</article>
				<article id="comment-1678"class="comment odd alt thread-odd thread-alt depth-1">
					<p>"Пытаться сделать так, чтобы сохранённые версии сайтов смотрелись хорошо — это, на мой взгляд, сложное и совершенно бесполезное занятие."<br />
Проблема, как раз и решается единым файлом стилей :)<br />
Тут видимо, больше вопрос принципа:<br />
или валидность стилей - для машин :)<br />
или  пользователь.</p>
<p>Чтобы разобрать, скажем, вашу страничку по косточкам :)<br />
Сохраняться надо, как минимум в трех браузерах, что весьма не удобно :)<br />
Учиться на подобных образцах, согласитесь, проблематично.</p>
<p>Тем более, что при достаточно сложной верстке, сокрытие индивидуальных стилевых правил для OPERA, FF, Safari тоже проблема, пусть их и не много, и может вообще не быть, но если они есть, то о какой валидности стилей тогда идет речь?<br />
А подгрузка файлов, тоже может стать проблемой по каким-то причинам.<br />
Мне, кажется, все должно быть в одном файле стилей.<br />
Основные проблемы только в IE6, но тут * html рулит.</p>
<p>Треугольник в IE7 поправили, хорошо.<br />
Но использование отрицательного margin-top, привело к разночтениям в IE6 и IE7, возможно, при абсолютном позиционирование этого можно было бы избежать, часто смена акцентов, позволяет избавиться от индивидуальных стилевых правил, под тот или иной браузер.</p>
					<footer>
						<a href="http://trifler.ru/blog/" rel="external nofollow" class="url">gordi</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1678">4 ноября ’08 в 15:27</a></time>
					</footer>
				</article>
				<article id="comment-1679"class="comment even thread-even depth-1">
					<p>Проблема с Opera и лайтбоксом решилась — оказалось, что этот чудный браузер не умеет ловить событие onload для картинки, которая не записана в документ, а просто создана как элемент…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1679">4 ноября ’08 в 15:34</a></time>
					</footer>
				</article>
				<article id="comment-1681"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А зачем Вы оставляете в CSS пустые блоки правил?</p>
<pre>
<code>#latest {</code>
<code>    }</code>
</pre>
					<footer>
						Panya						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1681">4 ноября ’08 в 15:47</a></time>
					</footer>
				</article>
				<article id="comment-1686"class="comment even thread-even depth-1">
					<p><strong>Panya</strong>, на будущее :D</p>
					<footer>
						<a href="http://dobrii.ru" rel="external nofollow" class="url">Добрый</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1686">5 ноября ’08 в 1:29</a></time>
					</footer>
				</article>
				<article id="comment-1690"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ещё, на мой взгляд, стоит добавить пространства между абзацем про комментарии и абзацем про разрешённые теги в «Правилах добавления и форматирования»</p>
					<footer>
						<a href="http://designnotfound.ru" rel="external nofollow" class="url">Михаил</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1690">5 ноября ’08 в 13:13</a></time>
					</footer>
				</article>
				<article id="comment-1691"class="comment even thread-even depth-1">
					<blockquote><p>А зачем Вы оставляете в CSS пустые блоки правил?</p></blockquote>
<p>Чтобы сохранить структурную целостность CSS'ника. Если уж есть дерево — должна быть корневая нода.</p>
<blockquote><p>стоит добавить пространства между абзацем про комментарии и абзацем про разрешённые теги</p></blockquote>
<p>Согласен, были такие мысли, просто не дошли руки.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1691">5 ноября ’08 в 14:46</a></time>
					</footer>
				</article>
				<article id="comment-1694"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Честно говоря, я не понял зачем разворачиват форму при клике. Вот если я написал уже много текста др. вопрос. А так только непонятная движуха.</p>
<p>зы. спрайты действительно рулят :)</p>
					<footer>
						<a href="http://sunnyfetis.livejournal.com" rel="external nofollow" class="url">feits</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1694">6 ноября ’08 в 0:56</a></time>
					</footer>
				</article>
				<article id="comment-1696"class="comment even thread-even depth-1">
					<p>Цвета ужасны, на мой взгляд.</p>
<p>Кстати, это нормально, что заголовок "Пепелсбей.net" прилипает к белому полю с контентом?</p>
<p>И еще, чем отличаются "заметки" от "статей"?</p>
					<footer>
						Александр Артеменко						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1696">6 ноября ’08 в 1:51</a></time>
					</footer>
				</article>
				<article id="comment-1697"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Цвета ужасны, на мой взгляд</p></blockquote>
<p>Цвета могут быть ужасны только для дальтоника. Для нормального человека они могут подходить для какой-то цели или не подходить. Мне кажется, что для моих целей они подходят. У вас есть контраргументы?</p>
<blockquote><p>это нормально, что заголовок "Пепелсбей.net" прилипает к белому полю</p></blockquote>
<p>Нормально. Он не прилипает, а является его частью. Как ножницами из бумаги, понимаете?</p>
<p>А заметки отличаются от статей тем, что заметки — это заметки, а статьи — статьи. Т.е. первые не претендуют на всехватывающее исследование, а вторые именно для этого и предназначены. По этой причине статей в разы меньше, потому как дело это ответственное.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1697">6 ноября ’08 в 2:09</a></time>
					</footer>
				</article>
				<article id="comment-1699"class="comment even thread-even depth-1">
					<blockquote><p>не понял зачем разворачиват форму при клике</p></blockquote>
<p>Разворачивание формы при клике просто делает её компактее <em>до</em> и удобнее <em>после</em>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1699">6 ноября ’08 в 5:15</a></time>
					</footer>
				</article>
				<article id="comment-1716"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А мне понравилась новая кнопка с надписью "Добавить". Старая скорее походила на кнопку play, чем на отправку комментария.<br />
Еще я бы все-таки не стал изменять высоту textarea при клике на ней. Этого никто не ожидает. А вот увеличивать ее высоту по мере набора в ней текста мне кажется менее пугающим) А то кнопка и другие поля, что находятся ниже уезжают за пределы окна.<br />
А что с <a href="http://darkentries.ru/" rel="nofollow">http://darkentries.ru/</a> ? Я что-то пропустил?</p>
					<footer>
						<a href="http://miripiruni.org/" rel="external nofollow" class="url">miripiruni</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1716">6 ноября ’08 в 19:00</a></time>
					</footer>
				</article>
				<article id="comment-1717"class="comment even thread-even depth-1">
					<p>Про поле для комментов и его динамику подумаю, да. Раз уж столько мнений )<br />
А DarkEntries тихо, по-английски закрылся ибо не покатило. Продолжение будет в жж.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1717">6 ноября ’08 в 19:11</a></time>
					</footer>
				</article>
				<article id="comment-1734"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Радостно приветсвую перемены. Они - к лучшему!</p>
					<footer>
						<a href="http://uggallery.audiopeace.ru" rel="external nofollow" class="url">uggallery</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1734">7 ноября ’08 в 17:34</a></time>
					</footer>
				</article>
				<article id="comment-1775"class="comment even thread-even depth-1">
					<p>Зеленые кнопки отлично вписываются. А вот ссылку на РСС в шапке я бы по умолчанию показывал подсвеченной на красном фоне. Ну так, как она выделяется при наведении. Такая форма более привычна для восприятия.</p>
					<footer>
						<a href="http://www.reactant.ru" rel="external nofollow" class="url">ATimofeev</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1775">10 ноября ’08 в 14:54</a></time>
					</footer>
				</article>
				<article id="comment-1829"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Простите, но для Opera border-radius не работает...</p>
					<footer>
						Александр						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1829">12 ноября ’08 в 15:43</a></time>
					</footer>
				</article>
				<article id="comment-1836"class="comment even thread-even depth-1">
					<p>По поводу «хромых»… я было подумал, что речь о Google Chrome, сейчас хромой в жаргоне — чаще он.<br />
По поводу уголков. Вычитал про способ сделать их из тегов br. Немного мусора, но нет проблем при масштабировании и различных dpi. Вроде бы такой способ используют в Gmail. Т.к. ссылки на описание сходу не нашел — <a href="http://www.slcontent.ru/dev/test.html" rel="nofollow">вот</a> пример.</p>
					<footer>
						SOb						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1836">12 ноября ’08 в 20:40</a></time>
					</footer>
				</article>
				<article id="comment-1920"class="comment odd alt thread-odd thread-alt depth-1">
					<p>:) Вадим-Вадим... Все браузеры (кроме Safari) сейчас грузят не меньше 2 CSS-файлов с твоего сайта: обычный и print. Это уже тысячу раз везде обсуждалось: надо через @media print {} вставить его содержимое в основной.</p>
<p>По поводу minify -- я полностью согласен, пусть изучают. Но gzip-то как мешает? Ты пробовал открывать gzip CSS-файл через браузер? Они же его в уже распакованном виде в кэше содержат, и открывают через кэш. Т.е. для пользователей ничего (кроме скорости загрузки) не изменится.</p>
					<footer>
						<a href="http://webo.in/" rel="external nofollow" class="url">sunnybear</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1920">17 ноября ’08 в 11:48</a></time>
					</footer>
				</article>
				<article id="comment-1931"class="comment even thread-even depth-1">
					<p><strong>sunnybear,</strong> print.css вообще сейчас по ошибке подключен был — он фактически пустой, версия для печати пока в разработке. А так — видимо да, буду пробовать включать её при помощи @media и тестировать адекватность восприятия браузерами.</p>
<p>С gzip'ом попробую, спасиб.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-1931">17 ноября ’08 в 17:20</a></time>
					</footer>
				</article>
				<article id="comment-4235"class="comment odd alt thread-odd thread-alt depth-1">
					<p>@Panya иногда это еще для быстрой правки в Firebug удобно</p>
					<footer>
						<a href="http://pro-stream.org" rel="external nofollow" class="url">Алекс Дорохович</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-4235">30 октября ’09 в 17:18</a></time>
					</footer>
				</article>
				<article id="comment-4807"class="comment even thread-even depth-1">
					<p>я просто проходил мимо, извините, Вадим. Понятно что такого обычно не бывает.</p>
					<footer>
						Но если уж абсолютом юзернейм стоит то ширину наверно стоит указывать						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-4807">2 октября ’10 в 15:48</a></time>
					</footer>
				</article>
				<article id="comment-4809"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>vxsx,</strong> спасибо — ситуацию с ником автора я поправил. Возможно, не слишком элегантно, но для серьёзных переделок слишком поздняя ночь :) Комментарий оставлю в назидание.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-03T06:56:48+00:00"><a href="index.html#comment-4809">3 октября ’10 в 2:29</a></time>
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
	<!-- 23 & 0,615 -->
</body>
</html>
