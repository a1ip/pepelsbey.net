<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Уличная магия IE — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Уличная магия IE</a></h1>
				<time pubdate datetime="2008-09-05T03:49:50+00:00">5 сентября ’08</time>
			</header>
			<p>Продолжая тему того, как нужно прятаться, чтобы <a href="/2008/08/im-not-coward-but-hell/">не бояться</a>, сегодня я хотел бы предложить вам руководство по использованию магического элемента <code>X-UA-Compatible</code> в контексте общего понимания переключения режимов рендеринга в&nbsp;Internet Explorer.</p>

<p>Итак, сводный список «<a href="/pro/2008/09/ie-street-magic/">Режимы рендеринга Internet Explorer</a>».</p>

<p>Принцип построения данного списка звучит просто: что нужно сделать и каких ошибок не допустить для того, чтобы IE6–8 вёл себя согласно поставленным задачам. То есть работал или в <em>режиме совместимости со стандартами</em> (standard compliance mode), или в <em>режиме уловок</em> (quirks mode), или&nbsp;— в&nbsp;случае с&nbsp;IE8&nbsp;— в <em>режиме соответствия стандартам</em> (super standard mode).</p>

<p>Каждый из примеров списка состоит только из тех элементов, которые необходимы для соответствующего режима. К примеру, для переключения в <em>режим совместимости со стандартами</em>, IE6 нужен только правильный <code>&lt;DOCTYPE&gt;</code>, перед которым возможно наличие только пробелов и переводов строк:</p>

<pre><code>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"</code>
<code>"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"&gt;</code></pre>

<p>В то время как для IE8 достаточно произнести подобное заклинание:</p>

<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=7"/&gt;</code></pre>

<p>В данном списке не учтены особенности перехода IE8 из <em>режима соответствия стандартам</em> в <em>режим совместимости со стандартами</em> на интранет-страницах, что является скорее бизнес-ходом, не дающим разработчикам особого выбора. Подробнее об этом можно прочитать у Хокона Ли (Hakon Lie) в заметке «<a href="http://www.theregister.co.uk/2008/08/29/hakon_lie_ie8_interoperability/">Microsoft breaks IE8 interoperability promise</a>».</p>

<p>Такие вот чудеса.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>18</small>
				</header>
				<article id="comment-662"class="comment even thread-even depth-1">
					<p>IE6 имеет режим совместимости со стандартами???<br />
:):):)</p>
					<footer>
						<a href="http://www.nicothin.ru" rel="external nofollow" class="url">Николай Громов (nicothin)</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-662">5 сентября ’08 в 6:06</a></time>
					</footer>
				</article>
				<article id="comment-683"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>IE6 имеет режим совместимости со стандартами???</cite><br />
Только, видимо, по мнению explorer'а, в стандарты забыли дописать «Режим совместимости с MSIE»</p>
					<footer>
						Ви						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-683">8 сентября ’08 в 23:22</a></time>
					</footer>
				</article>
				<article id="comment-684"class="comment even thread-even depth-1">
					<p>«<cite>Не стреляйте в пианиста, он играет, как умеет</cite>» ©</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-684">8 сентября ’08 в 23:27</a></time>
					</footer>
				</article>
				<article id="comment-688"class="comment odd alt thread-odd thread-alt depth-1">
					<p>есть у меня мечта, нарисовать в ие6 див высотой в 1 пиксель.. но как??</p>
					<footer>
						variable						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-688">10 сентября ’08 в 14:01</a></time>
					</footer>
				</article>
				<article id="comment-689"class="comment even thread-even depth-1">
					<p>Да, в общем-то, просто: DIV { height:1px; overflow:hidden; }</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-689">10 сентября ’08 в 14:10</a></time>
					</footer>
				</article>
				<article id="comment-1355"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>есть у меня мечта, нарисовать в ие6 див высотой в 1 пиксель.. но как??</p></blockquote>
<p>по этому поводу развлекался давно ещё: <a href="http://www.thybzi.com/ie6-height-1px.html" rel="nofollow">http://www.thybzi.com/ie6-height-1px.html</a><br />
если вкратце - на высоту влияет цвет фона :))</p>
					<footer>
						<a href="http://www.thybzi.com" rel="external nofollow" class="url">ThyBzi</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-1355">18 октября ’08 в 13:31</a></time>
					</footer>
				</article>
				<article id="comment-1496"class="comment even thread-even depth-1">
					<blockquote><p>есть у меня мечта, нарисовать в ие6 див высотой в 1 пиксель.. но как??</p></blockquote>
