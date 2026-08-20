# NERV Terminal v2

A fake NERV operating system built for the Hack Club Stardance WebOS 2 challenge. 

Heavily inspired by *Neon Genesis Evangelion*. Features Lilith as the desktop wallpaper because she goes unreasonably hard.

**Live site:**  
https://anuragtamang095-coder.github.io/Webos/

---

## What it is

It’s a full retro-futuristic desktop environment running directly in the browser. 

You boot it up, drag windows around, type commands into a terminal, trigger emergency Angel alerts, dig through classified lore files, write persistent pilot notes, minimize apps to the taskbar, and initiate complete system shutdowns.

This originally started as my WebOS 1 submission, but I rebuilt and upgraded almost everything for WebOS 2.

---

## Features

### Carried over from v1
- Draggable windows with smooth positioning
- Start menu and taskbar
- Live digital clock
- Dynamically fluctuating sync ratio (fluctuates like Shinji’s mental stability)
- Functional terminal with interactive commands
- Emergency Angel alert screen
- MAGI system boot sequence (Melchior, Balthasar, Casper)

### Brand new in v2
- **Lilith Desktop Wallpaper** with a dark overlay to keep UI text sharp and readable
- **Full Sound Effects Engine** — UI clicks, an alert siren loop, and boot audio
- **Click-to-Boot Overlay** — browsers block autoplay audio by default, so this splash screen unlocks audio while making the startup feel intentional and cinematic
- **Pilot Log (Notes App)** — write personal logs that save directly to `localStorage`, so your entries survive page refreshes
- **Classified Filesystem** — desktop folder shortcuts that open lore files:
  - `angel_rpt.txt`
  - `diary.txt`
  - `scroll_07.txt`
  - `magi.log`
- **Complete Window Controls** — minimize to the taskbar, maximize/fullscreen, and close
- **Custom Context Menu** — right-click anywhere on the desktop to launch the terminal, trigger alerts, reboot, or shut down
- **Disabled Text Selection** across the desktop so it feels like a native OS rather than a webpage

### Cinematic set pieces
- **Eva Launch Sequence** — typing `launch` into the terminal triggers a fullscreen Unit-01 deployment screen with live diagnostic logs and a staged percentage counter
- **MAGI Override Consensus** — clicking OK during an Angel alert initiates a real-time vote between Melchior, Balthasar, and Casper before clearing the threat
- **Emergency Shutdown** — attempts to close the browser tab natively; if blocked by the browser, it displays a complete black screen with an *"LCL Drained"* status

---

## Terminal commands to try

- `help` — view available commands
- `status` — check system diagnostics
- `launch` — trigger the Unit-01 deployment sequence
- `alert` — initiate the Angel emergency protocol
- `sync` — display current pilot sync rate
- `whoami` — inspect current credentials
- `clear` — wipe the terminal screen
- `get in the robot` — Shinji, please

---

## How I built it

Everything is written from scratch using **HTML, CSS, and Vanilla JavaScript**. No libraries, no UI kits, no frameworks.

Some of the trickiest parts to solve:
- Getting drag events to work smoothly without hijacking clicks on the close, minimize, and maximize buttons
- Handling `localStorage` data serialization for the Notes app
- Pacing the launch sequence with staged timeouts so it felt like real industrial machinery instead of an instant screen swap
- Working around browser autoplay policies by gating audio behind an initial user interaction

---

## Bugs that took years off my life

- Typed `lodaNotes()` and later `lodeNotes()` instead of `loadNotes()`, which threw an uncaught error, killed the script, and prevented all file windows from opening.
- Wrote `viewer,style.top` with a literal comma instead of a dot.
- The eternal classic: `getElementsById` with a rogue plural **s**.
- Named a custom element `alert` and tried setting `alert.innerHTML`, which clashed with the browser's built-in `window.alert()` method and broke the entire MAGI voting sequence.
- Wrote `<soan>` instead of `<span>` on the maximize button markup.
- Typed `rgna()` instead of `rgba()` in the CSS for the launch overlay.
- The right-click menu was still firing the legacy "access denied" alert during shutdown because I forgot to unbind the old event handler.

---

## Stuff that’s still broken / future ideas

- It doesn't scale well to mobile screens (definitely designed for desktop displays)
- If you fling a window hard enough, it can still clip partially outside the viewport
- Still want to build a dedicated retro music/synth player window
- Thinking about adding a mini-game (like a radar-based defense game or Snake)
- Maximize/restore logic can feel slightly jittery if a window doesn’t have default dimensions explicitly declared

---

## Stack

- HTML5
- CSS3 (custom layouts & animations)
- Vanilla JavaScript (DOM manipulation & Audio API)
- Web Storage API (`localStorage`)

---

## How to run it

1. Open the [live demo link](https://anuragtamang095-coder.github.io/Webos/).
2. Click anywhere on the boot screen to initialize audio and mount the OS.
3. Mess around.

If you want to run it locally:
```bash
git clone https://github.com/anuragtamang095-coder/Webos.git
cd Webos
# Open index.html in any browser
```

---

## Credits

- Concept and aesthetic inspired by *Neon Genesis Evangelion* (Gainax / Studio Khara)
- Sound design sourced from Freesound and Pixabay
- Built for the Hack Club Stardance WebOS 2 challenge

Made by **Anurag Tamang**