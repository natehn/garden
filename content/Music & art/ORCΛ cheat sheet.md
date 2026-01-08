---
publish: "true"
modified: 2024-06-09
comments: "true"
---


A cheat sheet for Hundred Rabbits' [ORCΛ](https://github.com/hundredrabbits/Orca). Learn how to use it [here](https://metasyn.srht.site/learn-orca/).

| Basics                                                   |
| -------------------------------------------------------- |
| `arrow keys` = move cursor (add `Shift` to increase selection, `Alt` to drag selection, and `Ctrl` to any of these to leap from sector to sector)                                                       |
| `#` = comment (`Ctrl+/` to comment/un-comment selection) |
| `*` = bang                                               |
| `Ctrl+I` = toggle keyboard insert mode                            |
| `Ctrl+K` = open command line ("enter" to run command)    |
| `Ctrl+L` = load .orca file(s)                            |
| `Ctrl+B` or `inject:`  + `filename` = inject file        |
| `play` or `stop`= play/stop ORCA (or press spacebar)     |
| `Ctrl+G` = show guide                                    |

| MIDI                                                                              |
| --------------------------------------------------------------------------------- |
| `:` = note (**channel** 0-15, **octave**, **note**, velocity, length) ... `%` for mono |
| `!` = cc (**channel**, **knob**, **value/36**) ... press enter on `!` to assign knob (cc64+)                       |
| `?` = pitch bend (**channel**, **value**)                                         |
| `pg:chan;msb;lsb;prog` = program change (**channel** 0-15, msb, lsb, **program** 0-127)                                                                                  |

| Bangs                              |
| ---------------------------------- |
| `D` = delay/clock                  |
| `U` = euclidean                    |
| `N, S, E, W` = cardinal directions |
| `F` = if equal                     |
| `Ctrl+P` = trigger manually                    |

| Control Voltage    |
| ------------------ |
| `C` = counter      |
| `I` = increment    |
| `R` = random       |
| `Z` = slew limiter |

| Math             |
| ---------------- |
| `A` = sum        |
| `B` = difference |
| `M` = product    |
| `L` = smallest   |

| Cables                     |
| -------------------------- |
| `J` = north to south       |
| `Y` = west to east         |
| `T` = single east to south - reads like a sequencer |
| `P` = multi east to south  |
| `H` = halt below           |

| Teleport                 |
| ------------------------ |
| `X` = teleport write       |
| `O` = teleport read        |
| `G` = multi-teleport write |
| `Q` = multi-teleport read  |

| Variables                     |
| ----------------------------- |
| `V` = read and write variable |
| `K` = read multiple variables |

| Tempo & Frames               |
| ---------------------------------------- |
| `bpm:___` = set tempo                    |
| `apm:___` = shift to new tempo           |
| `< and >` = decrease/increase tempo (`Ctrl+<>` to decrease/increase by 10)        |
| `Ctrl+F` = advance frame by frame        |
| `frame:___` = set frame value (`Ctrl+Shift+R` = set frame to `0`)           |
| `skip:___`  = add to frame value         |
| `rewind:___` = subtract from frame value |

| Other                                                              |
| ------------------------------------------------------------------ |
| `$` = bang-able command                                            |
| `Ctrl+J` or `find:___` = find string                               |
| `[ ] { }` = increase rows and column per sector                    |
| `Ctrl+minus / Ctrl+plus` = zoom in / out  (`Ctrl+0` to reset zoom) |
| `Ctrl+Shift+U/L` = uppercase/lowercase                               |
| `Esc` = Reset (not sure what this does)                                         |
