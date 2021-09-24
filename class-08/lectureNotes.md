# Lecture Notes

## REGEX
- https://regex101.com/
- Regular Expression
- a sequence of characters that specifies a search pattern, commonly used to validate input, replace character patterns with other characters or refer to character patterns in a string.
- used with JS methods `match()`, `test()`, and `replace()`
- Mechanically, a regex is composed of a "Pattern To Match" between 2 delimiters (usually a `/`), followed by some optional instructions, known as "quantifiers".  
- Quantifiers are single letter instructions:
  - g = "Global Match"
  - i = "Case Insensitive"
  - `/foo/ig`
- Single Characters
  - `/T/`
  - `/t/i`
- "Range", which is a group of letters or numbers in brackets to see if there are things of the same basic type
  - `/[A-Z]/` 
  - `/[0-9]`
- parenthesis `()` to group things together
  - `/(ain)/`
- "helpers" that you can use to find more interesting parts of the string
  - `\s` = White space
  - `\b` = Word Boundary
  - `\w` = All word characters (A-Z,a-z,0-9)
  - `^` = Beginning of the string
  - `$` = End of the string
  - `.` = Any Character
  - `*` = Greedy (keep going!)


