import { useState } from 'react'
import './Filter.css'

export function Filter ({ onSelectOption }) {
  const [selectedOption, setSelectedOption] = useState('All')

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    onSelectOption(event.target.value)
  }

  return (
    <div className='inputdiv'>
      <div className='allindiv'>
        <input className='inputsel' type='radio' name='filterOption' value='All' checked={selectedOption === 'All'} onChange={handleOptionChange} /> <p>All</p>
      </div>

      <div className='allindiv'>
        <input className='inputsel' type='radio' name='filterOption' value='Completed' checked={selectedOption === 'Completed'} onChange={handleOptionChange} /> <p>Completed</p>
      </div>

      <div className='allindiv'>
        <input className='inputsel' type='radio' name='filterOption' value='Pending' checked={selectedOption === 'Pending'} onChange={handleOptionChange} /> <p>Pending</p>
      </div>
    </div>
  )
}
