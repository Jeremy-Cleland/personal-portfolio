import { memo, useMemo } from "react";

const divideArray = (array, length) => {
  const newArray = [...array];
  const divideRes = Math.floor(newArray.length / length);
  let results = [];

  // Divide the array into subarrays with equal lengths
  for (let i = 0; i < length; i++) {
    results.push(newArray.splice(0, divideRes));
  }

  // Add remaining items to the subarrays
  for (let i = 0; i < newArray.length; i++) {
    results[i].push(newArray[i]);
  }

  // Filter out empty subarrays
  results = results.filter((itm) => itm.length);

  return results;
};

const masonryContainerStyle = "flex justify-center"; // Use Tailwind CSS utility classes for flexbox and center alignment

const masonryColumnStyle = "flex flex-col w-full"; // Use Tailwind CSS utility classes for flexbox and full width

const Masonry = ({ dataArray, columnCount, ChildsElement }) => {
  return useMemo(() => {
    const arr = divideArray(dataArray, columnCount);

    return (
      <div className={masonryContainerStyle}>
        {arr?.map((itm, i) => (
          <div key={i} className={masonryColumnStyle}>
            {itm?.map((elm, i) => (
              <ChildsElement value={elm} key={elm?.id ?? i} />
            ))}
          </div>
        ))}
      </div>
    );
  }, [dataArray, columnCount]);
};

export default memo(Masonry);
