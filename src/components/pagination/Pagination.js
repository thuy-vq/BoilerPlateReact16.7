import React, { Component } from 'react';

import { Pagination } from 'antd';

class PaginationTable extends Component {
  render() {
    const { totalElements } = this.props;
    return (
      <div className="pagination-table">
        <Pagination
          total={totalElements || 0}
          showTotal={(total, range) =>
            total > 0
              ? `${range[0]}-${range[1]} of ${total} items`
              : `${range[1]}-${range[1]} of ${total} item`
          }
          showSizeChanger
          onShowSizeChange={this.props.onChange}
          onChange={this.props.onChange}
          pageSizeOptions={['10', '20', '50']}
        />
      </div>
    );
  }
}

export default PaginationTable;
