#JIRA Filter Plugin

Remove some useless stuff from the JIRA activity stream.

Currently Removing:

  * Work log activity items

##Download
Prebuild packages for Chrome, Safari and Firefox can be found in the [dist](dist)
directory.

##Package the plugin

###Safari
A free Safari developer certificate is needed.

  * Open the extension build from the Safari Developer menu.
  * Add an existing extension: select the JiraFilter.safariextension directory.
  * Create package
  
###Chrome
  * See https://developer.chrome.com/extensions/getstarted#unpacked

###Firefox
  * Built with https://arantius.com/misc/greasemonkey/script-compiler.php
  * The UUID is 8b899947-da08-4878-aee2-b952ce731db0

##Changelog
###1.1
  * Remove work log items where the remaining time was also updated.
  * Do not try to load more if there are no more entries.
  
##License
MIT License. See LICENSE.TXT.