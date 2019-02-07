<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Вёрстка со смыслом — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Вёрстка со смыслом</a></h1>
				<time pubdate datetime="2011-07-01T21:04:27+00:00">1 июля ’11</time>
			</header>
			<p>Этой весной в Москве состоялась конференция <a href="http://ritconf.ru/">РИТ 2011</a>, на которой была представлена довольно сильная клиент-сайд секция. И пока одни видео только готовятся к публикации, а другие выкачиваются из RTMP-потока, в котором их спрятали ребята из COMDI, предлагаю вам посмотреть мой доклад «<a href="http://vimeo.com/25823931">Вёрстка со смыслом. Новая семантика HTML5</a>».</p>

<iframe src="https://player.vimeo.com/video/25823931?title=0&amp;byline=0&amp;portrait=0&amp;color=188418" width="610" height="343" class="video-player"></iframe>

<p>Сама презентация, работающая прямо в браузере, <a href="/pres/sense-coding/">доступна для внимательного изучения</a>, а видео можно скачать <a href="http://vimeo.com/25823931">на его странице</a> на Vimeo. Остальные видео с конференции, имеющие отношение к клиент-сайд разработке, позже появятся на канале <a href="http://vimeo.com/channels/wstdays">Web Standards Days</a>.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>70</small>
				</header>
				<article id="comment-5160"class="comment even thread-even depth-1">
					<p>Спасибо, Вадим!<br />
Очень помогло разложить известное по полочкам в голове.</p>
					<footer>
						Михаил						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5160">1 июля ’11 в 23:51</a></time>
					</footer>
				</article>
				<article id="comment-5161"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, у вас на сайте нет RSS иконки. Можно использовать <a href="/feed/index.rss" rel="nofollow">RSS</a>?</p>
					<footer>
						Игорь Броновицкий						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5161">6 июля ’11 в 16:31</a></time>
					</footer>
				</article>
				<article id="comment-5162"class="comment even thread-even depth-1">
					<p><b>Игорь,</b> если коротко — да, адрес правильный. Но я думал, что уже все браузеры и RSS-читалки научились автоматически обнаруживать RSS-поток сайта, поэтому и не задумывался о дополнительной иконке.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5162">6 июля ’11 в 16:37</a></time>
					</footer>
				</article>
				<article id="comment-5163"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, спасибо вам за эту замечательную презентацию.<br />
Сейчас сам осваиваю семантическую верстку, уже где-то что-то реализовываю, но все равно остаются вопросы. Например, как с точки зрения семантики правильнее использовать тег h1?</p>
<p>Внутри непосредственно статьи (пусть статья завернута в article) или вне ее? То есть, сначала h1, потом следом за ним article. </p>
<p>До просмотра этой презентации читал несколько статей на тему семантики и везде как-то по-разному делали. То так, то эдак. Та же Википедия, к примеру, ставит заголовок до текста самой статьи, а вы в презентации поставили заголовок внутрь статьи.</p>
<p>С уважением, Александр.</p>
					<footer>
						Фруталити						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5163">6 июля ’11 в 18:06</a></time>
					</footer>
				</article>
				<article id="comment-5164"class="comment even thread-even depth-1">
					<p>И вопрос вдогонку - может ли идти параграф текста без подзаголовка? Допустим, огромная статья об авиастроении, идет заголовок h1 "Авиастроение", потом немного текста (что это вообще такое, зачем статья написана), потом подзаголовок h2 "Авиастроение в 50х годах" и дальше текст.</p>
<p>Или же вступление тоже следует озаглавливать?</p>
					<footer>
						Фруталити						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5164">6 июля ’11 в 18:22</a></time>
					</footer>
				</article>
				<article id="comment-5165"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Александр, что касается <code>&lt;h1&gt;</code> и вводной части, то мне кажется самым удачным вариантом будет разместить его так:</p>
<pre>
<code>&lt;body&gt;</code>
<code>    &lt;header&gt;</code>
<code>        &lt;h1&gt;Заголовок&lt;/h1&gt;</code>
<code>        &lt;p&gt;Вводная часть&lt;/p&gt;</code>
<code>    &lt;/header&gt;</code>
<code>    &lt;article&gt;</code>
<code>        &lt;h2&gt;…</code>
<code>        &lt;p&gt;…</code>
<code>    &lt;/article&gt;</code>
<code>&lt;body&gt;</code>
</pre>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5165">6 июля ’11 в 19:05</a></time>
					</footer>
				</article>
				<article id="comment-5166"class="comment even thread-even depth-1">
					<p>Благодарю.</p>
					<footer>
						Фруталити						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5166">6 июля ’11 в 19:16</a></time>
					</footer>
				</article>
				<article id="comment-5167"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Игорь,</b> специально для вас добавил в шапку сайта RSS-иконку :)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5167">7 июля ’11 в 2:58</a></time>
					</footer>
				</article>
				<article id="comment-5168"class="comment even thread-even depth-1">
					<p>Вадим, спасибо за очень интересный доклад.<br />
Правда вот я не очень согласен с вам по поводу элемента &lt;section&gt;.<br />
Вы говорите, что «&lt;section&gt; — структурный элемент самого высокого уровня», но мне кажется, что значимость этого тега меньше, чем значимость &lt;article&gt; и &lt;aside&gt;. Возможно, я и ошибаюсь, но я уже давно сайдбары, выполненные с помощью &lt;aside&gt; (что возможно не очень верно), разбиваю на разделы с помощью &lt;section&gt;. Не стоит также забывать, что outliner формирует структурный блок, когда используется этот тег. Например, в вашей презентации outliner формирует такую стркутуру:<br />
1.Untitled BODY<br />
1.1.Untitled SECTION<br />
1.1.1.Вёрстка со смыслом<br />
1.1.1.1.Новая семантика HTML5<br />
1.2.Untitled SECTION<br />
1.2.1.Семантика<br />
1.3.Untitled SECTION<br />
1.3.1.Уровни семантики<br />
Мне кажется, что в этом случае &lt;article&gt; было бы достаточно.<br />
&gt; Допустим, огромная статья об авиастроении, идет заголовок h1 "Авиастроение", потом немного текста (что это вообще такое, зачем статья написана), потом подзаголовок h2 "Авиастроение в 50х годах"<br />
Я бы сделал так:</p>
<pre>

<code>&lt;body&gt;</code>
<code>    &lt;article&gt;</code>
<code>        &lt;header&gt;</code>
<code>            &lt;h1&gt;Заголовок&lt;/h1&gt;</code>
<code>            &lt;p&gt;Вводная часть&lt;/p&gt;</code>
<code>        &lt;/header&gt;</code>
<code>        &lt;section&gt;</code>
<code>            &lt;h2&gt;…</code>
<code>            &lt;p&gt;…</code>
<code>        &lt;/section&gt;</code>
<code>        &lt;section&gt;</code>
<code>            &lt;h2&gt;…</code>
<code>            &lt;p&gt;…</code>
<code>        &lt;/section&gt;</code>
<code>    &lt;/article&gt;</code>
<code>&lt;body&gt;</code>

</pre>
<p>&lt;section&gt; здесь используется лишь для того, чтобы быстрее находить нужные главы. Если главы не большие, то одних только заголовков хватит. Если же вводная часть совсем не большая, то можно &lt;header&gt; опустить, а вступительную часть обернуть в &lt;div&gt;.</p>
					<footer>
						Сергей						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5168">7 июля ’11 в 3:01</a></time>
					</footer>
				</article>
				<article id="comment-5169"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Вадим,</b> спасибо! Подписался!</p>
					<footer>
						<a href="http://www.linkedin.com/in/igorbronowicki" rel="external nofollow" class="url">Игорь Броновицкий</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5169">7 июля ’11 в 10:37</a></time>
					</footer>
				</article>
				<article id="comment-5170"class="comment even thread-even depth-1">
					<p><a href="http://webreview.com.ua/rss-in-firefox-4/" rel="nofollow">В Firefox 4 пропала иконка подписки на RSS</a></p>
					<footer>
						<a href="http://www.linkedin.com/in/igorbronowicki" rel="external nofollow" class="url">Игорь Броновицкий</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5170">7 июля ’11 в 10:55</a></time>
					</footer>
				</article>
				<article id="comment-5171"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Сергей,</b> наверное вы правы насчёт заголовка внутри <code>&lt;article&gt;</code>. Меня смутила структура документа на сайте <a href="http://css1k.com/" rel="nofollow">CSS1K</a>, надо внимательнее вчитаться в спецификацию. Что касается <code>&lt;section&gt;</code>, я чего-то не того начитался (надо бы поискать эту статью) и возомнил его глобальной обёрткой. Спецификация говорит всё ясно: <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/sections.html#the-section-element" rel="nofollow">тематическая группировка</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5171">7 июля ’11 в 18:36</a></time>
					</footer>
				</article>
				<article id="comment-5172"class="comment even thread-even depth-1">
					<p>div.<b>shower</b> как обертка в презентации улыбнул :)</p>
