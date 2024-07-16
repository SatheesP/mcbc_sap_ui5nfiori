# UI5 Tooling - PC configuration

* **Node.JS** cross-platform JavaScript runtime environment needs to be configured. Download portable LTS version (i.e., ZIP version). Download page, select [`Prebuilt Binaries`](https://nodejs.org/en/download/prebuilt-binaries) relevant to your OS version.

* Unzip contents inside `node-v20.13.1-win-x64/` ZIP file folder into PC folder `C:\DevTools\Node.js`

* Windows Start search for `Edit environment variables for your account` then select it and configure `**Path** > Edit`, Popup select New and configure `C:\DevTools\Node.js`.
<img src="img/Node.js path setting OS Env Var.png" width='60%' />

* To verify **Node.JS** installation, **CMD/Terminal** window > `node -v` or `npm -v`

* To install **UI5 Tooling** locally on your PC, **CMD/Terminal** window > `npm i -g @ui5/cli`

* To verify **UI5 Tooling**, **CMD/Terminal** window > `ui5 -v`
