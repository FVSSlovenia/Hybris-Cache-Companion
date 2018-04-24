# Hybris Cache Companion

To add it to Firefox, Safari or Chrome, make sure you have a userscript extension such as Tampermonkey or Greasemonkey installed. If you do, open this link in that browser:

[Download](https://github.com/FVSSlovenia/Hybris-Cache-Companion/raw/master/Cache%20Companion_v0.1.user.js)

And click install - now you need to edit the @match url to the page you are managing, so locate the following line:

`// @match https://www.enterurlhere.com/*`

You can of course add more pages by duplicating the line.
```
// @match https://www.enterurlhere1.com/*
// @match https://www.enterurlhere2.com/*
// @match https://www.enterurlhere3.com/*
```

Mixed Content Detector Setup:
-Decide between the layer and the alert popup (Variables "MixedOn" & "MixedAltOn"); Layer is enabled by default
-Change the header ID if necessary (replace "body")
-If there are external links in the site's footer/header, replace the value of "mixednum" variable with the number of external links
-If you are using the script for more than one domain: use the "Domain template", replacing the domain name and number of external links (only if there are any external links)

Note: the external links will still be counted into the detector's sum, but the layer/alert won't appear

v0.15 Changelog:
-Highlight the mixed content & unsafe links improved
-Provides detection results in a alert window or a layer in top corner of the page
