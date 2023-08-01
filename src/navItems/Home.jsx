
import Banner from "./Banner/Banner";
import ArabicLearningPage from "./Classes";
import ClientReviews from "./ClientReviews";
import PopularInstructors from "./Instructors";
import Items from "./Items";



const Home = () => {
    return (
        <div>
            
        <Banner></Banner>
        <Items></Items>
        <ArabicLearningPage></ArabicLearningPage>
        <PopularInstructors></PopularInstructors>
       <ClientReviews></ClientReviews>
      
               </div>
    );
};

export default Home;