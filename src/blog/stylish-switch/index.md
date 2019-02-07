<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Модный переключатель — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Модный переключатель</a></h1>
				<time pubdate datetime="2012-08-26T02:39:22+00:00">26 августа ’12</time>
			</header>
			<p>Большой молодец <a href="http://kizu.ru">Рома Комаров</a> прочитал на <a href="http://webstandardsdays.ru/2011/12/13/">Web Standards Days в Москве</a> доклад-размышление «<a href="https://vimeo.com/34190518">Бесчеловечные эксперименты над CSS</a>», суть которого я вам пересказывать не буду — лучше посмотрите сами. В частности, Рома призывал, при виде новой сногсшибательной CSS-демки, не смотреть в код, пытаясь понять как она сделана, а пытаться реализовать её самому. «Отличная идея!» — подумал я тогда. И вот сегодня утром, глядя на «<a href="http://www.aether.ru/blog/2012/08/19/iswitch">Переключатель в стиле iOS на CSS</a>» Александра Шабуневича, не удержался, чтобы не сделать свой вариант и рассказать вам подробно о том, как это работает.</p>

<p>Хочу предупредить заранее, что я не большой любитель демок, в которых всего 20 000 элементов <code>&lt;b&gt;</code> и 3 000 строк грязного CSS создают что-нибудь невероятно красивое и столь же бесполезное. Я конечно уже был замечен за «<a href="/2009/12/special-effects-tea/">Чаем со спецэффектами</a>», но ту демку хотя бы можно было разобрать на полезные каждый день части. С этим переключателем получилось ещё лучше. Поехали!</p>

<h2>HTML-скелет</h2>

<figure class="small">
	<a href="/pro/2012/08/stylish-switch/check.html"><img src="/pro/2012/08/stylish-switch/images/result.png" width="230" height="230"></a>
	<figcaption>Результат по ссылке.</figcaption>
</figure>

<p>Прежде чем рваться в бой, вкладывая <code>&lt;div&gt;</code> в <code>&lt;div&gt;</code> и оборачивая это в ещё один <code>&lt;div&gt;</code>, давайте подумаем, на что больше всего похож этот переключатель. Если посмотреть на него внимательно, то видно, что у него всего два положения. И пусть вас не смущает внешний вид этого переключателя, это просто <strong>Выкл.</strong> и <strong>Вкл.</strong>, а сам он уместно смотрелся бы в составе какой-нибудь формы. Александр, <a href="http://beholder.bitbucket.org/iswitch/">в своей демке</a>, решил, что это скорее две радиокнопки <code>&lt;input type="radio"&gt;</code> с двумя отдельными лейблами и одинаковым атрибутом <code>name</code>, значит при включении одной, тут же выключается вторая. Что ж, может быть. Но мне показалось, что это скорее чекбокс, у которого тоже может быть два состояния.</p>

<pre>
	<code>&lt;div class="switch"&gt;</code>
	<code>    &lt;input type="checkbox" id="switch" class="switch-check"&gt;</code>
	<code>    &lt;label for="switch" class="switch-label"&gt;Опция&lt;/label&gt;</code>
	<code>&lt;/div&gt;</code>
</pre>

<p>Раздадим всем элементам классы в пространстве имён родителя: <code>switch</code>, <code>switch-check</code> и <code>switch-label</code> и не забудем связать лейбл и чекбокс с помощью атрибутов <code>id</code> и <code>for</code>.</p>

<h2>Делаем красиво</h2>

<p>Пока наш переключатель выглядит просто и удобно: <a href="/pro/2012/08/stylish-switch/plain.html">plain.html</a>. И вроде бы: чекбокс и лейбл — жми и поехали, хватит время терять. Но мы здесь делаем <em>красиво</em>, поэтому нам сначала нужно спрятать всё, что <em>некрасиво</em>. Вместо того, чтобы шаманить с нестандартным свойством <code>appearance</code>, мы просто спрячем чекбокс с помощью <code>opacity:0</code> (чтобы на него всё ещё можно было перейти табом — <code>visibility:hidden</code> это отключает) и уберём текст лейбла с помощью <code>text-indent</code>, само тело лейбла нам ещё пригодится.</p>

