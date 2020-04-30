---
title: 'Уличная магия IE'
date: 2008-09-05
tags: post
layout: post.njk
---

Продолжая тему того, как нужно прятаться, чтобы [не бояться](/blog/im-not-coward-but-hell/), сегодня я хотел бы предложить вам руководство по использованию магического элемента `X-UA-Compatible` в контексте общего понимания переключения режимов рендеринга в Internet Explorer.

Итак, сводный список «[Режимы рендеринга Internet Explorer](demo/)».

Принцип построения данного списка звучит просто: что нужно сделать и каких ошибок не допустить для того, чтобы IE6–8 вёл себя согласно поставленным задачам. То есть работал или в _режиме совместимости со стандартами_ (standard compliance mode), или в _режиме уловок_ (quirks mode), или — в случае с IE8 — в _режиме соответствия стандартам_ (super standard mode).

Каждый из примеров списка состоит только из тех элементов, которые необходимы для соответствующего режима. К примеру, для переключения в _режим совместимости со стандартами_, IE6 нужен только правильный `<DOCTYPE>`, перед которым возможно наличие только пробелов и переводов строк:

    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

В то время как для IE8 достаточно произнести подобное заклинание:

    <meta http-equiv="X-UA-Compatible" content="IE=7">

В данном списке не учтены особенности перехода IE8 из _режима соответствия стандартам_ в _режим совместимости со стандартами_ на интранет-страницах, что является скорее бизнес-ходом, не дающим разработчикам особого выбора. Подробнее об этом можно прочитать у Хокона Ли (Hakon Lie) в заметке «[Microsoft breaks IE8 interoperability promise](http://www.theregister.co.uk/2008/08/29/hakon_lie_ie8_interoperability/)».

Такие вот чудеса.