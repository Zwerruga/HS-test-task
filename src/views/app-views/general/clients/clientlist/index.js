import React, { Component } from 'react'
import { Card, Table, Tag } from 'antd';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { setUserList } from 'redux/actions/Clients'
import Loading from 'components/shared-components/Loading';

export class UserList extends Component {

	componentDidMount() {
		fetch("http://localhost:3000/user-list")
			.then(res => res.json())
			.then(
				(result) => {
					this.props.setUserList(result)
				})
	}



	render() {
		const { location, history } = this.props

		const tableColumns = [{
			title: "User", dataIndex: "name", render: (_, record) => <div className="d-flex">
				<AvatarStatus src={record.img} name={record.name} subTitle={record.email} />
			</div>, sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				}
			}
		}, { title: "Role", dataIndex: "role", sorter: { compare: (a, b) => a.role.length - b.role.length } }, {
			title: "Last online", dataIndex: "lastOnline", render: date => <span>
				{moment.unix(date).format("MM/DD/YYYY")}{" "}
			</span>, sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
		}, {
			title: "Status", dataIndex: "status", render: status => <Tag className="text-capitalize" color={status === "active" ? "cyan" : "red"}>
				{status}
			</Tag>, sorter: { compare: (a, b) => a.status.length - b.status.length }
		}];
		return (

			!this.props.clientList.length ? <Loading cover="content" /> : <Card bodyStyle={{ 'padding': '0px' }}>

				<Table columns={tableColumns} dataSource={this.props.clientList} rowKey='id' onRow={(record) => ({
					onClick: () => history.push(`${location.pathname}/${record.id}`)
				})} />
			</Card>

		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUserList: bindActionCreators(setUserList, dispatch)
	}
}

export default withRouter(connect(s => s.clients, mapDispatchToProps)(UserList))
