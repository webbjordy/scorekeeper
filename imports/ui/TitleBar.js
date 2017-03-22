import React from 'react';


export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <p className="title-bar__sub">{this.props.subtitle}</p>
    }
  }
  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

TitleBar.defaultProps = {

};
