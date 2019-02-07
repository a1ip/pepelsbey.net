<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Возвращение Даркбокса — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Возвращение Даркбокса</a></h1>
				<time pubdate datetime="2010-12-13T11:43:23+00:00">13 декабря ’10</time>
			</header>
			<figure class="small">
	<a href="http://pepelsbey.github.com/darkbox/"><img src="/pro/2010/12/darkbox-return/spinner.png" width="230" height="230" alt="Дакрбокс"></a>
</figure>

<p>Самые давние читатели этого блога должны помнить серию заметок, посвящённых скрипту для красивого открытия картинок, написанному в подражание множественным «лайтбоксам»: <a href="/2008/11/darkbox/">Даркбокс</a> и <a href="/2009/02/darkbox-2/">Даркбокс 2</a>. С появления этой идеи минуло уже больше двух лет и, вроде бы, уже должны были появиться внятные решения, которые соответствуют всем <a href="/2008/11/darkbox/">заявленным в первой заметке</a> условиям. Только вот до сих пор не видно на горизонте ничего приличного. Поэтому Даркбокс возвращается — отбросив версию и все приличия — прямиком на <a href="https://github.com/pepelsbey/darkbox">новомодный Github</a>. Столь же красивый и простой — <a href="http://pepelsbey.github.com/darkbox/">встречайте!</a></p>

<h2>Технологические изменения</h2>

<p>Прежде всего, код был полностью переписан в полном соответствии с традициями последнего времени — то есть не мной. Игры в эффективное программирование я, к счастью, бросил. Автором нового кода является <a href="http://jahson.moikrug.ru/">Олег Рощупкин</a>, нескучный программист и коллега по песочнице ещё с <a href="http://webmascon.com/">вебмасконовских</a> времён. Новая версия скрипта некоторое время проходила испытания как на этом сайте, так и на проекте «<a href="https://web-standards.ru/">Веб-стандарты</a>», пока в один чудесный день не появилась <a href="https://github.com/pepelsbey/darkbox">на GitHub</a>. Но что-то мешало мне расслабиться и публично заявить о новинке. Всё-таки HTML- и CSS-коду исполнилось почти два года, за которые я успел научиться чему-то новому. Поэтому вся структура и стили были радостно переписаны с нуля.</p>

<p>В основу новой HTML-стуктуры был положен принцип <em>состояний</em>, который был успешно опробован для проекта <a href="https://github.com/pepelsbey/openplayer">Open Player</a>, который всё ещё ждёт своего часа и гениального JavaScript-программиста, но об этом в другой раз. Суть принципа сводится к тому, что каждый модификатор, изменяющий состояние всей структуры, применяется к корневому элементу и видоизменяет все нужные элементы через каскад. Это позволяет окончательно очистить JavaScript от оформительских штучек и минимизировать количество операций с атрибутами <code>class</code>. Вот так выглядит код открытой картинки:</p>

<pre>
	<code>&lt;div class="darkbox darkbox-on darkbox-loaded darkbox-done"&gt;</code>
	<code>    &lt;div class="darkbox-shadow"&gt;&lt;/div&gt;</code>
	<code>    &lt;div class="darkbox-canvas"&gt;</code>
	<code>        &lt;img src="picture.jpg" alt=""&gt;</code>
	<code>        &lt;div class="darkbox-button darkbox-button-left" title="Close"&gt;&lt;/div&gt;</code>
	<code>    &lt;/div&gt;</code>
	<code>&lt;/div&gt;</code>
</pre>

<p>Как вы можете видеть, вся история открытия картинки записана в атрибуте <code>class</code> корневого элемента. Пройдёмся по ней с самого начала:</p>

<ol>
	<li>По клику пишем на страницу базовый класс <code>darkbox</code>;</li>
	<li>Инициализируем его и готовим к загрузке при помощи <code>darkbox-on</code>;</li>
	<li>Готовимся к тому, чтобы красиво показать загруженную картинку: <code>darkbox-loaded</code>;</li>
	<li>Завершаем все действия, вешаем обработчики закрытия и показываем крестик: <code>darkbox-done</code>.</li>
</ol>

