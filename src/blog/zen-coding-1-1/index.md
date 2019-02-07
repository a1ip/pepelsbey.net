<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Zen Coding 1.1 — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Zen Coding 1.1</a></h1>
				<time pubdate datetime="2008-11-06T05:04:20+00:00">6 ноября ’08</time>
			</header>
			<p>Первая порция исправлений ошибок и некоторых новых возможностей пакетов <a href="/2008/10/zen-css/">Zen CSS</a> и <a href="/2008/08/zen-html/">Zen HTML</a> для TextMate доступна на странице проекта <a href="http://code.google.com/p/zen-coding/">Zen Coding</a>.</p>

<p>Итак, список изменений:</p>

<h2>Общие</h2>

<ul>
<li>Модули языков переименованы в соответствии с рекомендациями по именованию: сначала название языка, потом пакета — HTML Zen, CSS Zen. Теперь языки будет удобнее выбирать из списка, но на самих названиях пакетов это не отразилось. Кстати, эти пакеты могу включаться сочетаниями клавиш: Zen HTML — <kbd>Cmd + Alt + H</kbd>, Zen CSS — <kbd>Cmd + Alt + C</kbd>.</li>
<li>Меню пакетов приведено в порядок: все элементы рассортированы по группам, а в корневом узле содержится версия пакета.</li>
</ul>

<h2>Zen HTML</h2>

<p>Для элементов <code>&lt;div&gt;</code> и <code>&lt;span&gt;</code> введены модификаторы, которые разворачивают их с атрибутами <code>id</code> или <code>class</code>:</p>

<pre><code>div# → &lt;div id="|"&gt;&lt;/div&gt;</code>
<code>span@ → &lt;span class="|"&gt;&lt;/span&gt;</code></pre>

<p>Расположения курсора сначала позволяет ввести <code>id</code> или <code>class</code> элемента, а после нажатия клавиши <kbd>Tab</kbd>, перейти внутрь. Обозначения модификаторов соответствуют горячим клавишам для вставки этих атрибутов: <kbd>Cmd + #</kbd> и <kbd>Cmd + @</kbd>.</p>

<p>Также для элементов <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;select&gt;</code> и <code>&lt;tr&gt;</code>, в дополнение к модификатору <code>+</code>, были введены числовые модификаторы количества детей в развёрнутом состоянии:</p>

<pre><code>ul+2 →</code>
<code>&lt;ul&gt;</code>
<code>   &lt;li&gt;|&lt;/li&gt;</code>
<code>   &lt;li&gt;|&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code></pre>

<pre><code>select+3 →</code>
<code>&lt;select&gt;</code>
<code>   &lt;option&gt;|&lt;/option&gt;</code>
<code>   &lt;option&gt;|&lt;/option&gt;</code>
<code>   &lt;option&gt;|&lt;/option&gt;</code>
<code>&lt;/select&gt;</code></pre>

<p>К сожалению, на данном этапе развития пакетов, все значения прописываются вручную, поэтому предусмотрено разворачивание максимум 5-ти детей. Комбинация <code>ul+6</code> уже не сработает.</p>

<h2>Zen CSS</h2>

<ul>
<li>Исправлена ошибка с разворачиванием фигурных скобок, которая отменяла срабатывание первой комбинации. Эта ошибка заметна на <a href="/2008/10/zen-css/">скринкасте</a>, в момент описания фона для <code>&lt;body&gt;</code>.</li>
<li>Автоматическая подстановка точки с запятой после двоеточия теперь реализована умнее — через <code>smartTypingPairs</code>.</li>
<li>Клавиша <kbd>Tab</kbd> после точки с запятой в конце правила теперь создаёт новую строку в блоке правил.</li>
<li>Псевдоним <code>bgi</code> теперь разворачивается по умолчанию с шаблоном значения <code>background-image:url(../i/|);</code>, потому как особых альтернатив нет, а значение <code>none</code> выводится с помощью <code>bgi:n</code>.</li>
</ul>

<p>Дальше — больше.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>27</small>
				</header>
				<article id="comment-1700"class="comment even thread-even depth-1">
					<p>Спасибо.<br />
Немного напрягает, что в CSS после свойства и значения нет пробела, например display:block;. Тебя это не напрягает?<br />
Если я у себя все это подредактировал и сейчас залью твой новый бандл, то слетит все мое?</p>
					<footer>
						<a href="http://chuprin.com" rel="external nofollow" class="url">Chupa</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1700">6 ноября ’08 в 11:13</a></time>
					</footer>
				</article>
				<article id="comment-1702"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да, несколько интересных моментов есть -)<br />
