<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Zen Coding 2.0. Концепт — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Zen Coding 2.0. Концепт</a></h1>
				<time pubdate datetime="2009-04-02T19:19:15+00:00">2 апреля ’09</time>
			</header>
			<p>На текущем этапе развития пакеты расширений <a href="/2008/10/zen-coding/">Zen Coding</a> для редактора <a href="http://macromates.com/">TextMate</a> зашли в тупик.</p>

<p>Можно конечно развить поддержку HTML 5, предусмотреть все свойства из CSS 3, реализовать ещё большее количество ежедневно необходимых шаблонов. И это будет сделано, но во вторую очередь. В первую очередь, я планирую серьёзно изменить способ набора HTML-кода и методику хранения библиотеки шаблонов в пакетах. Ну, и конечно улучшить логичность и интуитивность всех сокращений и сочетаний клавиш. Но обо всём попорядку.</p>

<p>Главная проблема текущей реализации Zen Coding состоит в ограничениях, которые накладывает внутренний механизм работы бандлов в TextMate:</p>

<ul>
<li>Все шаблоны нужно хранить в отдельных сущностях, что приводит к чрезвычайно трудоёмкому процессу изменения каких-то концептуальных механизмов. Самый яркий пример — переменная <code>TM_CSS_SPACE</code>, для её внедрения пришлось вручную перелопатить порядка 250 шаблонов.</li>
<li>Работа с выборкой из выделения или текущей строки нужных переменных далека от совершенства и просто не позволяет получить каки-то элементы без дополнительных скриптов.</li>
</ul>

<p>Самым логичным выходом из данной ситуации, на мой взгляд, является написание какой-то отдельной обёртки, которая будет содержать в себе библиотеку всех элементов, вызываться по клавише <kbd>Tab</kbd>, анализировать контекст применения и уже делать всё, что нужно, невзирая на ограничения встроенных в TextMate механизмов.</p>

<p>Что же планируется сделать:</p>

<h2>Zen HTML</h2>

<p>Очевидно, что самым удобным синтаксисом для работы HTML-деревом является CSS-синтаксис. Самым ярким примером его использования является механизм <a href="http://en.wikipedia.org/wiki/CssQuery">CSS Query</a> широко распространённый в современных JS-фреймворках. В них на всю катушку использются не только все селекторы выборки из CSS 3, но и другие кастомные штуки  вроде <code>:even</code>, <code>:not</code>, <code>:enabled</code> и другие. И хорошо было бы использовать этот механизм выборки не только в CSS и JS, но и при написании HTML-кода.</p>

<p>Проанализировав типичные ситуации, возникающие при написании HTML, я пришёл к следующей группе базовых селекторов и их псевдонимов:</p>

<ul>
<li>ID: <code>E#name</code></li>
<li>Класс: <code>E.name</code></li>
<li>Вложенность: <code>E&gt;E</code></li>
<li>Братство: <code>E+E</code></li>
<li>Повторение: <code>E*N</code>, простой псевдоним братского <code>E*3 = E+E+E</code></li>
<li>Разворачивание: <code>E+</code>, сложный псевдоним группы селекторов <code>E+ = E&gt;E+…</code></li>
</ul>

<p>Базовые селекторы атрибутов <code>id</code> и <code>class</code>:</p>

<pre><code>div#name &rarr; &lt;div id="name"&gt;&lt;/div&gt;</code>
<code>div.name &rarr; &lt;div class="name"&gt;&lt;/div&gt; </code>
<code>div.one.two &rarr; &lt;div class="one two"&gt;&lt;/div&gt; </code>
<code>div#name.name &rarr; &lt;div id="name" class="name"&gt;&lt;/div&gt; </code></pre>

<p>Базовые селекторы <code>E&gt;E</code> и <code>E+E</code> и их сочетания:</p>

<pre><code>bq&gt;p →</code>
<code>&lt;blockquote&gt;</code>
<code>   &lt;p&gt;&lt;/p&gt;</code>
<code>&lt;/blockquote&gt;</code>
<code>p+p →</code>
<code>&lt;p&gt;&lt;/p&gt;</code>
<code>&lt;p&gt;&lt;/p&gt;</code>
<code>ul&gt;li+li →</code>
<code>&lt;ul&gt;</code>
<code>   &lt;li&gt;&lt;/li&gt;</code>
<code>   &lt;li&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code></pre>

<p>Псевдонимы базовых — <code>E*N</code> и <code>E+</code>:</p>

<pre><code>p*2 &rarr;</code>
<code>&lt;p&gt;&lt;/p&gt;</code>
<code>&lt;p&gt;&lt;/p&gt;</code>
<code>ul&gt;li*2 &rarr;</code>
<code>&lt;ul&gt;</code>
<code>   &lt;li&gt;&lt;/li&gt;</code>
<code>   &lt;li&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code>
<code>dl+ &rarr;</code>
<code>&lt;dl&gt;</code>
<code>   &lt;dt&gt;&lt;/dt&gt;</code>
<code>   &lt;dd&gt;&lt;/dd&gt;</code>
<code>&lt;/dl&gt;</code></pre>

