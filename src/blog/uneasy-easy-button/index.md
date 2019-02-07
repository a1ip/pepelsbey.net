<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Непростая простая кнопка — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Непростая простая кнопка</a></h1>
				<time pubdate datetime="2012-07-19T11:39:39+00:00">19 июля ’12</time>
			</header>
			<p>Надеюсь, ни для кого уже не секрет, что оформительскую графику на сайтах давно пора переводить в формат SVG с растровым фолбеком (при необходимости). Кто понял это раньше, чем экраны с ретиной, готовые поспорить по качеству картинки с полиграфией, появились на <nobr>4-м</nobr> айфоне, новом айпаде, а теперь и <a href="http://www.apple.com/macbook-pro/features/">на новом макбуке</a> — тот большой молодец. Но если кто-то до сих пор не в курсе, у меня специально для вас есть комикс <a href="http://svgvspng.com/#ru">SVG vs PNG</a>.</p>

<p>В отличие от сложных методов, вроде <code>-webkit-image-set</code>, для которых нужно указывать несколько источников картинки в зависимости от разрешения, в случае с SVG нужна всего одна векторная картинка для всех случаев:</p>

<pre>
	<code>E {</code>
	<code>    background:url(image.png) no-repeat;</code>
	<code>    background:rgba(0, 0, 0, 0) url(image.svg) no-repeat;</code>
	<code>    }</code>
</pre>

<p>Удивлены, зачем перед второй декларацией стоит прозрачный чёрный цвет? Браузеры, которые не понимают SVG и о которых пока приходится заботиться, в нашем случае это всеми любимые IE6, IE7 и IE8, помимо прочего, не поддерживают цветовую модель <code>rgba(…)</code> в CSS, поэтому декларация для них окажется невалидной и будет отброшена. К сожалению, это не сработает в Firefox 3.6 и в старых браузерах на движке Webkit, которые стоят на системах вроде Android 2.2 (как на моём HTC Desire), поэтому для них будет уместнее использовать определение поддержики SVG с помощью <a href="http://modernizr.com">Modernizr</a>. Тогда вам придётся написать что-то вроде:</p>

<pre>
	<code>E {</code>
	<code>    background:url(image.png) no-repeat;</code>
	<code>    }</code>
	<code>.inlinesvg E {</code>
	<code>    background:url(image.svg) no-repeat;</code>
	<code>    }</code>
</pre>

<p>Поскольку в Firefox 3.6 есть базовая поддержка SVG (через элемент <code>&lt;object&gt;</code>), но нет поддержки SVG в для фоновых изображений в CSS, то определять поддержку нужно будет не через класс <code>.svg</code>, а через <code>.inlinesvg</code>, который <a href="https://developer.mozilla.org/en/Firefox_4_for_developers">появился в Firefox 4.0</a> вместе с поддержкой векторных фоновых картинок.</p>

<p>Дальше мы просто экспортируем SVG-картинку из любимого векторного редактора, чистим от мусора, расставляем недостающие параметры, вставляем в CSS фоном. Но дьявол, как известно, в мелочах, и даже простую кнопку с векторной иконкой можно сделать пятью разными способами. Поэтому давайте пройдём шаг за шагом процесс создания кнопки, решая разные проблемы, возникающие по дороге, и даже просто выдумывая себе новые.</p>

<p>Если вы не слишком хорошо знакомы с SVG, то прежде чем читать дальше, вы можете отвлечься на мой доклад «<a href="/2010/11/web-in-curves/">Веб в кривых. Второе рождение SVG</a>» или хотя бы пролистать <a href="/pres/web-in-curves/">презентацию к нему</a> и посмотреть примеры.</p>

<h2>Самая простая кнопка</h2>

<figure class="small">
	<img src="/pro/2012/07/uneasy-easy-button/images/play-button.png" width="230" height="213">
	<figcaption>Простая кнопка, увеличенная примерно в 10 раз для наглядности</figcaption>
</figure>

<p>Давайте начнём с самой простой кнопки «Play», которая согласно первоначальной дизайнерской идее представляет собой чёрный треугольник, который должен быть вписан в белый квадрат размером 25×25 пикселей. Любители CSS-графики тут же попытаются сделать её с помощью лошадиных размеров рамок, диагонали которых нормально сглаживаются только при углах, кратных 45°, а мы с вами пока продолжим.</p>

<p>Начинать всегда стоит с HTML, и мы возьмём для нашей кнопки элемент «кнопка», что может быть логичнее! Предусмотрим сразу абстрактную кнопку <code>.button</code> и её подвид <code>.play</code>.</p>

<pre>
	<code>&lt;button class="button play"&gt;Play&lt;/button&gt;</code>
</pre>

<p>И добавим простой CSS:</p>

<pre>
	<code>.button {</code>
	<code>    display:inline-block;</code>
	<code>    padding:0;</code>
	<code>    width:25px;</code>
	<code>    height:25px;</code>
	<code>    border:none;</code>
	<code>    background:#000 no-repeat;</code>
	<code>    text-indent:-9999px;</code>
	<code>    }</code>
	<code>.button.play {</code>
	<code>    background-image:url(images/play-button.png);</code>
	<code>    background-image:rgba(0, 0, 0, 0) url(images/play-button.svg);</code>
	<code>    }</code>
</pre>

<p>Если мы собираемся делать векторную графику, понятно, что без векторых исходников нам не обойтись. Первым делом хочется поступить с этим треугольником так же, как мы раньше поступали с растровой графикой: просто сохранить его как SVG и поставить фоном. Но в нашем случае фигура настолько простая, что вместо экспорта её будет проще написать руками. Заодно мы сможем понять, как работает SVG, и нам не придётся чистить экспорт от мусора. Возьмём шаблон минимального SVG-файла и вставим в него элемент <code>&lt;polygon&gt;</code> с тремя точками, соответствующими вершинам нашего треугольника. Координаты точек в Illustrator можно подсмотреть, наведя курсор на каждую из них. Пары координат через запятую разделяются пробелами: <code>x1,y1 x2,y2</code>.</p>

<pre>
	<code>&lt;svg xmlns="http://www.w3.org/2000/svg" width="8" height="9"&gt;</code>
	<code>    &lt;polygon fill="#000" points="0,0 8,4.5 0,9"/&gt;</code>
	<code>&lt;/svg&gt;</code>
</pre>

<p>Если мы зададим размеры SVG-элементу с помощью атрибутов <code>width</code> и <code>height</code>, иконка будет вести себя как растровая и всегда будет указанных размеров, куда бы мы её не вставили. Это вполне нормально и выполняет нашу задачу по отрисовке чёткой графики для дисплеев с высоким разрешением. Но указание явных размеров лишает нас одного из преимуществ формата — возможности подстаиваться под размеры объекта, фоном к которому он указан.</p>

<p>Поэтому давайте вместо размеров укажем нашей иконке атрибут <code>viewBox</code> (именно с прописной «B», иначе не сработает) со значением <code>0 0 8 9</code>, где 8 и 9 — это ширина и высота нашей иконки в пикселях. Подробнее про <b>viewBox</b> и другие его параметры <a href="http://www.w3.org/TR/SVG/coords.html#ViewBoxAttribute">читайте в спецификации SVG</a>.</p>

