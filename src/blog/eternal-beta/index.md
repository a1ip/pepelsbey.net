<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Вечная бета — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Вечная бета</a></h1>
				<time pubdate datetime="2010-01-12T16:56:21+00:00">12 января ’10</time>
			</header>
			<p>Когда коду сайта исполняется <a href="/2008/11/like-a-virgin/">полтора года</a>, а дизайну <a href="/2008/02/second-breath/">целых два</a>, то становится как-то совсем неудобно. Нет — всё работает, живёт и периодически даже патчится, но жизнь требует чего-то нового. Поэтому ещё в августе прошлого года была начата разработка новой версии этого сайта. Было решено не только сделать новый дизайн и подновить код, но и сильно упростить архитектуру сайта, раз уж изначальная задумка с заметками и статьями, по сути, провалилась.</p>

<h2>Архитектура</h2>

<p>После продолжительной агонии, с сайта исчезли рубрики и теперь существует всего одна главная витрина с последним постом и списком всех публикаций, спрятанным в разворачивающуюся гармошку. Основным средством для поиска предыдущих публикаций стала вспомогательная страница «<a href="/search/">Поиск</a>», которая содержит упомянутый выше архив публикаций и форму поиска — пока силами Яндекса, но потом, возможно, появится возможность выбирать и Google.</p>

<p>Меньше всего изменений пришлось на страницу «<a href="/author/">Об авторе</a>», на которой добавилось несколько социальных сервисов и рабочий e-mail.</p>

<h2>Дизайн</h2>

<p>Главной задачей для нового дизайна было отказаться от белых коробок и инверсного текста, оставив прежнюю цветовую гамму. При этом, хотелось подчеркнуть простоту архитектуры, убрав ненужную колонку. Получилось или нет — увидим в комментариях к записи…</p>

<h2>Технологии</h2>

<p>Как бы это ни было сложно, но HTML-код сайта старается соответствовать <a href="http://dev.w3.org/html5/spec/spec">черновику спецификации HTML5</a>. Более того, пока даже получается <a href="http://html5.validator.nu/?doc=http://pepelsbey.net/">проходить валидацию</a>. И самое минимальное: отказ от <abbr title="Extensible Hypertext Markup Language">XHTML</abbr>, новый доктайп <code>&lt;!DOCTYPE HTML&gt;</code>, новая семантика языка <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;time&gt;</code>. По этой причине пока пользователи IE видят не самые приятные вещи, но почему так — чуть ниже.</p>

<p>Пересмотру подверглись некоторые элементы: фрагмент кода теперь состоит из элемента <code>&lt;pre&gt;</code> и <code>&lt;code&gt;</code>, по количеству строк:</p>

<pre><code>&lt;pre&gt;</code>
<code>    &lt;code&gt;&lt;/code&gt;</code>
<code>    &lt;code&gt;&lt;/code&gt;</code>
<code>&lt;pre&gt;</code></pre>

<p>…а уменьшенные версии картинок построены на элементе <code>&lt;figure&gt;</code>:</p>

<pre><code>&lt;figure&gt;</code>
<code>    &lt;dd&gt;&lt;img src="…" alt="Описание"&gt;&lt;/dd&gt;</code>
<code>    &lt;dt&gt;Описание&lt;/dt&gt;</code>
<code>&lt;figure&gt;</code></pre>

<p>На примеры использования таких картинок, а также работу новой версии <a href="/2009/02/darkbox-2/">Даркбокс</a>, можно взглянуть в заметке <a href="/2008/10/firefox-vs-photoshop/">Firefox против Photoshop</a>. Ну и конечно же CSS 3: от пресловутых веб-шрифтов и <code>border-radius</code> до <code>transition</code>, из-за чего код местами распух от вендорных префиксов:</p>

<pre><code>-webkit-transition:background-color .2s linear;</code>
<code>-moz-transition:background-color .2s linear;</code>
<code>-o-transition:background-color .2s linear;</code>
<code>transition:background-color .2s linear;</code></pre>

<p>Также гораздо смелее стали использоваться селекторы: от простых <code>E &gt; E</code> и <code>E + E</code> до <code>E:first-of-type</code>. К сожалению, с некоторыми конструкциями не справляется даже IE8.</p>

