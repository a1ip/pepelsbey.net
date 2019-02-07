<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Zen HTML — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Zen HTML</a></h1>
				<time pubdate datetime="2008-08-31T02:17:03+00:00">31 августа ’08</time>
			</header>
			<p>Поиск наиболее комфортных средств разработки — это бесконечный путь. Мой путь начинался с Блокнота, потом были AceHTML, HomeSite, дальше года на три <a href="http://www.newsgator.com/Individuals/TopStyle/Default.aspx">TopStyle Pro</a>, который я до сих пор считаю лучшим инструментом для вёрстки на платформе Windows. Затем, с переходом на Mac OS X, я просто влюбился в редактор <a href="http://www.panic.com/coda/">Coda</a>, но, по причине его юности, стал искать дальше и, наконец, нашёл то, чем с удовольствием пользуюсь весь последний год — <a href="http://macromates.com/">TextMate</a>.</p>

<p>Но, каким бы удобным ни казался ваш редактор, самым узким местом в вопросе производительности являетесь вы сами. А именно — ваша скорость набора длинных HTML-конструкций. Для решения этой проблемы в качестве полумеры можно использовать библиотеку самых сложных элементов вроде <code>DOCTYPE</code> или тех, что указывают кодировку документа и подключают к нему фавиконки. Но остаются сложные табличные деревья или просто длинные имена элементов: <code>&lt;address&gt;</code>, <code>&lt;fieldset&gt;</code>, <code>&lt;textarea&gt;</code>, etc.</p>

<p>Поэтому сегодня я предлагаю вам первую часть обзора пакетов настройки (bundles), написанных для быстрой и комфортной работы с <a href="http://macromates.com/">TextMate</a>. Обзор представлен в виде двухминутного скринкаста:</p>

<iframe src="https://player.vimeo.com/video/17588964?title=0&amp;byline=0&amp;portrait=0&amp;color=188418" width="609" height="457" frameborder="0" class="video-player"></iframe>

<p>Принцип работы с HTML-элементами в этом пакете состоит в том, что каждому элементу присваивается определённый псевдоним, который разворачивается в полный элемент с необходимыми атрибутами после нажатия клавиши <kbd>Tab</kbd>. К примеру:</p>

<pre><code>tarea → &lt;textarea cols="30" rows="10"&gt;&lt;/textarea&gt;</code>
<code>fset → &lt;fieldset&gt;&lt;/fieldset&gt;</code>
<code>img → &lt;img src="" alt=""/&gt;</code></pre>

<p>Следующий тип псевдонимов отвечает за вывод специфических элементов и строится по принципу <em>псевдоним + двоеточие + специфический псевдоним</em>:</p>

<pre><code>input:text → &lt;input type="text"/&gt;</code>
<code>link:css → &lt;link rel="stylesheet" type="text/css" href="style.css"/&gt;</code>
<code>cc:ie → &lt;!--[if IE]&gt;&lt;![endif]--&gt;</code></pre>

<p>В случае, когда нам нужно вывести не просто HTML-элемент, а целое дерево, к элементу добавляется символ плюса:</p>

<pre><code>table+</code>
<code>→</code>
<code>&lt;table&gt;</code>
<code>&lt;tr&gt;</code>
<code>    &lt;td&gt;&lt;/td&gt;</code>
<code>&lt;/tr&gt;</code>
<code>&lt;/table&gt;</code></pre>

<p>Самые частоупотребимые атрибуты — <code>id</code>, <code>class</code> и <code>style</code> — повешены на горячие клавиши:</p>

<pre><code>Cmd + 2 → class=""</code>
<code>Cmd + 3 → id=""</code>
<code>Cmd + 4 → style=""</code></pre>

<p><q>Почему именно эти сочетания?</q> — спросите вы. Всё просто — всмотритесь в изображённые на клавишах значки: <code>#</code> — это вполне себе <code>id</code>, а <code>$</code> — вполне себе <code>style</code>, в то время как <code>class</code> просто находится поблизости.</p>