<p>По сути, селектор <code>E+</code> не является точным указанием на структуру желаемого дерева, скорее это псевдоним к шаблону, то есть псевдоним <code>dl+</code> равносилен <code>dl&gt;dt+dd</code>, а <code>table+</code> равносилен <code>table&gt;tr&gt;td</code>. Помимо этого, стоит понимать разницу между базовым селектором <code>E+E</code> и псевдонимом <code>E+</code> — в первом случае это обозначение следования друг за другом, а во втором это признак разворачиваемого шаблона.</p>

<p>Кажется, что подобным способом можно развернуть всё дерево документа, но это не так. Подобный синтаксис не предусматривает ветвление — углублять дерево можно только в одном направлении, т.е. вложить в одного родителя двух и более детей можно, но развить вложенность можно только для последнего из них. По идее, можно было бы придумать какую-то группировку, но это, во-первых, будет сильно противоречить CSS-синтаксису, а во-вторых, не настолько востребованно.</p>

<p>Чуть более сложный пример:</p>

<pre><code>div#page&gt;h3.title+ul&gt;li.item*3&gt;a &rarr;</code>
<code>&lt;div id="page"&gt;</code>
<code>   &lt;h3 class="title"&gt;&lt;/h3&gt;</code>
<code>   &lt;ul class="menu"&gt;</code>
<code>      &lt;li class="item"&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;</code>
<code>      &lt;li class="item"&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;</code>
<code>      &lt;li class="item"&gt;&lt;a href="#"&gt;&lt;/a&gt;&lt;/li&gt;</code>
<code>   &lt;/ul&gt;</code>
<code>&lt;/div&gt;</code></pre>

<p>Вряд ли подобные конструкции будут использоваться слишком часто, но сам принцип формирования отдельных элементов при помощи CSS-синтаксиса видится мне наиболее удачным решением.</p>

<h2>Zen CSS</h2>

<p>Этот пакет ожидают менее серьёзные изменения. Основные усилия будут направлены на следующее:</p>

<ul>
<li>Более логичную и удобную систему псевдонимов и предустановленных шаблонов.</li>
<li>Поддержку всех актуальных CSS-свойств, присутствующих в черновике CSS 3 и уже реализованных в браузерах, в частности, с вендорными префиксами.</li>
<li>Организация автоматической сортировки свойств в специфическом порядке.</li>
</ul>

<p>Список актуальных свойств был составлен при помощи фильтрации <a href="http://meiert.com/en/indices/css-properties/">полного списка существующих</a> в CSS 3 свойств. В итоге из 255 наименований осталось только 131 свойство, для каждого из которых был придуман короткий псевдоним <code>mt &rarr; margin-top</code>, а также набор шаблонов <code>f+ &rarr; font:1em Arial,sans-serif</code>.</p>

<p>Помимо этого, актуальные свойства были разделены на группы и отсортированы в два этапа: порядок следования групп и порядок следования свойств в группе. Всего получилось восемь групп:</p>

<ol>
<li>Позиционирование</li>
<li>Поведение и свойства блока</li>
<li>Размерность блока</li>
<li>Цветовое оформление</li>
<li>Специальные типы содержимого</li>
<li>Текст</li>
<li>Визуальные свойства</li>
<li>Печать</li>
</ol>

<p>Логика группировки основывается на двух главных принципах:</p>

<ul>
<li>Движение снаружи внутрь: от позиционирования к свойствам блока и через текст к слову и шрифту.</li>
<li>Движение от глобальных свойств к более частным и менее употребимым: от позиционирования к прозрачности, свойствам курсора и стилям для печати.</li>
</ul>

<p>Внутри блоков логика «от глобального к частному» сохраняется, но начинает работать ещё один механизм, сортирующий подобные свойства в таком порядке, в котором их принято упоминать в сокращённой записи:</p>

<pre><code>font:bold italic small-caps 1em sans-serif;</code>
<code>font-weight:bold;</code>
<code>font-style:italic;</code>
<code>font-variant:small-caps;</code>
<code>font-size:1em;</code>
<code>font-family:sans-serif;</code></pre>

<p>Тоже самое и со свойствами, относящимися к четырём сторонам объекта: за основу взят принцип <strong>TR</strong>ou<strong>BL</strong>e или <strong>T</strong>op <strong>R</strong>ight <strong>B</strong>ottom <strong>L</strong>eft, который используется в сокращённой записи:</p>

<pre><code>#box {</code>
<code>   position:absolute;</code>
<code>   top:1px;</code>
<code>   right:2px;</code>
<code>   bottom:3px;</code>
<code>   left:4px;</code>
<code>   padding:1px 2px 3px 4px;</code>
<code>   padding-top:1px;</code>
<code>   padding-right:2px;</code>
<code>   padding-bottom:3px;</code>
<code>   padding-left:4px;</code>
<code>   }</code></pre>

<p>В состав пакета Zen Coding планируется включить скрипт, который будет автоматически сортировать выделенные группы свойств согласно упомянутому алгоритму. Это позволит не только легко научиться новому порядку сортировки, но и привести в порядок существующий или чужой код.</p>

<p>Также планируется отдельная публикация с теоритическими выкладками по поводу группировки и сортировки CSS-свойств. Возможно, в составе обновлённой версии статьи «CSS-менеджмент».</p>

<h2>Алло, таланты!</h2>