<pre>
	<code>.switch-check {</code>
	<code>    position:absolute;</code>
	<code>    opacity:0;</code>
	<code>    }</code>
	<code>.switch-label {</code>
	<code>    text-indent:-9999px;</code>
	<code>    }</code>
</pre>

<p>Теперь пришло время рисовать форму с помощью CSS. Если хорошо знать все возможности CSS3, то почти любую картинку можно мысленно разложить на рамки, тени, фоновые картинки, скругления и прочие доступные изобразительные средства. Примерно так же, как мы в своё время умели разбивать любой макет на столбцы и строки будущей таблицы. Но не будем о тёмном прошлом.</p>

<figure class="small">
	<img src="/pro/2012/08/stylish-switch/images/shape.png" width="230" height="230">
	<figcaption>Белая и синяя формы переключателя.</figcaption>
</figure>

<p>Если не заниматься попиксельной имитацией того, что нарисовали дизайнеры Apple для iOS, то кнопка легко разбивается на CSS-примитивы. Если заниматься, то вы просто потратите на день или два больше. Я осознанно отбросил некоторые несущественные или слишком сложные для реализации мелочи, чтобы не усыплять вас их описанием.</p>

<p>Сначала давайте нарисуем форму, которая является основой синей и белой части нашего переключателя. Видно, что отличаются они только фоновым цветом. Задаём скругление в половину высоты с помощью <code>border-radius</code>, базовый синий или белый цвет, а всю остальную красоту рисуем последовательно с помощью четырёх внутренних теней, в порядке следования в блоке <code>box-shadow</code>:</p>

<ol>
	<li>Первая двухпиксельная тень без размытия: третий параметр равен нулю и четвёртый только добавляет смещения чёрной тени с прозрачностью 10%;</li>
	<li>Вторая простая четырёхпиксельная тень, дающая основное углубление на половину чёрным;</li>
	<li>Третья четырёхписельная тень нависающая сверху на 5 пикселей на треть чёрным;</li>
	<li>Четвёртая тень без размытия, со смещением сверху на половину высоты переключателя всего на 7 сотых чёрного поверх основного фона.</li>
</ol>

<pre>
	<code>.switch {</code>
	<code>    width:154px;</code>
	<code>    height:54px;</code>
	<code>    border-radius:27px;</code>
	<code>    background:#369AEE;</code>
	<code>    box-shadow:</code>
	<code>        0 0 0 2px rgba(0, 0, 0, 0.1) inset,</code>
	<code>        0 0 4px rgba(0, 0, 0, 0.5) inset,</code>
	<code>        0 5px 4px 1px rgba(0, 0, 0, 0.3) inset,</code>
	<code>        0 27px 0 rgba(0, 0, 0, 0.07) inset;</code>
	<code>    }</code>
</pre>

<p>Размеры 154×54 пикселей я взял прямо из iOS — именно такие размеры имеет переключатель в версии для ретины. В итоге получается уже что-то похожее на правду: <a href="/pro/2012/08/stylish-switch/shape.html">shape.html</a>.</p>

<h2>Придумываем слайдер</h2>

<p>Сейчас нам нужно решить, как именно будет ездить наш слайдер. В оригинальном переключателе iOS к круглой ручке переключателя как будто прикреплены два блока: синий слева и белый справа. Передвижение слайдера как будто уводит каждый из них за пределы отверстия, которым является переключатель.</p>

<p>К сожалению, из-за особенностей работы <code>overflow:hidden</code> и <code>border-radius</code>, у нас не получится кроссбраузерно повторить то, что говорит нам понимание происходящего. Браузеры очень по-разному трактуют скрытие за радиусом скругления. Но мы можем сделать так, чтобы это <em>выглядело</em> в точности так, как нам нужно.</p>

