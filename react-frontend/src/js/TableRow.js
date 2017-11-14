import React, { Component } from 'react';


class TableRow extends Component {

  constructor(props) {
      super(props);

  }


  render() {
    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.ingredients}
          </td>
          <td>
            {this.props.obj.steps}
          </td>
        </tr>
    );
  }
}

export default TableRow;
