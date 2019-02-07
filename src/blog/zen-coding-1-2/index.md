<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Zen Coding 1.2 — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Zen Coding 1.2</a></h1>
				<time pubdate datetime="2008-11-15T03:39:52+00:00">15 ноября ’08</time>
			</header>
			<p>Очередная порция исправлений ошибок, новых возможностей и прочих приятных изменений пакетов <a href="/2008/10/zen-css/">Zen CSS</a> и <a href="/2008/08/zen-html/">Zen HTML</a>, а также новый способ их распространения.</p>

<p>Главное изменение связано с открытием филиала проекта на Google Code — <a href="http://code.google.com/p/zen-coding/">Zen&nbsp;Coding</a>. Теперь следить за появлением новых версий станет проще, а получить их можно будет двумя способами: по старинке — скачав и распаковав архив, либо при помощи svn, что позволит удобно следить за внесёнными изменениями.</p>

<p>С первым способом всё понятно — архиватором умеют пользоваться все, поэтому вы знаете, что делать с последними версиями пакетов на <a href="http://code.google.com/p/zen-coding/downloads/list">странице загрузки</a>. Второй способ чуть сложнее: если вы работаете под Mac OS X, то всё необходимое для работы с <strong>svn</strong> в вашей системе уже есть, однако можно пойти дальше и установить замечательное приложение <a href="http://www.versionsapp.com/">Versions</a> или воспользоваться встроенной поддержкой svn в редакторе <a href="http://www.panic.com/coda/">Coda</a>. Я же опишу простейший способ — при помощи Терминала, стандартной программы Mac OS X.</p>

<p>Для начала откройте Терминал, набрав его название в Spotlight — по-русски или по-английски, в зависимости от языка системы. Дальше всё удивительно просто: при помощи первой команды вы переходите на рабочий стол, при помощи второй — скачиваете на него свежую версию пакета:</p>

<pre><code>cd ~/Desktop/</code>
<code>svn co http://zen-coding.googlecode.com/svn/trunk/ .</code></pre>

<p>Если же вы работаете под Windows, то могу предложить вам воспользоваться утилитой <a href="http://tortoisesvn.tigris.org/">TortoiseSVN</a> — тоже не менее простой в обращении. Так, с контролем версий разобрались, переходим к списку изменений:</p>

<h2>Zen HTML</h2>

<p>Система комбинаций <kbd>E+n</kbd>, которая разворачивала селекторы с необходимым количеством детей (от одного до пяти) была полностью заменена техникой, которая позволит быстрее набирать любые последовательности списков для элементов <code>&lt;li&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code> и <code>&lt;option&gt;</code>. Суть техники заключается в том, что нажатие клавиши <kbd>Tab</kbd> после каждого закрывающего элемента будет создавать новую строку и следующую пару элементов. Таким образом, кобинация <kbd>li Tab Значение Tab Tab Значение</kbd> создаст нам такую конструкцию:</p>

<pre><code>&lt;li&gt;Значение&lt;/li&gt;</code>
<code>&lt;li&gt;Значение&lt;/li&gt;</code></pre>

<p>Поясню: первый <code>Tab</code> создаст нам первый <code>&lt;li&gt;</code>, второй выведет курсор за его пределы, а нажатый тут же третий, создаст новую строку со вторым <code>&lt;li&gt;</code>. Так можно продолжать довольно долго, процесс завораживает своей простотой. Далее — небольшие изменения:</p>

<ul>
<li>Элемент <code>&lt;br&gt;</code> теперь можно вставить не только комбинацией <kbd>br+Tab</kbd>, но и более удобной и понятной <kbd>Shift+Enter</kbd>.</li>
<li>Для оборачивания выделенного фрагмента в нужный элемент, появились сочетания <kbd>Ctrl+W</kbd> — для однострочного заворачивания и <kbd>Ctrl+Shift+W</kbd> — для многострочного. По умолчанию, оборачивающим элементом становится <code>&lt;div&gt;</code>, но вы тут же можете изменить его, причём сразу в открывающем и закрывающем тегах.</li>
</ul>

<h2>Zen CSS</h2>

<p>Новая версия этого пакета также обзавелась механизмом быстрого набора длинного списка свойств, без необходимости вручную создавать новую строку. Теперь по сочетанию <kbd>;+Tab</kbd>, т.е. после каждого закрытого правила, автоматически вставляется перевод строки. Например, комбинация <kbd>fl:l Tab Tab b:n Tab Tab c Tab</kbd> создаст нам следующий код:</p>

