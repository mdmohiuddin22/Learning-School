

const PopularInstructors = () => {
  
  const instructors = [
    { name: 'Abu Sayed', students: 100, image: 'https://i.ibb.co/FD9Kqfw/young-bearded-man-glasses-blue-shirt-holding-book-smiling-confident-141793-37440.jpg' },
    { name: 'Ibne Khaldun', students: 90, image: 'https://i.ibb.co/4KvCmV7/businessman-black-suit-holding-his-tasklist-makes-thumb-up-114579-15902.jpg' },
    { name: 'Mohi Uddin', students: 80, image: 'https://i.ibb.co/R3zg0t8/arabian-saudi-businessman-155003-19336.jpg' },
    { name: 'Al Amin', students: 70, image: 'https://i.ibb.co/MRQ4Srp/pleased-young-businessman-wearing-glasses-holding-book-isolated-white-background-141793-63613.jpg' },
    { name: 'Mahbubur Rahman', students: 60, image: 'https://i.ibb.co/k9ZynY2/arab-man-cartoon-character-1308-50653.jpg' },
    { name: 'Ibne Botuta', students: 50, image: 'https://i.ibb.co/5jF79k5/teacher-brunette-instructor-with-computer-suit-whiteboard-classroom-confident-140725-163241.jpg' },
  ];


  const sortedInstructors = instructors.sort((a, b) => b.students - a.students);

  return (
    <div className="flex justify-center">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Popular Instructors</h2>
        <div className="grid grid-cols-3 gap-5">
          {sortedInstructors.slice(0, 6).map((instructor) => (
            <div key={instructor.name} className="bg-white rounded-lg shadow-md">
              <img src={instructor.image} alt={instructor.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{instructor.name}</h3>
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
