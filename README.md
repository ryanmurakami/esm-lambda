[@std/esm](https://github.com/standard-things/esm)

# Install

```js
npm install
```

# Test

Test locally in Node.js
```js
npm test
```

Test locally with Serverless offline
```js
npm run dev
```

Test on AWS Lambda
```js
npm run deploy
```

Test on Azure Functions

*** Change the `service` value in `/azure/serverless.yml` to a unique value

Also, this still isn't working for some reason

```js
cd azure
npm install
npm run deploy-azure
```
