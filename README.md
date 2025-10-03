# Drapcode APIs Documentation

The `Drapcode APIs` class provides methods for interacting with the Drapcode API. This documentation outlines how to use the class and its available methods.

## Initialization

To use the `DrapcodeApis` class, you need to instantiate it with the required parameters:

```
npm install drapcode-developer-sdk
```

```typescript
import { DrapcodeApis } from "drapcode-developer-sdk";
```

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
const opts = {
  xApiKey: "",
  authorization: "",
  xTenantId: "",
  xSubTenantId: "",
  environment,
  version: 2,
};
const api = new DrapcodeApis(project_seo_name, opts);
```

**project_seo_name (Required):** The SEO name of your Drapcode project.

**xApiKey (Optional)**: Your Developer API key to authorize API calls, if enabled.

**authorization (Optional)**: Authorization token for authentication, if applicable.

**xTenantId (Optional)**: Tenant UUID for filtering Tenant based data, if applicable.

**xSubTenantId (Optional)**: Sub-Tenant UUID for filtering Sub-Tenant based data, if applicable.

**environment (Optional)**: The environment (PRODUCTION, PREVIEW, SANDBOX, UAT). Defaults to PRODUCTION if not provided.

**version (Optional, default version is 1)**: This is used to decide which version you want to use.

### Example:

If using version 1:

```typescript
V1: const drapcodeApi = new DrapcodeApis(
  "test-project-7138",
  xApiKey,
  authorization,
  environment
);
```

If using version 2:

```typescript
V2: const opts = {
  xApiKey: "xApiKey",
  authorization: "authorization",
  xTenantId: "xTenantId",
  xSubTenantId: "xSubTenantId",
  environment: "environment",
  version: 2,
};
const drapcodeApi = new DrapcodeApis("test-project-7138", opts);
```

# Methods

## getAllItems(collectionName: string)

Retrieves all items from a specified collection. The items will come under 'data' JSON path.

**collectionName:** The name of the collection to retrieve items from

### Example:

```
const items = await drapcodeApi.getAllItems("users");
```

### In version 2, we have info methods

```typescript
info();
```

This will return an object with all the information which you have provided.

Retrieves items from the "users" collection.

## Pagination and Search

### getAllItems(collectionName: string, reqQuery: SearchPaginate, query: Query[])

Retrieves all items from a specified collection. The items will come under 'data' JSON path.

**collectionName:** The name of the collection to retrieve items from. Required
**reqQuery:** Search and Pagination options. Optional, must pass null, in case of query

```
  sortField:"",
  sortOrder:"",
  searchTerm:"",
  isPagination: true|false
  page: 1, //Greater than 0 and isPagination must be true
  limit: 1 //Greater than 0 and isPagination must be true
```

**query**: Filter on basis of query. Optional

```
{
  field: field_name
  condition: QueryCondition
  value: value
}
```

```
//QueryCondition
EQUALS,
IS_NOT_NULL,
IS_NULL,
LIKE,
LESS_THAN_EQUALS_TO,
GREATER_THAN_EQUALS_TO,
LESS_THAN,
GREATER_THAN,
IN_LIST,
NOT_IN_LIST
```

### Example

```
// 1
const reqQuery = {isPaginate: true, page:1, limit: 100}
const items = await drapcodeApi.getAllItems("users", reqQuery);
// 2
const query = {field: "userName", condition: "EQUALS", value: "test@test.com"}
const queries = [query]
const items = await drapcodeApi.getAllItems("users", null, queries);
// 3
const items = await drapcodeApi.getAllItems("users", reqQuery, queries);

```

## createItem(collectionName: string, body: JSON)

Creates a new item in the specified collection.

**collectionName:** The name of the collection to create the item in.
**body:** The data of the item to be created.

### Example:

```
await drapcodeApi.createItem("users", {
    "name": "John Doe",
    "age": 25
});
```

Creates a new item in the "users" collection with the provided data.

## getItemsWithFilter(collectionName: string, filterUuid: string)

Retrieves items from a collection based on a filter UUID.

**collectionName:** The name of the collection to retrieve items from.
**filterUuid:** The UUID of the filter to apply.

### Example:

```
const filteredItems = await drapcodeApi.getItemsWithFilter("users", "15263");
```

Retrieves items from the "users" collection based on the filter UUID "15263".

## getItemsCountWithFilter(collectionName: string, filterUuid: string)

Retrieves the count of items from a collection based on a filter UUID.

**collectionName:** The name of the collection to retrieve items from.
**filterUuid:** The UUID of the filter to apply.

### Example:

```
const itemCount = await drapcodeApi.getItemsCountWithFilter("users", "15263");
```

Retrieves the count of items from the "users" collection based on the filter UUID "15263".

## getItemWithUuid(collectionName: string, itemUuid: string)

Retrieves a specific item from a collection based on its UUID.

**collectionName:** The name of the collection to retrieve the item from.
**itemUuid:** The UUID of the item to retrieve.

### Example:

```
const item = await drapcodeApi.getItemWithUuid("users", "3487-383");
```

Retrieves a specific item from the "users" collection with the UUID "3487-383".

## updateItemWithUuid(collectionName: string, itemUuid: string, body: any)

Updates a specific item in a collection based on its UUID.

**collectionName:** The name of the collection containing the item.
**itemUuid:** The UUID of the item to update.
**body:** The updated data for the item.

### Example:

```
await drapcodeApi.updateItemWithUuid("users", "3487-383", {"name": "Drapcode"});
```

Updates the item in the "users" collection with the UUID "3487-383" with the provided data.

## deleteItemWithUuid(collectionName: string, itemUuid: string)

Deletes a specific item from a collection based on its UUID.

**collectionName:** The name of the collection containing the item.
**itemUuid:** The UUID of the item to delete.

### Example:

```
await drapcodeApi.deleteItemWithUuid("users", "3487-383");
```

Deletes the item with the UUID "3487-383" from the "users" collection.

## sendEmail(templateId: string, sendTo: string)

Sends an email using the specified email template ID.

**templateId:** The ID of the email template to use.
**sendTo:** The email address to send the email to.

### Example:

```
await drapcodeApi.sendEmail("345-678", "support@drapcode.com");
```

Sends an email using the template ID "345-678" to the email address "support@drapcode.com".

For better experience, utilize async/await syntax when using these methods.

## Encryption Related

We have two methods related to encryption.

1. encryptData
2. decryptData

### Encrypt Data

```
await encryptData(content, publicKey)
```

**content:** Content/Text you want to encrypt.
**publicKey:** Public key, which will be used to encrypt data.

### Decrypt Data

```
await decryptData(content, publicKey)
```

**content:** Content/Text you want to decrypt.
**publicKey:** Public key, which was used to decrypt data.
