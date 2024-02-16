# Drapcode APIs Documentation

The `Drapcode APIs` class provides methods for interacting with the Drapcode API. This documentation outlines how to use the class and its available methods.

## Initialization

To use the `DrapcodeApis` class, you need to instantiate it with the required parameters:

```
npm install drapcode-developer-sdk
```

```typescript
import { DrapcodeApis } from 'drapcode-developer-sdk';

const api = new DrapcodeApis(project_seo_name, xApiKey, authorization, environment);
```

**project_seo_name (Required):** The SEO name of your Drapcode project.

**xApiKey (Optional)**: Your Developer API key to authorize API calls, if enabled.

**authorization (Optional)**: Authorization token for authentication, if applicable.

**environment (Optional)**: The environment (PRODUCTION, PREVIEW, BETA, ALPHA). Defaults to PRODUCTION if not provided.
### Example:  
```
const drapcodeApi = new DrapcodeApis("test-project-7138");
```
# Methods

## getAllItems(collectionName: string)
Retrieves all items from a specified collection.

**collectionName:** The name of the collection to retrieve items from 
### Example: 
```
const items = await drapcodeApi.getAllItems("users");
```

Retrieves items from the "users" collection.

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