<p>Как только картинку закрыли, все упомянутые классы успешно очищаются и корневой <code>darkbox</code>, притаившись как тот партизан, продолжает ждать новых вызовов, чтобы повторить описанное упражнение. Исключение из упомянутого принципа состояний только одно — расположение кнопки закрытия окна слева или справа, в зависимости от платформы. Это класс оказался настолько специфическим, что крайне неуместно смотрелся на корневом элементе.</p>

<p>Упомянутые состояния также позволили более наглядно записать CSS-код: теперь он структурирован по принципу базовый класс → модификаторы. Более того, из-за этих чисто архитектурных решений значительно упростился файл хаков для IE, теперь он содержит всего одно правило для IE7, позволяющее окончательно сбросить полупрозрачность, которая задаётся в JavaScript при помощи фильтров:</p>

<pre>
	<code>* + HTML .darkbox-done .darkbox-canvas {</code>
	<code>    filter:none !important;</code>
	<code>    }</code>
</pre>

<p>Поддержка IE6 осознанно не предусмотрена, однако <em>магическая сила open source</em> позволит вам не только дописать нужный уровень поддержки, но ещё и предложить её в виде патча к существующему проекту <a href="https://github.com/pepelsbey/darkbox">прямо на GitHub</a>. Дерзайте.</p>

<h2>Функциональные изменения</h2>

<p>Благодаря серьёзному подходу Олега, скрипт теперь умеет обрабатывать битые картинки, для которых не случилось заветного события <code>load</code>. Оформляется это соответствующим запретительным значком. Мои же попытки освежить CSS-код привели к тому, что теперь для анимации загрузочного спиннера используется не анимированный GIF, а восемь последовательно смещающихся состояний спиннера, заключённых в один вертикальный спрайт. Это позволяет получить гораздо более чёткий и аккуратный спиннер, благодаря альфа-прозрачности в PNG-24.</p>

<figure class="large">
	<img src="/pro/2010/12/darkbox-return/sprite.png" width="670" height="80" alt="Спрайт">
	<figcaption>Кадры анимации спиннера, развёрнутые для красоты горизонтально</figcaption>
</figure>

<p>Другой приятной фичей, появившейся в новой версии, является процесс анимации картинки от загрузчика до её полных размеров. Раньше загрузчик пролетал до полного размера картинки и только потом появлялась она сама. Сейчас картинка появляется в рамках загрузчика и увеличивается вместе с ним либо до полных размеров картинки, либо до размеров окна, если вдруг не удалось вписаться. Плавность анимации картинки разнится от браузера к браузеру, но выглядит вполне сносно, делая происходящее в браузере более интуитивно понятным.</p>

<h2>Использование скрипта</h2>

<p>Для того, чтобы заставить все эти чудеса работать на ваших страницах, нужно сделать несколько простых вещей. И если описывать все шаги его подключения, то становится ясно, что этот скрипт предназначен не для начинающих сайтостроителей, мол, <q>подключил один JavaSript-файл и погнали</q> — от этого я как раз и пытался уйти, задумывая этот скрипт. Напротив, если вы умеете читать код и понимаете что и как нужно подключить, чтобы всё заработало — то вы поймёте всё из <a href="http://pepelsbey.github.com/darkbox/">предоставленного примера</a>.</p>

<p>Остаётся только добавить список файлов, необходимых для работы скрипта, примерно в таком порядке — от оформления к динамике:</p>

<ul>
	<li>Стили: <code>jquery.darkbox.css</code> и <code>jquery.darkbox.ie.css</code>;</li>
	<li>Картинки: <code>close.png</code>, <code>error.png</code> и <code>spinner.png</code> из папки <code>i</code>;</li>
	<li>Библиотека jQuery последней версии, можно использовать статику от <a href="http://yandex.st/jquery/1.4.4/jquery.min.js">Яндекса</a> или <a href="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js">Google</a>;</li>
	<li>Минифицированный файл скрипта: <code>jquery.darkbox.min.js</code>.</li>
</ul>

<p>Весь этот суповой набор можно скачать со <a href="https://github.com/pepelsbey/darkbox">страницы проекта на GitHub</a>. Там же, <a href="https://github.com/pepelsbey/darkbox/issues">в разделе Issues</a>, вы можете оставить свои замечания, сообщения об ошибках и даже пожелания для будущих версий. Однако это никоим образом не лишает вас возможности порезвиться в комментариях к этому посту.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>29</small>
				</header>
				<article id="comment-4935"class="comment even thread-even depth-1">
					<p>Не хватает одной серьезной штуки, как группового просмотра :)<br />
И есть одна не серьезная, как альты фоток выводить текстом.<br />
Или она в демо не представлена?</p>
					<footer>
						<a href="http://deer.org.ua" rel="external nofollow" class="url">deerua</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4935">13 декабря ’10 в 11:54</a></time>
					</footer>
				</article>
				<article id="comment-4936"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>deerua,</b> галерейности, скорее всего не будет, т.к. решение хотелось бы держать в достаточно простом виде. А вот про альты вполне можно подумать или даже про <code>title</code> ссылки, чтобы описание можно было прочитать не открывая картинку.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4936">13 декабря ’10 в 12:17</a></time>
					</footer>
				</article>
				<article id="comment-4937"class="comment even thread-even depth-1">
					<p>А еще было бы клёво что-нибудь придумать относительно извечной проблемы модального окна с <code>position:fixed;</code>.</p>
<p>Иначе закомплексованным людям с маленьким монитором нельзя будет посмотреть эти большие картинки.</p>
					<footer>
						GruZZ						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4937">13 декабря ’10 в 12:48</a></time>
					</footer>
				</article>
				<article id="comment-4938"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>GruZZ,</b> я очень внимательно отнёсся к закомплексованным людям с маленьким монитором. Посмотрите на поведение картинки с рулём на <a href="http://pepelsbey.github.com/darkbox/" rel="nofollow">тестовой странице</a> — на самом деле, её размер 1920 × 1200, но она удачно вписывается в окно браузера во время открытия. Так что каким бы ни был ваш монитор, картинка впишется в него полностью.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4938">13 декабря ’10 в 12:53</a></time>
					</footer>
				</article>
				<article id="comment-4939"class="comment even thread-even depth-1">
					<p>Хорошая попытка, Вадим. Примерно тоже самое я сделал не так давно. Работает для картинок и контента. Предлагаю объеденить усилия :)</p>
<p>Вот моя попытка: <a href="https://github.com/okonet/dialogbox/tree/master/prototype" rel="nofollow">https://github.com/okonet/dialogbox/tree/master/prototype</a></p>
<p>Есть похожее для мутулза, но хотелось бы framework-agnostic что-то. Но весь цимесь, конечно же, в CSS.</p>
					<footer>
						<a href="http://okonet.ru" rel="external nofollow" class="url">Андрей Оконечников</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4939">13 декабря ’10 в 12:59</a></time>
					</footer>
				</article>
				<article id="comment-4943"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Интересно, но есть недостатки:<br />
— нечувствительность к изменению размеров окна (для телефонов скорее плюс);<br />
— нечувствительность к масштабированию;<br />
— замыленность картинок при масштабировании. Крестик можно border-radius плюс спец.символом или просто SVG.<br />
— подтормаживает анимация под Оперой 11 (это уж не знаю к кому). В IE9 тормозит меньше, в Хроме больше :-).<br />
Не знаю, стоит ли писать в issues.</p>
					<footer>
						<a href="http://my.opera.com/GreLI/" rel="external nofollow" class="url">GreLI</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4943">13 декабря ’10 в 16:41</a></time>
					</footer>
				</article>
				<article id="comment-4944"class="comment even thread-even depth-1">
					<p>Кстати, вот грузить для закомплексованных людей картинку 1920px как-то бывает иногда лениво(вспомнилась диалапа). Плюс методы ресайзинга для разных браузеров всегда разный, где-то зернистость, где-то хз что. Как там с ресайзингом в SVG?</p>
					<footer>
						boba_KeyOST						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4944">13 декабря ’10 в 17:13</a></time>
					</footer>
				</article>
				<article id="comment-4945"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>GreLI,</b> думаю первые два пункта можно слить в один и закинуть в ишьюз, т.к. вопрос интересный и вполне решаемый. Крестик пробовал сделать хитрее, но кроссбраузерность взяла верх над хитрожопостью :)</p>
