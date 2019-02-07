<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
	<title>Найсбокс — Пепелсбей.net</title>
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
				<h1><a href="index.html" rel="bookmark">Найсбокс</a></h1>
				<time pubdate datetime="2008-05-02T03:27:08+00:00">2 мая ’08</time>
			</header>
			<p>Вспоминая про <a href="http://tachisis.livejournal.com/498035.html">вечный конфликт дизайнера и верстальщика</a>, нельзя не упомянуть такую интересную тему, как отрисовка элементов форм в стиле сайта или, говоря по-птичьи, <em>кастомные контролы</em>. Мне вообще придётся много говорить не по-человечьи, поскольку адекватных эквивалентов некоторым терминам в русском языке пока не существует.</p>

<p>И ладно бы, если дизайнеру понравилось поле поиска со скруглёнными краями из Mac&nbsp;OS&nbsp;X. Другое дело, когда он берётся за кнопку «Обзор», выпадающие списки или чекбоксы с радиобатонами — остаётся только молча сжать кулаки. И не потому, что это долго и сложно делать… Скорее потому, что тем самым дизайнер заставляет пользователя думать <q>боже, что это за хрень такая?</q> — он прячет то, к чему пользователь привык в своей системе или браузере. А это может привести к тому, что он, потратив время на попытку разобраться в интерфейсе, может плюнуть на все и уйти.</p>

<p>Но бывает, что <em>очень надо</em>. Поэтому предлагаю вам одно из решений проблемы с чекбоксами и радиобатонами, прототип которого я использовал в проекте «Магазин&nbsp;одной&nbsp;футболки» для Livejournal.</p>

<p><a href="/pro/2008/05/nicebox/">Найсбокс</a> — для того, чтобы увидеть решение в действии, нажмите «Nice!».</p>

<p>Суть метода заключается в том, что мы, во-первых, оборачиваем наши контролы прямо в&nbsp;<code>&lt;label&gt;</code>:</p>

<pre><code>&lt;legend&gt;Оркестра&lt;/legend&gt;</code>
<code>&lt;ul&gt;</code>
<code>    &lt;li&gt;</code>
<code>        &lt;label for="first-1"&gt;</code>
<code>            &lt;input type="radio" name="first" id="first-1" /&gt;</code>
<code>            Представляет</code>
<code>        &lt;/label&gt;</code>
<code>    &lt;/li&gt;</code>
<code>&lt;/ul&gt;</code></pre>

<p>А во-вторых, если у пользователя включён JavaScript, то мы назначаем форме <code>class="nice"</code>, а также ряд дополнительных классов для <code>&lt;input&gt;</code> и <code>&lt;label&gt;</code> — это прячет родные контролы далеко налево и рисует наши фоном для <code>&lt;label&gt;</code>:</p>

<pre><code>.form .lost {</code>
<code>    position:relative;</code>
<code>    left:-9999px;</code>
<code>    }</code>
<code>.form .radio-on {</code>
<code>    background:url(../i/radio/on.gif) 0 50% no-repeat;</code>
<code>    }</code></pre>

<p>Таким образом, просто смещая контролы налево, мы сохраняем высоту строки и избегаем прыжков при срабатывании JS-функции.</p>

<p>Стоит заметить, что данная методика не претендует на звание «решение под ключ», а всего лишь демонстрирует подход к решению проблемы. Кроссбраузерность вполне на уровне: IE5–7, Firefox&nbsp;2–3, Opera&nbsp;9 (как минимум), Safari&nbsp;3. Если вам важна совместимость с Safari&nbsp;2, то придётся писать дополнительный костыль, который обеспечит встроенную в остальные браузеры связь ярлык/поле.</p>

<p>Остаётся только пожелать вам вменяемых дизайнеров и не использовать подобные методики.</p>
			<section class="comments" id="comments">
				<header>
					<h3>Комментарии</h3>
					<small>30</small>
				</header>
				<article id="comment-275"class="comment even thread-even depth-1">
					<p>А с той самой кнопкой «Обзор» что посоветуете сделать? (:</p>
					<footer>
						DeMx						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-275">2 мая ’08 в 5:43</a></time>
					</footer>
				</article>
				<article id="comment-276"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я все-таки считаю, что использование кастомных контролов не допустимо, а дизайнеру нужно бить по голове за это, чтобы в следующий раз умерил свой пыл! :)</p>
					<footer>
						<a href="http://slaver.info" rel="external nofollow" class="url">Slaver</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-276">2 мая ’08 в 10:28</a></time>
					</footer>
				</article>
				<article id="comment-277"class="comment even thread-even depth-1">
					<p><a href="http://www.quirksmode.org/dom/inputfile.html" rel="nofollow">http://www.quirksmode.org/dom/inputfile.html</a> - про кнопку обзор.<br />
Но, как заметили выше - надо бы бить по голове.</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-277">2 мая ’08 в 13:32</a></time>
					</footer>
				</article>
				<article id="comment-278"class="comment odd alt thread-odd thread-alt depth-1">
					<p>off: А это ничего, что я вместо тире пишу минус? :)</p>
					<footer>
						Михаил Валенцев						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-278">2 мая ’08 в 13:33</a></time>
					</footer>
				</article>
				<article id="comment-279"class="comment even thread-even depth-1">
					<p><strong>Михаил,</strong> это не минус, это дефис )<br />
Для себя я считаю такое недопустимым, другим предлагаю решать самим ;)</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-279">2 мая ’08 в 13:37</a></time>
					</footer>
				</article>
				<article id="comment-280"class="comment odd alt thread-odd thread-alt depth-1">
					<p>В IE (5, 6, 7) не срабатывает при нажатии на бокс, только на надпись.</p>
					<footer>
						Павел Калинин						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-280">2 мая ’08 в 15:20</a></time>
					</footer>
				</article>
				<article id="comment-281"class="comment even thread-even depth-1">
					<p><strong>Паша,</strong> спасибо. Уже поправил )</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-281">2 мая ’08 в 15:35</a></time>
					</footer>
				</article>
				<article id="comment-282"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Самый вменяемый дизайнер — это тот, который и верстальщик :D или занимался раньше версткой тоже, а сейчас у него столько работы, что времени хватает только на рисование сайта в фотошопе, а те, кто напрочь перерисовывают системные контролы и приводят их к виду, который по их представлению намного лучше смотриццо и никак нельзя пойти на компромис, просто не знают принципов юзабилити и создания юзер френдли интерфейсов... а вот кнопку &quot;Обзор&quot; мне кажется всетаки надо приводить в нормальный вид, уж сильно стремно она выглядит, в некоторых браузерах даже нельзя задать свое название для нее по русски. И еще огорчает, что в сафари для виндовс селекты нельзя привести к общему стилю инпутов :( хотя может я не знаю как :-[</p>
<p>Когдато раньше пытался написать что-то похожее на Ваш скрипт Nicebox, не додумался тогда что можно использовать отрицательные поля, а в ИЕ контролы всегда сверху же, вообщем ничо не вышло) Пойду перепишу скрипт под jQuery)) спасибо за идею.</p>
					<footer>
						<a href="http://www.webpp.ru/" rel="external nofollow" class="url">Octane</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-282">2 мая ’08 в 17:35</a></time>
					</footer>
				</article>
				<article id="comment-284"class="comment even thread-even depth-1">
					<p>Блин, искал подобное решение полгода назад — так и не нашел ничего что бы нормально заработало. Надо будет запомнить.</p>
					<footer>
						<a href="http://labria.startika.com" rel="external nofollow" class="url">labria</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-284">3 мая ’08 в 2:19</a></time>
					</footer>
				</article>
				<article id="comment-289"class="comment odd alt thread-odd thread-alt depth-1">
					<p>По моему самый вменяемый способ из тех, что я встречал. Если вдруг (да сохранят меня боги), я не смогу отпинаться от желания кастомных чеков, то воспользуюсь этим способом.</p>
					<footer>
						<a href="http://pokrovskii.com" rel="external nofollow" class="url">Максим Покровский</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-289">6 мая ’08 в 21:17</a></time>
					</footer>
				</article>
				<article id="comment-309"class="comment even thread-even depth-1">
					<p>Спасибо Вадим, но я, все таки, стараюсь оставлять оформление браузеру. Так как-то привычнее даже для меня. :)<br />
Многие делают поиск по сайту по нажатию на клавишу Enter, а баттон прячут, лично меня вводит в заблуждение это, не сразу доходит.</p>
					<footer>
						Alexandr Andreev						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-309">14 мая ’08 в 14:17</a></time>
					</footer>
				</article>
				<article id="comment-310"class="comment odd alt thread-odd thread-alt depth-1">
					<p><strong>Alexandr,</strong> а мне вот наоборот кнопка почти никогда не нужна, особенно для поисковых форм. Хотя согласен — для большей доступности её лучше оставлять. Я, к примеру, не мог воспользоваться поиском на одном сайте из Opera Mini, посколько просто некуда было нажать, мол «Искать!»…</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-310">14 мая ’08 в 14:22</a></time>
					</footer>
				</article>
				<article id="comment-311"class="comment even thread-even depth-1">
					<p><strong>Вадим</strong>, я собственно это и имел ввиду, а так частенько отправляю формы нажатием на ctrl+enter, если такое возможно либо простым нажатием на enter.</p>
					<footer>
						Alexandr Andreev						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-311">14 мая ’08 в 16:38</a></time>
					</footer>
				</article>
				<article id="comment-344"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Вот вам <a href="http://autorambler.ru/catalogue/" rel="nofollow">пример</a> кастомных контролов. Плохо что ли? А то ишь, всех дизайнеров под одну гребенку... Нехорошо :)</p>
					<footer>
						<a href="http://www.mordovorot.ru/" rel="external nofollow" class="url">Зимин Дмитрий</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-344">21 мая ’08 в 12:32</a></time>
					</footer>
				</article>
				<article id="comment-345"class="comment even thread-even depth-1">
					<p>Я бы не назвал этот контрол <em>кастомным</em>, ибо в HTML просто нет ничего подобного. А так — великолепная реализация, довольно удобно.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-345">21 мая ’08 в 12:35</a></time>
					</footer>
				</article>
				<article id="comment-350"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Поле загрузки файла во всех браузерах совершенно убогое и бессмысленное. Лучшее решение — в новой версии WordPress. Одна кнопка Upload и моментальная загрузка, без всяких подтверждений. Другое дело select — этот контрол часто используется в операционной системе, поэтому его менять не стоит. Хотя и не откидываю совсем вариант его особой визуализации.</p>
					<footer>
						<a href="http://seleckis.lv" rel="external nofollow" class="url">Nikita</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-350">22 мая ’08 в 1:18</a></time>
					</footer>
				</article>
				<article id="comment-352"class="comment even thread-even depth-1">
					<blockquote><p>Поле загрузки … убогое и бессмысленное.<br />
Лучшее решение — в новой версии WordPress</p></blockquote>
<p>Вот уж не знаю… Ситуация: у вас есть 10 файлов с похожими именами на раб.столе. Если загрузка начинается сразу же, то вероятность загрузить какой-то файл дважды возрастает. Это как заполнять анкету, в которой все поля с type="password"… А в нормальном поле загрузки у вас появляется имя файла и вы контролируете то, что загружаете.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-352">22 мая ’08 в 15:39</a></time>
					</footer>
				</article>
				<article id="comment-360"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Имя файла вы видите в окне выбора файла (browse). В поле file помещается длинный путь к файлу со всеми папками и дисками. Его никто не читает и не проверяет.</p>
<p>Вероятность двойной загрузки не должно тревожить пользователя. Веб-приложение должно быть организовано так, чтобы пользователь мог видеть название загружаемого файла, прогресс загрузки и кнопку отмены загрузки, а так же возможность удалить и закачать другой файл.</p>
					<footer>
						<a href="http://seleckis.lv" rel="external nofollow" class="url">Nikita</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-360">22 мая ’08 в 23:47</a></time>
					</footer>
				</article>
				<article id="comment-362"class="comment even thread-even depth-1">
					<blockquote><p>В поле file помещается длинный путь к файлу со всеми папками и дисками</p></blockquote>
<p>В Safari под Mac OS я вижу именно имя файла… Но идею про <em>удобное приложение</em> я понял.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-362">23 мая ’08 в 0:24</a></time>
					</footer>
				</article>
				<article id="comment-364"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну Safari это вообще отдельная история, там нет поля ввода как такового. Это больше на лейбл похоже ))</p>
					<footer>
						<a href="http://seleckis.lv" rel="external nofollow" class="url">Nikita</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-364">24 мая ’08 в 14:00</a></time>
					</footer>
				</article>
				<article id="comment-368"class="comment even thread-even depth-1">
					<p>1. при вкладывании инпута в лейбл связка for-id является лишней.<br />
2. какраз-таки лучше применять какой-нибудь дисплей:нон, ибо в зависимости от системной шкурки инпуты могут распирать строку по разному.<br />
3. дизайн стандартных контролов подходит лишь к стандартным же диалоговым окнам. так что нужно либо делать страницы в стиле системной шкурки (что в общем случае не имеет решения), либо перегружать стандартные контролы (что имеет хоть какое-то решение).<br />
кроме того, стандартных контролов обычно не хватает, поэтому пишутся свои, а самописные априори не похожи на стандартные, что опять же вынуждает нас перегружать контролы дабы сохранить единообразность интерфейса.<br />
а вот за что руки отрывать надо, так это за плохой дизайн. в частности, за создание своих контролов, которые:<br />
а) не поддерживают навигацию клавишами<br />
б) имеют фиксированный размер</p>
<p>вот за кнопку &quot;сабмит&quot; у этой формы я тебе что-нибудь и оторвал бы ^_^<br />
почему она где-то далеко справа и выглядит как элемент дизайна, а не контрол?</p>
					<footer>
						tenshi						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-368">25 мая ’08 в 15:58</a></time>
					</footer>
				</article>
				<article id="comment-369"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Согласен, контролы не покрывают всех нужд современного <em>вебдваноля</em>, но использовать простейшие как они есть — ничего не мешает. Сложные кроссбраузерные контролы, в которых можно передвигаться табом и стрелками я сам очень люблю.</p>
<p>Насчёт этой формы и вообще контролов на этом сайте: все они сделаны в одном стиле, в стиле сайта, так что всё последовательно ;) Размещение и форма кнопки — это тоже некий ход который, как мне кажется, делает добавление комментария вполне очевидным.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-369">25 мая ’08 в 16:07</a></time>
					</footer>
				</article>
				<article id="comment-377"class="comment even thread-even depth-1">
					<p>красным цветом у тебя выделяются:<br />
1. текущий пункт меню<br />
2. название страницы<br />
3. автор комментария</p>
<p>ни один из них не является &quot;контролом&quot; (ну разве что &quot;автор&quot; является ссылкой).</p>
<p>эту &quot;очевидно расположенную кнопку&quot; я искал секунд пять.<br />
заполнив форму сверху вниз (а она вертикальная!) я перенёсся взглядом далее и обнаружил непонятные ссылки &quot; ‹ Ранее / Позднее ›&quot; (которые с какого-то перепугу ещё и свёрстаны в виде списка..), вместо ожидаемой кнопки &quot;отправить&quot;.</p>
<p>кстати, какой великий смысл верстать комменты в виде списка определений? неужели то, что я пишу, является определением меня? %-)</p>
					<footer>
						tenshi						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-377">26 мая ’08 в 21:20</a></time>
					</footer>
				</article>
				<article id="comment-378"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Я, пожалуй, не буду утверждать, что этот сайт выполнен безупречно с точки зрения информационной архитектуры, дизайна и цветового кодирования — поэтому и готовится его новая версия. Однако предложенные решения, на мой взгляд, не препятствуют нормальной навигации и удобному использованию сайта.</p>
<p>В тоже время, я абсолютно уверен в уместности использования списка для оформления навигационных ссылок и элемента DL для отдельного комментария. Хотите поговорить об этом — пишите, не будем оффтопить здесь.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-378">26 мая ’08 в 21:40</a></time>
					</footer>
				</article>
				<article id="comment-379"class="comment even thread-even depth-1">
					<p>а чего тут обсуждать? человек, с пеной у рта евангелизирующий на тему семантики, задвинул её куда по дальше и размечает текст так, чтоб без стилей (точнее с дефолтными стилями) всё хорошо выглядело и поисковиками хорошо индексировалось.<br />
лицемерие, чистой воды.</p>
					<footer>
						tenshi						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-379">26 мая ’08 в 23:51</a></time>
					</footer>
				</article>
				<article id="comment-380"class="comment odd alt thread-odd thread-alt depth-1">
					<blockquote><p>лицемерие, чистой воды</p></blockquote>
<p>Оу, да вас я вижу уязвил кто-то. Повторюсь: я уверен в том коде, который пишу. Если вы чего-то не понимаете — это не моя забота. В этом посте обсуждение моего кода закрыто, продолжение здесь — <a href="mailto:pepelsbey@gmail.com" rel="nofollow">pepelsbey@gmail.com</a>.</p>
<p>ps: не удержусь, процитирую <a href="http://www.w3.org/TR/html401/struct/lists.html#h-10.3" rel="nofollow">спецификацию</a> — «Another application of DL, for example, is for marking up dialogues, with each DT naming a speaker, and each DD containing his or her words».</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-380">26 мая ’08 в 23:56</a></time>
					</footer>
				</article>
				<article id="comment-387"class="comment even thread-even depth-1">
					<p>гы-гы, похоже авторы спеки тоже не знают смысла слова &quot;definition&quot;..<br />
хтмл - был, есть, и останется языком визуальной, а не семантической разметки..<br />
одно только деление элементов на строчные и блочные чего стоит...</p>
					<footer>
						tenshi						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-387">28 мая ’08 в 0:57</a></time>
					</footer>
				</article>
				<article id="comment-461"class="comment odd alt thread-odd thread-alt depth-1">
					<p>&quot;кастомные контролы&quot; = &quot;настраиваемые (индивидуальные) функциональные элементы&quot;</p>
					<footer>
						shurello						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-461">17 июня ’08 в 17:37</a></time>
					</footer>
				</article>
				<article id="comment-474"class="comment even thread-even depth-1">
					<p>Вот только с отключенной графикой не хорошо получается, кажется подобный вопрос уже поднимался в форумах Вебмаскона (про отключенные картинки, и недоступность элементов &quot;модифицированных&quot; форм)</p>
					<footer>
						<a href="http://tapazukk.net/" rel="external nofollow" class="url">tapazukk</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-474">1 июля ’08 в 11:09</a></time>
					</footer>
				</article>
				<article id="comment-475"class="comment odd alt thread-odd thread-alt depth-1">
					<p>Ну, теоритически, можно и с этим справиться при помощи экстра-разметки, если уж будет стоять цель сделать сайт безупречным.</p>
					<footer>
						<a href="/" rel="external nofollow" class="url">pepelsbey</a>						<time pubdate datetime="2008-05-02T03:27:08+00:00"><a href="index.html#comment-475">1 июля ’08 в 11:59</a></time>
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
	<!-- 20 & 0,549 -->
</body>
</html>
