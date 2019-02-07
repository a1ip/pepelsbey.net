<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Пять звёздочек — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Пять звёздочек</a></h1>
				<time pubdate datetime="2008-05-28T17:59:34+00:00">28 мая ’08</time>
			</header>
			<p>Продолжая тему небольших полезных CSS-решений, предлагаю вашему вниманию интересную реализацию механизма рейтингов. С виду&nbsp;— всё просто: пять звёздочек, клик по каждой фиксирует рейтинг на позиции от одного до пяти баллов. Если же какой-то рейтинг уже имеется, при наведении он должен сбрасываться, чтобы пользователь имел возможность выразить своё мнение.</p>

<p>Каких только решений не придумано для этой тривиальной задачи&nbsp;— от сомнительного списка элементов <code>&lt;img&gt;</code> до более-менее внятных решений с помощью фоновых изображений. Но одно неизменно — всё это сдобрено хорошей порцией JS-кода, отвечающего за необходимое поведение. Что вполне логично приводит к тому, что без JS, в лучшем случае, не видно всей красоты, а в худшем — вообще нельзя проголосовать. В&nbsp;общем, не слишком хорошо.</p>

<p>Поэтому я предлагаю новое решение: <a href="/pro/2008/05/five-stars/">пять&nbsp;звёздочек</a> и его особенности:</p>

<ul>
<li>Вся динамика максимально вынесена в CSS при помощи псевдо-класса <code>:hover</code>, JS&nbsp;применяется только для фиксирования результата голосования и для того, чтобы заставить IE6 понимать указанный псевдо-класс не только для ссылок, за счёт переключения дополнительного класса <code>phover</code> при взаимодествии с контролом.</li>
<li>Следовательно, при отключённом JS, во всех браузерах, кроме IE6 и младше, вся красота со звёздочками продолжает работать, а сам процесс голосования становится простым переходом по ссылке.</li>
<li>Для отрисовки звёздочек используется только одна картинка, таким образом&nbsp;— только один запрос и контрол уже готов к работе.</li>
<li>Потенциально, голосование становится возможно даже при отключённых картинках&nbsp;— в таком случае рейтинг выглядит как прогресс-бар. Очевидность контрола в этом случае ухудшается, но и это уже ценно.</li>
</ul>

<p>Самая интересная часть <a href="/pro/2008/05/five-stars/s/style.css">CSS-кода</a>:</p>

<pre><code>.voting A.cur,</code>
<code>.voting A:hover,</code>
<code>.voting:hover A.cur:hover,</code>
<code>.voting:hover A:hover {</code>
<code>    background:#FC0 url(../i/stars.png) no-repeat;</code>
<code>    }</code>
<code>.voting:hover A.cur {</code>
<code>    background:none;</code>
<code>    }</code></pre>

<p>Признаюсь честно, вещей вроде <code>E:hover E:hover { … }</code> мне до сих пор писать не приходилось.</p>

<p>Также хотелось бы упомянуть про интересное <a href="/pro/2008/05/five-stars/j/script.js">JS-решение</a> для определения версии IE, чтобы для шестой его версии и младше эмулировать псевдо-класс <code>:hover</code> для списков. И&nbsp;вот каким образом я получаю переменную <code>ltIE7</code> (less than IE7):</p>

<pre><code>var ltIE7 = false</code>
<code>/*@cc_on</code>
<code>    @if (@_jscript_version &lt; 5.7)</code>
<code>        ltIE7 = true</code>
<code>    @end</code>
<code>@*/</code></pre>

<p>Эта <em>пляска с собачками</em> называется «условное выполнение» (Conditional Compilation) и формально вообще не является JavaScript'ом, это JScript. Если я не ошибаюсь, только его IE и понимает, а официальный JavaScript работает только благодаря довольно широкой совместимости этих языков. Что-то до боли знакомое, вы не находите? Прямо условные комментарии (Conditional Comments), только в JS-реинкарнации. Кто знает, если копнуть <a href="http://msdn.microsoft.com/">MSDN</a> поглубже, может быть найдётся что-то похожее и для CSS?</p>