<pre>
	<code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 9"&gt;</code>
	<code>    &lt;polygon fill="#000" points="0,0 8,4.5 0,9"/&gt;</code>
	<code>&lt;/svg&gt;</code>
</pre>

<p>А теперь откройте по очереди два файла <a href="/pro/2012/07/uneasy-easy-button/images/play-fixed.svg">play-fixed.svg</a> и <a href="/pro/2012/07/uneasy-easy-button/images/play-viewbox.svg">play-viewbox.svg</a> в новых вкладках и сравните результат. При указанных размерах SVG сохраняет их, а с указанным <code>viewBox</code> пытается вписаться в размеры окна или элемента, сохраняя пропорции. Поэтому если мы захотим сделать ещё одну кнопку не 25×25, а 100×100 пикселей, то нам не придётся создавать новую иконку для неё.</p>

<p>Но в нашем случае нужно не просто вписать треугольник во все 25×25 пикселей кнопки, а сохранить пропорции отступов и расположения треугольника. Поэтому давайте сделаем нашу картинку сразу нужных размеров и спозиционируем иконку ровно так, как на макете с дополнительным смещением для координат. В итоге получится файл <a href="/pro/2012/07/uneasy-easy-button/images/play-button.svg">play-button.svg</a>.</p>

<pre>
	<code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"&gt;</code>
	<code>    &lt;polygon fill="#000" points="9,8 17,12.5 9,17"/&gt;</code>
	<code>&lt;/svg&gt;</code>
</pre>

<p>Но это слишком просто. Сделаем что-нибудь поинтереснее.</p>

<h2>Кнопка без тени — деньги на ветер</h2>

<figure class="small">
	<img src="/pro/2012/07/uneasy-easy-button/images/play-active.png" width="230" height="213">
	<figcaption>Непростая кнопка с синей заливкой и внутренней тенью</figcaption>
</figure>

<p>И тут к нам забегает дизайнер чёрного треугольника (и большой поклонник Малевича, по-видимому) и говорит, что совсем забыл про активное состояние кнопки. Во время воспроизведения она должна гореть голубым цветом и выглядеть вдавленной. Поменять цвет заливки нашей картинки теперь просто как никогда, ведь мы сами писали этот треугольник и знаем, как там всё устроено. А вот внутреннюю тень дизайнер нарисовал с помощью одного из сотни спецэффектов в Photoshop или Illustrator. И мы могли бы скомбинировать десяток SVG-фильтров и попытаться сделать настоящую тень, но это становится слишком сложной задачей, и с кроссбраузерностью у фильтров не всегда хорошо.</p>

<figure class="small">
	<img src="/pro/2012/07/uneasy-easy-button/images/play-gradients.png" width="230" height="213">
	<figcaption>Градиенты для имитации внутренней тени</figcaption>
</figure>

<p>Поэтому мы попробуем имитировать эту тень с помощью двух градиентов. Один мы пустим по верхней грани нашего треугольника, другой по левой, немного повернём каждый из них и добьёмся размытием нужного эффекта. Для того чтобы градиенты правильно наложились в одну тень поверх фонового цвета, они должны начинаться в 100% прозрачности и выходить в нулевую. Градиенты в SVG появились намного раньше, чем в CSS, и имеют свой особенный синтаксис, немного отличающийся от того, к чему мы привыкли.</p>

<p>Сам градиент, как и другая метаинформация, задаётся в специальной секции <code>&lt;defs&gt;</code> и описывается элементом <code>&lt;linearGradient&gt;</code>, который можно повернуть с помощью атрибута <code>gradientTransform</code>. Каждый цвет, его смещение и прозрачность описываются во вложенном элементе <code>&lt;stop&gt;</code>.</p>

<pre>
	<code>&lt;linearGradient x1="0" y1="0" x2="0" y2="100%" id="shadow-left"</code>
	<code>        gradientTransform="rotate(-75 0.5,0.5)"&gt;</code>
	<code>    &lt;stop stop-color="#0020FF" offset="0"/&gt;</code>
	<code>    &lt;stop stop-color="#1ABEF1" stop-opacity="0" offset="40%"/&gt;</code>
	<code>&lt;/linearGradient&gt;</code>
</pre>

<p>Мы с вами оказались чертовски предусмотрительны и задали каждому из двух градиентов ID <code>shadow-left</code> и <code>shadow-top</code>, и теперь сможем вызвать их с помощью атрибута <code>fill="url(#shadow-left)"</code> и значением ID в качестве параметра. Но для того, чтобы этот трюк сработал, нам нужно будет добавить к корневому элементу <code>&lt;svg&gt;</code> ещё один атрибут <code>xmlns:xlink</code>, описывающий пространство имён <b>xlink</b>.</p>

<p>Мне так и не удалось применить несколько градиентов к одному элементу одновременно с заливкой, и, кажется, это просто невозможно. Поэтому придётся продублировать наш треугольник трижды: сначала со сплошной заливкой, потом с левым и с верхим градиентом. Те элементы, что пойдут последними, окажутся выше, как и в HTML.</p>

<pre>
	<code>&lt;svg xmlns="http://www.w3.org/2000/svg"</code>
	<code>     xmlns:xlink="http://www.w3.org/1999/xlink"</code>
	<code>     viewBox="0 0 25 25"&gt;</code>
	<code>    &lt;defs&gt;</code>
	<code>        &lt;!-- Описание градиентов --&gt;</code>
	<code>    &lt;/defs&gt;</code>
	<code>    &lt;polygon points="9,8 17,12.5 9,17" fill="#1ABEF1"/&gt;</code>
	<code>    &lt;polygon points="9,8 17,12.5 9,17" fill="url(#shadow-left)"/&gt;</code>
	<code>    &lt;polygon points="9,8 17,12.5 9,17" fill="url(#shadow-top)"/&gt;</code>
	<code>&lt;/svg&gt;</code>
</pre>

<p>Можно было бы конечно создать символ треугольника, а потом применить его снова с помощью элемента <code>&lt;use&gt;</code>, но у этого способа плохо с кроссбраузерностью в Webkit. Итак, наш супер-треугольник с градиентами, складывающимися в тень: <a href="/pro/2012/07/uneasy-easy-button/images/play-active.svg">play-active.svg</a>.</p>

<p>Если совместить получившуюся картинку с нашей кнопкой и добавить активное состояние с помощью класса <code>.active</code>, то получится вот такая красота: <a href="/pro/2012/07/uneasy-easy-button/play-plain.html">play-plain.html</a>. В этом примере, в силу очевидности, специально нет растрового фолбека, а кнопки специально увеличены в 10 раз, чтобы можно было рассмотреть, насколько прекрасна векторная графика.</p>

<figure class="large">
	<img src="/pro/2012/07/uneasy-easy-button/images/play-result.png" width="670" height="250">
	<figcaption>Обычная и активная кнопки и их увеличенные варианты</figcaption>
</figure>

<h2>Маски-шоу</h2>

