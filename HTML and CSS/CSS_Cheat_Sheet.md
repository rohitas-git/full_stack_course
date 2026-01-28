# Cascading Style Sheets Cheatsheet

## Font Properties

### Font-Family
Changes the font family of certain words, sentences, paragraphs, etc.
```css
P { font-family: "New Century Schoolbook", Times, serif; }
```

### Font-Style
Changes text: normal, oblique, and italics.
```css
H1 { font-style: oblique; }
P { font-style: normal; }
```

### Font-Variant
Used to display font in normal or small-caps.
```css
SPAN { font-variant: small-caps; }
```

### Font-Weight
Used to specify the weight of the font.
```css
H1 { font-weight: 800; } 
/* or */
P { font-weight: normal; }
```

### Font-Size
Used to modify the size of the displayed font.
```css
H1 { font-size: large; } 
P { font-size: 12pt; }
LI { font-size: 90%; }
STRONG { font-size: larger; }
```

### Font
Used to combine all properties of fonts.
```css
P { font: italic bold 12pt/14pt Times, serif; }
```

## Color and Background Properties

### Color
Changes the color of text.
```css
H1 { color: blue; } 
H2 { color: #000080; }
```

### Background-Color
Sets the background color of an element.
```css
BODY { background-color: white; }
H1 { background-color: #000080; }
```

### Background-Image
Sets the background image of an element.
```css
BODY { background-image: url(/images/foo.gif); }
P { background-image: url(http://www.htmlhelp.com/bg.png); }
```

### Background-Repeat
Determines how a specified background image is repeated.
- `repeat-x`: repeats the image horizontally
- `repeat-y`: repeats the image vertically

```css
BODY { 
  background: white url(candybar.gif);
  background-repeat: repeat-x; 
}
```

### Background-Attachment
Determines if a specified background image will scroll with the content or be fixed with regard to the canvas.
```css
BODY { 
  background: white url(candybar.gif);
  background-attachment: fixed; 
}
```

### Background
Used to combine all properties of background.
```css
BODY { background: white url(http://www.htmlhelp.com/foo.gif); }
BLOCKQUOTE { background: #7fffd4; }
P { background: url(../backgrounds/pawn.png) #f0f8ff fixed; }
TABLE { background: red url(leaves.jpg) no-repeat bottom right; }
```

## Text Properties

### Word-Spacing
Defines an additional amount of space between words.
```css
P EM { word-spacing: 0.4em; }
P.note { word-spacing: -0.2em; }
```

### Letter-Spacing
Defines an additional amount of space between characters.
```css
H1 { letter-spacing: 0.1em; }
P.note { letter-spacing: -0.1em; }
```

### Text-Decoration
Allows text to be decorated through one of five properties: `underline`, `overline`, `line-through`, `blink`, `none`.
```css
A:link, A:visited, A:active { text-decoration: none; }
```

### Vertical-Align
Used to alter the vertical positioning of an inline element, relative to its parent element or to the element's line.
```css
IMG.middle { vertical-align: middle; }
IMG { vertical-align: 50%; }
.exponent { vertical-align: super; }
```

### Text-Transform
Allows for capitalizing the first letter of each word (`capitalize`), capitalizing all letters of a word (`uppercase`), using all small letters in each word (`lowercase`), and the initial value (`none`).
```css
H1 { text-transform: uppercase; }
H2 { text-transform: capitalize; }
```

### Text-Align
Used to justify text left, center, right, and justify.
```css
H1 { text-align: center; }
P.newspaper { text-align: justify; }
```

### Text-Indent
Used to specify the amount of indentation prior to the first line of text.
```css
P { text-indent: 5em; }
```

### Line-Height
Used to control the spacing between baselines of text.
```css
P { line-height: 200%; }
```

## Classification Properties

### List-Style-Type
Specifies the type of list-item marker, and is used if `list-style-image` is `none` or if image loading is turned off.
```css
LI.square { list-style-type: square; }
UL.plain { list-style-type: none; }
OL { list-style-type: upper-alpha; } /* A B C D E etc. */
OL OL { list-style-type: decimal; } /* 1 2 3 4 5 etc. */
OL OL OL { list-style-type: lower-roman; } /* i ii iii iv v etc. */
```

### List-Style-Image
Specifies the image that will be used as list-item marker when image loading is turned on, replacing the marker specified in the `list-style-type` property.
```css
UL.check { list-style-image: url(/LI-markers/checkmark.gif); }
UL LI.x { list-style-image: url(x.png); }
```

### List-Style-Position
Determines where the marker is placed in regard to the list item. If the value `inside` is used, the lines will wrap under the marker instead of being indented. `outside` is default.
```css
UL { list-style-position: inside; }
```

## Box Properties

### Margins
Sets the margin of an element by specifying a length or a percentage.

**Individual Properties:**
```css
BODY { margin-top: 5pt; }
P.narrow { margin-right: 50%; }
DT { margin-bottom: 3em; }
ADDRESS { margin-left: 50%; }
```

**Shorthand Property (`margin`):**
```css
BODY { margin: 5em; } /* all margins 5em */
P { margin: 2em 4em; } /* top & bottom 2em, left & right 4em */
DIV { margin: 1em 2em 3em 4em; } /* top 1em, right 2em, bottom 3em, left 4em */
```

### Padding
Describes the amount of space between the border and the content of the selector.

**Individual Properties:**
```css
P { padding-top: 20%; }
P { padding-right: 20px; }
P { padding-bottom: 5em; }
P { padding-left: 15pt; }
```

**Shorthand Property (`padding`):**
```css
BLOCKQUOTE { padding: 2em 4em 5em 4em; }
```

### Border Width
Used to specify the width of an element's border.

**Individual Properties:**
```css
P { border-top-width: 20%; }
P { border-right-width: 20%; }
P { border-bottom-width: 20%; }
P { border-left-width: 20%; }
```

**Shorthand Property (`border-width`):**
```css
P { border-width: 20%; }
P { border-width: 10px 5px 10px 5px; }
```

### Border Properties
- **Border-Color**: Used to set the color of an element's border.
  ```css
  P { border-color: #000000; }
  ```
- **Border-Style**: Sets style of a border - `none`, `dotted`, `dashed`, `solid`, `double`.
  ```css
  P { border-style: dotted; }
  ```

### Border Shorthand
Sets the width, style, and color of an element's border.

**Individual Sides:**
```css
P { border-top: 10px solid red; }
P { border-right: 10px solid red; }
P { border-bottom: 10px solid red; }
P { border-left: 10px solid red; }
```

**All Sides:**
```css
P { border: 10px solid red; }
```

### Width & Height
Each block-level or replaced element can be given a width or height, specified as a length, a percentage, or as `auto`.

```css
P { width: 15px; }
H1 { width: 35%; }
.foo { width: auto; }

P { height: 15px; }
H1 { height: 35%; }
.foo { height: auto; }
```

### Float & Clear
**Float:** Allows text to wrap around an element (`left`, `right`, `none`).
```css
P { float: left; }
H1 { float: right; }
.foo { float: none; }
```

**Clear:** Specifies whether an element allows floating elements to its sides (`left`, `right`, `none`).
```css
P { clear: left; }
H1 { clear: right; }
.foo { clear: none; }
```
