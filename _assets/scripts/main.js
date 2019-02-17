document.addEventListener('DOMContentLoaded', function() {

  console.log('site by squareyes.info 👓');

  /*============================================================================
    Article Filter
  ============================================================================*/

  const projectAttr = document.getElementById('page-data');
  const projectData = projectAttr.dataset.viewReactPage;
  let list = JSON.parse(projectData);

  console.log(list)


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
        <div className="EventList">
          <div className="event-list">
            { this.state.list.map(item => item).map(item =>
              <Event item={item} />
            )}
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