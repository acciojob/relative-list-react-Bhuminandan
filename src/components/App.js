import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={relativeList}>
                <li key={relativeListItem1}>Ramesh</li>
                <li key={relativeListItem2}>Sukeshs</li>
               </ol>
    </div>
  )
}

export default App
