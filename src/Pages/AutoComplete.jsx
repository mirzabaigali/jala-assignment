import React, { useState } from "react";
import Headding from "../Components/Headding";
import SidePanel from "../Components/SidePanel";
import Autosuggest from "react-autosuggest";
import "./AutoComplete.css";
const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const itTechnologies = [
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Django",
    "Flask",
    "Java",
    "Spring",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "jQuery",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "Kubernetes",
  ];

  const getSuggestions1 = (value) => {
    const inputValueLower = value.toLowerCase();
    return itTechnologies.filter((technology) =>
      technology.toLowerCase().startsWith(inputValueLower)
    );
  };

  const renderSuggestion1 = (suggestion) => <div>{suggestion}</div>;

  const onSuggestionsFetchRequested1 = ({ value }) => {
    setSuggestions(getSuggestions1(value));
  };

  const onSuggestionsClearRequested1 = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected1 = (event, { suggestion }) => {
    setInputValue(suggestion);
  };

  const inputProps1 = {
    placeholder: "Type an IT technology...",
    value: inputValue,
    onChange: (event, { newValue }) => setInputValue(newValue),
  };
  //multiselect values
  const getSuggestions = (value) => {
    const inputValueLower = value.toLowerCase();
    return itTechnologies.filter((technology) =>
      technology.toLowerCase().startsWith(inputValueLower)
    );
  };

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedOptions([...selectedOptions, suggestion]);
    setInputValue("");
  };

  const removeSelectedOption = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected !== option)
    );
  };

  const inputProps = {
    placeholder: "Type IT technologies...",
    value: inputValue,
    onChange: (event, { newValue }) => setInputValue(newValue),
  };

  const shouldRenderSuggestions = (value) => value.trim().length > 0;

  const renderSuggestionsContainer = ({ containerProps, children }) => (
    <div {...containerProps} className="suggestions-container">
      {children}
    </div>
  );

  return (
    <>
      <Headding />
      <div className="d-flex">
        <div className="col-2 d-sm-none d-md-none d-none d-lg-none d-xl-block">
          <SidePanel />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>AutoComplete</h1>
            </div>
            <div className="col-12 mt-5">
              <div className="card ">
                <nav className="mt-3 ">
                  <div
                    className="nav nav-tabs fs-1"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Single Value
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Multiple Values
                    </button>
                  </div>
                </nav>
                <div className="tab-content fs-3" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="container mt-4 mb-5">
                      <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8 col-sm-10 ">
                          <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={
                              onSuggestionsFetchRequested1
                            }
                            onSuggestionsClearRequested={
                              onSuggestionsClearRequested1
                            }
                            onSuggestionSelected={onSuggestionSelected1}
                            getSuggestionValue={(suggestion) => suggestion}
                            renderSuggestion={renderSuggestion1}
                            inputProps={inputProps1}
                            theme={{
                              container: "autosuggest-container",
                              suggestionsContainer: "suggestions-container",
                              suggestionsList: "suggestions-list",
                              suggestion: "suggestion",
                              suggestionHighlighted: "suggestion-highlighted",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-4">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-md-8 col-sm-10">
                        <div className="multiselect-autocomplete">
                          <div className="selected-options">
                            {selectedOptions.map((option) => (
                              <div
                                key={option}
                                className="selected-option"
                                onClick={() => removeSelectedOption(option)}
                              >
                                {option} <span>×</span>
                              </div>
                            ))}
                          </div>
                          {/* <p>Tags:</p> */}
                          <Autosuggest
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={
                              onSuggestionsFetchRequested
                            }
                            onSuggestionsClearRequested={
                              onSuggestionsClearRequested
                            }
                            onSuggestionSelected={onSuggestionSelected}
                            getSuggestionValue={(suggestion) => suggestion}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                            shouldRenderSuggestions={shouldRenderSuggestions}
                            renderSuggestionsContainer={
                              renderSuggestionsContainer
                            }
                            focusInputOnSuggestionClick={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
