import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {
    activeId: tagsList[0].optionId,
    inputValue: '',
    updatedArray: [],
  }

  onChangeInput = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onSelectValue = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  onAddTask = event => {
    event.preventDefault()
    const {inputValue, activeId} = this.state
    const newTask = {
      id: uuidv4(),
      inputValue,
      activeId,
      isActive: false,
    }
    this.setState(prevState => ({
      updatedArray: [...prevState.updatedArray, newTask],
      inputValue: '',
      activeId: '',
    }))
  }

  render() {
    const {activeId, inputValue, updatedArray} = this.state
    return (
      <div>
        <div>
          <h1>Create a task!</h1>
          <form onSubmit={this.onAddTask}>
            <label htmlFor="task">Task</label>
            <input
              type="text"
              id="task"
              placeholder="Enter the task here"
              onChange={this.onChangeInput}
              value={inputValue}
            />
            <label htmlFor="tags">Tags</label>
            <select id="tags" onChange={this.onSelectValue} value={activeId}>
              {tagsList.map(item => (
                <option key={item.optionId} value={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div>
          <h1>Tags</h1>
          <ul>
            {tagsList.map(item => (
              <li key={item.optionId}>
                <button type="button">{item.displayText}</button>
              </li>
            ))}
          </ul>
          <h1>Tasks</h1>
          {updatedArray.length === 0 ? (
            <p>No Tasks Added Yet</p>
          ) : (
            <ul>
              {updatedArray.map(item => (
                <li key={item.id}>
                  <p>{item.inputValue}</p>
                  <p>{item.activeId}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Home
