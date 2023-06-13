
const Banner = () => {
    return (
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/QrLVhVM/arabic-lesson-with-tutor-teacher-vector-570502-53.jpg" className="w-full h-auto" style={{ maxWidth: "100%", maxHeight: "400px" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          <div className="carousel-content absolute bottom-0 left-0 p-4">
            <h2 className="text-black text-3xl font-bold mb-4">Learn Arabic with Ease</h2>
            <p className="text-black text-lg">Discover the beauty of the Arabic language and immerse yourself in its rich culture.</p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/Yy5kvGL/mosque-online-service-concept-illustration-114360-16103.jpg" className="w-full h-auto" style={{ maxWidth: "100%", maxHeight: "400px" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
          <div className="carousel-content absolute bottom-0 left-0 p-4">
            <h2 className="text-black text-3xl font-bold mb-4">Master Arabic Grammar</h2>
            <p className="text-black text-lg">Learn the rules and structures of Arabic grammar to enhance your language skills.</p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/1dj3VHG/mosque-online-service-concept-illustration-114360-11484.jpg" className="w-full h-auto" style={{ maxWidth: "100%", maxHeight: "400px" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
          <div className="carousel-content absolute bottom-0 left-0 p-4">
            <h2 className="text-black text-3xl font-bold mb-4">Arabic Conversations</h2>
            <p className="text-black text-lg">Practice conversational Arabic with native speakers and gain fluency.</p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/PZYYXFy/arabic-businessman-traditional-wear-holding-open-book-pointing-with-finger-it-with-smile-face-standi.jpg" className="w-full h-auto" style={{ maxWidth: "100%", maxHeight: "400px" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          <div className="carousel-content absolute bottom-0 left-0 p-4">
            <h2 className="text-black text-3xl font-bold mb-4">Arabic Writing Skills</h2>
            <p className="text-black text-lg">Improve your Arabic writing skills through guided exercises and feedback.</p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/3vWZrZt/photo-1630962070948-bad32b566669-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg" className="w-full h-auto" style={{ maxWidth: "100%", maxHeight: "400px" }} />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
          <div className="carousel-content absolute bottom-0 left-0 p-4">
            <h2 className="text-black text-3xl font-bold mb-4">Arabic Writing Skills</h2>
            <p className="text-black text-lg">Improve your Arabic writing skills through guided exercises and feedback.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
  
  
  