<p>Для тех кому интересно - <a href="http://ie.microsoft.com/testdrive/HTML5/SemanticNotepad/Default.html" rel="nofollow">демонстрация</a> семантики от микрософта, очень даже наглядно.</p>
					<footer>
						Сегрей2						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5172">8 июля ’11 в 7:24</a></time>
					</footer>
				</article>
				<article id="comment-5173"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Сегрей-2,</b> код Shower'а не претендует на структурную безупречность. Такую вещь, как набор слайдов, сложно правильно и однозначно структурировать. Но вот Shower 2, который сейчас в разработке, в этом смысле будет гораздо лучше.</p>
<p>Что касается «наглядной семантики», то ребята из Microsoft меня не очень впечатлили. По крайней мере, на полное руководство это не тянет.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5173">8 июля ’11 в 9:39</a></time>
					</footer>
				</article>
				<article id="comment-5174"class="comment even thread-even depth-1">
					<p>У вас пока тоже не тянет, но можете некоторые идеи повзаимствовать.<br />
Насчет <b>shower</b>, вы правда будете использовать этот класс ещё раз? Может все-таки <b>slider</b>? :)</p>
					<footer>
						Сергей2						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5174">8 июля ’11 в 17:27</a></time>
					</footer>
				</article>
				<article id="comment-5175"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Сергей-2,</b> я понимаю, но Shower — это название <a href="https://github.com/pepelsbey/shower" rel="nofollow">моего движка для презентаций</a>, не вижу смысла менять название абстрактного корневого элемента, это некоторое пространство имён.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5175">8 июля ’11 в 17:31</a></time>
					</footer>
				</article>
				<article id="comment-5176"class="comment even thread-even depth-1">
					<p>Я, если честно, никогда не понимал, как наименование идентификаторов и классов влияют на семантику (кроме микроформатов, но это несколько другое). Всё-таки предназначение у них другое: связать html с css и js. Тут уже важна не семантика, а удобство написания и разбирание (если работа в команде) кода. Так что совершенно не важно, как это называется — .shower, .slider или .presentation.<br />
Иногда ведь до смешного доходит. Ден Сидерхольм в своей новой книжке одним из недостатков clearfix называл его несемантичность. Знаете, как он решил проблему? Переименовал его в .group и успокоился.<br />
В html5 показать для чего предназначается блок, можно с помощью атрибута role.</p>
<p>Да, Вадим, хотел вас спросить об одной вещи. Есть небольшое меню в подвале (примерно, как у вас «wp», «html», «css»). С появлением тега <code>&lt;nav&gt;</code> обязательно ли их ещё дополнительно оборачивать в неупорядоченный список. Спеки и доктора однозначного ответа не дают, но во всех примерах всё равно оборачивают. Раньше, если меню не было списком, то верстальщик считался неучем и становился изгоем. Как теперь?</p>
					<footer>
						Сергей						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5176">8 июля ’11 в 18:15</a></time>
					</footer>
				</article>
				<article id="comment-5177"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Сергей, Вадим, вы оба меня не поняли. Я конечно понимаю что когда Вадим писал имя класса он думал о том что он как бы будет 'демонстратором', отсюда и shower, однако чаще всего это слово употребляют для обозначения дУша. Это меня и улыбнуло.</p>
					<footer>
						Сегрей2						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5177">9 июля ’11 в 7:46</a></time>
					</footer>
				</article>
				<article id="comment-5178"class="comment even thread-even depth-1">
					<p><b>Сегрей-2,</b> и всё же это вы меня недопоняли. Когда я писал «Shower», я прекрасно знал, что это «душ», но игра слов показалась мне настолько удачной, что я решил использовать этот каламбур как название, что отразилось на <a href="https://twitter.com/shower_me" rel="nofollow">логотипе проекта</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5178">9 июля ’11 в 11:18</a></time>
					</footer>
				</article>
				<article id="comment-5179"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ок, может и так. Пишите ещё, хорошие темы затрагиваете :).</p>
					<footer>
						Сергей2						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5179">10 июля ’11 в 7:22</a></time>
					</footer>
				</article>
				<article id="comment-5180"class="comment even thread-even depth-1">
					<p>некоторые моменты стали более ясными.. :) спасибо, как всегда тебя интересно смотреть.</p>
					<footer>
						<a href="http://macgera.com.ua" rel="external nofollow" class="url">Михаил Якименко</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5180">10 июля ’11 в 16:55</a></time>
					</footer>
				</article>
				<article id="comment-5181"class="comment odd alt thread-odd thread-alt depth-1">
					<p>вот кстати во избежание путаницы,<br />
К примеру у меня есть <code>header</code> всей страницы и <code>header</code> поста... вот тут получаются те же яйца что и <code>div</code> с айдишниками.. поэтому у меня выходит где-то такой код</p>
<pre>

<code>header.header {}..</code>
<code>header.post</code>
<code>header.some_block</code>

</pre>
					<footer>
						<a href="http://macgera.com.ua" rel="external nofollow" class="url">Михаил Якименко</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5181">10 июля ’11 в 17:18</a></time>
					</footer>
				</article>
				<article id="comment-5182"class="comment even thread-even depth-1">
					<p>Вадим, в вот к примеру есть такое меню:<br />
<a href="http://clip2net.com/clip/m41816/1310561039-clipaq5591-3kb.png" rel="nofollow">http://clip2net.com/clip/m41816/1310561039-clipaq5591-3kb.png</a><br />
В таком случае оно так же оборачивается в  ???</p>
					<footer>
						klierik						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5182">13 июля ’11 в 16:44</a></time>
					</footer>
				</article>
				<article id="comment-5183"class="comment odd alt thread-odd thread-alt depth-1">
					<p>2 Михаил Якименко,<br />
в твоем случае скорее так:</p>
<pre>

<code>header.header {}</code>
<code>div.post {}</code>
<code>header.post__header {}</code>

</pre>
					<footer>
						klierik						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5183">13 июля ’11 в 16:48</a></time>
					</footer>
				</article>
				<article id="comment-5188"class="comment even thread-even depth-1">
					<p>По поводу:</p>
<pre>

<code>&lt;body&gt;</code>
<code>    &lt;header&gt;</code>
<code>        &lt;h1&gt;Заголовок&lt;/h1&gt;</code>
<code>        &lt;p&gt;Вводная часть&lt;/p&gt;</code>
<code>    &lt;/header&gt;</code>
<code>    &lt;article&gt;</code>
<code>        &lt;h2&gt;…</code>
<code>        &lt;p&gt;…</code>
<code>    &lt;/article&gt;</code>
<code>&lt;body&gt;</code>

</pre>
<p>Осмелюсь полагать что этот код не совсем корректен.<br />
Если отталкиваться от статьи:<br />
<a href="http://diveintohtml5.org/semantics.html" rel="nofollow">Dive Into HTML5: What Does It All Mean?</a> (Оно же <a href="http://htmlbook.ru/html5/semantics" rel="nofollow">по-русски</a>)<br />
 то имеет место быть следующий код</p>
<pre>

<code>&lt;footer&gt;</code>
<code>  &lt;nav&gt;</code>
<code>    &lt;h1&gt;Navigation&lt;/h1&gt;</code>
<code>    &lt;ul&gt;</code>
<code>      &lt;li&gt;&lt;a href=&quot;/&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;</code>
<code>      &lt;li&gt;&lt;a href=&quot;/standards/&quot;&gt;Standards&lt;/a&gt;&lt;/li&gt;</code>
<code>      &lt;li&gt;&lt;a href=&quot;/participate/&quot;&gt;Participate&lt;/a&gt;&lt;/li&gt;</code>
<code>      &lt;li&gt;&lt;a href=&quot;/Consortium/membership&quot;&gt;Membership&lt;/a&gt;&lt;/li&gt;</code>
<code>      &lt;li&gt;&lt;a href=&quot;/Consortium/&quot;&gt;About W3C&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;/ul&gt;</code>
<code>  &lt;/nav&gt;</code>
<code>  ...</code>
<code>&lt;/footer&gt;</code>

</pre>
<p>Т.е. в HTML5 каждый раздел может содержать собственный тег h1 - h6. nav - создает новый раздел, иными словами, новый узел в схеме документа.</p>
					<footer>
						klierik						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5188">13 июля ’11 в 17:20</a></time>
					</footer>
				</article>
				<article id="comment-5189"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В своё время заморачиавлся с написанием мануала по ЦМСке в чистом  HTML. Конечно от сотни вложенных дивов уже мутило, так что семантика это, в принципе ок, даже с точки зрения стилевого оформления. Но вот у меня, для начала, такой вопрос.<br />
