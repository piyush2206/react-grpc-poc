import * as React from 'react';
// import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadVenues } from '../../modules/venueList';

interface MyState {
  venueList: {
    arrVenues: {
      cinemahall: string,
      cinema_Id: string
    }[]
  };
}
interface MyProps {
  loadVenues: Function;
  arrVenues: {
    cinemahall: string,
    cinema_Id: string
  }[];
}

class Home extends React.Component<MyProps, MyState> {
  componentWillMount(): void {
    console.log('GrandChild did mount.');
    this.props.loadVenues();
  }
  render(): JSX.Element {
    console.log('in render', this.props);
    if (this.props.arrVenues.length <= 0) {
      return (<div />);
    }
    return (
      <div>
        <h1>Cinemas</h1>
        {/* article: {article}, date: {date}, filter: {filter} */}
        {/* <div class="row">{Articles}</div> */}
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Venue Code</th>
                <th>Venue Name</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.arrVenues[0].cinema_Id}</td>
                <td>{this.props.arrVenues[0].cinemahall}</td>
                <td>john@example.com</td>
              </tr>
              <tr>
                <td>{this.props.arrVenues[1].cinema_Id}</td>
                <td>{this.props.arrVenues[1].cinemahall}</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>{this.props.arrVenues[2].cinema_Id}</td>
                <td>{this.props.arrVenues[2].cinemahall}</td>
                <td>july@example.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  arrVenues: state.venueList.arrVenues
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  loadVenues
}, dispatch);

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Home);
