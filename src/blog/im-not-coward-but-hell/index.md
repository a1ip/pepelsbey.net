<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Я не трус, но чёрт возьми! — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Я не трус, но чёрт возьми!</a></h1>
				<time pubdate datetime="2008-08-30T02:23:00+00:00">30 августа ’08</time>
			</header>
			<p>И вроде ничего страшного&nbsp;— ну <a href="http://blogs.msdn.com/ie/archive/2008/08/27/internet-explorer-8-beta-2-now-available.aspx">вышел IE8 beta 2</a>, ну добавили поддержку каких-то новых свойств из стандарта CSS 2.1. Сиди себе и жди финальную версию где-нибудь поздней осенью. А там что? Никакого тебе hasLayout'а, никаких expression'ов&nbsp;— словом, никаких привычных методов борьбы с багами…</p>

<p>И поэтому немного страшно.</p>

<p>Для тех, кто не хочет, чтобы было страшно, есть два решения. Первое&nbsp;— поверить лозунгам Microsoft, что, мол, мы делаем браузер ориентированный на полную поддержку веб-стандартов. Что ж&nbsp;— отлично, значит, во избежание каких-то проблем, нужно просто не отдавать IE8 файлы хаков:</p>

<pre><code>&lt;head&gt; </code>
<code>    &lt;link rel="stylesheet" type="text/css" href="style.css"/&gt;</code>
<code>    &lt;!--[if lt IE 8]&gt;</code>
<code>        &lt;link rel="stylesheet" type="text/css" href="ie.css"/&gt;</code>
<code>    &lt;![endif]--&gt;</code>
<code>&lt;/head&gt;</code></pre>

<p>«Если версия IE младше, чем восьмая, то подключаем файл с хаками»,&nbsp;— говорит нам этот код. В результате, мы в полной мере доверяем той поддержке веб-стандатов, а также тем багам, которые безусловно всплывут после выхода IE8. Благородно до умиления, но, по мне, слишком рисково.</p>

<p>Второй вариант существует благодая паранойе Microsoft по поводу обратной совместимости. С другой стороны, их можно понять&nbsp;— у них на совести столько лет наплевательства на развитие собственного браузера. Называется этот переключатель <code>X-UA-Compatible</code> и включает в IE8 режим особый режим рендеринга не запутанными схемами <code>DOCTYPE</code>, а вполне ясным указанием:</p>

<pre><code>&lt;meta http-equiv="X-UA-Compatible" content="IE=7"/&gt;</code></pre>

<p>«Запустим-ка сайт в режиме совместимости с IE7»,&nbsp;— говорит нам этот код. Что значит, что IE8 использует для рендеринга вашего кода один из трёх (sic!) движков, что спрятаны у него под капотом, а именно режим <em>совместимости со стандартами</em> (standard compliance mode), который включается в IE6–7 при наличии правильного <code>DOCTYPE</code>. Оставшиеся два&nbsp;— это хвалёный <em>режим соответствия стандартам</em> (super standard mode) и конечно же <em>режим уловок</em> (quirks mode).</p>

<p>Отдельного изучения заслуживает вопрос комбинации <code>X-UA-Compatible</code> с различными <code>DOCTYPE</code>. В рассматриваемых примерах, IE6–7 по умолчанию переключаются в режим совместимости со стандартами правильным <code>DOCTYPE</code>.</p>

<p>Итак, комбинируем:</p>

<pre><code>&lt;head&gt; </code>
<code>    &lt;meta http-equiv="X-UA-Compatible" content="IE=7"/&gt;</code>
<code>    &lt;link rel="stylesheet" type="text/css" href="style.css"/&gt;</code>
<code>    &lt;!--[if IE]&gt;</code>
<code>        &lt;link rel="stylesheet" type="text/css" href="ie.css"/&gt;</code>
<code>    &lt;![endif]--&gt;</code>
<code>&lt;/head&gt;</code></pre>

<p>…в этом случае IE8 работает в точности как IE7, бороться с котрым мы уже более-менее научились. Для полной уверенности включим <code>X-UA-Compatible</code> со значением <strong>IE7</strong> и проверим:</p>

