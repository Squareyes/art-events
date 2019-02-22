import React from 'react';
import ReactDOM from 'react-dom';
const Component = React.Component;

import moment from 'moment';

document.addEventListener('DOMContentLoaded', function() {

  console.log('site by squareyes.info 👓');

  /*============================================================================
    Event List
  ============================================================================*/

  const projectAttr = document.getElementById('page-data');
  const projectData = projectAttr.dataset.viewReactPage;
  let list = JSON.parse(projectData);

  const dayOne = moment()
  const dayOneArray = []

  list.map(event => {
    event.date = moment(event.date, 'YYYY-MM-DD HH:mm Z')
    if (moment(event.date).isSame(dayOne, 'day')) {
      dayOneArray.push(event)
      console.log('suup')
    }
  })

  console.log(list, dayOneArray)


  /**
   * Outer Element and state
   */
  class EventList extends Component {
    constructor(props) {
      super(props);

      this.state = {
        list: list
      };
    }

    render() {
      return (
        <div>
          <div className="EventList">
            <div className="event-list">
              { this.state.list.map(item => item).map(item =>
                <Event item={item} />
              )}
            </div>
          </div>
        </div>
      );
    }
  };


  /**
   * Event
   */
  class Event extends Component {
    render() {
      const item = this.props.item;

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
  );
});