А вы разрешаете использовать ваши идеи при реализации аналогичного функционала для других редакторов? Или есть какие-то "лицензионные ограничения"?<br />
Понравилась возможность указывать необходимость id и class сразу в шоткате. Пока для себя я, например, разворачивал div с указанным id, который был выделен полностью и, соответственно, его можно было сразу удалить. Надо попробовать ваш способ - может окажется удобнее.<br />
А в TextMate не сработал бандл, который разворачивает следующий пункт после закрывающего тега в списках? Мне такой подход все-таки кажется удобнее, пользуюсь им в InType. Можно его добавить для многих тегов, которые часто используются в последовательностях - для td, tr и dd, например.</p>
					<footer>
						<a href="http://ismmurf.spaces.live.com/" rel="external nofollow" class="url">smmurf</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1702">6 ноября ’08 в 12:53</a></time>
					</footer>
				</article>
				<article id="comment-1704"class="comment even thread-even depth-1">
					<blockquote><p>Немного напрягает, что в CSS после свойства и значения нет пробела</p></blockquote>
<p>Меня это не может напрягать, ибо это моё решение. Но, судя по всему, придётся-таки сделать переменную окружения вроде TM_CSS_SPACE, которая будет отвечать за пробел после двоеточия.</p>
<blockquote><p>есть какие-то "лицензионные ограничения"?</p></blockquote>
<p>Укажете авторство идеи где-нибудь в комментариях — хорошо, не укажете — не беда. Исключительно ваше дело )</p>
<blockquote><p>А в TextMate не сработал бандл, который разворачивает следующий пункт после закрывающего тега в списках?</p></blockquote>
<p>Исключительно для списков можно такое сделать, да. Таб-триггер на закрывающей тег. Попробую и если всё будет удобно, то внедрю в следующей версии.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1704">6 ноября ’08 в 14:49</a></time>
					</footer>
				</article>
				<article id="comment-1706"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Эх, вот бы было воистину круто как-то адаптировать это дело под inType. Пока на Мак никак нет возможности пересесть.</p>
					<footer>
						<a href="http://pchelobej.livejournal.com" rel="external nofollow" class="url">Pchelobej</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1706">6 ноября ’08 в 15:08</a></time>
					</footer>
				</article>
				<article id="comment-1707"class="comment even thread-even depth-1">
					<p>Если кто-то возьмётся за написание подобного для InType, я буду только за.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1707">6 ноября ’08 в 15:12</a></time>
					</footer>
				</article>
				<article id="comment-1708"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я занимаюсь написанием HTML-бандла под InType, но кое-что меняю на свой вкус, когда будет готово - сказать пока не могу, работа большая, и хочется сделать хорошо. Получится ли оно лучше или хуже - тоже покажет практика, когда будет готово - опубликую, конечно, если кому-то окажется полезным - буду только рад.</p>
					<footer>
						<a href="http://ismmurf.spaces.live.com/" rel="external nofollow" class="url">smmurf</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1708">6 ноября ’08 в 15:17</a></time>
					</footer>
				</article>
				<article id="comment-1709"class="comment even thread-even depth-1">
					<p>Под e-TextEditor кто-нить тестил уже?</p>
					<footer>
						stolho						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1709">6 ноября ’08 в 16:06</a></time>
					</footer>
				</article>
				<article id="comment-1712"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Заметил такую штуку: непарные тэги вставляются без косой черты в конце.<br />
Большинство, я думаю, все-таки в xhtml верстает.</p>
					<footer>
						<a href="http://chuprin.com" rel="external nofollow" class="url">Chupa</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1712">6 ноября ’08 в 17:10</a></time>
					</footer>
				</article>
				<article id="comment-1713"class="comment even thread-even depth-1">
					<p>Для XHTML-вывода одиночных элементов нужно сделать вот так:</p>
<pre><code>Preferences &gt; Advanced &gt; Shell Variables &gt; + &gt; Variable: TM_XHTML, Value: /</code></pre>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1713">6 ноября ’08 в 17:18</a></time>
					</footer>
				</article>
				<article id="comment-1714"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я, кажется, в прошлый раз забыл сказать "Большое Спасибо" :)<br />