<p>Пакет содержит все нужные для современной вёрстки HTML-элементы, и вполне логично, что элементы вроде <code>&lt;font&gt;</code> в нём отсутствуют. Помимо коллекции элементов на все случаи жизни, в пакет входят шаблоны типовых HTML-документов: от HTML 4.01 Transitional до XHTML 1.1 Strict.</p>

<p>Следующая публикация в этой серии будет посвящена пакету <a href="/2008/10/zen-css/">Zen CSS</a>, после чего оба пакета будут выложены в открытый доступ. В дальнейшем планируется их развитие и обновление.</p>

<p>Энергичная музыка, использованная в скринкасте — <a href="http://www.lastfm.ru/music/Skafandr">Skafandr</a> «Непреодолимая дистанция».</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>55</small>
				</header>
				<article id="comment-606"class="comment even thread-even depth-1">
					<p>M4V отдается как text/plain и, соответственно, не играется. :(</p>
<p>А где сам бандл? Или ты его выкладывать не будешь?</p>
					<footer>
						<a href="http://blog.fxposter.org/" rel="external nofollow" class="url">FX Poster</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-606">31 августа ’08 в 3:11</a></time>
					</footer>
				</article>
				<article id="comment-607"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Добавил для m4v корректный mime-type. Спасибо )<br />
А сам бандл, как я уже говорил в статье, будет выпущен в третьем посте этой серии, сразу после Zen CSS. Когда я буду окончательно готов показать его…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-607">31 августа ’08 в 3:53</a></time>
					</footer>
				</article>
				<article id="comment-609"class="comment even thread-even depth-1">
					<p>Это космос.</p>
<p>Для TopStyle случаем нет ли чего похожего?</p>
					<footer>
						gmile						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-609">31 августа ’08 в 11:15</a></time>
					</footer>
				</article>
				<article id="comment-610"class="comment odd alt thread-odd thread-alt depth-1">
					<p>интересно эти сниппеты будут работать в e -texteditor'е?</p>
					<footer>
						<a href="http://arestov.habrahabr.ru" rel="external nofollow" class="url">Глеб Арестов</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-610">31 августа ’08 в 11:16</a></time>
					</footer>
				</article>
				<article id="comment-611"class="comment even thread-even depth-1">
					<p>Да, скорость очень важна. Сам уже давно пользуюсь большим списком автозамен в TopStyle, но было бы интересно посмотреть и на ваш. Кстати, в нем есть еще такая вещь как библиотека быстрой вставки &quot;Ctrl+Q&quot; (вдруг кому-нибудь пригодится).</p>
<p>Ну и еще, каким бы инструментом кто не пользовался, знать все хоткеи - очень полезно, и плюс, конечно, слепая печать, чем быстрее, тем лучше :)</p>
					<footer>
						William Kidd						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-611">31 августа ’08 в 12:01</a></time>
					</footer>
				</article>
				<article id="comment-612"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Отличный contrib! Жду линка, потестить бандл!</p>
					<footer>
						<a href="http://livedev.org" rel="external nofollow" class="url">ilya</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-612">31 августа ’08 в 12:20</a></time>
					</footer>
				</article>
				<article id="comment-613"class="comment even thread-even depth-1">
					<p>в емаксе есть набор шорткатов (которые, разумеется, можно дополнять и изменять), занимающихся тем же самым. а вообще имхо, разумнее было бы потратить время на освоение слепой и быстрой печати :)</p>
					<footer>
						<a href="http://fiskus-boulder.livejournal.com" rel="external nofollow" class="url">fiskus_boulder</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-613">31 августа ’08 в 13:02</a></time>
					</footer>
				</article>
				<article id="comment-614"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я один пользуясь «Adobe Dreamweaver CS3» (а режиме  «Code» естественно)? Не видел ни одного упоминания в темах типа  «5 программ, которые я использую каждый день» в блогах веб-разработчиков о «Dreamweaver». Наверное все думают, что в нем только как в «MS Publisher» можно сайты визуально делать…</p>
					<footer>
						<a href="http://www.codeisart.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-614">31 августа ’08 в 14:57</a></time>
					</footer>
				</article>
				<article id="comment-615"class="comment even thread-even depth-1">
					<p>а ты питерских своих JetBrains специально игнорируешь? :)</p>
