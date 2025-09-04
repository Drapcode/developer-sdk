## Create Drapcode API object

If using version 1:

```typescript
const api = new DrapcodeApis(
  project_seo_name,
  xApiKey,
  authorization,
  environment
);
```

If using version 2:

```typescript
const opts = { xApiKey: "", authorization: "", environment, version: 2 };
const api = new DrapcodeApis(project_seo_name, opts);
```

In version 2 we have added some utility methods, getter and setter

```typescript
setProjectSeoName(project_seo_name); //change/set project seo name
getProjectSeoName(); //return current project seo name
setXApiKey(xApiKey); //change/set developer api key
getXApiKey(); //return current developer api key
setAuthorization(authorization); //change/set user authorization token
getAuthorization(); //return current user authorization token
setEnvironment(env); //change/set environment
getEnvironment(); //return current environment
setVersion(version); //change/set version
getVersion(); //return current version
info(); //return current all values used to instantiate drapcode api instance
```

We have new key version, to add support of both versions 1 & 2. According to this method will return data.

Now we have more options, so instead of passing it all, we have created _DrapcodeApiOptions_

### Changes in Developer SDK methods return

| Method                  | Version 1      | Version 2                                            |
| ----------------------- | -------------- | ---------------------------------------------------- |
| getAllItems             | [item1, item2] | {code, result:[item1, item2],totalItems, totalPages} |
| createItem              | item           | {code, message, data: item, status, error}           |
| getItemsWithFilter      | no change      | no change                                            |
| getItemsCountWithFilter | no change      | no change                                            |
| getItemsByids           | [item1, item2] | {code, result:[item1, item2],totalItems, totalPages} |
| getItemWithUuid         | no change      | no change                                            |

### Changes in Developer API return

| Method                       | Version 1      | Version 2                                            |
| ---------------------------- | -------------- | ---------------------------------------------------- |
| get all items                | [item1, item2] | {code, result:[item1, item2],totalItems, totalPages} |
| create item                  | item           | {code, message, data: item, status, error}           |
| get items using filter       | no change      | no change                                            |
| get items count using filter | no change      | no change                                            |
| get all items by ids         | [item1, item2] | {code, result:[item1, item2],totalItems, totalPages} |
| get item detail via uuid     | no change      | no change                                            |
