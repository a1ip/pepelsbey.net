<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Чай со спецэффектами — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Чай со спецэффектами</a></h1>
				<time pubdate datetime="2009-12-24T00:46:35+00:00">24 декабря ’09</time>
			</header>
			<p>Как обычные люди готовят себе чай? Довольно просто: ставят чайник, находят чашку, закидывают пакетик или даже заливают заварку. Просто и безыскусно. Сегодня я&nbsp;расскажу вам, как готовят чай суровые&nbsp;верстальщики.</p>

<p>Для этого вам понадобятся следующие вещи: простой текстовый редактор и свежий браузер, вроде <a href="http://getfirefox.com/">Firefox</a>, <a href="http://opera.com/">Opera</a>, <a href="http://apple.com/safari/">Safari</a> или <a href="http://google.com/chrome/">Chrome</a>. Чем свежее, тем лучше&nbsp;— хорошо бы даже ночную сборку или какую-нибудь альфу.</p>

<h2>Готовим основу</h2>

<p>Для начала подготовим основу для нашего чаепития. На мой взгляд, прогрессивный HTML5-шаблон с&nbsp;простым доктайпом <code>&lt;!DOCTYPE HTML&gt;</code> подойдёт лучше всего:</p>

<pre><code>&lt;!DOCTYPE HTML&gt;</code>
<code>&lt;html lang="en-US"&gt;</code>
<code>&lt;head&gt;</code>
<code>    &lt;title&gt;Чай со спецэффектами&lt;/title&gt;</code>
<code>    &lt;meta charset="UTF-8"&gt;</code>
<code>&lt;/head&gt;</code>
<code>&lt;body&gt;</code>
<code>    …</code>
<code>&lt;/body&gt;</code>
<code>&lt;/html&gt;</code></pre>

<p>Обратите внимание на атрибут <code>lang</code> элемента <code>&lt;html&gt;</code>&nbsp;— мы собираемся заваривать английский чай с&nbsp;американским акцентом, и его значение как раз соответствует нашему замыслу: <code>en-US</code>. Дальше нам это ещё пригодится.</p>

<p>Теперь давайте отыщем подходящую чашку. Точнее, даже не&nbsp;отыщем, а&nbsp;тут же соберём из знакомых частей. Из чего мы можем составить обычную чашку чая? Как минимум, из самой чашки <code>cup</code> и блюдца <code>saucer</code>. Чашка состоит из сосуда <code>vessel</code> с&nbsp;ручкой <code>handle</code>, в&nbsp;который последовательно налиты чай <code>tea</code>, брошены два кусочка сахара <code>sugar</code>, по вкусу, а&nbsp;замыкается это всё донышком <code>bottom</code>. Так у нас и получилось:</p>

<pre><code>&lt;div class="cup"&gt;</code>
<code>    &lt;div class="vessel"&gt;</code>
<code>        &lt;div class="tea"&gt;</code>
<code>            &lt;div class="sugar"&gt;&lt;/div&gt;</code>
<code>            &lt;div class="sugar"&gt;&lt;/div&gt;</code>
<code>            &lt;div class="bottom"&gt;&lt;/div&gt;</code>
<code>        &lt;/div&gt;</code>
<code>    &lt;/div&gt;</code>
<code>    &lt;div class="handle"&gt;&lt;/div&gt;</code>
<code>&lt;/div&gt;</code>
<code>&lt;div class="saucer"&gt;&lt;/div&gt;</code></pre>

<p>Итак, основа для нашего чаепития готова, начинаем его рисовать.</p>

<h2>Раскрашиваем набросок</h2>

<p>Теперь отбросим все браузерные условности простым ластиком. Чай у&nbsp;нас незамысловатый, поэтому здесь подойдёт и <code>* { … }</code>. Для более сложных проектов всё же рекомендуется использовать <a href="http://meyerweb.com/eric/tools/css/reset/">reset.css</a></p>

<pre><code>* {</code>
<code>    padding:0;</code>
<code>    margin:0;</code>
<code>    }</code></pre>

