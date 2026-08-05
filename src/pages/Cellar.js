import testTubeImg from "../images/blod_test.png";
import { cellarData } from "../cellarData";
import { useState, useRef, useEffect } from "react";
import Alert from "./Alert";

const Cellar = () => {
  const [pageItems, setPageItems] = useState(8);
  const [allData, setAllData] = useState(cellarData);
  const [itemsOnPage, setItemsOnPage] = useState(allData.slice(0, pageItems));

  const [toggleBlood, setToggleBlood] = useState(false);
  const [toggleYear, setToggleYear] = useState(false);

  const [bloodType, setBloodType] = useState("");
  const [year, setSelectedYear] = useState("");

  const bloodDropdownRef = useRef(null);
  const yearDropdownRef = useRef(null);

  const [showAlert, setShowAlert] = useState(false);
  const [alertInfo, setAlertInfo] = useState({"type":"", "year":""})

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        bloodDropdownRef.current &&
        !bloodDropdownRef.current.contains(event.target)
      ) {
        setToggleBlood(false);
      }

      if (
        yearDropdownRef.current &&
        !yearDropdownRef.current.contains(event.target)
      ) {
        setToggleYear(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const bloodTypes = [...new Set(cellarData.map((item) => item.bloodType))];
  const years = [...new Set(cellarData.map((item) => item.year))].sort(
    (a, b) => a - b
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
    setToggleBlood(false);
    if (type) {
      setBloodType(type);
      let selectedBloodItems;
      if (year) {
        selectedBloodItems = cellarData.filter(
          (item) => item.bloodType === type && item.year === year
        );
      } else {
        selectedBloodItems = cellarData.filter((item) => item.bloodType === type);
      }
      setAllData(selectedBloodItems);
      setItemsOnPage(selectedBloodItems.slice(0, pageItems));
    } else {
      resetFilters();
    }
  };

  const setYear = (selectedYear) => {
    setToggleYear(false);
    if (selectedYear) {
      setSelectedYear(selectedYear);
      let selectedYearItems;
      if (bloodType) {
        selectedYearItems = cellarData.filter(
          (item) => item.year === selectedYear && item.bloodType === bloodType
        )
      } else {
        selectedYearItems = cellarData.filter((item) => item.year === selectedYear);
      }
      setAllData(selectedYearItems);
      setItemsOnPage(selectedYearItems.slice(0, pageItems))
    } else {
      resetFilters()
    }
  };

  const addItemToCart = (type, year) => {

    setAlertInfo(type, year)
    setShowAlert(true)
  }

  return (
    <div className="cellarWrapper">
      <div className="inputWrapper">
        <div className="dropdownWrapper" ref={bloodDropdownRef}>
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
                <div role="button" onClick={() => setBlood("")}>
                  All blood types
                </div>
                {bloodTypes.map((type) => (
                  <div
                    key={type}
                    role="button"
                    onClick={() => setBlood(type)}
                  >
                    {type}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="dropdownWrapper" ref={yearDropdownRef}>
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
                <div role="button" onClick={() => setYear("")}>
                  All years
                </div>
                {years.map((y) => (
                  <div
                    key={y}
                    role="button"
                    onClick={() => setYear(y)}
                  >
                    {y}
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
          itemsOnPage.map((item, index) => (
            <div className="preWrapper" key={item.id || index}>
              <div className="item">
                <img src={testTubeImg} alt="Test tube" width="230px" height="230px" />
                <div className="info">
                  <span>{item.bloodType}</span>, {item.year}
                </div>
              </div>
              <button onClick={()=>addItemToCart(item.bloodType, item.year)}>Add to cart</button>
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

     {showAlert &&  <Alert type={alertInfo.type} year={alertInfo.year} onClick="" />}
    </div>
  );
};

export default Cellar;