<p>По аналогии с предыдущим примером, можно получить и переменную <code>ltIE6</code> (less than IE6), вычислив версию JScript, использующуюся в браузере. Для IE6 она равна&nbsp;5.5:</p>

<pre><code>@if (@_jscript_version &lt; 5.6)</code>
<code>    ltIE6 = true</code>
<code>@end</code></pre>

<p>Более подробное описание этой чудо-технологии можно найти в статье «<a href="http://www.javascriptkit.com/javatutors/conditionalcompile2.shtml">Conditional&nbsp;Compilation&nbsp;Variables</a>». Пятизвёздочных вам рейтингов ;)</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>44</small>
				</header>
				<article id="comment-388"class="comment even thread-even depth-1">
					<p>Хм, интересно. Когда нужно было сделать рейтинг звездочками, я долго искал вариант. Перепробовал по-моему штуки 3-4. У меня все время были проблемы с IE, то звездочки не хотели рисоваться при hover (хотя там был использован какой-то хак), то при результате они не закрашивались. Вобщем намучался :) </p>
<p>Вопрос: как явно при загрузке указать сколько голосов уже отдано? Что-то парамтер не нашел такой.</p>
					<footer>
						<a href="http://blog.quard.ru" rel="external nofollow" class="url">quard</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-388">28 мая ’08 в 19:16</a></time>
					</footer>
				</article>
				<article id="comment-389"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да, наверное всё-таки стоит добавить в пример предустановленный класс. А вообще: &lt;a href="#" class="cur"&gt;</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-389">28 мая ’08 в 19:20</a></time>
					</footer>
				</article>
				<article id="comment-390"class="comment even thread-even depth-1">
					<p>Жаль ещё что нет возможности выставить в процентах рейтинг. В моем варианте кажется было использована ширина закраски расчитанная в скрипте. </p>
<p>Забыл добавить спасибо :) В новом проекте попробую использовать ;)</p>
					<footer>
						<a href="http://blog.quard.ru" rel="external nofollow" class="url">quard</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-390">28 мая ’08 в 19:26</a></time>
					</footer>
				</article>
				<article id="comment-391"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Мне затея с заполненными наполовину звёздочками совсем не нравится — отличить на глаз 2,3 балла от 2,7 баллов я не смогу. Да и голосовать за такое мышкой будет нереально.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-391">28 мая ’08 в 19:37</a></time>
					</footer>
				</article>
				<article id="comment-392"class="comment even thread-even depth-1">
					<p>Нет нет, голосовать можно только от 1 до 5 и только за один пункт. Просто при выводе будет процент всей суммы рейтинга к кол-ву голосов</p>
					<footer>
						<a href="http://blog.quard.ru" rel="external nofollow" class="url">quard</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-392">28 мая ’08 в 19:46</a></time>
					</footer>
				</article>
				<article id="comment-393"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Если говорить о семантике, то, все-таки, необходимо использовать input type=&quot;radio&quot;</p>
					<footer>
						<a href="http://www.chuprin.com" rel="external nofollow" class="url">Chupa</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-393">28 мая ’08 в 22:40</a></time>
					</footer>
				</article>
				<article id="comment-396"class="comment even thread-even depth-1">
					<blockquote><p>Если говорить о семантике…</p></blockquote>
