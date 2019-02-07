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
  class ArticleFilter extends Component {
    constructor(props) {
      super(props);

      this.state = {
        list: list,
        checkedValues: [],
      };

      this.handleChange = this.handleChange.bind(this);
      this.isChecked = this.isChecked.bind(this);
    }

    isChecked(value) {
      return this.state.checkedValues.includes(value)
    }

    // pass the index in initially
    handleChange(event) {

      const clickedValue = event.target.value;
      const checkedValues = this.isChecked(clickedValue)
      // if it’s checked, create a NEW array excluding the checked value
      ? this.state.checkedValues.filter(value => value !== clickedValue)
        // if it’s not checked create a NEW array including the checked value
      : [...this.state.checkedValues, clickedValue];

      this.setState({
        checkedValues: checkedValues,
      });
    }

    render() {
      return (
        <div className="Filter">
          <div className="filter-wrapper">
            <div>
              <p><strong>Filter:</strong></p>
            </div>
            <div className="pretty p-default">
              <input
                name="news"
                value="news"
                type="checkbox"
                checked={this.isChecked('news')}
                onChange={this.handleChange}
              />
              <div className="state">
                <label>News</label>
              </div>
            </div>
            <div className="pretty p-default">
              <input
                name="events"
                value="events"
                type="checkbox"
                checked={this.isChecked('events')}
                onChange={this.handleChange}
              />
              <div className="state">
                <label>Events</label>
              </div>
            </div>
            <div className="pretty p-default">
              <input
                name="feature"
                value="feature"
                type="checkbox"
                checked={this.isChecked('feature')}
                onChange={this.handleChange}
              />
              <div className="state">
                <label>Features</label>
              </div>
            </div>
          </div>
          <div className="product-feed">
            { this.state.list.filter(item => this.state.checkedValues.length ? this.isChecked(item.tags[0]) : item).map(item =>
              <ArticleCard item={item} />
            )}
          </div>
        </div>
      );
    }
  };


  /**
   * Article Card
   */
  class ArticleCard extends Component {
    render() {
      const item = this.props.item;

      return (
        <div className="product" key={item.title}>
          <div className="product__image">
            <a href={ item.url }>
              <span className="product__badge">{ item.tags[0] }</span>
              <img src={ item.thumb_image } />
            </a>
          </div>

          <div className="product__details">
            <div className="product__details--title">
              <h4>{ item.title }</h4>
              <p>{ item.featured_intro }</p>
            </div>
          </div>
          <div className="product__cta">
            <a href={ item.url }>
              <button className="button button--primary">
                Read More
              </button>
            </a>
          </div>
        </div>
      )
    }
  }

  // /*==========================================================================
  //   Render
  // ==========================================================================*/
  ReactDOM.render(
    <ArticleFilter />,
    document.getElementById('react-test')
  );
  
});