<p>p.s у тебя command+enter не работает</p>
					<footer>
						tyv						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-615">31 августа ’08 в 15:53</a></time>
					</footer>
				</article>
				<article id="comment-616"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Как бы этот Textmate ещё научить понимать кодировку cp1251?</p>
					<footer>
						<a href="http://elv1s.ru/" rel="external nofollow" class="url">ELV1S</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-616">31 августа ’08 в 15:54</a></time>
					</footer>
				</article>
				<article id="comment-617"class="comment even thread-even depth-1">
					<blockquote><p>Для TopStyle случаем нет ли чего похожего?</p></blockquote>
<p>Там есть список автозамен, я даже в своё время таскал с собой с системы на систему папочку User и reg-файл с настройками горячих клавиш и подсветки. Отыщу — могу выложить в качестве примера.</p>
<blockquote><p>интересно эти сниппеты будут работать в e-texteditor'е?</p></blockquote>
<p>Потенциально — да. Но во что это обернётся на практике в столкновении с особенностями Windows…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-617">31 августа ’08 в 16:15</a></time>
					</footer>
				</article>
				<article id="comment-618"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>разумнее было бы потратить время на освоение слепой и быстрой печати</p></blockquote>
<p>Так вроде всё в порядке со слепой печатью. Вопрос в том, что можно ещё быстрее — и вы тому свидетель. Ни одна супер-техника слепой печати не сможет обогнать подобные подстановки для всех случаев. Хотя бы потому, что клавиатура начнёт дымиться )</p>
<blockquote><p>Я один пользуясь «Adobe Dreamweaver CS3»?</p></blockquote>
<p>Боюсь, что да ) Хотя нет, знаю я ещё одного человека, который скорбил о закрытии Adobe GoLive…</p>
<blockquote><p>а ты питерских своих JetBrains специально игнорируешь?</p></blockquote>
<p>Не-не-не, Дэвид Блэйн… Ты предлагаешь мне использовать полевой комбайн для того, чтобы подровнять усы?</p>
<blockquote><p>Как бы этот Textmate ещё научить понимать кодировку cp1251?</p></blockquote>
<p>Боюсь, что никак ( Благо исчезает эта недо-кодировка. А на крайний случай у меня ещё осталась Coda ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-618">31 августа ’08 в 16:15</a></time>
					</footer>
				</article>
				<article id="comment-619"class="comment even thread-even depth-1">
					<p>Octane, чтобы понять, почему Adobe Dreamweaver не популярен в кругах разработчиков, достаточно посмотреть на его цену ;)</p>
					<footer>
						Александр						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-619">31 августа ’08 в 16:50</a></time>
					</footer>
				</article>
				<article id="comment-621"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Насчет E-Texteditor - сниппеты абсолютно аналогичны текстмейтовским, так что проблем быть не должно. Хотя лично мне E не нравиться - я предпочитаю Intype, хотя его функциональность не дотягивает до E, но с ним как-то приятнее обращаться.</p>
<p><strong>pepelsbey</strong><br />
Да не за что. :) Просто у меня квиктайм не стоит, а ставить влом было, вот и напоролся. :)</p>
					<footer>
						<a href="http://blog.fxposter.org/" rel="external nofollow" class="url">FX Poster</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-621">1 сентября ’08 в 0:25</a></time>
					</footer>
				</article>
				<article id="comment-622"class="comment even thread-even depth-1">
					<p><em>А сам бандл, как я уже говорил в статье, будет выпущен в третьем посте этой серии</em><br />
