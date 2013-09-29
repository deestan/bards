# ar-drone-sequence

Simple programming language for Parrot AR drones.  Intended to be
written by young children learning about programming for the first
time.

# Usage

Create a program file in a text editor, and save it.  For example as `dance.program`:

```
turn left
go up
dance
turn right
wave
```

Then turn on the Parrot AR drone, connect the PC to the drone's wifi, and execute
the program with the `helicopter.js` command:

```
./bards.js dance.program
```

This will cause the drone to take off, turn left, go up, dance, turn right, wave a bit,
then land.

# Programs

Each program is a plain text file containing a sequence of commands,
one command per line.

The drone will *always* take off before executing the first line of the program,
and should also *always* land after the last line has been executed, or whenever
an error has occured (e.g. the program crashes due to syntax error).

Code comments are allowed, where the `#` character means "ignore this
and the rest of the current line".

# Valid commands

Normal commands:

* go up
* go down
* go left
* go right
* go forward
* go backward
* turn left
* turn right
* dance
* wave
* flip
* backflip
* roll right
* roll left

Full speed variants:

All `go` and `turn` commands are normally executed at 1/3 speed.  To make the
drone execute them at full speed, type them in all upper case:

* GO UP
* GO DOWN
* GO LEFT
* GO RIGHT
* GO FORWARD
* GO BACKWARD
* TURN LEFT
* TURN RIGHT

# Intentions

This project intends to introduce the following concepts:

## Programs

Programs are introduced as simple text files containing instructions
for the drone, which the drone should follow to the letter.

## Order matters

Each program is always executed from top to bottom.  Every single
command is executed after the command above it.

## Details matter

A lower-case command is very different from an upper-case command.
Mixed-case commands or extraneous symbols are not accepted.  Errors
are not ignored, but cause the program to crash (program crashes cause
the drone to land safely, though).

## English syntax

This was created in Norway, with Norwegian children as the first
users.  We intentionally did *not* to create a Norwegian instruction
set.  All "real" programming languages have English syntax, and this
will remain a reality for a long time.  To make this easier, when a
program crashes because of an unrecognized command, it will say which
valid command is most similar to the unrecognized one.

# Untentions

We have intentionally left out the follwing concepts to optimize the
project's suitiability as a first introduction to programming:

* Variables
* Parameters
* Branching
* Looping
* Events

The reason for excluding these concepts is twofold.  Firstly, even
though the current syntax could still be valid when the language is
more powerful, we wanted to minimize the possibility that when you
mistype a command, you accidentally write another correct but
unintended command.  E.g. typing `go=forward` instead of `go forward`
could be interpreted as setting the variable `go`, and the program
would run without errors while still doing the wrong thing.

Secondly, a language simple enough to be fully mastered by a
6-year-old means that it is possible for someone to fully master a
programming language at age 6.  And that is pretty awesome.
