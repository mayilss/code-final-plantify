using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Threading.Tasks;

namespace PlantifyAPI.Helpers
{
    public static class FileHelper
    {
        public static async Task<string> UploadImage(IFormFile file)
        {
            if (file == null)
                return null;
            try
            {
                string connectionString = @"DefaultEndpointsProtocol=https;AccountName=plantifystorageaccount;AccountKey=Qv3+R0e2H4/pcZCJiV0FAReiaWu4xoR1DnDmLJJXvBfHlPAdkfjgulzqVT2gKTO7kXDawSwZ/rdM+AStPxfXRg==;EndpointSuffix=core.windows.net";
                string containerName = "productimg";

                BlobContainerClient blobContainerClient = new BlobContainerClient(connectionString, containerName);
                BlobClient blobClient = blobContainerClient.GetBlobClient(file.FileName);

                var memoryStream = new MemoryStream();
                await file.CopyToAsync(memoryStream);
                memoryStream.Position = 0;
                await blobClient.UploadAsync(memoryStream);
                return blobClient.Uri.AbsoluteUri;
            }
            catch (System.Exception)
            {

                return "";
            }
        }
    }
}
