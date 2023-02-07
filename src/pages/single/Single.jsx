import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img
                src="https://www.freecodecamp.org/news/content/images/2021/03/Quincy-Larson-photo.jpg"
                alt=""
                className="itemImg"
              /> 
              <div className="details">
                <h1 className="itemTitle">Yashraj</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">rey.yash@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+91 9999999999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Mantri Serenity, Bangalore</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">India</span>
                </div>
                </div>           
              </div>
          </div>
          <div className="right">
            <Chart/>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Single