import HomeBanner from "../CustomComponents/HomeBanner";
import SearchResult from "../CustomComponents/SearchResult";
import VerticalBar from "../CustomComponents/VerticalBar";

const Home = () => {

return (
    <div className="h-full">
        <HomeBanner/>
        <VerticalBar/>
        <SearchResult/>
    </div>
)

}

export default Home;