<p>Но для этого нам понадобятся два дополнительных элемента. Сам лейбл мы, к сожалению, использовать не сможем — он должен стоять на месте и передавать клики на чекбокс, который и будет контролировать поведение нашего слайдера. Поэтому вложим в слайдер два элемента <code>switch-slider</code> с подклассами <code>-on</code> и <code>-off</code>:</p>

<pre>
	<code>&lt;div class="switch"&gt;</code>
	<code>    &lt;input type="checkbox" id="switch" class="switch-check"&gt;</code>
	<code>    &lt;label for="switch" class="switch-label"&gt;</code>
	<code>        Опция</code>
	<code>        &lt;span class="switch-slider switch-slider-on"&gt;&lt;/span&gt;</code>
	<code>        &lt;span class="switch-slider switch-slider-off"&gt;&lt;/span&gt;</code>
	<code>    &lt;/label&gt;</code>
	<code>&lt;/div&gt;</code>
</pre>

<p>Элемент <code>-on</code> будет отвечать за синий блок слева от ручки, а <code>-off</code> за белый справа. В синий мы перенесём тот фон, который с самого начала был на самом переключателе. В элемент <code>-off</code> мы как раз и впишем нашу ручку с градиентом и парой теней для объёма, поскольку он следует последним и оказывается сверху:</p>