Говорю в этот.<br />
И еще раз: Большое Спасибо!</p>
					<footer>
						<a href="http://mauzon.com" rel="external nofollow" class="url">Alex Mauzon</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1714">6 ноября ’08 в 17:57</a></time>
					</footer>
				</article>
				<article id="comment-1715"class="comment even thread-even depth-1">
					<p>Пожалуйста, Алекс :) Рад, что тебе понравилось.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1715">6 ноября ’08 в 18:01</a></time>
					</footer>
				</article>
				<article id="comment-1757"class="comment odd alt thread-odd thread-alt depth-1">
					<p>stolho, я тестировал, практически все хорошо, немного подредактировать под себя и все ок.<br />
Спасибо. Пересел с дримвьюера. Не жаловался особо на него, но захотелось чего-то более интересного, поэтому ещё раз спасибо.</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1757">9 ноября ’08 в 14:21</a></time>
					</footer>
				</article>
				<article id="comment-1773"class="comment even thread-even depth-1">
					<p>Вадим, я в полном восторге от твоего труда, который сложно переоценить =]. С твоими бандлами TextMate превратился в эталон удобства!<br />
З.Ы. А почему img→ возвращает не закрытый img src? Ай-ай-ай =]</p>
					<footer>
						<a href="http://www.reactant.ru" rel="external nofollow" class="url">ATimofeev</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1773">10 ноября ’08 в 14:51</a></time>
					</footer>
				</article>
				<article id="comment-1776"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>ATimofeev,</strong> это дело настраиваемо, смотри <a href="index.html#comment-1713" rel="nofollow">предыдущий ответ</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1776">10 ноября ’08 в 15:02</a></time>
					</footer>
				</article>
				<article id="comment-1841"class="comment even thread-even depth-1">
					<p>Coda, кстати, начала понимать бандлы TextMate. Никто не пробовал эти?</p>
					<footer>
						<a href="http://chuprin.com" rel="external nofollow" class="url">Chupa</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1841">13 ноября ’08 в 11:31</a></time>
					</footer>
				</article>
				<article id="comment-1842"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вадим, предлагаю взглянуть на "плюс" после имени тега, как не неудобство.</p>
<pre>
<code>table+</code>
<code>table+2</code>
</pre>
<p>Приходится нажимать Shift<br />
А может быть сделать </p>
<pre>
<code>table1</code>
<code>table2</code>
</pre>
<p>?</p>
					<footer>
						<a href="http://makishvili.ya.ru" rel="external nofollow" class="url">Вадим Макишвили</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1842">13 ноября ’08 в 13:17</a></time>
					</footer>
				</article>
				<article id="comment-1844"class="comment even thread-even depth-1">
					<p><strong>Chupa,</strong> Coda Plug-in Creator не видит ни одной команды внутри этих бандлов, так что пока без вариантов. Да и вообще, похоже, что Coda пошла по более сложному пути, без какого-то внутреннего языка описания плагинов — только те, на которых в принципе можно писать под Mac OS X. Так что придётся заняться серьёзным программированием…</p>
<p><strong>Вадим,</strong> на подходе версия 1.2, где всё решено несколько иначе. Но если говорить об этом, то мне совсем не по душе нынешняя симферопольская концепция, которая не подразумевает разделителей. Я пытаюсь сделать мета-язык написания кода максимально интуитивно понятным, чему очень помогают разделители. К тому же, я не оставляю задумку написать весь бандл единой командой, которая будет обрабатывать код по принципу CSS Query.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1844">13 ноября ’08 в 14:22</a></time>
					</footer>
				</article>
				<article id="comment-1845"class="comment odd alt thread-odd thread-alt depth-1">
					<p>pepelsbey, я за использую e-texteditor. В нем есть некоторые проблемы (что естественно). Возможно у тебя будет время чтобы эти моменты поправить? Если да, то скажи и я оглашу их. А на нет и суда нет =) Спасибо.</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1845">13 ноября ’08 в 15:07</a></time>
					</footer>
				</article>
				<article id="comment-1846"class="comment even thread-even depth-1">
					<p>К сожалению, ни разу не работал в E, поэтому сходу помочь не смогу. Но думаю, что среди читателей могут найтись знатоки, так что пожалуйста — расскажи.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1846">13 ноября ’08 в 15:10</a></time>
					</footer>
				</article>
				<article id="comment-1847"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Я пытаюсь сделать мета-язык написания кода максимально интуитивно понятным, чему очень помогают разделители.</p></blockquote>