Пропустил :)</p>
					<footer>
						<a href="http://blog.fxposter.org/" rel="external nofollow" class="url">FX Poster</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-622">1 сентября ’08 в 0:35</a></time>
					</footer>
				</article>
				<article id="comment-623"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Жаль, что в TopStyle нет UTF, приходится открывать Notepad++</p>
					<footer>
						Egor						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-623">1 сентября ’08 в 1:15</a></time>
					</footer>
				</article>
				<article id="comment-624"class="comment even thread-even depth-1">
					<p>По мне так лучше отсутствие win1251… В общем, как уже говорилось — идеального редактора не существует.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-624">1 сентября ’08 в 1:17</a></time>
					</footer>
				</article>
				<article id="comment-626"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Что же ты ⌘2 ⌘3 и ⌘4 перекрываешь? А как табы потом переключать?<br />
И ещё одно, ты недооцениваешь дефолтный bundle.</p>
<pre>
<code>! → все конд. комменты</code>
<code>div → div с id</code>
<code>script →</code>
<code>scriptsrc →</code>
<code>input →</code>
<code>mailto →</code>
<code>meta →</code>
<code>form →</code>
<code>table →</code>
</pre>
<p>Я её слегка подтачиваю напильником время от времени, но в целом доволен.</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-626">1 сентября ’08 в 5:48</a></time>
					</footer>
				</article>
				<article id="comment-627"class="comment even thread-even depth-1">
					<p>Дефолтные бандлы плохи тем, что их нужно изучать. А свои хороши тем, что делаешь именно то, что нужно. Ну а табы переключаю Alt + Cmd + →</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-627">1 сентября ’08 в 9:24</a></time>
					</footer>
				</article>
				<article id="comment-630"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, я предлагаю не изобретать свой Zen CSS, а использовать мой из IntelliJ Idea, который мы уже используем полгода как. Просто адаптировать его под TextMate, а оббревиатуры оставить теми же. Для большей совместимости.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-630">1 сентября ’08 в 9:39</a></time>
					</footer>
				</article>
				<article id="comment-631"class="comment even thread-even depth-1">
					<blockquote><p>а ты питерских своих JetBrains специально игнорируешь?<br />
Не-не-не, Дэвид Блэйн… Ты предлагаешь мне использовать полевой комбайн для<br />
того, чтобы подровнять усы?</p></blockquote>
<p>Вадим, ты не прав. Ты же даже не пробовал плотно. Там есть очень много вкусного.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-631">1 сентября ’08 в 9:42</a></time>
					</footer>
				</article>
				<article id="comment-637"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>предлагаю не изобретать свой Zen CSS, а использовать мой из IntelliJ Idea</p></blockquote>
<p>Он уже давно изобретён и успешно используется.<br />
А совместимость… вроде на выходе один и тот же CSS?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-637">1 сентября ’08 в 13:18</a></time>
					</footer>
				</article>
				<article id="comment-638"class="comment even thread-even depth-1">
					<p>Хм. А можно ли что-то подобное реализовать в NP++? Уверен, что можно, но как? Макросы?</p>
					<footer>
						<a href="http://webdev.lovata.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-638">1 сентября ’08 в 16:49</a></time>
					</footer>
				</article>
				<article id="comment-639"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Кажется Agat в своё время был фанатом NP++, стукнись к нему )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-639">1 сентября ’08 в 22:21</a></time>
					</footer>
				</article>
				<article id="comment-640"class="comment even thread-even depth-1">
					<p><strong>Zigzag</strong><br />
Попробуй e text editor или intype. В notepad++ НОРМАЛЬНОГО аналога сниппетов не сделать...</p>
					<footer>
						<a href="http://blog.fxposter.org/" rel="external nofollow" class="url">FX Poster</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-640">1 сентября ’08 в 23:04</a></time>
					</footer>
				</article>
				<article id="comment-641"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Zigzag :-Р</p>