<h2>Концепция</h2>

<p>Но самое главное, чего хотелось добиться всем этим редизайном и рекодингом — это создание, так называемой, вечной беты. Весьма популярная <em>вебдванольная</em> концепция, надо сказать. К примеру, сейчас сайт прилично работает исключительно в последних версиях браузеров. В тех, что пораньше — сносно. А если говорить про IE, то там творится форменное безумие, которое и предстоит поправить на одном из этапов развития вечной беты. И хотя из посетителей этого сайта на долю IE приходится всего <q>семь процентов людей и иных представителей человеческой расы</q>, доступность для чтения нужно обеспечить всем. Та же история с версией для печати, мобильных устройств и даже микроформатами. После каждого этапа в развитии — публикация. Думаю, это будет интересно.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>50</small>
				</header>
				<article id="comment-4336"class="comment even thread-even depth-1">
					<p>Про eot-шрифты забыл ;)</p>
					<footer>
						<a href="http://pro-stream.org" rel="external nofollow" class="url">Алекс Дорохович</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4336">12 января ’10 в 17:04</a></time>
					</footer>
				</article>
				<article id="comment-4337"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Все очень чистенько и приятно глазу выглядит. Даже страшно писать здесь комментарий, испорченный каким-либо ошибками. =)</p>
					<footer>
						<a href="http://lovtsevich.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4337">12 января ’10 в 17:05</a></time>
					</footer>
				</article>
				<article id="comment-4338"class="comment even thread-even depth-1">
					<p>О, не хватает подписки на комментарии к записи!</p>
					<footer>
						<a href="http://lovtsevich.com" rel="external nofollow" class="url">Zigzag</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4338">12 января ’10 в 17:10</a></time>
					</footer>
				</article>
				<article id="comment-4339"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Семь процентов! Конец уже близок...  Не могу поверить, что всё это веселье вокруг IE скоро закончится. Это ж сколько времени на это всё было потрачено, сколько гигабайт статей по этому поводу было написано и сколько матюков высказано.<br />
А лет через 5 соберутся старпёры, и начнут рассказывать молодняку: "Эх, сынки. В наше время :first-child не работал, и приходилось через expression. Как? Вы не знаете что такое expression?"<br />
Кстати, иконка возле заголовка "Комментарии" напомнила <a href="http://habrahabr.ru/blogs/adobe/14196/" rel="nofollow">старую телегу</a>.</p>
					<footer>
						<a href="http://m1ron.com" rel="external nofollow" class="url">m1ron</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4339">12 января ’10 в 17:29</a></time>
					</footer>
				</article>
				<article id="comment-4340"class="comment even thread-even depth-1">
					<p>Не хватает какой-то общей рубрикации вроде карты сайта, где был бы список всего. Кнопочек «ещё» приходится нажимать мало, но уже начинает надоедать. А ещё ссылки Яндекса результатов поиска открываются в новом окне, что в данном случае скорее избыточно.</p>
					<footer>
						<a href="http://my.opera.com/GreLI/" rel="external nofollow" class="url">GreLI</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4340">12 января ’10 в 17:30</a></time>
					</footer>
				</article>
				<article id="comment-4341"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Очень хороший редизайн. Единственное, смущает громоздкость блоков с кодом. Слишком резко нумерация строк вылезает за левый край. Понимаю, это в угоду сетки, но их будто врезали сюда наждаком, теперь нужно поработать пилочкой :) Это моё субъективное мнение по данной мелочи, а новый блог очень нравится.</p>
					<footer>
						Дмитрий						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4341">12 января ’10 в 17:34</a></time>
					</footer>
				</article>
				<article id="comment-4342"class="comment even thread-even depth-1">
					<p>Поздравляю с новым дизайном! Сайт стал легче и воздушнее))<br />
