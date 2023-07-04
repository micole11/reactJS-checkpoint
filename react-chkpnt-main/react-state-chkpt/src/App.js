import './App.css';
import React from 'react'


class App extends React.Component{

  state={
    person : {
      fullName: 'Ciroma Chukwuma Adekunle',
      bio: 'Over the years, Ciroma Chukwudi Adekunle has always been the name WASSCE have always used in all their question paper to the extent that the name has become so stuck to every student that every year we all look forward to seeing him re-write his WAEC examination. Seems like Ciroma Chukwuma Adekunle has finally passed his exams and WAEC has finally replaced him with Dikko Chinedu Oladapo',
      imageSrc: <img 
      src= {require('./Assets/Ciroma.jpeg')}
      alt= 'Ciroma'
      className="img"
      />,
      profession: 'Professional SSCE Candidate'
    },
    show: false,
    interval: 0
  }
  viewProfile = () =>{
    this.setState({
      ...this.state, show: !this.state.show
    })
  }



  render(){

    return(
      <div className="AppDiv" >
        <div className="App" >
          <div className='btnDiv'>
            <button onClick={this.viewProfile}>
              {this.state.show ? 'Hide Profile' : 'Show Profile'}
            </button>

            {this.state.person.interval}
          </div>
          
          {this.state.show && (
            <>
              <div className='imageDiv'>
                {this.state.person.imageSrc}
              </div>
              <h2>Full Name:</h2>
              <p>{this.state.person.fullName}</p>
              <h2>Bio:</h2>
              <p>{this.state.person.bio}</p>
              <h2>Profession:</h2>
              <p>{this.state.person.profession}</p>
          </>
          )}
        </div>
      </div>

    )
  }
}

export default App;