Например, для чего нужен <i>hgroup</i>?<br />
При структуре</p>
<pre>

<code>&lt;hgroup&gt;</code>
<code>&lt;h1&gt;Заголовок&lt;/h1&gt;</code>
<code>  &lt;h2&gt;Подзаголовок 1&lt;/h2&gt;</code>
<code>&lt;/hgroup&gt;</code>
<code>    ...Текст...</code>
<code>  &lt;h2&gt;Подзаголовок 2&lt;/h2&gt;</code>
<code>    ...Текст...</code>
</pre>
<p>Выходит некая путаница, или я что-то недопонял?</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5189">14 июля ’11 в 18:10</a></time>
					</footer>
				</article>
				<article id="comment-5190"class="comment even thread-even depth-1">
					<p>Ну и в догонку.<br />
Может тогда вообще имеет смысл перейти полностью на абстрактный  xml, с предопределённым набором элементов(классические ul, div etc)?</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5190">14 июля ’11 в 18:13</a></time>
					</footer>
				</article>
				<article id="comment-5191"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну и последнее: не вносит ли семантика ограничения на гибкость стилевого оформления?<br />
Я имею в виду, что писать в классе "оранжевый", что элемент должен быть синим не ком иль фо, а семантика по сути, может к такому привести.</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5191">14 июля ’11 в 18:18</a></time>
					</footer>
				</article>
				<article id="comment-5192"class="comment even thread-even depth-1">
					<p>2 boba_KeyOST, насколько я понял, в hgroup элементы H1-H6 являются родственными в рамках этой группы.<br />
То есть получается что все элементы Hn в рамках одного узла являются родственными.</p>
					<footer>
						klierik						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5192">15 июля ’11 в 12:06</a></time>
					</footer>
				</article>
				<article id="comment-5193"class="comment odd alt thread-odd thread-alt depth-1">
					<p>boba_KeyOST и klierik, в общем предназначение у <code>&lt;nav&gt;</code> только одно, объединение несколько заголовков в один с точки зрения структуры.<br />
Зачем это нужно? В html5 вся страница как бы делится на структурные блоки с помощью тегов <code>&lt;article&gt;</code>,<code>&lt;section&gt;</code>,<code>&lt;nav&gt;</code>,<code>&lt;aside&gt;</code>. Заголовки служат названиями этих блоков, либо сами формируют блок, если этих тегов нет.<br />
Предположим у нас есть вот такой заголовок:<br />
<i>JavaScript: Книга с носорогом </i><br />
Если его разделить вот так</p>
<pre>
<code>&lt;h1&gt;JavaScript&lt;/h1&gt;: &lt;h2&gt;Книга с носорогом&lt;/h2</code>
</pre>
<p>то выделится два структурных блока, что нам не нужно, так как название это одно, но мы хотим показать, что Javascript — это основное название, а «Книга с носорогом», тесно связано с заголовком (поэтому подходит только заголовок). Тогда мы и объединяем два заголовка один, и с точки зрения оутлайнера — это один заголовок.<br />
Кстати, из-за такого его малого и неявного назначения W3C (не WHATWG) этот тег выкинули месяца 2 или 3 назад, но потом вернули обратно.</p>
					<footer>
						Сергей						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5193">15 июля ’11 в 12:29</a></time>
					</footer>
				</article>
				<article id="comment-5194"class="comment even thread-even depth-1">
					<p>Сергей, а вот если брать за основу реальную ситуацию:</p>
<pre>

<code>&lt;nav class=&quot;popup-menu&quot;&gt;</code>

<code>            &lt;h1 class=&quot;popup-menu__title vcard&quot;&gt;</code>
<code>                &lt;a href=&quot;#&quot; class=&quot;popup-menu__title__link fn url&quot; title=&quot;Profile&quot;&gt;</code>
<code>                    &lt;span class=&quot;given-name&quot;&gt;John&lt;/span&gt;</code>
<code>                    &lt;span class=&quot;family-name&quot;&gt;Smith&lt;/span&gt;</code>
<code>                &lt;/a&gt;</code>
<code>                &lt;i class=&quot;popup-menu__title__dropdown&quot;&gt;&amp;nbsp;&lt;/i&gt;</code>
<code>            &lt;/h1&gt;</code>

<code>            &lt;ul class=&quot;popup-menu__list&quot;&gt;</code>
<code>                &lt;li class=&quot;popup-menu__list__item&quot;&gt;&lt;a class=&quot;popup-menu__list__link&quot; href=&quot;#&quot;&gt;Add Article&lt;/a&gt;&lt;/li&gt;</code>
<code>                &lt;li class=&quot;popup-menu__list__item&quot;&gt;&lt;a class=&quot;popup-menu__list__link&quot; href=&quot;#&quot;&gt;Get Options&lt;/a&gt;&lt;/li&gt;</code>
<code>                &lt;li class=&quot;popup-menu__list__item&quot;&gt;&lt;a class=&quot;popup-menu__list__link&quot; href=&quot;#&quot;&gt;Manage Users Accounts&lt;/a&gt;&lt;/li&gt;</code>
<code>                &lt;li class=&quot;popup-menu__list__item&quot;&gt;&lt;a class=&quot;popup-menu__list__link&quot; href=&quot;#&quot;&gt;Edit Profile&lt;/a&gt;&lt;/li&gt;</code>
<code>                &lt;li class=&quot;popup-menu__list__item&quot;&gt;&lt;a class=&quot;popup-menu__list__link&quot; href=&quot;#&quot;&gt;Log Out&lt;/a&gt;&lt;/li&gt;</code>
<code>            &lt;/ul&gt;</code>
<code>        &lt;/nav&gt;</code>

</pre>
<p>целесообразно ли использовать в таком случае H1?</p>
<p>Что бы было наглядно о чём речь вот скриншоты:<br />
<a href="http://clip2net.com/clip/m41816/1310721601-clipjl1841-3kb.png" rel="nofollow">закрытое меню</a><br />
<a href="http://clip2net.com/clip/m41816/1310721640-cliphh1841-10kb.png" rel="nofollow">открытое меню</a></p>
					<footer>
						klierik						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5194">15 июля ’11 в 13:22</a></time>
					</footer>
				</article>
				<article id="comment-5195"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Сергей</b>, ага, понял. То есть в моей ситуации hgroup формально не нужен, да и неправилен.</p>
<p><b>klierik</b>, я может и не прав, но мне кажется h1 здесь не совсем правилен, так как, и тут со мной согласятся многие СЕОнисты, h1 должен быть как можно более один и раскрывать основное содержимое страницы. Да и мне кажется, что заголовок для выпадающего меню не логичен.</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5195">18 июля ’11 в 15:57</a></time>
					</footer>
				</article>
				<article id="comment-5196"class="comment even thread-even depth-1">
					<p>Ой, у меня там опечаточка досадная в предыдущем комментарии. Конечно же речь про <code>&lt;hgroup&gt;</code> была.<br />
<b>klierik</b>, я вот не знаю стал бы использовать в подобном случае элемент <code>&lt;nav&gt;</code>. Всё-таки он больше предназначен для выделения навигации. Хотя вроде бы это тоже допустимо.<br />
Зато вот вместо элемента <code>&lt;ul&gt;</code>, я бы использовал <code>&lt;menu&gt;</code>, который пока ведёт себя точно также. С точки зрения html5 это как раз верно.<br />
На счёт заголовка. Если используется &lt;nav&gt;, то заголовок очень желателен. Правда я бы не стал использовать &lt;h1&gt;, наверное из-за привычки. Я привык использовать заголовки по степени значимости, поэтому здесь бы я использовал &lt;h3&gt;.</p>
					<footer>
						Сергей						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5196">18 июля ’11 в 16:18</a></time>
					</footer>
				</article>
				<article id="comment-5201"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>@klierik</strong> Ну а какая разница то собственно? )) Суть то не изменна, все равно получим суп из тэгов и классов..</p>
					<footer>
						<a href="http://macgera.com.ua" rel="external nofollow" class="url">Михаил Якименко</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5201">29 июля ’11 в 15:26</a></time>
					</footer>
				</article>
				<article id="comment-5254"class="comment even thread-even depth-1">
					<p>Хорошо что хоть кто-то в конце доклада сказал что структурные теги практической пользы сейчас не имеют.</p>