<p>Сейчас я продемонстрировал вам концепцию будущих пакетов Zen Coding. Для дальнейших шагов по её реализации осталось только найти соавтора или соавторов, которые согласны не только помочь мне реализовать эту функциональность, но и, возможно, заняться поддержкой, развитием и портированием пакетов для других редакторов. Большая часть алгоритмов написана, остальная дописывается и ждёт своего часа, чтобы быть реализованной в пакетах Zen Coding не только для TextMate, но и для всех редкторов, что поддерживают плагины: <a href="http://panic.com/coda/">Coda</a>, <a href="http://macrabbit.com/espresso/">Espresso</a>, <a href="http://www.jetbrains.com/idea/">IntelliJ IDEA</a> и многих других.</p>

<p>Если вы используете TextMate, знаете на хорошем уровне какой-нибудь скриптовый язык вроде Python, Ruby, Perl или даже PHP, и хотите написать что-нибудь такое или портировать Zen Coding для своего любимого редактора — смелее, пишите мне: <a href="mailto:pepelsbey@gmail.com">pepelsbey@gmail.com</a>.</p>

<p>Проект по-прежнему планируется держать на <a href="http://code.google.com/p/zen-coding/">Google Code</a>, но помимо этого будет открыт отдельный сайт с документацией и примерами — <a href="http://zen-coding.ru/">zen-coding.ru</a></p>

<p>Как обычно, с интересом жду ваших мнений по поводу озвученной концепции развития пакетов Zen Coding.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>68</small>
				</header>
				<article id="comment-3653"class="comment even thread-even depth-1">
					<p>А тормозить не будет?</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3653">3 апреля ’09 в 3:18</a></time>
					</footer>
				</article>
				<article id="comment-3654"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Дык а можно в двух словах — что это за штука и что она делает?</p>
					<footer>
						<a href="http://denisx.ru" rel="external nofollow" class="url">DenisX</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3654">3 апреля ’09 в 8:57</a></time>
					</footer>
				</article>
				<article id="comment-3655"class="comment even thread-even depth-1">
					<p>По идее, стандартные бандлы работают по тому же принципу и не должно.<br />
К тому же, в какой именно момент? Обработать по табу средней сложности регексп и вытащить кое-что из списка в 200 элементов…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3655">3 апреля ’09 в 9:36</a></time>
					</footer>
				</article>
				<article id="comment-3656"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>DenisX,</strong> совсем коротко можно только показать на скринкастах: <a href="/2008/08/zen-html/" rel="nofollow">Zen HTML</a>, <a href="/2008/10/zen-css/" rel="nofollow">Zen CSS</a>. Это как работает нынешняя версия.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3656">3 апреля ’09 в 9:43</a></time>
					</footer>
				</article>
				<article id="comment-3657"class="comment even thread-even depth-1">
					<p>Шикарно!!! Спасибо за уже имеющуюся версию.<br />
Что мне сейчас не хватает:<br />
ZenHTML<br />
добавить бы label с input. Т.е. что бы например label+ -&gt;<br />
 И курсор перемещен в for и одновременно изменяется id input.<br />
Еще я не понял почему одиночные теги не закрыты, если я использую html:sx<br />
ZenCSS<br />
Пока могу вспомнить, что не хватает наиболее часто используемых сетов в ff<br />
например :</p>
<pre>
<code>ff:se</code>
<code>ff:ss</code>
<code>ff:h -&gt; Helvetica, Tahoma ...</code>
</pre>
<p>Ну думаю понятно.<br />
Увы помочь, вряд ли чем-то могу, т.к. знаю JS и PHP</p>
					<footer>
						<a href="http://blia.tk" rel="external nofollow" class="url">blia</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3657">3 апреля ’09 в 10:16</a></time>
					</footer>
				</article>
				<article id="comment-3658"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Еще я не понял почему одиночные теги не закрыты, если я использую html:sx</p></blockquote>
<p>Всё потому, что TextMate пока не умеет отличать XHTML от HTML и ему об этом нужно специально говорить при помощи переменной TM_XHTML, которая задаётся здесь: Preferences > Advanced > Shell Variables > + > TM_XHTML = /<br />
После этого все одиночные теги начнут закрываться.</p>
<p>За идеи — спасибо.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3658">3 апреля ’09 в 10:22</a></time>
					</footer>
				</article>
				<article id="comment-3659"class="comment even thread-even depth-1">
					<p>Идея с HTML понравилась, попробую сделать это для Aptana.</p>
					<footer>
						<a href="http://chikuyonok.ru" rel="external nofollow" class="url">Сергей Чикуёнок</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3659">3 апреля ’09 в 10:32</a></time>
					</footer>
				</article>
				<article id="comment-3660"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А какой там механизм плагинов/скриптования?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3660">3 апреля ’09 в 10:34</a></time>
					</footer>
				</article>
				<article id="comment-3661"class="comment even thread-even depth-1">
					<p>pepelsbey, Aptana – это вроде же eclipse</p>
					<footer>
						<a href="http://blia.tk" rel="external nofollow" class="url">blia</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3661">3 апреля ’09 в 10:37</a></time>
					</footer>
				</article>
				<article id="comment-3662"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Aptana – это вроде же eclipse</p></blockquote>
<p>Для меня что первый, что второй — глубоко в них не закапывался.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3662">3 апреля ’09 в 10:39</a></time>
					</footer>
				</article>
				<article id="comment-3663"class="comment even thread-even depth-1">
					<blockquote><p>А какой там механизм плагинов/скриптования?</p></blockquote>
