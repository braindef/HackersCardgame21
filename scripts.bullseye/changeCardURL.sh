#!/bin/bash

for i in $(find $1 -name '*.svg'); do sed -i 's/https:\/\/0x8.ch\/HackersCardgame20/https:\/\/0x8.ch\/HackersCardgame21/g' "$i"; done