<pre>
	<code>.switch-slider-off:after {</code>
	<code>    position:absolute;</code>
	<code>    top:1px;</code>
	<code>    left:1px;</code>
	<code>    width:52px;</code>
	<code>    height:52px;</code>
	<code>    border-radius:50%;</code>
	<code>    background:#E5E5E5;</code>
	<code>    background:linear-gradient(#D0D0D0, #FDFDFD);</code>
	<code>    box-shadow:</code>
	<code>        0 0 2px 2px #FFF inset,</code>
	<code>        0 0 4px 1px rgba(0, 0, 0, 0.6);</code>
	<code>    content:'';</code>
	<code>    }</code>
</pre>

<p>Остаётся только добавить иконки, обозначающие состояния переключателя. Сначала я сверстал их с помощью ещё одних псевдоэлементов, чтобы похвастать потом «Смотрите, только CSS!» Но это снова привело к проблемам со скрытием объектов за <code>border-radius</code> и я позволил себе вставить эти картинки графикой. Но графикой не простой, а векторной. В итоге к добавились два файла: <a href="/pro/2012/08/stylish-switch/images/off.svg">off.svg</a> и <a href="/pro/2012/08/stylish-switch/images/on.svg">on.svg</a>, которые прекрасно масштабируются и выглядят шикарно на новых дисплеях. При желании, для этих векторых иконок легко делается фолбек в растр, подробнее об этом можно прочитать в начале прошлой заметки «<a href="/2012/07/uneasy-easy-button/">Непростая простая кнопка</a>».</p>

<p>Иконка для белого блока указывается фоновой картинкой с отступом слева, а вот иконка для синего блока должна прикрепляться к правому краю (ниже вы поймёте почему), но отступать от него на фиксированное количество пикселов. Поэтому мы задаём смещение фона для синей иконки <code>100% 12px</code> и добавляем нужный отступ прямо в SVG-файле, меняя его ширину. Не очень изящно, зато вполне кроссбраузерно.</p>

<h2>Анимация слайдера</h2>

<figure class="small">
	<img src="/pro/2012/08/stylish-switch/images/animation.gif" width="230" height="137">
	<figcaption>Схематичная анимация слайдера. Осторожно, не залипните.</figcaption>
</figure>

<p>Теперь у нас готовы все элементы и пора бы уже сделать так, чтобы переключатель заработал. Работать он будет с помощью псевдокласса <code>:checked</code>, который будет срабатывать при включённом чекбоксе и передавать это состояние с помощью сестринского селектора <code>E + E</code> и дальше прямо к слайдерам.</p>

<p>Посмотрите внимательно на анимацию: в состоянии по умолчанию, синий блок слева от ручки будет той же ширины, что и ручка, а белый закрывать всё это. Но как только переключатель будет активирован, всё должно будет поменяться в точности наоборот: синий растянется на всю ширину, а белый спрячется за ручкой. Такая сложность нужна для того, чтобы создать иллюзию уезжающих иконок. Так и сделаем:</p>

<pre>
	<code>.switch-check:checked + .switch-label .switch-slider-on {</code>
	<code>    width:154px;</code>
	<code>    }</code>
	<code>.switch-check:checked + .switch-label .switch-slider-off {</code>
	<code>    width:54px;</code>
	<code>    }</code>
</pre>

<p>А чтобы изменение ширины слайдеров не происходило одним прыжком, опишем плавный переход от одной ширины к другой с помощью <code>transition</code> и не забудем, что у активной ручки слайдера фон и градиент немного темнее, и что по слайдеру можно не просто кликнуть, но ещё и выделить его табом и нажать пробел для переключения:</p>

<pre>
	<code>.switch-slider {</code>
	<code>    transition:width 0.2s linear;</code>
	<code>    }</code>
	<code>.switch-label:active .switch-slider-off:after,</code>
	<code>.switch-check:focus + .switch-label .switch-slider-off:after {</code>
	<code>    background:#D5D5D5;</code>
	<code>    background:linear-gradient(#C8C8C8, #E4E4E4);</code>
	<code>    }</code>
</pre>

<p>Ура, переключатель заработал! Смотрите сами: <a href="/pro/2012/08/stylish-switch/check.html">check.html</a>. И вроде бы всё, но зуд всё не унимался и я сделал ещё одну версию с помощью двух радиокнопок и двух лейблов, что в итоге несколько усложнило код, ведь пришлось на ходу менять <code>z-index</code> лейблов в каждом из состояний: <a href="/pro/2012/08/stylish-switch/radio.html">radio.html</a>. Правда, это делает слайдер недоступным для фокусировки табом, ведь радиокнопки две, а он один.</p>

<p>А теперь давайте посмотрим на то, ради чего была вся эта возня с CSS и SVG вместо того, чтобы сделать всё двумя-тремя обычными картинками. Зайдём в браузер и сильно увеличим наш переключатель:</p>

<figure class="large">
	<img src="/pro/2012/08/stylish-switch/images/zoomed.png" width="670" height="372">
	<figcaption>Переключатель, сильно увеличенный средствами браузера. Красиво, да?</figcaption>
</figure>

<p>И вот теперь точно всё. Можно было бы конечно вытащить текст лейбла влево в виде подписи, добить совместимость с IE7 и может быть поработать над универсальным способом менять размер переключателя. Но я оставлю эти эксперименты вам, моим внимательным и пытливым читателям.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>35</small>
				</header>
				<article id="comment-5426"class="comment even thread-even depth-1">
					<p>А почему в <i>on.svg</i> используется <code>ellipse</code>, а не <code>circle</code>?<br />
А вообще состояния можно было сделать градиентами :-). В случае с палочкой с <code>bacgkround-size</code>.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5426">27 августа ’12 в 14:28</a></time>
					</footer>
				</article>
				<article id="comment-5427"class="comment odd alt thread-odd thread-alt depth-1">
					<p>элементу .switch можно еще добавить свойство -webkit-user-select: none, чтоб при быстрых кликах не было выделения</p>
					<footer>
						Алексей						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5427">27 августа ’12 в 14:36</a></time>
					</footer>
				</article>
				<article id="comment-5428"class="comment even thread-even depth-1">
					<p>Мне кажется, для полного счастья можно добавить еще user-select: none;  на label. С префиксами, конечно.</p>
					<footer>
						fromanywhere						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5428">27 августа ’12 в 14:36</a></time>
					</footer>
				</article>
				<article id="comment-5429"class="comment odd alt thread-odd thread-alt depth-1">
					<p>а почему бы не выкладывать вот такие крутые штуки на github? =) удобно было бы "клонировать" и дополнять</p>
					<footer>
						<a href="http://belyanskii.com/" rel="external nofollow" class="url">Alex Belyanskii</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5429">27 августа ’12 в 14:45</a></time>
					</footer>
				</article>
				<article id="comment-5430"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>GreLI,</b> я не люблю рисовать градиентами — у них слишком плохое сглаживание, производительность и неоптимальный код, сложный для редактирования. А <code>ellipse</code> вместо <code>circle</code> по недоразумению, поправлю.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5430">27 августа ’12 в 14:52</a></time>
					</footer>
				</article>
				<article id="comment-5431"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В переключателе на iOS движется весь фон, а не просто наплывает серая плашка справа.</p>