<p>Посмотрел видео - потекли слюнки. Стал ковыряться, нашел плагин к NP++<br />
на <a href="http://notepad-plus.sourceforge.net/ru/site..html" rel="nofollow">сайте NP++</a> называется QuickText</p>
<p>В описании сказано, что можно можно создавать вручную теги автозаполнения. Сейчас буду разбираться (=</p>
					<footer>
						Myx						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-641">2 сентября ’08 в 0:34</a></time>
					</footer>
				</article>
				<article id="comment-642"class="comment even thread-even depth-1">
					<p>Я рад, что этот bundle не затронет твои привычки. Но он затронет привычки многих других пользователей, а это плохо. Изучать дефолтные бандлы — это очень полезное занятие, особенно если собираешься создать свой со схожей функциональностью.</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-642">2 сентября ’08 в 5:22</a></time>
					</footer>
				</article>
				<article id="comment-643"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Виталий, я предлагаю выставить на всеобщее обозрение наработки. Меня вот коллеги всё на IDEA пытаются пересадить, а я упираюсь. Может зря?</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-643">2 сентября ’08 в 5:26</a></time>
					</footer>
				</article>
				<article id="comment-644"class="comment even thread-even depth-1">
					<blockquote><p>он затронет привычки многих других пользователей, а это плохо</p></blockquote>
<p>Право предлагать свои банглы мне даёт ощущение, что дефолтные продуманы не очень хорошо. Точнее, сделаны без особого упора на эффективность.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-644">2 сентября ’08 в 10:20</a></time>
					</footer>
				</article>
				<article id="comment-645"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Изучать дефолтные бандлы — это очень полезное занятие</p></blockquote>
<p>Наверное, я всё-таки неудачно выразился. Дефолтные бандлы как раз хороши для того, чтобы их изучать и править под себя. Но когда понимаешь, что в них нет сквозной логики, то приходишь именно к этому — написанию своих, причём с нуля.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-645">2 сентября ’08 в 11:24</a></time>
					</footer>
				</article>
				<article id="comment-646"class="comment even thread-even depth-1">
					<p>Спасибо. Теперь в e-text editor работать станет еще удобнее.</p>
					<footer>
						<a href="http://a-shapovalov.livejournal.com/" rel="external nofollow" class="url">mongoose</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-646">2 сентября ’08 в 15:26</a></time>
					</footer>
				</article>
				<article id="comment-647"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>Там есть список автозамен, я даже в своё время таскал с собой с системы на систему папочку User и reg-файл с настройками горячих клавиш и подсветки. Отыщу — могу выложить в качестве примера.</cite><br />
Не нашли случайно?</p>
					<footer>
						stolho						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-647">3 сентября ’08 в 12:23</a></time>
					</footer>
				</article>
				<article id="comment-653"class="comment even thread-even depth-1">
					<p><a href="http://www.vimeo.com/1663309" rel="nofollow">Наш ответ Пепелсбею</a> :D</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-653">4 сентября ’08 в 9:09</a></time>
					</footer>
				</article>
				<article id="comment-657"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Заинтриговал! Не томи, выкладывай бандлы =]</p>
					<footer>
						<a href="http://www.reactant.ru" rel="external nofollow" class="url">ATimofeev</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-657">4 сентября ’08 в 18:23</a></time>
					</footer>
				</article>
				<article id="comment-658"class="comment even thread-even depth-1">
					<p>Думаю на выходных будет Zen CSS, а на неделе оба бандла, примерно так )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-658">4 сентября ’08 в 18:40</a></time>
					</footer>
				</article>
				<article id="comment-661"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>stolho,</strong> пока не нашёл, но если и откопаю то вряд ли буду выкладывать в общий доступ — разве что в личном порядке. По-хорошему, там есть редактор подстановок и всё можно сделать по аналогии, хотя бы приближенно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-661">5 сентября ’08 в 4:13</a></time>
					</footer>
				</article>
				<article id="comment-675"class="comment even thread-even depth-1">
					<p>Как в textmate/e-texteditor осуществить этот трюк с преобразованием некоторого количества строк в li-элементы?</p>
					<footer>
						<a href="http://oleg40a.in.ua" rel="external nofollow" class="url">Oleg40a</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-675">8 сентября ’08 в 13:43</a></time>
					</footer>
				</article>
				<article id="comment-681"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>@Vitaly Harisov</b>: также использую Idea для верстки. У неё есть один солидный плюс, в отличие от textmate -- кроссплатформенность. Может быть, все-таки поделитесь с миром своими наработками в этом плане?</p>
					<footer>
						Vasily Polovnyov						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-681">8 сентября ’08 в 18:25</a></time>
					</footer>
				</article>
				<article id="comment-682"class="comment even thread-even depth-1">
					<p><strong>Oleg40a,</strong> посмотрите здесь — <a href="http://projects.serenity.de/textmate/tutorials/basics/" rel="nofollow">TextMate Basics Tutorial</a></p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-682">8 сентября ’08 в 22:20</a></time>
					</footer>
				</article>
				<article id="comment-686"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>stolho, пока не нашёл, но если и откопаю то вряд ли буду выкладывать в общий доступ — разве что в личном порядке. По-хорошему, там есть редактор подстановок и всё можно сделать по аналогии, хотя бы приближенно.</p></blockquote>