Вот только узкий шрифт заголовков смотрится как-то странно.. Наверно потому, что не установлен шрифт Cuprum в системе.<br />
Очень понравилась упрощённая структура сайта - лента записей со ссылкой "Ещё", как в Твиттере. Удобно.<br />
Кнопка "Добавить" смотрится классно. И реализация понравилась.<br />
А с чем связано введение элемента code по количеству строк? Это для нумерации строк?</p>
					<footer>
						<a href="http://alex.kotomanov.com" rel="external nofollow" class="url">alex.kotomanov</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4342">12 января ’10 в 17:38</a></time>
					</footer>
				</article>
				<article id="comment-4343"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Проблемы с отступами у заголовков в статье. Отступ сверху должен быть больше, чем снизу, если заголовок принадлежит тексту ниже.</p>
					<footer>
						Антон						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4343">12 января ’10 в 17:57</a></time>
					</footer>
				</article>
				<article id="comment-4344"class="comment even thread-even depth-1">
					<p>Мне почему то кажется что не стоит в архиве внизу под записью на главной дублировать заголовок той записи что на главной.</p>
					<footer>
						<a href="http://belazauto.ru/" rel="external nofollow" class="url">Zuzle</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4344">12 января ’10 в 18:00</a></time>
					</footer>
				</article>
				<article id="comment-4345"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Рубрики убраны зря. Поиск помогает только в том случае, если знаешь, чего ищешь. Есть такой кейс: «посмотреть, нет ли тут чего-то интересного на интересующую меня тему». Вот тут рубриктор и помогает.</p>
					<footer>
						<a href="http://yakovis.com" rel="external nofollow" class="url">Michael Yakovis</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4345">12 января ’10 в 18:09</a></time>
					</footer>
				</article>
				<article id="comment-4346"class="comment even thread-even depth-1">
					<p>Смотрится симпатично, но есть 2 замечания:<br />
1. При копировании кода, копируются также и номера строк.<br />
2. Было бы неплохо разместить окошко поиска на каждой странице (например, в хедере).</p>
					<footer>
						Megazoll						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4346">12 января ’10 в 18:17</a></time>
					</footer>
				</article>
				<article id="comment-4348"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, очень порадовал мой глаз обновленным и «беленьким чистеньким»™</p>
<p>Позволь отметить несколько моментов:<br />
1. Странно, что поле поиска недоступно <em>непосредственно</em> с любой страницы.</p>
<p>2. Твой блог достаточно информативен и при этом интересен, чтобы посетителю хотелось листать посты еще и еще. Сейчас я не вижу такой возможности даже на уровне предыдущий/следующий. Необходима какая-то навигация.</p>
<p>3. В комментариях можно уменьшить шум и увеличить актуальность если выводить дату и время следующим образом:<br />
 · только время — для комментов за последние 24 часа<br />
 · только время, число и месяц — для комментов этого года<br />
 · время и дату с годом — для бородатых комментов</p>
<p>4. OpenID будет? ;)</p>
					<footer>
						<a href="http://miripiruni.org/" rel="external nofollow" class="url">miripiruni</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4348">12 января ’10 в 18:43</a></time>
					</footer>
				</article>
				<article id="comment-4351"class="comment even thread-even depth-1">
					<p>О, наконец-то светлый фон, и заметки теперь можно будет читать не только через RSS. ;-) Переход на HTML5, по-моему, является слегка преждевременным, но инициатива похвальна. Удачи, Вадим.</p>
					<footer>
						<a href="http://tanalin.com" rel="external nofollow" class="url">MT</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4351">12 января ’10 в 19:31</a></time>
					</footer>
				</article>
				<article id="comment-4356"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Алекс Дорохович,</strong> EOT будет вместе с поддержкой IE.</p>
<p><strong>GreLI, Michael Yakovis,</strong> навигация точно будет развиваться, может появятся теги, а вот рубрик больше не хочется. Мне кажется лента заметок будет гораздо удобнее.</p>
<p><strong>alex.kotomanov,</strong> да — без построчных <code>&lt;code&gt;</code> нумерацию не сделать.</p>
<p><strong>Антон,</strong> согласен, заголовки нужно отбить умнее. Это, в принципе, легко решаемо. С уровнями заголовков разбирался в самый последний момент, поэтому не слишком гладко.</p>
<p><strong>miripiruni, Zigzag,</strong> OpenID + подписка на комментарии будут в том случае, если отыщутся приличные плагины. Те, что есть сейчас слишком много гадят в код, а для меня это недопустимо.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4356">12 января ’10 в 23:38</a></time>
					</footer>
				</article>
				<article id="comment-4357"class="comment even thread-even depth-1">
					<p>Не все знают песню про 7% :) Введёшь людей в заблуждение :)) А дизайн отличный, я смотрю теперь на свой и громко плачу :)</p>
					<footer>
						<a href="http://bolknote.ru/" rel="external nofollow" class="url">BOLK</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4357">12 января ’10 в 23:41</a></time>
					</footer>
				</article>
				<article id="comment-4358"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Каково логичное обоснование использования code для каждой строчки кода?</p>
