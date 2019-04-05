import React ,{Component} from 'react';
class Clock extends Component{
    render(){
        return(
            <div >
                 <div className="card-body card-body-pad">

<ul className="pad-non">

    <i className="fa fa-clock-o cloc-color"></i>
    <li className="list-bullet cloc-data">Current</li>
    <li className="list-bullet cloc-data">12:30AM</li>
</ul>

</div>
            </div>
        )
    }
}
export default Clock;