<pre><code>&lt;!--[if IE 8]&gt;IE8&lt;![endif]--&gt;</code>
<code>&lt;!--[if IE 7]&gt;IE7&lt;![endif]--&gt;</code></pre>

<p>В результате IE7, как и IE8 beta 2, выведут «IE7».</p>

<p>Таким образом, мы можем подстраховаться на случай, если финальная версия IE8 окажется такой же сырой бетой, как текущая бета кажется скорее сырой альфой&nbsp;— как <a href="http://habrahabr.ru/blogs/microsoft/38301/#comment_905394">метко выразился</a> на Хабре <a href="http://tanalin.com/">Марат Таналин</a>.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>19</small>
				</header>
				<article id="comment-601"class="comment even thread-even depth-1">
					<p>В новый мир со старыми граблями :)</p>
					<footer>
						<a href="http://agat.in" rel="external nofollow" class="url">agat</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-601">30 августа ’08 в 12:15</a></time>
					</footer>
				</article>
				<article id="comment-602"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Меня, кстати, сейчас больше волнует Firefox 3.1, где после <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=238072" rel="nofollow">изменений</a> в механизме рендеринга генерируемых элементов появилась одна весёлая проблема при сочетании такой генерации и display: table.</p>
<p>Придётся писать багрепорт, благо у Mozilla есть вменяемый способ это сделать. В отличие от. ;-)</p>
					<footer>
						<a href="http://tanalin.com/" rel="external nofollow" class="url">MT</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-602">30 августа ’08 в 19:07</a></time>
					</footer>
				</article>
				<article id="comment-603"class="comment even thread-even depth-1">
					<p>Я немного запутался тут: <cite>«Если версия IE младше, чем восьмая, то притворяемся шлангом и не подключаем файл с хаками»</cite>. Может, всё-таки, подключаем для всех, младше IE 8, кроме него самого? :-)</p>
					<footer>
						<a href="http://web-zine.org/" rel="external nofollow" class="url">Дин</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-603">30 августа ’08 в 19:57</a></time>
					</footer>
				</article>
				<article id="comment-604"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Я немного запутался тут</p></blockquote>
<p>Какая неприятность… Уже правлю, спасибо. Нельзя всё-таки по ночам публиковать. Писать можно, а публиковать только с утра, на свежую голову )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-604">30 августа ’08 в 20:45</a></time>
					</footer>
				</article>
				<article id="comment-625"class="comment even thread-even depth-1">
					<p>Уже читал это?</p>
<p><a href="http://www.theregister.co.uk/2008/08/29/hakon_lie_ie8_interoperability/" rel="nofollow">http://www.theregister.co.uk/2008/08/29/hakon_lie_ie8_interoperability/</a></p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-625">1 сентября ’08 в 4:58</a></time>
					</footer>
				</article>
				<article id="comment-628"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ага, и это тоже: <a href="http://snook.ca/archives/opinion/broken_promises/" rel="nofollow">Broken Promises</a>…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-628">1 сентября ’08 в 9:25</a></time>
					</footer>
				</article>
				<article id="comment-629"class="comment even thread-even depth-1">
					<p>Я не хочу замораживаться на текущем уровне и буду использовать первый метод, пока практика не покажет, что он несостоятелен.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-629">1 сентября ’08 в 9:37</a></time>
					</footer>
				</article>
				<article id="comment-634"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да уж... До чего довел ИЕ верстальщиков, если при выходе новой версии они стараются &quot;вернуть&quot; его к ИЕ7 со своими известными уже плюхами :)</p>
					<footer>
						Здыхлик						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-634">1 сентября ’08 в 9:57</a></time>
					</footer>
				</article>
				<article id="comment-635"class="comment even thread-even depth-1">
					<p>И крики про Интранет это бред. Вы вообще видели, как сделаны интранет сайты и кто их обычно делает? Это же ужас-ужас в большинстве случаев. Если для интранет сайта надо действительно сделать редим суперсовместимости достаточно добавить мета. Но с полным осознанием того, что делается.</p>
					<footer>
						Vitaly Harisov						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-635">1 сентября ’08 в 11:06</a></time>
					</footer>
				</article>
				<article id="comment-655"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Впечатления от IE8b2 только самые положительные, конечно много что кривовато, но тот же Developer Tools сочитает в себе самые необходимые возможности FireBug и Web Developer Tollbar в FF, отлаживать скрипты теперь очень удобно. И еще хорошо поддерживает кирилические домены. Вообщем я ожидаю лучшего :-)</p>
					<footer>
						<a href="http://www.codeisart.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-655">4 сентября ’08 в 14:14</a></time>
					</footer>
				</article>
				<article id="comment-656"class="comment even thread-even depth-1">
					<p>Да-да, поддерживает — <a href="http://xn--90ahabujzbu.net/" rel="nofollow">пепелсбей.net</a> :)<br />