<p>Белый фон — хорошо. Стало приятней.</p>
					<footer>
						<a href="http://rmcreative.ru/" rel="external nofollow" class="url">Sam</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4358">12 января ’10 в 23:46</a></time>
					</footer>
				</article>
				<article id="comment-4359"class="comment even thread-even depth-1">
					<p><strong>BOLK,</strong> если бы все знали про песню — я бы не рискнул ;) А вообще и правда всего 7%, аудитория специфическая.</p>
<p><strong>Sam,</strong> логическое обоснование состоит в том, что мне важно разделить код построчно, чтобы иметь возможность сослаться на строку, поэтому происходит группировка. Т.е. не чисто оформительское.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4359">12 января ’10 в 23:50</a></time>
					</footer>
				</article>
				<article id="comment-4361"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вообще рубрики убраны зря. Тем, кто хочет почитать «на тему Zen Coding» — самое оно. Может сделать отдельную навигационную страницу?</p>
					<footer>
						<a href="http://rmcreative.ru/" rel="external nofollow" class="url">Sam</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4361">13 января ’10 в 0:02</a></time>
					</footer>
				</article>
				<article id="comment-4363"class="comment even thread-even depth-1">
					<p><strong>Megazoll,</strong> строки копируются только в Opera. Safari и Firefox копируют только код. Хороший повод для багрепорта/фичереквеста.</p>
<p><strong>Sam,</strong> думаю эту задачу прекрасно решат теги. Можно сделать страничку с облаком или дополнить страницу «Поиск», но тогда нужно будет её переименовывать. Очень не хочется заводить колонки, но посмотрим.</p>
<p><strong>miripiruni,</strong> тогда с тебя php-код для вывода умной даты, хе-хе :) Хотя думаю, что есть плагины, покопаюсь.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4363">13 января ’10 в 0:46</a></time>
					</footer>
				</article>
				<article id="comment-4364"class="comment odd alt thread-odd thread-alt depth-1">
					<pre>
<code>&lt;header class="header" role="banner"&gt;&lt;/header&gt;</code>
</pre>
<p>Как по мне...это немного нарушает семантику</p>
<p>А вообще сайт очень порадовал, семантика на высоте. </p>
<p>И такое замечание, может вопрос. Я нигде не видел, чтобы после тега html ставили отступ. Месяца два уже ставлю этот отступ, мне это кажется удобным и более правильным, ведь далее идут вложенные элементы.</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4364">13 января ’10 в 0:54</a></time>
					</footer>
				</article>
				<article id="comment-4366"class="comment even thread-even depth-1">
					<p>Все таки есть небольшие помарки и небольшие грубости :)</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4366">13 января ’10 в 1:41</a></time>
					</footer>
				</article>
				<article id="comment-4368"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Алексей,</strong> а что именно не нравится в главной шапке? И остальные помарки и грубости тоже интересуют. Если не здесь, то можно и в почте, но я думаю остальным тоже будет интересно.</p>
<p>Насчёт <code>&lt;html&gt;</code> — исходник должен быть не фанатично вылизан, а, прежде всего, удобен в работе. Делать отступы везде, где есть вложенность — это фанатизм. Я, к примеру, не делаю отступов и для <code>&lt;tr&gt;</code>, поскольку для меня они не добавляют удобства.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4368">13 января ’10 в 2:22</a></time>
					</footer>
				</article>
				<article id="comment-4376"class="comment even thread-even depth-1">
					<p>С обновлением. Чисто и аккуратно.<br />
