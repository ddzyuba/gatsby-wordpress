import React, { Component } from "react";
import * as JsSearch from "js-search";
import PropTypes from 'prop-types';

class ClientSearchPosts extends Component {

  state = {
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    indexByTitle: false,
    termFrequency: true,
    searchQuery: this.props.searchText,
    selectedStrategy: ``,
    selectedSanitizer: ``,
    isFirstSearch: true, 
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.search === null) {
      const { engine } = nextProps;
      return {
        indexByTitle: engine.TitleIndex,
        termFrequency: engine.SearchByTerm,
        selectedSanitizer: engine.searchSanitizer,
        selectedStrategy: engine.indexStrategy,
      };
    }
    return null;
  }
  async componentDidMount() {
    this.rebuildIndex(); 
  }

  componentDidUpdate() {
    if (this.state.search && this.state.isFirstSearch) {
      const { searchText } = this.props;
      if (searchText) {
        const { search } = this.state;
        const queryResult = search.search(searchText);
        this.setState({ searchResults: queryResult, isFirstSearch: false });
      }
    }
  }

  rebuildIndex = () => {
    const {
      selectedStrategy,
      selectedSanitizer,
      termFrequency,
      indexByTitle,
    } = this.state;
    const { posts } = this.props;

    const dataToSearch = new JsSearch.Search(`title`)
    if (selectedStrategy === `All`) {
      dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    }
    if (selectedStrategy === `Exact match`) {
      dataToSearch.indexStrategy = new JsSearch.ExactWordIndexStrategy();
    }
    if (selectedStrategy === `Prefix match`) {
      dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    }

    selectedSanitizer === `Case Sensitive`
      ? (dataToSearch.sanitizer = new JsSearch.CaseSensitiveSanitizer())
      : (dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer())

    termFrequency === true
      ? (dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex(`title`))
      : (dataToSearch.searchIndex = new JsSearch.UnorderedSearchIndex())

    if (indexByTitle) {
      dataToSearch.addIndex(`title`);
    }
    dataToSearch.addDocuments(posts);
    this.setState({ search: dataToSearch, isLoading: false });
  }
  searchData = e => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult, isFirstSearch: false });
  }
  handleSubmit = e => {
    e.preventDefault();
  }
  render() {
    const { isLoading, isError, searchResults, searchQuery } = this.state;
    const queryResults = searchQuery === `` ? null : searchResults;
    if (isLoading) {
      return (
        <h2>Getting the search all setup</h2>
      )
    }
    if (isError) {
      return (
        <h2>Something really bad happened</h2>
      )
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="Search">
              Enter your search here
            </label>
            <br />
            <input
              id="Search"
              value={searchQuery}
              onChange={this.searchData}
              placeholder="Search..."
            />
          </div>
        </form>
        {
          queryResults && (
            <div>
              {queryResults.map((item, index) => {
                if ( index >= 10 ) {
                  return null;
                }
                return (
                  <p key={index}><a href={`http://localhost:8000/${item.slug}`}>{item.title}</a></p>
                )
              })}
            </div>
          )
        }
      </div>
    );
  }
}
export default ClientSearchPosts;

ClientSearchPosts.propTypes = {
  searchText: PropTypes.string,
  posts: PropTypes.array.isRequired,
  engine: PropTypes.object.isRequired
};