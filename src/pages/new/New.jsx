import "./new.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="avatar"
            />
          </div>
          <div className="right"><form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon"/>
                </label>
                <input type="file" id="file" style={{display: "none"}}  />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="snow_99"  />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="Jon"  />
              </div>
              <div className="formInput">
                <label>Surname</label>
                <input type="text" placeholder="Snow"  />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="+91 XXXXXXXXXX"  />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Elton St. 20909"  />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="India"  />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="snow.jon99@gmail.com"  />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder=""  />
              </div>
              <button>Upload</button>
            </form>
            </div>
        </div>
        test
      </div>
    </div>
  );
};

export default New;
