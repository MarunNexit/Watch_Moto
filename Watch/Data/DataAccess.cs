using MongoDB.Driver;
using MongoDB.Bson;
using System.Collections.Generic;

namespace MyApp.Data
{
    public class DataAccess
    {
        private IMongoDatabase _database;
        private IMongoCollection<BsonDocument> _collection;

        public DataAccess(string connectionString, string databaseName, string collectionName)
        {
            var client = new MongoClient(connectionString);
            _database = client.GetDatabase(databaseName);
            _collection = _database.GetCollection<BsonDocument>(collectionName);
        }

        public List<BsonDocument> GetAllDocuments()
        {
            return _collection.Find(new BsonDocument()).ToList();
        }

        public void InsertDocument(BsonDocument document)
        {
            _collection.InsertOne(document);
        }

        public void UpdateDocument(FilterDefinition<BsonDocument> filter, UpdateDefinition<BsonDocument> update)
        {
            _collection.UpdateOne(filter, update);
        }

        public void DeleteDocument(FilterDefinition<BsonDocument> filter)
        {
            _collection.DeleteOne(filter);
        }
    }
}