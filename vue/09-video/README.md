### Preparation

- Use external earphones with a microphone, if available
- Write an initial script that covers your demo talking points in 4-min or less.
- Use plain, spoken English
- Scale your web content for clear legibility before screen capture

### Steps

1. Record audio
2. Record HD video timed to sync with audio (HD 1080p, 1920px wide,1080px high, H.264 Codec)
3. Combine the two, name demo.mp4 and save
4. Re-compress if necessary (to stay under the 100MB GitHub file size restriction)
5. Push to your repository (root directory)

_Note: we ask you to record audio first so that you can focus on reading the text of your script. Then, you will have the audio narration to listen to (through headphones) while you screen record video of yourself navigating through your app. Carefully follow the steps in your narration so the video and audio line up._

### Tutorial

#### Record audio

- Open QuickTime Player
- Select `New Audio Recording...` from `File` menu
- Press record button
- Present your script (take your time, pause after key points)
- Press stop button
- Trim (removing beginning or ending as needed) by selecting `Edit/Trim` from QuickTime menu
- Save voiceover file as `demoAudio.m4a` (QuickTime uses .m4a file format)

#### Record video

- Record video timed to sync with audio
- Open your project in the Chrome browser
- Toggle Device Toolbar (Control-Shift-M), or choose Select `View/Developer/Developer Tools` from the Chrome menu and Click on the Device Toolbar button
- Choose `Responsive` from the list of devices, and type 1920 (width) by 1080 (height)
- Select `50%` preview if you are using a Mac with ultra-high resolution display
- Open QuickTime
- Select `File/New Screen Recording`
- Press record
- Play Audio file recorded in Step 1
- Demo your project in sync with audio recording
- Press stop
- `Exit/Trim...` beginning and end as needed
- Save the video file as demoVideo.mov
- Combine the two (remaining steps refer to QuickTime, but Adobe Premiere is also an option)
- Drag the audio file demoAudio.m4a onto the demo.mov video and confirm pressing `Done`
- Save the combined file as demo.mov
- Compress as mp4

#### Adobe Media Encoder

- Install Adobe Media Encoder from the Creative Cloud TNS subscription
- Open Media Encoder
- Select `File/Add Source` and open demo.mov
- Click on `Preset` and choose
  `Format`: `H.264` preset.
  `Preset`: `Match Source - Adaptive High Bitrate`
- The goal is to keep the final file size under 50MB (see `Estimated File Size` on the right bottom of the `Export Settings` window. If necessary, you can choose medium bitrate, and manually reduce `Frame Rate` to 30fps or 24fps),
- Click the green `Start Queue` (Return) arrow on the right and wait until encoding is finished (can take minutes)
- Check your `demo.mp4` file by clicking on `Output File` path (blue). Repeat if necessary (if you need to add a short establishing shot at the beginning of the presentation, you can simply record a brief additional quicktime video clip and drag it to the beginning o of your demo.mov and then re-compress to .mp4. Don't edit .mp4 clips as recompressing a compress clip yields bad quality)
- Sumbit to shared Drive directory (YourName.mp4)

[VLC media player](https://www.videolan.org/vlc/) is an alternative to encode (stream convert)

Other tools that can help with editing and compressing files on PC:

- Screen and audio recording on PC: https://screenrec.com/download-screenrec/
- Combine both tracks via Adobe Premiere