<blockquote><p>Раньше, если меню не было списком, то верстальщик считался неучем и становился изгоем. Как теперь?</p></blockquote>
<p>Теперь у нас есть БЭМ, и ориентированность на результат. И как же хорошо что прошли те времена массового психоза.</p>
					<footer>
						<a href="http://bemclub.in/_matrioshka/" rel="external nofollow" class="url">exessqd</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5254">21 декабря ’11 в 0:28</a></time>
					</footer>
				</article>
				<article id="comment-5255"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Exessqd,</b> БЭМ решает совсем другие задачи и никакого отношения к веб-стандартам не имеет. По мне, так называть все классы <code>.b-element</code> и страшно от этого переться, абсолютно забивая на спецификацию и будущую совместимость — это как раз психоз.</p>
<p>Нет, вы правда думаете, что элемент <code>b-grid__cell b-grid__cell_1-1</code> (бэ-грид-адин-адин-адин) скажет верстальщику где находится блок, и что в нём содержится? Вы правда думаете, что слово разделитель в английском пишется так <code>.b-devider</code>?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5255">21 декабря ’11 в 8:53</a></time>
					</footer>
				</article>
				<article id="comment-5256"class="comment even thread-even depth-1">
					<p>b-grid__cell b-grid__cell_1-1, что за изврат, в реальности не встречал такие конструкции, год уже бэм практикую и не делал такого.</p>
					<footer>
						бардюр однопиксельный						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5256">21 декабря ’11 в 10:27</a></time>
					</footer>
				</article>
				<article id="comment-5257"class="comment odd alt thread-odd thread-alt depth-1">
					<p>это все какая-то попытка роботизации, возвращающей в эпоху ie6</p>
					<footer>
						бардюр однопиксельный						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5257">21 декабря ’11 в 10:31</a></time>
					</footer>
				</article>
				<article id="comment-5265"class="comment even thread-even depth-1">
					<p><b><i>P</i>epelsbey</b>,<br />
<i><br />
По мне, так называть все классы .b-element и страшно от этого переться, абсолютно забивая на спецификацию и будущую совместимость — это как раз психоз.<br />
</i></p>
<p>Будущее, никто не может знать каким оно будет...</p>
<p>Но в настоящем, есть два типа устройств которым могут понадобится dl,dt,ol,ul,li это поисковые роботы и альтернативные устройства.</p>
<p>1. Поисковикам - все равно.</p>
<p>2. Альтернативные устройства(речевые браузеры) не прочитывают списки с отключенными буллитами list-style:none; (<a href="http://www.456bereastreet.com/archive/201109/screen_readers_list_items_and_list-stylenone/" rel="nofollow">пруф</a>).</p>
<p>Я думаю это было сделано только благодоря тому что верстальщики использовали списки вне контента и я точно уверен что речевые браузеры в ближайшем будущем не перестанут игнорировать списки.</p>
<p>То есть, на текущий момент, абсолютно все равно что ты использовал для меню - ul&gt;li или div&gt;span, разница лишь в умах патриотов "семантической разметки" :)</p>
<p><i><br />
Нет, вы правда думаете, что элемент b-grid__cell b-grid__cell_1-1 (бэ-грид-адин-адин-адин) скажет верстальщику где находится блок, и что в нём содержится?<br />
</i></p>
<p>В <a href="http://bem.github.com/bem-method/pages/beginning/beginning.ru.html" rel="nofollow">последней версии bem-method'a</a><br />
вроде бы ничего не говорится о том что имя блока или имя элемента должно описывать что в нем содержится и где он находится. </p>
<p>Блоки:</p>
<blockquote><p>Имя класса блока должно отвечать на вопрос: «Зачем нужен этот блок?»</p></blockquote>
<p>Именно зачем нужен этот блок, но ни в коем случае не что в нем содержится и тем более где он находится.</p>
<p>Элементы:</p>
<blockquote><p>Элемент может <b>находиться</b> только в составе блока и не имеет смысла в отрыве от него.</p></blockquote>
<p>Для элемента главное чтобы он находился в пределах этого блока, т.е. имя элемента b-grid__cell должно  говорить что он относится к сетке b-grid. </p>
<p><i><br />
Вы правда думаете, что слово разделитель в английском пишется так .b-devider?<br />
</i></p>
<p>Поправлено.</p>
<p><i><br />
b-grid__cell b-grid__cell_1-1, что за изврат, в реальности не встречал такие конструкции, год уже бэм практикую и не делал такого.<br />
</i></p>
<p>Усердней надо практиковать =)<br />
b-grid(блок)__cell(элемент)<br />
b-grid(блок)__cell(элемент)_1-1(модификатор)</p>
					<footer>
						<a href="http://bemclub.in/_matrioshka/" rel="external nofollow" class="url">exessqd</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5265">4 января ’12 в 8:18</a></time>
					</footer>
				</article>
				<article id="comment-5266"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>В последней версии bem-method'a<br />
вроде бы ничего не говорится о том что имя блока или имя элемента должно описывать что в нем содержится и где он находится</p></blockquote>
<p>Помимо БЭМа, который пришёл и уйдёт, как только Яндекс в очередной раз поменяет стратегию, есть спека, её авторы и общие рекомендации по разделению содержимого и представления, которым <strong>десятки лет.</strong></p>
<p>Давайте, используйте технологию, которая вся из себя хак. Префиксы появились потому, что пришлось поддерживать страшный код, который наверстала студия Лебедева, огромные классы появились потому, что IE6 не поддерживает множественные классы, а общий принцип независимости и библиотечности строится на том, что Яндекс — это портал с простым, лаконичным и повторяющимся дизайном.</p>
<p>Если ваш удел — слепо копировать, вперёд!</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5266">4 января ’12 в 13:34</a></time>
					</footer>
				</article>
				<article id="comment-5267"class="comment even thread-even depth-1">
					<blockquote><p>IE6 не поддерживает множественные классы</p></blockquote>
<p>Этокакэто?! Вроде под 6-ку верстал, всё норм работало.</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5267">4 января ’12 в 14:52</a></time>
					</footer>
				</article>
				<article id="comment-5268"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Кто-то должен расставить точки над i... позвольте, попробовать мне.</p>
<blockquote><p>Но в настоящем, есть два типа устройств которым могут понадобится dl,dt,ol,ul,li это поисковые роботы и альтернативные устройства.</p></blockquote>
<p>Это неправда. Устройствам вообще плевать на разметку. Разметка — то, что делает содержимое доступным или навеки вечные похороненным на задворках серверов. Разметка нужна только вам. Человеку. </p>
<blockquote><p>То есть, на текущий момент, абсолютно все равно что ты использовал для меню - ul&gt;li или div&gt;span, разница лишь в умах патриотов "семантической разметки" :)</p></blockquote>
<p>Каждый раз, когда вы продолжаете так верстать умирает проект лучшего в мире поискового котёнка-робота. Вы уже определили для себя границы того, насколько можно отойти от «классических» норм разметки, которые не рассматривают проблемы «практического смысла»? В школах учат писать сначала по прописям, а потом уже постепенно позволяют сформировать свой почерк. Как вы думаете для чего это нужно если «практического смысла» прописи потом уже не имеют? </p>
<p>Помните историю с Вавилоном? Там все говорили и писали на разных языках. Есть желание забить общие правила, а преследовать личную сиюминутную цель? Подумайте еще раз о том будущем сети, о котором вы пишете «никто не может знать каким оно будет...».</p>
<blockquote><p>...есть спека, её авторы и общие рекомендации по разделению содержимого и представления, которым десятки лет.</p></blockquote>
<p>Exessqd, Pepelsbey, мы все знаем, что «спека» — это не святой грааль. И десятки лет красят далеко не все спеки.</p>
<p>Pepelsbey скорее всего имел ввиду, что БЭМ имеет несколько родовых травм в реализации CSS-технологии, нанесенных суровыми внешними условиями, и, надеюсь, очень скоро их благополучно переживёт.</p>
<blockquote><p>Давайте, используйте технологию, которая вся из себя хак.</p></blockquote>
<p>Сильно. Но не стоит забывать, что префиксы b- и огромные классы это дела одной технологии, относящиеся к реализации, появившейся в определенный период развития Яндекса.<br />
Гораздо правильнее думать о БЭМ, как о методологии, а не о реализации в только в CSS. Обратите внимание хотя бы название репозитория, на который тут все ссылаются: <a href="http://bem.github.com/bem-method/" rel="nofollow">BEM Method</a>. На данный момент БЭМ в Яндексе уже задействован в JS, XSL и даже процессах сборки проектов.</p>
<blockquote><p>Если ваш удел — слепо копировать, вперёд!</p></blockquote>
<p>Слепо копировать — плохо. Согласен. Фабрика по сжиганию велосипедов уже открыта на соседней улице, берегитесь ;)</p>
					<footer>
						<a href="http://miripiruni.org" rel="external nofollow" class="url">Слава</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5268">4 января ’12 в 14:53</a></time>
					</footer>
				</article>
				<article id="comment-5269"class="comment even thread-even depth-1">
					<blockquote><p>Этокакэто?! Вроде под 6-ку верстал, всё норм работало.</p></blockquote>