<p>Наша красивая кнопка готова, но не знаю, как вам, а мне всё мало и хочется больше чудес. Было бы хорошо не бегать в SVG, настраивая все параметры кнопки, а делать всё прямо в CSS. И даже больше — хочется иметь одну форму треугольника в SVG, а все его подробности рисовать в CSS, включая состояния по наведению и даже плавные переходы. Очень напоминает маску, не так ли?</p>

<figure class="small">
	<img src="/pro/2012/07/uneasy-easy-button/images/play-mask.png" width="230" height="213">
	<figcaption>Принцип псевдомаски</figcaption>
</figure>

<p>Как вы помните, полноценных кроссбраузерных масок в CSS нет. К сожалению, пока нет даже спецификации, в которой они были бы описаны. Маски уже давно есть в SVG, но в нашем случае это не поможет.</p>

<p>Поможет нам старый добрый трюк, допустимый только для однородного и постоянного фона под объектом. Допустим, что наша кнопка всегда будет на белом фоне или нам не лень нарисовать маски для нескольких других фонов. Мы нарисуем SVG-картинку, залитую сплошным цветом и сделаем в ней дырку как раз той формы, что и наш треугольник. А всё остальное оформление будем рисовать в CSS.</p>

<p>И если наш простой треугольник состоял из трёх точек, то маску с двумя контурами нужно будет рисовать уже с помощью кривых Безье, прямо в редакторе. На самом деле, всё просто. Мы берём квадрат 25×25, кладём на него треугольник и вычитаем формы, пробивая в прямоугольнике дырку нужного вида, любой векторный редактор это умеет.</p>

<p>Но в использовании таких масок есть небольшой нюанс. К сожалению, браузеры до сих пор не слишком точно рассчитывают размеры и расположение фона при масштабировании объектов, особенно это заметно на мобильных устройствах, как с растровой, так и с векторной графикой. Решить эту проблему можно, добавив дополнительно один или несколько пикселей фоновой заливки с каждой из сторон. В случае с SVG эти дополнительные пиксели могут лежать за пределами видимой области и всё равно будут нам помогать.</p>

<p>Поэтому размеры нашей маски будут на 3 пикселя больше с каждой стороны, при том же <b>viewBox</b> 25×25 пикселей. Почитать, как формируется кривая Безье в атрибуте <code>d</code> для элемента <code>&lt;path&gt;</code>, можно <a href="http://y3x.ru/2011/07/svg-path2/">у Ярослава Карандашева</a>. А мы просто экспортировали её из векторного редактора.</p>

<pre>
	<code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"&gt;</code>
	<code>    &lt;path fill="#FFF" d="m-3-3v31h31v-31h-31zm12 20v-9l8 4.5-8 4.5z"/&gt;</code>
	<code>&lt;/svg&gt;</code>
</pre>

<p>После того, как маска создана, нам нужно перенести градиент в CSS. К сожалению, сделать это даже простым копированием значений не получится. Ведь в CSS пока другая система поворота градиентов и у нас несколько другая ситуация. Если для треугольника мы рисовали градиент прямо в пределах его контура, то маска будет скрывать градиент, нарисованный в пределах всей кнопки. Поэтому градиент мы пишем заново.</p>

<p>Основной цвет активной кнопки мы укажем в <code>background-color</code>, а в <code>background-image</code> перечислим через запятую маску и два градиента. Здесь всё наоборот — кто первый, тот и выше.</p>

<pre>
	<code>.button.play.active {</code>
	<code>    background-color:#1ABEF1;</code>
	<code>    background-image:url(images/play-mask.svg),</code>
	<code>        linear-gradient(105deg, #0020FF 38%, rgba(26, 190, 241, 0) 49%),</code>
	<code>        linear-gradient(200deg, #0020FF 41%, rgba(26, 190, 241, 0) 52%);</code>
	<code>    }</code>
</pre>

<p>Все необходимые префиксы для работы градиентов (<code>-webkit</code>, <code>-moz</code> и <code>-o</code>) перечислены в итоговом файле. Но это не единственная разница: градиенты с префиксами должны получить ещё и другие значения градусов. Дело в том, что с момента внедрения градиентов в браузерах, спецификация изменилась и если раньше значения отсчитывались от трёх часов (представьте циферблат часов) и против часовой стрелки, как на уроках геометрии, то сейчас отсчёт идёт от полудня и по часовой стрелке, что естественнее для CSS в целом. Значит по старому синтаксису повороты будут <code>-15deg</code> и <code>-110deg</code>, а по новому, без префикса, <code>105deg</code> и <code>200deg</code>, соответственно.</p>

<p>В итоге мы получим ту же самую роскошную кнопку, но всего с одним SVG-файлом для маски и с оформлением прямо в CSS: <a href="/pro/2012/07/uneasy-easy-button/play-mask.html">play-mask.html</a>. Вы можете попробовать модифицировать этот пример и убедиться, насколько удобно работать с иконкой прямо в CSS. Все примеры, использованные в этой заметке, можно загрузить одним архивом: <a href="/pro/2012/07/uneasy-easy-button/play.zip">play.zip</a> (17 КБ)</p>

<p>Понравилась кнопка? Можно сделать лучше? Не стесняйтесь, расскажите в комментариях.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>69</small>
				</header>
				<article id="comment-5326"class="comment even thread-even depth-1">
					<p>Данная задача проще и эффективнее решается с помощью шрифта в 1 символ</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5326">19 июля ’12 в 12:16</a></time>
					</footer>
				</article>
				<article id="comment-5327"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Юра,</b> кроме того, что шрифт ещё нужно нарисовать и сохранить в N форматах, и того, что градиент внутри символа не нарисуешь — наверное проще. Но это не решает всей задачи, речь шла о том, чтобы сделать иконку с тенью внутри.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5327">19 июля ’12 в 12:19</a></time>
					</footer>
				</article>
				<article id="comment-5329"class="comment even thread-even depth-1">
					<p>из решение задания одним кандидатом <a href="https://dl.dropbox.com/u/1744447/fonts/stars-webfont.ttf" rel="nofollow">https://dl.dropbox.com/u/1744447/fonts/stars-webfont.ttf</a></p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5329">19 июля ’12 в 12:39</a></time>
					</footer>
				</article>
				<article id="comment-5330"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, это потрясающе. Спасибо за ваше копание в SVG. Каким редактором пользовались для SVG?</p>
					<footer>
						<a href="http://kobzarev.com/" rel="external nofollow" class="url">mihdan</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5330">19 июля ’12 в 12:41</a></time>
					</footer>
				</article>
				<article id="comment-5331"class="comment even thread-even depth-1">
					<p>Наверное, это сильно зависит от браузера, но вариант на SVG выглядит гораздо лучше (Хром на маке). В варианте на CSS градиенты заметно полосатые.</p>
					<footer>
						<a href="http://sapegin.ru" rel="external nofollow" class="url">Артём Сапегин</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5331">19 июля ’12 в 12:44</a></time>
					</footer>
				</article>
				<article id="comment-5332"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Юра,</b> я понимаю, что такое веб-шрифты и что их можно (и модно) использовать для таких целей. Но вот смотрю я на сайте с этими стоковыми иконками, а они все плоские, однообразные и зачастую страдают какими-то кроссбраузерными или кроссплатформенными проблемами. Я сам для нарисовал для Shower <a href="https://github.com/pepelsbey/shower/blob/master/themes/ribbon/fonts/TargetBlank.otf" rel="nofollow">иконку внешней ссылки</a>, но она текстовая. На мой взгляд, рядом с текстом таким иконкам и место.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5332">19 июля ’12 в 12:45</a></time>
					</footer>
				</article>
				<article id="comment-5333"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Артём,</b> я надеюсь браузеры придут в  итоге к одному алгоритму и движку для всех градиентов. Проблемы переходного периода.</p>
<p><b>Михаил,</b> экспортирую из Illustrator CS6, несмотря на кучу мусора, там сносный экспорт.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5333">19 июля ’12 в 12:47</a></time>
					</footer>
				</article>
				<article id="comment-5334"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Бешеное задротство %)</p>
					<footer>
						Хах						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5334">19 июля ’12 в 13:01</a></time>
					</footer>
				</article>
				<article id="comment-5335"class="comment even thread-even depth-1">
					<p>ты ведь заметил что шрифт — маска, который можно положить на любой плосикй фон и из css рулить и фоном и градиентами под ним?</p>
<p>p.s. пока что задачу которую ты описал легче решить шрифтом — это ровно то что я сказал, не более :)</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5335">19 июля ’12 в 13:02</a></time>
					</footer>
				</article>
				<article id="comment-5336"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Юра,</b> да, теперь вижу. Но сложность создания шрифта не сравнится с простотой создания SVG. Вот мой главный аргумент.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5336">19 июля ’12 в 13:04</a></time>
					</footer>
				</article>
				<article id="comment-5337"class="comment even thread-even depth-1">
					<p>Треугольник около правил форматирования над полем отправки комментария так и просит, чтобы ты его сделал в SVG. :)</p>