<p>Там используется AptanaMonkey (бывший EclipseMonkey), в качестве языка скриптования используется JavaScript, в последних версиях еще и Ruby.</p>
					<footer>
						<a href="http://chikuyonok.ru" rel="external nofollow" class="url">Сергей Чикуёнок</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3663">3 апреля ’09 в 10:42</a></time>
					</footer>
				</article>
				<article id="comment-3665"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Кстати, а  TextMate умеет долбиться в интернет? Это я к тому, что можно намутить сервис (не обязательно только для Zen Coding, есть еще кое-какие идеи).</p>
					<footer>
						<a href="http://chikuyonok.ru" rel="external nofollow" class="url">Сергей Чикуёнок</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3665">3 апреля ’09 в 11:46</a></time>
					</footer>
				</article>
				<article id="comment-3666"class="comment even thread-even depth-1">
					<p>Знаю питон, готов помочь.<br />
Люблю Коду, но очень не хватает там Zen Coding'а.<br />
Для идеи думаю коллеги из Яндекса помогут.</p>
					<footer>
						Chupa						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3666">3 апреля ’09 в 12:50</a></time>
					</footer>
				</article>
				<article id="comment-3667"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В «Чуть более сложном примере» несоответствие:</p>
<pre>
<code>ul&gt;li.item*3&gt;a</code>
</pre>
<p>против </p>
<pre>
<code>&lt;li&gt;&lt;a href=&quot;#&quot; class=&quot;item&quot;&gt;&lt;/a&gt;&lt;/li&gt;</code>
</pre>
<p>(класс применился не к «li», а к «a»)</p>
<p>А вообще, вот такой дзен мне по душе, надеюсь найдутся хорошие программисты, которые возьмуться за его достижение :)<br />
И у меня есть несколько идей, которые можно было бы в него включить, я над ними подумаю и попробую реализовать, потом покажу %)</p>
					<footer>
						<a href="http://kizu.ru" rel="external nofollow" class="url">kizu</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3667">3 апреля ’09 в 12:51</a></time>
					</footer>
				</article>
				<article id="comment-3668"class="comment even thread-even depth-1">
					<blockquote><p>В «Чуть более сложном примере» несоответствие</p></blockquote>
<p>Спасибо :) Регекспы по разбору этого синтаксиса в моей голове иногда сбоят…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3668">3 апреля ’09 в 13:47</a></time>
					</footer>
				</article>
				<article id="comment-3669"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Кстати, а TextMate умеет долбиться в интернет?</p></blockquote>
<p>TextMate может всё, что можно исполнить и получить в Unix'е. Так что, по идее, препятствий нет.</p>
<blockquote><p>Знаю питон, готов помочь.<br />
Люблю Коду, но очень не хватает там Zen Coding'а.</p></blockquote>
<p>Хорошее сочетание ) Я тоже очень люблю Coda, вплоть до того, что готов отказаться от TextMate, если в ней будет Zen Coding. В общем, я напишу тебе некоторые мысли.</p>
<blockquote><p>И у меня есть несколько идей, которые можно было бы в него включить</p></blockquote>
<p>С интересом жду результатов твоих экспериментов. Если и правда получится внедрить Zen Coding на редакторах с поддержкой плагинов, пусть даже только на Mac OS, это будет счастье.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3669">3 апреля ’09 в 13:52</a></time>
					</footer>
				</article>
				<article id="comment-3671"class="comment even thread-even depth-1">
					<p>С удовольствием бы сам реализовал что-то подобное для InType (некоторые мысли уже были), но пока его возможности этого не позволяют, хотя запланированы очень мощные механизмы. А все остальное для виндовс слишком тяжело и неповоротливо, чтобы работать с удовольствием :-) Пока в InType приходится брать количеством...<br />
А, кстати, разве средства IntelliJIDEA позволят сделать что-то подобное?</p>
					<footer>
						<a href="http://smmurf.ya.ru/" rel="external nofollow" class="url">Антон Вернигор</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3671">3 апреля ’09 в 14:32</a></time>
					</footer>
				</article>
				<article id="comment-3672"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>разве средства IntelliJIDEA позволят сделать что-то подобное?</p></blockquote>
<p>К IDEA можно написать плагин, а там внутри JAVA и широкий простор для деятельности )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3672">3 апреля ’09 в 14:33</a></time>
					</footer>
				</article>
				<article id="comment-3673"class="comment even thread-even depth-1">
					<p><a href="http://aefimov.livejournal.com/" rel="nofollow">Алексей Ефимов</a> согласился написать плагин Zen HTML к IntelliJIDEA.  И по его словам, будет возможно Java-логику из него вынести и обернуть плагином к другому редактору.  Вадим, ты радуешься? Я — да ;)</p>
					<footer>
						<a href="http://makishvili.com" rel="external nofollow" class="url">Вадим Макишвили</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3673">3 апреля ’09 в 15:21</a></time>
					</footer>
				</article>
				<article id="comment-3674"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я вместе с вами радуюсь. Волею судеб приходится работать с Идеей сейчас.</p>
					<footer>
						Chupa						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3674">3 апреля ’09 в 15:40</a></time>
					</footer>
				</article>
				<article id="comment-3675"class="comment even thread-even depth-1">
					<p>Если это будет доступно для идеи, будет прекрасно!<br />