<p>На счет TopStyle Pro - автозамену нашел. Но не смог понять возможно ли применение многострочности и табуляций заранее установленных. Т.е. исходя из вашего видео про верстку в TextMate видно что он сразу выдает удобные конструкции вида</p>
<pre>
<code>&lt;ul&gt;</code>
<code>&lt;li&gt;&lt;/li&gt;</code>
<code>&lt;li&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code>
</pre>
<p>а не</p>
<pre>
<code>&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;</code>
</pre>
<p>Хочу попробывать e-texteditor. Если он почти как TextMate - то я думаю в разряд лучшего средства для верстки под Windows можно будет занести его.</p>
<p>А вообще очень хочется взглянуть на ваши бандлы =)</p>
					<footer>
						stolho						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-686">9 сентября ’08 в 22:15</a></time>
					</footer>
				</article>
				<article id="comment-700"class="comment even thread-even depth-1">
					<p>Мне нравится автоподстановка в RJ TextEd. Удобно, но не приторно. И запоминать сочетания не надо.</p>
					<footer>
						Максим						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-700">12 сентября ’08 в 22:25</a></time>
					</footer>
				</article>
				<article id="comment-701"class="comment odd alt thread-odd thread-alt depth-1">
					<p>У подстановки есть большой минус. К примеру, пишу «ba…» и тут же получаю список: …attachment, …color, …repeat. И нужно либо тыкать в правильный пункт списка, либо продолжать набирать «background-c…» В итоге куча лишних действий.</p>
<p>HTML'ная подстановка может быть гораздо эффективнее из-за меньшего количества элементов, но опять же — не настолько быстрой.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-701">12 сентября ’08 в 22:32</a></time>
					</footer>
				</article>
				<article id="comment-731"class="comment even thread-even depth-1">
					<p>Вопросец по поводу TextMate =)<br />
Есть ли где-то у него подсветка открывающего и закрывающего тега? например кнопаешь на  а он подсвечивает его закрывающий тег  ?</p>
					<footer>
						stolho						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-731">15 сентября ’08 в 12:53</a></time>
					</footer>
				</article>
				<article id="comment-732"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Пока не встречал такого. Однако, он знает границы элемента — это видно по маркерам для сворачивания. Т.е. если свернуть элемент, будет понятно где он заканчивается. И вообще он довольно хорошо понимает код и умеет грамотно закрывать незакрытые теги по нажатию Cmd + Alt + .</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-732">15 сентября ’08 в 13:09</a></time>
					</footer>
				</article>
				<article id="comment-734"class="comment even thread-even depth-1">
					<p>А как сделать в бандлах, что бы при редактировании открывающего тега, автоматически менялся и закрывающийся. Посмотреть можно на видео: <a href="http://www.vimeo.com/1663309" rel="nofollow">http://www.vimeo.com/1663309</a></p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-734">17 сентября ’08 в 11:54</a></time>
					</footer>
				</article>
				<article id="comment-735"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Максим — Ctrl + Shift + , — это работает и в дефолтном бангле и в моём.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-735">17 сентября ’08 в 12:43</a></time>
					</footer>
				</article>
				<article id="comment-736"class="comment even thread-even depth-1">
					<p>Я имел ввиду чтобы не выделять мышкой. Но вообщем я уже понял как. Ты направил мои мысли в правильной русло.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-736">17 сентября ’08 в 14:03</a></time>
					</footer>
				</article>
				<article id="comment-751"class="comment odd alt thread-odd thread-alt depth-1">
					<p>У KomodoEdit подобное реализуется с помощью аббревиатур (единственное, что напрягает -- невозможность использовать в названиях символов а ля &quot;:&quot;)</p>
					<footer>
						Ви						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-751">19 сентября ’08 в 17:22</a></time>
					</footer>
				</article>
				<article id="comment-1008"class="comment even thread-even depth-1">
					<p><strong>stolho</strong>, по умолчанию нет. но теоритически можно реализовать. (обозначть текущий тег как scope и повесить на него какой-нить цвет в схеме)<br />
