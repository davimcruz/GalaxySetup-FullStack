import React, { useState } from 'react';

function NotepadScript() {
  const [pages, setPages] = useState([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(-1);
  const maxTabs = 7;

  const createNewPage = () => {
    if (pages.length >= maxTabs) {
      alert('Você só pode criar até 7 abas simultaneamente.');
      return;
    }

    const newPageIndex = pages.length + 1;

    const newPage = {
      id: newPageIndex,
      text: '',
    };

    setPages([...pages, newPage]);
    setCurrentTabIndex(pages.length);
  };

  const closeTab = (index) => {
    if (index >= 0 && index < pages.length) {
      const updatedPages = [...pages];
      updatedPages.splice(index, 1);
      setPages(updatedPages);

      if (index === currentTabIndex) {
        const newCurrentTabIndex = index >= updatedPages.length ? updatedPages.length - 1 : index;
        setCurrentTabIndex(newCurrentTabIndex);
      }
    }
  };

  const setCurrentPage = (tabIndex) => {
    if (tabIndex >= 0 && tabIndex < pages.length) {
      setCurrentTabIndex(tabIndex);
    }
  };

  const handleTextareaChange = (index, text) => {
    const updatedPages = [...pages];
    updatedPages[index].text = text;
    setPages(updatedPages);
  };

  const handleTabClick = (e, index) => {
    if (e.button === 1) {
      // Verifique se o botão do meio foi clicado (button === 1)
      closeTab(index);
    } else {
      e.preventDefault();
      setCurrentPage(index);
    }
  };

  return (
    <div>
      <div className="navigation">
        <div className="page-tabs">
          {pages.map((page, index) => (
            <a
              key={index}
              href={`#page${page.id}`}
              className={`tab ${index === currentTabIndex ? 'tab-active' : ''}`}
              onMouseUp={(e) => handleTabClick(e, index)}
            >
              <span>Página {page.id}</span>
              <span className="close-button" onClick={() => closeTab(index)}>
                ✕
              </span>
            </a>
          ))}
        </div>
        <button id="new-page-btn" onClick={createNewPage}>+</button>
      </div>
      <div className="editor-container">
        <div className="page-content">
          {pages.map((page, index) => (
            <div key={index} style={{ display: index === currentTabIndex ? 'block' : 'none' }}>
              <textarea
                value={page.text}
                onChange={(e) => handleTextareaChange(index, e.target.value)}
              ></textarea>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotepadScript;
