

const PopularInstructors = () => {
  
  const instructors = [
    { name: 'Abu Sayed', students: 100, image: 'https://i.ibb.co/nR3VwcZ/Teacher-1.jpg' },
    { name: 'Ibne Khaldun', students: 90, image: 'https://i.ibb.co/4KvCmV7/businessman-black-suit-holding-his-tasklist-makes-thumb-up-114579-15902.jpg' },
    { name: 'Mohi Uddin', students: 80, image: 'https://i.ibb.co/R3zg0t8/arabian-saudi-businessman-155003-19336.jpg' },
    { name: 'Al Amin', students: 70, image: 'https://i.ibb.co/MRQ4Srp/pleased-young-businessman-wearing-glasses-holding-book-isolated-white-background-141793-63613.jpg' },
    { name: 'Mahbubur Rahman', students: 60, image: 'https://i.ibb.co/k9ZynY2/arab-man-cartoon-character-1308-50653.jpg' },
    { name: 'Ibne Botuta', students: 50, image: 'https://i.ibb.co/5jF79k5/teacher-brunette-instructor-with-computer-suit-whiteboard-classroom-confident-140725-163241.jpg' },
  ];


  const sortedInstructors = instructors.sort((a, b) => b.students - a.students);

  return (
      <div className=" ">
      <div className="container mx-auto p-4">
      {/* <div className="max-w-lg  justify-center"> */}
        <h2 className="text-4xl font-bold mb-8 text-center">Popular <span className="text-orange-400">Instructors</span></h2>
        <div className="flex justify-center ml-20 mb-6"> 
        <img src="https://i.ibb.co/1Xxrt3c/240-F-392804645-t-UQxo5-Eg-PXv-FGxn5-OQgu-X1-Bi-Yl-I6l-COV-removebg-preview-1.png" alt="" />
      </div>
      <p className="w-1/2 text-center ml-52 mb-10">Arabic is a Central Semitic language, closely related to Aramaic and Hebrew. Standard or Classical Arabic – Fusha – is the distinct form of the language used in media, newspapers, literature, and other formal settings</p>
        <div className="grid grid-cols-3 gap-4">
        {/* <div className="grid grid-cols-3 rounded-lg justify-between"> */}
          {sortedInstructors.slice(0, 6).map((instructor) => (
            <div key={instructor.name} className="bg-gray-200 p-4 text-center rounded-md">
              <img className="rounded-lg w-64" src={instructor.image} alt={instructor.name}  />
              {/* <img className="rounded-lg w-64" src={instructor.image} alt={instructor.name}  /> */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 ">{instructor.name}</h3>
                <p className="text-gray-500">{instructor.students} students</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructors;