<pre><code>float:left;</code>
<code>border:none;</code>
<code>color:#FFF;</code></pre>

<p>То есть: первый <kbd>Tab</kbd> создаёт свойство, а следующий новую строку и всё по новой. Если же свойство разворачивается с предустановленными значениями, то вам сначала придётся пройтись по ним, а потом уже выйти за пределы правила и создать новую строку.</p>

<p>Также, по многочисленным заявкам, была введена специальная переменная, которая регламентирует появление пробела в правиле <em>после</em> двоеточия и <em>до</em> значения. Таким образом, вы можете продолжать использовать все удобства этого пакета, не меняя коренным образом свои правила форматирования кода. Устанавливается эта переменная настройках TextMate: Preferences → Advanced → Shell Variables → Variable: <code>TM_CSS_SPACE</code>, Value: <code>[пробел]</code>. Далее — небольшие изменения:</p>

<ul>
<li>Для свойств <code>top</code>, <code>right</code>, <code>bottom</code> и <code>left</code> всё-таки были введены сокращения: <kbd>t</kbd>, <kbd>r</kbd>, <kbd>bo</kbd> и <kbd>l</kbd>, соответственно. Символ <kbd>b</kbd> остался за свойством <code>border</code> по причине многочисленных сочетаний с ним связанных, а так же более частой употребимости.</li>
<li>Регулярное выражение, подсвечивающее HTML-селекторы в CSS-коде, стало регистронезависимым, поэтому теперь подсвечивается как строчное, так и прописное их написание. Что опять же добавляет пакету гибкости.</li>
<li>Для более точной и логичной работы всех предусмотренных подстановок, было удалено автоматическое дополнение двоеточия точкой с запятой — <code>:;</code>. В ситуации, когда пакет предлагает <strong>все</strong> необходимые своства и значения, данная потеря не кажется мне столь ощутимой.</li>
</ul>

<p>Итак, напоминаю — пакеты теперь можно скачать на <a href="http://code.google.com/p/zen-coding/">странице проекта</a> в Google Code или через <a href="http://code.google.com/p/zen-coding/source/checkout">svn-репозитарий</a>, а я с интересом жду ваших отзывов, замечаний и, самое главное, — предложений.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>31</small>
				</header>
				<article id="comment-1877"class="comment even thread-even depth-1">
					<p>Теперь я мечтаю о том, чтоб кто-нибудь это все для коды переделал :)</p>
					<footer>
						<a href="http://chuprin.com" rel="external nofollow" class="url">Chupa</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1877">15 ноября ’08 в 12:40</a></time>
					</footer>
				</article>
				<article id="comment-1879"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Супер ! Спасибо большое за новую версию. Однако, есть одно серьезное предложение: почему бы не использовать для размещения проекта github ? Там намного более удобно следить за версионностью + многие люди (включая меня) смогут получить возможность по удобной модификации вашего замечательного пакета в идеальный для нас всех продукт.</p>
					<footer>
						ever.zet						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1879">15 ноября ’08 в 14:19</a></time>
					</footer>
				</article>
				<article id="comment-1881"class="comment even thread-even depth-1">
					<p>Я так и думал, что цепочки элементов по табуляции вам понравятся :-)<br />
Рад, что вы включили их в свой набор снипетов.<br />
Спасибо, ваши статьи дают хорошие подсказки, как можно оптимизировать работу и в других редакторах.</p>
					<footer>
						<a href="http://ismmurf.spaces.live.com/" rel="external nofollow" class="url">smmurf</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1881">15 ноября ’08 в 16:59</a></time>
					</footer>
				</article>
				<article id="comment-1884"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>ever.zet,</strong> я бы с удовольствием положил проект на GitHub, если бы понимал ценность данного действия. Мне кажется, что svn в данной ситуации проще и понятнее для большинства, и точно также позволяет организовать совместную разработку, если найдутся желающие.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1884">15 ноября ’08 в 19:09</a></time>
					</footer>
				</article>
				<article id="comment-1887"class="comment even thread-even depth-1">
					<p>На github'е на данный момент покоятся почти все бандлы. Плюс имеется средство для их быстрого поиска/установки прямо из редактора.</p>
<p><a href="http://blog.macromates.com/2008/bundles-and-github/" rel="nofollow">http://blog.macromates.com/2008/bundles-and-github/</a></p>
					<footer>
						Александр						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1887">15 ноября ’08 в 21:09</a></time>
					</footer>
				</article>
				<article id="comment-1890"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я не очень понимаю зачем мне нужно держать один репозитарий для тех, у кого есть Git, второй для тех, у кого есть только svn, а ещё контролировать актуальность просто-архивов. Сложновато, не находите? Отчасти потому, что у меня самого не было повода пользоваться Git'ом и не думаю, что в ближайшее время появится.</p>
<p>Ну а бандлы можно: а) коммитить прямо в нужную папку, мёржа по дороге б) запускать как .tmbundle файлы — тогда TextMate сам их смёржит.</p>
<p>В общем, Git — хорошо, но пока непонятно зачем.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1890">15 ноября ’08 в 22:58</a></time>
					</footer>
				</article>
				<article id="comment-1891"class="comment even thread-even depth-1">
					<p>Вадик, а для простых смертных ты что-нибудь пишешь?</p>
					<footer>
						ann_green						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1891">15 ноября ’08 в 23:39</a></time>
					</footer>
				</article>
				<article id="comment-1892"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ань, статус™ не позволяет ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1892">16 ноября ’08 в 0:01</a></time>
					</footer>
				</article>
				<article id="comment-1921"class="comment even thread-even depth-1">
					<p>github сейчас просто <em>модный</em>.</p>
					<footer>
						TheBits						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1921">17 ноября ’08 в 11:50</a></time>
					</footer>
				</article>
				<article id="comment-1938"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Не могу не напомнить что тег br можно вставить комбинацией ^+Enter в стандартной бандле. Там же для оборачивания тегов ^⇧W.</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1938">18 ноября ’08 в 1:29</a></time>
					</footer>
				</article>
				<article id="comment-1940"class="comment even thread-even depth-1">
					<p><strong>Дима,</strong> я знаю, просто Ctrl + Enter слишком уж далеко разнесены (если речь про компактные клавы с одним Ctrl слева), а Ctrl+Shift+W я предпочёл расширить — хотя то оборачивание, что в итоге получилось, мне не слишком нравится (</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1940">18 ноября ’08 в 2:25</a></time>
					</footer>
				</article>
				<article id="comment-1984"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Pepelsbey, предыдущие <a href="../zen-coding-1-1/index.html#comment-1852" rel="nofollow">"проблемы"</a> для e-texteditor я решил так как и предлагал (вручную добавил слеши и изменил в некоторых местах регистр буквы с которой начинается атрибут свойства, например ta:c заменил на ta:C, d:b на d:B). Ещё один вопрос, в e-texteditor невозможно обернуть в какой-нибудь тег ни одну строку (потому что Ctrl+W вызывает закрытие вкладки), ни несколько строк (в "e" на это сокращение по-умолчанию установлено выделение одного слова). Может быть вы подскажите, где можно изменить это сокращение на свое? Спасибо.</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1984">19 ноября ’08 в 14:31</a></time>
					</footer>
				</article>
				<article id="comment-1986"class="comment even thread-even depth-1">
					<p>Сокращения Ctrl ( + Shift) + W я наверное совсем исключю из следующей версии, как-то скверно они работают. А изменить комбинации клавиш просто: нужно выделить команду и ввести нужное сочетание. По крайней мере так дело обстоит в TextMate…</p>
<p>В остальном — прописные буквы-модификаторы слишком уж неудобны, поэтому разве что делать отдельную ветку для E. Я наверное всё-таки попробую поставить его на виртуальную машину и посмотреть как там всё работает.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1986">19 ноября ’08 в 14:50</a></time>
					</footer>
				</article>
				<article id="comment-1990"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>pepelsbey</strong>, а вы точно включили в версию 1.2 "оборачивающую" команду. Я просто не могу её найти.</p>
<p>Если будет ветка для E будет здорово. =) Спасибо.</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-1990">19 ноября ’08 в 18:59</a></time>
					</footer>
				</article>
				<article id="comment-2020"class="comment even thread-even depth-1">
					<p>огромное спасибо за труд! более-менее в Е работает )<br />
