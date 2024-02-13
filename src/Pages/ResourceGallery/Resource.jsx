import { useEffect, useState } from 'react'
import './resource.css'
import { AiFillDelete } from 'react-icons/ai';
import { FaFileUpload } from 'react-icons/fa';
import Placeholder from '../../assets/images/placeholder.jpeg'
import Loading from '../../Components/Loading/Loading';
import { BlobServiceClient } from '@azure/storage-blob';

const Resource = () => {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  //Storage account credentials
  const account = import.meta.env.VITE_STORAGE_ACCOUNT
  const sasToken = import.meta.env.VITE_STORAGE_SAS
  const containerName = import.meta.env.VITE_STORAGE_CONTAINER
  const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  //fetch all images
  const fetchImages = async () => {
    if (!account || !sasToken || !containerName) {
      alert('Please make sure you have set the Azure Storage credentials in the .env file');
      return;
    }
    try {
      setLoading(true);
      const blobItems = containerClient.listBlobsFlat();
      const urls = [];
      for await (const blob of blobItems) {
        const tempBlockBlobClient = containerClient.getBlockBlobClient(blob.name);
        urls.push({ name: blob.name, url: tempBlockBlobClient.url });
      }
      setImageUrls(urls);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //save an Image
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select an image to upload');
      return;
    }
    if (!account || !sasToken || !containerName) {
      alert('Please make sure you have set the Azure Storage credentials in the .env file');
      return;
    }
    try {
      setLoading(true);
      const blobName = `${new Date().getTime()}-${file.name}`;
      const blobClient = containerClient.getBlockBlobClient(blobName);
      await blobClient.uploadData(file, { blobHTTPHeaders: { blobContentType: file.type } });
      await fetchImages();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // delete an Image
  const handleDelete = async (blobName) => {
    if (!account || !sasToken || !containerName) {
      alert('Please make sure you have set the Azure Storage credentials in the .env file'); return;
    }
    try {
      setLoading(true);
      const blobClient = containerClient.getBlockBlobClient(blobName);
      await blobClient.delete();
      fetchImages();
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  // fetch all images when the page loads
  useEffect(() => {
    fetchImages();
  }, [])

  // Helper function to get the image name without extension
  const getImageNameWithoutExtension = (filename) => {
    const dotIndex = filename.lastIndexOf('.');
    return dotIndex !== -1 ? filename.slice(0, dotIndex) : filename;
  };
  return (
    <div className="container">
      {loading && <Loading />}
      <h2>📸 Image Gallery Azure Blob Storage 📸</h2><hr />
      <div className="row-form">
        <form className='upload-form'>
          <div className='upload-form_display'>
            {
              file ? <img className="displayImg-resource" src={URL.createObjectURL(file)} alt="no pic" />
                : <img className="displayImg-resource" src={Placeholder} alt="nopic" />
            }
          </div>
          <div className='upload-form_inputs'>
            <label htmlFor="fileInput"><FaFileUpload /></label>
            <input type="file" style={{ display: "none" }} id="fileInput" onChange={(e) => setFile(e.target.files[0])} />
            <button type="submit" onClick={handleSubmit} >Upload</button>
          </div>
        </form>
      </div>

      <div className="row-display">
        {imageUrls.length === 0 ? <h3>😐 No Images Found😐 </h3> : (
          imageUrls && imageUrls.map((blobItem, index) => {
            return (
              <div key={index} className="card-resource">
                <img src={blobItem.url} alt="no pic" />
                <h3 style={{ width: "90%" }}>{getImageNameWithoutExtension(blobItem.name)}</h3>
                <button className="del" onClick={() => handleDelete(blobItem.name)} > <AiFillDelete /> </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Resource