import { useState, useEffect } from "react";
import { logOutUser } from "../../Redux/apiCall.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlobServiceClient } from "@azure/storage-blob";
import "./user_profile.css";
import placeholder from "../../assets/images/avatar.jfif";
import { TiDelete } from "react-icons/ti";

// trobuleshooting errors
// import { setLogLevel } from "@azure/logger";
// setLogLevel("info");
// console.log(setLogLevel)

const Profile = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);


  const account = "mentaleaseblobstore";
  const sasToken =
    "st=2024-02-12T13:30:08Z&se=2024-03-03T21:30:08Z&si=*&sv=2022-11-02&sr=c&sig=SPbZJ9qmTOutEa9FzfWZQdhlvUuXJOeTwqQACO4wzFc%3D";
  const containerName = "profileupload";

  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);
  const [userImageUrl, setUserImageUrl] = useState(null);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    logOutUser(dispatch);
    navigate("/auth/login");
    alert("Logout success😒");
  };

  const fetchImages = async () => {
    try {
      setLoading(true);
      const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);
      // const blobServiceClient = new BlobServiceClient("https://mentaleaseblobstore.blob.core.windows.net/profileupload");
      const containerClient = blobServiceClient.getContainerClient(containerName);
      const blobItems = containerClient.listBlobsFlat();

      let urls = [];
      for await (const blob of blobItems) {
        const imageUrl = `${blobServiceClient.url}${containerName}/${blob.name}`;
        urls.push({ name: blob.name, url: imageUrl });
        console.log(imageUrl);
        // alert("almost done🧡🧡🧡💙💙💙")
      }
      setImageUrls(urls);
      setLoading(false);

      const userImage = urls.find((url) => url.name === `${userData}.png`); //commented out the .user-id
      if (userImage) {
        setUserImageUrl(userImage.url);
      } else {
        setUserImageUrl(null);
      }
    } catch (error) {
      console.error("Error fetching images❗❗📵🔞🚱:", error);
      alert("Error fetching images");
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return alert("Please select an image");
    } else {
      try {
        setLoading(true);
        const blobName = `${userData}.png`; //commented out the .user-id
        const blobServiceClient = new BlobServiceClient(
          `https://${account}.blob.core.windows.net/?${sasToken}`
        );
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const blobClient = containerClient.getBlockBlobClient(blobName);
        await blobClient.uploadData(file, {
          blobHTTPHeaders: { blobContentType: file.type },
        });

        alert("File uploaded successfully");
      
        fetchImages();
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const deleteImage = async (blobName) => {
    const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net/?${sasToken}`);
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const blobClient = containerClient.getBlockBlobClient(blobName);
    try {
      await blobClient.delete();
      alert("Image deleted successfully.");
      setUserImageUrl(null);
      await fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="user_profile_page">
      <div className="profile_img">
        <div className="file_upload">
          {file ? (
            <img className="" src={URL.createObjectURL(file)} alt="no pic" />
          ) : userImageUrl ? (
            <img className="" src={userImageUrl} alt="profile pic" />
          ) : (
            <img className="displayImg" src={placeholder} alt="nopic" />
          )}
        </div>

        <div className="upload-form_inputs">
          <input
            type="file"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button type="submit" onClick={handleSubmit} className="update_btn">
          Upload pic
        </button>

        {userImageUrl && (
          <button
            onClick={(e) => {
              e.preventDefault();
              deleteImage(userData.user_id + ".png");
            }}
            className="delbtn"
          >
          <TiDelete />
          </button>
        )}
      </div>

      <div className="profile_info">
        <p>Email: user@gmail.com{userData?.email}</p>
        <p>First Name: Adamsoins </p>
        <p>Last Name: brians</p>
        <p>user-id: 232242524{userData?.user_id}</p>
        
        <button onClick={handleLogOut} className="logout_btn">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;


