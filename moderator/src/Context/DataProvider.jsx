import React, { Component } from 'react'
export const DataContext = React.createContext()

export default class DataProvider extends Component {
  state={
    imageGallery :[
      {src:"../../assets/img1.jpg",updateBy:"abcd",date:'07/05/2020',otherDetails:'hp omen'},
      {src:"../../assets/img2.jpg",updateBy:"abcd",date:'07/05/2020',otherDetails:'hp omen'},
      {src:"../../assets/img3.png",updateBy:"abcd",date:'07/05/2020',otherDetails:'hp omen'}
    ]
  }
  methods={

  }
  render() {
    return (
      <DataContext.Provider
      value={{
        ...this.state,
        ...this.methods
      }}
    >
      {this.props.children}
    </DataContext.Provider>
    )
  }
}