Заголовок в посте ссылается саму на себя.<br />
Особенно понравился эффект при наведении на логотип.</p>
					<footer>
						<a href="http://sweedbes.com" rel="external nofollow" class="url">sweedbes</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4376">13 января ’10 в 11:07</a></time>
					</footer>
				</article>
				<article id="comment-4379"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А вот страницу «Об авторе»-то как раз и нужно было исправить. «Может пригодится» — не хватает либо мягкого знака, либо пары запятых.</p>
					<footer>
						Сергей К.						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4379">13 января ’10 в 12:55</a></time>
					</footer>
				</article>
				<article id="comment-4383"class="comment even thread-even depth-1">
					<p>белый фон, черный текст -- это хорошо, это правильно.</p>
					<footer>
						<a href="http://sunnyfetis.livejournal.com" rel="external nofollow" class="url">sunnyfetis</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4383">13 января ’10 в 16:59</a></time>
					</footer>
				</article>
				<article id="comment-4397"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, дизайн очень понравился. И сам принцип вечной бэты тоже —  HTML5, CSS3 все дела :) </p>
<p>Единственно, может добавить к списку Поиск и Об авторе еще и Архив? :)  Серьезно. Ведь не каждый будет скролить вниз. Например у меня было 2-х секундное замешательство с вопросом — А где же архив?</p>
<p>Кстати от скрытой навигации <code>skipto</code> решили отказаться?</p>
					<footer>
						Геннадий Уханов						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4397">14 января ’10 в 6:12</a></time>
					</footer>
				</article>
				<article id="comment-4404"class="comment even thread-even depth-1">
					<p>Насчет отступов...наверно я фанатик :) Но для меня удобно, да никто из программистов, берущих мою верстку не жаловался никогда. </p>
<p>В шапке...Для меня всегда слово header это блок с верху сайта с лого, может меню и т.п. У вас этот тег встречается и в записях. Для меня это немного не понятно, да, смысл есть, но что-то не то.</p>
<p>Насчет грубостей...Как по мне при клике на Ещё в Архиве записи появляются чересчур грубо. Может стоить уменьшить скорость скролинга или сделать ступенчатое добавление(не все вместе блоки, а по очереди).</p>
<p>В файле <strong>script.js</strong>:<br />
Не логично использована обертка
<pre>
<code>( function ( $ ) {</code>
<code>} ( jQuery ) );</code>
</pre>
<p> Обычно она используется для режима совместимости с другими библиотеками, т.е. в обертку должен входить весь код на jQuery.
<pre>
<code>(function($){</code>
<code>    $(function(){</code>
<code>        //Некий код</code>
<code>    });</code>
<code>})(jQuery)</code>
</pre>
<p> А сам jQuery я бы грузил с гугла (межсайтовый кеш работает...) </p>
<p>Ну это все моё мнения и вкусы :)</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4404">14 января ’10 в 13:30</a></time>
					</footer>
				</article>
				<article id="comment-4405"class="comment odd alt thread-odd thread-alt depth-1">
					<pre>
<code>&lt;div class="header-wrap"&gt;</code>
<code>&lt;/div&gt;</code>
</pre>
<p> По-мойму этот блок лишний, у вас на нем только фон...но этот фон ведь можно повесить на body. Если я не прав, объясните почему.</p>
<p>В коде я нигде не нашел теги <code>h1</code> Вроде бы на них поисковики обращают особое внимание. Да и сайт без "самых главных заголовков" как бы получается :) Могу опять же ошибаться, хотел бы услышать ваше мнение.</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4405">14 января ’10 в 13:39</a></time>
					</footer>
				</article>
				<article id="comment-4407"class="comment even thread-even depth-1">
					<p><strong>Сергей К.,</strong> спасибо за «мягкий знак». Текст столько раз был читан-перечитан, что я в нём не сомневался.</p>