<p>Для IE6 селекторы <code>.one.two</code> и <code>.two</code> для элемента <code>class="one two"</code> равносильны, что неправильно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5269">4 января ’12 в 15:09</a></time>
					</footer>
				</article>
				<article id="comment-5270"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>pepelsbey</b>, херасе. Вроде и не замечал до этого. Хорошо, что пациент скорее мёртв и уже попахивает.</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5270">4 января ’12 в 15:28</a></time>
					</footer>
				</article>
				<article id="comment-5271"class="comment even thread-even depth-1">
					<blockquote><p>огромные классы появились потому, что IE6 не поддерживает множественные классы </p></blockquote>
<p>Таки нет: не только поэтому, а для стремления к абсолютной независимости. При пересечении блоков, например, может захотеться применить определённый модификатор только к одному из блоков, но если бы он был сделан через множественный класс — этого не получилось бы.Аналогично и с элементами: иметь в имени класса имя блока необходимо. Это также не ограничение IE на селектор «>» т.к. если ты вместо длинных классов будешь писать, скажем,
<pre>
<code>.block>.element {…}</code>
</pre>
<p>То ты не сможешь потом между блоком и элементом вставить какой-то другой блок/элемент, или же и вовсе использовать элемент без блока (что, правда, противоречит официальной методологии, но не мог не упомянуть)И да — я верстал не только крупные проекты на БЭМ, но и несколько более мелких, и всегда, всегда когда я по каким-то причинам отходил от БЭМ и абсолютной независимости, всегда возникали какие-то проблемы когда было необходимо как-то расширить или дополнить код. Ну как проблемы: надо было просто часть переписать, часть скопипастить и что-то заменить, но всего этого можно было бы избежать не отходи я от БЭМ.Так что, если методология БЭМ, касающаяся сборки и прочего рокет-сайнса актуальна в первую очередь для больших проектов (в этом я согласен), то HTML/CSS часть БЭМ очень ускоряет написание кода. И если Zen-… ускоряет только сам процесс написания символов, то БЭМ ускоряет часть, связанную с архитектурой вёрстки, при правильном применении код будет ещё и легко читаемым, легко поддерживаемым и легко расширяемым. И это оправданно для проектов любого размера, от сайтов про котиков, до Яндекса.А уж какая там будет семантическая подкладка или её отсутствие — совершенно не важно. Не устану повторять, что семантика отдельно, БЭМ отдельно, никто не мешает из смешивать (и БЭМ так устроен, что ни-че-го в нём это делать не мешает).</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5271">4 января ’12 в 16:38</a></time>
					</footer>
				</article>
				<article id="comment-5272"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Не вполне верно противопоставлять БЭМ метод семантической вёрстке. скорее это попытка дать людям разных сфер веб разработки один язык, в терминах которого они могли бы работать.<br />
Кроме того более эффективно разделить обязанности.<br />
Например инженерами Яндекса не раз повторялось, что один человек может оперировать блоками на уровне bemJSON или bemXML шаблонов не задумываясь об их внутренней реализации, а другой или другие осуществлять эту самую реализацию в той технологии которой владеют. Например верстать по всем правилам семантики и w3c спецификации.</p>
					<footer>
						Владимир						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5272">4 января ’12 в 19:49</a></time>
					</footer>
				</article>
				<article id="comment-5273"class="comment even thread-even depth-1">
					<p><b>pepelsbey</b>,</p>
<p><b>Отделяем содержание документа от его представления</b></p>
<p>Я совсем не против этого принципа, здесь вопрос только в постановке задачи, например, если тебе нужно чтобы у тебя была жесткая структура и много представлений ты используешь одни методы; а если твоя цель максимальное быстродействие, легкость разработки и поддержки тогда лучше использовать другие, например, приемы модульной верстки(<a href="http://bem.github.com/bem-method/pages/beginning/beginning.ru.html" rel="nofollow">BEM</a>, <a href="http://www.stubbornella.org/content/2009/03/23/object-oriented-css-video-on-ydn/" rel="nofollow">OOCSS</a>, <a href="http://smacss.com/book/" rel="nofollow">SMACSS</a>).</p>
<p><b>Слава</b>,</p>
<blockquote><p>
<i>Но в настоящем, есть два типа устройств которым могут понадобится dl,dt,ol,ul,li это поисковые роботы и альтернативные устройства.</i></p>
<p>Это неправда. Устройствам вообще плевать на разметку. Разметка — то, что делает содержимое доступным или навеки вечные похороненным на задворках серверов. Разметка нужна только вам. Человеку.
</p></blockquote>
<p>Я недостаточно подробно выразился, исправлюсь.</p>
<p>Но в настоящем, есть несколько групп людей которым могут понадобится dl,dt,ol,ul,li - это люди которые используют поисковые сервисы и люди которые не могут видеть, слышать, свободно обрабатывать или воспринимать те или иные виды информации.</p>
<p>Для этих людей на сегодняшний день существуют несколько типов устройств и программ, например, поисковые роботы и альтернативные устройства просмотра(речевые браузеры, принтеры Брайля, дисплеи Брайля).</p>
<blockquote><p>
Вы уже определили для себя границы того, насколько можно отойти от «классических» норм разметки, которые не рассматривают проблемы «практического смысла»?</p>
<p>В школах учат писать сначала по прописям, а потом уже постепенно позволяют сформировать свой почерк. Как вы думаете для чего это нужно если «практического смысла» прописи потом уже не имеют?</p>
<p>Помните историю с Вавилоном? Там все говорили и писали на разных языках.<br />
Есть желание забить общие правила, а преследовать личную сиюминутную цель? Подумайте еще раз о том будущем сети, о котором вы пишете «никто не может знать каким оно будет...».
</p></blockquote>
<p>Использование списков - это стандарт.</p>
<p>Следование стандарту может гарантировать что твой сайт будет совместим с текущими и будущими версиями браузеров т.е следовать стандарту нужно всегда, даже если это не несет явной выгоды(как использование списков).</p>
<p>Отойти от стандарта можно только если на это есть веская причина.</p>
<p><b>Не очень веская причина</b></p>
<p>На данный момент списки несут убытки, в виде:<br />
1. Списковые блоки без частного ресета нельзя включать в области контента<br />
2. Лишний код для частного/глобального ресета<br />
3. С ресетом матчатся браузерные стили по-умолчанию</p>
<blockquote><p>
Каждый раз, когда вы продолжаете так верстать умирает проект лучшего в мире поискового котёнка-робота.
</p></blockquote>
<p>Мы не можем знать какие устройства/программы появятся и какая именно разметка им потребуется, но если возникнет необходимость(если это будет выгодно) то заточка сайта под лучшего в мире котёнка-робота будет реализована.</p>
<p><b>Прагматичный подход</b></p>
<p>У Яндекса очень прагматичный подход, он не оптимизировал разметку для незрячих до тех пор пока в этом не появилась необходимость, пока тех.поддержку не завалили письмами: "У вас не работает!".</p>
<p>Пока не заболит ты к доктору то не пойдешь.</p>
<p>Стандарты есть профилактика заболевания, следуя им мы с большей вероятностью избежим будущих проблем.</p>
<p><b>Вывод</b></p>
<p>Профилактика безусловно полезна, но в реальных условиях нужно придерживаться прагматичного подхода.</p>
<p>То есть ориентируемся на стандарты, но разрабатываем так как нам будет полезнее.</p>
<p><i>Сразу вспомнился <a href="http://video.yandex.ru/users/scarych/view/1/" rel="nofollow">Доклад Кудинова на РИТ-2010</a></i></p>
					<footer>
						<a href="http://bemclub.in/_matrioshka/" rel="external nofollow" class="url">exessqd</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5273">5 января ’12 в 6:13</a></time>
					</footer>
				</article>
				<article id="comment-5274"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Мы не можем знать какие устройства/программы появятся и какая именно разметка им потребуется</p></blockquote>
