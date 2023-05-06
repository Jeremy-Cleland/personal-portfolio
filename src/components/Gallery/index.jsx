const Gallery = () => {
  return (
    <section className="dark:bg-gray-800 py-6">
      <div className="container mx-auto flex flex-col justify-center p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <img
            className="aspect-square w-full object-cover dark:bg-swell-950"
            src="https://source.unsplash.com/random/300x300/?1"
            alt="shit"
          />
          <img
            className="aspect-square w-full object-cover dark:bg-swell-950"
            src="https://source.unsplash.com/random/300x300/?2"
            alt="shit"
          />
          <img
            className="aspect-square w-full object-cover dark:bg-swell-950"
            src="https://source.unsplash.com/random/300x300/?3"
            alt="shit"
          />
          <img
            className="aspect-square w-full object-cover dark:bg-swell-950"
            src="https://source.unsplash.com/random/300x300/?4"
            alt="shit"
          />
        </div>
      </div>
    </section>
  );
};
export default Gallery;
