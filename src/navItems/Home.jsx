
import Banner from "./Banner/Banner";
import ArabicLearningPage from "./Classes";
import ClientReviews from "./ClientReviews";
import PopularInstructors from "./Instructors";



const Home = () => {
    return (
        <div>
            
        <Banner></Banner>
        <PopularInstructors></PopularInstructors>
        <ArabicLearningPage></ArabicLearningPage>
       <ClientReviews></ClientReviews>
               </div>
    );
};

export default Home;