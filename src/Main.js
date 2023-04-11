import React from 'react';


class Main extends React.Component {
    render() {
       return (
        <>
            <HornedBeast title = 'Three-horned Chameleon' ImageURL = 'https://images.unsplash.com/photo-1502641923341-7d3e5c05bd73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' description = 'A chameleon on a hand'/>
            <HornedBeast title = 'Bison' ImageURL = 'https://images.unsplash.com/photo-1507824154544-21a54a06a929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' description = 'A bison'/>
        </>
       )
    }
}

class HornedBeast extends React.Component {
    render() {
        return (
            <>
                <h2>Title: {this.props.title}</h2>
                <img title= {this.props.title} src= {this.props.ImageURL} alt={this.props.description}/>
                <p>{this.props.description}</p>
            </>
        )
    }
}




export default Main;