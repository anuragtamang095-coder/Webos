NERV Terminal

A fake operating system built for the Hack Club Stardance WebOS challenge.

It’s themed around Neon Genesis Evangelion because Eva is peak.

Live site:
https://anuragtamang095-coder.github.io/Webos/
What it does

This project is basically a fake desktop environment with draggable windows and an Evangelion-style interface.

When the site first loads, it shows a boot screen inspired by the MAGI system starting up — Melchior, Balthasar, and Casper.
Features

    5 draggable windows
    A working terminal with commands
    A fake emergency Angel alert with the warning kanji
    A live clock in the taskbar
    A sync ratio that changes randomly, like Shinji’s actual sync rate lmao
    An Angel encounter log
    A start menu at the bottom
    Desktop icons you can double-click

Terminal commands to try

    help
    status
    launch
    sync
    whoami
    alert
    clear
    get in the robot

The last one is obviously a Shinji reference.
How I built it

I started with the boot screen and top bar first. After that, I made one window and got dragging to work before duplicating the same system for the others.

The terminal was the last major thing I added.

Everything is built with just:

    HTML
    CSS
    Vanilla JavaScript

No frameworks — I wanted to actually understand how everything worked instead of relying on libraries.
Bugs that almost ended me

    I wrote new Data() instead of new Date() and it broke everything. Dragging stopped working, the terminal stopped working — basically the whole app died. I spent hours trying to figure it out before realizing one typo near the top of the script was crashing everything below it.
    At one point I wrote polot instead of pilot for a window ID.
    The close button kept getting swallowed by the drag logic, so windows wouldn’t close.
    All the desktop icons were stacked on top of each other because I forgot to give them different top positions.

Stuff still broken / things I want to improve

    It doesn’t look great on mobile — I didn’t really optimize it much there
    Windows can still go partially off-screen if you drag too hard
    The terminal doesn’t scroll properly once it fills up
    I want to add sound effects for the alert, especially Eva-style sirens
    It would be cool to use an actual Unit-01 image in the background
    Maybe add Rei / Asuka / Misato as contact windows

Stack

    HTML
    CSS
    JavaScript

That’s it. No libraries.
Credits

    Inspired by Neon Genesis Evangelion (Gainax / Khara)
    Built for the Hack Club Stardance WebOS challenge
    Kanji used:
        警告 — Warning
        特務機関 ネルフ — Special Agency NERV
        マギシステム — MAGI System

Made by Anurag Tamang