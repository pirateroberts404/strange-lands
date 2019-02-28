import React, { Component } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
	find: find
})

const returnSlug = (route) => {
	const splitRoute = route.split('/')
	const splitLength = splitRoute.length - 1
	return splitRoute[splitLength]
}

const filterProject = (data, pageSlug) => {
	const project = _.find(data, { slug: pageSlug })
	console.log(project )
	return project
}

export default (InnerComponent) => {
	class ProjectWrapper extends Component {
		constructor(props) {
			super(props)
			this.state = {
				project: null
			}
		}
		componentWillMount() {
			this.setState({
				project: filterProject(this.props.strains, this.props.slug)
			})
		}
		render() {
			return (
				<InnerComponent
					{...this.state.project}
				/>
			)
		}
	}
	return connect(
		state => ({
			strains: state.apiData.strains,
			slug: returnSlug(state.routeState)
		})
	)(ProjectWrapper)
}