<p><strong>Геннадий Уханов,</strong> изначально там и была ссылка «Архив», но она казалась лишней, т.к. выглядела как пункт меню, а работала как якорь. Согласен, что нужно придумать что-то для прокрутки к архиву вниз. Частично меня утешает наличие архива на странице поиска. А skipto планируется добавить.</p>
<p><strong>Алексей,</strong> насчёт элемента <code>&lt;header&gt;</code> вам стоит почитать черновик HTML 5, где <a href="http://dev.w3.org/html5/spec/semantics.html#the-header-element" rel="nofollow">описывается</a> его применение. Я делал всё в рамках задуманной логики. Обёртка для скрипта была взята из <a href="http://docs.jquery.com/How_jQuery_Works#jQuery:_The_Basics" rel="nofollow">официальной документации</a> и лишена ненужного document.ready. Не очень понятно в чём здесь ошибка. Совместимость с другими библиотеками здесь не нужна.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4407">14 января ’10 в 14:23</a></time>
					</footer>
				</article>
				<article id="comment-4408"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Алексей,</strong> заголовок на странице поста и правда потерялся в шаблоне, теперь он на месте — спасибо! Насчёт <code>header-wrap</code>: у шапки два фона, поэтому пришлось бы класть их на <code>&lt;body&gt;</code> или одной картинкой или с чётким пиксельным смещением. Или же фиксировать высоту шапки в пикселах, тогда как сейчас высота шапки регулируется отступами ссылок в меню. В общем, это просто чуть более гибко и я не гнался за минимальным количеством элементов.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4408">14 января ’10 в 14:33</a></time>
					</footer>
				</article>
				<article id="comment-4409"class="comment even thread-even depth-1">
					<p>Ну с <code>header</code> в записях я все рано не согласен :) Пусть это рекомендация, я пока не согласен.</p>
<p>Ещё вы используете
<pre>
<code>&lt;span&gt;&lt;/span&gt;</code>
</pre>
<p> в заголовке...а как же before или after?</p>
<p>Ошибка в JS...Вам нужно обернуть весь код в обертку. у вас же обернут только darkbox...<code>document.ready</code> у вас есть, но в кратком варианте...</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4409">14 января ’10 в 14:51</a></time>
					</footer>
				</article>
				<article id="comment-4411"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну c JS, если совместимость не нужна, то строки вообще можно удалить :)</p>
<pre>
<code>( function ( $ ) {</code>
<code>} ( jQuery ) );</code>
</pre>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4411">14 января ’10 в 14:59</a></time>
					</footer>
				</article>
				<article id="comment-4415"class="comment even thread-even depth-1">
					<p><strong>Алексей,</strong> просто <code>&lt;header&gt;</code> — это универсальный заголовочный структурный блок. Экстра <code>&lt;span&gt;</code> вложен потому, что <code>:before</code> для ссылки некликабелен — что для лого, что для заголовков.</p>
<p>Насчёт JS: я к тому и говорил, что <code>document.ready</code> в кратком варианте. А darkbox был обёрнут потому, что пишется как отдельный плагин, вот я и вставил его как есть, уже поправил.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4415">14 января ’10 в 15:23</a></time>
					</footer>
				</article>
				<article id="comment-4419"class="comment odd alt thread-odd thread-alt depth-1">
					<p>:before для ссылки некликабелен - не знал...странно...по логике  вроде должен.<br />
Все больше ни к чему придраться не могу, вы мастер! Моё почтение :)</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4419">14 января ’10 в 16:00</a></time>
					</footer>
				</article>
				<article id="comment-4421"class="comment even thread-even depth-1">
					<p>Вадим, попробуйте немного изменить JS появления архива заметок...<br />
<a href="http://code.pascalgames.net/code.php?id=41" rel="nofollow">http://code.pascalgames.net/code.php?id=41</a></p>
<p>Мне просто нечего было делать, это как чаепитие :)</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4421">14 января ’10 в 17:12</a></time>
					</footer>
				</article>
				<article id="comment-4422"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Алексей,</strong> попробовал. В принципе, у меня так и работала самая первая реализация и этот вариант чуть понятнее для глаз. Но он сильно длиннее. Будем пробовать. Спасибо за тестирование и советы ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4422">14 января ’10 в 17:22</a></time>
					</footer>
				</article>
				<article id="comment-4424"class="comment even thread-even depth-1">
					<pre>
<code>frame.stop();</code>
</pre>
<p> Хотя бы поставьте...при клике по Ещё, просто если кликнуть по Ещё до завершения скрола, то последующей анимации скрола нет.</p>
					<footer>
						Алексей						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4424">14 января ’10 в 17:36</a></time>
					</footer>
				</article>
				<article id="comment-4428"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Главная очень понравилась. Сам концепт.<br />
