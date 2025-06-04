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

3. Open up the newly generated `package.json` and confirm all dependencies are present

4. 
