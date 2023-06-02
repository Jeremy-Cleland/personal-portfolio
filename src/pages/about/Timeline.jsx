import { aboutMeData } from "../../data/aboutMeData.jsx";

const Timeline = () => {
  const { events } = aboutMeData;
  return (
    <div>
      <div className="my-5 border-b-[1px] border-violet-400/60 py-5 text-center font-SourceCodePro text-dark-900 dark:text-gray-200">
        <h4 className="text-center font-Fira text-lg tracking-tight md:text-left ">
          <span className="text-base text-violet-400"> {">"} </span> Career &
          Education Timeline
        </h4>
      </div>
      <ul className="mx-auto my-20 max-w-7xl rounded-lg p-4 font-Fira text-sm dark:bg-dark-900 dark:text-dark-100 lg:p-8">
        {events.map((event) => (
          <li key={event.id}>
            <div className="grid max-w-6xl overflow-hidden rounded-lg p-4 hover:dark:bg-dark-400 md:grid-cols-5 lg:p-6 xl:grid-cols-12">
              <h3 className="text-md  my-2 underline underline-offset-4 md:col-span-4 md:col-start-2 md:ml-0 xl:col-span-9 xl:col-start-3">
                {event.title}
              </h3>
              <time
                dateTime=""
                className="row-start-1 my-2 dark:text-gray-400 md:col-start-1 xl:col-span-2"
              >
                {event.date}
              </time>

              <p className="my-2 ml-8 dark:text-gray-300 md:col-span-4 md:col-start-2 md:ml-0 xl:col-span-9 xl:col-start-3">
                {event.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