<p>Вообще, я согласен… Голосование это скорее отправка формы с одним из выбранных значений, чем переход на другую страницу с параметром. Стоит подумать как это дело трансформировать в звёздочки, попутно спрятав кнопку «Голосовать»…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-396">29 мая ’08 в 1:03</a></time>
					</footer>
				</article>
				<article id="comment-397"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ты не ошибаешься, только ИЕ @сс и понимает )</p>
					<footer>
						jahson						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-397">29 мая ’08 в 6:11</a></time>
					</footer>
				</article>
				<article id="comment-398"class="comment even thread-even depth-1">
					<p><strong>Олег,</strong> я в другом сомневался — что он понимает, JScript, совместимый с JS или непосредственно JavaScript…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-398">29 мая ’08 в 9:23</a></time>
					</footer>
				</article>
				<article id="comment-399"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>pepelsbey</b>, спасибо, может и пригодится.<br />
А можно, одно не принципиальное улучшение? :)</p>
<p>Мне кажется, что строку:<br />
this.className = this.className.replace( phover,'');</p>
<p>Было бы лучше записать так:<br />
this.className = this.className.replace(/(^| )phover($| )/,'');<br />
Т.е. регулярным выражением проверять, что phover — это отдельное слово, а не часть другого слова (вдруг, завтра появится у того же элемента еще и класс, к примеру: &quot;phovering&quot;).</p>
<p>А вообще, <a href="/pro/2008/05/five-stars/" rel="nofollow">пять звёздочек</a> — интересная вещь и реализовано хорошо.</p>
					<footer>
						vashurin						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-399">29 мая ’08 в 9:25</a></time>
					</footer>
				</article>
				<article id="comment-400"class="comment even thread-even depth-1">
					<p>Выглядит красиво, только вот откуда взято свойство xdisplay? Впервые вижу такое:</p>
<pre>
<code>    .voting SPAN {</code>
<code>        xdisplay:none;</code>
<code>        }</code>
</pre>
					<footer>
						Иван						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-400">29 мая ’08 в 10:29</a></time>
					</footer>
				</article>
				<article id="comment-401"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Упс, это я дебажил так — это всё равно, что закомментировать, только невалидно.<br />
Удалю, спасибо )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-401">29 мая ’08 в 12:01</a></time>
					</footer>
				</article>
				<article id="comment-402"class="comment even thread-even depth-1">
					<p><cite>Кто знает, если копнуть MSDN поглубже, может быть найдётся что-то похожее и для CSS?</cite><br />
В блоге IE вроде писали, что нет и не будет.</p>
<p>Про JS у Dean'а Edwards'а в блоге <a href="http://dean.edwards.name/weblog/2007/03/sniff/" rel="nofollow">развлекались</a>.</p>
					<footer>
						Lynn						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-402">29 мая ’08 в 12:46</a></time>
					</footer>
				</article>
				<article id="comment-406"class="comment odd alt thread-odd thread-alt depth-1">
					<p>есть решение без js для ie, работает только с помощью hover:<br />
<a href="http://www.site-creator.info/html/rate/main.html" rel="nofollow">пример</a></p>
					<footer>
						<a href="http://www.site-creator.info" rel="external nofollow" class="url">site-creator</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-406">30 мая ’08 в 0:57</a></time>
					</footer>
				</article>
				<article id="comment-407"class="comment even thread-even depth-1">
					<blockquote><p>есть решение без js для ie…</p></blockquote>
<p>Хм, интересно. Посмотрим…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-407">30 мая ’08 в 1:06</a></time>
					</footer>
				</article>
				<article id="comment-413"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>есть решение без js для ie</p></blockquote>
<p>Три бэкграунда? Тоже вариант, и весьма красивый...</p>
<p>Свои пять копеек: <a href="http://static2.sjinks.org.ua:8080/test/stars/stars.html" rel="nofollow">еще одно решение без JS, плавающих элементов и z-index</a> (я его полгода назад использовал в myfolio.com).</p>
					<footer>
						<a href="http://blog.sjinks.org.ua/" rel="external nofollow" class="url">Vladimir</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-413">30 мая ’08 в 22:30</a></time>
					</footer>
				</article>
				<article id="comment-414"class="comment even thread-even depth-1">
					<blockquote><p>Если говорить о семантике, то, все-таки, необходимо использовать input type=&quot;radio&quot;</p></blockquote>
