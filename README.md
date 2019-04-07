# gelbooru-js
Gelbooru JS is a simplified version of Gelbooru designed to run on a Desktop environment, to compile it, download node webkit and clone this repo, a detailed instruction manual is provided below:
1. download node webkit from https://nwjs.io/ (version 0.37.2 is recommended)
2. clone this repository in a directory of your choice
3. zip gelbooru-js and name the file "package.nw"
4. place the package.nw file on the same folder as the node webkit binary
5. run the node webkit binary

(Optional) Create a standalone .exe file (Windows)
1. Download and install Enigma Virtual Box from https://enigmaprotector.com/en/downloads.html
2. Run `copy /b nw.exe+package.nw app.exe` on a command line (cmd.exe, powershell won't cut it)
3. Open Enigma Virtual Box
4. Click browse next to the Enter input file name and select your app.exe
5. drag the following files to the files tab of Enigma Vritual Box: `ffmpeg.dll`, `node.dll`, `libEGL.dll`, `libGLESv2.dll`, `icudtl.dll`, `d3dcompiler.dll`, `nw_100_percent.pak`, `nw_200_percent.pak`, `resources.pak`, the `locales` folder and the `swiftshader` folder.
6. click file options and check the compress files box
7. click process

You should see a `app_boxed.exe` file next to your `app.exe` executable.