<p>Наступает очередь воплотить все составные части нашего чая: позиционируем их по центру, правильно расставляем z-index, задаём размеры и цвет фона для каждого элемента. Вот как выглядит чашка:</p>

<pre><code>.cup {</code>
<code>    position:absolute;</code>
<code>    top:50%;</code>
<code>    left:50%;</code>
<code>    z-index:2;</code>
<code>    margin:-150px 0 0 -150px;</code>
<code>    width:300px;</code>
<code>    height:300px;</code>
<code>    }</code></pre>

<p>…и получаем <a href="/pro/2009/12/special-effects-tea/1..html">пример №1</a>, он же <a href="/pro/2009/12/special-effects-tea/1.png" rel="darkbox">на картинке</a>.</p>

<p>Если вы остались довольны получившимся кубизмом&nbsp;— хорошо, значит вас устроит чаепитие даже в компании Internet Explorer. Те, кому этого мало, приглашаются дальше.</p>

<h2>Спиливаем лишнее</h2>

<p>И всё-таки, чашка должна быть круглой. Хотя бы для того, чтобы во время размешивания там не&nbsp;застревала чайная ложка. Давайте всё скруглим. После недавнего выхода <a href="http://labs.opera.com/news/2009/12/22/">альфа-версии Opera&nbsp;10.50</a> с&nbsp;широкой поддержкой модуля <a href="http://www.w3.org/TR/css3-background/">CSS Backgrounds and Borders Level 3</a> для этих целей мы вполне можем рассчитывать на свойство <code>border-radius</code>.</p>

<p>Скругляем блюдце: его ширина и высота равны 500-м пикселям, значит для того, чтобы получить окружность, радиус скругления должен составлять половину ширины, т.е. 250 пикселей:</p>

<pre><code>.saucer {</code>
<code>    position:absolute;</code>
<code>    top:50%;</code>
<code>    left:50%;</code>
<code>    z-index:1;</code>
<code>    margin:-250px 0 0 -250px;</code>
<code>    width:500px;</code>
<code>    height:500px;</code>
<code>    -webkit-border-radius:250px;</code>
<code>    -moz-border-radius:250px;</code>
<code>    border-radius:250px;</code>
<code>    background:#FFF;</code>
<code>    }</code></pre>

<p>В данном случае компактное правило <code>border-radius:250px</code> задаёт радиус скругления всех четырёх углов, точно так же, как <code>margin:0</code> обнуляет поля со всех четырёх сторон элемента.</p>

<p>Обратите внимание на префиксы <code>-webkit</code> и <code>-moz</code>&nbsp;— они нужны браузерам на основе Webkit (Safari, Chrome) и Gecko (Firefox) для того, чтобы применить скругление. Последняя альфа браузера Opera обрабатывает свойство без префикса. Подобным же образом мы скругляем сосуд, чай и донышко. Ручку и подтаявшие кусочки сахара мы подтачиваем до скруглённых брусков.</p>

<p>И получаем <a href="/pro/2009/12/special-effects-tea/2..html">пример №2</a>, он же <a href="/pro/2009/12/special-effects-tea/2.png" rel="darkbox">на картинке</a>.</p>

<p>И хорошо бы: всё скруглилось, встало на свои места. Так ведь и просилась бы чашка в&nbsp;руки, если бы не&nbsp;пугала своей плоской двухмерностью. Самое время добавить немного объёма.</p>

<h2>Надуваем чашку</h2>

<p>Будем честны, мы здесь не&nbsp;пытаемся заигрывать с&nbsp;<a href="http://www.whatwg.org/specs/web-apps/current-work/#the-canvas-element">Canvas</a>, поэтому объём у&nbsp;нас будет псевдо-трёхмерным. А много ли надо нам, жертвам квадратного и плоского веба? Берём в руки свойство <code>box-shadow</code> и вперёд:</p>

<pre><code>.vessel {</code>
<code>    -webkit-box-shadow:20px 20px 100px rgba(0,0,0,.8);</code>
<code>    -moz-box-shadow:20px 20px 100px rgba(0,0,0,.8);</code>
<code>    box-shadow:20px 20px 100px rgba(0,0,0,.8);</code>
<code>    }</code></pre>