<p>Мы не можем знать какие программы появятся, но мы прекрасно знаем, с каким уже существующим кодом и на основании каких принципов и стандартов придётся работать этому котёнку.</p>
<p>Меня удивляет, что вы ратуете за прагматичный подход, но в упор не замечаете, что БЭМ полон архитектурной красоты и гибкости, которая в 90% случаев избыточна. Откуда 90%? Это те самые простые верстальщики, делающие простые сайты, редизайн которых убьёт не то, что весь клиент-сайд код, иногда даже сервер-сайд летит в корзину. Вы не используете независимость блоков, вы не вкладываете их друг в друга — но таскаете за собой хвосты избыточного кода, которые никогда не пригодятся. А потом жалуетесь, что reset.css — принципиально кешируемый, в отличие от документов — видите ли, лишний.</p>
<p>Вы ориентируетесь на стандарты, но плюёте на главный их принцип, разделяющий содержимое и представление — а именно в этом весь БЭМ, когда данные для JS хранятся прямо в HTML-коде в прагматичных onclick-ах, когда вы вводите тонны бессмысленных классов для бесполезно гибкой сетки.</p>
<blockquote><p>Сразу вспомнился Доклад Кудинова на РИТ-2010</p></blockquote>
<p>Беспринципность кудиновских докладов и подходов давно уже стала нарицательной, опасные примеры приводите.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5274">5 января ’12 в 8:40</a></time>
					</footer>
				</article>
				<article id="comment-5276"class="comment even thread-even depth-1">
					<p>Ребят, а у меня такой вопрос.<br />
Можно ли использовать в вёрстке БЭМ, но только отчасти, т.е. не уходить в него полностью, а юзать какие-то его отдельные части в некоторых местах.<br />
Вот, например, как-то так:<br />
<a href="http://forum.htmlbook.ru/index.php?showtopic=30108&amp;view=findpost&amp;p=229248" rel="nofollow">http://forum.htmlbook.ru/index.php?showtopic=30108&#038;view=findpost&#038;p=229248</a></p>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5276">5 января ’12 в 10:23</a></time>
					</footer>
				</article>
				<article id="comment-5278"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>хранятся прямо в HTML-коде в прагматичных onclick-ах, когда вы вводите тонны бессмысленных классов для бесполезно гибкой сетки</p></blockquote>
<p>Вадим, а HTML — это не содержимое, это как раз часть представления :) Нельзя стремиться к тому, чтобы HTML и были данными, а CSS — представлением.</p>
<p>CSS — не всемогущий, он не может манипулировать структурой документа, он не умеет создавать врапперы и дополнительные элементы (двух псевдоэлементов — не достаточно), стремиться засунуть всё представление в CSS, конечно, интересно, но порождает ужасный перехаченный код, который невозможно поддерживать даже когда надо добавить второго котика на страницу, которую надо верстать 90% верстальщиков.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5278">5 января ’12 в 11:33</a></time>
					</footer>
				</article>
				<article id="comment-5279"class="comment even thread-even depth-1">
					<blockquote><p>CSS — не всемогущий, он не может…</p></blockquote>
<p>Я не говорю, что CSS всемогущий, но херить из-за этого его вполне адекватную и стабильную работоспособность, по сути, изобретая новый язык на костях старого, это удел тех людей и компаний, которым это по каким-то причинам очень нужно (либо крайне привычно, как тебе), а не массового верстальщика, у которого таких проблем нет.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5279">5 января ’12 в 14:17</a></time>
					</footer>
				</article>
				<article id="comment-5280"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Вадим</b>, если я тебя правильно понял, то ты имеешь ввиду то, что не стоит гадить CSS, не используя его на полную мощь, в плане всяких селекторов типа  “:nth-of-type(even)” и т.д, его красоту и возможности, на которые многие компании забивают в пользу железнобетонной вёрстки?</p>
<p><b>Ром</b>, и следовательно тогда вопрос к тебе.</p>
<blockquote><p>
Можно ли использовать в вёрстке БЭМ, но только отчасти, т.е. не уходить в него полностью, а юзать какие-то его отдельные части в некоторых местах?<br />
Вот, например, как-то так:<br />
<a href="http://forum.htmlbook.ru/index.php?showtopic=30108&amp;view=findpost&amp;p=229248" rel="nofollow">http://forum.htmlbook.ru/index.php?showtopic=30108&#038;view=findpost&#038;p=229248</a></p></blockquote>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5280">5 января ’12 в 14:32</a></time>
					</footer>
				</article>
				<article id="comment-5281"class="comment even thread-even depth-1">
					<p>Ой, а БЭМ что-то херит? Расскажи :)</p>
<p>У массового верстальщика могут быть проблемы, но он может об этом не знать, так же как он может писать всегда HTML и CSS, набирая каждый символ вручную, и считать это нормальным.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5281">5 января ’12 в 14:33</a></time>
					</footer>
				</article>
				<article id="comment-5282"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Ой, а БЭМ что-то херит? Расскажи</p></blockquote>
<p>Каскад херит. Любимый и вполне хорошо работающий с малых и средних уровнях сложности каскад и селекторы по элементам.</p>
<p>Напомню своё мнение: БЭМ — хорошо, это, в каком-то смысле, jQuery для больших контор, вроде Яндекса, т.е. технология, опережающая и изменяющая вектор развития веб-стандартов. Но хороша она для специфических задач, когда независимость, неограниченная вложенность и хранение логики прямо в коде для конструкторизации действительно нужны и используются.</p>
<p>Когда верстальщики просто хотят <em>быть такими же крутыми, как папа,</em> появляются всякие грид-матрёшки, где БЭМ ради БЭМа, а половина кода — это визуальная разметка прямо в документе.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5282">5 января ’12 в 14:40</a></time>
					</footer>
				</article>
				<article id="comment-5283"class="comment even thread-even depth-1">
					<blockquote><p>Можно ли использовать в вёрстке БЭМ, но только отчасти, т.е. не уходить в него полностью, а юзать какие-то его отдельные части в некоторых местах?</p></blockquote>
<p>Да, вполне, если понимать дл чего ты его используешь. В варианте с дочерними селекторами типа « .nav &gt; li &gt; a » — для небольших проектов прокатит. Но это всё-равно будет менее гибким, чем БЭМ. Представь: в какой-то момент тебе понадобится сделать в пункте меню не ссылку, а кнопку, или несколько ссылок, или что-то ещё. Но так, чтобы визуально они выглядели так же, как и простой пункт меню, или же были максимально близки к этому. Если изначально не смотреть на имена элементов, то класс можно будет подставить к любому тегу, иначе же придётся или дублировать код в селекторе, или же дублировать всё правило и т.д.</p>
<p>Да, можно использовать «упрощённый» БЭМ, но надо понимать, какие последствия будут возникать из-за всех упрощений. От них есть и профит, и вред, для каждого проекта надо будет решать не будет ли что-то жать. Поэтому мне, как и сказал Вадим, проще всегда использовать полную нотацию, так я в любой момент могу что-то добавить или изменить без больших изменений ни в HTML, ни в CSS.</p>
<blockquote><p>Каскад херит</p></blockquote>
<p><del>Да так ему и надо!</del> Бездумное использование селекторов по элементу и каскада ничуть не лучше использования звёздочки. И не с точки зрения производительности, а с того, что если тебе надо будет быстро поправить что-то в чужом коде или исправить ошибку, то это будет ад. Я бы сравнил использование селекторов по элементам и каскада с document.write , href="javascript:" и т.д. :)</p>
<p>И да — никто не мешает использовать каскад там, где это нужно. Когда нужно стилизовать блок в контексте другого блока, определённые сочетания блоков и их пересечения — тут-то каскад и пригодится, для этого он и нужен.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5283">5 января ’12 в 14:54</a></time>
					</footer>
				</article>
				<article id="comment-5284"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>а половина кода — это визуальная разметка прямо в документе.</p></blockquote>
<p>Ты так говоришь, как будто это что-то плохое! «Прямо документ» — это не HTML. Это или XML, или какая-нибудь структура БД, markdown, или что-то ещё аналогичное. Как я уже выше писал, нельзя из HTML стремиться делать «документ», нужно конечный результат обогащать семантикой, добавлять aria и прочие ништяки.</p>
<p>Сейчас существует такое количество шаблонизаторов, абстракций и прочих ништяков, что задача «поменять класс» не отличается от «поменять стиль в CSS». Zen Garden был актуален в своё время и до сих пор он занятен как <em>эксперимент</em> над CSS. Но это не то, как надо писать CSS в реальной жизни! Там в самых няшных примерах — хак на хаке и хаком погоняет.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5284">5 января ’12 в 15:00</a></time>
					</footer>
				</article>
				<article id="comment-5285"class="comment even thread-even depth-1">
					<p><b>Ром</b>, спасибо за ответ.<br />
