

const ArabicSection = () => {
 
  const arabicData = [
    { title: 'عنوان القسم 1', description: 'وصف القسم 1', image: 'https://i.ibb.co/H2NZFbS/composition-with-books-glasses-23-2147624916.jpg' },
    { title: 'عنوان القسم 2', description: 'وصف القسم 2', image: 'https://i.ibb.co/8B7XFT9/top-view-quran-arabic-pastries-23-2148214358.jpg' },
    { title: 'عنوان القسم 3', description: 'وصف القسم 3', image: 'https://i.ibb.co/bzfkKMy/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks-1340-2.jpg' },
    { title: 'عنوان القسم 4', description: 'وصف القسم 4', image: 'https://i.ibb.co/6BY1mYY/free-photo-ramadan-kareem-eid-mubarak-royal-elegant-lamp-with-mosque-holy-gate-with-fireworks-1340-2.jpg' },
    { title: 'عنوان القسم 5', description: 'وصف القسم 5', image: 'https://i.ibb.co/hRMV07b/man-enjoying-sudoku-game-paper-by-himself-23-2149072654.jpg' },
    { title: 'عنوان القسم 6', description: 'وصف القسم 6', image: 'https://i.ibb.co/hRMV07b/man-enjoying-sudoku-game-paper-by-himself-23-2149072654.jpg' },
  ];

  return (
    <div className="flex justify-center">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold mb-4">القسم العربي</h2>
        <div className="grid grid-cols-2 gap-4">
          {arabicData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArabicSection;