<p><b>boba_KeyOST,</b> с ресайзом в SVG чуть-чуть лучше, т.к. там есть атрибут, отвечающий за то, как ресайзится растр. В принципе, у браузеров тоже есть такие штуки, стоит попробовать. Насчёт больших картинок — это всего лишь демонстрация полезного принципа. Но если вы в своём уме, то не будете выкладывать на сайте большие растры или, по крайней мере, будете предупреждать пользователей об их размерах.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-4945">13 декабря ’10 в 18:50</a></time>
					</footer>
				</article>
				<article id="comment-5051"class="comment even thread-even depth-1">
					<p>Вадим, сори за офтоп, но "задумать идею" - безграмотно</p>
					<footer>
						Кирилл Гришанин						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5051">25 декабря ’10 в 14:07</a></time>
					</footer>
				</article>
				<article id="comment-5073"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Привет, Вадим. Твой Darkbox — клёвая штука, и я давно им пользуюсь.</p>
<p>Сейчас меня волнует бюрократический вопрос: на каких правах можно использовать твой скрипт? Ну там, GPL, LGPL, CC0 и прочие WTFPL. А то некоторые кастомеры бывают столь убийственно серьёзны, что лицензию на «Hello world» затребуют.</p>
					<footer>
						Дмитрий						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5073">30 декабря ’10 в 14:20</a></time>
					</footer>
				</article>
				<article id="comment-5074"class="comment even thread-even depth-1">
					<p><b>Дмитрий,</b> пожалуй: <a href="http://creativecommons.org/licenses/by-sa/3.0/" rel="nofollow">CC Attribution-ShareAlike 3.0</a>.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5074">30 декабря ’10 в 14:27</a></time>
					</footer>
				</article>
				<article id="comment-5077"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спасибо!</p>
					<footer>
						Дмитрий						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5077">31 декабря ’10 в 17:03</a></time>
					</footer>
				</article>
				<article id="comment-5089"class="comment even thread-even depth-1">
					<p><b>Кирилл,</b> поправил — спасибо.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5089">15 января ’11 в 2:50</a></time>
					</footer>
				</article>
				<article id="comment-5104"class="comment odd alt thread-odd thread-alt depth-1">
					<p>искал себе галерею. нашел даркбокс :)<br />