<p>Здесь хорошо показано:<br />
<a href="http://papermashup.com/demos/ajax-switch/" rel="nofollow">http://papermashup.com/demos/ajax-switch/</a></p>
					<footer>
						Федор						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5431">27 августа ’12 в 14:55</a></time>
					</footer>
				</article>
				<article id="comment-5432"class="comment even thread-even depth-1">
					<p>Вот бы ещё дать потаскать за кругляшок, или хотя бы не реагировать на драг (не выделять элементы), на худой конец написать: "Не тащите, это всего лишь ЦСС!".</p>
					<footer>
						Артём Поликарпов						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5432">27 августа ’12 в 14:59</a></time>
					</footer>
				</article>
				<article id="comment-5433"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Федор,</b> да, синяя плашка не уезжает, но это можно сделать с ещё одним дополнительным элементом. Есть куда развиваться.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5433">27 августа ’12 в 15:04</a></time>
					</footer>
				</article>
				<article id="comment-5434"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Артём,</b> это выходит за рамки эксперимента.</p>
<p><b>Alex,</b> если бы я делал такой переключатель вот прямо как «компонент», с хорошей кроссбраузерностью, с JS-ом, то это имело бы смысл. А так — это просто игра с CSS.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5434">27 августа ’12 в 15:07</a></time>
					</footer>
				</article>
				<article id="comment-5435"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, отлично. И даже с радиокнопками есть. Как я и писал, мне нужен был переключатель между двумя состояниями, но многим нужно именно «вкл/выкл», тем более, на айфоне он именно такую роль выполняет.</p>