<p>Свойство <code>box-shadow</code> конструируется просто: горизонтальное смещение тени, вертикальное, размер и цвет, который мы задаём в&nbsp;виде <code>rgba()</code>, чтобы последним значением указать полупрозрачность заливки. В&nbsp;случае с&nbsp;элементом <code>tea</code>, также используется ключевое слово <code>inset</code>, чтобы повернуть тень внутрь элемента.</p>

<p>И вот <a href="/pro/2009/12/special-effects-tea/3..html">пример №3</a>, он же <a href="/pro/2009/12/special-effects-tea/3.jpg" rel="darkbox">на картинке</a>.</p>

<p>Ну, что&nbsp;— чай уже почти как настоящий. За исключением некоторых проблем: тени в&nbsp;браузерах на движке Webkit рассчитываются весьма загадочно (см. заметку <a href="/2008/10/firefox-vs-photoshop/">Firefox против Photoshop</a>), поэтому, в&nbsp;нашем случае, выглядят более жёстко. Также текущая версия Webkit в браузере Safari 4.0.4 пока не&nbsp;умеет применять ключевое слово <code>inset</code>, однако Chrome уже справляется.</p>

<p>Осталось только добавить в&nbsp;это чаепитие немного жизни.</p>

<h2>Художественный беспорядок</h2>

<p>Самая очевидная проблема нашей чашки&nbsp;— это отвалившаяся ручка и вставшие пирамидой кусочки сахара. Давайте разбросаем всё это по своим местам и попробуем размешать сахар. Поможет нам в этом свойство <code>transform</code> и методы <code>rotate()</code> и <code>translate()</code>, занимающиеся, соответственно, поворотом и перемещением элементов.</p>

<p>Обратите внимание, что для краткости в&nbsp;этой части примеры кода будут приводится без дублирования свойств с префиксами <code>-webkit</code>, <code>-moz</code> и <code>-o</code>. Полный код вы можете найти в примерах.</p>

<p>Для начала, вернём ручку ровно в&nbsp;центр чашки, изменив значение отрицательного поля, а потом применим <code>transform</code>: повернём на –145 градусов и сместим на 170 пикселей.</p>

<pre><code>.handle {</code>
<code>    margin:-20px 0 0 -45px;</code>
<code>    transform:rotate(-145deg) translate(170px,0);</code>
<code>    }</code></pre>

<p>Принимаемся за кубики: их у нас ровно два. Не&nbsp;знаю, как для вас, но для меня это оптимальное количество сахара. И нам нужно обратиться к&nbsp;каждому из кубиков, чтобы применить нужное смещение. Самым удачным способом будет посчитать их по порядку появления в&nbsp;чае, при помощи селектора <code>:nth-child()</code>:</p>

<pre><code>.sugar:nth-child(1) {</code>
<code>    transform:rotate(70deg) translate(-20px,20px);</code>
<code>    }</code>
<code>.sugar:nth-child(2) {</code>
<code>    transform:rotate(30deg) translate(35px,0);</code>
<code>    }</code></pre>

<p>Теперь всё на месте, и вроде бы можно пить чай, но сахар упорно не&nbsp;желает размешиваться. Значит, самое время встряхнуть его при помощи сочетания свойств <code>transform</code> и <code>transition</code>. Для начала мы задаём каждому кубику новое смещение, которое произойдёт при наведении на чашку: поворот на 1200 градусов и новые координаты.</p>

<pre><code>.cup:hover</code>
<code>.sugar:nth-child(1) {</code>
<code>    transform:rotate(1200deg) translate(-20px,20px);</code>
<code>    }</code></pre>

<p>А затем описываем сам процесс перемещения:</p>

<pre><code>.sugar {</code>
<code>    transition:transform 10s ease-out;</code>
<code>    }</code></pre>

<p>Синтаксис свойства <code>transition</code> простой: сначала идёт то свойство, которое мы собираемся изменять, потом время и тип ускорения, в&nbsp;нашем случае <code>ease-out</code>, что значит с&nbsp;замедлением. При наведении курсора на чашку <code>.cup:hover</code> сахар будет размешиваться по часовой стрелке, при отведении&nbsp;— в&nbsp;обратную сторону.</p>

