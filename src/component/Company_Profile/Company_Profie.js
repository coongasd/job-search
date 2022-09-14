import Header_CvCreate from "../CV_Create/Header_CvCreate";
import Search_Header from "../CV_Create/Search_Header";

function Company_Profile() {
    return(
        <div>
            <Header_CvCreate></Header_CvCreate>,
            <Search_Header></Search_Header>,
            <div className="Company_Wrapper">

            </div>
        </div>
        
    );
}

export default Company_Profile;