<p>Упаси Боже! Это один из тех примеров, когда семантика конфликтует с usability. Элементы форм должны выглядеть как элементы форм, и именно поэтому браузеры не дадут кардинально изменить внешний вид input type=&quot;radio&quot;. В противном случае дизайнеры бы уже давно извратились над всеми элементами форм :-)</p>
<blockquote><p>Голосование это скорее отправка формы с одним из выбранных значений, чем переход на другую страницу с параметром.</p></blockquote>
<p>...а отправка формы - это технически тот же переход на другую страницу с параметром.</p>
<p>В любом случае, если извращаться с формой, то потребуется куда больше JavaScript. Ведь input type=&quot;radio&quot; будет прорисовываться поверх любого бэкграунда, следовательно, так или иначе его придется убрать (либо скрыть, либо что-то спозиционировать на него сверху). Если радиобатон убрать, он не сможет получить фокус при клике (хотя если поместить input в label, то может и прокатит, я не пробовал). Но на мой взгляд, заморочек и потенциальных проблем здесь больше, чем преимуществ :-)</p>
					<footer>
						<a href="http://blog.sjinks.org.ua/" rel="external nofollow" class="url">Vladimir</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-414">31 мая ’08 в 2:29</a></time>
					</footer>
				</article>
				<article id="comment-415"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Скрыть радиобатон/чекбокс, оставив их рабочими, не так сложно — <a href="/2008/05/nicebox/" rel="nofollow">найсбокс</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-415">31 мая ’08 в 2:31</a></time>
					</footer>
				</article>
				<article id="comment-416"class="comment even thread-even depth-1">
					<p>Не удержался... <a href="http://blog.sjinks.org.ua/css/173-five-stars-without-javascript/" rel="nofollow">Семантический вариант пяти звёздочек</a>.</p>
					<footer>
						<a href="http://blog.sjinks.org.ua/" rel="external nofollow" class="url">Vladimir</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-416">31 мая ’08 в 3:31</a></time>
					</footer>
				</article>
				<article id="comment-417"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Владимир,</strong> мне кажется, что используя подобную методику, можно вообще полсайта сверстать на таблицах с атрибутами и спрятать внутрь условных комментариев — чтобы в IE всё было красиво, а вторую половину нормально, со всякими CSS3-трюками.</p>
<p>В общем, красота красотой, а я не готов: а) мусорить в коде лишними условными комментариями б) вкладывать блочные элементы в строчные, даже внутри условных комментариев.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-417">31 мая ’08 в 10:09</a></time>
					</footer>
				</article>
				<article id="comment-418"class="comment even thread-even depth-1">
					<p>Вопрос спорный... В данном случае условный комментарий нужен только для того, чтобы не использовать JavaScript для IE6 - никаких других целей (в том числе презентационных) он не несет. В принципе, я считаю, что те два комментария были оправданы, ибо в ТЗ стояло требование, чтобы все работало как с JS, так и без. А IE6 всё еще очень много народа пользуется.</p>
<blockquote><p>можно вообще полсайта сверстать на таблицах с атрибутами и спрятать внутрь условных комментариев</p></blockquote>
<p>Возможно, я не пытался использовать такие хаки для презентационных возможностей. Но если так сделать, будет неудобство: нужно будет поддерживать две версии кода.</p>
<blockquote><p>а) мусорить в коде лишними условными комментариями</p></blockquote>
<p>Тем не менее, те же условные комментарии, но под другим соусом появляются в JavaScript, а также условные комментарии используются для скармливания своего CSS ишакам меньше 8 версии :-)</p>
<blockquote><p>б) вкладывать блочные элементы в строчные, даже внутри условных комментариев</p></blockquote>
<p>На мой взгляд, это то же самое, чито использовать zoom: 1 для hasLayout :-)</p>
<p>В любом случае, условный комментарий можно убрать и повесить whatever:hover.</p>
					<footer>
						<a href="http://blog.sjinks.org.ua/" rel="external nofollow" class="url">Vladimir</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-418">31 мая ’08 в 14:30</a></time>
					</footer>
				</article>
				<article id="comment-419"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>скармливания своего CSS ишакам меньше 8 версии</p></blockquote>
