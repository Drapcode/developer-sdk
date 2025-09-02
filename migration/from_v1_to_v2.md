| Method                  | Version 1      | Version 2                                            |
| ----------------------- | -------------- | ---------------------------------------------------- |
| getAllItems             | [item1, item2] | {code, result:[item1, item2],totalItems, totalPages} |
| createItem              | item           | {code, message, data: item, status, error}           |
| getItemsWithFilter      | no change      | no change                                            |
| getItemsCountWithFilter | no change      | no change                                            |
| getItemsByids           | [item1, item2] | {code, result:[item1, item2],totalItems, totalPages} |
| getItemWithUuid         | no change      | no change                                            |
