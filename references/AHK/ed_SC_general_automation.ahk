

; CTRL + ALT + s To open all programs
; %comspec% /k is to go to commandline and clear 
; TURN OF UAC Control
^!s::   run "C:\wamp\wampmanager.exe",,,WampManagerPID
		run "C:\Program Files\JetBrains\WebStorm 2017.2\bin\webstorm64.exe"
		run "C:\Program Files (x86)\Microsoft Office\root\Office16\OUTLOOK.EXE"
		run %comspec% /k cd C:\wamp\www\webapps\schedulingtool ,,, cmdLinePID
		run chrome.exe "http://localhost/webapps/schedulingtool/public/"
return