переделал на галерею (с прелоадом соседних фоток, чтобы не ждать загрузки), сделал возможность выноса настроек до инициализации. сейчс обкатаю на бетке, потом могу выложить где-нить. по желанию.<br />
удачного проекта</p>
					<footer>
						<a href="http://denisx.ru" rel="external nofollow" class="url">denisx</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5104">13 февраля ’11 в 21:02</a></time>
					</footer>
				</article>
				<article id="comment-5105"class="comment even thread-even depth-1">
					<p><b>Денис,</b> рад, что скрипт пригодился. В принципе, можно сделать форк <a href="https://github.com/pepelsbey/darkbox" rel="nofollow">на GitHub'е</a> и положить все изменения туда. Может быть некоторые или даже многие решения перекочуют в оригинальный Дакрбокс.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5105">14 февраля ’11 в 1:36</a></time>
					</footer>
				</article>
				<article id="comment-5107"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А может пойти еще дальше и вместо спрайта-лоадера использовать одну картину и вращать ее css-анимацией/скриптом (смотря что поддерживается) ;)</p>
					<footer>
						Алексей						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5107">22 февраля ’11 в 14:47</a></time>
					</footer>
				</article>
				<article id="comment-5108"class="comment even thread-even depth-1">
					<p><b>Алексей,</b> не очень понятно, как вы предлагаете вращать картинку скриптом. Показывать такой важный для общего UI элемент, как спиннер только в браузерах, которые поддерживают CSS-транформации — значит сильно ограничивать кроссбраузерность скрипта.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5108">22 февраля ’11 в 14:50</a></time>
					</footer>
				</article>
				<article id="comment-5109"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Для jquery есть несколько плагинов. Например, <a href="http://code.google.com/p/jquery-rotate/source/browse/trunk" rel="nofollow">jquery-rotate</a>. Хотя, признаться, не тестил их. Чисто спортивный интерес «а что, если» =)</p>
					<footer>
						Алексей						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5109">22 февраля ’11 в 15:03</a></time>
					</footer>
				</article>
				<article id="comment-5110"class="comment even thread-even depth-1">
					<p>Ну ок — плагины умеют вращать картинки при помощи Canvas, который тоже не поддерживается в IE, раньше 9-й версии. Можно, конечно, прикрутить сюда VML, но гораздо проще двигать спрайт с картинкой ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5110">22 февраля ’11 в 15:09</a></time>
					</footer>
				</article>
				<article id="comment-5130"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Большое вам спасибо за удачный скрипт! Скажите, пожалуйста, каким образом можно уменьшить прозрачность тени - иной раз просвечивающий пестрый фон мешает рассмотреть саму картинку.</p>
					<footer>
						<a href="http://aslovica.sibirjak.ru/" rel="external nofollow" class="url">Алексей</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5130">16 марта ’11 в 17:27</a></time>
					</footer>
				</article>
				<article id="comment-5134"class="comment even thread-even depth-1">
					<p>Или у меня ie9 какой то не правильный, или дакрбокс не работает в ie9</p>
					<footer>
						<a href="http://yvelious.com" rel="external nofollow" class="url">Yvelious</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5134">7 апреля ’11 в 23:20</a></time>
					</footer>
				</article>
				<article id="comment-5135"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Да, я тоже недавно обнаружил, что не работает. Хотя в превью-версии всё было в порядке. Поправлю.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5135">7 апреля ’11 в 23:37</a></time>
					</footer>
				</article>
				<article id="comment-5141"class="comment even thread-even depth-1">
					<p>выложил add-on галереи для DarkBox 'a :) <a href="http://denisx.github.com/darkbox-gallery/" rel="nofollow">http://denisx.github.com/darkbox-gallery/</a></p>
					<footer>
						<a href="http://www.denisx.ru" rel="external nofollow" class="url">denisx</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5141">25 апреля ’11 в 16:22</a></time>
					</footer>
				</article>
				<article id="comment-5154"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Zmi,</b> почитайте <a href="/2008/11/darkbox/" rel="nofollow">первый пост</a> и заявленные там условия соответствия.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5154">31 мая ’11 в 1:42</a></time>
					</footer>
				</article>
				<article id="comment-5205"class="comment even thread-even depth-1">
					<p>В последних версиях jquery (старше v1.5.2) почти во всех браузерах скрипт работает некорректно: при попытке открыть одну и ту же картинку более чем несколько раз, окошко начинает появляться и тут же исчезает. Подобное поведение не было замечено в Фаерфоксе. Скрипт был установлен корректно. Как только подключил библиотеку jquery v1.5.2, который прилагался к даркбоксу — проблема сразу исчезла.</p>
					<footer>
						Рустам						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5205">25 августа ’11 в 6:03</a></time>
					</footer>
				</article>
				<article id="comment-5206"class="comment odd alt thread-odd thread-alt depth-1">
					<p><b>Рустам,</b> посмотрите на Github в ветке <a href="https://github.com/pepelsbey/darkbox/tree/new_version" rel="nofollow">new_version</a>, там всё должно быть хорошо.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5206">25 августа ’11 в 6:31</a></time>
					</footer>
				</article>
				<article id="comment-5207"class="comment even thread-even depth-1">
					<p>Странно, всё заменил и тщательно перепроверил, но результат тот же. Проблема, видимо, с моей стороны. Разберусь, спасибо! :-)</p>
					<footer>
						Рустам						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5207">25 августа ’11 в 7:16</a></time>
					</footer>
				</article>
				<article id="comment-5211"class="comment odd alt thread-odd thread-alt depth-1">
					<p>rel="darkbox"  - этот атрибут не пропускает валидатор, если doctype для html5<br />
Как сдеалть так что бы код был валидным?</p>
					<footer>
						<a href="http://yvelious.com" rel="external nofollow" class="url">Yvelious</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5211">10 сентября ’11 в 8:42</a></time>
					</footer>
				</article>
				<article id="comment-5214"class="comment even thread-even depth-1">
					<p><b>Yvelious,</b> обратите внимание на <a href="https://github.com/pepelsbey/darkbox/blob/gh-pages/index.htm#L67" rel="nofollow">эту строку кода</a> — вас никто не заставляет использовать <code>rel="darkbox"</code> для обозначения ссылок с картинками. Это может быть любой класс, ID или другая выборка, доступная в jQuery.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2010-12-13T11:43:23+00:00"><a href="index.html#comment-5214">10 сентября ’11 в 16:26</a></time>
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
	<!-- 22 & 0,522 -->
</body>
</html>
