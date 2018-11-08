import React from 'react';

class CarTable extends React.Component {
    render() {
        return (            
                <table id='car-table'>
                    <tbody>
                        <tr>
                            <td>asdf</td>
                            <td>asdf</td>
                            <td>asdf</td>
                        </tr>
                        <tr>
                            <td>fdsa</td>
                            <td>fdsa</td>
                            <td>fdsa</td>
                        </tr>
                    </tbody>
                    {/* map over the cars that are selected and make a <tr></tr> for each car */}
                    {/* each of these rows will have <td></td> for each car's data  */}
                </table>            
        )
    }
}

export default CarTable;