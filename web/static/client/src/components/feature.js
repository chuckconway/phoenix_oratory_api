import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions';
import moment from 'moment';
import PublishDatePicker from './controls/publishdatepicker.jsx';
import 'react-datepicker/dist/react-datepicker.css';

class Feature extends Component{

  handleFormSubmit(formProps){
    this.props.postPost(formProps);
  }

  componentWillMount() {
    this.props.initializeForm({
      publishDate: moment().format()
    });
  }


  renderAlert(){
    if(this.props.errorMessage){
      return (
          <div className="alert alert-danger">
            <strong>Ooops!</strong> {this.props.errorMessage}
          </div>
      );
    }
  }

    render() {

      const {handleSubmit, fields:{title, content, tags, publishDate}} = this.props;

      return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset  className="form-group" >
              <label>Title</label>
              <input className="form-control" {...title} />
              {title.touched && title.error && <div className="error">{title.error}</div>}
            </fieldset>
            <fieldset className="form-group" >
              <label>Enlighten us</label>
              <textarea className="form-control content-area" {...content} ></textarea>
              {content.touched && content.error && <div className="error">{content.error}</div>}
            </fieldset>
            <fieldset className="form-group" >
              <label>Tags</label>
              <input type="text" placeholder="at least one tag (general, art, etc...) - separate by commas" className="form-control" {...tags} />
              {tags.touched && tags.error && <div className="error">{tags.error}</div>}
            </fieldset>
            <fieldset className="form-group" >
              <label>Publish Date</label>
              <PublishDatePicker className="form-control" {...publishDate} />
              {publishDate.touched && publishDate.error && <div className="error">{publishDate.error}</div>}
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="btn btn-primary" >Post</button>
        </form>
      )
    }
}

function validate(formProps){
  const errors= {};

  if(!formProps.title){
    errors.title = 'Please enter a title';
  }

  if(!formProps.content){
    errors.content = 'Please enter content';
  }

  if(!formProps.tags){
    errors.tags = 'Please enter at least one tag, use \'general\' as a catch all';
  }

  if(!formProps.publishDate){
    errors.publishDate = 'Please enter a publish date';
  }

  return errors;
}


function mapStateToProps(state){
  return {message:state.auth.message};
}


export default reduxForm({
  form:'newpost',
  fields:['title', 'content', 'tags', 'publishDate'],
  validate
}, mapStateToProps, actions)(Feature);