<p>сомневаюсь, что для 8ой версии не придется писать отдельные стили :D</p>
					<footer>
						<a href="http://www.webpp.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-419">31 мая ’08 в 19:55</a></time>
					</footer>
				</article>
				<article id="comment-420"class="comment even thread-even depth-1">
					<p>Скажу проще, использовать громоздкие условные комментарии с таблицей для каждой группы звёздочек — это безрассудно с т.з. массивности кода и беспринципно с т.з. светлой идеи правильной вёрстки.</p>
<p>Я всё-таки стараюсь трюковать в отдельных файлах, а документ держать логически правильным и чистым.</p>
<p>…а если <cite>можно убрать и повесить whatever:hover</cite>, то смысл?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-420">31 мая ’08 в 23:03</a></time>
					</footer>
				</article>
				<article id="comment-421"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>а если можно убрать и повесить whatever:hover, то смысл?</p></blockquote>
<p>Смысл в том, что whatever:hover - это JScript (htc-файл). Отключение JS отключает всякие htc.</p>
<blockquote><p>это безрассудно с т.з. массивности кода и беспринципно с т.з. светлой идеи правильной вёрстки.</p></blockquote>
<p>Возможно... А с точки зрения accessibility? Как программист, занимающийся разработкой, хм, весьма своеобразных :-) сайтов, я обратил внимание, что не все рискуют включать JavaScript. Кто-то по соображениям безопасности (пользователи IE6, привет!), кто-то из-за того, что анонимайзер скрипты режет, кто-то с мобилок трафик экономит... не суть. На мой взгляд, пара десятков байт (которые можно очень сократить) особой роли не играет (тем более, если используется gzip), но в то же время позволяет таким пользователям нормально использовать сайт. Лично для меня accessibility в данном случае перевешивает.</p>
<p>Я, например, против использования всяких expression в CSS: на мой взгляд, это не comme il faut, особенно, когда дизайн начинает расползаться при выключенном JS.</p>
<blockquote><p>Я всё-таки стараюсь трюковать в отдельных файлах, а документ держать логически правильным и чистым.</p></blockquote>
<p>С другой стороны, Vary: user-agent и Content Negotiation тоже никто не отменял, хотя здесь во мне говорит программист.</p>
<p>PS - про чистоту условно согласен, про логическую правильность - нет: комментарии на логику не влияют :-)</p>
<blockquote><p>что для 8ой версии не придется писать отдельные стили</p></blockquote>
<p>В IE8 beta1 приходится - с отрицательными границами там не всё гладко. А также из-за распознавания стилей, предназначенных для IE/Mac (это о вреде хаков).</p>
					<footer>
						<a href="http://blog.sjinks.org.ua/" rel="external nofollow" class="url">Vladimir</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-421">31 мая ’08 в 23:45</a></time>
					</footer>
				</article>
				<article id="comment-427"class="comment even thread-even depth-1">
					<p>Вадик, хочу тебе сразу сказать, что делать рейтингование ссылкой — очень плохая идея. Дело в том, что есть очень хорошее правило: GET запрос не должен ничего модифицировать. Это не просто прихоть, а реальная головная боль, которую создает, например, Google Page Accelerator, который просто подтаскивает все урлы на странице.</p>