<p>А разве эти темплейты не предназначены в первую очередь для того, чтобы сократить количество набираемых руками символов? Введение дополнительных разделитей увеличивает это количество. Разве нет?</p>
					<footer>
						<a href="http://makishvili.ya.ru" rel="external nofollow" class="url">Вадим Макишвили</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1847">13 ноября ’08 в 19:13</a></time>
					</footer>
				</article>
				<article id="comment-1848"class="comment even thread-even depth-1">
					<p>Темплейты — это некий баланс между краткостью и вменяемостью ;) Поэтому и спорим, поэтому и сложно придумать что-то действительно удобное.</p>
<p>А если гнаться за краткостью, нужно кодировать команды комбинациями из трёх случайных символов в диапазонах aA-zZ, 0-9 ;) — а потом просто их заучивать.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1848">13 ноября ’08 в 19:31</a></time>
					</footer>
				</article>
				<article id="comment-1852"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В общем в e-texteditor проблемы небольшие. Для XHTML-вывода одиночных элементов там к сожалению нету переключения никакого, поэтому если это не требует действительно много времени, то возможно ли попросту добавить закрывающий слэш? Ничего более умного я предложить не могу, но может быть ещё у кого-нибудь будут идеи. В принципе проблема небольшая конечно, можно и самому все поправить. Другой вопрос когда апдейты выходят, то приходится снова перебирать вручную.<br />
Ещё одна проблема - при наборе css сокращение вида ta:c (дальше tab) которое должно вывести text-align:center; превратится в ta:color:#fff; Т.е. там где для вывода свойства используется одна буква (b, w, h, ...), то при наборе некоторых свойств придется их атрибуты дописывать вручную, т.к. "e" воспринимает одну букву за сокращение для свойства. Моя идея может быть вывод правила зависит от регистра? Тогда при соответствующих изменениях в сниппетах при наборе ta:C выведется то что нужно.</p>
<p>Написал корявенько, но думаю в общих чертах понятно. Если нет - попробую более детально описать. Спасибо.</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-1852">13 ноября ’08 в 23:29</a></time>
					</footer>
				</article>
				<article id="comment-3634"class="comment even thread-even depth-1">
					<p>Если кому-то еще это может быть полезным, есть набор снипетов для InType.<br />
<a href="http://code.google.com/p/html-intype-bundle-improved/" rel="nofollow">http://code.google.com/p/html-intype-bundle-improved/</a><br />
В общем это не порт Zen Coding'а, а самостоятельный пакет, сделанный с учетом некоторых принципов, использованных здесь.</p>
					<footer>
						<a href="http://smmurf.ya.ru/" rel="external nofollow" class="url">Антон Вернигор</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-3634">25 марта ’09 в 17:32</a></time>
					</footer>
				</article>
				<article id="comment-3635"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да — читал про него, но руки не дошли попробовать.<br />
Навскидку: очень сомнительными показались горячие клавиши к style, id и class.</p>
<p>Сейчас, кстати, зреет концепция Zen Coding 2.0 с HTML5, CSS3 и большей продуманностью.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-3635">25 марта ’09 в 18:02</a></time>
					</footer>
				</article>
				<article id="comment-3636"class="comment even thread-even depth-1">
					<p>Мне они кажутся удобными за счет расположения. К цифровому ряду дальше нужно тянуться :-) Впрочем, я попробую, наверное, пока для себя использовать ваши комбинации клавиш, и если привыкну, то обновлю пакет. Потому что в первую очередь обращают внимание именно на них :-)</p>
					<footer>
						<a href="http://smmurf.ya.ru/" rel="external nofollow" class="url">Антон Вернигор</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-3636">25 марта ’09 в 18:46</a></time>
					</footer>
				</article>
				<article id="comment-3637"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Комбинация может быть чертовски удобной, но если её очень сложно запомнить — порог успешного вхождения будет слишком высок. Поэтому я и пытаюсь к каждой штуковине прицепить хоть каплю смысла, хотя бы одну знакомую букву )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-3637">25 марта ’09 в 18:52</a></time>
					</footer>
				</article>
				<article id="comment-3638"class="comment even thread-even depth-1">
					<p>Одна знакомая буква там есть. Class — это точка. Просто как в CSS. Стиль — это «;» — она ведь есть почти после каждого правила. А id — просто потому что рядом.<br />
Но, возможно, предложенные вами проще запоминаются. Я попробую.</p>
					<footer>
						<a href="http://smmurf.ya.ru/" rel="external nofollow" class="url">Антон Вернигор</a>						<time pubdate datetime="2008-11-06T05:04:20+00:00"><a href="index.html#comment-3638">25 марта ’09 в 18:59</a></time>
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
	<!-- 20 & 0,644 -->
</body>
</html>
