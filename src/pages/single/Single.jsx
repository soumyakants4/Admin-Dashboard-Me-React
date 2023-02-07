import "./single.scss"
import Sidebar from "src/components/sidebar/Sidebar"
import Navbar  from "src/components/navbar/Navbar";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        Single
      </div>
    </div>
  )
}

export default Single