1) Но, смотри, если, например мне нужно будет заюзать кнопку вместо ссылки вот в такой ситуации:</p>
<blockquote><p>« .nav &gt; li &gt; a »</p></blockquote>
<p>То, я же могу сделать отдельный стиль для .nav &gt; li &gt; button, а если для конкретной кнопки, то вообще так: .nav &gt; li &gt; .button_size_20px {}?</p>
<p>2) И, я тебя понял, что нужно думать головой, а не попой, и прежде чем делать какой-то ход в стилях, точно знать, что ты делаешь.<br />
Дело в том, что мне нравится БЭМ, но, с другой стороны, я, например, понимаю (или думаю, что понимаю), почему крупные компании, типа Яндекса пользуются этой методикой. Им это действительно выгодно, удобно и т.д.<br />
Просто в обычных смертных проектах, которые, например, ты сверстал и возвращаешься к ним раз в году, не хочется заюзывать БЭМ полностью (хотя я ещё его и не познал нихрена), но хочется использовать его отдельные части, так как они вызывают у меня симпатию и сам подход меня очень радует, независимость, пуленепробиваемость и т.д.</p>
<p>Может быть, да, согласен, менее гибко, но, если, подходить с умом, то эта "негибкость" будет стоить лишь несколько дополнительных записей в коде, типа таких .nav &gt; li &gt; .button_size_20px {}, при том, что в целом это будет такое же пуленепробиваемое существо)<br />
Как ты считаешь, бред или нет?</p>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5285">5 января ’12 в 15:15</a></time>
					</footer>
				</article>
				<article id="comment-5286"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Zen Garden был актуален в своё время…</p></blockquote>
<p>ZG значительно опережал своё время (помнишь запасные элементы в конце шаблона?) и очень сильно повлиял на западную вёрстку и в меньшей мере на рунет. Боюсь, что здесь, как уже бывало у древних, должно пройти 40 лет, прежде чем вымрут те верстальщики, которые помнят про то, что колонки у таблицы местами не переставить, что они вообще нужны, а IE6(7-8) не понимает весь самый крутой CSS.</p>
<p>Ты же понимаешь, что шаблонизаторы и абстракции взялись не просто так, не потому, что они классные и удобные, а потому, что браузеры развивались так, как они развивались — не всегда хорошо и достаточно быстро.</p>
<p>В общем, я знаю все «за» и «против», все нюансы и доводы. БЭМ и хорошо, и плохо, не в этом дело. Дело в том, что когда принципы верстальщика основаны хоть и на крутой, но всё же местечковой и узкоспециализированной разработке Яндекса, сугубо практической и не застрахованной от глобальных изменений завтра — это плохо. Принципы, выливающиеся в собственную практическую реализацию, не могут быть приземлены до желания быстрее закончить проект, забыть о нём и пойти рубиться в кваку. Принцип разделения представления от содержимого говорит о настоящей гибкости, а не подхаченой при помощи консольных хелперов и скриптов.</p>
<p>А человек без принципов — это не человек, это вчерашнее фруктовое желе.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5286">5 января ’12 в 15:27</a></time>
					</footer>
				</article>
				<article id="comment-5287"class="comment even thread-even depth-1">
					<blockquote><p>сугубо практической и не застрахованной от глобальных изменений завтра</p></blockquote>
<p>Меняется максимум нотация, да технология обрастает всякими новыми тузлами и библиотеками. Но не суть.</p>
<p>БЭМ с точки зрения HTML&amp;CSS не менялся с доклада Харисова на январском субботнике в 2009, когда это ещё были АНБ. Менялась только нотация, но на принцип это не влияет, это-то как раз влияет только на разработчиков Яндекса :) А то, в какой нотации было написано что-то в стороне — не важно. Важно, чтобы принципы соблюдались.</p>
<p>Ты как-то странно передёргиваешь и набрасываешь на БЭМ, говоря всего лишь о людях, неверно его применяющих. Так вот каскад-то люди правильно применяют не чаще, спецификации никто не читает. Это — проблема, необразованность — проблема.</p>
<p>Давайте агитировать за здравый смысл, внимательное отношение к коду, а не против каких-то технологий. Когда ты пишешь твиты про БЭМ как-то так получается, что они выглядят как наброс на БЭМ, а не на людей, которые его не так понимают :) И если ты видишь путь как сделать так, чтобы БЭМ понимали правильно: пулл-реквесты у БЭМ-метода приветствуются, вперёд.</p>
<p>А так мы переливаем из пустого в порожнее, ну правда же.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5287">5 января ’12 в 16:01</a></time>
					</footer>
				</article>
				<article id="comment-5288"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Может быть, да, согласен, менее гибко, но, если, подходить с умом, то эта "негибкость" будет стоить лишь несколько дополнительных записей в коде, типа таких .nav &gt; li &gt; .button_size_20px {}, при том, что в целом это будет такое же пуленепробиваемое существо)<br />
Как ты считаешь, бред или нет?</p></blockquote>
<p>Всё правильно, помимо того, что может быть ещё с десяток случаев, когда придётся что-то дописывать в селектор, дублировать код и т.д. Мне нравится всё контролировать и проектировать интерфейс заранее так, чтобы любые изменения можно было потом максимально легко применять, а также, чтобы уже написанный код можно было легко адаптировать к любому другому проекту. Скажем, часто может захотеться отделить стили отдельного пункта меню от всего меню целиком, тогда пункт меню станет блоком, а не элементом, например. И т.д.</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5288">5 января ’12 в 16:04</a></time>
					</footer>
				</article>
				<article id="comment-5289"class="comment even thread-even depth-1">
					<p><b>Ром</b>, и прочитай пожалуйста вот этом мой пост. Это чтобы ты не подумал, что я совсем тупица и что я "селекторный" человек:)<br />
<a href="http://forum.htmlbook.ru/index.php?showtopic=30108&amp;st=0&amp;p=229248&amp;#entry229248" rel="nofollow">http://forum.htmlbook.ru/index.php?showtopic=30108&#038;st=0&#038;p=229248&#038;#entry229248</a></p>
<p>Я приводил пример с .nav &gt; li , потому что это в принципе неотделимо, т.е. не бывает меню без li внутри, но эта цепочка максимальная. И, если, например, внутри будет другой блок, то его цепочка будет начинаться уже от него или вообще уже не будет никакой цепочки, а будет просто обращение к единственному классу: .button_size_20px {}</p>
<p>Т.е., по сути, каждый отдельный блок уже будет независимым, как и в БЭМ-е, но просто жертва хомяковской независимости (которая всё таки отличается от БЭМовской, даже если и продумана), опять же, будет лишь несколько дополнительных правил CSS.</p>
<p>Вот, кстати, простой пример.<br />
Мне заказали вёрстку, допустим 10-и страниц. В макете есть навигация, в шапке. Она состоит из ul - li - a, это связка будет вечной, ну или, зайдя через год, максимум, что я увижу, это повешанный дополнительный класс в пункте.<br />
Вот из-за таких вот вещей и возникают вопросы: "А нахрена вообще тут БЭМ?".<br />
Но, всё же, понимая, что бездумно верстать - это по меньшей мере глупо, я пришёл к выводу, что в таких вот ситуациях и подойдёт "мой" мини-бэм, к которому я пришёл:)</p>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5289">5 января ’12 в 16:30</a></time>
					</footer>
				</article>
				<article id="comment-5290"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Упс, не ту ссылку дал, Ром. Ссори.<br />
<a href="http://forum.htmlbook.ru/index.php?showtopic=30108&amp;view=findpost&amp;p=229306" rel="nofollow">http://forum.htmlbook.ru/index.php?showtopic=30108&#038;view=findpost&#038;p=229306</a></p>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5290">5 января ’12 в 16:51</a></time>
					</footer>
				</article>
				<article id="comment-5291"class="comment even thread-even depth-1">
					<p>Да, ты там правильные аргументы приводишь, всё ок.</p>
<blockquote><p>Мне заказали вёрстку, допустим 10-и страниц. В макете есть навигация, в шапке. Она состоит из ul - li - a, это связка будет вечной, ну или, зайдя через год, максимум, что я увижу, это повешанный дополнительный класс в пункте.</p></blockquote>
<p>Но! А если вдруг где-то будет элемент, так же выглядящий, но с одним единственным пунктом? Это же уже не список. А если вдруг меню так поменяют, что будет больше подходить dl&gt;dt+dd? Или одним из пунктов будет кнопка загрузки файла (ой, я же об этом уже говорил), или неактивный пункт захочется сделать не с помощью <code>&lt;a&gt;</code>, а тем же <code>&lt;strong&gt;</code>, и т.д., и т.п.</p>
<p>Половина из этого происходило со мной на реальных небольших десятистраничных сайтах :)</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5291">5 января ’12 в 17:31</a></time>
					</footer>
				</article>
				<article id="comment-5292"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А-а-а, тут же не маркдаун и нет предпросмотра, Вадим! Поправь это уже! )</p>
					<footer>
						<a href="http://kizu.ru/" rel="external nofollow" class="url">Роман Комаров</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5292">5 января ’12 в 17:33</a></time>
					</footer>
				</article>
				<article id="comment-5293"class="comment even thread-even depth-1">
					<p><b>Рома,</b> в новой версии сайта будет лучше, а пока надеюсь на вашу сознательность ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5293">5 января ’12 в 17:40</a></time>
					</footer>
				</article>
				<article id="comment-5294"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Ром</b></p>
