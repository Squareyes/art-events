import React from 'react'
import ReactDOM from 'react-dom'
const Component = React.Component

import moment from 'moment'

document.addEventListener('DOMContentLoaded', function() {

  console.log('site by squareyes.info 👓')

  /*============================================================================
    Event List
  ============================================================================*/

  const projectAttr = document.getElementById('page-data')
  const projectData = projectAttr.dataset.viewReactPage
  let list = JSON.parse(projectData)

  // Get one week and create arrays
  const dayZero = moment().endOf('day')
  const dayZeroArray = []

  const dayOne = moment().add(1, 'days').endOf('day')
  const dayOneArray = []

  const dayTwo = moment().add(2, 'days').endOf('day')
  const dayTwoArray = []

  const dayThree = moment().add(3, 'days').endOf('day')
  const dayThreeArray = []

  const dayFour = moment().add(4, 'days').endOf('day')
  const dayFourArray = []

  const dayFive = moment().add(5, 'days').endOf('day')
  const dayFiveArray = []

  const daySix = moment().add(6, 'days').endOf('day')
  const daySixArray = []

  const daySeven = moment().add(7, 'days').endOf('day')
  const daySevenArray = []

  list.map(event => {
    event.date = moment(event.event_d, 'D-MM-YYYY').endOf('day')
        
    if (moment(event.date).diff(dayZero, 'day') === 0) {
      dayZeroArray.push(event)
    }
    if (moment(event.date).diff(dayOne, 'day') === 0) {
      dayOneArray.push(event)
    }
    if (moment(event.date).diff(dayTwo, 'day') === 0) {
      dayTwoArray.push(event)
    }
    if (moment(event.date).diff(dayThree, 'day') === 0) {
      dayThreeArray.push(event)
    }
    if (moment(event.date).diff(dayFour, 'day') === 0) {
      dayFourArray.push(event)
    }
    if (moment(event.date).diff(dayFive, 'day') === 0) {
      dayFiveArray.push(event)
    }
    if (moment(event.date).diff(daySix, 'day') === 0) {
      daySixArray.push(event)
    }
    if (moment(event.date).diff(daySeven, 'day') === 0) {
      daySevenArray.push(event)
    }
  })


  /**
   * Outer Element and state
   */
  class EventList extends Component {
    constructor(props) {
      super(props)

      this.state = {
        dayZero,
        dayOne,
        dayTwo,
        dayFour,
        dayFive,
        daySix,
        daySeven,
        dayZeroArray,
        dayOneArray,
        dayTwoArray,
        dayThreeArray,
        dayFourArray,
        dayFiveArray,
        daySixArray,
        daySevenArray,
      }
    }

    render() {
      return (
        <div>
          <div className="EventList">
            <div className="event-list">
              <h2>{moment(this.state.dayZero).format('dddd, D MMM')}</h2>
              { this.state.dayZeroArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.dayOne).format('dddd, D MMM')}</h2>
              { this.state.dayOneArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.dayTwo).format('dddd, D MMM')}</h2>
              { this.state.dayTwoArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.dayThree).format('dddd, D MMM')}</h2>
              { this.state.dayThreeArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.dayFour).format('dddd, D MMM')}</h2>
              { this.state.dayFourArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.dayFive).format('dddd, D MMM')}</h2>
              { this.state.dayFiveArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.daySix).format('dddd, D MMM')}</h2>
              { this.state.daySixArray.map(item => item).map(item =>
                <Event item={item} />
              )}

              <h2>{moment(this.state.daySeven).format('dddd, D MMM')}</h2>
              { this.state.daySevenArray.map(item => item).map(item =>
                <Event item={item} />
              )}
            </div>
          </div>
        </div>
      )
    }
  }


  /**
   * Event
   */
  class Event extends Component {
    render() {
      const item = this.props.item

      return (
        <div className="event" key={item.title}>

          <div className="event__details">
            <div className="event__details--title">
              <h4>{ item.title }</h4>
              <p>{ item.category }</p>
              <p>{ item.location }</p>
              <p>{ item.duration }</p>
              <p>{ item.start_t }</p>
              <p>{ item.desc }</p>
              <p>{ item.more_info }</p>
            </div>
          </div>
        </div>
      )
    }
  }

  // /*==========================================================================
  //   Render
  // ==========================================================================*/
  ReactDOM.render(
    <EventList />,
    document.getElementById('react-test')
  )
})