<p>font: 0/0 serif; height: 1px;</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-1496">28 октября ’08 в 13:20</a></time>
					</footer>
				</article>
				<article id="comment-1497"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>font: 0/0 serif; height: 1px;</p></blockquote>
<p>Вообще overflow:hidden идеологически круче — мы заставляем IE соблюдать заданную высоту блока так, как делают это нормальные браузеры ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-1497">28 октября ’08 в 13:49</a></time>
					</footer>
				</article>
				<article id="comment-1524"class="comment even thread-even depth-1">
					<p>Или так, да.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-1524">29 октября ’08 в 11:37</a></time>
					</footer>
				</article>
				<article id="comment-1545"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>есть у меня мечта, нарисовать в ие6 див высотой в 1 пиксель.. но как??</p></blockquote>
<p>так например</p>
<pre>
<code>.hr1 {</code>
<code>    height:1px;</code>
<code>    line-height:0px;</code>
<code>    font-size:0px;</code>
<code>    border-bottom:1px dashed #4373DC;</code>
<code>}</code>
</pre>
					<footer>
						November						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-1545">29 октября ’08 в 17:00</a></time>
					</footer>
				</article>
				<article id="comment-1548"class="comment even thread-even depth-1">
					<p>Надеюсь, что вопрос однопиксельного DIV'а закрыт окончательно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-1548">29 октября ’08 в 17:11</a></time>
					</footer>
				</article>
				<article id="comment-3826"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Сорри за оффтоп, а как бы это поставить ie8, чтоб остался стоять 7-ой? Комплект из 5,6 у меня есть...</p>
					<footer>
						Катя						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-3826">3 мая ’09 в 16:23</a></time>
					</footer>
				</article>
				<article id="comment-3827"class="comment even thread-even depth-1">
					<p>Строго говоря, в IE8 есть кнопочка «Compatibility View», которая делает из него IE7.<br />
Но это не 100% соответствие IE7, хотя для большинства случаев сойдёт.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-3827">4 мая ’09 в 14:45</a></time>
					</footer>
				</article>
				<article id="comment-4183"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Наболевший вопрос:<br />
Собственно не раз было такое, что в режиме совместимости ИЕ8 показывает не так, как ИЕ7, из-за этого отказался от совместимости и теперь у меня 3 файла стилей для ИЕ.<br />
Собственно вопросы:<br />
1. какие плюсы/минусы режима совместимости<br />
2. насколько плохо 3 файла стилей?<br />
3. как всё-таки лучше?</p>
<p>Благодарю за ответы.<br />
П.С. Куплю/приму инвайт на Хабр.</p>
					<footer>
						almaz						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-4183">6 августа ’09 в 4:11</a></time>
					</footer>
				</article>
				<article id="comment-4184"class="comment even thread-even depth-1">
					<p>1. Плюсы в том, что вы можете писать почти такой же код, как для остальных браузеров. Это удобно. Хорошо ещё то, что для IE8 в этом режиме можно использовать фичи, недоступные для IE7<br />
2. Если только три файла хаков для IE — это наверное перебор. Достаточно одного файла, в котором фильтровать селекторы: * HTML для IE6, *+HTML для IE7.<br />
3. См. пункт 2</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-4184">6 августа ’09 в 11:17</a></time>
					</footer>
				</article>
				<article id="comment-4185"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Как-то я про разделение между ИЕ забыл, спасибо. То есть один файл в СС и без режима совместимости?</p>
<p>А насчёт минусов: они вообще имеются?</p>
					<footer>
						almaz						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-4185">6 августа ’09 в 12:04</a></time>
					</footer>
				</article>
				<article id="comment-4186"class="comment even thread-even depth-1">
					<p>Да, CC if IE и всё в один файл. Минусы только в том, что придётся иметь в виду ещё одну версию IE, но это полезно с точки зрения будущего создаваемой вёрстки.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-4186">6 августа ’09 в 12:15</a></time>
					</footer>
				</article>
				<article id="comment-5124"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>есть у меня мечта, нарисовать в ие6 див высотой в 1 пиксель.. но как??</p></blockquote>
<p>.ie6-height-1px {<br />
height: 1px;<br />
font-size: 1px;<br />
}</p>
					<footer>
						Антон						<time pubdate datetime="2008-09-05T03:49:50+00:00"><a href="index.html#comment-5124">3 марта ’11 в 19:58</a></time>
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
	<!-- 17 & 0,526 -->
</body>
</html>