Выглядит очень многообещающе.</p>
					<footer>
						<a href="http://smmurf.ya.ru/" rel="external nofollow" class="url">Антон Вернигор</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3675">3 апреля ’09 в 16:09</a></time>
					</footer>
				</article>
				<article id="comment-3676"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим. С удовольствием взялся бы за реализацию на NP++. Давно сам пытаюсь подобное там реализовать. Но мне нужна будет помощь программиста, чтобы допилить существующие плагины. Чуть позже свяжусь с тобой.</p>
					<footer>
						<a href="http://webdev.lovata.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3676">3 апреля ’09 в 19:08</a></time>
					</footer>
				</article>
				<article id="comment-3677"class="comment even thread-even depth-1">
					<p>Весьма элегантно - пригодилось бы в Visual Studio.</p>
					<footer>
						<a href="http://nesteruk.org/blog" rel="external nofollow" class="url">Дмитрий</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3677">3 апреля ’09 в 20:27</a></time>
					</footer>
				</article>
				<article id="comment-3681"class="comment odd alt thread-odd thread-alt depth-1">
					<p>не понял про огранечения :(<br />
т.к. не понял что ты в итоге хочешь получить<br />
свяжусь с тобой и поробуем убрать эти ограничения :)</p>
					<footer>
						<a href="http://outofcloud.net" rel="external nofollow" class="url">KBA-KBA</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3681">5 апреля ’09 в 15:02</a></time>
					</footer>
				</article>
				<article id="comment-3682"class="comment even thread-even depth-1">
					<p>Органичения — это набор <a href="http://manual.macromates.com/en/environment_variables.html" rel="nofollow">переменных в TextMate-бандлах</a>. К примеру: </p>
<pre>
<code>TM_CURRENT_WORD</code>
</pre>
<p>Строка h3+p&gt;a.link, при курсоре в конце неё, вернёт link по разделителю «.» и чтобы получить из неё элементы, нужно её парсить из переменной</p>
<pre>
<code>TM_CURRENT_LINE</code>
</pre>
<p>Ну или вариант с одиночными элементами, чтобы их закрывать автоматически, нужно иметь переменную окружения TM_XHTML, которую очень муторно снимать/ставить в настройках. А обёртка могла бы анализировать DOCTYPE и принимать решения самостоятельно. В любом случае, хранить HTML-элементы в списке внутри скрипта значительно удобнее, чем делать на каждый из них.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3682">5 апреля ’09 в 17:15</a></time>
					</footer>
				</article>
				<article id="comment-3683"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Сегодня закончил <a href="http://rmcreative.ru/blog/post/zen-html-dlja-netbeans" rel="nofollow">Zen HTML для NetBeans</a>. Синтаксис и сама работа немного отличаются, но вроде вышло удобно…</p>
					<footer>
						<a href="http://rmcreative.ru/" rel="external nofollow" class="url">Sam</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3683">6 апреля ’09 в 1:42</a></time>
					</footer>
				</article>
				<article id="comment-3687"class="comment even thread-even depth-1">
					<p>Я тоже всеми руками за Zen HTML и ZenCSS в Cod'е и также, наверное, отказался бы от Текстмейта в ее пользу. Да и что греха таить – на некоторых проектах только ей и получается пользоваться.</p>
<p>Вот только индустрия написания плагинов под Коду как-то не сильно развита. По крайней мере не все так интуитивно, как в Текстмейте. Если бы смог помочь – с радостью бы помог.</p>
					<footer>
						<a href="http://www.reactant.ru" rel="external nofollow" class="url">ATimofeev</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3687">6 апреля ’09 в 20:37</a></time>
					</footer>
				</article>
				<article id="comment-3688"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да, полноценного бандл-редактора для Коды нет, но есть какие-то решения и даже удачные плагины. Только в этом надо серьёзно разобраться. Только одно останавливает от перехода к этому редактору — очень сильно привык к скорости набора кода в TextMate (</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3688">6 апреля ’09 в 23:43</a></time>
					</footer>
				</article>
				<article id="comment-3690"class="comment even thread-even depth-1">
					<p>Вадим, можно меня к проекту Google Code добавить? Залью свои наработки для NetBeans. <a href="mailto:alexander.makarow@googlemail.com">alexander.makarow@googlemail.com</a>.</p>
					<footer>
						<a href="http://rmcreative.ru/" rel="external nofollow" class="url">Sam</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3690">7 апреля ’09 в 16:17</a></time>
					</footer>
				</article>
				<article id="comment-3704"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А имеет ли смысл кроме атрибутов id и class реализовать в Zen Coding другие атрибуты например для элементов форм? Например для полей input добавлять name каким-либо образом? Так, чтобы в результате развернуть готовую для заполнения форму. Думаю понятно что я имел в виду. Идея безусловно понравилась, буду ждать развития. К сожалению сам помочь ничем не могу.</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3704">9 апреля ’09 в 6:51</a></time>
					</footer>
				</article>
				<article id="comment-3740"class="comment even thread-even depth-1">
					<p>Для notepad++ есть такое?</p>
					<footer>
						Абасака						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3740">14 апреля ’09 в 0:52</a></time>
					</footer>
				</article>
				<article id="comment-3741"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Абасака,</strong> следите за этой историей: <a href="http://habrahabr.ru/blogs/webdev/56396/" rel="nofollow">Notepad++ для верстки HTML/CSS</a>, возможно, будет.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3741">14 апреля ’09 в 1:02</a></time>
					</footer>
				</article>
				<article id="comment-3804"class="comment even thread-even depth-1">
					<p>Спасибо Вадим ;)</p>
					<footer>
						<a href="http://pepyaka.net" rel="external nofollow" class="url">Cinic</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3804">28 апреля ’09 в 12:34</a></time>
					</footer>
				</article>
				<article id="comment-3809"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А как насчет плагина для E-texteditor под виндовоз, который является аналогом Textmate. Будет ли  zen-coding 2.0 нормально работать под Е-texteditorom или разработан плагин специально для него? Так как думаю большая часть аудитории всеравно сидят на windows, включая и меня. И очень бы хотелось что бы E-texteditor  поддерживал zen-coding 2.0 также хорошо как это будет делать  textmate.</p>