Но пока почему-то только он (</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-656">4 сентября ’08 в 14:18</a></time>
					</footer>
				</article>
				<article id="comment-663"class="comment odd alt thread-odd thread-alt depth-1">
					<p><cite>Да-да, поддерживает — пепелсбей.net :)<br />
Но пока почему-то только он (</cite><br />
Opera открыла, FF и Safari тоже, но исказили название в <a href="http://xn--90ahabujzbu.net/" rel="nofollow">http://xn--90ahabujzbu.net/</a></p>
					<footer>
						Del'ka						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-663">5 сентября ’08 в 23:46</a></time>
					</footer>
				</article>
				<article id="comment-664"class="comment even thread-even depth-1">
					<p>Да, Opera и впрямь поддерживает, а остальные отдают название в виде какого-то псевдонима в латинице.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-664">6 сентября ’08 в 1:12</a></time>
					</footer>
				</article>
				<article id="comment-672"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Да, Opera и впрямь поддерживает, а остальные отдают название в виде какого-то псевдонима в латинице.</p></blockquote>
<p>Это punicode.</p>
					<footer>
						<a href="http://kildor.mirandaim.ru" rel="external nofollow" class="url">Kildor</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-672">6 сентября ’08 в 6:58</a></time>
					</footer>
				</article>
				<article id="comment-693"class="comment even thread-even depth-1">
					<p>А с чем будет поставляться восьмерка?</p>
<p>IE6 - XP, IE7 - Vista, IE8 - ??</p>
<p>Если просто &quot;поди да скачай&quot;, то ее смело модно со счетов сбрасывать.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-693">12 сентября ’08 в 1:56</a></time>
					</footer>
				</article>
				<article id="comment-694"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Думаю, что они могут пойти на то, чтобы включить этого зверька в какой-нибудь очень обязательный апдейт. В любом случае, мне кажется, что нынешняя доля IE7 в большей степени состоит из «поди да скачай», чем из пользователей Vist'ы.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-694">12 сентября ’08 в 2:17</a></time>
					</footer>
				</article>
				<article id="comment-696"class="comment even thread-even depth-1">
					<p><cite>В любом случае, мне кажется, что нынешняя доля IE7 в большей степени состоит из «поди да скачай», чем из пользователей Vist'ы.</cite></p>
<p>Да ладно. Какие могут быть причины у человека (не разработчика), чтобы отдельно скачать IE7? Есть IE6 работает - вот и хорошо, вот и ладно. А если он задумается о апдейте, то в думаю так или иначе до его слуха дойдет инфа и о других браузерах.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-696">12 сентября ’08 в 14:30</a></time>
					</footer>
				</article>
				<article id="comment-697"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В IE7 есть вкладки :) Ну и вообще — иконки «секси»…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-697">12 сентября ’08 в 14:33</a></time>
					</footer>
				</article>
				<article id="comment-739"class="comment even thread-even depth-1">
					<p><b>Максим Покровский</b>, есть такая штука «Автоматическое обновление», которое само предложит установить новую версию Internet Explorer или очередную заплатку для него. Во многих локальных сетях сейчас есть серверы автоматического обновления Windows XP/Vista, где пользователи совершенно бесплатно с большой скоростью (у нас до 8Мбит/сек) могут обновить систему, и многие этим пользуются, покрайней мере в моем городе Волгограде.</p>
					<footer>
						<a href="http://www.codeisart.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-08-30T02:23:00+00:00"><a href="index.html#comment-739">18 сентября ’08 в 11:50</a></time>
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
	<!-- 16 & 0,474 -->
</body>
</html>
