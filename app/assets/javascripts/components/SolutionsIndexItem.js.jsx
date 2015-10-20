SolutionsIndexItem = React.createClass({
  render: function () {
    var options = {
      lineNumbers: true,
      mode: "ruby",
      theme: "twilight",
      readOnly: true
    };

    return (
      <div className="solutions-index-item">
        <div className="solutions-index-item-author">
          Author: {this.props.dataObject.username}
        </div>
        <ReactCodeMirror
          value={this.props.dataObject.solution.body}
          options={options}/>
        <br/>
      </div>
    );
  }
});