<p>N.b.<br />
А как насчет редактора dreamweaver? Для него что-нибудь планируется?</p>
					<footer>
						<a href="http://yvelious.com" rel="external nofollow" class="url">Yvelious</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3809">30 апреля ’09 в 3:18</a></time>
					</footer>
				</article>
				<article id="comment-3810"class="comment even thread-even depth-1">
					<p>Вопрос исключительно в возможностях E-editor'а — если возможность написать плагин есть, то вполне вероятно, что и до него дойдёт очередь. К примеру, для Aptana скрипт работает на JS, для TextMate уже есть прототип скрипта на Python, а что может E-editor? Всё тоже самое можно сказать относительно Dreamweawer'а. Если есть заинтересованность — предлагайте )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3810">30 апреля ’09 в 3:22</a></time>
					</footer>
				</article>
				<article id="comment-3843"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Извините, а как на стендэлон Аптану поставить пак <a href="http://code.google.com/p/zen-coding/" rel="nofollow">отсюда</a>?</p>
					<footer>
						Дима						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3843">11 мая ’09 в 19:13</a></time>
					</footer>
				</article>
				<article id="comment-3844"class="comment even thread-even depth-1">
					<p>Дима, почитайте об этом в комментариях у <a href="http://chikuyonok.ru/" rel="nofollow">Сергея Чикуёнка</a>, там это обсуждалось.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3844">12 мая ’09 в 0:58</a></time>
					</footer>
				</article>
				<article id="comment-3868"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, у меня не работает конструкция ul&gt;li*2 →  и подобные, в чём может быть проблема?</p>
					<footer>
						<a href="http://pepyaka.net" rel="external nofollow" class="url">Cinic</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3868">22 мая ’09 в 16:49</a></time>
					</footer>
				</article>
				<article id="comment-3869"class="comment even thread-even depth-1">
					<p>Дело в том, что сложные псевдонимы работают только в ветке 2.x, работой над которой занимаете Сергей Чикуёнок (все они доступны на <a href="http://code.google.com/p/zen-coding/" rel="nofollow">Google Code</a>). Последняя версия ветки 1.x — 1.3 работает только с простыми псевдонимами.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3869">22 мая ’09 в 16:52</a></time>
					</footer>
				</article>
				<article id="comment-3870"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Аааа, ясно спасибо. ;)</p>
					<footer>
						<a href="http://pepyaka.net" rel="external nofollow" class="url">Cinic</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3870">23 мая ’09 в 0:38</a></time>
					</footer>
				</article>
				<article id="comment-3883"class="comment even thread-even depth-1">
					<p>по поводу версии 1.3 зен кодинга..<br />
почему-то структуры вида bd+, bdb+ и подобные выводят примерно такое border-bottom:x} solid #000; при этом фокус кидает сразу на цвет... ( че-т не то..</p>
					<footer>
						Igor10k						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3883">26 мая ’09 в 16:54</a></time>
					</footer>
				</article>
				<article id="comment-3884"class="comment odd alt thread-odd thread-alt depth-1">
					<p>и все таки bb bt и др было писать приятнее чем bdb bdt =)</p>
					<footer>
						Igor10k						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3884">26 мая ’09 в 17:02</a></time>
					</footer>
				</article>
				<article id="comment-3885"class="comment even thread-even depth-1">
					<p><strong>Igor10k,</strong> там ошибка в синтаксисе шаблона. Новую версию я залью сегодня вечером, наверное вместе с релизом версии 1.3 здесь же.</p>
<p>Насчёт b vs. bd — ну, не сложно же набирать bg ;) Но в целом согласен, это чуть сложнее… но гораздо более последовательно по отношению к свойствам t-op, r-ight, b-ottom, l-eft.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3885">26 мая ’09 в 17:12</a></time>
					</footer>
				</article>
				<article id="comment-3889"class="comment odd alt thread-odd thread-alt depth-1">
					<p>pepelsbey, понятно )<br />
