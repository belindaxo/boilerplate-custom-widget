## SAC Highchart Custom Widget Boilerplate 
### To get started:
#### Creating a repository from this template:
1. From the main page of the repository:  <kbd>Use this template</kbd> $\rightarrow$ <kbd>Create a new repository</kbd>

2. Name the repository: `<chart type>-custom-widget` (ex. `sankey-custom-widget`)

3. Click <kbd>Create repository from template</kbd> 

> For more information: [Creating a repository from a template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template "")

---

#### Once you have cloned the repository and opened it up in your IDE:
1. Ensure you have `Node.js` and `npm` installed on your device - run the following commands in the terminal:

```
# Verify the Node.js version:
node-v 
# Verify npm version:
npm -v
```

2. In your project directory, run the following commands:
```
# 1. initialize npm
npm init -y

# 2. install development dependencies
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env

# 3. install Highcharts dependency
npm install highcharts
```

3. Open up the newly generated `package.json`, confirm all dependencies are listed, and if present, remove the `"type": "commonjs"` line  

---

### At this stage, you are ready to start developing your custom widget!

- Remember to replace all instances of the word `boilerplate` with the name of the chart you are creating 
    - `Boilerplate.json` - rename the file and replace 'boilerplate' everywhere it is referenced in the file with the name of the chart you are creating
    - `index.js` - rename the class and ensure that in the last line of code (*see code block below*) the string matches the `main` web component's `tag` value (defined in the JSON file) and that the new class name is being used 
    ```
    customElements.define('com-sap-sample-boilerplate', Boilerplate);
    ```
    - `aps_index.js` - same as `index.js` but class name will have `Aps` at the end and in the last line of code (*see code block below*), the string should match the `styling` web component's `tag` value (which should identical to the `main` component's `tag` but with "`-aps`" attached to the end of it
    ```
    customElements.define('com-sap-sample-boilerplate-aps', BoilerplateAps);
    ```

- The template JSON file (`Boilerplate.json`) is not set up for `aps_index.js` to be included in the custom widget, and thus in the `webpack.config.js` file, you will notice two different versions, with one being commented out. The configuration that is commented out is for when your styling panel configuration has been implemented and you would like to include it in the webpack bundle. If you are using `aps_index.js` and have uncommented the styling panel webpack configuration and deleted the other one, you need to add the following snippet to your JSON file under the `main` web component definition: 
```
        {
            "kind": "styling",
            "tag": "com-sap-sample-boilerplate-aps",
            "url": "https://belindaxo.github.io/boilerplate-custom-widget/dist/bundle.js",
            "integrity": "",
            "ignoreIntegrity": true
        }
```


---

### When you are ready to push your changes, run the following terminal command:
```
npx webpack --mode production
```
> This should be done every time any changes are made to the files listed as entry points in `webpack.config.js` (usually just your `js` files)

---

### Hosting with GitHub Pages 
- In order for SAC to access your resources files, set up your GitHub Pages site for the repository

- Ensure that your GitHub Pages site is being built from the `main` branch and the root folder

- Once this is done, replace the `url` property in the JSON file for each web component with your GitHub Pages site link, adding `/dist/bundle.js` to the end of the url to link directly to the resource file SAC will be using

---

### Helpful Resources

#### SAC
[SAP Analytics Cloud Custom Widget Developer Guide](https://help.sap.com/docs/SAP_ANALYTICS_CLOUD/0ac8c6754ff84605a4372468d002f2bf/75311f67527c41638ceb89af9cd8af3e.html)

#### Highcharts
[Highcharts JS API Reference](https://api.highcharts.com/highcharts/)

[Highcharts Documentation](https://www.highcharts.com/docs/index)

#### My Custom Widgets (lots of reusable code/example implementations) 

[3D Funnel Custom Widget](https://github.com/belindaxo/3d-funnel-custom-widget)

[Solid Gauge Custom Widget](https://github.com/belindaxo/solid-gauge-custom-widget)

[Sankey Custom Widget](https://github.com/belindaxo/sankey-custom-widget)

[Bubble Chart Custom Widget (with radial gradient fill)](https://github.com/belindaxo/bubble-custom-widget)

(More will be added as development progresses)