<p>Т.е. если хочется делать полный fallback механизм, то надо делать форму с map-ом.</p>
					<footer>
						<a href="http://maxidoors.ru" rel="external nofollow" class="url">Макс Лапшин</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-427">4 июня ’08 в 19:50</a></time>
					</footer>
				</article>
				<article id="comment-456"class="comment odd alt thread-odd thread-alt depth-1">
					<p>вставлю свои пять копеек. Вообще, input'ы нужно. Зашел к ваш человек с отключенныим картинками -- что он увидел? ничего... Этот случай-то фиксится через какой-то текст в ссылках. А если еще и с отключенными стилями и скрипты сломались?</p>
<p>Как вариант -- рисовать звездочки поверх соответствующих input'ов, перекрывая их через normal flow (чтобы с zIndex возни было поменьше, но это уже на любителя).</p>
<p>Просто на западе достаточно много мусолят тему WCAG / WAI / ARIA, у нас не то, что забивают, обычно об этом просто даже не подозревают. </p>
<p>P.S. при загрузке<br />
<a href="http://blog.sjinks.org.ua/css/173-five-stars-without-javascript/" rel="nofollow">http://blog.sjinks.org.ua/css/173-five-stars-without-javascript/</a><br />
у меня в первый раз не подключились стили -- там с хостингом все ок?</p>
					<footer>
						<a href="http://webo.in/" rel="external nofollow" class="url">sunnybear</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-456">12 июня ’08 в 22:46</a></time>
					</footer>
				</article>
				<article id="comment-467"class="comment even thread-even depth-1">
					<p>Это сильно!</p>
					<footer>
						Петр						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-467">20 июня ’08 в 3:09</a></time>
					</footer>
				</article>
				<article id="comment-497"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Интересно, как заставить эти звездочки не быть активными (то есть, когда юзер уже проголосовал, надо высвечивать строго текущий рейтинг и не мигать звездами при наведении мышкой).</p>
<p>Пробовал оставить только cur-элемент, но почему-то при наведении мышью на ul.voter правее, чем правая граница cur, весь ul.voter закрашивается серыми звездами, хотя стиля для hover тут никакого нет...</p>
					<footer>
						<a href="http://blog.dotfix.ru/" rel="external nofollow" class="url">Юрий</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-497">15 июля ’08 в 15:57</a></time>
					</footer>
				</article>
				<article id="comment-498"class="comment even thread-even depth-1">
					<p>Чтобы сделать рейтинг неактивным, нужно после клика прописать JS'ом для UL какой-нибудь класс, вроде inactive, а в CSS описать, что с таким классом UL ведёт себя как бревно и ни на что не реагирует.</p>
<p>Уж простите, это не ultimate-решение, а лишь интересная методика, которую можно развить под себя.</p>
<p>Примерно так.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-498">15 июля ’08 в 16:09</a></time>
					</footer>
				</article>
				<article id="comment-499"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Решение оказалось несложным. Если нужно сделать так, чтобы рейтинг оставался фиксированным - надо:<br />
1. выводить в HTML только элемент с классом cur;<br />
2. назначить ul дополнительный класс inactive;<br />
3. дописать в CSS после (именно после!) стиля </p>
<pre>
<code>.voting:hover a.cur,</code>
<code>.voting.phover a.cur {</code>
<code>    background:none</code>
<code>}</code>
</pre>
<p>этот стиль:</p>
<pre>
<code>.inactive:hover a.cur{</code>
<code>    background:#FC0 url('../../images/msk/images_ru/stars.png') no-repeat</code>
<code>}</code>
</pre>
<p>Если будут баги - пишите )</p>
					<footer>
						<a href="http://blog.dotfix.ru/" rel="external nofollow" class="url">Юрий</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-499">15 июля ’08 в 16:33</a></time>
					</footer>
				</article>
				<article id="comment-500"class="comment even thread-even depth-1">
					<p>Спасибо.<br />
Я наверное обновлю пример подобной ситуацией для большей гибкости.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-500">15 июля ’08 в 16:36</a></time>
					</footer>
				</article>
				<article id="comment-501"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Или более простой способ:<br />