так реализована подсветка <a href="http://remysharp.com/2008/03/30/trailing-white-space-in-textmate/" rel="nofollow">Trailing white space</a>.</p>
					<footer>
						<a href="http://outofcloud.net" rel="external nofollow" class="url">KBA-KBA</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-1008">29 сентября ’08 в 14:05</a></time>
					</footer>
				</article>
				<article id="comment-1258"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Не буду оригинален: ты молодец. А эту страницу я своим архаровцам покажу. У нас TextMate любят.</p>
					<footer>
						Максим Россомахин						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-1258">11 октября ’08 в 13:49</a></time>
					</footer>
				</article>
				<article id="comment-1266"class="comment even thread-even depth-1">
					<p>CP1251 и TexMate есть <a href="http://higher.com.ua/news/131/textmate-i-windows-1251" rel="nofollow">решение</a> не идеальное, но рабочее.</p>
					<footer>
						<a href="http://higher.com.ua" rel="external nofollow" class="url">Дмитрий</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-1266">12 октября ’08 в 23:06</a></time>
					</footer>
				</article>
				<article id="comment-1277"class="comment odd alt thread-odd thread-alt depth-1">
					<p>ну так когда уже будет дзен СSS и выложены бандлы на общее обозрение?</p>
					<footer>
						<a href="http://yvelious.com" rel="external nofollow" class="url">GaN</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-1277">13 октября ’08 в 16:51</a></time>
					</footer>
				</article>
				<article id="comment-1498"class="comment even thread-even depth-1">
					<p>А этот редактор умеет различать, какой файл сейчас редактируется - html или xhtml, и можно ли это каким-то образом учесть при написании бандлов, чтобы, например, одиночные теги закрывались соответствующим образом?</p>
					<footer>
						smmurf						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-1498">28 октября ’08 в 14:39</a></time>
					</footer>
				</article>
				<article id="comment-1500"class="comment odd alt thread-odd thread-alt depth-1">
					<p>К сожалению, встроенного механизма анализа DOCTYPE не предусмотрено, поэтому для того, чтобы одиночные элементы закрывались, используется переменная TM_XHTML, которая устанавливается здесь: Preferences > Advanced > Shell Variables > + > variable: TM_XHTML, value: /</p>
<p>Понимаю, не очень гибко, но это является одной из самых важных вещей, которую (если это возможно) стоит внедрить в мой бандл.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-1500">28 октября ’08 в 15:57</a></time>
					</footer>
				</article>
				<article id="comment-2077"class="comment even thread-even depth-1">
					<p>Огромное спасибо за вашу работу. Думаю что при помощи ваших бандлов получится не плохо сократить время разработки, без потери качества ;) Замечательная идея с применением + для сложных конструкций.</p>
<p>Есть пара мыслей, по поводу развития ваших бандлов, как созрею обязательно поделюсь.</p>
<p>Еще раз респект!</p>
					<footer>
						Kirill						<time pubdate datetime="2008-08-31T02:17:03+00:00"><a href="index.html#comment-2077">22 ноября ’08 в 21:27</a></time>
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
	<!-- 26 & 0,628 -->
</body>
</html>
