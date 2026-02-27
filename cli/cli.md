
## Common Commands
1. pwd
2. ls
3. cd 
4. mv & cp
5. rm & rmdir
6. touch & mkdir
7. echo 
8. '>' redirection operator
9. '>>' append redirection operator
10. * wildcard character
11. | pipe character
12. find
13. grep
14. sed
15. wc
16. sort 
17. uniq

## Options
-r : short options
--recursive: long options
1. -l: long format
2. -r: recursive
3. -f: force
4. -n: show line number
5. -I or i: case insensitive
6. -g: global
7. -i: edit files in-place 

## Find
find -type f -name "forest*"
find -type d -iname "forest*"

## grep - Search in a file(s)
g - global search
re - regular expression
p - print matching lines

grep [pattern] [file(s)]
grep -nr [pattern] [directory]

grep gives you all instances of the pattern you're looking for

## sed - Replace content in files
s - stream 
ed - editor

sed 's/pattern/replacement/' [filename]

### Default behaviour of sed:
- Only the first instance of the search pattern in each line is replaced
- The file itself is not modified. Only the printed output contains the replacement

### Workarounds
sed 's/pattern/replacement/[option(s)]' [filename]

Apply to all instances: sed 's/pattern/replacement/gI' [filename]
    Global (i.e all instances): -g
    Case insensitive: -I
    The order doesn't matter: -gI or -Ig

Redirect output: sed 's/pattern/replacement/' [filename] > [filename]
Modify file: 
    bash: sed -i 's/pattern/replacement/' [filename]
    zsh: sed -i '' 's/pattern/replacement/' [filename]

## wc
wc: word count

wc [filename]
    result:        5      17     112 team_members.txt
    result:    (lines) (words) (bytes)

Count lines: wc -l
Count words: wc -w
Count bytes: wc -c
Count characters: wc -m

Note: 
Bytes and characters often have the same value 
in plain english text because 1 UTF-8 char = 1 byte

## sort

sort [filename]
    result: printed file is sorted a-z line by line
    note: file is not modified

sort [options] [filename]
    * -r
    * -n: to sort numbers

## uniq
remove duplicates: uniq [filename]
    - any adjacent duplicates are removed
    - note: file is not modified

to remove all duplicates:
    - sort first and then remove duplicates
    - sort [filename] | uniq

### Pipe character: |
syntax: [cmd1] | [cmd2]
- cmd1's output is cmd2's input