<p>Хотел было подсмотреть у тебя решение по устранению «дергания» правой подписи в webkit-браузерах, но подписей у тебя как раз и нет =(</p>
					<footer>
						<a href="http://www.aether.ru/" rel="external nofollow" class="url">Александр Шабуневич</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5435">27 августа ’12 в 15:09</a></time>
					</footer>
				</article>
				<article id="comment-5436"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Александр,</b> наверное будет вторая версия переключателя, мне стало интересно сделать его безупречным. И тогда предусмотрю подпись, но в той же iOS подпись одна — т.к. это, по сути, чекбокс и его состояние.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5436">27 августа ’12 в 15:13</a></time>
					</footer>
				</article>
				<article id="comment-5437"class="comment odd alt thread-odd thread-alt depth-1">
					<p>У меня в мобильном Safari, кстати, не пашет :(</p>
					<footer>
						Дмитрий						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5437">27 августа ’12 в 16:13</a></time>
					</footer>
				</article>
				<article id="comment-5438"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Дмитрий,</b> кстати да, но вот в Opera Mobile работает без проблем.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5438">27 августа ’12 в 16:23</a></time>
					</footer>
				</article>
				<article id="comment-5439"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А почему Вы не положили <code>input</code> в <code>label</code>? Это избавляет нас от необходимости в <b>id и </b><b>for</b></p>
<pre>

<code>&lt;div class=&quot;switch&quot;&gt;</code>
<code>    &lt;label class=&quot;switch-label&quot;&gt;</code>
<code>        &lt;input type=&quot;checkbox&quot; checked id=&quot;switch-1&quot; class=&quot;switch-check&quot; /&gt;</code>
<code>        Опция&lt;span class=&quot;switch-slider&quot;&gt;&lt;/span&gt;</code>
<code>    &lt;/label&gt;</code>
<code>&lt;/div&gt;</code>
<code>&lt;style&gt;</code>
<code>/*...*/</code>
<code>.switch-check:checked + .switch-slider { /*...*/ }</code>
<code>.switch-check:checked + .switch-slider:after { /*...*/ }</code>
<code>&lt;/style&gt;</code>

</pre>
<p>Вообще, не понимаю, почему верстальщики так часто используют эти аттрибуты. Это же просто неудобно. Да и за уникальностью <b>id</b> ещё нужно следить.</p>
					<footer>
						<a href="http://h123.ru" rel="external nofollow" class="url">Егор</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5439">27 августа ’12 в 17:30</a></time>
					</footer>
				</article>
				<article id="comment-5440"class="comment even thread-even depth-1">
					<p><a href="https://dl.dropbox.com/u/640912/radio.png" rel="nofollow">https://dl.dropbox.com/u/640912/radio.png</a><br />
Что я делаю не так?</p>
					<footer>
						Дмитрий						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5440">27 августа ’12 в 17:41</a></time>
					</footer>
				</article>
				<article id="comment-5441"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А, ну да, это Opera Mini. Прошу прощения, затупил.</p>
					<footer>
						Дмитрий						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5441">27 августа ’12 в 17:47</a></time>
					</footer>
				</article>
				<article id="comment-5442"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Егор,</b> поле формы завёрнутое в лейбл — это частный случай, не всегда применимый. Иначе между полем и лейблом будут пустые места, чувствительные к нажатию. Поэтому я предпочитаю организовывать связь полей явно, хотя в некоторых случаях — да, можно вложить.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5442">27 августа ’12 в 17:48</a></time>
					</footer>
				</article>
				<article id="comment-5443"class="comment odd alt thread-odd thread-alt depth-1">
					<p>отличный урок! Спасибо большое</p>
					<footer>
						<a href="http://nuttylife.ru" rel="external nofollow" class="url">Настя</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5443">27 августа ’12 в 18:13</a></time>
					</footer>
				</article>
				<article id="comment-5444"class="comment even thread-even depth-1">
					<p>Извиняюсь за комментарий не по теме.</p>
<p>Хотелось бы услышать ваши мысли и рассуждения об использовании двойных или одинарных кавычек в коде html и в стилях css. В чём минусы, и подобное.</p>
					<footer>
						<a href="http://sadykh.ru" rel="external nofollow" class="url">Sadykh</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5444">27 августа ’12 в 19:24</a></time>
					</footer>
				</article>
				<article id="comment-5445"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А почему ты не использовал этот трюк?</p>
<pre>

<code>.ir {</code>
<code>    font: 0/0 a;</code>
<code>    text-shadow: none;</code>
<code>    color: transparent;</code>
<code>}</code>

</pre>
					<footer>
						<a href="http://htmlhero.ru" rel="external nofollow" class="url">Андрей</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5445">27 августа ’12 в 19:38</a></time>
					</footer>
				</article>
				<article id="comment-5446"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Sadykh,</b> для себя я выбрал систему «основной язык и вложенный». Если HTML является для меня основным, где используются только двойные кавычки (так уж повелось), то во всех остальных, вроде CSS и JavaScript, я использую только одинарные кавычки. Под описание основного языка подходят так же XML-подобные, вроде SVG.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5446">27 августа ’12 в 20:09</a></time>
					</footer>
				</article>
				<article id="comment-5447"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Андрей,</b> этот трюк универсальный, он сделан так, что его удобно применять ко всему, что угодно, с помощью класса. Здесь я решал простую задачу и мне отлично подошёл <code>text-indent</code>. Кстати, если ты будешь использовать свой настоящий e-mail, то мне не придётся каждый раз модерировать твои комментарии. Договорились?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5447">27 августа ’12 в 20:11</a></time>
					</footer>
				</article>
				<article id="comment-5448"class="comment even thread-even depth-1">
					<p>Как по мне, то правильнее все же использовать не чек бокс, а радио. Опираюсь на то, что так правильнее с точки зрения бекенда. Потому что чекбокс в выключенном состоянии не шлёт вообще ничего, а радио всегда отдаёт одно из состояний. Но это так, не критично. В целом - интересно.</p>
					<footer>
						Владимир						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5448">27 августа ’12 в 21:15</a></time>
					</footer>
				</article>
				<article id="comment-5449"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Федор,</b> теперь синий тоже уезжает влево, но это потребовало дополнительного элемента. Спасибо, что спровоцировали меня на улучшение примера!</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5449">27 августа ’12 в 21:46</a></time>
					</footer>
				</article>
				<article id="comment-5450"class="comment even thread-even depth-1">
					<p>Чтобы переключатель работал в мобильном сафари нужен хак с JS:</p>
<pre>
<code>$(&#039;label&#039;).click(function() {});​</code>
</pre>
<p><a href="http://jsfiddle.net/W7k7Z/3/" rel="nofollow">Пример</a>. А все потому что сафари не отрабатывает тап на <code>label</code>.</p>
					<footer>
						<a href="http://www.aether.ru/" rel="external nofollow" class="url">Александр Шабуневич</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5450">27 августа ’12 в 22:10</a></time>
					</footer>
				</article>
				<article id="comment-5451"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Александр,</b> для Mobile Safari наверное имеет смысл сразу закладываться в <code>touch</code>, чтобы не смущать десктопные браузеры.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5451">27 августа ’12 в 22:15</a></time>
					</footer>
				</article>
				<article id="comment-5452"class="comment even thread-even depth-1">
					<p>Вадим, ну, по-правильному, да. Просто их в jQuery нет и нужно писать самому =)</p>
					<footer>
						<a href="http://www.aether.ru/" rel="external nofollow" class="url">Александр Шабуневич</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5452">27 августа ’12 в 22:20</a></time>
					</footer>
				</article>
				<article id="comment-5453"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Вадим</b>, а на основе чего html становится для вас «основным»? Правильно ли я понимаю:<br />
html — у вас двойными кавычками, css/js — одинарными кавычками?</p>
<p>Но по сути, есть ли какая-нибудь специфичная разница?</p>
<p>p.s «подписаться на комментарии» видимо не работает.</p>
					<footer>
						<a href="http://sadykh.ru" rel="external nofollow" class="url">Sadykh</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5453">27 августа ’12 в 23:12</a></time>
					</footer>
				</article>
				<article id="comment-5454"class="comment even thread-even depth-1">
					<p>С касательными событиями не всё так просто. Если начинать их ловить, то по-хорошему придётся поддерживать перетаскивание и прочие эффекты, что плохо, так как практически невозможно поддержать таким образом все возможности различных браузеров. Для работы на iOS можно вместо <code>onclick</code> добавить стиль <code>cursor:pointer</code>.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5454">27 августа ’12 в 23:13</a></time>
					</footer>
				</article>
				<article id="comment-5455"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Sadykh,</b> HTML основной, как я уже сказал, по историческим причинам (двойные кавычки в HTML — самая распространённая практика), и потому, что с HTML начинается жизнь любой страницы, как документа, как основы. Я забыл упомянуть, почему во вложенных одиночные. Это нужно для того, чтобы любые включения происходили безболезненно: <code>&lt;div style="background:url('…')" onclick="this.className='…'"&gt;</code> и наоборот <code>body.innerHTML = '&lt;span class="…"&gt;'</code>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5455">27 августа ’12 в 23:19</a></time>
					</footer>
				</article>
				<article id="comment-5456"class="comment even thread-even depth-1">
					<p><b>Вадим</b>, о, спасибо! Теперь я для себя буду иметь несколько причин, писать html код двойными кавычками (если вам интересно):</p>
<p>1. Подключения, как вы уже выше привели пример. Хотя, в данном случае, при срабатывании onclick добавиться класс с одинарными кавычками, так?<br />
2. Пример с php (спасибо пользователю <a href="http://habrahabr.ru/qa/21427/#answer_87640" rel="nofollow">Хабра</a>):</p>
<pre>

<code>var div = &#039;&lt;div id=&quot;div&quot;&gt;&lt;/div&gt;&#039; // с двойными</code>

</pre>
<pre>

<code>var div = &quot;&lt;div id=&#039;div&#039;&gt;&lt;/div&gt;&quot; // не люблю такой HTML-код</code>
<code>var div = &quot;&lt;div id=div&gt;&lt;/div&gt;&quot;; // такой тоже</code>
<code>var div = &quot;&lt;div id=\&quot;div\&quot;&gt;&lt;/div&gt;&quot;; // плохая читаемость</code>
</pre>
<p>Поэтому, приносим в жертву двойные кавычки, чтобы в остальных языках программирования/разметке использовать одинарные кавычки.</p>
<p>P.S Нет, ну точно подписка на новые комментарии не работает B)</p>
					<footer>
						<a href="http://sadykh.ru" rel="external nofollow" class="url">Sadykh</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5456">27 августа ’12 в 23:40</a></time>
					</footer>
				</article>
				<article id="comment-5457"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Sadykh,</b> нет, в нотации <code>this.className='new_name'</code> кавычки необходимы, так что класс <code>new_name</code> добавится без кавычек. Что касается подписки, то я посмотрел — в системе есть ваш e-mail, подписанный на этот пост. Даже не знаю, что не так.</p>
<p>Рад за ваш выбор, по-моему он самый последовательный из всех возможных.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">Вадим Макеев</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5457">27 августа ’12 в 23:48</a></time>
					</footer>
				</article>
				<article id="comment-5458"class="comment even thread-even depth-1">
					<p>:)</p>
