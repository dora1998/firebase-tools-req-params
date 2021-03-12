## firebase-tools req.params example

```
yarn install
yarn serve --project YOUR_PROJECT_ID
```

### Run functions from hosting

1. Access to `http://localhost:5000/foobar`
2. You'll see the response below.

```json
{
  "0": "/foobar"
}
```

3. However, the response changes when you run this function in production.

```json
{
  "0": "foobar"
}
```