<p>А вообще, отличная статья. SVG масштабируем, гибок, прекрасен, и применять его надо было еще вчера.</p>
<p>Кто боится использовать SVG из-за отсутствия поддержки в старых браузерах, советую взглянуть на Raphaël (<a href="http://raphaeljs.com" rel="nofollow">http://raphaeljs.com</a>), который использует VML для IE8&lt;, или попробовать сделать собственную VML/SVG вилку, если вы такой же любитель велосипедов, как я.</p>
<p>И насчет масок: для хороших браузеров можно использовать Canvas, а для старых — все тот же VML.</p>
					<footer>
						<a href="https://twitter.com/mistadikay" rel="external nofollow" class="url">Денис</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5337">19 июля ’12 в 13:12</a></time>
					</footer>
				</article>
				<article id="comment-5338"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Денис,</b> треугольник у правил форматирования уйдёт вместе со старым дизайном, когда я допилю новый (в августе?), и в нём точно не останется места растровой графике ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5338">19 июля ’12 в 13:14</a></time>
					</footer>
				</article>
				<article id="comment-5339"class="comment even thread-even depth-1">
					<p>Отличная статья!<br />
Спасибо!</p>
					<footer>
						Шу						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5339">19 июля ’12 в 13:37</a></time>
					</footer>
				</article>
				<article id="comment-5340"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p> Денис, треугольник у правил форматирования уйдёт вместе со старым дизайном, когда я допилю новый (в августе?), и в нём точно не останется места растровой графике ;)</p></blockquote>
<p>Вадим, новый дизайн это конечно здорово, но лучше бы вы статьи чуть почаще писали, чем так часто обновляли блог. А то скоро будет 1 статья, на одно обновление блога с такими темпами (</p>
					<footer>
						Антон						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5340">19 июля ’12 в 13:41</a></time>
					</footer>
				</article>
				<article id="comment-5341"class="comment even thread-even depth-1">
					<blockquote><p><code>E {</code><br />
<code>    background:url(image.png) no-repeat;</code><br />
<code>    background:url(image.svg) no-repeat;</code><br />
<code>    }</code></p>
<p>Браузер, который не поймёт векторную картинку, просто вернётся на одно правило назад и применит растровую…</p></blockquote>
<p>К сожалению, это вовсе не так, в чём можно легко убедится на <a href="http://files.myopera.com/GreLI/tests/svg-test.html" rel="nofollow">http://files.myopera.com/GreLI/tests/svg-test.html</a>. Второе правило просто перебивает первое, браузер всегда загружает SVG, и если поддержки нет (IE8–, Firefox 3.6–, Andoid 2.3–), ничего не показывает.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5341">19 июля ’12 в 13:41</a></time>
					</footer>
				</article>
				<article id="comment-5342"class="comment odd alt thread-odd thread-alt depth-1">
					<p>К сожалению, с масштабированием тоже большие проблемы. Опера, Firefox в сложных случаях, и IE10 в режиме метро масштабируют SVG на фоне как растровое изображение. К тому же в Опере при этом неправильно считаются размеры, а также в IE10 в сложных случаях при загрузке страницы не со 100% масштабом (десктоп и метро). Под сложными случаями я подразумеваю SVG-картинки, где используются заготовки контуров с помощью dev, symbol и use.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5342">19 июля ’12 в 13:59</a></time>
					</footer>
				</article>
				<article id="comment-5343"class="comment even thread-even depth-1">
					<p>и тут такой я со шрифтом! :)</p>
<blockquote><p>
Юра, да, теперь вижу. Но сложность создания шрифта не сравнится с простотой создания SVG. Вот мой главный аргумент.
</p></blockquote>
<p>действитеьно, мы же сайты за пять минут делаем :)</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5343">19 июля ’12 в 14:07</a></time>
					</footer>
				</article>
				<article id="comment-5344"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Юра,</b> вы, как Яндекс, делаете сайты не за пять минут. Но зато иконка у вас одна (условно) и на все сервисы, а если каждый проект с новым дизайном и для каждой штуки нужно делать шрифт, то история получается грустной.</p>
<p><b>GreLI,</b> твоё замечаение про фолбек в работе, скоро выпущу обновление поста.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5344">19 июля ’12 в 14:10</a></time>
					</footer>
				</article>
				<article id="comment-5345"class="comment even thread-even depth-1">
					<p>Яндекс тут не при чем. Что за манера, стоит написать что-нибудь, тебя сбрасывают в рамки компании :) и еще нерепрезентативным называют.<br />
В данном случае svg не позволяет управлять цветом фона на котором лежит не изменяя файл. Изменение файла = перевыкладка или перегенерация dataUrl. Шрифт более гибкий для такой цели.<br />
SVG кажется подходит только для рисования комиксов пока что, как бы это ни было неприятно осознавать :(</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5345">19 июля ’12 в 14:42</a></time>
					</footer>
				</article>
				<article id="comment-5346"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>…К сожалению, это не сработает в Firefox 3.6 и в старых браузерах на движке Webkit, которые стоят на системах вроде Android 2.2 (как на моём HTC Desire), поэтому для них будет уместнее использовать определение поддержики SVG с помощью Modernizr…</p></blockquote>
<p> С обычным определением поддержки SVG с помощью Modernizr тоже есть проблемы. Дело в том, что Firefox 3.6 поддерживает SVG, но только через <code>&lt;object&gt;</code>. Таким образом, обычная проверка даст положительный результат, но SVG на фоне всё равно не будет работать.</p>
<p>Обойти можно, проверяя, например, на Inline SVG. В каких-то браузерах будет ложный отрицательный ответ, но это уже очень малая доля.</p>
<p>P.S. Firefox 3.6 используют есть где-то 1,5% пользователей.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5346">19 июля ’12 в 14:43</a></time>
					</footer>
				</article>
				<article id="comment-5348"class="comment even thread-even depth-1">
					<p>GreLI, ух ты выкопал эту тему :)<br />
