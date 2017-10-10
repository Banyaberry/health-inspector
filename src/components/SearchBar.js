import React from 'react' // this makes this a React component. well i mean, to use react.

class SearchBar extends React.Component { //extends is inheritence in js

    constructor() {
        super()

        this.state = { //this is this component
            search: ''
        }
    }
    
    handleSearchChange = (event) => { //functions look like this
        this.setState({
            [event.target.name]: event.target.value //updates the search state to the value
            //event.target.name is search. on top, we've made
            //a key called search. These need to match up.
        })
    }

    render(){ // this returns your JSX which turns into HTML
        //your website changes itself with render. whenever there is a change,
        //your website runs render and reflects the change quickly.
       
        return( //when you write JSX code, it's in parenthesis
            <div className="searchbar-container"> {/* parent div to contain all our other JSX */}
                <form className="search-form">
                    <input 
                        type="search"
                        name="search"
                        value={this.state.search} //linking input to our search state. 
                        //when some types something into search bar, this will update

                        className="search-input"
                        placeholder="Search Restaurants"
                        onChange={this.handleSearchChange} //onChange will be used when user inputs things
                        //onChange will pass in an event into this function ^
                    
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar