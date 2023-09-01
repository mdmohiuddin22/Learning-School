import { Link } from "react-router-dom";


const ArabicLearningPage = () => {
  // Sample data for classes
  const classes = [
    { id: 1, name: 'Bukhari Sharif', instructor_name: 'Md.Mohiuddin',price:'$250',Enrolled:'1', image: 'https://i.ibb.co/vsKDDFf/teacher-7735596-1280.png' },
    { id: 2, name: 'Muslim Sharif', instructor_name: 'Md.Mohiuddin',price:'$450',Enrolled:'1', image: 'https://i.ibb.co/bPvQkq1/religion-40578-1280.png' },
    { id: 3, name: 'Ibne Mazah Sharif', instructor_name: 'Md.Mohiuddin',price:'$550',Enrolled:'1',  image: 'https://i.ibb.co/0Q0ZQMY/arab-muslim-family-traditional-clothing-with-allahu-akbar-1308-48924.jpg' },
    { id: 4, name: 'Darse Fikh', instructor_name: 'Md.Mohiuddin',price:'$850',Enrolled:'1',  image: 'https://i.ibb.co/0Q0ZQMY/arab-muslim-family-traditional-clothing-with-allahu-akbar-1308-48924.jpg' },
    { id: 5, name: 'Darse Quran', instructor_name: 'Md.Mohiuddin',price:'$150',Enrolled:'1',  image: 'https://i.ibb.co/x8v47HK/realistic-ramadan-kareem-illustration-23-2148871084.jpg' },
    { id: 6,name: 'Darse Tafsir', instructor_name: 'Md.Mohiuddin',price:'$750',Enrolled:'1',  image: 'https://i.ibb.co/xJGKQMQ/ramadan-saudi-arabia-islamic-background-187299-36899.jpg' },
    { id: 7, name: 'Class G', students: 18, image: 'https://i.ibb.co/q9sT2ZR/name-allah-arab-lettering-23-2148679791.jpg' },
    { id: 8, name: 'Class H', students: 22, image: 'https://i.ibb.co/Nrs1nhf/arabic-alphabet-worksheet-vector-design-arabic-letters-children-s-learning-write-642050-195.jpg' },
    
  ];

  // Sort the classes based on the number of students
  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);

  // Get the top 6 classes
  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="">
     <div>
       <h1 className="text-4xl font-bold mb-8 text-center">Our Popular <span className="text-purple-900">Classes</span></h1>

      <div className="flex justify-center ml-20 mb-6"> 
        <img src="https://i.ibb.co/1Xxrt3c/240-F-392804645-t-UQxo5-Eg-PXv-FGxn5-OQgu-X1-Bi-Yl-I6l-COV-removebg-preview-1.png" alt="" />
      </div>
      <p className="w-1/2 text-center ml-52 mb-10">Arabic is a Central Semitic language, closely related to Aramaic and Hebrew. Standard or Classical Arabic – Fusha – is the distinct form of the language used in media, newspapers, literature, and other formal settings</p>
     </div>
      <div className="grid grid-cols-3 gap-4">
        {topClasses.map((classItem) => (
          <div key={classItem.id} className="bg-gray-200 p-4 text-center">
            <img src={classItem.image} alt={classItem.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-bold mb-2">{classItem.name}</h2>
            <p><span className="text-xl font-semibold "> Instructor Name:</span>    {classItem.instructor_name} </p>
            <p> <span className="text-xl font-semibold " >Price :</span>  {classItem.price}</p>
            <p> <span className="text-xl font-semibold ">Total Enrolled  : </span>{classItem.Enrolled}</p>
            <button className="btn btn-secondary mt-5 h-10 w-56"><Link to="/selectclass">SELECT CLASS</Link> </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArabicLearningPage;