можно не удалять лишние элементы списка, но при этом надо дописать в стили после </p>
<pre>
<code>.voting:hover a.cur,</code>
<code>.voting.phover a.cur {</code>
<code>    background:none</code>
<code>}</code>
</pre>
<p>вместо указанного в моем каменте выше вот это:</p>
<pre>
<code>.inactive a:hover,</code>
<code>.inactive:hover a:hover,</code>
<code>.inactive.phover a:hover {</code>
<code>    background:none</code>
<code>}</code>
<code>.inactive:hover a.cur,</code>
<code>.inactive.phover a.cur:hover{</code>
<code>    background:#FC0 url('../../images/msk/images_ru/stars.png') no-repeat</code>
<code>}</code>
</pre>
					<footer>
						<a href="http://blog.dotfix.ru/" rel="external nofollow" class="url">Юрий</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-501">15 июля ’08 в 16:41</a></time>
					</footer>
				</article>
				<article id="comment-502"class="comment even thread-even depth-1">
					<p>А вот это уже ближе к тому, о чём я вам говорил )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-502">15 июля ’08 в 16:42</a></time>
					</footer>
				</article>
				<article id="comment-546"class="comment odd alt thread-odd thread-alt depth-1">
					<p>не пойму для чего нужно voting:hover?<br />
только что убрал его, работает отлично без никаких глюков, + для ie ничего не нужно придумывать<br />
+ добавил опционально возможность неактивности звездочек после голоса, чтобы нельзя было повторно проголосовать<br />
+ внутри невидимый input туда заносится результат</p>
					<footer>
						Артур						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-546">1 августа ’08 в 18:50</a></time>
					</footer>
				</article>
				<article id="comment-547"class="comment even thread-even depth-1">
					<p>Селектор .voting:hover нужен для того, чтобы сбрасывать предустановленное значение рейтинга для пользователя, который хочет проголосовать. Мне кажется, что это весьма удобный механизм, когда происходит не просто клик по звёздочке без отдачи во время выбора, а именно такой динамический ряд.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-547">1 августа ’08 в 19:28</a></time>
					</footer>
				</article>
				<article id="comment-3453"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Картинку звезд можно было сделать с прозрачным фоном(для большей универсальности)... а так  интересное решение, можно заюзать при надобности :)</p>
					<footer>
						Случайный мастер						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-3453">16 февраля ’09 в 6:41</a></time>
					</footer>
				</article>
				<article id="comment-5092"class="comment even thread-even depth-1">
					<p>Красивое решение.<br />
Спасибо!</p>
					<footer>
						Fox						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5092">19 января ’11 в 14:14</a></time>
					</footer>
				</article>
				<article id="comment-5093"class="comment odd alt thread-odd thread-alt depth-1">
					<p>P.S. версия скрипта для JQuery</p>
<pre>
<code>function setVote()</code>
<code>{</code>
<code>    $('.voting a').click(function(){</code>
<code>        $('.voting a').removeClass('cur');</code>
<code>        $(this).addClass('cur');</code>
<code>        $('#result').html('Rating is «' + this.rel + '»');</code>
<code>        return false;</code>
<code>    });</code>
<code>    if ($.browser.msie &amp;&amp; $.browser.version &lt; 8) {</code>
<code>        $('.voting li')</code>
<code>        .mouseover(function(){</code>
<code>            $('.voting li').addClass('phover');</code>
<code>            $('#result').html('mouseover');</code>
<code>        })</code>
<code>        .mouseout(function(){</code>
<code>            $('.voting li').removeClass('phover');</code>
<code>            $('#result').html('mouseout');</code>
<code>        });</code>
<code>    };</code>
<code>}</code>
<code>window.onload = setVote;</code>
</pre>
					<footer>
						Fox						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5093">19 января ’11 в 14:16</a></time>
					</footer>
				</article>
				<article id="comment-5232"class="comment even thread-even depth-1">
					<p>Вадим, у меня вопрос по этой теме в свете наступающего HTML5: уместно ли для таких рейтингов и подобных интерактивных мелочей использовать ?</p>
