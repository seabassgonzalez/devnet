import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
	profile: {
		user: { _id, name, avatar },
		status,
		company,
		location,
		skills
	}
}) => {
	return <div>Test</div>;
};

ProfileItem.propTypes = {};

export default ProfileItem;