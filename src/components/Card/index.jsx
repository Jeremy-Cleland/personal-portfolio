export const CardModern = () => {
  return (
    <article className="flex transition bg-white dark:bg-gray-900 dark:shadow-gray-800/25 hover:shadow-xl">
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-ocean-300"
        >
          <span>2022</span>
          <span className="flex-1 w-px bg-gray-900/10 dark:bg-white/10"></span>
          <span>Oct 10</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt="Guitar"
          src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          className="object-cover w-full h-full aspect-square"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="border-gray-900/10 dark:border-white/10 sm:!border-l-transparent border-s p-4 sm:p-6">
          <a href="#">
            <h3 className="font-bold text-gray-900 uppercase dark:text-ocean-300">
              Finding the right guitar for your style - 5 tips
            </h3>
          </a>

          <p className="mt-2 text-gray-700 dark:text-gray-200 line-clamp-3 text-sm/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href="#"
            className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-yellow-400 hover:bg-yellow-500"
          >
            Read Blog
          </a>
        </div>
      </div>
    </article>
  );
};

export const GradientCard = () => {
  return (
    <article className="animate-background from-green-300 via-blue-500 to-purple-600 dark:shadow-gray-700/25 rounded-xl bg-gradient-to-r bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
      <div className="bg-white dark:bg-gray-900 rounded-[10px] p-4 !pt-20 sm:p-6">
        <time
          dateTime="2022-10-10"
          className="block text-xs text-gray-500 dark:text-ocean-300"
        >
          10th Oct 2022
        </time>

        <a href="#">
          <h3 className="text-gray-900 mt-0.5 text-lg font-medium dark:text-ocean-300">
            How to center an element using JavaScript and jQuery
          </h3>
        </a>

        <div className="flex flex-wrap gap-1 mt-4">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs">
            Snippet
          </span>

          <span className="bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  );
};

export const GradientHoverCard = () => {
  return (
    <article className="hover:animate-background from-green-300 via-blue-500 to-purple-600 dark:shadow-gray-700/25 rounded-xl bg-gradient-to-r p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="bg-white dark:bg-gray-900 rounded-[10px] p-4 !pt-20 sm:p-6">
        <time
          dateTime="2022-10-10"
          className="block text-xs text-gray-500 dark:text-ocean-300"
        >
          10th Oct 2022
        </time>

        <a href="#">
          <h3 className="text-gray-900 mt-0.5 text-lg font-medium dark:text-ocean-300">
            How to center an element using JavaScript and jQuery
          </h3>
        </a>

        <div className="flex flex-wrap gap-1 mt-4">
          <span className="bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs">
            Snippet
          </span>

          <span className="bg-purple-100 text-purple-600 dark:bg-purple-600 dark:text-purple-100 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs">
            JavaScript
          </span>
        </div>
      </div>
    </article>
  );
};

export const CardFloating = () => {
  return (
    <article className="group">
      <img
        alt="Lava"
        src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="dark:shadow-gray-700/25 h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
      />

      <div className="p-4">
        <a href="#">
          <h3 className="text-lg font-medium text-gray-900 dark:text-ocean-300">
            Finding the Journey to Mordor
          </h3>
        </a>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed dark:text-ocean-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
};

export const CardSimple = () => {
  return (
    <article className="overflow-hidden transition rounded-lg shadow dark:shadow-gray-700/25 hover:shadow-lg">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="object-cover w-full h-56"
      />

      <div className="p-4 bg-white dark:bg-gray-900 sm:p-6">
        <time
          dateTime="2022-10-10"
          className="block text-xs text-gray-500 dark:text-ocean-300"
        >
          10th Oct 2022
        </time>

        <a href="#">
          <h3 className="text-gray-900 mt-0.5 text-lg dark:text-ocean-300">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 text-gray-500 line-clamp-3 text-sm/relaxed dark:text-ocean-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
};

export const CardImgContent = () => {
  return (
    <a href="#" className="block">
      <img
        alt="Signage"
        src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        className="object-cover w-full h-56 rounded-bl-3xl rounded-tr-3xl sm:h-64 lg:h-72"
      />

      <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong className="font-medium">Company Name</strong>

        <span className="hidden sm:bg-yellow-500 sm:block sm:h-px sm:w-8"></span>

        <p className="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p>
      </div>
    </a>
  );
};

export const CardImgContentHover = () => {
  return (
    <a href="#" className="relative block bg-black group">
      <img
        alt="Developer"
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
      />

      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium tracking-widest text-pink-500 uppercase">
          Developer
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

        <div className="mt-32 sm:mt-48 lg:mt-64">
          <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              perferendis hic asperiores quibusdam quidem voluptates doloremque
              reiciendis nostrum harum. Repudiandae?
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};
