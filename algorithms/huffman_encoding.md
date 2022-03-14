[Reference](https://www.quora.com/What-is-an-intuitive-explanation-of-Huffman-coding)

In normal English text, letters do not appear with the same frequencies. If you look, you'll find that e, t and a are the most common while a few like q and z are really rare:

![main-qimg-31a66378825be66d286199d1572790ca](https://user-images.githubusercontent.com/13390833/158269971-d17d23fb-3094-49b8-8089-fbee25d402ad.png)

This is why Scrabble tiles have different values!



However, by default, we represent each letter with exactly the same number of bits. Our representation of the ever-present "e" is just as space-efficient as our representation of "z". This ends up wasting a lot of space! For example, this is what a short sentence looks like in a hypothetical scheme using five bits per letter. (For simplicity, I'm ignoring capital letters, spaces, punctuation... etc.)

```javascript
"Here is an example sentence." 
 
h e r  e i s  a n  e x  a m   
7 4 17 4 8 18 0 13 4 23 0 12 
 
p  l  e s  e n  t  e n  c e 
15 11 4 18 4 13 19 4 13 2 4 
 
 
00111 00100 10001 00100 01000 10010 
00000 01101 00100 10111 00000 01100 
01111 01011 00100 10010 00100 01101 
10011 00100 01101 00010 00100 
```

Note how each "e"—and there are a lot of "e"s!—took up a full five bits. How could we make this more efficient? Well, we know we have lots of "e"s: why don't we arbitrarily start by assigning 0 to represent "e". Now this gives us a new problem: how do we know that the 0 in a longer number is not an "e" itself?

The trick is to reassign all the other letters to codes that start with a 1. The easiest way to do this? Take all the existing codes and just add a 1 in front. Now if we see a 0, we know it's an "e"; if we see a 1, we know that the next five bits specify a letter: the 0s there are not "e"s. With this, we get a new encoding:

```javascript
100111 0      110001 0      101000 110010  
100000 101101 0      110111 100000 101100  
101111 101011 0      110010 0      101101  
110011 0      101101 100010 0 
```

Even though every single letter except "e" got longer, the resulting message is actually shorter: 125 bits instead of 137.

Hey, if that worked for "e", maybe we can redo the whole process for "a" too! We can assign 10 to "a". Then we prefix every remaining letter with 11. This way, if we see 0, we know its an "e"; if we see 10, we know it's an "a"; if we see 11, we know the next five bits represent a single character.

This is the important property of our encoding: it's prefix free. That is, no letter has a set of bits that is the prefix of another one. This lets us read off the data unambiguously.

However, my approach has a problem: if we give 0 to "e", every single other symbol has to be one bit longer. Then, if we give 10 to "a", every remaining symbol has to be two bits longer. But "a", "t", "o" and "i" all actually happen with pretty similar frequencies! It feels wrong to "waste" a whole bit on efficiently encoding a single one of those letters. This approach wastes three bits just to encode "e", "t" and "a".

The actual Huffman encoding algorithm takes relative frequencies into account. So it might not reserve one- or two-bit encodings for any letters; instead, "e", "t" and "a" might all have three bits, which only costs one extra bit for everything else. We could have:

```javascript
e = 000 
t = 001 
a = 010 
```

With everything else taking a single extra 1 prefix to not overlap with these three codes.

So that's the main idea behind Huffman Coding. The actual trick for figuring out how to distribute the possible prefix free codes to each letter is interesting, but not crucial to understanding how Huffman coding works. You can just read about it on Wikipedia: Huffman coding.

One thing to note is that having the table of frequencies which maps symbols to their variable length codes is necessary to actually read the compressed data. For something like English text, we can guess the frequencies well enough ahead of time that we could just standardize on a single table and use that for everything. Other times, a tree is generated and included as part of the message: for example, part of the JPEG format specifies the Huffman coding used the rest of the file.
