import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class PublishDatePicker extends Component {

  render(){
    const publishDate = this.props

    return(
      <div>
        <DatePicker selected={moment(publishDate.value)} onChange={val => publishDate.onChange(val.format())} />
      </div>
    );
  }
}

export default PublishDatePicker;