<p>По случаю решил чуть доработать свой старый эксперимент. Ну ладно, переписал с ноля :) Хоп — <a href="http://kizu.github.com/slider/" rel="nofollow">http://kizu.github.com/slider/</a></p>
<p>Основная проблема — нельзя делать полностью скруглённые углы — для слайда фонов используется метод с фоном, который при анимации не идеально отображается. Возможно, в какой-нибудь из следующих итераций поправлю это.</p>
<p>А так — основной идеей было сделать автоматическую ширину по содержимому, во главу этого угла было поставлено всё остальное. Ну и код ещё сильно сырой — половину уже хочу переписать ещё раз )</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5458">28 августа ’12 в 1:58</a></time>
					</footer>
				</article>
				<article id="comment-5462"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да, вопрос чекбокс или 2 радио-баттана остро стоял, когда я делал реализацию для нашего проекта.</p>
<p>В итоге оказалось что не выделенный чекбокс игнорируется при отправке формы (если память не изменяет), и пришлось переделывать на пару радио-баттанов, для совместимости с бекэндом.</p>
					<footer>
						Ogonkov						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5462">31 августа ’12 в 18:30</a></time>
					</footer>
				</article>
				<article id="comment-5816"class="comment even thread-even depth-1">
					<p>Для тех у кого проблемы с бакендом рекомендую проверять на существование соответствуещого POST параметра и, в случае его отсутствия, сохранять в БД соответствующее значение и не использовать mass assignment при обработке формы.</p>
					<footer>
						Александр						<time pubdate datetime="2012-08-26T02:39:22+00:00"><a href="index.html#comment-5816">15 сентября ’12 в 12:10</a></time>
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
	<!-- 10 & 0,513 -->
</body>
</html>