1.72%, за последний месяц упала на 0,67%</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5348">19 июля ’12 в 14:45</a></time>
					</footer>
				</article>
				<article id="comment-5349"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Что за манера, стоит написать что-нибудь, тебя сбрасывают в рамки компании</p></blockquote>
<p>Чья бы корова мычала, Юра, чья бы корова… ;) Но в словах про перевыкладку и перегенерацию есть смысл.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5349">19 июля ’12 в 14:45</a></time>
					</footer>
				</article>
				<article id="comment-5350"class="comment even thread-even depth-1">
					<p>ну мы же по делу, без троллинга</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5350">19 июля ’12 в 14:48</a></time>
					</footer>
				</article>
				<article id="comment-5351"class="comment odd alt thread-odd thread-alt depth-1">
					<p>yuritkachenko, главное то, что, использующие его, тысячи людей вообще ничего не увидят. Изящная деградация допустима, но не такой косяк.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5351">19 июля ’12 в 14:55</a></time>
					</footer>
				</article>
				<article id="comment-5352"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p>Остаётся только спросить у всех: когда последний раз вы тестировали свою вёрстку в Firefox 3.6?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5352">19 июля ’12 в 14:59</a></time>
					</footer>
				</article>
				<article id="comment-5353"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Как человек, решивший оформить <a href="http://sapegin.ru/contacts" rel="nofollow">страничку со ссылками</a> на разные сервисы веб-шрифтом, подтверждаю, что сказки о их сложности пока совсем не сказки :)</p>
					<footer>
						<a href="http://sapegin.ru" rel="external nofollow" class="url">Артём Сапегин</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5353">19 июля ’12 в 15:08</a></time>
					</footer>
				</article>
				<article id="comment-5354"class="comment even thread-even depth-1">
					<p>pepelsbey, для этого тестировщики есть :-), А вообще я в сомнениях, делать ли для него закгруглённые уголки и пр. — они там ещё через префиксы. (-webkit префиксы уже давно можно не использовать).</p>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5354">19 июля ’12 в 15:18</a></time>
					</footer>
				</article>
				<article id="comment-5355"class="comment odd alt thread-odd thread-alt depth-1">
					<p>GreLI,  ну в крайних случаях да, типа кнопки плэй. Обчно это стрелочки или другая декорация, тогда пофигу</p>
<p>pepelsbey, я давно не смотрел у меня внутренняя аудитория сейчас, но ребята тестируют <a href="http://clubs.ya.ru/ui/replies.xml?item_no=2" rel="nofollow">http://clubs.ya.ru/ui/replies.xml?item_no=2</a> перестаем смотреть после &lt; 0.5%</p>
					<footer>
						@yuritkachenko						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5355">19 июля ’12 в 15:26</a></time>
					</footer>
				</article>
				<article id="comment-5356"class="comment even thread-even depth-1">
					<p>А вот, наверное, более распространённый случай: как лучше делать логотяп, изменяющий цвет при наведении (на всех страницах кроме клавной)?</p>
<p>1. Твой способ — с маской.<br />
2. Ховер внутри SVG.<br />
3. Два SVG-файла разного цвета :)<br />
4. Другой способ.</p>
<p>Ну и, конечно, хотелось бы, чтобы работали плавные переходы.</p>
					<footer>
						<a href="http://sapegin.ru" rel="external nofollow" class="url">Артём Сапегин</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5356">19 июля ’12 в 15:50</a></time>
					</footer>
				</article>
				<article id="comment-5357"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Мое мнение, у масок слишком много НО, чтобы использовать для такого простого случая, поэтому я бы сделал два svg-файла разного цвета или два path внутри одного svg. Для плавного перехода можно использовать opacity + transition.</p>
<p>Если через js, можно менять атрибуты color и fill у svg-элемента или элементов внутри него (типа path и т.д.).</p>
					<footer>
						<a href="https://twitter.com/mistadikay" rel="external nofollow" class="url">Денис</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5357">19 июля ’12 в 16:02</a></time>
					</footer>
				</article>
				<article id="comment-5358"class="comment even thread-even depth-1">
					<p>Артём Сапегин, старый добрый спрайт. На SVG.</p>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5358">19 июля ’12 в 17:13</a></time>
					</footer>
				</article>
				<article id="comment-5359"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Артём,</b> если это возможно, я бы попробовал маску, чтобы сократить количество ресурсов и упростить поддержку. Либо SVG-спрайт фиксированных размеров, без viewBox.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5359">19 июля ’12 в 17:15</a></time>
					</footer>
				</article>
				<article id="comment-5360"class="comment even thread-even depth-1">
					<p>Просто ради интереса: <a href="http://result.dabblet.com/gist/3143727" rel="nofollow">http://result.dabblet.com/gist/3143727</a></p>
<p>Такая же иконка, на одном лишь CSS, с одним блоком. Больше всего времени ушло на подгон градиентов, но так до конца не подогнал, но… :)</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5360">19 июля ’12 в 17:39</a></time>
					</footer>
				</article>
				<article id="comment-5361"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Роман,</b> я ждал именно такого комментария от тебя :) Делать треугольники на CSS — дело нехитрое, но любая чуть более сложная иконка возвращает нас к SVG или шрифту.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5361">19 июля ’12 в 17:43</a></time>
					</footer>
				</article>
				<article id="comment-5362"class="comment even thread-even depth-1">
					<p>Да, именно потому я и не написал о том, что мой вариант лучше :) Согласен, что как только нужна будет звёздочка, или блок в форме кошки, то CSS тут не прокатит уже.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5362">19 июля ’12 в 17:46</a></time>
					</footer>
				</article>
				<article id="comment-5363"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо за разбор, надо как-то попробовать!</p>
					<footer>
						pomidorchi						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5363">20 июля ’12 в 3:26</a></time>
					</footer>
				</article>
				<article id="comment-5364"class="comment even thread-even depth-1">
					<p>Мне кажется рано внедрять svg в свои сайты, а про шрифты из иконок лучше вообще забыть. Шрифты не только несемантичны, но и в пиксель не попадают, хотя насчёт pixel-perfect графики тоже самое касается и svg. Во всех примерах треугольник рендерится по саб-пикселям, левая сторона смазана. Ещё одна причина (не особо веская) почему лучше не использовать svg для retina-дисплеев заключается в другой настройке отображения элементов. К примеру есть тень box-shadow: inset 0 1px #fff; так вот на практике выявлено что для retina лучше всего использовать такую же однопиксельную тень, иначе эффект теряется.<br />
