<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Даркбокс 2 — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Даркбокс 2</a></h1>
				<time pubdate datetime="2009-02-19T04:26:14+00:00">19 февраля ’09</time>
			</header>
			<p><em>Читайте про более новую версию скрипта в записи «<a href="/2010/12/darkbox-return/">Возвращение Даркбокса</a>»</em></p>

<p>Жизнь выдвигает новые требования, поэтому некоторые решения получают продолжение. Итак, перед вами продолжение экспериментов над одним простым, но очень полезным способом красиво открывать одиночные картинки. Более подробно об изначальной проблеме и первом варианте решения читайте в заметке «<a href="/2008/11/darkbox/">Даркбокс</a>», а сейчас поговорим о даркбоксе номер два.</p>

<p>Для начала пример — <a href="/pro/2009/02/darkbox-2/">Даркбокс 2</a>, всё в одном файле.</p>

<h2>Что нового, с виду</h2>
<ul>
<li>Картинка большей ширины или высоты чем окно, будет автоматически подогнана под его размеры, чтобы пользователь не испугался и смог нажать заветный крестик. Попробуйте сильно уменьшить размер окна и снова открыть картинку.</li>
<li>Датчик загрузки во всех нормальных браузерах, кроме Opera, обзавёлся скруглёнными уголками благодаря свойству <code>border-radius</code>.</li>
<li>Крестики закрытия картинки теперь располагаются в наиболее удобных местах, в зависимости от платформы: на Маке — слева, на PC — справа.</li>
<li>Теперь любой этап жизни даркбокса можно прервать при помощи клавиши <kbd>Esc</kbd>, на случай если вы передумали или кликнули случайно.</li>
</ul>

<h2>Что нового, технически</h2>

<p>Ну а чисто технически изменений не слишком много. В целом, код подрос примерно на сорок строк, большую часть из которых занимает мудрёное вписывание картинки в размеры окна. Помимо этого, сделана попытка сохранять создаваемый для дарбокса объект, чтобы клонировать и использовать его повторно для всех картинок. Не уверен, что это сильно повысило производительность, но попытка сделана:</p>

<pre><code>if(!$('div.darkbox-frame').length) {</code>
<code>    darkbox = $('&lt;div class="darkbox-frame"&gt;…').appendTo('body');</code>
<code>}</code>
<code>var frame = darkbox.clone().appendTo('body');</code></pre>

<p>Совместимость у скрипта прежняя, разве что тестирование в IE5 привело к JS-ошибке, но дело, скорее всего, в текущей  версии jQuery. Думаю, что отряд не заметит потери бойца. Ну а Opera традиционно заставила прямо-таки создать картинку, а не просто приделать атрибут <code>src</code> к уже имеющемуся коду.</p>

<p>Другая проблема в IE, что тянется ещё с прошлой версии, случается во время анимации прозрачности блока с чёрным фоном от 0 до 50%. Суть её такова, что если описывать прозрачность в CSS при помощи <code>filter:alpha(opacity=N)</code>, то блок при появлении становится чёрным, потом абсолютно прозрачным и только потом начинается анимация. Видно это всего долю секунды, но осадочек остаётся. Трюк в стиле <em>добавим немного абсурда</em>, когда прозрачность добавляется к блоку при помощи JS, сработал, но снизил производительность всего решения. Поэтому вопрос открыт.</p>

<p>С интересом жду ваших мнений, замечаний и предложений. Разработка даркбокса продолжается…</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>42</small>
				</header>
				<article id="comment-3480"class="comment even thread-even depth-1">
					<p>а что если прозрачность в ie устроить через VML?</p>
					<footer>
						<a href="http://arestov.habrahabr.ru" rel="external nofollow" class="url">Глеб</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3480">19 февраля ’09 в 5:15</a></time>
					</footer>
				</article>
				<article id="comment-3483"class="comment odd alt thread-odd thread-alt depth-1">
					<p>А вот бы сделать и стрелки для листинга :)</p>
					<footer>
						akira						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3483">19 февраля ’09 в 11:24</a></time>
					</footer>
				</article>
				<article id="comment-3484"class="comment even thread-even depth-1">
					<p>Долго. Незачёт. Особенно торможение раздражает после того, как картинка загрузилась и начинается переход от тёмного к светлому. В FF он особенно дёрганый, в Opera чуть поглаже.</p>
<p>Ну мне и обычный lightbox не нравится :-) Сам юзаю Сашин скрипт (<a href="http://beholder-eye.info/2006/03/13/litebox" rel="nofollow">http://beholder-eye.info/2006/03/13/litebox</a>)</p>
					<footer>
						<a href="http://warmrobot.com" rel="external nofollow" class="url">warmrobot</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3484">19 февраля ’09 в 11:56</a></time>
					</footer>
				</article>
				<article id="comment-3486"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Рисовать кнопки на разных платформах с нужной стороны — хорошая идея. Я об этом тоже думал, но пока негде было применить :)</p>
					<footer>
						<a href="http://birdwatcher.ru" rel="external nofollow" class="url">Артём Сапегин</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3486">19 февраля ’09 в 11:59</a></time>
					</footer>
				</article>
				<article id="comment-3487"class="comment even thread-even depth-1">
					<p>Да, стрелки напрашиваются. Но я так понимаю, это выходит за рамки того минимума, который предполагалось реализовать.</p>
					<footer>
						Александр Шевляков						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3487">19 февраля ’09 в 12:01</a></time>
					</footer>
				</article>
				<article id="comment-3488"class="comment odd alt thread-odd thread-alt depth-1">
					<p>с VML попробовать можно, но:<br />
1) vml:image в IE5-6 плохо кеширует — будет лишний раз спрашивать сервер на предмет "If-modified-since". И это не лечится, вылечили только в семерке.<br />
2) vml:image к прямому применению не пригоден — будет отображать "красный крест" незагруженного изображения пока не загрузит.<br />
Так что попробовать можно, но будет ли результат качественнее, вот в чем вопрос.</p>
					<footer>
						<a href="http://blog.ad.by" rel="external nofollow" class="url">enternet</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3488">19 февраля ’09 в 12:21</a></time>
					</footer>
				</article>
				<article id="comment-3489"class="comment even thread-even depth-1">
					<p>Вадим, очень здорово!</p>
<p>Скажите, пожалуйста, можно ли использовать код с своих проектах?</p>
<p>Вы сказали, что "любой этап жизни даркбокса можно прервать при помощи клавиши Esc", но это не совсем так: Esc не прерывает fade in картинки.</p>
					<footer>
						<a href="http://blog.bessarabov.ru" rel="external nofollow" class="url">bessarabov</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3489">19 февраля ’09 в 12:31</a></time>
					</footer>
				</article>
				<article id="comment-3493"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>Долго. Незачёт. Сам юзаю <a href="http://beholder-eye.info/2006/03/13/litebox" rel="nofollow">Сашин скрипт</a></p></blockquote>
<p>Ну, если сравнивать с сашиным скриптом, где попап просто появляется, то да — действительно долго. Но так и было задумано. Возможно, стоит несколько уменьшить время выполнения анимации, но не до уровня тык-и-готово.</p>
<blockquote><p>А вот бы сделать и стрелки для листинга</p></blockquote>
<p>Я сейчас думаю, как реализовать ну самые-самые примитивные стрелки.</p>
<blockquote><p>Можно ли использовать код с своих проектах?</p></blockquote>
<p>Конечно, я буду только рад. Это не самостоятельный продукт, а просто эксперименты в этом направлении.</p>
<blockquote><p>Esc не прерывает fade in картинки.</p></blockquote>
<p>Фактически, сразу после клика по ссылке, на Esc вешается обработчик, который анимирует тень до полной прозрачности и удаляет экземпляр даркбокса. Так что даже во время fade-in картинки Esc должен срабатывать точно так же.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3493">19 февраля ’09 в 15:58</a></time>
					</footer>
				</article>
				<article id="comment-3494"class="comment even thread-even depth-1">
					<blockquote><p>случается во время анимация</p></blockquote>
<p>анимаци<strong>и</strong>?</p>
<blockquote><p>сделана попытка сохранять создаваемый для дарбокса ... Не уверен, что это сильно повысило производительность</p></blockquote>
<p>Пока крутился-вертелся с багом div.darkbox-shadow в IE обнаружил еще один глюк: если на странице много контента и есть скролбар, то при повторном открытии картинки при скроле вниз div.darkbox-shadow съезжает. На твоем примере этого не добиться из-за малого содержания страницы. А <a href="http://miripiruni.org/example/darkbox/index2.html" rel="nofollow">здесь это легко увидеть</a> если закрывать картинки не крестиком, а кликом по затемненному полю.</p>
<p>Я бы не стал ничего клонировать. Это устранит непонятки в случае, который я описал.<br />
И потом я не понял: почему бы не добить IE вот такой строкой перед появлением дива darkbox-shadow:</p>
<pre>
<code>if($.browser.msie) $(&#039;div.darkbox-shadow&#039;).css(&#039;opacity&#039;,0);</code>
</pre>
<blockquote><p>...трюк, когда прозрачность добавляется к блоку при помощи JS, сработал, но снизил производительность всего решения.</p></blockquote>
<p>Вадим, ты проводил какие-то измерения? О каком снижении производительности идет речь?<br />
Вообщем, я предлагаю оставить <a href="http://miripiruni.org/example/darkbox/" rel="nofollow">без клонирования и с заплаткой для IE</a>.<br />
P.S. еще в IE 6 под большой картинкой черная полосочка... Но это уже мелочь... :)</p>
					<footer>
						<a href="http://miripiruni.org/" rel="external nofollow" class="url">miripiruni</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3494">19 февраля ’09 в 16:09</a></time>
					</footer>
				</article>
				<article id="comment-3495"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>О каком снижении производительности идет речь?</p></blockquote>
<p>Я замерял загрузку процессора и визуальную скорость отрисовки анимации.</p>
<p>С IE я ещё потанцую, а чем ты аргументируешь отказ от клонирования? Разве это формально не должно ускорять инициализацию нового даркбокса?</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3495">19 февраля ’09 в 16:34</a></time>
					</footer>
				</article>
				<article id="comment-3500"class="comment even thread-even depth-1">
					<p>Формально должно. Но то, что картинки открываются по одной и человеком, а не перебираются молниеносным скриптом, заставляет меня думать, что это ни к чему...<br />
А тем более будет лишним, когда будет листалка картинок.<br />
Но я не утверждаю, потому что ничего не измерял...</p>
					<footer>
						<a href="http://live.miripiruni.org/" rel="external nofollow" class="url">miripiruni</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3500">19 февраля ’09 в 17:42</a></time>
					</footer>
				</article>
				<article id="comment-3501"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Субьективно ощущение от интерфейса в Webkit - как от плавания в казеиновом клее. Серьезно, надо быть проще. Может быть это связано с движком анимации jquery, может быть с чем то еще - но раздражает сильно. Анимация должна быть короче вдвое-втрое, плюс "зум-эффект" на мой взгляд излишний (к примеру - он исходит из центра окна а не из блока который вызывает попап, то есть является просто декором). Просчет transparency в браузерах на все окно идет медленно.</p>
<p>Такие штуки здорово делать но встречать их на сайтах _крайне_ неприятно. В качествет опций можно а) сделать пиксельный грид-шахматку и использовать вместо затемнения окна б) убрать зум в) если так уж неймется фейдить, совместить зум и фейд в одну анимацию</p>
<p>Фейд затемняющего блока при закрытии картинки - совершеннейшее излишество, поскольку если я картинку закрываю это значит что я хочу "выйти здесь и сейчас" и у меня нету времени смотреть на фейдаут.</p>
<p>За кнопки с разных сторон - зачет, следующий этап -  сделать чтобы<br />
Прости, не удержался.</p>
					<footer>
						<a href="http://julik.nl" rel="external nofollow" class="url">Julik</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3501">19 февраля ’09 в 20:13</a></time>
					</footer>
				</article>
				<article id="comment-3502"class="comment even thread-even depth-1">
					<blockquote><p>следующий этап - сделать чтобы</p></blockquote>
<p>Чтобы что? )<br />
А так — спасибо за мнение, наверное и правда не удержался, чтобы сделать красиво. Делать такое и комбинировать эффекты довольно интересно. Будем проще в следующей версии, хотя бы для того, чтобы это дело не тормозило в IE.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3502">19 февраля ’09 в 20:19</a></time>
					</footer>
				</article>
				<article id="comment-3503"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Спешил, пропустил строку. Чтобы крест появлялся в самом затемнителе и намекал пользователю что весь затемнитель работает как деактиватор (мышка после клика НЕ там где close box). В следующий раз буду аккуратнее.</p>
					<footer>
						<a href="http://julik.nl" rel="external nofollow" class="url">Julik</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3503">19 февраля ’09 в 20:26</a></time>
					</footer>
				</article>
				<article id="comment-3504"class="comment even thread-even depth-1">
					<p>Комбинировать то здорово, но кьюить (выставлять их в очередь) опасно. От результата возникает впечатление "щас мы вам покажем разворачивающийся боксик. Так-с, минутку. А сейчас фейд! А сейчас шейк! вы еще с нами?.."</p>
					<footer>
						<a href="http://julik.nl" rel="external nofollow" class="url">Julik</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3504">19 февраля ’09 в 20:31</a></time>
					</footer>
				</article>
				<article id="comment-3514"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Выглядит отлично. У меня такой предложение – почему бы не использовать время, потраченное на анимацию и эфекты, для прелоада большой картинки, а все время до загрузку показывать растянутый тамбнейл?</p>
					<footer>
						<a href="http://350d.livejournal.com" rel="external nofollow" class="url">Vladimir Sobolev</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3514">21 февраля ’09 в 17:05</a></time>
					</footer>
				</article>
				<article id="comment-3515"class="comment even thread-even depth-1">
					<p>Извиняюсь за опечатки :)</p>
					<footer>
						<a href="http://350d.livejournal.com" rel="external nofollow" class="url">Vladimir Sobolev</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3515">21 февраля ’09 в 17:06</a></time>
					</footer>
				</article>
				<article id="comment-3517"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Владимир,</strong> получается, что до загрузки картинки я совсем не знаю её размеров, только пропорции. Поэтому, если превьюшка 40х30 пикселов и я растяну её на предполагаемые 800х600… то потом, когда загрузится картинка 400х300, мне придётся уменьшать растянутое превью, что будет выглядеть крайне нелепо.</p>
<p>Сейчас я работаю над новой версией, в которой будет листалка. В ней я как раз собираюсь реализовать предзагрузку следующей картинки, пока пользователь смотрит на анимацию и на предыдущую картинку.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3517">22 февраля ’09 в 0:56</a></time>
					</footer>
				</article>
				<article id="comment-3520"class="comment even thread-even depth-1">
					<p>Ради комфорта можно и передавать размеры параметрами.</p>
					<footer>
						<a href="http://350d.livejournal.com" rel="external nofollow" class="url">Vladimir Sobolev</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3520">22 февраля ’09 в 14:59</a></time>
					</footer>
				</article>
				<article id="comment-3522"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Всегда интересовал вопрос, как  обстоят дела с тенденцией поддержки браузеров  в разработке здесь и сейчас? Впринципе про ИЕ5 можно забыть, но вот стоит ли тестировать в Opera 9.25... к чему это я, в ней картинки не подгружаются и нет полупрозрачной заливки ;)  такой вот багрепорт.</p>
					<footer>
						<a href="http://tapazukk.net" rel="external nofollow" class="url">tapazukk</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3522">22 февраля ’09 в 20:09</a></time>
					</footer>
				</article>
				<article id="comment-3524"class="comment even thread-even depth-1">
					<p>Спасибо за багрепорт, думаю, что поддержку стоит обеспечить на уровне всей 9-й версии Opera.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3524">22 февраля ’09 в 22:13</a></time>
					</footer>
				</article>
				<article id="comment-3535"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Немного оффтоп, про кнопку close. Был ли опыт определения локации этой кнопки на линуксах, учитывая, что там ее можно поставить хоть вправо, хоть влево?</p>
					<footer>
						leek						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3535">24 февраля ’09 в 3:42</a></time>
					</footer>
				</article>
				<article id="comment-3536"class="comment even thread-even depth-1">
					<p>Линукс в данном случае трактуется как «не-мак», поэтому кнопка справа. Особых вариантов не вижу )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3536">24 февраля ’09 в 4:40</a></time>
					</footer>
				</article>
				<article id="comment-3545"class="comment odd alt thread-odd thread-alt depth-1">
					<p>и я тоже не вижу. совсем не вижу :)<br />
аму</p>
					<footer>
						amu						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3545">25 февраля ’09 в 22:32</a></time>
					</footer>
				</article>
				<article id="comment-3549"class="comment even thread-even depth-1">
					<p>Интересненько. Я поюзаю?</p>
					<footer>
						SlaviX_X						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3549">2 марта ’09 в 15:18</a></time>
					</footer>
				</article>
				<article id="comment-3550"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Конечно, конечно — feel free. В любых количествах и без упоминания.<br />
Разве что не присваивать авторство ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3550">2 марта ’09 в 15:26</a></time>
					</footer>
				</article>
				<article id="comment-3579"class="comment even thread-even depth-1">
					<p>С кнопкой для Мака - это конечно круто придумано.</p>
<p>На текущий момент мне, пожалуй, больше всего нравится FancyZoom. И быстрый достаточно и красивый. С удивлением обнаружил его на oper.ru, например. Единственно, что в IE6 подтормаживает на мой взгляд.</p>
<p>Я сделал свой собственный вариант лайтбокса под него, всё-таки ты прав Вадим, без анимации совсем жизнь скучна :-).  Вот вспомнил про клавишу Esc - сейчас доделаю.</p>
<p>А насчёт листалки - мне кажется, может и не стоит её делать? Мне не нравится, когда lightbox например на главной странице перебирает картинки из абсолютно разных постов. Или делать контейнеры какие, чтобы он только внутри них работал.</p>
					<footer>
						<a href="http://warmrobot.com" rel="external nofollow" class="url">warmrobot</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3579">5 марта ’09 в 21:49</a></time>
					</footer>
				</article>
				<article id="comment-3581"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я как раз делаю листалку в пределах блока, так что будет по-умному.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3581">5 марта ’09 в 22:25</a></time>
					</footer>
				</article>
				<article id="comment-3862"class="comment even thread-even depth-1">
					<p>в своё время делал объединение фоток в галереи через использование параметра rel у ссылки и листал в этих рамках. удобство в том, что фотографии одного сета могут быть разбросаны по всей странице.</p>
					<footer>
						wixus						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-3862">19 мая ’09 в 10:47</a></time>
					</footer>
				</article>
				<article id="comment-4239"class="comment odd alt thread-odd thread-alt depth-1">
					<p>привет.<br />
включил Darkbox, в свой плагин для joomla <a href="http://www.ageent.ru/my-extensions-joomla/299-plugin-all-gallery.html" rel="nofollow">http://www.ageent.ru/my-extensions-joomla/299-plugin-all-gallery.html</a><br />
Одна только проблема в Опере 10 если первый раз заходим, фотки вроде как открываются, если второй раз пробуем открыть фотку, то она уже не открывается.<br />
доработай плиз.</p>
					<footer>
						<a href="http://www.ageent.ru" rel="external nofollow" class="url">ageent</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4239">18 ноября ’09 в 13:44</a></time>
					</footer>
				</article>
				<article id="comment-4252"class="comment even thread-even depth-1">
					<p>IE8 - работает<br />
FF3.5.5 - без проблем<br />
Crome 3.0.195 - тоже вопросов нет, а вот<br />
Opera 10.10 - как описано выше (повторно картинка не грузится).</p>
<p>Оч ждем соответствующей правки.</p>
					<footer>
						<a href="http://www.navylabs.ru" rel="external nofollow" class="url">Дмитрий</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4252">11 декабря ’09 в 22:56</a></time>
					</footer>
				</article>
				<article id="comment-4253"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Дмитрий, проблема известная и я постараюсь до конца декабря выложить обновление.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4253">11 декабря ’09 в 23:00</a></time>
					</footer>
				</article>
				<article id="comment-4416"class="comment even thread-even depth-1">
					<p>А вот меня беспокоит вопрос относительно того как много времени мы ожидаем в процессе пустого (тупого) лицезрения крутилки, то есть мы кликаем на одну картинку - ждем, ждем, ждем - показалась, посмотрели</p>
<p>кликнули на другую - снова ждем ждем, смотрим на эту крутилку безинформативную совершенно</p>
<p>я конечно не знаю как в столице например, но вот в моем южном городе я имею 2х мегабитный интернет и фотографии в ваших примерах грузятся все же раздражительно долго. то есть демки то я перетерплю, а вот на большее не согласен</p>
<p>может быть именно поэтому такие сервисы как flickr.com не добавляют себе подобных плагинов. хотя если оглянуться вокруг, то это делают миллионы дизайнеров. эффект красив, да, но разве это удобно?</p>
<p>а нельзя ли сделать так, чтобы вместо крутилки нам отображалось как картинка подкачивается? как сказал когда-то один известный веб девелопер, высота (рамка) картинки является мерой ее окончания загрузки, а сам процесс подкачки - той полоской информирующей об этом. а подобными плагинами мы прячем эту информацию совсем. не хорошо</p>
					<footer>
						Стив						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4416">14 января ’10 в 15:41</a></time>
					</footer>
				</article>
				<article id="comment-4418"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Стив,</strong> я абсолютно с вами согласен и эта проблема могла бы быть решена в рамках таких «лайтбоксов», если бы у нас была возможность получать размеры картинки до её полной загрузки. А насчёт сравнения с Flickr'ом — это фотохостинг, там люди занимаются исключительно тем, что смотрят картинки. На этом сайте основа — текст, а картинки только иллюстрируют, но никак не являются основой. В любом случае, все ссылки живые и вы можете накликать их в отдельных вкладках, если ваше соединение не позволяет удобно пользоваться даркбоксом.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4418">14 января ’10 в 15:50</a></time>
					</footer>
				</article>
				<article id="comment-4420"class="comment even thread-even depth-1">
					<p>А, я понял, спасибо большое за ответ</p>
					<footer>
						Стив						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4420">14 января ’10 в 16:52</a></time>
					</footer>
				</article>
				<article id="comment-4568"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну так заработал даркбокс в опере или нет?</p>
					<footer>
						<a href="http://yvelious.com" rel="external nofollow" class="url">Yvelious</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4568">29 января ’10 в 3:14</a></time>
					</footer>
				</article>
				<article id="comment-4570"class="comment even thread-even depth-1">
					<p><strong>Yvelious,</strong> новая версия скрипта, что используется на этом сайте, работает и в Opera.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4570">29 января ’10 в 3:20</a></time>
					</footer>
				</article>
				<article id="comment-4646"class="comment odd alt thread-odd thread-alt depth-1">
					<p>у меня почему-то в хроме и опере второй раз увеличенная картинка не подгружается, все останавливается на отображении индикатора</p>
					<footer>
						sikwel						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-4646">26 марта ’10 в 13:48</a></time>
					</footer>
				</article>
				<article id="comment-5039"class="comment even thread-even depth-1">
					<blockquote><p><a href="/pro/2009/02/darkbox-2/" rel="nofollow">http://pepelsbey.net/pro/2009/02/darkbox-2/</a></p></blockquote>
<p>&gt;&gt;$ is not defined<br />
&gt;&gt;<a href="/pro/2009/02/darkbox-2/" rel="nofollow">http://pepelsbey.net/pro/2009/02/darkbox-2/</a><br />
&gt;&gt;Line 8</p>
					<footer>
						MFLM						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-5039">19 декабря ’10 в 3:53</a></time>
					</footer>
				</article>
				<article id="comment-5388"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Открыл одну картинку<br />
Нажал ESC после загрузки - закрылась<br />
Открываю другую - анимация, показывающая загрузку картинки, не крутится</p>
					<footer>
						Nerey						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-5388">31 июля ’12 в 19:49</a></time>
					</footer>
				</article>
				<article id="comment-5389"class="comment byuser comment-author-pepelsbey bypostauthor even thread-even depth-1">
					<p><b>Nerey,</b> см. запись «<a href="/2010/12/darkbox-return/" rel="nofollow">Возвращение даркбокса</a>»</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-5389">31 июля ’12 в 20:13</a></time>
					</footer>
				</article>
				<article id="comment-6121"class="comment odd alt thread-odd thread-alt depth-1">
					<p>лайтбокс круче</p>
					<footer>
						Альберт						<time pubdate datetime="2009-02-19T04:26:14+00:00"><a href="index.html#comment-6121">30 октября ’12 в 1:54</a></time>
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
	<!-- 21 & 0,535 -->
</body>
</html>
