import testTubeImg from "../images/blod_test.png";
import { cellarData } from "../cellarData";
import { useState } from "react";

const Cellar = () => {
  const [pageItems, setPageItems] = useState(8);

  const [allData, setAllData] = useState(cellarData);

  const [itemsOnPage, setItemsOnPage] = useState(allData.slice(0, pageItems));

  const [toggleBlood, setToggleBlood] = useState(false);
  const [toggleYear, setToggleYear] = useState(false);

  const [bloodType, setBloodType] = useState("");
  const [year, setSelectedYear] = useState("");

  const bloodTypes = [...new Set(cellarData.map((item) => item.bloodType))];
  const years = [...new Set(cellarData.map((item) => item.year))].sort(
    (a, b) => a - b,
  );

  const seeMore = () => {
    setPageItems(pageItems + 8);
    setItemsOnPage(allData.slice(0, pageItems + 8));
  };

  const resetFilters = () => {
    setToggleBlood(false);
    setToggleYear(false);
    setBloodType("");
    setSelectedYear("");
    setAllData(cellarData);
    setItemsOnPage(cellarData.slice(0, pageItems));
  };

  const setBlood = (type) => {
    if (type) {
      setBloodType(type);
      let selectedBloodItems;
      if (year) {
        selectedBloodItems = allData.filter((item) => item.bloodType === type);
      }
      selectedBloodItems = cellarData.filter((item) => item.bloodType === type);
      setAllData(selectedBloodItems);
      setItemsOnPage(selectedBloodItems.slice(0, pageItems));
    } else {
      resetFilters();
    }
  };

  const setYear = (year) => {
    if (year) {
      setSelectedYear(year);
      let selectedYearItems;

      if (bloodType) {
        selectedYearItems = allData.filter((item) => item.year === year);
      } else {
        selectedYearItems = cellarData.filter((item) => item.year === year);
      }
      setAllData(selectedYearItems);
      setItemsOnPage(selectedYearItems.slice(0, pageItems));
    } else {
      resetFilters();
    }
  };

  return (
    <div className="cellarWrapper">
      <div className="inputWrapper">
        <div className="dropdownWrapper">
          <div
            className="dropdown"
            role="button"
            onClick={() => setToggleBlood(!toggleBlood)}
          >
            {bloodType === "" ? "All blood types" : bloodType}
          </div>
          {toggleBlood && (
            <div className="wrapper">
              <div className="innerWrapper">
                <div role="button" value={""} onClick={() => setBlood("")}>
                  All blood types
                </div>
                {bloodTypes.length &&
                  bloodTypes.map((type) => (
                    <div
                      role="button"
                      value={type}
                      onClick={() => setBlood(type)}
                    >
                      {type}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        <div className="dropdownWrapper">
          <div
            className="dropdown"
            role="button"
            onClick={() => setToggleYear(!toggleYear)}
          >
            {year === "" ? "All years" : year}
          </div>
          {toggleYear && (
            <div className="wrapper">
              <div className="innerWrapper">
                <div role="button" value={""} onClick={() => setYear("")}>
                  All years
                </div>
                {years.length &&
                  years.map((year) => (
                    <div
                      role="button"
                      value={year}
                      onClick={() => setYear(year)}
                    >
                      {year}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        <button onClick={resetFilters}>Show all</button>
      </div>
      <div className="items-wrapper">
        {itemsOnPage.length ? (
          itemsOnPage.map((item) => (
            <div className="preWrapper">
              <div className="item">
                <img src={testTubeImg}></img>
                <div className="info">
                  <span>{item.bloodType}</span>, {item.year}
                </div>
              </div>
              <button>Add to cart</button>
            </div>
          ))
        ) : (
          <div>No items found</div>
        )}

        {allData.length > 8 && itemsOnPage.length !== allData.length && (
          <button onClick={seeMore} className="see-more">
            See more
          </button>
        )}
      </div>
    </div>
  );
};

export default Cellar;