<p>И вот <a href="/pro/2009/12/special-effects-tea/4..html">пример №4</a>, он же <a href="/pro/2009/12/special-effects-tea/4.jpg" rel="darkbox">на картинке</a>.</p>

<p>Практически всё готово. Самые нетерпеливые могут браться за чай, остальные же приглашаются дальше — добавить разнообразия.</p>

<h2>Немного разнообразия</h2>

<p>Сколько людей, столько и вкусов. Поэтому давайте добавим нашему чаепитию возможность выбрать в какой традиции пить чай: в&nbsp;английской, русской или японской. Предлагаю сделать это наиболее адекватно, используя упомянутый выше атрибут <code>lang</code> элемента <code>&lt;html&gt;</code>. Для этого добавим возможность выбора:</p>

<pre><code>&lt;ul class="switcher"&gt;</code>
<code>    &lt;li lang="en-US" title="Английски"&gt;&lt;/li&gt;</code>
<code>    &lt;li lang="ru-RU" title="Русский"&gt;&lt;/li&gt;</code>
<code>    &lt;li lang="ja-JP" title="Японский"&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code></pre>

<p>Каждый из пунктов нашего меню будет переключать атрибут <code>lang</code> на нужный язык при помощи нехитрого скрипта, навешивающего обработчики:</p>

<pre><code>function init() {</code>
<code>    var html = document.documentElement;</code>
<code>    var items = document.querySelectorAll('ul.switcher li');</code>
<code>    for(var i=0; i&lt;items.length; i++){</code>
<code>        items[i].onclick = function() {</code>
<code>            html.lang = this.lang;</code>
<code>        }</code>
<code>    }</code>
<code>}</code>
<code>window.onload = init;</code></pre>

<p>В&nbsp;этом скрипте используется удобнейший метод <code>querySelectorAll</code>, который позволяет выбрать нужные элементы при помощи CSS-селекторов наподобие <a href="http://jquery.com/">jQuery</a>.</p>

<p>Осталось только добавить специфические стили для каждого из языков (тематическую скатерть и цвет чая) и поменять состояние текущего пункта меню. Вся магия происходит благодаря псевдо-классу <code>:lang()</code>, который появляется у каждого элемента после того, как мы обновили атрибут <code>lang</code> элемента <code>&lt;html&gt;</code>:</p>

<pre><code>BODY:lang(en-US) {</code>
<code>    background:#519AB8 url(i/en.png);</code>
<code>    }</code>
<code>.switcher:lang(en-US) LI[lang=en-US],</code>
<code>.switcher:lang(ru-RU) LI[lang=ru-RU],</code>
<code>.switcher:lang(ja-JP) LI[lang=ja-JP] {</code>
<code>    border-color:#FFF;</code>
<code>    cursor:default;</code>
<code>    }</code></pre>

<p>И, наконец, последний <a href="/pro/2009/12/special-effects-tea/5..html">пример №5</a>, он же <a href="/pro/2009/12/special-effects-tea/5.jpg" rel="darkbox">на картинке</a>. Чай готов, сахар по вкусу&nbsp;— можно пить :)</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>45</small>
				</header>
				<article id="comment-4273"class="comment even thread-even depth-1">
					<p>Круто. Очень круто!</p>
					<footer>
						<a href="http://blog.startika.com/" rel="external nofollow" class="url">labria</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4273">24 декабря ’09 в 1:50</a></time>
					</footer>
				</article>
				<article id="comment-4274"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Браво!<br />
