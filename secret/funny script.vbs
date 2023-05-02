Set WshShell = CreateObject("WScript.Shell")

' Replace the path with the full path to your shortcut file
shortcutPath = "C:\Windows\System32\logoff.exe"

WshShell.Run shortcutPath
