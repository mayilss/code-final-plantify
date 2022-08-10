using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;

namespace AutoWebApi.Helpers
{
    public class FileHelper
    {
        public static async Task<string> UploadImage(IFormFile file)
        {
            string connectionString = @"DefaultEndpointsProtocol=https;AccountName=carimagestorage;AccountKey=MnnevYi4a/z2Nw8p9vrtVNVcO42cG9niJhJ0Qk0IxyUzYrquqtfUF2qBIFpTc277rpCW4wPrlh2D+AStq7Td4A==;EndpointSuffix=core.windows.net";
            string containerName = "autoimage";

            BlobContainerClient blobContainerClient = new BlobContainerClient(connectionString, containerName);
            BlobClient blobClient = blobContainerClient.GetBlobClient(file.FileName);

            var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            memoryStream.Position = 0;
            await blobClient.UploadAsync(memoryStream);
            return blobClient.Uri.AbsoluteUri;
        }
    }
}