я вот хотел еще спросить как можно выйти из сниппета? )<br />
то есть допустим набираешь div -&gt; span -&gt; и получается span<br />
сейчас я обычно тыкаю на стрелках вправо-влево что прерывает сниппет и позволяет использовать следующий, но эт не оч удобно как-то ) хотя уже привык в принципе, но все равно интересно есть ли другой способ )</p>
<p>кстати, еще в 1.3 версии не понравилось что div сразу вставляет два переноса строки между тегами... не оч удобно ) чтоб привести к такому виду в 1.2 достаточно было набрать div -&gt; и тыкнуть "enter".. а в 1.3 чтоб привести к виду одной строчки приходится тыкать "backspace", потом "fn"+"backspace".. короч неудобно )</p>
<p>а ваще большое спасибо за бандл.. 1.2 версию с большим удовольствием юзаю )</p>
					<footer>
						Igor10k						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-3889">28 мая ’09 в 22:35</a></time>
					</footer>
				</article>
				<article id="comment-4236"class="comment even thread-even depth-1">
					<p>Скажите, пожалуйста, как установить zen coding на aptana 2. В какую папку его нужно забросить?</p>
					<footer>
						Максим						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4236">11 ноября ’09 в 13:12</a></time>
					</footer>
				</article>
				<article id="comment-4240"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Сам концепт -- просто AWESOME.<br />
Только мне не повезло с редакторами, которые я использую :(<br />
Для NetBeans я так понимаю, то что есть на данный момент -- далеко не предел мечтаний.<br />
А под EmEditor(очень мощный, быстрый,  удобный "блокнот" с пагинами, платный, 40$) и DreamWeaver вроде-бы никто еще даже не пытался это реализовать...</p>
					<footer>
						<a href="http://www.nayjest.ru/" rel="external nofollow" class="url">Nayjest</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4240">23 ноября ’09 в 15:32</a></time>
					</footer>
				</article>
				<article id="comment-4241"class="comment even thread-even depth-1">
					<p>Nayjest, версия для DreamWeaver уже есть, смотрите на Google Code: <a href="http://code.google.com/p/zen-coding/" rel="nofollow">http://code.google.com/p/zen-coding/</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4241">23 ноября ’09 в 16:02</a></time>
					</footer>
				</article>
				<article id="comment-4242"class="comment odd alt thread-odd thread-alt depth-1">
					<p>A как в DreamWeaver с CSS работать? Ставлю в стилях например ta (text align) жму Expand Abbreviation и вместо text-align:; появляется <code>&lt;ta&gt;&lt;/ta&gt;</code></p>
					<footer>
						Дмитрий						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4242">23 ноября ’09 в 16:09</a></time>
					</footer>
				</article>
				<article id="comment-4244"class="comment even thread-even depth-1">
					<p>Вадим, как дела с сайтом <a>zen-coding.ru</a>?</p>
<p>Zen Coding - классная вещь! Было бы здорово, если бы собрать всю информацию по нему в одном месте. Подробные инструкции по установке и по работе..</p>
<p>Знаю, этого многим не хватает, возникают проблемы с установкой и люди не знают куда обращаться. Готов помочь, чем смогу.</p>
					<footer>
						<a href="http://mitlex.ru" rel="external nofollow" class="url">Ney</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4244">24 ноября ’09 в 18:39</a></time>
					</footer>
				</article>
				<article id="comment-4245"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ney, пришло очень чёткое понимание, что полноценный сайт с документацией и примерами нужен. Вот такие дела с zen-coding.ru. Не обещаю его к концу года, но в самом начале — шансы есть.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4245">24 ноября ’09 в 19:09</a></time>
					</footer>
				</article>
				<article id="comment-4246"class="comment even thread-even depth-1">
					<p>Дмитрий, боюсь, что я не эксперт по плагину для Dreamweawer'а. У него есть автор и вопросы лучше задавать ему.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4246">24 ноября ’09 в 19:09</a></time>
					</footer>
				</article>
				<article id="comment-4247"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Сайт очень нужен!<br />
Если что, могу помочь с сайтом.</p>
					<footer>
						<a href="http://mitlex.ru/" rel="external nofollow" class="url">Ney</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4247">25 ноября ’09 в 0:30</a></time>
					</footer>
				</article>
				<article id="comment-4248"class="comment even thread-even depth-1">
					<p>Увидел на гуглокоде, что планируется создание под ските, а под Notepad++ будет плагин?</p>
					<footer>
						<a href="http://woitblog.com" rel="external nofollow" class="url">bomarsche</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4248">25 ноября ’09 в 10:14</a></time>
					</footer>
				</article>
				<article id="comment-4249"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Для Notepad++ нужно писать транслятор на C++, который будет получать доступ к Windows Scripting Host и на нём исполнять JS. В общем, ищем мастера.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4249">25 ноября ’09 в 13:35</a></time>
					</footer>
				</article>
				<article id="comment-4254"class="comment even thread-even depth-1">
					<p>На официальном сайте NP++ находится <a href="https://sourceforge.net/apps/ideatorrent/notepad-plus/ideatorrent/idea/114/" rel="nofollow">запрос</a> о реализации Zen Coding</p>
<p><strong>pepelsbey</strong>, не могли бы Вы добавить на английском чего не хватает для реализации ZC, эту информацию обязательно прочитает автор Notepad++</p>
					<footer>
						Руслан						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4254">14 декабря ’09 в 17:17</a></time>
					</footer>
				</article>
				<article id="comment-4255"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Для Notepad++ нужно писать транслятор на C++, который будет получать доступ к Windows Scripting Host и на нём исполнять JS. В общем, ищем мастера.</p>
<p>кстати, существует плагин <a href="http://www.fesevur.com/nppjavascript" rel="nofollow">NppJavaScript</a> для notepad++ может он поможет?</p>
					<footer>
						Руслан						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4255">14 декабря ’09 в 18:13</a></time>
					</footer>
				</article>
				<article id="comment-4267"class="comment even thread-even depth-1">
					<p>Под notepad++ есть удобный плагин <a href="http://sourceforge.net/projects/quicktext/" rel="nofollow">QuickText</a>. Можно добавить в него нужный функционал.</p>
					<footer>
						Evgenioni						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4267">18 декабря ’09 в 22:23</a></time>
					</footer>
				</article>
				<article id="comment-4503"class="comment odd alt thread-odd thread-alt depth-1">
					<p>привет, еще такое предложение.</p>
<p>Многие правила CSS идут сразу со значением #000.<br />
На мой взгляд лучше по умолчанию ставить только решетку, а с допиской :0 ставить #000</p>
<p>Т.е.<br />
c=color:#;<br />
c:0=color:#000;</p>
					<footer>
						<a href="http://fiskus.name" rel="external nofollow" class="url">fiskus_boulder</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4503">22 января ’10 в 13:45</a></time>
					</footer>
				</article>
				<article id="comment-4504"class="comment even thread-even depth-1">
					<p>Имхо, всё же значения по умолчанию чуть удобнее. Они выставляются из понимания «весь текст чёрный, весь фон белый» и, к примеру, в TextMate цифровое значение выделяется, а решётка нет. Так что сразу можно вводить.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4504">22 января ’10 в 14:37</a></time>
					</footer>
				</article>
				<article id="comment-4726"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Идея классная. Токма нету плагина под Coda такого, очень плачевно, однако!</p>
					<footer>
						<a href="http://www.igrif.org" rel="external nofollow" class="url">igrif</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4726">10 июня ’10 в 12:01</a></time>
					</footer>
				</article>
				<article id="comment-4727"class="comment even thread-even depth-1">
					<p>Есть плагин. И под Coda, и под Espresso и, конечно же, TextMate: <a href="http://code.google.com/p/zen-coding/downloads/list" rel="nofollow">Zen Coding на Google Code</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4727">10 июня ’10 в 12:05</a></time>
					</footer>
				</article>
				<article id="comment-4824"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо огромное за проделанную работу! Пользуемся уже около года, это действительно ускоритель вёрстки :)</p>
