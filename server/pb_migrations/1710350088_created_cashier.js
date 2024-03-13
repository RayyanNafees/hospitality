/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gw1pxs3k69xrdkw",
    "created": "2024-03-13 17:14:48.360Z",
    "updated": "2024-03-13 17:14:48.360Z",
    "name": "cashier",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gvjagebg",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gw1pxs3k69xrdkw");

  return dao.deleteCollection(collection);
})