<blockquote><p>
А если вдруг меню так поменяют, что будет больше подходить dl&gt;dt+dd
</p></blockquote>
<p>Ну вообще всё же dl&gt;dt+dd отличается от ul&gt;li, это раз, а два - это то, что, если ты заметил, я пляшу не от ul, а от .nav, т.е. принципиально от класса, а не от элемента (своего рода, маленькая перестраховка), поэтому, если даже и поменяется, то тогда у dl будет стоять класс .nav, от которого я и пляшу. Соотсветственно в секции с навигацией я просто допишу дополнительные стили .nav&gt;dt {}. Если же одним из пунктов будет кнопка, то она снова получает, свой Отдельный класс и уже стилизуется, чисто по по нему, отдельно. Точно так же касается и активного пункта и прочего...</p>
<p>Т.е, я понимаю, что ты имеешь ввиду, но всё, что ты противопоставляешь, при правильном использовании мини-бэма, по идее должно присекаться с наименьшими потерями :)</p>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5294">5 января ’12 в 17:52</a></time>
					</footer>
				</article>
				<article id="comment-5295"class="comment even thread-even depth-1">
					<p><b>Максим,</b> то, что вы называете «мини-БЭМом» на самом деле обычная взрослая вёрстка, даже не АНБ, и никакие двойные подчёркивания в ней не нужны.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5295">5 января ’12 в 17:59</a></time>
					</footer>
				</article>
				<article id="comment-5296"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Вадим</b>, было бы здорово на "Ты" :)</p>
<blockquote><p>что вы называете «мини-БЭМом» на самом деле обычная взрослая вёрстка, даже не АНБ, и никакие двойные подчёркивания в ней не нужны.</p></blockquote>
<p>Немного не соглашусь всё таки. Сейчас постараюсь донести свою мысль более развёрнуто.</p>
<p>Сама фраза "мини-БЭМ" была придумана мною совсем недавно, и только лишь ради того, чтобы хоть как-то уточнить то, чего я хочу получить. А именно взять из БЭМ-а только ту часть, которая меня в нём зацепила. Это независимость. Меня привлекла сама идея... идея АНБ, что, кстати, до появления её в Яндексе, заставляло смотреть на вёрстку совсем иными глазами. Всё таки, надо признать, Рома был прав, когда где-то сказал, что фраза "Независимый блок" пришла с появлением БЭМ-а, ну по крайней мере, как минимум получила широкую огласку и стала известной. Меня лично это заставило переосмыслить многие вещи.</p>
<p>В то же время, я соглашусь с тобой, что моя, как ты выразился, "Взрослая вёрстка" (хотя я считаю её детской) - не является никаким мини-БЭМ-ом и уж тем-более ни о каком АНБ в ней и речи идти не может.<br />
Но, тем не менее, я бы хотел вытащить из БЭМ-а идею независимых блоков, и по максимуму (в пределах планки для хомяков) использовать её в своих (простых смертных) проектах. Соответственно, понятное дело, что полной АНБ добиться не получится, да и мне этого не нужно, так как я считаю (возможно ошибаюсь), что БЭМ на обычных хомяках - это слишком, и что использовать его по максимуму можно и даже нужно, только на крупных проектах. И это касается не только Яндекса, да и других, более мелких, но всё же крупненьких :)</p>
<p>Моя цель - это повысить качество своей работы, путём максимального, но при этом разумного, использования АНБ, даже наверное НБ, потому что "Абсолютная" мне попросту не нужна, по факту.<br />
Так как я ещё молод в этом деле и метаюсь в поисках истины, то хочу понять для себя, стоит ли мне повышать планку и использовать БЭМ на полную катушку или остаться на уровне своей "взрослой" вёрстки и этого вполне хватит для её пуленепробиваемости на <b>обычных</b> хомяках.</p>
<p>Тот же Рома, использует БЭМ в любых своих проектах, как в маленьких сайтах, так и в крупных. Я же привык думать своей (дурной) головой, а она всё никак не может определиться и понять, как же на самом деле правильно и железно? Вроде, с одной стороны я понимаю, что люди с большим опытом говорят, что БЭМ - это здорово, но с другой стороны... ну вот никак не могу я это принять и понять. Мне кажется, что, возможно, это и принесёт свои плоды, но, есть сомнения, не окажутся ли они бесполезными, лишним грузом в разметке, грязью и прочим хламом, который будет пылиться на полке, как старые книжки?</p>
					<footer>
						Максим Усачёв						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5296">6 января ’12 в 0:01</a></time>
					</footer>
				</article>
				<article id="comment-5298"class="comment even thread-even depth-1">
					<blockquote><p>pepelsbey: <b>БЭМ — хорошо</b>, это, в каком-то смысле, jQuery для больших контор, вроде Яндекса, т.е. <b>технология, опережающая и изменяющая вектор развития веб-стандартов.</b></p></blockquote>
<p><b>БЭМ — хорошо, но это не то к чему я привык!</b></p>
<blockquote><p>Роман Комаров: Ой, а БЭМ что-то херит? Расскажи :)</p></blockquote>
<blockquote><p>pepelsbey: Каскад херит. Любимый и вполне хорошо работающий.</p></blockquote>
<p>Главное что "Любимый". Родину не выбирают, если стараться отобрать у человека то к чему он привык он всеми силами будет сопротивляться.</p>
<p><a href="http://lurkmore.to/%D0%A1%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC_%D1%83%D1%82%D0%B5%D0%BD%D0%BA%D0%B0" rel="nofollow">Синдром утёнка</a>, есть такое понятие.</p>
<p>А как можно сопротивляться? Например, постарается найти изъяны:</p>
<blockquote><p>pepelsbey: Но хороша она для специфических задач, когда независимость, неограниченная вложенность и хранение логики прямо в коде для конструкторизации действительно нужны и используются.</p></blockquote>
<blockquote><p>pepelsbey: Вы не используете независимость блоков, вы не вкладываете их друг в друга — но таскаете за собой  хвосты избыточного кода, которые никогда не пригодятся.</p></blockquote>
<p><b>Избыточный код</b></p>
<p>Да верстка в терминах БЭМ требует строго соблюдать принципы именования классов и поэтому БЭМ классы получаются достаточно длинными.</p>
<p>Классы становятся длиннее а <b>размер кода проекта становится меньше</b> - БЭМ парадокс :)</p>
<p><b>Излишний консерватизм</b></p>
<p>БЭМ отталкивает тем что он <i>непривычен</i>, в особенности людям которые начинали с постулатов о "семантической разметке" и "разделения содержания от представления".</p>
<p>"И это теперь правильно?" - немой вопрос патриотов "семантической разметки".</p>
<p>Не отказывайтесь от технологии просто потому что она вам не нравится или вам непривычна, сначала стоит хотя бы попробовать.</p>
<p>P.S. тонны <del>бессмысленных</del> осмысленных классов для <del>бесполезно</del> полезно гибкой сетки.</p>
					<footer>
						<a href="http://bemclub.in/_matrioshka/" rel="external nofollow" class="url">exessqd</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5298">6 января ’12 в 9:47</a></time>
					</footer>
				</article>
				<article id="comment-5299"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Классы становятся длиннее а размер кода проекта становится меньше - БЭМ парадокс</p></blockquote>
<p>Речь не о том, что классы длинные — вы привычно сползаете на любимую тему — речь о том, что делать БЭМ ради БЭМа глупо. Если вам не приходится часто менять местами элементы и даже вкладывать их в необычных сочетаниях, если вы не пользуетесь своей вёрсткой как многократно используемой библиотекой, то БЭМ это трата времени впустую.</p>
<blockquote><p>Не отказывайтесь от технологии просто потому что она вам не нравится или вам непривычна, сначала стоит хотя бы попробовать</p></blockquote>
<p>Я внимательно слежу за развитием вёрстки в Яндексе, работал там, в том числе, и с первыми версиями АНБ из которых потом сформулировали БЭМ. И радовался, когда работал — там они были нужны.</p>
<p>Теперь про ваше «бунтарство», мол <em>семантика и каскад говно</em>. Прочитайте <a href="index.html#comment-5286" rel="nofollow">мой комментарий</a> про принципы — базовый и местечковый. И подумайте, если ещё помните как это делается.</p>
<p>Сказано достаточно и, во избежание назревающего хамства, комментарии закрыты.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2011-07-01T21:04:27+00:00"><a href="index.html#comment-5299">6 января ’12 в 13:57</a></time>
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
	<!-- 27 & 0,715 -->
</body>
</html>