Предположу что бум svg случится когда спецификация начнёт поддерживать все режимы наложения слоёв из фотошопа, появится уже наконец официальный экспортёр и импортёр в фотошоп (а большинство макетов делают именно там), ну и браузеры всю эту охапку будут нормально пережёвывать.<br />
Технология отличная, но с текущим уровнем реализации я бы не стал её применять на продакшене.</p>
					<footer>
						<a href="http://cyberap.net" rel="external nofollow" class="url">CyberAP</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5364">20 июля ’12 в 13:12</a></time>
					</footer>
				</article>
				<article id="comment-5365"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>CyberAP,</b> вы неправы. Веб-шрифты сами по себе не несут никакой смысловой нагрузки, поэтому не могут быть «несемантичными», вопрос в том, как именно их применять. Можно ведь заменять не просто случайные символы, а целые слова или элементы <code>:before/after</code>.</p>
<p>Вы правы, что со шрифтами сложно попасть в пиксельную сетку, но это не проблема для SVG. Если изначально рисовать векторые фигуры с привязкой к пиксельной сетке для всех прямых линий и использовать смещения 0,5 для косых, то при экспорте и применении графика будет идеально смотреться на пиксельных экранах. Главное применять её в том же виде, в котором она нарисована или кратно масштабировать. Все живые примеры к этой статье следуют этим правилам: 25px — 250px, и всё отлично. А картинки к статье не следуют, там 25px — 230px (из-за сетки блога), поэтому вы видите поплывший пиксел.</p>
<p>Режимы наложения слоёв — это отдельная история, имеющая мало общего с SVG, и всё это будет поддерживаться в CSS уже в ближайшее время <a href="http://html.adobe.com/" rel="nofollow">с лёгкой руки Adobe</a>.</p>
<p>И что странно, вы так и не привели ни одного аргумента, почему не стоит использовать SVG в продакшене.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5365">20 июля ’12 в 13:27</a></time>
					</footer>
				</article>
				<article id="comment-5366"class="comment even thread-even depth-1">
					<blockquote><p>Если изначально рисовать векторые фигуры с привязкой к пиксельной сетке</p></blockquote>
<p>Умоляю, ткните носом в ссылку, где про это пишут. Хочу сделать свой icon font. Если что, использую Inkscape. Извините за оффтоп.</p>
					<footer>
						artuska						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5366">20 июля ’12 в 13:40</a></time>
					</footer>
				</article>
				<article id="comment-5367"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну мои главные аргументы такие: составные фигуры создать на svg слишком сложно, на одних полигонах далеко не уедешь, нужна всегда какая-то стилизация. Даже в примере чтобы сделать внутреннюю тень пришлось элемент три раза дублировать один и тот же элемент, а что если понадобится сделать сложный логотип в svg который состоит из нескольких элементов?</p>
<p>Про попадание в пиксель: вот открыл пример <a href="/pro/2012/07/uneasy-easy-button/play-plain.html" rel="nofollow">http://pepelsbey.net/pro/2012/07/uneasy-easy-button/play-plain.html</a><br />
Левая сторона <strong>ОК</strong>, но вот правая выглядит размыто. Я честно открывал все иконки, но в пиксель попадали только те что размером 8 на 9.</p>
<p>Ещё проблема с поддержкой в браузерах, нет отдельного ресурса где можно было бы узнать в каком браузере какая версия SVG поддерживается, что работает, а что нет. Т.е. каждый раз что-то добавляя в SVG придётся это тестировать на всех браузерах, вместо того чтобы знать что 100% можно безопасно использовать. Если есть такой ресурс ткните меня носом, буду только благодарен :)</p>
					<footer>
						<a href="http://cyberap.net" rel="external nofollow" class="url">CyberAP</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5367">20 июля ’12 в 13:50</a></time>
					</footer>
				</article>
				<article id="comment-5368"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>CyberAP,</b> правая выглядит размыто ровно настолько, насколько вообще чёткой может быть диагональная линия, идущая по квадратным пикселам. Уровень размытия совершенно обычный. Понятное дело, чем ближе угол к 45°, тем незаметнее будет сглаживание. Но на HD-дисплеях вы это размытие не заметите.</p>
<p>Что касается полигонов, то никто не заставляет вас рисовать логотип руками с помощью кубиков и кружочков. Нарисуйте его в Illustrator, экспортируйте в SVG и вставьте на страницу, дел-то. Главное не использовать сложные фильтры и эффекты, но формы — пожалуйста.</p>
<p>Если говорить про кроссбраузерность, то я слышу, как вы жалуетесь, как это сложно. Ну, да — если бы вам вчера впервые показали CSS, то вы бы сказали, что это сложно и <em>нет единого сайта, где всё можно посмотреть</em>. Зато есть зоопарк браузеров, голова и умелые руки, чтобы всё выяснить самому и научиться использовать векторную графику самостоятельно, благо она того стоит.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5368">20 июля ’12 в 14:00</a></time>
					</footer>
				</article>
				<article id="comment-5369"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Т.е. каждый раз что-то добавляя в SVG придётся это тестировать на всех браузерах, вместо того чтобы знать что 100% можно безопасно использовать.</p></blockquote>
<p>А тестировать во всех браузерах так и так надо, не зависимо от того SVG мы делаем или нет. А в случае тестирования SVG это вообще элементарнейшая задача.</p>
					<footer>
						imdefined						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5369">20 июля ’12 в 14:01</a></time>
					</footer>
				</article>
				<article id="comment-5370"class="comment even thread-even depth-1">
					<p>Что касается практики использования SVG на сайте. В данный момент работаю в <a href="http://resumup.com" rel="nofollow">ResumUP</a>, где SVG используется в очень больших масштабах.<br />
Из проблем, SVG все-таки ведет себя не совсем так, как весь остальной DOM. Также, если использовать сложную графику, то SVG упирается в проблему, что каждый примтив — это элемент DOM, при большом кол-ве элементов, браузер начинает сильно тупить. Плюс озвученные проблемы с субпиксельным рендерингом. В остальном он всем хорош.<br />
Касательно шритов, у github сравнительно недавно была отличная статья, как они делали <a>octoicons</a>.</p>
<p>Зачем я все это говорю,  в ответ на комментарий, что ни шрифты, ни SVG использовать нельзя. Можно и сервисы, которые стоят миллионы долларов их используют.</p>
					<footer>
						<a href="http://resumup.com" rel="external nofollow" class="url">@thought_sync</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5370">20 июля ’12 в 14:02</a></time>
					</footer>
				</article>
				<article id="comment-5371"class="comment odd alt thread-odd thread-alt depth-1">
					<p>CyberAP, а <a href="http://caniuse.com/#feat=svg" rel="nofollow">caniuse.com</a> недостаточно?</p>
					<footer>
						<a href="http://resumup.com" rel="external nofollow" class="url">@thought_sync</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5371">20 июля ’12 в 14:07</a></time>
					</footer>
				</article>
				<article id="comment-5372"class="comment even thread-even depth-1">
					<p><b>pepelsbey</b>, согласен, энтузиазм наше всё. Я пытался внедрить SVG графику, но всё уткнулось в ограниченность возможностей SVG. Несомненно, если надо вывести какую-то фигуру с заливкой, то он идеально подойдёт; но как только дело доходит до эффектов - SVG уже не помощник.</p>
