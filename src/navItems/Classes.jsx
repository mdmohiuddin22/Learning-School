

const ArabicLearningPage = () => {
  // Sample data for classes
  const classes = [
    { id: 1, name: 'Class A', students: 30, image: 'https://i.ibb.co/vsKDDFf/teacher-7735596-1280.png' },
    { id: 2, name: 'Class B', students: 20, image: 'https://i.ibb.co/bPvQkq1/religion-40578-1280.png' },
    { id: 3, name: 'Class C', students: 15, image: 'https://i.ibb.co/0Q0ZQMY/arab-muslim-family-traditional-clothing-with-allahu-akbar-1308-48924.jpg' },
    { id: 4, name: 'Class D', students: 25, image: 'https://i.ibb.co/0Q0ZQMY/arab-muslim-family-traditional-clothing-with-allahu-akbar-1308-48924.jpg' },
    { id: 5, name: 'Class E', students: 40, image: 'https://i.ibb.co/x8v47HK/realistic-ramadan-kareem-illustration-23-2148871084.jpg' },
    { id: 6, name: 'Class F', students: 35, image: 'https://i.ibb.co/xJGKQMQ/ramadan-saudi-arabia-islamic-background-187299-36899.jpg' },
    { id: 7, name: 'Class G', students: 18, image: 'https://i.ibb.co/q9sT2ZR/name-allah-arab-lettering-23-2148679791.jpg' },
    { id: 8, name: 'Class H', students: 22, image: 'https://i.ibb.co/Nrs1nhf/arabic-alphabet-worksheet-vector-design-arabic-letters-children-s-learning-write-642050-195.jpg' },
    // Add more classes as needed
  ];

  // Sort the classes based on the number of students
  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);

  // Get the top 6 classes
  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">All Classes</h1>

      {/* Display relevant pictures */}
      <div className="grid grid-cols-3 gap-4">
        {topClasses.map((classItem) => (
          <div key={classItem.id} className="bg-gray-200 p-4">
            <img src={classItem.image} alt={classItem.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold mb-2">{classItem.name}</h2>
            <p>{classItem.students} students</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArabicLearningPage;