Моё чувство прекрасного, основанное на чистом HTML и максимальном избежании JS, просто в восторге.</p>
					<footer>
						<a href="http://sokolov.cc" rel="external nofollow" class="url">Денис</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4274">24 декабря ’09 в 2:12</a></time>
					</footer>
				</article>
				<article id="comment-4275"class="comment even thread-even depth-1">
					<p>какое полезное чаепитие ;)</p>
					<footer>
						<a href="http://sunnyfetis.livejournal.com" rel="external nofollow" class="url">sunnyfetis</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4275">24 декабря ’09 в 2:35</a></time>
					</footer>
				</article>
				<article id="comment-4276"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Чай хорош, маэстро, снимаю шляпу.</p>
					<footer>
						<a href="http://cssninja.ru" rel="external nofollow" class="url">CSS Ninja</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4276">24 декабря ’09 в 2:36</a></time>
					</footer>
				</article>
				<article id="comment-4277"class="comment even thread-even depth-1">
					<p>Вау!</p>
					<footer>
						<a href="http://pashkov.ru" rel="external nofollow" class="url">Пашков</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4277">24 декабря ’09 в 3:19</a></time>
					</footer>
				</article>
				<article id="comment-4278"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ты волшебник! Круто )</p>
					<footer>
						<a href="http://butylski.moikrug.ru" rel="external nofollow" class="url">Butylski</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4278">24 декабря ’09 в 5:26</a></time>
					</footer>
				</article>
				<article id="comment-4280"class="comment even thread-even depth-1">
					<p>круто, прям вектор (:</p>
					<footer>
						<a href="http://donothing.ru" rel="external nofollow" class="url">art</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4280">24 декабря ’09 в 7:10</a></time>
					</footer>
				</article>
				<article id="comment-4281"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, вы извращенец в хорошем смысле этого слова, но это скоро нас всех накроет похоже. Продажи фотошопа могут резко пойти вниз. Мне нравится Overall performance score 100 и Grade A on Make fewer HTTP requests в YSlow. Спасибо!</p>
					<footer>
						Сергей						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4281">24 декабря ’09 в 7:46</a></time>
					</footer>
				</article>
				<article id="comment-4282"class="comment even thread-even depth-1">
					<p>бззз, а уже есть какое-нить движение за рисование на чистом хтмле? ну типа там как аскииарт или графити...</p>
					<footer>
						asp_id						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4282">24 декабря ’09 в 8:59</a></time>
					</footer>
				</article>
				<article id="comment-4283"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Респект!</p>
					<footer>
						<a href="http://xorax.livejournal.com" rel="external nofollow" class="url">Иван</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4283">24 декабря ’09 в 9:24</a></time>
					</footer>
				</article>
				<article id="comment-4284"class="comment even thread-even depth-1">
					<p>Первый раз за года два вижу атрибут lang в действии, хоть и не серьезном (: Спасибо за хорошую статью!</p>
					<footer>
						<a href="http://life4web.ru" rel="external nofollow" class="url">omfg</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4284">24 декабря ’09 в 9:43</a></time>
					</footer>
				</article>
				<article id="comment-4285"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Очень образовательно. Ну и рад за Оперу, че.<br />
Осталось всем браузерам одинаково тени отрисовывать, ну и подтянуть сюда IE.<br />
И заживем, братя верстальщики, будет и на нашей любимой улице праздник.</p>
					<footer>
						<a href="https://twitter.com/blia" rel="external nofollow" class="url">blia</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4285">24 декабря ’09 в 9:48</a></time>
					</footer>
				</article>
				<article id="comment-4286"class="comment even thread-even depth-1">
					<p>Это мегакруто.</p>
					<footer>
						Дмитрий						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4286">24 декабря ’09 в 10:59</a></time>
					</footer>
				</article>
				<article id="comment-4287"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Надо было переключение языка сделать через :target :) Чтобы никакого JS :) Но всё равно классно. Отличная идея!</p>
					<footer>
						<a href="http://bolknote.ru/" rel="external nofollow" class="url">BOLK</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4287">24 декабря ’09 в 11:07</a></time>
					</footer>
				</article>
				<article id="comment-4289"class="comment even thread-even depth-1">
					<p>Изумительно. Когда вижу такие штуки, жалею, что ушел из веб-девелопмента. Хотя конечно когда еще это мы сумеем применить - большой вопрос. Пользователей IE6 до сих пор никто не отменял.</p>
					<footer>
						<a href="http://heller.ru/blog" rel="external nofollow" class="url">Heller</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4289">24 декабря ’09 в 12:44</a></time>
					</footer>
				</article>
				<article id="comment-4290"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Круто! И не подумал бы, что такое можно сделать без картинок. А ведь всего год-два назад такое трудно было представить.<br />