<p><b>@thought_sync</b>, не совсем то, там про базовую поддержку, а я хотел узнать как полно поддерживается текущая спецификация <a href="http://www.w3.org/TR/SVG/" rel="nofollow">http://www.w3.org/TR/SVG/</a><br />
И SVG 1.2 <a href="http://www.w3.org/TR/SVG12/" rel="nofollow">http://www.w3.org/TR/SVG12/</a></p>
					<footer>
						<a href="http://cyberap.net" rel="external nofollow" class="url">CyberAP</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5372">20 июля ’12 в 14:23</a></time>
					</footer>
				</article>
				<article id="comment-5373"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Главное не использовать сложные фильтры и эффекты</p></blockquote>
<p>Вот-вот, не используй то, не используй сё...</p>
<p>В качестве котраргумента к комиксу лого Google <a href="http://upload.wikimedia.org/wikipedia/commons/2/20/Google-Logo.svg" rel="nofollow">в SVG</a> и <a href="http://www.seomofo.com/downloads/new-google-logo-knockoff.png" rel="nofollow">в PNG</a></p>
<p>Но на самом деле, статья очень вдохновляющая, конечно, спасибо.</p>
					<footer>
						asavar						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5373">20 июля ’12 в 14:25</a></time>
					</footer>
				</article>
				<article id="comment-5375"class="comment even thread-even depth-1">
					<p>CyberAP, если посмотреть на весь список параметров, там довольно много параметров типа inline-SVG, фильтров и т.д.</p>
					<footer>
						<a href="http://resumup.com" rel="external nofollow" class="url">@thought_sync</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5375">20 июля ’12 в 17:10</a></time>
					</footer>
				</article>
				<article id="comment-5376"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>pepelsbey</b>, спасибо за статью. Подскажите, пожалуйста, учебник по SVG, кроме спецификации.</p>
					<footer>
						Павел						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5376">20 июля ’12 в 17:19</a></time>
					</footer>
				</article>
				<article id="comment-5377"class="comment even thread-even depth-1">
					<p>Может я и не прав, но я считаю что SVG пока что - недоформат. Как бы ты не аргументировал.. простоты создания SVG нет. Даже в иллюстраторе. Ну ничего простого там нет. </p>
<p>В добавок, уже сказано выше, когда много графики, и сложной.. браузеры тупят.</p>
<p>Тем не менее я считаю что этому формату нужно уделять внимание.. потому как гибкость и.. как бы это по русски... scalable... </p>
<p>Но пока что я считаю использование SVG как чисто " на свой страх и риск" и "если хочется повозиться" :)</p>
					<footer>
						<a href="http://macgera.name" rel="external nofollow" class="url">Михаил Якименко</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5377">20 июля ’12 в 19:43</a></time>
					</footer>
				</article>
				<article id="comment-5378"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я тут добавлю короткую, но важную мысль.</p>
<p>Для начала: да, у SVG есть проблемы и с точки зрения кроссбраузерности, и с точки зрения очень ограниченного количества инструментов, которыми можно было бы этот самый SVG пилить.</p>
<p>Но.</p>
<p>Тут аналог проблемы курицы и яйца: пока нет инструментов и кроссбраузерности, разработчики не особо стремятся использовать SVG, но и пока не будет достаточного числа разработчиков, SVG особо развиваться не будет.</p>
<p>Чтобы SVG развивался, надо его использовать, экспериментировать с ним, надо репортить баги, писать статьи (как это сделал Вадим), писать свои инструменты и участвовать в разработке имеющихся опенсорсных.</p>
<p>Говорить же: «да ну, технология ещё сыра, не надо её использовать» — бессмысленно и вредно. Надо разглядеть и понять перспективы, которые есть у SVG (а их много: от SVG-стеков, до использования SVG в качестве border-image), надо понять, что это потенциально может быть очень мощным инструментом, который мог бы быть постоянным спутником верстальщика.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5378">21 июля ’12 в 2:14</a></time>
					</footer>
				</article>
				<article id="comment-5379"class="comment even thread-even depth-1">
					<p>Я считаю что использование "шрифтовых иконок" это очень неправильно! Шрифт это текст, а иконка это не текст а изображение ;) SVG очень хорошо подходит для иконок в любых пользовательских интерфейсах. Вот <a href="http://simurai.com/post/20251013889/svg-stacks" rel="nofollow">тут</a> были интересно реализованы SVG-спрайты, жаль не везде работает.</p>
					<footer>
						Eugene MechanisM						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5379">21 июля ’12 в 7:30</a></time>
					</footer>
				</article>
				<article id="comment-5380"class="comment odd alt thread-odd thread-alt depth-1">
					<p>SVG используется такими компаниями как Google, Apple, Facebook, New York Times и так далее. Официальный импорт/экспорт из Эдоби Фотошопа это Эдоби Иллюстратор. У него очень неплохой экспорт, и будет только лучше. Все браузеры работают над улучшением поддержки SVG и надо признать, что она довольно неплохая уже сейчас.<br />
Но нет, всегда есть группа которая будет говорить, что что-то там сырое и не готово.<br />
Да всё сырое, начиная с HTML. В том и отличатся профессионал от любителя, что он может использовать то, что ещё “сырое”. HTFU!</p>
					<footer>
						Дмитрий Барановский						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5380">21 июля ’12 в 11:04</a></time>
					</footer>
				</article>
				<article id="comment-5381"class="comment even thread-even depth-1">
					<p><b>Роман Комаров</b>, безусловно! Нужно использовать и экспериментировать.. я же сразу написал что "я считаю"... и так же написал "на свой страх и риск" :) Я не противник SVG, наоборот, просто на данный момент я считаю его слишком сырым. </p>
<p>Но справедливости ради добавлю, имел опыт работы со шрифтами.. извините затрахался с конвертациями.. </p>
<p>SVG замучился с обработкой.. </p>
<p>а Кроссбраузерность это не проблема, так как если будет мейнстрим, будет и она.</p>
					<footer>
						<a href="http://macgera.name" rel="external nofollow" class="url">Михаил Якименко</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5381">21 июля ’12 в 18:33</a></time>
					</footer>
				</article>
				<article id="comment-5382"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Замечательный материал!<br />
Только там надо переименовать Ярослава Орлова в Ярослава Карандашева.</p>
					<footer>
						<a href="http://y3x.ru" rel="external nofollow" class="url">Ярослав Карандашев</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5382">22 июля ’12 в 13:25</a></time>
					</footer>
				</article>
				<article id="comment-5383"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Ярослав,</b> если бы в вашем блоге была страчка о вас или хотя бы в подвале упоминалось ваше настоящее имя, было бы гораздо проще. А вы «Карандаш<b>е</b>в» или «Карандаш<b>ё</b>в»?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5383">22 июля ’12 в 13:39</a></time>
					</footer>
				</article>
				<article id="comment-5384"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, спасибо за подсказку - исправлюсь.<br />