<p>P.S. Я тут ради прикола/тренировки решил <a href="http://jsfiddle.net/97WKH/28/" rel="nofollow">попытаться реализовать</a> рейтинг без метода GET и его недостатков (а заодно совсем без JS, без учета IE6-), тривиальным путем (позиционированием), и столкнулся с тем, что Опера 11.50 (Win 7 32b) почему-то отказалась применять :hover к позиционированным кнопкам (IE9 во всех режимах кроме Quirks, FF8, Chrome — применяют). В чем моя главная ошибка?</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5232">4 октября ’11 в 19:13</a></time>
					</footer>
				</article>
				<article id="comment-5233"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>SelenIT,</b> первый вопрос съел парсер, так что лучше положить код в <code>&lt;source&gt;</code>, как рекомендуется в подсказке. Что касается проблемы в Opera, то в 12-й альфа-версии этот баг уже поправлен — наверное можно поискать какой-нибудь обходной манёвр и для 11.x</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5233">4 октября ’11 в 19:19</a></time>
					</footer>
				</article>
				<article id="comment-5234"class="comment even thread-even depth-1">
					<p>Ой, сорри за мою невнимательность! Я имел в виду тег <code>menu</code>, который, по идее, изначально отличается от обычного списка именно интерактивностью. Для статичного рейтинга там еще вроде <code>meter</code> подходит (судя <a href="http://html5doctor.com/measure-up-with-the-meter-tag/" rel="nofollow">по примерам</a>), но как быть с самой голосовалкой?</p>
<p>А насчет проблемы меня озадачило, что отдельно <code>background</code> у <code>input:hover</code> меняется, так что дело, похоже, в сочетании каких-то факторов. И спасибо за позитивную новость про 12-ю версию!</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5234">4 октября ’11 в 20:09</a></time>
					</footer>
				</article>
				<article id="comment-5235"class="comment odd alt thread-odd thread-alt depth-1">
					<p>P.S. Понял причину той проблемы. Надо было просто <a href="http://jsfiddle.net/97WKH/30/" rel="nofollow">уменьшить</a> text-indent, чтобы он не вылетал за 32-кибипиксельный лимит :)</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5235">5 октября ’11 в 1:57</a></time>
					</footer>
				</article>
				<article id="comment-5236"class="comment even thread-even depth-1">
					<p>Кстати, да — достаточно поставить элементу <code>overflow:hidden</code> и необходимость в гигантских text-indent сразу отпадает ;)</p>
<p>Что касается правильного элемента, то мне кажется, что <code>&lt;meter&gt;</code> тут совсем мимо, ведь это вывод данных, а не ввод. Здесь скорее <code>&lt;input type="range"&gt;</code> по пяти фиксированным точкам.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5236">5 октября ’11 в 2:15</a></time>
					</footer>
				</article>
				<article id="comment-5237"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Точно, про <code>type="range"</code> я и забыл, спасибо за напоминание!</p>
<p>P.S. Вот еще, тоже в порядке прикола, более лаконичный hReview-совместимый (вроде) <a href="http://jsfiddle.net/97WKH/32/" rel="nofollow">вариант</a> без JS и лишних тегов... но и без поддержки IE7 (для IE7, по идее, тоже можно "допилить" по аналогии через связку label+input, но уже "не так прикольно"). Вообще есть толк в таком подходе или это сразу неверный путь?</p>
					<footer>
						SelenIT						<time pubdate datetime="2008-05-28T17:59:34+00:00"><a href="index.html#comment-5237">5 октября ’11 в 3:32</a></time>
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
	<!-- 25 & 0,552 -->
</body>
</html>
