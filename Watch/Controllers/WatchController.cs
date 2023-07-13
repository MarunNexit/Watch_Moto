using Microsoft.AspNetCore.Mvc;
using MyApp.Data;
using System.Collections.Generic;
using Watch.Models;

namespace Watch.Controllers
{
    public class WatchController : Controller
    {
        private readonly DataAccess _dataAccess;

        public WatchController()
        {
            string connectionString = "mongodb://localhost:27017"; // Замініть на свій рядок підключення
            string databaseName = "your_database_name"; // Замініть на назву вашої бази даних
            string collectionName = "your_collection_name"; // Замініть на назву вашої колекції

            _dataAccess = new DataAccess(connectionString, databaseName, collectionName);
        }

        public IActionResult Watch()
        {
            // Отримання даних з бази даних
            var watchs = _dataAccess.GetAllDocuments();
            // Припустимо, у вас є метод GetAllProducts(), який повертає список товарів з бази даних

            // Створення екземплярів моделей представлення та передача даних
            var watchViewModels = new List<WatchModel>();
            foreach (var watch in watchs)
            {
                string name = watch.GetValue("Name").ToString();
                string description = watch.GetValue("Description").ToString();
                string imagePath = watch.GetValue("ImagePath").ToString();

                watchViewModels.Add(new WatchModel
                {
                    Name = name,
                    Description = description,
                    ImagePath = imagePath,
                    // Заповніть інші властивості моделі представлення, якщо потрібно
                });
            }

            return View(watchViewModels);
        }
    }
}