КарандашЕв через Е</p>
					<footer>
						<a href="http://y3x.ru/" rel="external nofollow" class="url">Ярослав Карандашев</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5384">23 июля ’12 в 18:09</a></time>
					</footer>
				</article>
				<article id="comment-5385"class="comment even thread-even depth-1">
					<p>Нифига себе, новая статья. Читаю вас с удовольствием, спасибо за труд!</p>
					<footer>
						Миша						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5385">24 июля ’12 в 19:13</a></time>
					</footer>
				</article>
				<article id="comment-5387"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В опере (сейчас в 12 под mac наблюдаю, но насколько я помню, проблема во всех воспроизводится) полная беда случается, если изменить масштаб страницы. В ваших примерах воспроизводится. И то же самое происходит, если растягивать картинку не через viewBox, а через background-size.<br />
Из-за этого бага (и из-за проблем в FF 3.6) недавно пришлось отказаться от svg в пользу шрифта :(</p>
					<footer>
						zakaratcha						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5387">30 июля ’12 в 20:43</a></time>
					</footer>
				</article>
				<article id="comment-5391"class="comment even thread-even depth-1">
					<p>чтобы передать цвет в SVG, предлагаю сделать элементарную обёртку на PHP<br />
и никаких масок не надо</p>
<p>как Lea Verоu для RGBA сделала<br />
<a href="http://lea.verou.me/rgba.php/" rel="nofollow">http://lea.verou.me/rgba.php/</a></p>
<p>тут даже проще будет</p>
					<footer>
						Иван						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5391">6 августа ’12 в 1:19</a></time>
					</footer>
				</article>
				<article id="comment-5392"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Иван,</b> продемонстрируйте, пожалуйста, что вы имеете в виду, я что-то не очень понял, как RGBA.php здесь применим.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5392">6 августа ’12 в 1:24</a></time>
					</footer>
				</article>
				<article id="comment-5393"class="comment even thread-even depth-1">
					<p>на вскидку, с минимальной проверкой входных данных</p>
<pre>
<code>&lt;?</code>
<code>header("Content-Type:    image/svg+xml");</code>
<code>$color=isset($_GET['color'])?("#".$_GET['color']):"#000";</code>
<code>?&gt;</code>
<code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"&gt;</code>
<code>    &lt;polygon fill="&lt;?=$color?&gt;" points="9,8 17,12.5 9,17"/&gt;</code>
<code>&lt;/svg&gt;</code>
</pre>
<p>RGBA.php - это просто пример скрипта генерирующего png по входным параметрам</p>
					<footer>
						Иван						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5393">6 августа ’12 в 11:40</a></time>
					</footer>
				</article>
				<article id="comment-5395"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Иван,</b> теперь вижу — для статической передачи цвета подходит, но меня больше волнует динамическая :\</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5395">6 августа ’12 в 13:24</a></time>
					</footer>
				</article>
				<article id="comment-5396"class="comment even thread-even depth-1">
					<p>Комбинируя со стилями и :target можно будет выбирать одну из зашитых цветовых схем.<br />
Но когда это ещё будет во всех браузерах?<br />
Пока работает только в firefox.</p>
<p>svg.php</p>
<pre>
<code>&lt;?</code>
<code>header("Content-Type:    image/svg+xml");</code>
<code>$color=isset($_GET['color'])?("#".$_GET['color']):"#00000";</code>
<code>$color1=isset($_GET['color1'])?("#".$_GET['color1']):"#ff0000";</code>
<code>$color2=isset($_GET['color2'])?("#".$_GET['color2']):"#ffff00";</code>
<code>?&gt;</code>

<code>&lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"&gt;</code>
<code>&lt;style type="text/css"&gt;</code>
<code>.polygon{</code>
<code>    fill:&lt;?=$color?&gt;;</code>
<code>}</code>
<code>#color1:target .polygon{</code>
<code>    fill:&lt;?=$color1?&gt;;</code>
<code>}</code>
<code>#color2:target .polygon{</code>
<code>    fill:&lt;?=$color2?&gt;;</code>
<code>}</code>

<code>&lt;/style&gt;</code>
<code>&lt;g id="color1"&gt;</code>
<code>&lt;g id="color2"&gt;</code>
<code>    &lt;polygon class='polygon' points="9,8 17,12.5 9,17"/&gt;</code>
<code>&lt;/g&gt;</code>
<code>&lt;/g&gt;</code>
<code>&lt;/svg&gt;</code>

</pre>
<p>test.html</p>
<pre>

<code>&lt;style&gt;</code>
<code>div{</code>
<code>height : 500px;</code>
<code>background:url("svg.php#color2");</code>
<code>}</code>
<code>&lt;/style&gt;</code>
<code>&lt;div&gt;</code>
<code>&lt;/div&gt;</code>

</pre>
					<footer>
						Иван						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5396">6 августа ’12 в 13:59</a></time>
					</footer>
				</article>
				<article id="comment-5398"class="comment byuser comment-author-pepelsbey bypostauthor odd alt thread-odd thread-alt depth-1">
					<p><b>Иван,</b> да, SVG-стеки работают для фоновых изображений только в Firefox, в остальных они вроде работают через <code>&lt;object&gt;</code>, это подходит в случае какого-нибудь логотипа, который должен меняться при наведении.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5398">6 августа ’12 в 14:09</a></time>
					</footer>
				</article>
				<article id="comment-5399"class="comment even thread-even depth-1">
					<p>Чуть не забыл</p>
<pre>
<code>header(&quot;Expires: &quot;.date(&quot;r&quot;, time() + 3600 * 4));</code>
</pre>
<p>В противном случае чревато новым запросом для каждого якоря. Но даже так, это пока ещё светлое будущее.</p>
					<footer>
						Иван						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5399">6 августа ’12 в 14:37</a></time>
					</footer>
				</article>
				<article id="comment-5414"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Не работает в ФФ 3.6. Если интересует, где берут такое старье - в debian stable.</p>
					<footer>
						Сергей К.						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5414">20 августа ’12 в 15:04</a></time>
					</footer>
				</article>
				<article id="comment-5415"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Сергей,</b> вариант защиты от FF3.6 описан в начале статьи (inlinesvg)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-5415">20 августа ’12 в 15:10</a></time>
					</footer>
				</article>
				<article id="comment-6120"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Кроме rgba() можно ещё воспользоваться тем, что Firefox поддерживает <code>background-clip</code> как раз с 4-й версии:</p>
<pre>
background: url(image.png) no-repeat;
background: url(image.svg) no-repeat content-box rgba(0,0,0,0);</pre>
					<footer>
						GreLI						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-6120">23 октября ’12 в 17:48</a></time>
					</footer>
				</article>
				<article id="comment-6143"class="comment even thread-even depth-1">
					<p>В опере на ретина-дисплее это выглядит так - <a href="http://yadi.sk/d/M7kArc1Y3IrVu" rel="nofollow">http://yadi.sk/d/M7kArc1Y3IrVu</a></p>
<p>Версия: 12.14<br />
Сборка: 1738<br />
Платформа: Mac OS X<br />
Система: 10.8.3</p>
					<footer>
						cyn						<time pubdate datetime="2012-07-19T11:39:39+00:00"><a href="index.html#comment-6143">15 марта ’13 в 16:51</a></time>
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
	<!-- 10 & 0,625 -->
</body>
</html>