Хотя мне вариант в Опере 10.10, тоже нравится))</p>
					<footer>
						<a href="http://alex.kotomanov.com" rel="external nofollow" class="url">alex.kotomanov</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4290">24 декабря ’09 в 12:56</a></time>
					</footer>
				</article>
				<article id="comment-4291"class="comment even thread-even depth-1">
					<p>Хром 4.0.249.43 рендерит квадратный артефакт в чашке: <a href="http://screencast.com/t/ZDQ1YWU2OW" rel="nofollow">http://screencast.com/t/ZDQ1YWU2OW</a> Но в целом очень круто.</p>
					<footer>
						<a href="http://paradigm.ru" rel="external nofollow" class="url">dreikanter</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4291">24 декабря ’09 в 13:01</a></time>
					</footer>
				</article>
				<article id="comment-4292"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Потрясающе, а такие моменты особенно жаль что до сих пор есть ИЕ ((</p>
					<footer>
						Чистяков Денис						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4292">24 декабря ’09 в 14:19</a></time>
					</footer>
				</article>
				<article id="comment-4293"class="comment even thread-even depth-1">
					<p>Кстати, а почему ручке было не сделать закругление только с двух углов, ведь бордер-радиу это позволяет?</p>
					<footer>
						Чистяков Денис						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4293">24 декабря ’09 в 14:21</a></time>
					</footer>
				</article>
				<article id="comment-4294"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>asp_id,</strong> рисовать «на чистом HTML» это немного дико с точки зрения логики документа. Прогрессивные ребята сейчас рисуют на упомянутом Canvas (отрисовка точек через JS) и SVG (XML-подобный векторный язык).</p>
<p><strong>BOLK,</strong> я сначала сделал через :target, но там возникли проблемы с изначальным состоянием и во время обновления. Ну, и хотелось завязать всё на lang.</p>
<p><strong>dreikanter,</strong> Chrome for Mac 4.0.249.43 показывает всё совсем по-другому: с жёсткой тенью и без артефактов. Странно…</p>
<p><strong>Чистяков Денис,</strong> скругление для всех четырёх углов просто пишется короче, чем для двух — а если не видно разницы, то зачем платить больше? ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4294">24 декабря ’09 в 15:10</a></time>
					</footer>
				</article>
				<article id="comment-4295"class="comment even thread-even depth-1">
					<p>Наверное, круто было бы еще сделать, чтобы сахар постепенно таял :)</p>
					<footer>
						sparrow						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4295">24 декабря ’09 в 17:08</a></time>
					</footer>
				</article>
				<article id="comment-4296"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>sparrow,</strong> была такая идея — просто не дошли руки. Может выпущу через некоторое время «Чаепитие 2» ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4296">24 декабря ’09 в 17:15</a></time>
					</footer>
				</article>
				<article id="comment-4298"class="comment even thread-even depth-1">
					<p>ЗдОрово! Что тут еще скажешь...</p>
					<footer>
						<a href="http://dimox.name" rel="external nofollow" class="url">Dimox</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4298">24 декабря ’09 в 21:13</a></time>
					</footer>
				</article>
				<article id="comment-4299"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Здорово. HTML/CSS стал уже пригоден для писания демок, как амига и спектрум во время оно.</p>
					<footer>
						9000						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4299">25 декабря ’09 в 1:53</a></time>
					</footer>
				</article>
				<article id="comment-4303"class="comment even thread-even depth-1">
					<p>Забавно :)</p>
					<footer>
						<a href="http://kuroikaze85.wordpress.com" rel="external nofollow" class="url">Kuroki Kaze</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4303">25 декабря ’09 в 16:37</a></time>
					</footer>
				</article>
				<article id="comment-4304"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Мсье знает толк в извращениях. Снимаю шляпу. Браво:)</p>
					<footer>
						Евгений						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4304">25 декабря ’09 в 22:11</a></time>
					</footer>
				</article>
				<article id="comment-4305"class="comment even thread-even depth-1">
					<p>Скорей бы IE научился border-radius-у !<br />
