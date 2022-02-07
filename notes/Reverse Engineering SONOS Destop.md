Source: https://www.deadf00d.com/post/how-i-hacked-sonos-and-youtube-the-same-day.html
1. Wireshark to find the network packets are pretty clear. 
2. SONOS is using **SSDP** for **device discovery**
3. **UPNP** for **device control** which are standard for these kind of device.
4. How to build a stream oriented MP4 to MP3
5. **AAC** is used to encode audio in MP4 video format
6.  Streaming container protocol name ADTS(Audio Data Transport Stream)
7.  What is meant by Web Radio?
8.  [MP4 Documentation](https://developer.apple.com/library/archive/documentation/QuickTime/QTFF/QTFFPreface/qtffPreface.html)
9.  The structure of MP4 is a streamed content, ftyp is mandatory as the first atom. And then each metadata atom (moov, moof), describe the next content atom.
10.  Parsing the ftyp atom parsing
11.  Mdat, trun atom parsing and these atoms contain AAC frame length.  
