# NERV Terminal v2

A fake NERV operating system built for the Hack Club Stardance WebOS 2 challenge. 

Heavily inspired by *Neon Genesis Evangelion*. Features Lilith as the desktop wallpaper because she goes unreasonably hard.

**Live site:**  
https://anuragtamang095-coder.github.io/Webos/

---

## What it is

It’s a retro-futuristic desktop environment running directly in the browser. 

You boot it up, drag windows around, type commands into a terminal, trigger emergency Angel alerts, dig through classified lore files, write persistent pilot notes, minimize apps to the taskbar, and initiate complete system shutdowns.

This originally started as my WebOS 1 submission but I rebuilt and upgraded almost everything for WebOS 2 :p

---

## things can be done rn(if nothing broke under my nose)

### Carried over from v1
- Draggable windows with smooth positioning
- Start menu and taskbar
- Live digital clock
- Dynamically fluctuating sync ratio (fluctuates like mental stability)
- Functional terminal with interactive commands
- Emergency Angel alert screen
- MAGI system boot sequence (Melchior, Balthasar, Casper)

### NeW in v2
- **Lilith Desktop Wallpaper** with a dark overlay to keep UI text sharp and readable
- **Full Sound Effects Engine** — UI clicks, an alert siren loop, and boot audio
- **Click-to-Boot Overlay** — browsers block autoplay audio by default, so this splash screen unlocks audio while making the startup feel intentional and cinematic
- **Pilot Log (Notes App)** — write personal logs that save directly to `localStorage`, so your entries survive page refreshes
- **Classified Filesystem** — desktop folder shortcuts that open lore files:
  - `angel_rpt.txt`
  - `diary.txt`
  - `scroll_07.txt`
  - `magi.log`
- **Complete Window Controls** — ya can minimize to the taskbar, maximize/fullscreen, and close
- **Custom Context Menu** — now you can right-click anywhere on the desktop to launch the terminal, trigger alerts, reboot, or shut down
- **Disabled Text Selection** across the desktop so it feels like a native OS rather than a webpage

### cool stuff
- **Eva Launch Sequence** — typing `launch` into the terminal triggers a fullscreen Unit-01 deployment screen with live diagnostic logs and a staged percentage counter
- **MAGI Override Consensus** — clicking OK during an Angel alert initiates a real-time vote between Melchior, Balthasar, and Casper before clearing the threat

---

## Terminal commands to try(it ain't much but its an honest work)

- `help` — view available commands
- `status` — check system diagnostics
- `launch` — trigger the Unit-01 deployment sequence
- `alert` — initiate the Angel emergency protocol
- `sync` — display current pilot sync rate
- `whoami` — inspect current credentials
- `clear` — wipe the terminal screen
- `get in the robot` — Shinji, please

---

Things that almost made me quit(T-T)
- Getting drag events to work smoothly without hijacking clicks on the close, minimize, and maximize buttons
- Handling localStorage data serialization for the Notes app
- Pacing the launch sequence with staged timeouts so it felt like real industrial machinery instead of an instant screen swap
- Working around browser autoplay policies by gating audio behind an initial user interaction

---

## Credits

- Concept and aesthetic inspired by *Neon Genesis Evangelion* (Gainax / Studio Khara)
- Sound design sourced from Freesound and Pixabay

Made by **Anurag Tamang**