P.S.<br />
А подписку на комментарии ты так и не сделал.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4428">15 января ’10 в 0:34</a></time>
					</footer>
				</article>
				<article id="comment-4429"class="comment even thread-even depth-1">
					<p><strong>Максим,</strong> с подпиской есть два варианта: а) написать плагин самому б) найти хороший. На первое не времени (ибо писать буду неделю), а второго пока не существует. Сплошная ерунда, которая гадит в код, делает 5 страниц в админке, пытается залезть JS'ом в <code>get_header();</code> и вообще…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4429">15 января ’10 в 0:40</a></time>
					</footer>
				</article>
				<article id="comment-4442"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Технологии, технологии...<br />
А мне старый больше нравился. Ещё эти узкие шрифты в заголовках - совсем не прут... Я определённо уважал старый дизайн.</p>
					<footer>
						<a href="http://design-beings.com/" rel="external nofollow" class="url">vertus</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4442">16 января ’10 в 12:53</a></time>
					</footer>
				</article>
				<article id="comment-4479"class="comment even thread-even depth-1">
					<p>Вадим, обновление удачное и позитивное!<br />
Буду ждать концептуальных текстов и идей! ))<br />
Хотя, безусловно, разметка и таблица со стилями на обновлённом сайте сами по себе многое в себе несут и в плане идеологии, и технических приёмов.<br />
Всего доброго!</p>
					<footer>
						Сергей Серов						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4479">20 января ’10 в 1:14</a></time>
					</footer>
				</article>
				<article id="comment-4480"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Сергей,</strong> вы правильно поняли мою попытку сделать современную вёрстку, даже в ущерб совместимости со старыми браузерами ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4480">20 января ’10 в 1:17</a></time>
					</footer>
				</article>
				<article id="comment-4526"class="comment even thread-even depth-1">
					<p>Эх, Вадим,<br />
а у меня в Google Chrome под макосью не работает пробел, а он мой основной элемент навигации :) Поздравляю с новым дизайном. Успехов в боях и вообще :)</p>
					<footer>
						Алексей Николаенков						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4526">24 января ’10 в 22:25</a></time>
					</footer>
				</article>
				<article id="comment-4527"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Алексей,</strong> пробел, видимо, дизаблится скриптом Дакрбокса. Поправлю.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4527">24 января ’10 в 22:41</a></time>
					</footer>
				</article>
				<article id="comment-4614"class="comment even thread-even depth-1">
					<p>Мда... Действительно в ИЕ сайт выглядит стебненько )))</p>
					<footer>
						akxxiv						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4614">2 февраля ’10 в 14:53</a></time>
					</footer>
				</article>
				<article id="comment-4624"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вы б поставили предложение обновить браузер для пользователей осла.</p>
					<footer>
						IiIup						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4624">18 февраля ’10 в 23:31</a></time>
					</footer>
				</article>
				<article id="comment-4625"class="comment even thread-even depth-1">
					<p>Я всё-таки планирую сделать поддержку IE, как минимум, начиная с 7-й версии. Не уверен, что хватит моральной устойчивости для поддержки IE6 :)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4625">19 февраля ’10 в 2:49</a></time>
					</footer>
				</article>
				<article id="comment-4638"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Новый дизайн - отличный! Но вот по комментариям есть маленькое предложение: в предыдущей версии комментарии автора были выделены и легко отличались от остальных, а в этой такого нет. Может поставить рядом логотип (как раньше), или выделить их цветом?</p>
					<footer>
						Дмитрий						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4638">6 марта ’10 в 20:29</a></time>
					</footer>
				</article>
				<article id="comment-4639"class="comment even thread-even depth-1">
					<p><strong>Дмитрий,</strong> согласен — дело полезное. Но наверное подсвечу свои комментарии бледным фоном, лого туда не вписывается.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4639">7 марта ’10 в 14:20</a></time>
					</footer>
				</article>
				<article id="comment-4653"class="comment odd alt thread-odd thread-alt depth-1">
					<p>а мне понравилось, как теперь блог выглядит в IE 5 и 6.<br />
Ничего не расползается, всё просто и аккуратно, без лишних наворотов.<br />
В IE4 не понравились сообщения об ошибках скриптов.</p>
					<footer>
						Золотая Лань						<time pubdate datetime="2010-01-12T16:56:21+00:00"><a href="index.html#comment-4653">8 апреля ’10 в 22:39</a></time>
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
	<!-- 23 & 1,049 -->
</body>
</html>