а делать отдельную ветку для E очень хорошая идея!</p>
					<footer>
						<a href="http://yoyurec.in.ua" rel="external nofollow" class="url">YoYurec</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2020">20 ноября ’08 в 18:03</a></time>
					</footer>
				</article>
				<article id="comment-2022"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>pepelsbey</strong>, ещё предложение небольшое для улучшения - ввести сокращение для оборачивания выделенного фрагмента текста/кода в комментарии. Как думаете?</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2022">20 ноября ’08 в 18:44</a></time>
					</footer>
				</article>
				<article id="comment-2034"class="comment even thread-even depth-1">
					<p>~ZORRO~ ⌘/ и ⌘⌥/</p>
					<footer>
						<a href="http://dmitry.baranovskiy.com/" rel="external nofollow" class="url">Dmitry Baranovskiy</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2034">21 ноября ’08 в 3:30</a></time>
					</footer>
				</article>
				<article id="comment-2106"class="comment odd alt thread-odd thread-alt depth-1">
					<p>да ветку для  Е  это было бы круто, увы не все работают на маке!</p>
					<footer>
						<a href="http://yvelious.com" rel="external nofollow" class="url">GaN</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2106">24 ноября ’08 в 21:38</a></time>
					</footer>
				</article>
				<article id="comment-2253"class="comment even thread-even depth-1">
					<p>большое спасибо за новую версию. Обращаюсь ко всем пользователям E. У меня возникли некоторые проблемы:</p>
<p>1. Скопировал себе HTML Zen 1.2, при подставке, скажем, div tab выводиться меню, спрашивающее каким бандлом пользоваться HTML Zen или HTML. Я решил эту проблему путем отключения HTML в Manage bandles, но может это делается не так?</p>
<p>2.<br />
<blockquote cite="pepelsbey">li Tab Значение Tab Tab Значение </p></blockquote>
<p> у меня к сожалению третий таб не срабатывает.</p>
<p>P.S. ветка для E? очень жду )</p>
					<footer>
						BezArt						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2253">4 декабря ’08 в 17:49</a></time>
					</footer>
				</article>
				<article id="comment-2255"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Я решил эту проблему путем отключения HTML в Manage bandles, но может это делается не так?</p></blockquote>
<p>Да, одновременная работа двух пакетов для одного языка практически невозможна, так что стоит определиться )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2255">4 декабря ’08 в 18:08</a></time>
					</footer>
				</article>
				<article id="comment-2256"class="comment even thread-even depth-1">
					<p>Разобрался во второй проблеме — конструкция не срабатывает, т. к. в Е li:next подхватывается только если перед закрывающим тегом стоит пробел ( li Tab Значение Пробел Tab Tab Значение )</p>
					<footer>
						BezArt						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2256">4 декабря ’08 в 18:32</a></time>
					</footer>
				</article>
				<article id="comment-2303"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>~ZORRO~,</strong> в Е сочетания Ctrl (+Shift) +W заменены на Alt (+Shift) +W</p>
					<footer>
						BezArt						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-2303">7 декабря ’08 в 16:30</a></time>
					</footer>
				</article>
				<article id="comment-3425"class="comment even thread-even depth-1">
					<p>Ещё раз здравствуйте, вот решил снова спросить и посоветовать. В стандартном пакете хтмл есть команды которые вставляют код при перенесении файла в открытое окно, например при перенесении картинки в открытое окно будет вставляться код с полным путем для картинки. Так же и в цсс. Ещё есть возможность для проверки валидации кода прямо в окне программы и возможность перезагружать браузеры, в которых открыт файл прямо из программы, например нажимаешь сочетание, файл сам сохраняется и происходит перезагрузка окон браузеров, так что можно сразу смотреть результат. К сожалению работает последнее только под маками, а на форуме Е готового решения нету (или я с ними не разобрался).<br />
Хочется узнать, будет ли это включено в новые версии, ну и когда уже ждать их? =)</p>
					<footer>
						~ZORRO~						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-3425">14 февраля ’09 в 5:21</a></time>
					</footer>
				</article>
				<article id="comment-3427"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Следующая версия скорее всего будет техническим обновлением, без фич, но с багфиксами. А скоре появится пост с обсуждением версии Zen Coding 2.0, которая сильно будет отличаться по механизму обработки сокращений. В планах также более широкая поддержка CSS 3 и HTML 5.</p>
<p>Насчёт указанных фич — ничего не мешает вам копировать их из существующих оригинальных бандлов, тем самым дополняя Zen'овские.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-3427">14 февраля ’09 в 14:02</a></time>
					</footer>
				</article>
				<article id="comment-3768"class="comment even thread-even depth-1">
					<p>Может сломалось чего или винды стали понимать разделители в виде двоеточия в именах файлов?<br />