А почему Opera взалась за default селекторы? А не стала делать -opera-border-radius и т.п.? Неужто Firefox и WebToolkit до такого не додумались?</p>
					<footer>
						Chestozo						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4305">27 декабря ’09 в 0:50</a></time>
					</footer>
				</article>
				<article id="comment-4323"class="comment odd alt thread-odd thread-alt depth-1">
					<p>почему нет ретвита твоих постов?</p>
					<footer>
						<a href="http://www.web-optimizer.us/" rel="external nofollow" class="url">sunnybear</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4323">12 января ’10 в 7:47</a></time>
					</footer>
				</article>
				<article id="comment-4329"class="comment even thread-even depth-1">
					<p><strong>sunnybear,</strong> не люблю я все эти кнопочки типа «ретвит делишезом в дигг».</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4329">12 января ’10 в 12:28</a></time>
					</footer>
				</article>
				<article id="comment-4634"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Мне по душе Малевич-версия в Опере ;)</p>
					<footer>
						<a href="http://genn.org/" rel="external nofollow" class="url">Genn</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4634">24 февраля ’10 в 16:57</a></time>
					</footer>
				</article>
				<article id="comment-4641"class="comment even thread-even depth-1">
					<p>мда.. в ИЕ8 зрелище плачевное(<br />
и судя по некоторым материалам от разрабов микрософта — в ИЕ9 будет не намного лучше...<br />
вообще, шикарно)<br />
я все никак ХТМЛ5 не начну осваивать (останавливает то, что пока это скорее фетиш, чем реально полезный навык...)</p>
					<footer>
						<a href="http://terion.name/" rel="external nofollow" class="url">terion</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4641">14 марта ’10 в 19:10</a></time>
					</footer>
				</article>
				<article id="comment-4644"class="comment odd alt thread-odd thread-alt depth-1">
					<p>IE8:</p>
<p><a href="http://gyazo.com/3374d36ca5112693ef2073a6e1e8598d.png" rel="nofollow">http://gyazo.com/3374d36ca5112693ef2073a6e1e8598d.png</a></p>
<p>Чайку? :)</p>
					<footer>
						<a href="http://cro.cc" rel="external nofollow" class="url">le</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4644">20 марта ’10 в 20:20</a></time>
					</footer>
				</article>
				<article id="comment-4701"class="comment even thread-even depth-1">
					<p>Добрый день, не подскажите как бороться с тем, что в хроме, при вертикальном позиционировании по центру, при уменьшении высоты браузера (меньше высоты текущего блока чашки) часть блока уплывает вверх, за границы окна?</p>
					<footer>
						invite						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4701">21 апреля ’10 в 12:33</a></time>
					</footer>
				</article>
				<article id="comment-4702"class="comment odd alt thread-odd thread-alt depth-1">
					<p>invite, боюсь, что особенно никак — разве что ставить минимальную высоту для body, чтобы появлялась прокрутка.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4702">21 апреля ’10 в 12:58</a></time>
					</footer>
				</article>
				<article id="comment-4730"class="comment even thread-even depth-1">
					<p>все же смею напомнить о суровой действительности в этом мире:</p>
<p> 90% -  держатели мышки двумя руками<br />
 максимум на что можно рассчитывать - это ие 8<br />
 пока мелкие не пошевеляться: все что вы делаете - в жопу</p>
<p>так что не дурите мозги со своими новыми технологиями<br />
лет через 5 открою гугл и почитаю на оф сайтах что и как делать</p>
<p>особенно подтверждает мое мнение комментарий: продажи фотошопа могут резко пойти вниз.<br />
сейчас этими технологиями занимаются мудаки которые ничего не смыслят в обычной православной верстке (не говоря уже про гимп (тьфу фотосрачень)). читай школота. точка</p>
					<footer>
						<a href="http://localhost" rel="external nofollow" class="url">metaluga</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4730">2 июля ’10 в 21:48</a></time>
					</footer>
				</article>
				<article id="comment-4735"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Даже слов нет</p>
					<footer>
						usrmrz						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4735">20 июля ’10 в 12:38</a></time>
					</footer>
				</article>
				<article id="comment-4796"class="comment even thread-even depth-1">
					<p><strong>metaluga</strong>, сам ты фотосрачень, чем GIMP не устраивает? Уже больше года рисую дизайны для сайтов в нем (более полусотни заказчиков). И не один не пожаловался. А если руки кривые - ни один фотошоп не поможет</p>
					<footer>
						mirrr						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4796">10 сентября ’10 в 21:10</a></time>
					</footer>
				</article>
				<article id="comment-4805"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Неплохой пример, вот только на будущее</p>
