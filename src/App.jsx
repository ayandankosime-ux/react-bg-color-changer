import './App.css'

function App() {

  function handleBackgroundChange() {
    const background = window.document.querySelector('.js-background');

    background.classList.toggle('blue');


  }

  return (
    <>
      <div className="background js-background">
        <button id='changeBackgroundBtn' className='bgchange-btn' onClick={handleBackgroundChange}>Change Background</button>
      </div>
    </>
  )
}

export default App
