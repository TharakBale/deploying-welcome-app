import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const result = isSubscribed ? 'Subscribed' : 'Subscribe'
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="note">Thank you! Happy Learning</h1>
        <div>
          <button className="button" type="button" onClick={this.onSubscribe}>
            {result}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
