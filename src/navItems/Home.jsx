import Banner from "./Banner/Banner";
import ArabicLearningPage from "./Classes";
import PopularInstructors from "./Instructors";



const Home = () => {
    return (
        <div>
            
        <Banner></Banner>
        <PopularInstructors></PopularInstructors>
        <ArabicLearningPage></ArabicLearningPage>
        </div>
    );
};

export default Home;