<p>если бы всех массово пересадить с ИЕ, то можно было бы активно внедрять. А так даже современные браузеры не все в полной мере осилили пример: Chrome 6.0.472.63 beta </p>
<p>А вращение чая в чашке выглядит в каждом браузере иначе (:</p>
					<footer>
						<a href="http://braincode.com" rel="external nofollow" class="url">x-sam</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4805">26 сентября ’10 в 17:33</a></time>
					</footer>
				</article>
				<article id="comment-4816"class="comment even thread-even depth-1">
					<p>Интересно.Спасибо. Ещё можно: </p>
<pre>
<code>.cup:hover{</code>
<code>    cursor:url(images/cursors/spoon.cur), auto;</code>
<code>    }</code>
</pre>
					<footer>
						±e_						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4816">17 октября ’10 в 2:59</a></time>
					</footer>
				</article>
				<article id="comment-4850"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Крутотенюшка! Удивительное и необычное использование lang. Жаль не во всех браузерах одинаково работает..</p>
					<footer>
						<a href="http://vanilla-man.com" rel="external nofollow" class="url">Дмитрий Чебаков</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4850">12 ноября ’10 в 16:13</a></time>
					</footer>
				</article>
				<article id="comment-4855"class="comment even thread-even depth-1">
					<p>супер!</p>
					<footer>
						ziftech						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-4855">15 ноября ’10 в 16:42</a></time>
					</footer>
				</article>
				<article id="comment-5129"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Просто красиво, спасибо за урок!</p>
					<footer>
						Алексекй						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-5129">16 марта ’11 в 17:09</a></time>
					</footer>
				</article>
				<article id="comment-5202"class="comment even thread-even depth-1">
					<p>Я в восторге!<br />
transform:rotate(-145deg) translate(170px,0);<br />
В справочнике CSS3 эти свойства не нашел. Откуда их брали?</p>
					<footer>
						jumancy						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-5202">1 августа ’11 в 10:03</a></time>
					</footer>
				</article>
				<article id="comment-5203"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>jumancy,</b> давайте так: я вам скажу откуда я взял эти свойства, а вы мне — откуда вы взяли такой сомнительный CSS3-справочник.</p>
<p>Если говорить про справочник, то купите и прочитайте живую или электронную версию книги «<a href="http://www.abookapart.com/products/css3-for-web-designers" rel="nofollow">CSS3 for Designers</a>»;  посмотрите <a href="http://meiert.com/en/indices/css-properties/" rel="nofollow">на список CSS-свойств</a>, разделённый по версиям; или почитайте какие свойства поддерживает <a href="http://www.opera.com/docs/specs/presto29/css/properties/" rel="nofollow">Opera</a>, <a href="https://developer.mozilla.org/en/CSS" rel="nofollow">Firefox</a> и <a href="http://msdn.microsoft.com/ru-ru/ie/hh272902#_CSS" rel="nofollow">IE10</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-5203">1 августа ’11 в 10:18</a></time>
					</footer>
				</article>
				<article id="comment-5319"class="comment even thread-even depth-1">
					<p>Супер. Спасибо за урок! Добавить звуки и меняющийся бэкграунд - выйдет отличная утренняя открытка</p>
					<footer>
						<a href="http://voffa.ru" rel="external nofollow" class="url">voffa</a>						<time pubdate datetime="2009-12-24T00:46:35+00:00"><a href="index.html#comment-5319">7 марта ’12 в 15:52</a></time>
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
	<!-- 15 & 0,531 -->
</body>
</html>
