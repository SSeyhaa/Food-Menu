import { useCallback, useEffect, useRef, useState } from "react";

const LiveSearch = ({
  results = [],
  renderItem,
  value,
  onChange,
  onSelect,
}) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const [showResults, setShowResults] = useState(false);
  const [defaultValue, setDefaultValue] = useState("");

  const handleSelection = (selectedIndex) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    onSelect && onSelect(selectedItem);
    resetSearchComplete();
  };

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % results.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;

    // hide search results
    if (key === "Escape") {
      resetSearchComplete();
    }

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      handleSelection(focusedIndex);
    }

    setFocusedIndex(nextIndexCount);
  };

  const handleChange = (e) => {
    setDefaultValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    if (results.length > 0 && !showResults) setShowResults(true);

    if (results.length <= 0) setShowResults(false);
  }, [results]);

  useEffect(() => {
    if (value) setDefaultValue(value);
  }, [value]);

  return (
    <div className="mt-5">
      <div
        tabIndex={1}
        onBlur={resetSearchComplete}
        onKeyDown={handleKeyDown}
        className="relative"
      >
        <input
          value={defaultValue}
          onChange={handleChange}
          type="text"
          className="w-[430px] px-5 py-3 text-lg rounded-full border-2 border-gray-500 focus:border-gray-700 outline-none transition"
          placeholder="Search..."
        />

        {/* Search Results Container */}
        {showResults && (
          <div className="absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto">
            {results.map((item, index) => {
              return (
                <div
                  key={index}
                  onMouseDown={() => handleSelection(index)}
                  ref={index === focusedIndex ? resultContainer : null}
                  style={{
                    backgroundColor:
                      index === focusedIndex ? "rgba(0,0,0,0.1)" : "",
                  }}
                  className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                >
                  {renderItem(item)}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSearch;