<p>Интересует поддержка Aptana 3...</p>
					<footer>
						Ян						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4824">24 октября ’10 в 17:57</a></time>
					</footer>
				</article>
				<article id="comment-4849"class="comment even thread-even depth-1">
					<p>Спасибо! благодаря вам узнал о такой штуке, нарадоваться не могу, но столкнулся с проблемкой.<br />
хоткеи Zen Coding в NP++ - глобальные, работают даже когда нотпад не активен, свернут даже и соответственно перекрывают действия.<br />
Можно сделать их локальными в пределах np++?</p>
					<footer>
						Карибас						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4849">12 ноября ’10 в 13:10</a></time>
					</footer>
				</article>
				<article id="comment-4854"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Карибас,</strong> я бы рад вам помочь, но отвечаю только за документацию проекта. Плагины курирует <a href="http://chikuyonok.ru/" rel="nofollow">Сергей Чикуёнок</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-4854">15 ноября ’10 в 15:18</a></time>
					</footer>
				</article>
				<article id="comment-5094"class="comment even thread-even depth-1">
					<p>Сегодня начал пользоваться "Zend Coding - Python" на Notepad++. Я как в сказке, одно удовольствие! Спасибо.</p>
					<footer>
						Gnom7						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-5094">21 января ’11 в 17:19</a></time>
					</footer>
				</article>
				<article id="comment-5215"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Thank you for zen-coding. Made my and many others lives much easier.</p>
<p>Maybe a dumb question but anyway are the 2.0 concepts implemented in the latest version of zen-coding on google code?</p>
					<footer>
						<a href="http://palimadra.tumblr.com" rel="external nofollow" class="url">Pali Madra</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-5215">12 сентября ’11 в 14:10</a></time>
					</footer>
				</article>
				<article id="comment-5216"class="comment even thread-even depth-1">
					<p><b>Pali Madra,</b> thank you. And yes, ZC 2.0 concept is implemented in ZC 0.7 version on <a href="http://code.google.com/p/zen-coding/" rel="nofollow">Google Code</a> or <a href="https://github.com/sergeche/zen-coding" rel="nofollow">Github</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-5216">12 сентября ’11 в 14:16</a></time>
					</footer>
				</article>
				<article id="comment-5321"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, в случаем не в курсе, возможно ли Zen Coding под Sublime Text 2 каким-то образом научить разворачивать CSS-аббревиатуры инлайново в атрибуте style?</p>
					<footer>
						<a href="http://www.beskrovnyy.com/" rel="external nofollow" class="url">Евгений</a>						<time pubdate datetime="2009-04-02T19:19:15+00:00"><a href="index.html#comment-5321">5 мая ’12 в 1:26</a></time>
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
	<!-- 33 & 0,648 -->
</body>
</html>