<a href="http://floomby.ru/content/7k8MaMt7ck/" rel="nofollow">http://floomby.ru/content/7k8MaMt7ck/</a><br />
проверил, на всякий случай - не аллё<br />
<a href="http://floomby.ru/content/PqJqFS7xBU/" rel="nofollow">http://floomby.ru/content/PqJqFS7xBU/</a></p>
					<footer>
						upuc						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-3768">20 апреля ’09 в 18:36</a></time>
					</footer>
				</article>
				<article id="comment-3769"class="comment odd alt thread-odd thread-alt depth-1">
					<p>С Windows-путями тут конечно большая проблема, поскольку TextMate не слишком заморачивается с именами снипетов. На ум приходит только выпускать отдельную версию для Windows, которая не содержит такого криминала.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-3769">20 апреля ’09 в 18:41</a></time>
					</footer>
				</article>
				<article id="comment-5132"class="comment even thread-even depth-1">
					<p>Добрый день.<br />
А существует аналог TM_CSS_SPACE в плагине под эклипс?</p>
					<footer>
						<a href="http://piumosso.ru" rel="external nofollow" class="url">Артём</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-5132">23 марта ’11 в 14:34</a></time>
					</footer>
				</article>
				<article id="comment-5146"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Здравствуйте!<br />
1. Подскажите пожалуйста как в ZenCoding имея такие три строки</p>
<p>item1<br />
item2<br />
item3</p>
<p>сделать</p>
<pre>

<code>&lt;ul&gt;</code>
<code>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;item1&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;item2&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;item3&lt;/a&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code>

</pre>
<p>2. как добавить свой (шорткат) или как называется, свою аббревиатуру которая будет например вставлять какой-то мой код</p>
<p>3. как сделать похожее первому ul&gt;li&gt;a&gt;item<br />
item просто текст, такой код в итоге</p>
<pre>

<code>&lt;ul&gt;</code>
<code>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;item&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;item&lt;/a&gt;&lt;/li&gt;</code>
<code>    &lt;li&gt;&lt;a href=&quot;&quot;&gt;item&lt;/a&gt;&lt;/li&gt;</code>
<code>&lt;/ul&gt;</code>

</pre>
<p>Смотрел видео, там 1,2 увидел как делается но там не показаны горячие клавиши как были вызваны окна :(</p>
<p>Заранее спасибо!</p>
					<footer>
						Валера						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-5146">2 мая ’11 в 16:02</a></time>
					</footer>
				</article>
				<article id="comment-5148"class="comment even thread-even depth-1">
					<p>Спасибо Вадим за помощь с постом, а Вы не подскажите? Вы ведь автор этого детища, наверняка вы все о нем знаете :) Или тут зависит от используемой IDE? Я использую webstorm.</p>
					<footer>
						Валера						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-5148">3 мая ’11 в 23:15</a></time>
					</footer>
				</article>
				<article id="comment-5149"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Валера,</b> боюсь, что Zen Coding всё-таки танцует от кода, а не от содержимого. Но насколько я знаю, Сергей Чикуёнок написал некоторые фичи, зависящие от редактора, например <a href="http://code.google.com/p/zen-coding/wiki/Actions#Wrap_with_Abbreviation" rel="nofollow">Wrap with Abbreviation</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-5149">4 мая ’11 в 12:24</a></time>
					</footer>
				</article>
				<article id="comment-5150"class="comment even thread-even depth-1">
					<p>Спасибо, я даже не думал что тот ролик который смотрел ранее Сергей записывал, только что нашел на его канале или профайле(как правильно не знаю) vimeo.<br />
Это видео <a href="http://vimeo.com/7405114" rel="nofollow">ZenCoding</a> минута 2:20 начинает делать о том что я спрашивал. </p>
<p>Там как раз вызывается окно аббревиатур..., спасибо за ссылку сейчас изучу, сам не нашел бы никогда, так глубоко! </p>
<p>Позавчера нашел Ваш канал <a href="http://vimeo.com/pepelsbey/videos" rel="nofollow">pepelsbey</a> , классно что есть такие люди которые что-то рассказывают интересное делятся своими наработками и опытом, спасибо большое!</p>
<p>Правда оператор, или тот кто держал камеру, на видео "Динамическая графика", он то панель вообще не снимал, когда Вы показывали примеры и код, а если снимал то ничего не видно было.. Какой то <b>!молодец</b> самое главное звук был и слава Богу. </p>
<p>Ну а сам рассказ вышел интересным, первый раз познакомился с SVG и canvas. Думал эти технологии намного сложнее.</p>
					<footer>
						Валера						<time pubdate datetime="2008-11-15T03:39:52+00:00"><a href="index.html#comment-5150">5 мая ’11 в 0:26</a></time>
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
	<!-- 19 & 0,728 -->
</body>
</html>
